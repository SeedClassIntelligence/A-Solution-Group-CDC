
import React, { useState } from 'react';
import { X, Loader, ArrowRight, FileText, CheckCircle, Calendar } from 'lucide-react';
import { backendService } from '../services/backendService';

type AssessmentModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const AssessmentModal: React.FC<AssessmentModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    projectType: 'Grant Proposal',
    frameworkPreference: 'Whole Community Solution (WCS)',
    coreChallenge: '',
    targetPopulation: '',
    goals: ''
  });

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call to local persistence
    setTimeout(() => {
      backendService.saveSubmission('assessment', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  return (
    <div className="fixed inset-0 bg-black/60 z-[60] flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div className="bg-white dark:bg-seed-surface-dark w-full max-w-2xl rounded-2xl shadow-2xl flex flex-col relative max-h-[90vh] overflow-hidden" onClick={e => e.stopPropagation()}>
        
        {/* Header */}
        <header className="p-6 border-b border-seed-text-primary/10 dark:border-seed-border-dark flex items-center justify-between bg-seed-bg/50 dark:bg-seed-surface-dark">
          <div>
            <h2 className="text-xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme">Project Readiness Assessment</h2>
            <p className="text-sm text-seed-text-secondary/70 dark:text-seed-text-secondary-dark-theme/70">
              Prepare for your Free 30-Min Strategy Call
            </p>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-seed-text-primary/10 dark:hover:bg-seed-border-dark transition">
            <X size={20} className="text-seed-text-secondary dark:text-seed-text-secondary-dark-theme" />
          </button>
        </header>

        {/* Body */}
        <div className="p-8 overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-seed-accent-green/20 text-seed-accent-green rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-4">Assessment Received</h3>
              <p className="text-seed-text-secondary dark:text-seed-text-secondary-dark-theme mb-8 max-w-md mx-auto">
                We have received your details. Our Solutionologists will begin crafting a <strong>preliminary 2-3 page strategic draft</strong> based on your inputs.
              </p>
              
              <div className="bg-seed-bg dark:bg-seed-bg-dark p-6 rounded-xl border border-seed-accent-green/30 text-left mb-8">
                <h4 className="font-semibold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-2 flex items-center gap-2">
                  <Calendar size={18} className="text-seed-accent-green"/> Next Step: Book Your Call
                </h4>
                <p className="text-sm text-seed-text-secondary dark:text-seed-text-secondary-dark-theme mb-4">
                  Select a time for your free 30-minute consultation (Phone or Zoom) to review your preliminary draft and discuss next steps.
                </p>
                <button className="w-full py-3 bg-seed-text-primary dark:bg-seed-accent-green text-white dark:text-seed-text-primary font-bold rounded-lg hover:bg-seed-text-primary-dark dark:hover:bg-seed-accent-green-dark transition shadow-md">
                  Open Calendar & Book Now
                </button>
              </div>
              
              <button onClick={onClose} className="text-sm text-seed-text-secondary underline hover:text-seed-accent-green">
                Close window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Progress Bar */}
              <div className="flex gap-2 mb-8">
                <div className={`h-2 flex-1 rounded-full ${step >= 1 ? 'bg-seed-accent-green' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
                <div className={`h-2 flex-1 rounded-full ${step >= 2 ? 'bg-seed-accent-green' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
                <div className={`h-2 flex-1 rounded-full ${step >= 3 ? 'bg-seed-accent-green' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
              </div>

              {step === 1 && (
                <div className="space-y-4 animate-fade-in">
                  <h3 className="text-lg font-semibold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-4">Organization Details</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-seed-text-secondary dark:text-seed-text-secondary-dark-theme mb-1">Full Name</label>
                        <input required name="name" value={formData.name} onChange={handleInputChange} className="w-full p-3 rounded-lg bg-seed-bg dark:bg-seed-bg-dark border border-seed-text-primary/20 dark:border-seed-border-dark focus:ring-2 focus:ring-seed-accent-green" placeholder="John Doe" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-seed-text-secondary dark:text-seed-text-secondary-dark-theme mb-1">Email</label>
                        <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full p-3 rounded-lg bg-seed-bg dark:bg-seed-bg-dark border border-seed-text-primary/20 dark:border-seed-border-dark focus:ring-2 focus:ring-seed-accent-green" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-seed-text-secondary dark:text-seed-text-secondary-dark-theme mb-1">Organization Name</label>
                    <input required name="organization" value={formData.organization} onChange={handleInputChange} className="w-full p-3 rounded-lg bg-seed-bg dark:bg-seed-bg-dark border border-seed-text-primary/20 dark:border-seed-border-dark focus:ring-2 focus:ring-seed-accent-green" placeholder="Community Solutions Inc." />
                  </div>
                   <div className="pt-4 flex justify-end">
                    <button type="button" onClick={nextStep} className="flex items-center gap-2 bg-seed-text-primary/10 hover:bg-seed-text-primary/20 text-seed-text-primary dark:text-seed-accent-green px-6 py-2.5 rounded-lg font-semibold transition">
                      Next <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-fade-in">
                  <h3 className="text-lg font-semibold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-4">Project Scope</h3>
                   <div>
                    <label className="block text-sm font-medium text-seed-text-secondary dark:text-seed-text-secondary-dark-theme mb-1">What type of document do you need?</label>
                    <select name="projectType" value={formData.projectType} onChange={handleInputChange} className="w-full p-3 rounded-lg bg-seed-bg dark:bg-seed-bg-dark border border-seed-text-primary/20 dark:border-seed-border-dark focus:ring-2 focus:ring-seed-accent-green">
                        <option>Business Plan</option>
                        <option>Community Action Plan</option>
                        <option>Grant Proposal</option>
                        <option>Strategic Plan</option>
                        <option>Policies & Procedures Manual</option>
                        <option>Employee Handbook</option>
                        <option>Community Benefit Agreement</option>
                        <option>Bylaws & Governance</option>
                        <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-seed-text-secondary dark:text-seed-text-secondary-dark-theme mb-1">Target Audience/Population</label>
                    <input name="targetPopulation" value={formData.targetPopulation} onChange={handleInputChange} className="w-full p-3 rounded-lg bg-seed-bg dark:bg-seed-bg-dark border border-seed-text-primary/20 dark:border-seed-border-dark focus:ring-2 focus:ring-seed-accent-green" placeholder="e.g., At-risk youth in West Chicago" />
                  </div>
                   <div>
                    <label className="block text-sm font-medium text-seed-text-secondary dark:text-seed-text-secondary-dark-theme mb-1">Framework Preference</label>
                    <select name="frameworkPreference" value={formData.frameworkPreference} onChange={handleInputChange} className="w-full p-3 rounded-lg bg-seed-bg dark:bg-seed-bg-dark border border-seed-text-primary/20 dark:border-seed-border-dark focus:ring-2 focus:ring-seed-accent-green">
                        <option>Whole Community Solution (WCS)</option>
                        <option>Reentry Demonstration Framework</option>
                        <option>360-Degree Holistic Care Model</option>
                        <option>Housing First Model</option>
                        <option>Sequential Intercept Model</option>
                        <option>Unsure / Need Recommendation</option>
                    </select>
                  </div>
                  <div className="pt-4 flex justify-between">
                    <button type="button" onClick={prevStep} className="text-seed-text-secondary hover:text-seed-text-primary">Back</button>
                    <button type="button" onClick={nextStep} className="flex items-center gap-2 bg-seed-text-primary/10 hover:bg-seed-text-primary/20 text-seed-text-primary dark:text-seed-accent-green px-6 py-2.5 rounded-lg font-semibold transition">
                      Next <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4 animate-fade-in">
                  <h3 className="text-lg font-semibold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-4">Strategic Context</h3>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg flex gap-3 text-sm text-blue-800 dark:text-blue-300 mb-4">
                     <FileText size={20} className="flex-shrink-0" />
                     <p>These answers allow us to draft a <strong>2-3 page preliminary outline</strong> before our call.</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-seed-text-secondary dark:text-seed-text-secondary-dark-theme mb-1">What is the core problem or opportunity?</label>
                    <textarea required name="coreChallenge" rows={3} value={formData.coreChallenge} onChange={handleInputChange} className="w-full p-3 rounded-lg bg-seed-bg dark:bg-seed-bg-dark border border-seed-text-primary/20 dark:border-seed-border-dark focus:ring-2 focus:ring-seed-accent-green" placeholder="Describe the main issue you are addressing..." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-seed-text-secondary dark:text-seed-text-secondary-dark-theme mb-1">What are your primary goals for this document?</label>
                    <textarea required name="goals" rows={3} value={formData.goals} onChange={handleInputChange} className="w-full p-3 rounded-lg bg-seed-bg dark:bg-seed-bg-dark border border-seed-text-primary/20 dark:border-seed-border-dark focus:ring-2 focus:ring-seed-accent-green" placeholder="e.g., Secure $500k in funding, standardize operations..." />
                  </div>
                  <div className="pt-4 flex justify-between">
                    <button type="button" onClick={prevStep} className="text-seed-text-secondary hover:text-seed-text-primary">Back</button>
                    <button type="submit" disabled={isSubmitting} className="flex items-center gap-2 bg-seed-text-primary dark:bg-seed-accent-green text-white dark:text-seed-text-primary px-8 py-3 rounded-lg font-bold hover:bg-seed-text-primary-dark transition shadow-lg disabled:opacity-50">
                      {isSubmitting ? <Loader className="animate-spin" /> : 'Submit & Book Call'}
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
