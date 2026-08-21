import React, { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { 
    Mail, 
    Phone, 
    MapPin, 
    CheckCircle, 
    Loader, 
    ArrowRight,
    Building2,
    HeartHandshake,
    Zap,
    Palette,
    HeartPulse,
    GraduationCap,
    Recycle,
    Waypoints,
    Handshake,
    MessageSquare,
    Scale,
    Users,
    PieChart,
    Layers
} from 'lucide-react';

type ContactPageProps = {
    onNavigateHome: () => void;
    onNavigateToStudio: (prompt?: string) => void;
    onNavigateToSection: (sectionId: string) => void;
    onNavigateToCaseStudies: () => void;
    onNavigateToSystemsImpact: () => void;
    onNavigateToSolutionologist: () => void;
    onNavigateToFrameworks: () => void;
    onNavigateToConsulting: () => void;
    onNavigateToServices: () => void;
    userRole?: 'admin' | 'partner' | 'user';
    onNavigateToCOIP: () => void;
    onNavigateToFamilies: () => void;
    onNavigateToAbout: () => void;
    onNavigateToPrograms: () => void;
    onNavigateToContact: () => void;
    onNavigateToDonation: () => void;
    theme: 'light' | 'dark';
    toggleTheme: () => void;
    onOpenContactModal: (title: string) => void;
};

const pillars = [
  { id: 1, title: 'Affordable Housing & Economic Development' },
  { id: 2, title: 'Mental & Emotional Balance' },
  { id: 3, title: 'Health & Nutritional Balance' },
  { id: 4, title: 'Advanced Skills & Technology' },
  { id: 5, title: 'Cultural Heritage & Activities' },
  { id: 6, title: 'Environmental Sustainability' },
  { id: 7, title: 'Civic Engagement & Leadership' },
  { id: 8, title: 'Public Safety & Justice' },
  { id: 9, title: 'Social Connectivity & Support Systems' }
];

export const ContactPage: React.FC<ContactPageProps> = ({ 
    onNavigateHome, 
    onNavigateToStudio, 
    onNavigateToSection, 
    onNavigateToCaseStudies,
    onNavigateToSystemsImpact,
    onNavigateToSolutionologist,
    onNavigateToFrameworks,
    onNavigateToConsulting,
    onNavigateToServices,
    userRole,
    onNavigateToCOIP,
    onNavigateToFamilies,
    onNavigateToAbout,
    onNavigateToPrograms,
    onNavigateToContact,
    onNavigateToDonation,
    onOpenContactModal,
    theme, 
    toggleTheme 
}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        website: '',
        phone: '',
        expertise: '',
        pillars: [] as number[],
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handlePillarChange = (pillarId: number) => {
        setFormData(prev => {
            const newPillars = prev.pillars.includes(pillarId)
                ? prev.pillars.filter(id => id !== pillarId)
                : [...prev.pillars, pillarId];
            return { ...prev, pillars: newPillars };
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1500);
    };

    return (
        <div className="bg-seed-bg dark:bg-seed-bg-dark text-seed-text-secondary dark:text-seed-text-secondary-dark-theme font-sans min-h-screen flex flex-col">
            <Header 
                mode="landing" 
                onNavigateHome={onNavigateHome} 
                onNavigate={onNavigateToStudio}
                onNavigateToSection={onNavigateToSection}
                onNavigateToCaseStudies={onNavigateToCaseStudies}
                onNavigateToSystemsImpact={onNavigateToSystemsImpact}
                onNavigateToSolutionologist={onNavigateToSolutionologist}
                onNavigateToFrameworks={onNavigateToFrameworks}
                onNavigateToConsulting={onNavigateToConsulting}
                onNavigateToServices={onNavigateToServices}
                userRole={userRole}
                onNavigateToCOIP={onNavigateToCOIP}
                onNavigateToFamilies={onNavigateToFamilies}
                onNavigateToAbout={onNavigateToAbout}
                onNavigateToPrograms={onNavigateToPrograms}
                onNavigateToContact={onNavigateToContact}
                onNavigateToDonation={onNavigateToDonation}
                theme={theme} 
                toggleTheme={toggleTheme} 
                /* Fix: Added missing required 'currentPage' prop */
                currentPage="contact"
            />
            
            <main className="flex-grow">
                {/* HERO */}
                <section className="bg-seed-text-primary dark:bg-seed-surface-dark text-white py-24 lg:py-32 relative overflow-hidden text-center">
                    <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
                        <div className="absolute top-10 left-10 w-96 h-96 bg-seed-accent-green rounded-full filter blur-[150px] text-seed-accent-green"></div>
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                        <h1 className="text-4xl lg:text-7xl font-serif font-bold mb-6 leading-tight uppercase tracking-tight">
                            Get in Touch with <br/> <span className="text-seed-accent-green">A Solution Group</span>
                        </h1>
                        <p className="text-xl lg:text-2xl max-w-3xl mx-auto opacity-90 font-medium leading-relaxed">
                            Whether you're looking to partner, join our network, or request a briefing, our team is ready to connect.
                        </p>
                    </div>
                </section>

                {/* CONTACT SECTION */}
                <section className="py-24 bg-white dark:bg-seed-bg-dark">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="grid lg:grid-cols-3 gap-16">
                            
                            {/* Contact Info Column */}
                            <div className="lg:col-span-1 space-y-12">
                                <div>
                                    <h2 className="text-2xl font-serif font-bold text-seed-text-primary dark:text-white mb-6 uppercase tracking-tight">Contact Information</h2>
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-seed-bg dark:bg-seed-surface-dark rounded-xl text-seed-accent-green border border-seed-text-primary/5">
                                                <Mail size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-seed-text-primary dark:text-white">Email Us</h4>
                                                <p className="text-sm opacity-70">Darnell@asolutiongroup.com</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-seed-bg dark:bg-seed-surface-dark rounded-xl text-seed-accent-green border border-seed-text-primary/5">
                                                <Phone size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-seed-text-primary dark:text-white">Call or Text</h4>
                                                <p className="text-sm opacity-70">(725) 267-3398</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-seed-bg dark:bg-seed-surface-dark rounded-xl text-seed-accent-green border border-seed-text-primary/5">
                                                <MapPin size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-seed-text-primary dark:text-white">Location</h4>
                                                <p className="text-sm opacity-70">Las Vegas, NV</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-seed-text-primary text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                                     <div className="absolute top-0 right-0 w-24 h-24 bg-seed-accent-green opacity-10 rounded-bl-full"></div>
                                     <h3 className="text-xl font-serif font-bold mb-4 uppercase tracking-tight">Strategic Briefings</h3>
                                     <p className="text-sm opacity-80 leading-relaxed mb-6 font-medium">
                                         For agencies and jurisdictions interested in pilot implementation, we recommend scheduling a direct strategy briefing.
                                     </p>
                                     <button onClick={() => onOpenContactModal('Schedule Briefing')} className="flex items-center gap-2 font-bold text-seed-accent-green text-sm hover:gap-4 transition-all uppercase tracking-widest">
                                         Request Briefing <ArrowRight size={18} />
                                     </button>
                                </div>
                            </div>

                            {/* Form Column */}
                            <div className="lg:col-span-2">
                                <div className="bg-seed-bg dark:bg-seed-surface-dark p-8 md:p-12 rounded-[3rem] border border-seed-text-primary/5 dark:border-seed-border-dark shadow-2xl">
                                    {isSubmitted ? (
                                        <div className="text-center py-20 flex flex-col items-center">
                                            <CheckCircle size={64} className="text-seed-accent-green mb-6" />
                                            <h3 className="text-3xl font-serif font-bold text-seed-text-primary dark:text-white mb-4">Message Received</h3>
                                            <p className="text-xl text-seed-text-secondary dark:text-seed-text-secondary-dark-theme max-w-md font-medium leading-relaxed">
                                                Thank you for reaching out. A Solutionologist from our team will review your inquiry and follow up within 48 hours.
                                            </p>
                                            <button onClick={() => setIsSubmitted(false)} className="mt-10 text-seed-accent-green font-bold hover:underline uppercase tracking-widest text-sm">
                                                Send another message
                                            </button>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-8">
                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div>
                                                    <label htmlFor="name" className="block text-sm font-black uppercase tracking-widest text-seed-text-primary/60 dark:text-white/60 mb-2">Full Name</label>
                                                    <input type="text" name="name" id="name" required value={formData.name} onChange={handleInputChange} className="w-full bg-white dark:bg-seed-bg-dark border-2 border-seed-text-primary/10 dark:border-seed-border-dark rounded-xl py-4 px-4 text-seed-text-primary dark:text-white focus:border-seed-accent-green transition-all" placeholder="John Doe" />
                                                </div>
                                                <div>
                                                    <label htmlFor="email" className="block text-sm font-black uppercase tracking-widest text-seed-text-primary/60 dark:text-white/60 mb-2">Email Address</label>
                                                    <input type="email" name="email" id="email" required value={formData.email} onChange={handleInputChange} className="w-full bg-white dark:bg-seed-bg-dark border-2 border-seed-text-primary/10 dark:border-seed-border-dark rounded-xl py-4 px-4 text-seed-text-primary dark:text-white focus:border-seed-accent-green transition-all" placeholder="john@example.com" />
                                                </div>
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div>
                                                    <label htmlFor="website" className="block text-sm font-black uppercase tracking-widest text-seed-text-primary/60 dark:text-white/60 mb-2">Website (Optional)</label>
                                                    <input type="url" name="website" id="website" value={formData.website} onChange={handleInputChange} className="w-full bg-white dark:bg-seed-bg-dark border-2 border-seed-text-primary/10 dark:border-seed-border-dark rounded-xl py-4 px-4 text-seed-text-primary dark:text-white focus:border-seed-accent-green transition-all" placeholder="https://example.com" />
                                                </div>
                                                <div>
                                                    <label htmlFor="phone" className="block text-sm font-black uppercase tracking-widest text-seed-text-primary/60 dark:text-white/60 mb-2">Phone Number (Optional)</label>
                                                    <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-white dark:bg-seed-bg-dark border-2 border-seed-text-primary/10 dark:border-seed-border-dark rounded-xl py-4 px-4 text-seed-text-primary dark:text-white focus:border-seed-accent-green transition-all" placeholder="(555) 000-0000" />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="expertise" className="block text-sm font-black uppercase tracking-widest text-seed-text-primary/60 dark:text-white/60 mb-2">Tell us about your expertise or inquiry</label>
                                                <textarea name="expertise" id="expertise" rows={4} required value={formData.expertise} onChange={handleInputChange} className="w-full bg-white dark:bg-seed-bg-dark border-2 border-seed-text-primary/10 dark:border-seed-border-dark rounded-xl py-4 px-4 text-seed-text-primary dark:text-white focus:border-seed-accent-green transition-all" placeholder="How can we help you today?"></textarea>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-black uppercase tracking-widest text-seed-text-primary/60 dark:text-white/60 mb-4">Areas of Interest (Select all that apply)</label>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    {pillars.map(pillar => (
                                                        <label key={pillar.id} className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.pillars.includes(pillar.id) ? 'bg-seed-accent-green/10 border-seed-accent-green' : 'bg-white dark:bg-seed-bg-dark border-seed-text-primary/10 dark:border-seed-border-dark hover:border-seed-accent-green/30'}`}>
                                                            <input
                                                                type="checkbox"
                                                                checked={formData.pillars.includes(pillar.id)}
                                                                onChange={() => handlePillarChange(pillar.id)}
                                                                className="h-5 w-5 rounded border-gray-300 text-seed-accent-green focus:ring-seed-accent-green"
                                                            />
                                                            <span className="text-sm font-bold text-seed-text-primary dark:text-white">{pillar.title}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="flex justify-end pt-4">
                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="w-full md:w-auto bg-seed-text-primary dark:bg-seed-accent-green text-white dark:text-seed-text-primary font-black px-12 py-5 rounded-2xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 uppercase tracking-widest"
                                                >
                                                    {isSubmitting ? (
                                                        <>
                                                            <Loader size={20} className="animate-spin" />
                                                            <span>Sending Message...</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <span>Send Message</span>
                                                            <ArrowRight size={20} />
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer 
                onNavigate={onNavigateToStudio} 
                onNavigateToCOIP={onNavigateToCOIP}
                onNavigateToSection={onNavigateToSection} 
                onNavigateToConsulting={onNavigateToConsulting}
                onNavigateToServices={onNavigateToServices}
                onNavigateToSolutionologist={onNavigateToSolutionologist}
                onNavigateToSystemsImpact={onNavigateToSystemsImpact}
                onNavigateToCaseStudies={onNavigateToCaseStudies}
                onNavigateToFamilies={onNavigateToFamilies}
                onNavigateToAbout={onNavigateToAbout}
                onNavigateToPrograms={onNavigateToPrograms}
                onNavigateToContact={onNavigateToContact}
                onNavigateToDonation={onNavigateToDonation}
                onOpenContactModal={onOpenContactModal} 
                onOpenFeedbackModal={() => {}}
            />
        </div>
    );
};