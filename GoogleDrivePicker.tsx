
import React, { useState } from 'react';
import { FileText, Folder, ChevronsRight, Search, ArrowLeft } from 'lucide-react';

const GoogleDriveIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M7.71 5.42L10.5 10.5l5.79-5.08L12 1.5z" fill="#FFC107"/><path d="m3.27 6.42 4.44 7.69 2.83-4.9-4.44-7.69z" fill="#2196F3"/><path d="m9.82 21.06 2.18-3.9-2.83-4.9-2.18 3.9z" fill="#4CAF50"/><path d="m9.82 21.06 6.2-10.74-2.83-4.9-6.2 10.74z" fill="#4CAF50"/></svg>
);
const GoogleDocsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z" fill="#2984F4"/><path d="M13 9V3.5L18.5 9H13z" fill="#73A9F5"/><path d="M16 17H8v-2h8v2zm0-4H8v-2h8v2z" fill="#FFF"/></svg>
);
const GoogleSheetsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z" fill="#0F9D58"/><path d="M13 9V3.5L18.5 9H13z" fill="#52C48D"/><path d="M11 18h2v-4h4v-2h-4v-4h-2v4H7v2h4v4z" fill="#FFF"/></svg>
);


const DUMMY_FILES = {
    root: [
        { name: 'Project Alpha', type: 'folder', id: 'folder1' },
        { name: 'Community Grant Proposal.gdoc', type: 'doc', id: 'doc1', content: 'This is the content of the Community Grant Proposal.' },
        { name: 'City General Plan.pdf', type: 'doc', id: 'doc2', content: 'This is the content of the City General Plan PDF.' },
        { name: 'Project Budgets', type: 'folder', id: 'folder2' },
    ],
    folder1: [
        { name: 'Needs Assessment.gdoc', type: 'doc', id: 'doc3', content: 'Content for Needs Assessment.' },
        { name: 'Stakeholder List.gsheet', type: 'sheet', id: 'sheet1', content: 'Stakeholder Name, Role\nJohn Doe, Community Leader' },
    ],
    folder2: [
        { name: 'Q1 Budget.gsheet', type: 'sheet', id: 'sheet2', content: 'Q1 Budget details...' },
        { name: 'Q2 Projections.gsheet', type: 'sheet', id: 'sheet3', content: 'Q2 Projections details...' },
    ]
};

type FileItem = { name: string; type: 'folder' | 'doc' | 'sheet'; id: string; content?: string };

type GoogleDrivePickerProps = {
    onSelectFile: (file: { name: string, content: string }) => void;
    onClose: () => void;
};

export const GoogleDrivePicker: React.FC<GoogleDrivePickerProps> = ({ onSelectFile, onClose }) => {
    const [currentFolder, setCurrentFolder] = useState<'root' | 'folder1' | 'folder2'>('root');
    const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);

    const filesToShow = DUMMY_FILES[currentFolder];
    const folderHistory: ('root' | 'folder1' | 'folder2')[] = ['root'];
    
    const handleFileClick = (file: FileItem) => {
        if (file.type === 'folder') {
            setCurrentFolder(file.id as any);
        } else {
            setSelectedFile(file);
        }
    };

    const handleSelect = () => {
        if (selectedFile && selectedFile.content) {
            onSelectFile({ name: selectedFile.name, content: selectedFile.content });
        }
    };
    
    const getFileIcon = (type: FileItem['type']) => {
        switch(type) {
            case 'folder': return <Folder className="h-5 w-5 text-gray-500" />;
            case 'doc': return <GoogleDocsIcon className="h-5 w-5" />;
            case 'sheet': return <GoogleSheetsIcon className="h-5 w-5" />;
            default: return <FileText className="h-5 w-5 text-gray-400" />;
        }
    }

    return (
        <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4">
            <div className="bg-seed-bg dark:bg-seed-surface-dark w-full max-w-2xl h-[70vh] rounded-xl shadow-2xl flex flex-col">
                <header className="p-4 border-b border-seed-text-primary/10 dark:border-seed-border-dark flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <GoogleDriveIcon className="h-6 w-6" />
                        <h2 className="text-lg font-semibold text-seed-text-primary dark:text-seed-text-primary-dark-theme">Select a file from Drive</h2>
                    </div>
                    <div className="relative w-64">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input type="text" placeholder="Search Drive" className="w-full bg-seed-bg-light dark:bg-seed-bg-dark border-none rounded-md pl-9 pr-3 py-1.5 text-sm focus:ring-2 focus:ring-seed-accent-green" />
                    </div>
                </header>
                <div className="p-2 flex items-center gap-2 border-b border-seed-text-primary/10 dark:border-seed-border-dark">
                    {currentFolder !== 'root' && (
                        <button onClick={() => setCurrentFolder('root')} className="p-1 hover:bg-seed-bg-light dark:hover:bg-seed-border-dark/50 rounded">
                            <ArrowLeft size={16} />
                        </button>
                    )}
                    <span className="text-sm font-medium text-seed-text-secondary dark:text-seed-text-secondary-dark-theme">My Drive</span>
                    {currentFolder !== 'root' && <ChevronsRight size={16} className="text-gray-400" />}
                    {currentFolder !== 'root' && <span className="text-sm font-medium text-seed-text-primary dark:text-seed-text-primary-dark-theme">{DUMMY_FILES.root.find(f => f.id === currentFolder)?.name}</span>}
                </div>
                <div className="flex-grow overflow-y-auto p-2">
                    {filesToShow.map(file => (
                        <div key={file.id} 
                             onClick={() => handleFileClick(file)}
                             className={`flex items-center gap-3 p-2 rounded-md cursor-pointer transition-colors ${selectedFile?.id === file.id ? 'bg-seed-accent-green/10' : 'hover:bg-seed-bg-light dark:hover:bg-seed-border-dark/50'}`}>
                            {getFileIcon(file.type)}
                            <span className="text-sm text-seed-text-secondary dark:text-seed-text-secondary-dark-theme">{file.name}</span>
                        </div>
                    ))}
                </div>
                <footer className="p-4 border-t border-seed-text-primary/10 dark:border-seed-border-dark flex justify-end items-center gap-3">
                    <button onClick={onClose} className="px-4 py-2 rounded-md text-sm font-semibold text-seed-text-primary dark:text-seed-text-primary-dark-theme hover:bg-seed-text-primary/10 dark:hover:bg-seed-border-dark transition">
                        Cancel
                    </button>
                    <button onClick={handleSelect} disabled={!selectedFile || selectedFile.type === 'folder'} className="px-4 py-2 rounded-md text-sm font-semibold bg-seed-accent-green text-white hover:bg-seed-accent-green-dark transition disabled:bg-gray-300 disabled:cursor-not-allowed">
                        Select
                    </button>
                </footer>
            </div>
        </div>
    );
};
