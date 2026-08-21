import { GoogleGenAI, Modality, GenerateContentResponse, Type } from "@google/genai";
import { SYSTEM_INSTRUCTION, REFLECTION_INSTRUCTION, SUGGESTION_GENERATION_INSTRUCTION, REFINEMENT_INSTRUCTION } from '../constants/prompts';
import { caseStudies } from '../constants/caseStudies';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

type UploadedFile = {
  name: string;
  content: string; // Text content or base64 data URL for images
  mimeType: string;
  source: 'local' | 'drive';
};

// Types for Grounding
export type GroundingChunk = { web: { uri?: string; title?: string; } } | { maps: { uri?: string; title?: string; placeAnswerSources?: { reviewSnippets?: { uri?: string, content?: string }[] }[] } };
export type GroundingSource = {
  uri: string;
  title: string;
  type: 'web' | 'maps' | 'review';
};

type UserLocation = {
    latitude: number;
    longitude: number;
};


// FIX: Define the Part type to handle both text and inline data for multimodal input.
// This resolves a TypeScript error where the `parts` array was being inferred as `{text: string}[]`,
// which is too narrow when adding image parts (`inlineData`).
type Part = { text: string } | { inlineData: { mimeType: string; data: string; } };

// Fix: Initializing GoogleGenAI using the mandatory named parameter with the API key from process.env.API_KEY.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const fileToGenerativePart = (file: UploadedFile): Part => {
    if (file.mimeType.startsWith('image/')) {
        return {
            inlineData: {
                mimeType: file.mimeType,
                data: file.content.split(',')[1],
            },
        };
    } else {
        return {
            text: `\n--- Attached Document: ${file.name} ---\n${file.content}\n--- End of Document ---`,
        }
    }
};

const caseStudiesContext = `
Here are the core case studies you should be aware of:
${caseStudies.map(cs => `- ${cs.title}: ${cs.description} (Activated by prompt: "${cs.prompt}")`).join('\n')}
`;

/**
 * Gets a standard AI response based on the conversation history and uploaded files.
 */
export const getAiResponse = async (messages: Message[], files: UploadedFile[], userLocation: UserLocation | null): Promise<{ text: string; groundingSources: GroundingSource[] }> => {
    const generateContentRequestContents = messages.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        // FIX: Cast the initial `parts` array to `Part[]` to allow for adding different types of parts later.
        parts: [{ text: msg.content }] as Part[]
    }));
    
    if (files.length > 0) {
        let lastUserMessageIndex = -1;
        for (let i = generateContentRequestContents.length - 1; i >= 0; i--) {
            if (generateContentRequestContents[i].role === 'user') {
                lastUserMessageIndex = i;
                break;
            }
        }
        
        if (lastUserMessageIndex !== -1) {
            const fileParts = files.map(fileToGenerativePart);
            generateContentRequestContents[lastUserMessageIndex].parts.unshift(...fileParts);
        }
    }

    // Grounding Logic
    const lastUserMessage = messages.length > 0 ? messages[messages.length - 1].content.toLowerCase() : '';
    const searchKeywords = ['search for', 'find data on', 'latest', 'demographics', 'statistics', 'recent', 'current', 'news', 'who won', 'what is the population'];
    const mapsKeywords = ['nearby', 'near me', 'restaurants near', 'directions to', 'locations for', 'places in'];

    const needsSearch = searchKeywords.some(kw => lastUserMessage.includes(kw));
    const needsMaps = mapsKeywords.some(kw => lastUserMessage.includes(kw));
    
    // Fix: Using the recommended 'gemini-3-pro-preview' model for complex strategic reasoning tasks.
    let model = 'gemini-3-pro-preview';
    const tools: any[] = [];
    const toolConfig: any = {};

    if (needsSearch || needsMaps) {
        // Fix: Using 'gemini-3-flash-preview' for basic text tasks and grounding.
        model = 'gemini-3-flash-preview';
        if (needsSearch) {
            tools.push({ googleSearch: {} });
        }
        if (needsMaps) {
            tools.push({ googleMaps: {} });
            if (userLocation) {
                toolConfig.retrievalConfig = {
                    latLng: {
                        latitude: userLocation.latitude,
                        longitude: userLocation.longitude,
                    },
                };
            }
        }
    }
    
    const config: any = {
        systemInstruction: `${SYSTEM_INSTRUCTION}\n\n${caseStudiesContext}`,
    };

    if (tools.length > 0) {
        config.tools = tools;
    }
    if (toolConfig.retrievalConfig) {
        config.toolConfig = toolConfig;
    }

    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: generateContentRequestContents,
            config: config,
        });

        const groundingChunks: any[] = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
        const groundingSources: GroundingSource[] = [];

        for (const chunk of groundingChunks) {
            if ('web' in chunk && chunk.web.uri) {
                groundingSources.push({ uri: chunk.web.uri, title: chunk.web.title || 'Web Source', type: 'web' });
            }
            if ('maps' in chunk && chunk.maps.uri) {
                groundingSources.push({ uri: chunk.maps.uri, title: chunk.maps.title || 'Map Location', type: 'maps' });
                chunk.maps.placeAnswerSources?.forEach(source => {
                    source.reviewSnippets?.forEach(review => {
                        if (review.uri) {
                            groundingSources.push({ uri: review.uri, title: `Review: "${review.content.substring(0, 50)}..."`, type: 'review' });
                        }
                    });
                });
            }
        }
        
        // Fix: Using the '.text' property to extract string output from GenerateContentResponse as per guidelines.
        return { text: response.text, groundingSources };

    } catch (error) {
        console.error('Error calling Gemini API:', error);
        if (error instanceof Error) {
            throw new Error(`Gemini API Error: ${error.message}`);
        }
        throw new Error('An unexpected error occurred while communicating with the AI model.');
    }
};

