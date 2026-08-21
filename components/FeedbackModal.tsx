import React, { useState, useEffect } from 'react';
import { X, Loader, Bug, Lightbulb, CheckCircle } from 'lucide-react';

type FeedbackModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose }) => {
  const [feedbackType, setFeedbackType] = useState<'bug' | 'feature'>('bug');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Reset form when modal opens
    if (isOpen) {
      setIsSubmitted(false);
      setIsSubmitting(false);
      setMessage('');
      setFeedbackType('bug');
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Feedback submitted:', { type: feedbackType, message });
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form and close modal after a delay
      setTimeout(() => {
        onClose();
      }, 2000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div className="bg-white dark:bg-seed-surface-dark w-full max-w-lg rounded-xl shadow-2xl flex flex-col relative" onClick={e => e.stopPropagation()}>
        <header className="p-4 border-b border-seed-text-primary/10 dark:border-seed-border-dark flex items-center justify-between">
          <h2 className="text-lg font-semibold text-seed-text-primary dark:text-seed-text-primary-dark-theme">Share Your Feedback</h2>
          <button onClick={onClose} className="p-1 rounded-full text-seed-text-secondary/60 hover:bg-seed-text-primary/10 dark:text-seed-text-secondary-dark-theme/60 dark:hover:bg-seed-border-dark">
            <X size={20} />
          </button>
        </header>
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-10 flex flex-col items-center justify-center">
              <CheckCircle size={48} className="text-seed-accent-green" />
              <h3 className="mt-4 text-xl font-semibold text-seed-text-primary dark:text-seed-text-primary-dark-theme">Thank You!</h3>
              <p className="mt-2 text-seed-text-secondary dark:text-seed-text-secondary-dark-theme">Your feedback helps us grow. We appreciate you taking the time to help us improve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-seed-text-secondary dark:text-seed-text-secondary-dark-theme mb-2">Feedback Type</label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setFeedbackType('bug')}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md border transition ${feedbackType === 'bug' ? 'bg-seed-accent-green/10 border-seed-accent-green text-seed-accent-green' : 'bg-seed-bg dark:bg-seed-bg-dark border-seed-text-primary/20 dark:border-seed-border-dark hover:bg-seed-bg-light dark:hover:bg-seed-border-dark/50'}`}
                  >
                    <Bug size={16} /> Bug Report
                  </button>
                  <button
                    type="button"
                    onClick={() => setFeedbackType('feature')}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md border transition ${feedbackType === 'feature' ? 'bg-seed-accent-green/10 border-seed-accent-green text-seed-accent-green' : 'bg-seed-bg dark:bg-seed-bg-dark border-seed-text-primary/20 dark:border-seed-border-dark hover:bg-seed-bg-light dark:hover:bg-seed-border-dark/50'}`}
                  >
                    <Lightbulb size={16} /> Feature Request
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-seed-text-secondary dark:text-seed-text-secondary-dark-theme">
                  {feedbackType === 'bug' ? 'Please describe the bug' : 'What feature would you like to see?'}
                </label>
                <textarea 
                    name="message" 
                    id="message" 
                    rows={6} 
                    required 
                    value={message} 
                    onChange={e => setMessage(e.target.value)} 
                    placeholder={feedbackType === 'bug' ? 'e.g., I clicked the "Regenerate" button but nothing happened. I expected it to create a new response.' : 'e.g., I would love to be able to export my documents directly to Notion.'}
                    className="mt-1 block w-full rounded-md bg-seed-bg dark:bg-seed-bg-dark border-seed-text-primary/20 dark:border-seed-border-dark focus:ring-seed-accent-green focus:border-seed-accent-green shadow-sm"
                ></textarea>
              </div>
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting || !message.trim()}
                  className="w-full sm:w-auto bg-seed-text-primary dark:bg-seed-accent-green text-white dark:text-seed-text-primary font-semibold px-6 py-2.5 rounded-lg hover:bg-seed-text-primary-dark dark:hover:bg-seed-accent-green-dark transition shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <Loader size={18} className="animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    'Send Feedback'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
