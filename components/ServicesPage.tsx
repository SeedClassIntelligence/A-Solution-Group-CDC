import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { 
    ClipboardList, 
    FileEdit, 
    FileText, 
    Gavel, 
    ShieldCheck, 
    Search, 
    BarChart3, 
    ScrollText, 
    BookOpen, 
    Network, 
    Activity, 
    ClipboardCheck,
    ArrowRight,
    Sparkles,
    ShieldAlert,
    Landmark,
    Rocket,
    Building2,
    Users2,
    Briefcase,
    CheckCircle,
    // Added Phone icon for the consultation offering
    Phone,
    Video
} from 'lucide-react';

type ServicesPageProps = {
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
    onOpenAssessmentModal: () => void;
    theme: 'light' | 'dark';
    toggleTheme: () => void;
    onOpenContactModal: (title: string) => void;
};

const draftingServices = [
    { 
        i: Phone, 
        t: '30-Minute Free Consultation', 
        d: 'Available via phone or Zoom. Introductory strategic alignment session to review your project goals and determine framework feasibility.' 
    },
    { 
        i: ClipboardList, 
        t: 'Community Action Plans', 
        d: 'Coordinated neighborhood roadmaps aligning multiple pillars for hyper-local impact.' 
    },
    { 
        i: FileEdit, 
        t: 'Business Plan Writing', 
        d: 'Executive plans for community-centered enterprises, workforce hubs, and housing ventures.' 
    },
    { 
        i: FileText, 
        t: 'Grant Proposals', 
        d: 'Expert-authored narratives for federal, state, and private foundation funding opportunities.' 
    },
    { 
        i: Gavel, 
        t: 'Governance Bylaws', 
        d: 'Strategic policy and organizational structures for collaborative community governing bodies.' 
    },
    { 
        i: ShieldCheck, 
        t: 'Policies & Procedures (SOPs)', 
        d: 'Operational blueprints for high-acuity residential facilities, community centers, and programs.' 
    },
    { 
        i: Search, 
        t: 'Child Impact Protocols', 
        d: 'Standardized assessment tools and data-collection protocols for point-of-sentencing intervention.' 
    },
    { 
        i: BarChart3, 
        t: 'Evaluation Frameworks', 
        d: 'Designing logic models and outcome-tracking systems for Social Determinant of Health (SDOH) metrics.' 
    },
    { 
        i: ScrollText, 
        t: 'Community Benefit Agreements', 
        d: 'Strategically engineered agreements ensuring large-scale developments provide tangible community assets.' 
    },
    { 
        i: BookOpen, 
        t: 'Workforce Development Curricula', 
        d: 'Industry-aligned training modules, lesson plans, and instructional content for youth cohorts.' 
    },
    { 
        i: Network, 
        t: 'Inter-Agency Data Agreements', 
        d: 'Policy frameworks and MOUs enabling secure data interoperability between courts, schools, and providers.' 
    },
    { 
        i: Activity, 
        t: 'Crisis Intervention Protocols', 
        d: 'Step-by-step standard operating procedures for Family Navigators and Community Health Workers.' 
    },
    { 
        i: ClipboardCheck, 
        t: 'Employee Handbooks', 
        d: 'Compliance-first institutional handbooks tailored to social service and community development environments.' 
    }
];