/**
 * Gets a strategic reflection on the conversation so far.
 */
export const getAiReflection = async (messages: Message[]): Promise<string> => {
    if (messages.length === 0) {
        return "There is no conversation to reflect on yet. Please start by outlining your project.";
    }
    // Fix: Updated model name to 'gemini-3-pro-preview'.
    const model = 'gemini-3-pro-preview';

    const generateContentRequestContents = messages.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }] as Part[]
    }));

    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: generateContentRequestContents,
            config: {
                systemInstruction: REFLECTION_INSTRUCTION,
            },
        });
        return response.text;
    } catch (error) {
        console.error('Error calling Gemini API for reflection:', error);
        if (error instanceof Error) {
            throw new Error(`Gemini API Error: ${error.message}`);
        }
        throw new Error('An unexpected error occurred while communicating with the AI model for reflection.');
    }
};

/**
 * Gets a refined version of a specific text block based on user instructions.
 */
export const getAiRefinement = async (originalText: string, refinementPrompt: string): Promise<string> => {
    // Fix: Updated model name to 'gemini-3-pro-preview'.
    const model = 'gemini-3-pro-preview';

    const userPrompt = `
**Original Text:**
---
${originalText}
---

**Instruction:**
${refinementPrompt}
`;

    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
            config: {
                systemInstruction: REFINEMENT_INSTRUCTION,
            },
        });
        return response.text;
    } catch (error) {
        console.error('Error calling Gemini API for refinement:', error);
        if (error instanceof Error) {
            throw new Error(`Gemini API Error: ${error.message}`);
        }
        throw new Error('An unexpected error occurred while refining the text.');
    }
};


/**
 * Gets contextual follow-up suggestions based on the conversation.
 */
export const getAiSuggestions = async (messages: Message[]): Promise<string[]> => {
    if (messages.length < 2) { // Need at least one user and one assistant message
        return [];
    }
    // Fix: Updated model name to 'gemini-3-flash-preview'.
    const model = 'gemini-3-flash-preview';

    const generateContentRequestContents = messages.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }] as Part[]
    }));

    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: generateContentRequestContents,
            config: {
                systemInstruction: SUGGESTION_GENERATION_INSTRUCTION,
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        suggestions: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.STRING,
                            }
                        }
                    }
                }
            },
        });
        
        const jsonText = response.text.trim();
        try {
            const result = JSON.parse(jsonText);
            if (result && Array.isArray(result.suggestions)) {
                return result.suggestions.slice(0, 4); // Limit to 4 suggestions
            }
        } catch (parseError) {
             console.error('Error parsing suggestions JSON:', parseError, 'Raw text:', jsonText);
             return [];
        }
        return [];

    } catch (error) {
        console.error('Error calling Gemini API for suggestions:', error);
        return [];
    }
};

/**
 * Generates speech from text using the Gemini TTS model.
 * @param text The text to convert to speech.
 * @returns A base64 encoded string of the audio data.
 */
export const getTextToSpeech = async (text: string): Promise<string> => {
    // Fix: Correct model for TTS tasks as per guidelines.
    const model = 'gemini-2.5-flash-preview-tts';
    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: [{ parts: [{ text: `Say with a professional and clear voice: ${text}` }] }],
            config: {
                responseModalities: [Modality.AUDIO],
                speechConfig: {
                    voiceConfig: {
                        prebuiltVoiceConfig: { voiceName: 'Kore' },
                    },
                },
            },
        });

        const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
        if (!base64Audio) {
            throw new Error('No audio data received from TTS API.');
        }
        return base64Audio;
    } catch (error) {
        console.error('Error calling Gemini TTS API:', error);
        if (error instanceof Error) {
            throw new Error(`Gemini TTS API Error: ${error.message}`);
        }
        throw new Error('An unexpected error occurred while generating speech.');
    }
};
