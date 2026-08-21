import React, { useState, useCallback, useEffect, useRef } from 'react';
import { getAiResponse, getAiReflection, getTextToSpeech, getAiSuggestions, getAiRefinement, GroundingSource } from './geminiService';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { IntegrationsPanel } from './IntegrationsPanel';
import { GoogleDrivePicker } from './GoogleDrivePicker';
import { FeedbackModal } from './FeedbackModal';
import { caseStudies } from './caseStudies';
// Added ArrowRight to the imports from lucide-react
import { Loader, Send, ThumbsUp, ThumbsDown, RefreshCw, Paperclip, Edit, Copy, Check, Mic, MicOff, Star, DownloadCloud, Printer, FileText, BrainCircuit, X, Volume2, StopCircle, PenSquare, Megaphone, Globe, MapPin, Sparkles, LayoutTemplate, ArrowRight } from 'lucide-react';

export type Message = {
  role: 'user' | 'assistant';
  content: string;
  sources?: GroundingSource[];
};

export type Chat = {
  title: string;
  messages: Message[];
  lastUpdated: Date;
};

export type UploadedFile = {
  name: string;
  content: string; // Text content or base64 data URL for images
  mimeType: string;
  source: 'local' | 'drive';
};

export type IntegrationStates = {
  googleDrive: boolean;
  googleDocs: boolean;
  googleSheets: boolean;
  zapier: boolean;
};

const GREETING_MESSAGE_FULL = "I am Vera, your strategic partner in architecting fundable, executable systems. My purpose is to help you transform your vision for community change into a tangible, impactful reality.\n\nTo begin, select a strategic prompt, use the generator below to start from a framework, or describe the system you intend to build.";

const GREETING_MESSAGE: Message = {
  role: 'assistant',
  content: GREETING_MESSAGE_FULL
};

// Local SVG icon components for consistency
const GoogleDocsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z" fill="#2984F4"/><path d="M13 9V3.5L18.5 9H13z" fill="#73A9F5"/><path d="M16 17H8v-2h8v2zm0-4H8v-2h8v2z" fill="#FFF"/></svg>
);
const GoogleSheetsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z" fill="#0F9D58"/><path d="M13 9V3.5L18.5 9H13z" fill="#52C48D"/><path d="M11 18h2v-4h4v-2h-4v-4h-2v4H7v2h4v4z" fill="#FFF"/></svg>
);


type StudioProps = {
  onNavigateHome: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  initialPrompt?: string;
}

const markdownToHtml = (markdown: string): string => {
    // Remove the <questions> block before rendering
    const cleanMarkdown = markdown.replace(/<questions>.*?<\/questions>/s, '');
    
    const lines = cleanMarkdown.split('\n');
    let html = '';
    let inList: 'ul' | 'ol' | null = null;
    let inCodeBlock = false;
    let inTable = false;

    // Fix: Using lines.length instead of lines.i to iterate over the lines array.
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];

        // Code blocks
        if (line.startsWith('```')) {
            if(inList) { html += `</${inList}>\n`; inList = null; }
            if(inTable) { html += '</tbody></table>\n'; inTable = false; }

            if (inCodeBlock) {
                html += '</code></pre>\n';
                inCodeBlock = false;
            } else {
                inCodeBlock = true;
                const lang = line.substring(3).trim();
                html += `<pre><code class="language-${lang}">`;
            }
            continue;
        }
        if (inCodeBlock) {
            html += line.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '\n';
            continue;
        }

        // Table handling
        const isTableRow = line.includes('|');
        if (!inTable && isTableRow && lines[i+1] && lines[i+1].match(/^\|?.*-.*\|?$/)) {
            if(inList) { html += `</${inList}>\n`; inList = null; }
            inTable = true;
            html += '<table><thead><tr>';
            line.split('|').map(s => s.trim()).filter(Boolean).forEach(header => {
                html += `<th>${header}</th>`;
            });
            html += '</tr></thead><tbody>';
            i++; // Skip separator line
            continue;
        }
        if (inTable && isTableRow) {
            html += '<tr>';
            line.split('|').map(s => s.trim()).filter(Boolean).forEach(cell => {
                html += `<td>${cell}</td>`;
            });
            html += '</tr>';
            continue;
        }
        if (inTable && !isTableRow) {
            html += '</tbody></table>\n';
            inTable = false;
        }

        // Lists
        const ulMatch = line.match(/^(\s*)[*+-] (.*)/);
        const olMatch = line.match(/^(\s*)\d+\. (.*)/);
        if (!ulMatch && !olMatch && inList) {
            html += `</${inList}>\n`;
            inList = null;
        }
        if (ulMatch) {
            if (inList !== 'ul') {
                if(inList) { html += `</${inList}>\n`; }
                html += '<ul>\n';
                inList = 'ul';
            }
            html += `<li>${ulMatch[2]}</li>\n`;
            continue;
        }
        if (olMatch) {
            if (inList !== 'ol') {
                 if(inList) { html += `</${inList}>\n`; }
                html += '<ol>\n';
                inList = 'ol';
            }
            html += `<li>${olMatch[2]}</li>\n`;
            continue;
        }

        // Headings
        if (line.startsWith('#')) {
            const level = line.match(/^#+/)[0].length;
            html += `<h${level}>${line.substring(level).trim()}</h${level}>\n`;
            continue;
        }
        
        // Paragraphs
        if (line.trim().length > 0) {
            html += `<p>${line}</p>\n`;
        }
    }
    
    // Close any remaining open tags
    if (inList) html += `</${inList}>\n`;
    if (inCodeBlock) html += '</code></pre>\n';
    if (inTable) html += '</tbody></table>\n';

    // Inline formatting
    return html
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/_(.*?)_/g, '<em>$1</em>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`(.*?)`/g, '<code>$1</code>');
};

const ReflectionModal = ({ content, onClose, isVisible }: { content: string, onClose: () => void, isVisible: boolean }) => {
    if (!isVisible) return null;
    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={onClose}>
            <div className="bg-white dark:bg-seed-surface-dark w-full max-w-2xl rounded-xl shadow-2xl flex flex-col relative max-h-[80vh]" onClick={e => e.stopPropagation()}>
                <header className="p-4 border-b border-seed-text-primary/10 dark:border-seed-border-dark flex items-center justify-between flex-shrink-0">
                    <div className="flex items-center gap-3">
                        <BrainCircuit className="text-seed-accent-green" />
                        <h2 className="text-lg font-semibold text-seed-text-primary dark:text-seed-text-primary-dark-theme">Strategic Reflection</h2>
                    </div>
                    <button onClick={onClose} className="p-1 rounded-full text-seed-text-secondary/60 hover:bg-seed-text-primary/10 dark:text-seed-text-secondary-dark-theme/60 dark:hover:bg-seed-border-dark">
                        <X size={20} />
                    </button>
                </header>
                <div className="flex-grow overflow-y-auto p-6">
                     <div className="prose prose-stone dark:prose-invert max-w-none text-seed-text-secondary dark:text-seed-text-secondary-dark-theme" dangerouslySetInnerHTML={{ __html: markdownToHtml(content) }} />
                </div>
            </div>
        </div>
    );
};

