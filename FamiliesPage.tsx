import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { 
    Heart, 
    ShieldAlert, 
    CheckCircle, 
    Users, 
    Phone, 
    LifeBuoy, 
    ArrowRight,
    MapPin,
    AlertCircle,
    Home,
    GraduationCap,
    HeartPulse,
    HelpingHand
} from 'lucide-react';

type FamiliesPageProps = {
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
    onOpenContactModal: (title: string) => void;
    theme: 'light' | 'dark';
    toggleTheme: () => void;
};

export const FamiliesPage: React.FC<FamiliesPageProps> = ({
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
    return (
        <div className="bg-seed-bg dark:bg-seed-bg-dark text-seed-text-secondary dark:text-seed-text-secondary-dark-theme font-sans min-h-screen flex flex-col">
            <Header 
                mode="landing" 
                onNavigate={onNavigateToStudio}
                onNavigateHome={onNavigateHome}
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
                currentPage="families"
            />
            
            <main className="flex-grow">
                {/* HERO SECTION */}
                <section className="bg-seed-text-primary dark:bg-seed-surface-dark text-white py-24 lg:py-32 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-seed-accent-green opacity-5 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none"></div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl lg:text-7xl font-serif font-bold mb-8 leading-tight">
                                If Someone You Love Was Just Sentenced
                            </h1>
                            <p className="text-2xl lg:text-4xl font-serif italic text-seed-accent-green mb-10">
                                You are not alone.
                            </p>
                            <p className="text-xl lg:text-2xl opacity-90 mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
                                When a parent is incarcerated, families are suddenly forced to navigate overwhelming emotional, financial, and logistical challenges — often with little guidance or support.
                            </p>
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl max-w-3xl mx-auto text-left">
                                <p className="text-lg lg:text-xl font-bold leading-relaxed">
                                    A Solution Group CDC exists to make sure families know where to turn and how to begin stabilizing the road ahead.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHAT FAMILIES EXPERIENCE FIRST */}
                <section className="py-24 bg-white dark:bg-seed-bg-dark">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <h2 className="text-3xl lg:text-5xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-8 leading-tight">
                                    What Families Experience First
                                </h2>
                                <p className="text-xl text-seed-text-secondary dark:text-seed-text-secondary-dark-theme leading-relaxed mb-8 font-medium">
                                    The first weeks after sentencing are often the most overwhelming.
                                </p>
                                <p className="text-lg text-seed-text-secondary dark:text-seed-text-secondary-dark-theme mb-6">
                                    Families frequently face:
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        { i: HeartPulse, t: 'Sudden loss of income' },
                                        { i: Home, t: 'Housing instability or eviction risk' },
                                        { i: ShieldAlert, t: 'Children struggling emotionally or behaviorally' },
                                        { i: GraduationCap, t: 'Confusion about school, healthcare, and benefits' },
                                        { i: LifeBuoy, t: 'Difficulty maintaining parent–child connection' },
                                        { i: AlertCircle, t: 'Isolation, shame, and lack of support' }
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 font-bold text-seed-text-primary dark:text-white text-lg">
                                            <item.i className="text-seed-accent-green flex-shrink-0" size={24} />
                                            <span>{item.t}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-10 font-bold text-seed-text-primary dark:text-seed-accent-green text-xl border-l-4 border-seed-accent-green pl-6">
                                    These challenges are real, and they are common.
                                </p>
                            </div>
                            <div className="hidden lg:block relative">
                                <div className="aspect-square bg-seed-bg dark:bg-seed-surface-dark rounded-[3rem] border border-seed-text-primary/10 flex items-center justify-center p-12">
                                     <Heart size={300} className="text-seed-accent-green opacity-10 animate-pulse" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* HOW WE CAN HELP RIGHT NOW */}
                <section className="py-24 bg-seed-bg dark:bg-seed-surface-dark/30 border-y border-seed-text-primary/5">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-6">How We Can Help Right Now</h2>
                            <p className="text-xl text-seed-text-secondary dark:text-seed-text-secondary-dark-theme max-w-3xl mx-auto leading-relaxed">
                                While our full model is expanding through partnerships and pilots, we can help families connect with Community Health Workers and local resources.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                             <div className="bg-white dark:bg-seed-bg-dark p-8 rounded-3xl shadow-xl border border-seed-text-primary/5">
                                <h4 className="font-bold text-seed-text-primary dark:text-white text-xl mb-6">We can help you:</h4>
                                <ul className="space-y-4">
                                    {[
                                        'Identify local support services',
                                        'Connect with Community Health Workers',
                                        'Find behavioral health and counseling resources',
                                        'Locate housing and financial assistance programs',
                                        'Navigate school and youth services',
                                        'Learn how to maintain healthy family connection during incarceration'
                                    ].map((point, idx) => (
                                        <li key={idx} className="flex gap-3 text-lg font-medium text-seed-text-secondary dark:text-seed-text-secondary-dark-theme">
                                            <CheckCircle size={22} className="text-seed-accent-green flex-shrink-0 mt-0.5" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-col justify-center bg-seed-text-primary text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-seed-accent-green opacity-10 rounded-bl-full"></div>
                                <h3 className="text-3xl font-serif font-bold mb-6">Our Goal</h3>
                                <p className="text-2xl font-serif italic text-seed-accent-green leading-relaxed">
                                    "Our goal is to help you take the first step toward stability."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONNECT WITH A COMMUNITY HEALTH WORKER */}
                <section className="py-24 bg-white dark:bg-seed-bg-dark">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-6">Connect With a Community Health Worker</h2>
                        </div>
                        <div className="space-y-8 text-xl text-seed-text-secondary dark:text-seed-text-secondary-dark-theme leading-relaxed">
                            <p>Community Health Workers are trained navigators who help families understand options, locate resources, and create a plan forward.</p>
                            <p className="font-bold text-seed-text-primary dark:text-white p-6 bg-seed-bg dark:bg-seed-surface-dark rounded-2xl border-l-8 border-seed-accent-green">
                                They are not case managers or social workers — they are community-based guides who help families navigate systems and remove barriers.
                            </p>
                            <p className="text-center">Request a connection and we will follow up with next steps.</p>
                            <div className="flex justify-center pt-8">
                                <button onClick={() => onOpenContactModal('Request Support Connection')} className="bg-seed-accent-green text-seed-text-primary font-black px-12 py-5 rounded-xl hover:shadow-2xl transition-all text-xl shadow-lg flex items-center gap-3">
                                    <HelpingHand size={24} /> Request Support
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* EMERGENCY SITUATIONS */}
                <section className="py-24 bg-red-50 dark:bg-red-900/10 border-y border-red-100 dark:border-red-900/20">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="flex items-center gap-4 mb-8 justify-center">
                            <ShieldAlert size={48} className="text-red-600" />
                            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-red-900 dark:text-red-200">Emergency Situations</h2>
                        </div>
                        <div className="bg-white dark:bg-seed-surface-dark p-10 rounded-[2.5rem] shadow-xl border border-red-200 dark:border-red-900/40">
                            <p className="text-xl text-red-800 dark:text-red-300 mb-8 font-bold text-center">If your family is facing an immediate crisis:</p>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-2xl text-center border border-red-100">
                                    <span className="block text-4xl font-black text-red-600 mb-2">211</span>
                                    <p className="text-sm font-bold text-red-900 dark:text-red-200 uppercase tracking-widest">Call for local resources</p>
                                </div>
                                <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-2xl text-center border border-red-100">
                                    <Phone className="mx-auto text-red-600 mb-2" size={32} />
                                    <p className="text-sm font-bold text-red-900 dark:text-red-200 uppercase tracking-widest">Local Crisis Hotline</p>
                                </div>
                                <div className="p-6 bg-red-600 rounded-2xl text-center shadow-lg">
                                    <span className="block text-4xl font-black text-white mb-2">911</span>
                                    <p className="text-sm font-bold text-white uppercase tracking-widest">Immediate Danger</p>
                                </div>
                            </div>
                            <p className="mt-10 text-center text-red-800/70 dark:text-red-300/70 italic">
                                We are not a crisis response organization, but we can help you find the right support.
                            </p>
                        </div>
                    </div>
                </section>

                {/* YOU ARE NOT ALONE */}
                <section className="py-24 lg:py-40 bg-seed-bg dark:bg-seed-bg-dark text-center relative overflow-hidden">
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-seed-accent-green/5 rounded-full filter blur-[120px] pointer-events-none"></div>
                    <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                        <h2 className="text-4xl lg:text-7xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-8 leading-tight">
                            You Are Not Alone
                        </h2>
                        <div className="space-y-6 text-xl lg:text-2xl text-seed-text-secondary dark:text-seed-text-secondary-dark-theme font-medium mb-16">
                            <p>Millions of families are navigating this experience.</p>
                            <p className="text-seed-accent-green text-3xl font-serif">Support exists, and connection is possible.</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6">
                            <button onClick={() => onOpenContactModal('Family Support Contact')} className="bg-seed-text-primary dark:bg-seed-accent-green text-white dark:text-seed-text-primary font-black px-12 py-5 rounded-xl hover:shadow-2xl transition-all text-xl shadow-lg flex items-center gap-3">
                                <Users size={24} /> Contact Us
                            </button>
                            <button onClick={onNavigateHome} className="bg-white dark:bg-seed-surface-dark text-seed-text-primary dark:text-seed-accent-green border-2 border-seed-text-primary/10 dark:border-seed-border-dark font-black px-12 py-5 rounded-xl hover:shadow-2xl transition-all text-xl shadow-lg">
                                Back to Home
                            </button>
                        </div>
                    </div>
                </section>

            </main>
            
            <Footer 
                onNavigate={() => onNavigateToStudio()} 
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