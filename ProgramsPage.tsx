import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { 
    HardHat, 
    Hammer, 
    GraduationCap, 
    Users, 
    Home, 
    HeartPulse, 
    Zap, 
    ArrowRight, 
    CheckCircle, 
    Quote, 
    Building2, 
    Target, 
    ShieldAlert, 
    Clock, 
    Coins, 
    Phone, 
    Mail, 
    Globe, 
    Rocket, 
    FileText, 
    Sparkles, 
    HeartHandshake,
    Stethoscope,
    LayoutTemplate,
    Activity,
    Award,
    TrendingUp,
    Download
} from 'lucide-react';

type ProgramsPageProps = {
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

export const ProgramsPage: React.FC<ProgramsPageProps> = ({
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
                currentPage="programs"
            />
            
            <main className="flex-grow">
                {/* HERO SECTION */}
                <section className="bg-seed-text-primary dark:bg-seed-surface-dark text-white py-24 lg:py-40 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-seed-accent-green opacity-10 rounded-full blur-[150px] -mr-40 -mt-40 pointer-events-none"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-seed-accent-green text-seed-text-primary font-black text-[10px] uppercase tracking-[0.2em] mb-8 rounded">
                            Evidence-Based Impact — ASG CDC
                        </div>
                        <h1 className="text-5xl lg:text-8xl font-serif font-bold mb-8 leading-tight max-w-5xl mx-auto">
                            Programs for <br/> <span className="text-seed-accent-green">Generational Change.</span>
                        </h1>
                        <p className="text-xl lg:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed font-medium mb-12">
                            A Solution Group CDC operates evidence-based programs addressing intergenerational incarceration through workforce development, housing stability, and comprehensive community support.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <button onClick={() => onOpenContactModal('Program Inquiry')} className="bg-seed-accent-green text-seed-text-primary font-black px-12 py-5 rounded-xl hover:shadow-2xl transition-all text-xl shadow-lg flex items-center gap-3">
                                Explore Our Work <ArrowRight size={24} />
                            </button>
                        </div>
                    </div>
                </section>

                {/* SECTION A — YOUTHBUILD PROGRAM */}
                <section id="youthbuild" className="py-24 bg-white dark:bg-seed-bg-dark">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            <div>
                                <span className="text-seed-accent-green font-black uppercase text-[10px] tracking-[0.3em] block mb-4">Program A</span>
                                <h2 className="text-3xl lg:text-5xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-8 leading-tight">
                                    YouthBuild Program <br/> <span className="text-2xl lg:text-3xl font-sans text-seed-text-secondary dark:text-white/60">(Las Vegas, Nevada)</span>
                                </h2>
                                <p className="text-xl text-seed-text-secondary dark:text-seed-text-secondary-dark-theme mb-8 leading-relaxed">
                                    Construction-based workforce development serving 65-100 opportunity youth (ages 16-24) annually through a comprehensive integration of training and employment.
                                </p>
                                <div className="space-y-4 mb-10">
                                    {[
                                        '12-week paid pre-construction training (OSHA-10, fundamentals)',
                                        '18-month paid construction employment on affordable housing',
                                        'Blended education with AI literacy, GED/HiSET preparation',
                                        'CHW-centered supportive services (health, housing, child care)',
                                        'Registered Apprenticeship pathways to union careers'
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-4 items-start font-bold text-seed-text-primary dark:text-white">
                                            <CheckCircle className="text-seed-accent-green flex-shrink-0 mt-1" size={20} />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div className="bg-seed-bg dark:bg-seed-surface-dark px-6 py-4 rounded-xl border border-seed-accent-green/30">
                                        <span className="block text-[10px] uppercase font-black opacity-50 mb-1">Status</span>
                                        <span className="font-bold text-seed-text-primary dark:text-white">DOL Application Submitted</span>
                                    </div>
                                    <div className="bg-seed-bg dark:bg-seed-surface-dark px-6 py-4 rounded-xl border border-seed-accent-green/30">
                                        <span className="block text-[10px] uppercase font-black opacity-50 mb-1">Launch</span>
                                        <span className="font-bold text-seed-text-primary dark:text-white">Summer/Fall 2026</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-seed-text-primary text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-seed-accent-green opacity-10 rounded-bl-full"></div>
                                <h3 className="text-2xl font-serif font-bold mb-8 flex items-center gap-3"><Target className="text-seed-accent-green" /> Program Goals</h3>
                                <div className="space-y-6">
                                    {[
                                        { l: 'Measurable skill gains', v: '80%' },
                                        { l: 'Placement in employment/education', v: '75%' },
                                        { l: 'Retention at 6 and 12 months', v: '70%' },
                                        { l: 'Registered Apprenticeship entry', v: '10%' },
                                        { l: 'Affordable housing units constructed', v: '1+' }
                                    ].map((goal, i) => (
                                        <div key={i} className="flex justify-between items-center border-b border-white/10 pb-4">
                                            <span className="text-sm font-medium opacity-80">{goal.l}</span>
                                            <span className="text-2xl font-serif font-black text-seed-accent-green">{goal.v}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-10 flex flex-wrap gap-4">
                                    <button onClick={() => onOpenContactModal('Download YouthBuild Overview')} className="flex-1 bg-white/10 hover:bg-white/20 px-4 py-3 rounded-lg flex items-center justify-center gap-2 text-sm font-bold transition">
                                        <Download size={16} /> Overview PDF
                                    </button>
                                    <button onClick={() => onOpenContactModal('Impact Projections')} className="flex-1 bg-seed-accent-green text-seed-text-primary px-4 py-3 rounded-lg flex items-center justify-center gap-2 text-sm font-bold transition">
                                        <TrendingUp size={16} /> Projections
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION B — WORKFORCE-TO-HOUSING PIPELINE */}
                <section id="pipeline" className="py-24 bg-seed-bg dark:bg-seed-surface-dark/30 border-y border-seed-text-primary/5">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="order-2 lg:order-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { t: '15+ Youth', d: 'OSHA-10 & 30 Certified' },
                                    { t: '30+ Paid Jobs', d: 'Construction jobs created' },
                                    { t: '128% Increase', d: 'Property value growth' },
                                    { t: 'Zero Incidents', d: 'Safety across 18 months' }
                                ].map((stat, i) => (
                                    <div key={i} className="p-8 bg-white dark:bg-seed-surface-dark rounded-[2rem] shadow-xl border border-seed-text-primary/5 text-center">
                                        <span className="block text-3xl font-serif font-black text-seed-accent-green mb-2">{stat.t}</span>
                                        <span className="text-xs font-black uppercase tracking-widest opacity-60">{stat.d}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="order-1 lg:order-2">
                                <span className="text-seed-accent-green font-black uppercase text-[10px] tracking-[0.3em] block mb-4">Program B</span>
                                <h2 className="text-3xl lg:text-5xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-8 leading-tight">
                                    Workforce-to-Housing Pipeline
                                </h2>
                                <p className="text-xl text-seed-text-secondary dark:text-seed-text-secondary-dark-theme mb-8 leading-relaxed font-medium">
                                    The model uses live construction sites as paid training environments where opportunity youth gain industry credentials while building affordable housing.
                                </p>
                                <div className="space-y-6">
                                    <div className="p-6 bg-seed-text-primary/5 dark:bg-seed-accent-green/5 rounded-2xl border-l-4 border-seed-accent-green">
                                        <h4 className="font-bold text-seed-text-primary dark:text-white mb-2">Community Impact</h4>
                                        <p className="text-sm opacity-80 italic">"Addresses affordable housing crisis while revitalizing neighborhoods through youth employment."</p>
                                    </div>
                                    <div className="flex flex-wrap gap-4 pt-4">
                                        <button onClick={() => onOpenContactModal('View Portfolio')} className="flex items-center gap-2 font-black text-seed-accent-green text-sm uppercase tracking-widest hover:gap-4 transition-all">
                                            See Project Portfolio <ArrowRight size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION C — COIP FRAMEWORK */}
                <section id="coip-framework" className="py-24 bg-white dark:bg-seed-bg-dark">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-20">
                            <span className="text-seed-accent-green font-black uppercase text-[10px] tracking-[0.3em] block mb-4">Program C</span>
                            <h2 className="text-4xl lg:text-6xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-6">COIP Framework</h2>
                            <p className="text-xl text-seed-text-secondary dark:text-seed-text-secondary-dark-theme max-w-3xl mx-auto leading-relaxed">
                                National policy architecture addressing the 2.7 million children in America with incarcerated parents—the largest unrecognized childhood trauma population.
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                            <div className="p-10 bg-seed-bg dark:bg-seed-surface-dark rounded-[3rem] shadow-xl border-t-8 border-seed-text-primary flex flex-col">
                                <h3 className="text-2xl font-serif font-bold mb-6">The Intervention</h3>
                                <p className="text-lg opacity-80 mb-8 flex-grow">
                                    The COIP framework intervenes at **point-of-sentencing** (not release) to stabilize families before crisis cascades into foster care, juvenile justice, and eventual adult incarceration.
                                </p>
                                <div className="space-y-4">
                                    <h4 className="font-black text-xs uppercase tracking-widest opacity-50">Core Components:</h4>
                                    {['Sentencing stabilization protocols', 'Cross-system coordination', 'Trauma-informed delivery', 'Economic opportunity pathways'].map(c => (
                                        <div key={c} className="flex gap-3 text-sm font-bold">
                                            <CheckCircle size={18} className="text-seed-accent-green flex-shrink-0" />
                                            <span>{c}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="p-10 bg-seed-text-primary text-white rounded-[3rem] shadow-xl border-t-8 border-seed-accent-green flex flex-col">
                                <h3 className="text-2xl font-serif font-bold mb-6">National Implementation</h3>
                                <p className="text-lg opacity-80 mb-8 flex-grow">
                                    Our systems architecture is deployed across multiple jurisdictions to address the full lifecycle of family harm.
                                </p>
                                <div className="space-y-6">
                                    <div className="flex flex-wrap gap-2">
                                        {['Nevada', 'Washington D.C.', 'Wisconsin'].map(state => (
                                            <span key={state} className="bg-white/10 px-3 py-1 rounded-full text-xs font-bold border border-white/10">{state}</span>
                                        ))}
                                    </div>
                                    <p className="text-sm opacity-60">Utilizing Whole Community Solution (WCS) architecture.</p>
                                </div>
                                <div className="mt-auto pt-10">
                                    <button onClick={() => onNavigateToCOIP()} className="w-full bg-seed-accent-green text-seed-text-primary font-black py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white transition uppercase tracking-widest text-xs">
                                        Learn More About COIP <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION D — CHW SERVICES */}
                <section id="chw" className="py-24 bg-seed-text-primary dark:bg-seed-surface-dark text-white relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-seed-accent-green/5 rounded-full filter blur-[120px] pointer-events-none"></div>
                    <div className="container mx-auto px-4 max-w-6xl relative z-10">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <span className="text-seed-accent-green font-black uppercase text-[10px] tracking-[0.3em] block mb-4">Program D</span>
                                <h2 className="text-3xl lg:text-6xl font-serif font-bold mb-8">Community Health <br/> Worker Services</h2>
                                <p className="text-xl opacity-80 leading-relaxed mb-8">
                                    CHW-centered case management and barrier resolution ensuring workforce program participants have access to healthcare, housing, and stabilization.
                                </p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                                        <h4 className="font-bold text-seed-accent-green mb-2">Sustainability</h4>
                                        <p className="text-sm opacity-70">Medicaid-reimbursable services ensuring long-term program stability beyond grant funding.</p>
                                    </div>
                                    <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                                        <h4 className="font-bold text-seed-accent-green mb-2">Network</h4>
                                        <p className="text-sm opacity-70">Connects to the Solutionologist Network for specialized expertise.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-xl p-10 rounded-[3rem] border border-white/20">
                                <h4 className="font-black text-xs uppercase tracking-widest text-seed-accent-green mb-8 flex items-center gap-2"><Stethoscope size={20}/> Service Delivery</h4>
                                <div className="space-y-6">
                                    {[
                                        'Comprehensive needs assessment',
                                        'Individualized support planning',
                                        'Benefits enrollment support',
                                        'Behavioral health coordination',
                                        'Housing stability intervention',
                                        'Transportation & childcare navigation'
                                    ].map((service, i) => (
                                        <div key={i} className="flex gap-4 items-center font-bold text-lg">
                                            <div className="w-2 h-2 rounded-full bg-seed-accent-green"></div>
                                            {service}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* OUR PARTNERS */}
                <section className="py-24 bg-white dark:bg-seed-bg-dark">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-6">Our Partners</h2>
                            <p className="text-xl text-seed-text-secondary dark:text-seed-text-secondary-dark-theme">Collaborating to build pathways from training to careers.</p>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                            {[
                                { n: 'KG Development Group', l: 'Construction Employer' },
                                { n: 'Advent United Methodist', l: 'Training Facility' },
                                { n: 'Workforce Connections', l: 'NV One-Stop Center' },
                                { n: 'Nevada OWINN', l: 'Apprenticeship Coord.' },
                                { n: 'Southwest Carpenters', l: 'Union Apprenticeship' }
                            ].map((partner, i) => (
                                <div key={i} className="flex flex-col items-center text-center p-4 bg-seed-bg dark:bg-seed-surface-dark rounded-2xl border border-seed-text-primary/5 hover:border-seed-accent-green transition-all h-full justify-center">
                                    <span className="block font-black text-seed-text-primary dark:text-white text-sm mb-2">{partner.n}</span>
                                    <span className="text-[10px] uppercase tracking-widest text-seed-text-secondary/60 dark:text-seed-text-secondary-dark-theme/60">{partner.l}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL CALL-TO-ACTION */}
                <section className="py-24 lg:py-40 bg-seed-bg dark:bg-seed-bg-dark text-center relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-seed-accent-green/5 rounded-full filter blur-[120px] pointer-events-none"></div>
                    <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                        <h2 className="text-4xl lg:text-7xl font-serif font-bold text-seed-text-primary dark:text-white mb-10 leading-tight">
                            A Coordinated <br/> <span className="text-seed-accent-green">Response to Crisis.</span>
                        </h2>
                        <p className="text-xl lg:text-2xl text-seed-text-secondary dark:text-seed-text-secondary-dark-theme font-medium mb-16 leading-relaxed">
                            Join us in building the infrastructure required to end the cycle of intergenerational incarceration.
                        </p>
                        <div className="flex flex-col items-center gap-10">
                            <button onClick={() => onOpenContactModal('General Program Contact')} className="bg-seed-text-primary dark:bg-seed-accent-green text-white dark:text-seed-text-primary font-black px-12 py-5 rounded-xl hover:shadow-2xl transition-all text-xl shadow-lg flex items-center gap-3">
                                <Rocket size={24} /> Get Involved
                            </button>
                            
                            <div className="grid md:grid-cols-2 gap-8 w-full max-w-2xl">
                                <div className="p-6 bg-white dark:bg-seed-surface-dark rounded-2xl shadow-md border border-seed-text-primary/10 flex items-center gap-4 text-left">
                                    <Phone className="text-seed-accent-green" size={24} />
                                    <div>
                                        <span className="block text-xs uppercase tracking-widest text-seed-text-secondary/60">Call or Text</span>
                                        <span className="font-bold text-seed-text-primary dark:text-white">(725) 267-3398</span>
                                    </div>
                                </div>
                                <div className="p-6 bg-white dark:bg-seed-surface-dark rounded-2xl shadow-md border border-seed-text-primary/10 flex items-center gap-4 text-left">
                                    <Mail className="text-seed-accent-green" size={24} />
                                    <div>
                                        <span className="block text-xs uppercase tracking-widest text-seed-text-secondary/60">Email Us</span>
                                        <span className="font-bold text-seed-text-primary dark:text-white">Darnell@asolutiongroup.com</span>
                                    </div>
                                </div>
                            </div>
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