// Audio Decoding/Encoding Helpers
function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

export type InquiryQuestion = {
    question: string;
    options: string[];
};

const ContextInquiryForm: React.FC<{ questions: InquiryQuestion[]; onSubmit: (answers: string) => Promise<void>; }> = ({ questions, onSubmit }) => {
    const [answers, setAnswers] = useState(Array(questions.length).fill(''));
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleAnswerChange = (index: number, value: string) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formattedResponse = "Here are my answers to your initial questions:\n\n" + 
            questions.map((q, i) => `Question: ${q.question}\nAnswer: ${answers[i] || 'Not provided'}`).join('\n\n');
        
        onSubmit(formattedResponse).finally(() => setIsSubmitting(false));
    };

    return (
        <div className="max-w-3xl ml-12 mt-4 animate-fade-in">
            <form onSubmit={handleSubmit} className="bg-white dark:bg-seed-surface-dark p-6 rounded-xl border border-seed-accent-green/30 dark:border-seed-border-dark shadow-md">
                <h3 className="text-lg font-semibold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-4">Please provide more context</h3>
                <div className="space-y-6">
                    {questions.map((q, i) => (
                        <div key={i} className="space-y-3">
                            <label className="block text-sm font-medium text-seed-text-secondary dark:text-seed-text-secondary-dark-theme">{q.question}</label>
                            
                            {/* Suggested Options */}
                            <div className="flex flex-wrap gap-2">
                                {q.options.map((option) => (
                                    <button
                                        key={option}
                                        type="button"
                                        onClick={() => handleAnswerChange(i, option)}
                                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition border ${answers[i] === option ? 'bg-seed-accent-green text-white border-seed-accent-green' : 'bg-seed-bg dark:bg-seed-bg-dark text-seed-text-secondary dark:text-seed-text-secondary-dark-theme border-seed-text-primary/10 dark:border-seed-border-dark hover:border-seed-accent-green'}`}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>

                             <div className="relative mt-2">
                                <textarea
                                    id={`question-${i}`}
                                    value={answers[i]}
                                    onChange={(e) => handleAnswerChange(i, e.target.value)}
                                    rows={2}
                                    className="block w-full rounded-md bg-seed-bg dark:bg-seed-bg-dark border-seed-text-primary/20 dark:border-seed-border-dark focus:ring-seed-accent-green focus:border-seed-accent-green shadow-sm text-sm"
                                    placeholder="Type your answer or select an option above..."
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-end pt-6">
                    <button type="submit" disabled={isSubmitting} className="flex items-center justify-center bg-seed-accent-green text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-seed-accent-green-dark transition disabled:bg-seed-accent-green/50">
                        {isSubmitting ? <><Loader size={18} className="animate-spin mr-2" /> Sending...</> : 'Send Answers'}
                    </button>
                </div>
            </form>
        </div>
    );
};

// --- Framework Generator Component ---
const FrameworkGenerator: React.FC<{ onGenerate: (prompt: string) => void }> = ({ onGenerate }) => {
    const [selectedFramework, setSelectedFramework] = useState('');
    const [selectedDocType, setSelectedDocType] = useState('');

    const handleGenerateClick = () => {
        if (!selectedFramework || !selectedDocType) return;
        const prompt = `I need to generate a ${selectedDocType} using the ${selectedFramework}. Please guide me through the drafting process, starting with the first section appropriate for this framework. Apply the specific principles of this framework (e.g., if Reentry, focus on Housing First and employment; if WCS, focus on the 9 pillars).`;
        onGenerate(prompt);
    };

    return (
        <div className="bg-white dark:bg-seed-surface-dark p-6 rounded-xl shadow-md border border-seed-text-primary/10 dark:border-seed-border-dark mt-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
                <LayoutTemplate className="text-seed-accent-green" />
                <h3 className="text-lg font-semibold text-seed-text-primary dark:text-seed-text-primary-dark-theme">Generate From Framework</h3>
            </div>
            <p className="text-sm text-seed-text-secondary dark:text-seed-text-secondary-dark-theme mb-6">
                Start a new document from scratch by selecting a foundational framework and document type.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                    <label className="block text-sm font-medium text-seed-text-secondary dark:text-seed-text-secondary-dark-theme mb-1">Select Framework</label>
                    <select 
                        value={selectedFramework} 
                        onChange={(e) => setSelectedFramework(e.target.value)}
                        className="w-full p-2.5 rounded-lg bg-seed-bg dark:bg-seed-bg-dark border border-seed-text-primary/20 dark:border-seed-border-dark focus:ring-2 focus:ring-seed-accent-green text-sm"
                    >
                        <option value="">-- Choose Framework --</option>
                        <option value="Whole Community Solution (WCS)">Whole Community Solution (WCS)</option>
                        <option value="Reentry Demonstration Framework">Reentry Demonstration Framework</option>
                        <option value="360-Degree Holistic Care Model">360-Degree Holistic Care Model</option>
                        <option value="Housing First">Housing First</option>
                        <option value="Sequential Intercept Model">Sequential Intercept Model</option>
                    </select>
                </div>
                 <div>
                    <label className="block text-sm font-medium text-seed-text-secondary dark:text-seed-text-secondary-dark-theme mb-1">Document Type</label>
                    <select 
                        value={selectedDocType} 
                        onChange={(e) => setSelectedDocType(e.target.value)}
                        className="w-full p-2.5 rounded-lg bg-seed-bg dark:bg-seed-bg-dark border border-seed-text-primary/20 dark:border-seed-border-dark focus:ring-2 focus:ring-seed-accent-green text-sm"
                    >
                        <option value="">-- Choose Document Type --</option>
                        <option value="Business Plan">Business Plan</option>
                        <option value="Community Action Plan">Community Action Plan</option>
                        <option value="Grant Proposal">Grant Proposal</option>
                        <option value="Strategic Plan">Strategic Plan</option>
                        <option value="Policies & Procedures Manual">Policies & Procedures Manual</option>
                        <option value="Bylaws">Bylaws</option>
                    </select>
                </div>
            </div>
            <div className="flex justify-end">
                <button 
                    onClick={handleGenerateClick}
                    disabled={!selectedFramework || !selectedDocType}
                    className="flex items-center gap-2 bg-seed-text-primary dark:bg-seed-accent-green text-white dark:text-seed-text-primary px-5 py-2.5 rounded-lg font-semibold hover:bg-seed-text-primary-dark transition disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                    <Sparkles size={16} /> Generate Draft
                </button>
            </div>
        </div>
    );
};


export const Studio: React.FC<StudioProps> = ({ onNavigateHome, theme, toggleTheme, initialPrompt }) => {
  const [chats, setChats] = useState<Chat[]>([{ title: 'New Chat', messages: [], lastUpdated: new Date() }]);
  const [activeChatIndex, setActiveChatIndex] = useState(0);
  const [userInput, setUserInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [copiedMessageIndex, setCopiedMessageIndex] = useState<number | null>(null);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [integrations, setIntegrations] = useState<IntegrationStates>({
    googleDrive: false,
    googleDocs: false,
    googleSheets: false,
    zapier: false,
  });
  const [isDrivePickerOpen, setIsDrivePickerOpen] = useState(false);
  const [showExportToast, setShowExportToast] = useState<string | null>(null);
  const [isReflecting, setIsReflecting] = useState<boolean>(false);
  const [isReflectionModalOpen, setIsReflectionModalOpen] = useState<boolean>(false);
  const [reflectionContent, setReflectionContent] = useState<string>('');
  const [currentlyPlaying, setCurrentlyPlaying] = useState<{index: number; source: AudioBufferSourceNode | null} | null>(null);
  const [followUpPrompts, setFollowUpPrompts] = useState<string[]>([]);
  const [isGeneratingSuggestions, setIsGeneratingSuggestions] = useState<boolean>(false);
  const [refinementState, setRefinementState] = useState<{ index: number; content: string } | null>(null);
  const [isRefining, setIsRefining] = useState(false);
  const [inquiryQuestions, setInquiryQuestions] = useState<InquiryQuestion[] | null>(null);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [isIntegrationsOpen, setIsIntegrationsOpen] = useState(false);
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number; } | null>(null);


  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const isInitialLoad = useRef(true);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<any>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const initialPromptRef = useRef(initialPrompt);
  const activeChat = chats[activeChatIndex];

  // Get Geolocation for Maps Grounding
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (err) => {
          console.warn(`Geolocation error: ${err.message}`);
          setError("Could not get location. Map-based results may be less accurate.");
          setTimeout(() => setError(null), 5000);
        }
      );
    }
  }, []);

  // Setup Speech Recognition
  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      
      recognition.onresult = (event: any) => {
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          }
        }
        setUserInput(prev => prev + finalTranscript);
      };

      recognition.onerror = (event: any) => {
        setError(`Speech recognition error: ${event.error}`);
        setIsRecording(false);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };
      
      recognitionRef.current = recognition;
    } else {
      console.warn("Speech recognition not supported in this browser.");
    }
  }, []);

  useEffect(() => {
    setFollowUpPrompts([]);
    setInquiryQuestions(null);
  }, [activeChatIndex]);

  const handleToggleRecording = () => {
    if (!recognitionRef.current) return;
    if (isRecording) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }
    setIsRecording(!isRecording);
  };
  
  const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    for (const file of files) {
        const reader = new FileReader();

        reader.onload = (e) => {
            const content = e.target?.result as string;
            if (!content) return;
            setUploadedFiles(prev => [...prev, { name: file.name, content, mimeType: file.type || 'application/octet-stream', source: 'local' }]);
        };
        
        reader.onerror = () => {
             setError(`Failed to read file: ${file.name}`);
        };

        if (file.type.startsWith('image/')) {
            reader.readAsDataURL(file);
        } else if (file.type === 'application/pdf' || file.type.includes('word') || file.type.includes('spreadsheet')) {
            // Use placeholder for complex docs to avoid binary garbage in text and heavy client-side processing
            const placeholderContent = `[Content for ${file.name} has been uploaded for context.]`;
            setUploadedFiles(prev => [...prev, { name: file.name, content: placeholderContent, mimeType: 'text/plain', source: 'local' }]);
        }
        else {
            reader.readAsText(file);
        }
    }

    if (event.target) {
        event.target.value = '';
    }
  }, [setUploadedFiles]);
  
  const handleDriveFileSelect = (file: {name: string, content: string}) => {
    setUploadedFiles(prev => [...prev, { ...file, mimeType: 'text/plain', source: 'drive' }]);
    setIsDrivePickerOpen(false);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    if (isInitialLoad.current && chats.length === 1 && chats[0].messages.length === 0 && !initialPrompt) {
        isInitialLoad.current = false;
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < GREETING_MESSAGE_FULL.length) {
                const partialContent = GREETING_MESSAGE_FULL.substring(0, i + 1);
                 setChats(currentChats => {
                    const newChats = [...currentChats];
                    newChats[0] = { ...newChats[0], messages: [{ role: 'assistant', content: partialContent }], lastUpdated: new Date() };
                    return newChats;
                });
                i++;
            } else { clearInterval(typingInterval); }
        }, 25);
        return () => clearInterval(typingInterval);
    }
  }, [initialPrompt]);

  useEffect(scrollToBottom, [activeChat?.messages, isLoading, inquiryQuestions]);
  
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const scrollHeight = textareaRef.current.scrollHeight;
      const maxHeight = 200;
      textareaRef.current.style.height = `${Math.min(scrollHeight, maxHeight)}px`;
      textareaRef.current.style.overflowY = scrollHeight > maxHeight ? 'auto' : 'hidden';
    }
  }, [userInput]);

  const handleSend = useCallback(async (prompt?: string) => {
    const messageToSend = prompt || userInput;
    if (!messageToSend.trim() || isLoading) return;
    if (isRecording) handleToggleRecording();
    
    setFollowUpPrompts([]); 
    setInquiryQuestions(null);
    const currentChat = chats[activeChatIndex];
    const newMessages: Message[] = [...currentChat.messages, { role: 'user', content: messageToSend }];
    
    const newChats = [...chats];
    const isNewChat = currentChat.messages.length <= 1;
    newChats[activeChatIndex] = {
      ...currentChat,
      title: isNewChat ? messageToSend.substring(0, 30) + (messageToSend.length > 30 ? '...' : '') : currentChat.title,
      messages: newMessages, lastUpdated: new Date(),
    };
    setChats(newChats);
    setUserInput('');
    setIsLoading(true);
    setError(null);

    // Fix: Declaring finalMessages before the try block to ensure it is in scope for the catch block and nested processing.
    let finalMessages: Message[] = [];

    try {
      const { text, groundingSources } = await getAiResponse(newMessages, uploadedFiles, userLocation);
      const assistantMessage: Message = { role: 'assistant', content: text, sources: groundingSources };
      finalMessages = [...newMessages, assistantMessage];
      setChats(prev => {
        const updatedChats = [...prev];
        updatedChats[activeChatIndex] = {...updatedChats[activeChatIndex], messages: finalMessages, lastUpdated: new Date()};
        return updatedChats;
      });

      const questionBlockRegex = /<questions>(.*?)<\/questions>/s;
      // FIX: Corrected variable name in match call to use questionBlockRegex instead of the uninitialized match variable.
      const match = text.match(questionBlockRegex);

      if (match && match[1]) {
          try {
              const questions = JSON.parse(match[1]);
              if (Array.isArray(questions)) {
                  // Handle both string array (legacy) and object array (new)
                  const normalizedQuestions: InquiryQuestion[] = questions.map(q => {
                      if (typeof q === 'string') return { question: q, options: [] };
                      return q as InquiryQuestion;
                  });
                  setInquiryQuestions(normalizedQuestions);
              } else {
                  throw new Error("Parsed JSON is not an array.");
              }
          } catch (e) {
              console.error("Failed to parse inquiry questions JSON:", e, "Raw content:", match[1]);
              setIsGeneratingSuggestions(true);
              const suggestions = await getAiSuggestions(finalMessages);
              setFollowUpPrompts(suggestions);
          }
      } else {
          setIsGeneratingSuggestions(true);
          const suggestions = await getAiSuggestions(finalMessages);
          setFollowUpPrompts(suggestions);
      }

    } catch (err: any) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred. Please try again.';
      setError(errorMessage);
       setChats(prev => {
        const updatedChats = [...prev];
        const errorAssistantMessage: Message = { role: 'assistant', content: errorMessage };
        // Fix: Update the finalMessages variable for the error state.
        finalMessages = [...newMessages, errorAssistantMessage];
        updatedChats[activeChatIndex] = {...updatedChats[activeChatIndex], messages: finalMessages, lastUpdated: new Date()};
        return updatedChats;
      });
    } finally {
      setIsLoading(false);
      setIsGeneratingSuggestions(false);
    }
  }, [userInput, chats, activeChatIndex, isLoading, uploadedFiles, isRecording, userLocation]);
  
  useEffect(() => {
    if (initialPromptRef.current) {
      handleSend(initialPromptRef.current);
      initialPromptRef.current = undefined; // Ensure it only runs once
    }
  }, [handleSend]);

  const handleRegenerate = useCallback(async () => {
    if (isLoading || !activeChat) return;
    
    let lastUserMessageIndex = -1;
    for (let i = activeChat.messages.length - 1; i >= 0; i--) {
      if (activeChat.messages[i].role === 'user') {
        lastUserMessageIndex = i;
        break;
      }
    }
    
    if (lastUserMessageIndex === -1) return;
    
    setFollowUpPrompts([]); // Clear old prompts
    setInquiryQuestions(null);
    const messagesForRequest = activeChat.messages.slice(0, lastUserMessageIndex + 1);
    setIsLoading(true);
    setError(null);
    
    const newMessagesWithoutLastResponse = activeChat.messages.slice(0, lastUserMessageIndex + 1);
     setChats(prev => {
        const updatedChats = [...prev];
        updatedChats[activeChatIndex] = {...updatedChats[activeChatIndex], messages: newMessagesWithoutLastResponse, lastUpdated: new Date()};
        return updatedChats;
      });

    // Fix: Declaring finalMessages before the try block to ensure it is in scope for the catch block and nested processing.
    let finalMessages: Message[] = [];

    try {
      const { text, groundingSources } = await getAiResponse(messagesForRequest, uploadedFiles, userLocation);
       const assistantMessage: Message = { role: 'assistant', content: text, sources: groundingSources };
       finalMessages = [...newMessagesWithoutLastResponse, assistantMessage];
       setChats(prev => {
        const updatedChats = [...prev];
        updatedChats[activeChatIndex] = {...updatedChats[activeChatIndex], messages: finalMessages, lastUpdated: new Date()};
        return updatedChats;
      });

      // Check for inquiry questions or generate suggestions
      const questionBlockRegex = /<questions>(.*?)<\/questions>/s;
      // FIX: Corrected variable name in match call to use questionBlockRegex instead of the uninitialized match variable.
      const match = text.match(questionBlockRegex);
      if (match && match[1]) {
          try {
            const questions = JSON.parse(match[1]);
            const normalizedQuestions: InquiryQuestion[] = Array.isArray(questions) 
                ? questions.map(q => typeof q === 'string' ? { question: q, options: [] } : q as InquiryQuestion)
                : [];
            setInquiryQuestions(normalizedQuestions);
          } catch (e) {
            console.error("Failed to parse inquiry questions JSON:", e);
            setIsGeneratingSuggestions(true);
            const suggestions = await getAiSuggestions(finalMessages);
            setFollowUpPrompts(suggestions);
          }
      } else {
          setIsGeneratingSuggestions(true);
          const suggestions = await getAiSuggestions(finalMessages);
          setFollowUpPrompts(suggestions);
      }

    } catch (err: any) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred. Please try again.';
      setError(errorMessage);
       setChats(prev => {
        const updatedChats = [...prev];
        const errorAssistantMessage: Message = { role: 'assistant', content: errorMessage };
        // Fix: Update the finalMessages variable for the error state.
        finalMessages = [...newMessagesWithoutLastResponse, errorAssistantMessage];
        updatedChats[activeChatIndex] = {...updatedChats[activeChatIndex], messages: finalMessages, lastUpdated: new Date()};
        return updatedChats;
      });
    } finally {
      setIsLoading(false);
      setIsGeneratingSuggestions(false);
    }
  }, [activeChat, isLoading, uploadedFiles, activeChatIndex, userLocation]);
  
  const handleReflect = useCallback(async () => {
    if (isLoading || isReflecting || !activeChat) return;

    const messagesToReflect = activeChat.messages.filter(
        (msg) => msg.content !== GREETING_MESSAGE_FULL
    );

    if (messagesToReflect.length < 1) {
        setError("Not enough conversation to reflect upon.");
        setTimeout(() => setError(null), 3000);
        return;
    }

    setIsReflecting(true);
    setError(null);
    try {
        const reflection = await getAiReflection(messagesToReflect);
        setReflectionContent(reflection);
        setIsReflectionModalOpen(true);
    } catch (err: any) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to get reflection.';
        setError(errorMessage);
    } finally {
        setIsReflecting(false);
    }
}, [activeChat, isLoading, isReflecting]);


  const handleNewChat = () => {
    setChats(prev => [...prev, { title: 'New Chat', messages: [GREETING_MESSAGE], lastUpdated: new Date() }]);
    setActiveChatIndex(chats.length);
    setError(null);
  };
  
  const handleDeleteChat = (index: number) => {
    if (chats.length === 1) {
      setChats([{ title: 'New Chat', messages: [GREETING_MESSAGE], lastUpdated: new Date() }]);
      setActiveChatIndex(0);
    } else {
      const newChats = chats.filter((_, i) => i !== index);
      setChats(newChats);
      setActiveChatIndex(prev => Math.max(0, prev >= index ? prev - 1 : prev));
    }
  };

  const handleRenameChat = (index: number, newTitle: string) => {
    if (!newTitle.trim()) return;
    setChats(prev => {
        const updatedChats = [...prev];
        updatedChats[index] = { ...updatedChats[index], title: newTitle.trim(), lastUpdated: new Date() };
        return updatedChats;
    });
  };

  const handleEditLastMessage = () => {
    if (!activeChat) return;
    
    let lastUserMessageIndex = -1;
    for (let i = activeChat.messages.length - 1; i >= 0; i--) {
      if (activeChat.messages[i].role === 'user') {
        lastUserMessageIndex = i;
        break;
      }
    }
    
    if (lastUserMessageIndex === -1 || activeChat.messages.length <= lastUserMessageIndex + 1 || activeChat.messages[lastUserMessageIndex + 1].role !== 'assistant') return;

    const userMessageToEdit = activeChat.messages[lastUserMessageIndex];
    setUserInput(userMessageToEdit.content);
    textareaRef.current?.focus();

    const newMessages = activeChat.messages.slice(0, lastUserMessageIndex);
    setChats(prev => {
        const updatedChats = [...prev];
        updatedChats[activeChatIndex] = {...updatedChats[activeChatIndex], messages: newMessages, lastUpdated: new Date()};
        return updatedChats;
    });
  };
  
  const handleCopy = (content: string, index: number) => {
    navigator.clipboard.writeText(content);
    setCopiedMessageIndex(index);
    setTimeout(() => setCopiedMessageIndex(null), 2000);
  };

  const handleRefinementSubmit = async (prompt: string) => {
    if (!refinementState || isRefining) return;

    setIsRefining(true);
    setError(null);
    const { index, content } = refinementState;

    try {
        const refinedContent = await getAiRefinement(content, prompt);
        setChats(prev => {
            const updatedChats = [...prev];
            const updatedMessages = [...updatedChats[activeChatIndex].messages];
            updatedMessages[index] = { ...updatedMessages[index], content: refinedContent };
            updatedChats[activeChatIndex] = { ...updatedChats[activeChatIndex], messages: updatedMessages, lastUpdated: new Date() };
            return updatedChats;
        });
    } catch (err: any) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to refine content.';
        setError(errorMessage);
    } finally {
        setIsRefining(false);
        setRefinementState(null);
    }
  };

  const handleExport = (service: string) => {
    setShowExportToast(`Successfully exported to ${service}!`);
    setTimeout(() => setShowExportToast(null), 3000);
  };
  
  const handleDownload = (content: string, format: 'pdf' | 'md' | 'txt') => {
    const chatTitle = activeChat.title.replace(/[^a-z0-9]/gi, '_').toLowerCase() || 'seed_export';
    const fileName = `${chatTitle}.${format}`;

    const downloadBlob = (blob: Blob, name: string) => {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    };

    switch (format) {
      case 'txt':
      case 'md': {
        const blob = new Blob([content], { type: format === 'txt' ? 'text/plain;charset=utf-8' : 'text/markdown;charset=utf-8' });
        downloadBlob(blob, fileName);
        break;
      }
      case 'pdf': {
        const printWindow = window.open('', '_blank');
        if (printWindow) {
          const contentAsHtml = markdownToHtml(content);
          printWindow.document.write(`
            <html>
                <head>
                    <title>${activeChat.title}</title>
                    <script src="https://cdn.tailwindcss.com"></script>
                    <link rel="preconnect" href="https://fonts.googleapis.com">
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet">
                    <style>
                      body { font-family: 'Inter', sans-serif; }
                      pre { background-color: #f3f4f6; padding: 1rem; border-radius: 0.5rem; white-space: pre-wrap; word-wrap: break-word; }
                      code { font-family: monospace; }
                      table { width: 100%; border-collapse: collapse; }
                      th, td { border: 1px solid #ddd; padding: 8px; }
                      th { background-color: #f2f2f2; }
                    </style>
                </head>
                <body class="p-8">
                    <div class="prose prose-stone max-w-none">
                        <h1>${activeChat.title}</h1>
                        <hr />
                        ${contentAsHtml}
                    </div>
                    <script>
                        window.onload = function() {
                          // A short delay helps ensure styles are applied before printing
                          setTimeout(function() {
                            window.print();
                            window.onafterprint = function() { window.close(); }
                          }, 250);
                        }
                    </script>
                </body>
            </html>
          `);
          printWindow.document.close();
        } else {
          setError("Could not open a new window. Please check your browser's pop-up settings.");
        }
        break;
      }
    }
    setShowExportToast(`Downloaded as ${format.toUpperCase()}!`);
    setTimeout(() => setShowExportToast(null), 3000);
  };

  const handlePlayAudio = async (text: string, index: number) => {
    if (currentlyPlaying) {
        currentlyPlaying.source?.stop();
        if (currentlyPlaying.index === index) {
            setCurrentlyPlaying(null);
            return; 
        }
    }

    if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
    }
    const audioContext = audioContextRef.current;

    try {
        setCurrentlyPlaying({ index, source: null }); // Show loading state
        const base64Audio = await getTextToSpeech(text);
        const audioData = decode(base64Audio);
        const audioBuffer = await decodeAudioData(audioData, audioContext, 24000, 1);
        
        const source = audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContext.destination);
        source.start();

        source.onended = () => {
            setCurrentlyPlaying(prev => (prev?.index === index ? null : prev));
        };
        
        setCurrentlyPlaying({ index, source });

    } catch (err: any) {
        setError(err instanceof Error ? err.message : 'Failed to play audio.');
        setCurrentlyPlaying(null);
    }
};

const RefinementModal = ({ state, onClose, onSubmit, isProcessing }: { state: { index: number; content: string } | null, onClose: () => void, onSubmit: (prompt: string) => void, isProcessing: boolean }) => {
    const [prompt, setPrompt] = useState('');

    useEffect(() => {
        if (state) {
            setPrompt(''); // Reset prompt when a new message is selected
        }
    }, [state]);

    if (!state) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(prompt);
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in" onClick={onClose}>
            <div className="bg-white dark:bg-seed-surface-dark w-full max-w-3xl rounded-xl shadow-2xl flex flex-col relative max-h-[90vh]" onClick={e => e.stopPropagation()}>
                <header className="p-4 border-b border-seed-text-primary/10 dark:border-seed-border-dark flex items-center justify-between flex-shrink-0">
                    <div className="flex items-center gap-3">
                        <PenSquare className="text-seed-accent-green" />
                        <h2 className="text-lg font-semibold text-seed-text-primary dark:text-seed-text-primary-dark-theme">Refine Document Section</h2>
                    </div>
                    <button onClick={onClose} className="p-1 rounded-full text-seed-text-secondary/60 hover:bg-seed-text-primary/10 dark:text-seed-text-secondary-dark-theme/60 dark:hover:bg-seed-border-dark">
                        <X size={20} />
                    </button>
                </header>
                <div className="flex-grow p-6 overflow-y-auto">
                    <div className="mb-4">
                        <label className="text-sm font-medium text-seed-text-secondary dark:text-seed-text-secondary-dark-theme">Original Text</label>
                        <div className="mt-1 p-3 bg-seed-bg dark:bg-seed-bg-dark rounded-md border border-seed-text-primary/10 dark:border-seed-border-dark max-h-48 overflow-y-auto text-sm">
                            <div className="prose prose-sm dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: markdownToHtml(state.content) }}/>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="refinement-prompt" className="text-sm font-medium text-seed-text-secondary dark:text-seed-text-secondary-dark-theme">Describe your desired changes</label>
                        <textarea
                            id="refinement-prompt"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            rows={4}
                            className="mt-1 block w-full rounded-md bg-seed-bg dark:bg-seed-bg-dark border-seed-text-primary/20 dark:border-seed-border-dark focus:ring-seed-accent-green focus:border-seed-accent-green shadow-sm"
                            placeholder="e.g., Make this section more concise, add a paragraph about potential risks, change the tone to be more formal..."
                        />
                         <div className="flex justify-end pt-4">
                            <button type="submit" disabled={isProcessing || !prompt.trim()} className="flex items-center justify-center bg-seed-accent-green text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-seed-accent-green-dark transition disabled:bg-seed-accent-green/50">
                                {isProcessing ? <><Loader size={18} className="animate-spin mr-2" /> Refining...</> : 'Refine Text'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

  const lastMessageIsAssistant = activeChat?.messages[activeChat.messages.length - 1]?.role === 'assistant';

  return (
    <div className="flex flex-col h-screen bg-seed-bg dark:bg-seed-bg-dark text-seed-text-secondary dark:text-seed-text-secondary-dark-theme font-sans overflow-x-hidden">
      {/* Fix: Added missing required 'currentPage' prop */}
      <Header mode="studio" onNavigateHome={onNavigateHome} theme={theme} toggleTheme={toggleTheme} currentPage="studio" onOpenIntegrations={() => setIsIntegrationsOpen(true)} onOpenFeedback={() => setIsFeedbackModalOpen(true)} />
      {isDrivePickerOpen && <GoogleDrivePicker onSelectFile={handleDriveFileSelect} onClose={() => setIsDrivePickerOpen(false)} />}
      <ReflectionModal content={reflectionContent} isVisible={isReflectionModalOpen} onClose={() => setIsReflectionModalOpen(false)} />
      <RefinementModal state={refinementState} onClose={() => setRefinementState(null)} onSubmit={handleRefinementSubmit} isProcessing={isRefining} />
      <FeedbackModal isOpen={isFeedbackModalOpen} onClose={() => setIsFeedbackModalOpen(false)} />

      {showExportToast && (
        <div className="absolute top-20 right-1/2 translate-x-1/2 bg-seed-accent-green text-white px-4 py-2 rounded-lg shadow-lg z-50 text-sm animate-fade-in">
          {showExportToast}
        </div>
      )}
      <main className="flex-grow w-full max-w-[1920px] mx-auto p-4 overflow-hidden flex gap-4">
        <Sidebar 
          chats={chats} activeChatIndex={activeChatIndex}
          onNewChat={handleNewChat} onSelectChat={setActiveChatIndex}
          onDeleteChat={handleDeleteChat}
          onRenameChat={handleRenameChat}
          onOpenFeedback={() => setIsFeedbackModalOpen(true)}
          onOpenIntegrations={() => setIsIntegrationsOpen(true)}
        />
        <div className="flex-grow flex flex-col bg-seed-bg dark:bg-seed-surface-dark/50 rounded-xl relative border border-seed-text-primary/10 dark:border-seed-border-dark overflow-hidden">
          <div className="flex-grow overflow-y-auto p-6 space-y-8">
             {activeChat && activeChat.messages.length > (activeChat.messages[0]?.content === GREETING_MESSAGE_FULL ? 1 : 0) ? (
              <div>
                {activeChat.messages.map((msg, index) => ( msg.content === GREETING_MESSAGE_FULL ? null :
                  <div key={index} className="flex items-start gap-4 mb-8 group">
                    {msg.role === 'assistant' ? (
                      <>
                        <div className="w-8 h-8 bg-seed-text-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-serif font-bold text-lg">V</div>
                        <div className="w-full max-w-4xl relative">
                          <div className={`bg-white dark:bg-seed-surface-dark rounded-xl shadow-[0_4px_10px_rgba(27,67,50,0.05)] dark:shadow-none border border-seed-text-primary/10 dark:border-seed-border-dark ${isRefining && refinementState?.index === index ? 'opacity-50' : ''}`}>
                            <div className="p-6">
                              <div className="prose prose-stone dark:prose-invert max-w-none text-seed-text-secondary dark:text-seed-text-secondary-dark-theme leading-relaxed relative">
                                {isRefining && refinementState?.index === index && (
                                    <div className="absolute inset-0 bg-seed-bg/50 dark:bg-seed-surface-dark/50 flex items-center justify-center rounded-md z-10">
                                        <Loader className="animate-spin text-seed-accent-green" />
                                    </div>
                                )}
                                <div dangerouslySetInnerHTML={{ __html: markdownToHtml(msg.content) }} />
                              </div>
                            </div>
                             {msg.sources && msg.sources.length > 0 && (
                                <div className="px-6 pb-4">
                                    <div className="mt-4 pt-4 border-t border-seed-text-primary/10 dark:border-seed-border-dark">
                                        <h4 className="text-xs font-semibold text-seed-text-secondary/80 dark:text-seed-text-secondary-dark-theme/80 mb-2">Sources</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {msg.sources.map((source, i) => (
                                                <a
                                                    key={i}
                                                    href={source.uri}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-1.5 text-xs bg-seed-bg-light dark:bg-seed-border-dark/50 hover:bg-seed-accent-green/10 dark:hover:bg-seed-border-dark px-2 py-1 rounded-full transition text-seed-text-primary dark:text-seed-text-secondary-dark-theme"
                                                >
                                                    {source.type === 'web' && <Globe size={12} className="text-seed-accent-green" />}
                                                    {(source.type === 'maps' || source.type === 'review') && <MapPin size={12} className="text-seed-accent-green" />}
                                                    <span className="truncate max-w-xs">{source.title}</span>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                          </div>
                          <div className="absolute -top-2 -right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
                            <button onClick={() => setRefinementState({ index, content: msg.content })} className="p-1.5 rounded-md bg-white dark:bg-seed-surface-dark shadow-sm border border-seed-text-primary/10 dark:border-seed-border-dark text-seed-text-secondary/60 hover:text-seed-text-primary dark:text-seed-text-secondary-dark-theme/60 dark:hover:text-seed-text-primary-dark-theme" title="Refine">
                                <PenSquare size={16} />
                            </button>
                             <button onClick={() => handlePlayAudio(msg.content, index)} className="p-1.5 rounded-md bg-white dark:bg-seed-surface-dark shadow-sm border border-seed-text-primary/10 dark:border-seed-border-dark text-seed-text-secondary/60 hover:text-seed-text-primary dark:text-seed-text-secondary-dark-theme/60 dark:hover:text-seed-text-primary-dark-theme" title="Read aloud">
                                {currentlyPlaying?.index === index && !currentlyPlaying.source ? <Loader size={16} className="animate-spin" /> :
                                 currentlyPlaying?.index === index ? <StopCircle size={16} /> :
                                 <Volume2 size={16} />}
                             </button>
                             <button onClick={() => handleCopy(msg.content, index)} className="p-1.5 rounded-md bg-white dark:bg-seed-surface-dark shadow-sm border border-seed-text-primary/10 dark:border-seed-border-dark text-seed-text-secondary/60 hover:text-seed-text-primary dark:text-seed-text-secondary-dark-theme/60 dark:hover:text-seed-text-primary-dark-theme" title="Copy">
                              {copiedMessageIndex === index ? <Check size={16} className="text-seed-accent-green" /> : <Copy size={16} />}
                            </button>
                            <div className="relative group/export">
                                <button className="p-1.5 rounded-md bg-white dark:bg-seed-surface-dark shadow-sm border border-seed-text-primary/10 dark:border-seed-border-dark text-seed-text-secondary/60 hover:text-seed-text-primary dark:text-seed-text-secondary-dark-theme/60 dark:hover:text-seed-text-primary-dark-theme" title="Export">
                                  <DownloadCloud size={16} />
                                </button>
                                <div className="absolute top-full right-0 mt-1 w-56 bg-white dark:bg-seed-surface-dark shadow-lg border border-seed-text-primary/10 dark:border-seed-border-dark rounded-md p-1 invisible group-hover/export:visible z-10">
                                    <button onClick={() => handleExport("Google Docs")} disabled={!integrations.googleDocs} className="w-full text-left text-sm px-2 py-1.5 rounded hover:bg-seed-bg-light dark:hover:bg-seed-border-dark/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">
                                       <GoogleDocsIcon className="h-4 w-4 flex-shrink-0" />
                                       <span>Save to Google Docs</span>
                                    </button>
                                    <button onClick={() => handleExport("Google Sheets")} disabled={!integrations.googleSheets} className="w-full text-left text-sm px-2 py-1.5 rounded hover:bg-seed-bg-light dark:hover:bg-seed-border-dark/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">
                                        <GoogleSheetsIcon className="h-4 w-4 flex-shrink-0" />
                                        <span>Save to Google Sheets</span>
                                    </button>
                                    <div className="my-1 h-px bg-seed-text-primary/10 dark:bg-seed-border-dark"></div>
                                    <button onClick={() => handleDownload(msg.content, 'pdf')} className="w-full text-left text-sm px-2 py-1.5 rounded hover:bg-seed-bg-light dark:hover:bg-seed-border-dark/50 flex items-center gap-2">
                                        <Printer size={14} className="flex-shrink-0 text-red-500" />
                                        <span>Download as PDF</span>
                                    </button>
                                    <button onClick={() => handleDownload(msg.content, 'md')} className="w-full text-left text-sm px-2 py-1.5 rounded hover:bg-seed-bg-light dark:hover:bg-seed-border-dark/50 flex items-center gap-2">
                                        <FileText size={14} className="flex-shrink-0 text-gray-500" />
                                        <span>Download as Markdown</span>
                                    </button>
                                    <button onClick={() => handleDownload(msg.content, 'txt')} className="w-full text-left text-sm px-2 py-1.5 rounded hover:bg-seed-bg-light dark:hover:bg-seed-border-dark/50 flex items-center gap-2">
                                        <FileText size={14} className="flex-shrink-0 text-blue-500" />
                                        <span>Download as Text</span>
                                    </button>
                                </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="w-full flex justify-end items-start gap-4">
                        <div className="bg-white dark:bg-seed-surface-dark p-4 rounded-xl border border-seed-text-primary/10 dark:border-seed-border-dark flex items-center justify-between max-w-3xl">
                           <p className="whitespace-pre-wrap">{msg.content}</p>
                           {index === activeChat.messages.length - 2 && lastMessageIsAssistant && !isLoading && (
                             <button onClick={handleEditLastMessage} className="ml-4 text-seed-text-secondary/50 hover:text-seed-text-primary dark:text-seed-text-secondary-dark-theme/50 dark:hover:text-seed-text-primary-dark-theme transition flex-shrink-0" title="Edit your message">
                               <Edit size={16} />
                             </button>
                           )}
                        </div>
                         <div className="w-8 h-8 bg-seed-bg-light text-seed-text-primary rounded-full flex items-center justify-center flex-shrink-0 font-semibold">U</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : null}
            
            {activeChat && activeChat.messages.length <= 1 && !initialPrompt && (
              <div className="space-y-8">
                {/* Introduction */}
                 <div className="flex items-start gap-4 max-w-3xl mx-auto">
                     <div className="w-8 h-8 bg-seed-text-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-serif font-bold text-lg">V</div>
                     <div className="w-full">
                         <div className="prose prose-stone dark:prose-invert max-w-none text-seed-text-secondary dark:text-seed-text-secondary-dark-theme leading-relaxed whitespace-pre-wrap">{activeChat.messages[0]?.content}</div>
                     </div>
                 </div>

                 {/* Framework Generator */}
                 <FrameworkGenerator onGenerate={handleSend} />

                 {/* Case Studies / Quick Prompts */}
                 <div className="w-full pt-4">
                    <h3 className="text-center text-sm font-semibold text-seed-text-secondary/50 dark:text-seed-text-secondary-dark-theme/50 uppercase tracking-wider mb-4">Or Try A Strategic Prompt</h3>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {caseStudies.map((p, i) => (
                          <button key={i} onClick={() => handleSend(p.prompt)} className="bg-white dark:bg-seed-surface-dark p-4 rounded-lg shadow-sm hover:shadow-md transition text-left border border-seed-text-primary/10 dark:border-seed-border-dark hover:-translate-y-1">
                            <h3 className="font-semibold text-sm text-seed-text-primary dark:text-seed-text-primary-dark-theme">{p.title}</h3>
                            <p className="text-xs text-seed-text-secondary/70 dark:text-seed-text-secondary-dark-theme/70">{p.description}</p>
                          </button>
                        ))}
                    </div>
                </div>
             </div>
            )}

            {isLoading && (
              <div className="flex items-start gap-4">
                 <div className="w-8 h-8 bg-seed-text-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-serif font-bold text-lg">V</div>
                <div className="w-full max-w-2xl rounded-xl p-4 bg-white dark:bg-seed-surface-dark shadow-sm flex items-center space-x-3">
                  <Loader className="animate-spin text-seed-accent-green" />
                  <span className="text-seed-text-secondary/80 dark:text-seed-text-secondary-dark-theme/80">Vera is cultivating...</span>
                </div>
              </div>
            )}
            
            {inquiryQuestions && !isLoading && (
                <ContextInquiryForm 
                    questions={inquiryQuestions} 
                    onSubmit={async (answers) => {
                        await handleSend(answers);
                    }} 
                />
            )}

            {!isLoading && !inquiryQuestions && lastMessageIsAssistant && activeChat.messages.length > 1 && (
                <div className="max-w-3xl ml-12 space-y-4">
                    {(isGeneratingSuggestions || followUpPrompts.length > 0) && (
                        <div className="flex flex-wrap gap-2">
                            {isGeneratingSuggestions && followUpPrompts.length === 0 && (
                                <div className="text-sm text-seed-text-secondary/60 dark:text-seed-text-secondary-dark-theme/60 flex items-center gap-2">
                                    <Loader size={14} className="animate-spin" />
                                    <span>Generating suggestions...</span>
                                </div>
                            )}
                            {followUpPrompts.map(prompt => (
                                <button key={prompt} onClick={() => handleSend(prompt)} className="text-sm bg-seed-bg-light dark:bg-seed-border-dark/50 hover:bg-seed-accent-green/10 dark:hover:bg-seed-border-dark px-3 py-1.5 rounded-lg transition text-seed-text-primary dark:text-seed-text-secondary-dark-theme animate-fade-in">
                                    {prompt}
                                </button>
                            ))}
                        </div>
                    )}
                    <div className="flex items-center gap-2">
                      <button onClick={handleRegenerate} disabled={isLoading || isReflecting} className="flex items-center justify-center gap-2 text-sm text-seed-text-secondary/80 dark:text-seed-text-secondary-dark-theme/80 hover:text-seed-text-primary dark:hover:text-seed-text-primary-dark-theme transition bg-white dark:bg-seed-surface-dark border border-seed-text-primary/10 dark:border-seed-border-dark px-4 py-2 rounded-lg disabled:opacity-50">
                          <RefreshCw size={14} /> Regenerate
                      </button>
                       <button onClick={handleReflect} disabled={isLoading || isReflecting} className="flex items-center justify-center gap-2 text-sm text-seed-text-secondary/80 dark:text-seed-text-secondary-dark-theme/80 hover:text-seed-text-primary dark:hover:text-seed-text-primary-dark-theme transition bg-white dark:bg-seed-surface-dark border border-seed-text-primary/10 dark:border-seed-border-dark px-4 py-2 rounded-lg disabled:opacity-50">
                          {isReflecting ? <Loader size={14} className="animate-spin" /> : <BrainCircuit size={14} />}
                          {isReflecting ? 'Reflecting...' : 'Reflect on Strategy'}
                      </button>
                    </div>
                </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          <div className={`p-6 pt-4 bg-seed-bg dark:bg-seed-surface-dark/50 rounded-br-xl transition-opacity border-t border-seed-text-primary/5 dark:border-seed-border-dark ${!!inquiryQuestions ? 'opacity-50 pointer-events-none' : ''}`}>
            {error && <p className="text-red-500 mb-2 text-center text-sm">{error}</p>}
            <div className="bg-white dark:bg-seed-surface-dark rounded-xl border border-seed-accent-green/20 dark:border-seed-border-dark p-2 flex items-end gap-2 shadow-sm focus-within:border-seed-accent-green transition-colors">
              <input type="file" ref={fileInputRef} onChange={handleFileChange} multiple className="hidden" accept=".txt,.md,.json,.pdf,.doc,.docx,.png,.jpg,.jpeg,.webp" />
              <textarea
                ref={textareaRef} value={userInput} onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={(e) => {if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }}}
                placeholder="Send a message, use your voice, or upload a document..."
                className="w-full p-2 border-0 focus:ring-0 bg-transparent text-seed-text-secondary dark:text-seed-text-primary-dark-theme placeholder:text-gray-400 dark:placeholder:text-gray-500 resize-none overflow-hidden"
                rows={1} disabled={isLoading || !!inquiryQuestions}
              />
              <div className="flex items-center gap-1">
                 <button onClick={() => fileInputRef.current?.click()} className="p-2 rounded-lg text-seed-text-secondary/70 dark:text-seed-text-secondary-dark-theme/80 hover:bg-seed-bg-light dark:hover:bg-seed-border-dark/50 transition" aria-label="Upload document"><Paperclip size={18}/></button>
                 <button 
                  onClick={handleToggleRecording} disabled={!recognitionRef.current}
                  className={`p-2 rounded-lg transition ${isRecording ? 'bg-red-500/10 text-red-500' : 'text-seed-text-secondary/70 dark:text-seed-text-secondary-dark-theme/80 hover:bg-seed-bg-light dark:hover:bg-seed-border-dark/50'}`}
                  aria-label={isRecording ? 'Stop recording' : 'Start recording'}
                >
                  {isRecording ? <MicOff size={18} /> : <Mic size={18} />}
                 </button>
                 <button
                  onClick={() => handleSend()} disabled={isLoading || !userInput.trim() || !!inquiryQuestions}
                  className="bg-seed-accent-green text-white rounded-lg p-2 hover:bg-seed-accent-green-dark transition disabled:bg-seed-accent-green/50 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <IntegrationsPanel
            isOpen={isIntegrationsOpen}
            onClose={() => setIsIntegrationsOpen(false)}
            uploadedFiles={uploadedFiles}
            setUploadedFiles={setUploadedFiles}
            onUploadClick={() => fileInputRef.current?.click()}
            onDriveClick={() => setIsDrivePickerOpen(true)}
            integrations={integrations}
            setIntegrations={setIntegrations}
        />
      </main>
    </div>
  );
};