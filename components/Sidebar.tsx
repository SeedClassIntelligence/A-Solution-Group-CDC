import React, { useState, useRef, useEffect } from 'react';
import { Plus, MessageSquare, Trash2, Edit, Check, ShieldCheck } from 'lucide-react';
import { Chat } from './Studio'; // Import the full Chat type

type SidebarProps = {
  chats: Chat[];
  activeChatIndex: number;
  onNewChat: () => void;
  onSelectChat: (index: number) => void;
  onDeleteChat: (index: number) => void;
  onRenameChat: (index: number, newTitle: string) => void;
  onOpenFeedback: () => void;
  onOpenIntegrations: () => void;
};

const ChatHistoryItem: React.FC<{
  chat: Chat & { originalIndex: number };
  isActive: boolean;
  onClick: () => void;
  onDelete: (e: React.MouseEvent) => void;
  onRename: (newTitle: string) => void;
}> = ({ chat, isActive, onClick, onDelete, onRename }) => {
  const [isRenaming, setIsRenaming] = useState(false);
  const [title, setTitle] = useState(chat.title);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isRenaming) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [isRenaming]);

  // Update local title if chat title prop changes from parent (e.g., on new chat creation)
  useEffect(() => {
    if (!isRenaming) {
      setTitle(chat.title);
    }
  }, [chat.title, isRenaming]);

  const handleRename = () => {
    if (title.trim() && title.trim() !== chat.title) {
      onRename(title.trim());
    } else {
      setTitle(chat.title); // Reset if empty or unchanged
    }
    setIsRenaming(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleRename();
    } else if (e.key === 'Escape') {
      setTitle(chat.title);
      setIsRenaming(false);
    }
  };

  return (
    <div
      onClick={() => !isRenaming && onClick()}
      className={`group flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors ${isActive ? 'bg-seed-accent-green/10 text-seed-text-primary-dark dark:bg-seed-accent-green/10 dark:text-seed-accent-green font-medium' : 'hover:bg-seed-text-primary/5 dark:hover:bg-seed-border-dark/30 text-seed-text-secondary dark:text-seed-text-secondary-dark-theme'}`}
    >
      <div className="flex items-center gap-2 overflow-hidden flex-grow">
        <MessageSquare size={16} className={`flex-shrink-0 ${isActive ? 'text-seed-accent-green' : 'text-seed-text-secondary/60 dark:text-seed-text-secondary-dark-theme/60'}`} />
        {isRenaming ? (
          <input
            ref={inputRef}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={handleRename}
            onKeyDown={handleKeyDown}
            className="text-sm bg-transparent border border-seed-accent-green rounded w-full p-0.5 -m-0.5 focus:ring-1 focus:ring-seed-accent-green focus:border-seed-accent-green"
          />
        ) : (
          <span className="text-sm truncate flex-grow">{chat.title}</span>
        )}
      </div>
      <div className={`flex items-center flex-shrink-0 transition-opacity ${isRenaming ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
        {isRenaming ? (
           <button onClick={handleRename} className="p-1 text-seed-text-secondary/70 hover:text-seed-text-primary dark:text-seed-text-secondary-dark-theme/70 dark:hover:text-seed-text-primary-dark-theme">
            <Check size={14} />
          </button>
        ) : (
           <button onClick={(e) => { e.stopPropagation(); setIsRenaming(true); }} className="p-1 text-seed-text-secondary/70 hover:text-seed-text-primary dark:text-seed-text-secondary-dark-theme/70 dark:hover:text-seed-text-primary-dark-theme">
            <Edit size={14} />
          </button>
        )}
        <button onClick={onDelete} className="p-1 text-seed-text-secondary/70 hover:text-red-500 dark:text-seed-text-secondary-dark-theme/70">
          <Trash2 size={14} />
        </button>
      </div>
    </div>
  );
};

const getGroupNameForDate = (date: Date): string => {
  if (!date) return 'Older';
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const sevenDaysAgo = new Date(today);
  sevenDaysAgo.setDate(today.getDate() - 7);

  const targetDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  if (targetDate.getTime() === today.getTime()) return 'Today';
  if (targetDate.getTime() === yesterday.getTime()) return 'Yesterday';
  if (targetDate > sevenDaysAgo) return 'Previous 7 Days';
  
  const isThisYear = now.getFullYear() === date.getFullYear();
  return date.toLocaleString('default', { month: 'long', year: isThisYear ? undefined : 'numeric' });
};


export const Sidebar: React.FC<SidebarProps> = ({ chats, activeChatIndex, onNewChat, onSelectChat, onDeleteChat, onRenameChat, onOpenFeedback, onOpenIntegrations }) => {
  
  const sortedChats = chats
    .map((chat, index) => ({ ...chat, originalIndex: index }))
    .sort((a, b) => (b.lastUpdated?.getTime() || 0) - (a.lastUpdated?.getTime() || 0));

  let lastGroupName = '';

  return (
    <aside className="w-64 bg-seed-bg dark:bg-seed-surface-dark/50 p-3 flex flex-col flex-shrink-0 rounded-l-xl border-r border-seed-text-primary/10 dark:border-seed-border-dark">
      <div className="flex-shrink-0 mb-4">
         <button
          onClick={onNewChat}
          className="w-full flex items-center justify-center gap-2 bg-transparent border border-seed-text-primary/40 hover:bg-seed-text-primary/5 text-seed-text-primary dark:border-seed-border-dark dark:hover:bg-seed-border-dark/30 dark:text-seed-text-primary-dark-theme font-medium py-2 px-4 rounded-lg transition"
        >
          <Plus size={18} />
          <span>New Chat</span>
        </button>
      </div>

      <div className="flex-grow overflow-y-auto pr-1 -mr-2">
        {sortedChats.map((chat) => {
          const groupName = getGroupNameForDate(chat.lastUpdated);
          const showHeader = groupName !== lastGroupName;
          if(showHeader) {
            lastGroupName = groupName;
          }

          return (
            <React.Fragment key={chat.originalIndex}>
              {showHeader && (
                <h3 className="text-xs font-semibold text-seed-text-secondary/50 dark:text-seed-text-secondary-dark-theme/50 px-2 mt-4 mb-1 uppercase tracking-wider">{groupName}</h3>
              )}
              <ChatHistoryItem
                chat={chat}
                isActive={chat.originalIndex === activeChatIndex}
                onClick={() => onSelectChat(chat.originalIndex)}
                onDelete={(e) => {
                  e.stopPropagation();
                  onDeleteChat(chat.originalIndex);
                }}
                onRename={(newTitle) => onRenameChat(chat.originalIndex, newTitle)}
              />
            </React.Fragment>
          );
        })}
      </div>
      
      <div className="mt-4 pt-4 border-t border-seed-text-primary/10 dark:border-seed-border-dark space-y-2">
        <div className="px-3 py-2 text-[10px] font-black uppercase tracking-widest text-seed-text-secondary/30 dark:text-white/20">
          Personal Workspace
        </div>
      </div>
    </aside>
  );
};