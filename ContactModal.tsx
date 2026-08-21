
import React, { useState } from 'react';
import { X, Loader } from 'lucide-react';
import { backendService } from './backendService';

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
};

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, title }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });

  if (!isOpen) {
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call to local persistence
    setTimeout(() => {
      backendService.saveSubmission('contact', { ...formData, sourceModal: title });
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form and close modal after a delay
      setTimeout(() => {
        onClose();
        // Reset state after the modal has closed
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', organization: '', message: '' });
        }, 300);
      }, 2000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div className="bg-white dark:bg-seed-surface-dark w-full max-w-lg rounded-xl shadow-2xl flex flex-col relative" onClick={e => e.stopPropagation()}>
        <header className="p-4 border-b border-seed-text-primary/10 dark:border-seed-border-dark flex items-center justify-between">
          <h2 className="text-lg font-semibold text-seed-text-primary dark:text-seed-text-primary-dark-theme">{title}</h2>
          <button onClick={onClose} className="p-1 rounded-full text-seed-text-secondary/60 hover:bg-seed-text-primary/10 dark:text-seed-text-secondary-dark-theme/60 dark:hover:bg-seed-border-dark">
            <X size={20} />
          </button>
        </header>
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-10">
              <h3 className="text-xl font-semibold text-seed-text-primary dark:text-seed-text-primary-dark-theme">Thank You!</h3>
              <p className="mt-2 text-seed-text-secondary dark:text-seed-text-secondary-dark-theme">Your message has been sent. Our team will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-seed-text-secondary dark:text-seed-text-secondary-dark-theme">Full Name</label>
                <input type="text" name="name" id="name" required value={formData.name} onChange={handleInputChange} className="mt-1 block w-full rounded-md bg-seed-bg dark:bg-seed-bg-dark border-seed-text-primary/20 dark:border-seed-border-dark focus:ring-seed-accent-green focus:border-seed-accent-green shadow-sm" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-seed-text-secondary dark:text-seed-text-secondary-dark-theme">Email Address</label>
                <input type="email" name="email" id="email" required value={formData.email} onChange={handleInputChange} className="mt-1 block w-full rounded-md bg-seed-bg dark:bg-seed-bg-dark border-seed-text-primary/20 dark:border-seed-border-dark focus:ring-seed-accent-green focus:border-seed-accent-green shadow-sm" />
              </div>
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-seed-text-secondary dark:text-seed-text-secondary-dark-theme">Organization (Optional)</label>
                <input type="text" name="organization" id="organization" value={formData.organization} onChange={handleInputChange} className="mt-1 block w-full rounded-md bg-seed-bg dark:bg-seed-bg-dark border-seed-text-primary/20 dark:border-seed-border-dark focus:ring-seed-accent-green focus:border-seed-accent-green shadow-sm" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-seed-text-secondary dark:text-seed-text-secondary-dark-theme">Message</label>
                <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleInputChange} className="mt-1 block w-full rounded-md bg-seed-bg dark:bg-seed-bg-dark border-seed-text-primary/20 dark:border-seed-border-dark focus:ring-seed-accent-green focus:border-seed-accent-green shadow-sm"></textarea>
              </div>
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-seed-text-primary dark:bg-seed-accent-green text-white dark:text-seed-text-primary font-semibold px-6 py-2.5 rounded-lg hover:bg-seed-text-primary-dark dark:hover:bg-seed-accent-green-dark transition shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <Loader size={18} className="animate-spin mr-2" />
                      Submitting...
                    </>
                  ) : (
                    'Send Message'
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
