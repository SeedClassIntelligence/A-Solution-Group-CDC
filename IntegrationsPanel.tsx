
import React from 'react';
import { UploadedFile, IntegrationStates } from './Studio';
import { Paperclip, FileText as FileTextIcon, Trash2, CheckCircle, Link, Image as ImageIcon, FileSpreadsheet, X } from 'lucide-react';

// SVG Icons
const GoogleDriveIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#4285F4"/><path d="M7.71 5.42L10.5 10.5l5.79-5.08L12 1.5z" fill="#FFC107"/><path d="m3.27 6.42 4.44 7.69 2.83-4.9-4.44-7.69z" fill="#2196F3"/><path d="m9.82 21.06 2.18-3.9-2.83-4.9-2.18 3.9z" fill="#4CAF50"/><path d="m9.82 21.06 6.2-10.74-2.83-4.9-6.2 10.74z" fill="#4CAF50"/></svg>
);
const GoogleDocsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z" fill="#2984F4"/><path d="M13 9V3.5L18.5 9H13z" fill="#73A9F5"/><path d="M16 17H8v-2h8v2zm0-4H8v-2h8v2z" fill="#FFF"/></svg>
);
const GoogleSheetsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z" fill="#0F9D58"/><path d="M13 9V3.5L18.5 9H13z" fill="#52C48D"/><path d="M11 18h2v-4h4v-2h-4v-4h-2v4H7v2h4v4z" fill="#FFF"/></svg>
);
const ZapierIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path fill="#FF4A00" d="M22 12h-6.28l-2.76 4.83L15.31 21H8.69l-2.35-4.17L3.56 12H2l6.69-11h6.62L22 12z"></path></svg>
);

type IntegrationsPanelProps = {
    isOpen: boolean;
    onClose: () => void;
    uploadedFiles: UploadedFile[];
    setUploadedFiles: React.Dispatch<React.SetStateAction<UploadedFile[]>>;
    onUploadClick: () => void;
    onDriveClick: () => void;
    integrations: IntegrationStates;
    setIntegrations: React.Dispatch<React.SetStateAction<IntegrationStates>>;
};

const IntegrationCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
    isConnected: boolean;
    onToggle: () => void;
}> = ({ icon, title, description, isConnected, onToggle }) => (
    <div className="flex items-center gap-4 bg-white dark:bg-seed-surface-dark p-4 rounded-xl border border-seed-text-primary/5 dark:border-seed-border-dark/50 shadow-sm">
        <div className="flex-shrink-0">{icon}</div>
        <div className="flex-grow">
            <h4 className="font-semibold text-sm text-seed-text-primary dark:text-seed-text-primary-dark-theme">{title}</h4>
            <p className="text-xs text-seed-text-secondary/70 dark:text-seed-text-secondary-dark-theme/70">{description}</p>
        </div>
        <button 
            onClick={onToggle}
            className={`text-xs font-semibold px-4 py-2 rounded-lg transition-all ${isConnected ? 'bg-seed-accent-green/10 text-seed-accent-green' : 'bg-seed-text-primary/10 hover:bg-seed-text-primary/20 text-seed-text-primary dark:bg-seed-accent-green/10 dark:text-seed-accent-green dark:hover:bg-seed-accent-green/20'}`}
        >
            {isConnected ? 'Connected' : 'Connect'}
        </button>
    </div>
);

const getFileIcon = (file: UploadedFile) => {
    if (file.source === 'drive') {
        return <GoogleDriveIcon className="h-4 w-4 flex-shrink-0" />;
    }
    if (file.mimeType.startsWith('image/')) {
        return <ImageIcon size={16} className="text-purple-500 flex-shrink-0" />;
    }
    
    const extension = file.name.split('.').pop()?.toLowerCase();

    switch (extension) {
        case 'pdf':
            return <FileTextIcon size={16} className="text-red-500 flex-shrink-0" />;
        case 'doc':
        case 'docx':
            return <FileTextIcon size={16} className="text-blue-500 flex-shrink-0" />;
        case 'xls':
        case 'xlsx':
        case 'csv':
            return <FileSpreadsheet size={16} className="text-green-600 flex-shrink-0" />;
        case 'txt':
        case 'md':
            return <FileTextIcon size={16} className="text-gray-500 flex-shrink-0" />;
        default:
            return <FileTextIcon size={16} className="text-seed-text-primary dark:text-seed-accent-green flex-shrink-0" />;
    }
};