export const ServicesPage: React.FC<ServicesPageProps> = ({
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
    onOpenAssessmentModal,
    onOpenContactModal,
    theme,
    toggleTheme
}) => {
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
                currentPage="services"
            />
            
            <main className="flex-grow">
                {/* HERO SECTION */}
                <section className="bg-seed-text-primary dark:bg-seed-surface-dark text-white py-24 lg:py-36 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-seed-accent-green opacity-5 rounded-full blur-[150px] -mr-40 -mt-40 pointer-events-none"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-seed-accent-green text-seed-text-primary font-black text-[10px] uppercase tracking-[0.2em] mb-8 rounded">
                            Growth & Execution Services
                        </div>
                        <h1 className="text-4xl lg:text-7xl font-serif font-bold mb-8 leading-tight max-w-5xl mx-auto">
                            Transforming Frameworks <br/> <span className="text-seed-accent-green">Into Actionable Strategy</span>
                        </h1>
                        <p className="text-xl lg:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed font-medium mb-12">
                            Access professional drafting and strategy services designed to bring community-centered visions to life with institutional rigor and fundable precision.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <button onClick={() => onNavigateToStudio()} className="bg-seed-accent-green text-seed-text-primary font-black px-10 py-5 rounded-xl hover:shadow-2xl transition-all text-lg shadow-lg flex items-center gap-3">
                                <Sparkles size={22} /> Enter Strategic Studio
                            </button>
                            <button onClick={() => onOpenContactModal('General Service Inquiry')} className="bg-white/10 backdrop-blur-md text-white border border-white/20 font-black px-10 py-5 rounded-xl hover:bg-white/20 transition-all text-lg shadow-lg flex items-center gap-3">
                                <FileText size={22} /> Inquire About Services
                            </button>
                        </div>
                    </div>
                </section>

                {/* STRATEGIC DRAFTING SERVICES SECTION */}
                <section className="py-24 bg-white dark:bg-seed-bg-dark">
                    <div className="container mx-auto px-4 max-get-involved-xl max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-seed-text-primary dark:text-white mb-6 uppercase tracking-tight">Strategic Drafting Services</h2>
                            <p className="text-xl text-seed-text-secondary dark:text-seed-text-secondary-dark-theme max-w-3xl mx-auto font-medium">
                                High-fidelity, fundable, and framework-aligned documentation for entities and individuals.
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {draftingServices.map((service, i) => (
                                <div key={i} className={`bg-seed-bg dark:bg-seed-surface-dark p-8 rounded-[2rem] border transition-all shadow-lg flex flex-col h-full group ${service.t.includes('Free Consultation') ? 'border-seed-accent-green bg-seed-accent-green/5' : 'border-seed-text-primary/5 hover:border-seed-accent-green'}`}>
                                    <div className="w-12 h-12 bg-seed-text-primary text-white dark:bg-seed-accent-green dark:text-seed-text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <service.i size={24} />
                                    </div>
                                    <h4 className="text-xl font-bold text-seed-text-primary dark:text-white mb-3 leading-tight">
                                        {service.t}
                                        {service.t.includes('Free') && <span className="ml-2 inline-block px-2 py-0.5 bg-seed-accent-green text-seed-text-primary text-[10px] font-black uppercase rounded">Featured</span>}
                                    </h4>
                                    <p className="text-sm text-seed-text-secondary dark:text-seed-text-secondary-dark-theme leading-relaxed opacity-80 flex-grow">{service.d}</p>
                                    <button 
                                        onClick={() => {
                                            if (service.t.includes('Consultation')) {
                                                onOpenAssessmentModal();
                                            } else {
                                                onOpenContactModal(`Service Inquiry: ${service.t}`);
                                            }
                                        }}
                                        className="mt-8 text-seed-accent-green font-black uppercase text-[10px] tracking-widest flex items-center gap-2 group/btn"
                                    >
                                        {service.t.includes('Consultation') ? 'Schedule Now' : 'Inquire'} <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE ASG SERVICES */}
                <section className="py-24 bg-seed-bg dark:bg-seed-surface-dark/30 border-y border-seed-text-primary/5">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <h2 className="text-3xl lg:text-5xl font-serif font-bold text-seed-text-primary dark:text-white mb-8 leading-tight">
                                    Architecture for <br/> Growth
                                </h2>
                                <p className="text-xl text-seed-text-secondary dark:text-seed-text-secondary-dark-theme leading-relaxed mb-8">
                                    Most organizations lack the time and technical expertise to translate complex community needs into the high-fidelity documentation required for funding and scale.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        'Framework-aligned: All documents adhere to WCS principles.',
                                        'Fundable: Structured for federal, state, and foundation review.',
                                        'Actionable: Step-by-step blueprints, not just fluff.',
                                        'Expert-verified: Crafted by Solutionologists with lived experience.'
                                    ].map((point, idx) => (
                                        <div key={idx} className="flex gap-3 items-center font-bold text-seed-text-primary dark:text-white">
                                            <CheckCircle size={20} className="text-seed-accent-green flex-shrink-0" />
                                            <span>{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-seed-text-primary text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden flex flex-col items-center justify-center text-center">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-seed-accent-green opacity-10 rounded-bl-full"></div>
                                <h3 className="text-2xl font-serif font-bold mb-6">Need a custom scope?</h3>
                                <p className="text-lg opacity-80 mb-10 max-w-xs">
                                    We provide tailored strategic support for unique community development and reentry initiatives.
                                </p>
                                <button onClick={onOpenAssessmentModal} className="bg-seed-accent-green text-seed-text-primary font-black px-10 py-5 rounded-2xl hover:bg-white transition-all shadow-xl">
                                    START ASSESSMENT
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHO WE SERVE */}
                <section className="py-24 bg-white dark:bg-seed-bg-dark">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-seed-text-primary dark:text-white mb-6 uppercase tracking-tight">Who We Serve</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { 
                                    i: Landmark, 
                                    t: 'Local Non-Profits', 
                                    d: 'Strengthening capacity through professional documentation and fundable proposals.' 
                                },
                                { 
                                    i: Building2, 
                                    t: 'Developers', 
                                    d: 'Designing CBAs and community action plans for equitable neighborhood growth.' 
                                },
                                { 
                                    i: Users2, 
                                    t: 'Community Coalitions', 
                                    d: 'Formalizing governance and inter-agency agreements for collective impact.' 
                                },
                                { 
                                    i: Briefcase, 
                                    t: 'Small Businesses', 
                                    d: 'Drafting community-centered business plans and workforce strategies.' 
                                },
                                { 
                                    i: Rocket, 
                                    t: 'Startup Entities', 
                                    d: 'Foundational bylaws and SOPs for mission-driven organizations.' 
                                },
                                { 
                                    i: Activity, 
                                    t: 'Service Providers', 
                                    d: 'Standardizing care delivery models and evaluation frameworks.' 
                                }
                            ].map((client, i) => (
                                <div key={i} className="bg-seed-bg dark:bg-seed-surface-dark p-8 rounded-3xl border border-seed-text-primary/5 flex flex-col h-full group hover:border-seed-accent-green transition-all">
                                    <div className="w-12 h-12 bg-seed-text-primary/5 dark:bg-seed-accent-green/10 text-seed-accent-green rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <client.i size={24} />
                                    </div>
                                    <h4 className="text-xl font-bold text-seed-text-primary dark:text-white mb-3 leading-tight">{client.t}</h4>
                                    <p className="text-sm opacity-70 leading-relaxed">{client.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="py-24 lg:py-40 bg-seed-bg dark:bg-seed-bg-dark text-center relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-seed-accent-green/5 rounded-full filter blur-[120px] pointer-events-none"></div>
                    <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                        <h2 className="text-4xl lg:text-7xl font-serif font-bold text-seed-text-primary dark:text-white mb-10 leading-tight">
                            Ready to Execute?
                        </h2>
                        <p className="text-xl lg:text-2xl text-seed-text-secondary dark:text-seed-text-secondary-dark-theme font-medium mb-16 leading-relaxed">
                            Stop waiting for the "right time" to build your community solution. Start with high-fidelity strategy.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <button onClick={onOpenAssessmentModal} className="bg-seed-text-primary dark:bg-seed-accent-green text-white dark:text-seed-text-primary font-black px-12 py-5 rounded-xl hover:shadow-2xl transition-all text-xl shadow-lg">
                                Schedule Strategy Call
                            </button>
                            <button onClick={() => onNavigateToStudio()} className="bg-white dark:bg-seed-surface-dark text-seed-text-primary dark:text-seed-accent-green border-2 border-seed-text-primary/10 dark:border-seed-border-dark font-black px-12 py-5 rounded-xl hover:shadow-2xl transition-all text-xl shadow-lg flex items-center gap-3">
                                <Sparkles size={24} /> Try Vera Studio
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