export const IntegrationsPanel: React.FC<IntegrationsPanelProps> = ({ 
    isOpen,
    onClose,
    uploadedFiles, 
    setUploadedFiles, 
    onUploadClick,
    onDriveClick,
    integrations,
    setIntegrations
}) => {
    
    if (!isOpen) return null;

    const removeFile = (fileName: string) => {
        setUploadedFiles(files => files.filter(f => f.name !== fileName));
    };

    const handleToggle = (service: keyof IntegrationStates) => {
        setIntegrations(prev => ({ ...prev, [service]: !prev[service] }));
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
            <div className="bg-seed-bg dark:bg-seed-surface-dark w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-2xl border border-seed-text-primary/10 dark:border-seed-border-dark overflow-hidden flex flex-col">
                <div className="p-6 border-b border-seed-text-primary/10 dark:border-seed-border-dark flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme">Context & Integrations</h2>
                        <p className="text-xs text-seed-text-secondary dark:text-seed-text-secondary-dark-theme opacity-60">Connect your workspace and upload context documents.</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-seed-text-primary/5 dark:hover:bg-white/5 rounded-full transition-colors">
                        <X size={20} className="text-seed-text-secondary dark:text-seed-text-secondary-dark-theme" />
                    </button>
                </div>

                <div className="flex-grow overflow-y-auto p-6 space-y-8">
                    <div>
                        <h3 className="text-sm font-black text-seed-accent-green uppercase tracking-widest mb-4">Integrations</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <IntegrationCard 
                                icon={<GoogleDriveIcon className="h-7 w-7"/>}
                                title="Google Drive"
                                description="Use folders and files as direct context."
                                isConnected={integrations.googleDrive}
                                onToggle={() => handleToggle('googleDrive')}
                            />
                             <IntegrationCard 
                                icon={<GoogleDocsIcon className="h-7 w-7"/>}
                                title="Google Docs"
                                description="Automatically export strategic drafts."
                                isConnected={integrations.googleDocs}
                                onToggle={() => handleToggle('googleDocs')}
                            />
                             <IntegrationCard 
                                icon={<GoogleSheetsIcon className="h-7 w-7"/>}
                                title="Google Sheets"
                                description="Export budget models and timelines."
                                isConnected={integrations.googleSheets}
                                onToggle={() => handleToggle('googleSheets')}
                            />
                            <IntegrationCard 
                                icon={<ZapierIcon className="h-7 w-7"/>}
                                title="Zapier"
                                description="Sync with 5,000+ business tools."
                                isConnected={integrations.zapier}
                                onToggle={() => handleToggle('zapier')}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-black text-seed-text-primary dark:text-white uppercase tracking-widest">Context Documents</h3>
                            <span className="text-[10px] font-black bg-seed-text-primary/10 dark:bg-white/10 text-seed-text-primary dark:text-white px-2 py-0.5 rounded uppercase tracking-widest">{uploadedFiles.length} files</span>
                        </div>
                        
                        <div className="space-y-2">
                            {uploadedFiles.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {uploadedFiles.map((file, index) => (
                                        <div key={index} className="flex items-center justify-between bg-white dark:bg-seed-surface-dark p-3 rounded-xl border border-seed-text-primary/5 dark:border-seed-border-dark shadow-sm group hover:border-seed-accent-green transition-colors">
                                            <div className="flex items-center gap-3 overflow-hidden">
                                                <div className="w-8 h-8 bg-seed-bg dark:bg-seed-bg-dark rounded flex items-center justify-center flex-shrink-0">
                                                    {getFileIcon(file)}
                                                </div>
                                                <div className="flex flex-col truncate">
                                                    <span className="text-sm font-semibold text-seed-text-primary dark:text-seed-text-primary-dark-theme truncate" title={file.name}>{file.name}</span>
                                                    <span className="text-[10px] uppercase font-bold text-seed-text-secondary/40 dark:text-white/40">{file.source === 'drive' ? 'Drive' : 'Local'}</span>
                                                </div>
                                            </div>
                                            <button onClick={() => removeFile(file.name)} className="p-1.5 text-seed-text-secondary/40 dark:text-white/40 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity" title="Remove file">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center h-32 bg-white/50 dark:bg-white/5 border border-dashed border-seed-text-primary/10 dark:border-seed-border-dark rounded-2xl">
                                    <FileTextIcon size={24} className="text-seed-text-secondary/20 mb-2" />
                                    <p className="text-xs text-seed-text-secondary/40 dark:text-seed-text-secondary-dark-theme/40 text-center italic">No context documents added.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="p-6 border-t border-seed-text-primary/10 dark:border-seed-border-dark bg-seed-bg/50 dark:bg-black/20 flex items-center gap-3">
                    <button onClick={onUploadClick} className="flex-1 flex items-center justify-center gap-2 bg-seed-text-primary dark:bg-seed-accent-green text-white dark:text-seed-text-primary font-black py-3 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-xs uppercase tracking-widest">
                        <Paperclip size={16} /> Upload Local
                    </button>
                     <button onClick={onDriveClick} disabled={!integrations.googleDrive} className="flex-1 flex items-center justify-center gap-2 bg-white dark:bg-seed-bg-dark border border-seed-text-primary/10 dark:border-seed-border-dark hover:bg-seed-bg-light dark:hover:bg-seed-border-dark/50 text-seed-text-primary dark:text-seed-accent-green font-black py-3 rounded-xl shadow-sm hover:shadow-md transition-all text-xs uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed">
                        <GoogleDriveIcon className="h-5 w-5" /> From Drive
                    </button>
                </div>
            </div>
        </div>
    );
};
