import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { 
    Landmark, 
    Rocket, 
    HeartPulse, 
    Users2, 
    Building2, 
    Puzzle, 
    ShieldCheck, 
    Zap, 
    Coins, 
    ArrowRight, 
    CheckCircle, 
    Target, 
    Briefcase,
    Phone,
    FileText,
    Globe,
    Layers,
    ShieldAlert,
    BarChart3,
    Search,
    Gavel,
    GraduationCap,
    Clock,
    FileSearch,
    Stethoscope,
    FileEdit,
    ClipboardList,
    TrendingUp,
    Shield,
    BookOpen,
    Binary,
    Activity,
    ClipboardCheck,
    ScrollText,
    Book,
    FileBox,
    Network
} from 'lucide-react';

type ConsultingPageProps = {
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
    onOpenBetaModal: () => void;
    theme: 'light' | 'dark';
    toggleTheme: () => void;
    onOpenContactModal: (title: string) => void;
};

export const ConsultingPage: React.FC<ConsultingPageProps> = ({
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
    onOpenBetaModal,
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
                currentPage="consulting"
            />
            
            <main className="flex-grow">
                {/* HERO SECTION */}
                <section className="bg-seed-text-primary dark:bg-seed-surface-dark text-white py-24 lg:py-36 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-seed-accent-green opacity-5 rounded-full blur-[150px] -mr-40 -mt-40 pointer-events-none"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-seed-accent-green text-seed-text-primary font-black text-[10px] uppercase tracking-[0.2em] mb-8 rounded">
                            Institutional Implementation — ASG CDC
                        </div>
                        <h1 className="text-4xl lg:text-7xl font-serif font-bold mb-8 leading-tight max-w-5xl mx-auto">
                            Implement the Whole Community <br/> <span className="text-seed-accent-green">Architecture in Your Region</span>
                        </h1>
                        <p className="text-xl lg:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed font-medium mb-12">
                            A Solution Group CDC partners with jurisdictions, foundations, healthcare systems, and large agencies to deploy interoperable point-of-sentencing intervention models.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <button onClick={onOpenAssessmentModal} className="bg-seed-accent-green text-seed-text-primary font-black px-10 py-5 rounded-xl hover:shadow-2xl transition-all text-lg shadow-lg flex items-center gap-3">
                                <Phone size={22} /> Schedule Implementation Strategy
                            </button>
                            <button onClick={onNavigateToServices} className="bg-white/10 backdrop-blur-md text-white border border-white/20 font-black px-10 py-5 rounded-xl hover:bg-white/20 transition-all text-lg shadow-lg flex items-center gap-3">
                                <FileText size={22} /> View Actionable Services
                            </button>
                        </div>
                    </div>
                </section>

                {/* THE ASG APPROACH */}
                <section className="py-24 bg-white dark:bg-seed-bg-dark border-b border-seed-text-primary/5">
                    <div className="container mx-auto px-4 max-get-involved-xl max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <h2 className="text-3xl lg:text-5xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-8 leading-tight">
                                    Interoperable Systems <br/> Coordination
                                </h2>
                                <div className="space-y-6 text-seed-text-secondary dark:text-seed-text-secondary-dark-theme text-xl leading-relaxed">
                                    <p>We provide the architecture, training, and technical assistance required to move from fragmented services to coordinated prevention.</p>
                                    <p className="font-bold text-seed-text-primary dark:text-white border-l-4 border-seed-accent-green pl-6 italic">
                                        "Our goal is not to replace existing services, but to build the connective tissue that makes them effective for families in crisis."
                                    </p>
                                    <div className="pt-6">
                                        <button onClick={onOpenAssessmentModal} className="text-seed-accent-green font-black uppercase text-sm tracking-widest flex items-center gap-2 group">
                                            Start Your Readiness Assessment <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-seed-bg dark:bg-seed-surface-dark p-12 rounded-[3.5rem] shadow-xl border border-seed-text-primary/5 relative">
                                <h3 className="text-xl font-bold mb-8 text-seed-text-primary dark:text-white uppercase tracking-widest opacity-60">What We Solve For</h3>
                                <div className="space-y-6">
                                    {[
                                        { t: 'Systemic Fragmentation', d: 'Disconnected agencies failing to track the same child/family.' },
                                        { t: 'Reactive Spending', d: 'High-cost crisis response instead of low-cost prevention.' },
                                        { t: 'Workforce Silos', d: 'Professionals working in isolation without shared care plans.' }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-4">
                                            <div className="p-2 bg-seed-accent-green/10 text-seed-accent-green rounded-lg h-fit">
                                                <ShieldAlert size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-seed-text-primary dark:text-white">{item.t}</h4>
                                                <p className="text-sm opacity-70">{item.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SERVICE TIERS — RESOLVE / ESCALATE / OPERATE */}
                <section className="py-24 bg-seed-bg dark:bg-seed-surface-dark/30 border-y border-seed-text-primary/5">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl lg:text-6xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-6">Implementation Tiers</h2>
                            <p className="text-xl text-seed-text-secondary dark:text-seed-text-secondary-dark-theme max-w-3xl mx-auto font-medium">
                                Our engagement models are structured to meet your organization at its current stage of readiness.
                            </p>
                        </div>
                        
                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* RESOLVE */}
                            <div className="bg-white dark:bg-seed-bg-dark p-10 rounded-[3rem] shadow-xl border border-seed-text-primary/5 flex flex-col hover:-translate-y-2 transition-transform duration-300">
                                <div className="mb-8">
                                    <span className="text-seed-accent-green font-black uppercase text-[10px] tracking-[0.3em] block mb-2">Package 1</span>
                                    <h3 className="text-3xl font-serif font-bold text-seed-text-primary dark:text-white">Resolve</h3>
                                </div>
                                <p className="text-seed-text-secondary dark:text-seed-text-secondary-dark-theme font-medium mb-8 leading-relaxed">
                                    The Readiness & Strategy phase. We assess your community's current systemic response and design a customized implementation roadmap.
                                </p>
                                <ul className="space-y-4 mb-12 flex-grow">
                                    {[
                                        'Community Readiness Assessment',
                                        'Cross-System Stakeholder Mapping',
                                        'Foundational Implementation Plan',
                                        'ROI & Cost-Benefit Modeling',
                                        'Initial Strategy Briefing'
                                    ].map(item => (
                                        <li key={item} className="flex gap-3 text-sm font-bold">
                                            <CheckCircle size={18} className="text-seed-accent-green flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button onClick={() => onOpenContactModal('Inquire: Package Resolve')} className="w-full bg-seed-bg dark:bg-seed-surface-dark text-seed-text-primary dark:text-seed-accent-green font-black py-4 rounded-xl hover:bg-seed-accent-green hover:text-white dark:hover:bg-seed-accent-green dark:hover:text-seed-text-primary transition-all uppercase tracking-widest text-xs">
                                    Explore Resolve
                                </button>
                            </div>

                            {/* ESCALATE */}
                            <div className="bg-seed-text-primary text-white p-10 rounded-[3rem] shadow-2xl border-4 border-seed-accent-green flex flex-col relative scale-105 z-10">
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-seed-accent-green text-seed-text-primary px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Most Selected</div>
                                <div className="mb-8">
                                    <span className="text-seed-accent-green font-black uppercase text-[10px] tracking-[0.3em] block mb-2">Package 2</span>
                                    <h3 className="text-3xl font-serif font-bold">Escalate</h3>
                                </div>
                                <p className="opacity-90 font-medium mb-8 leading-relaxed">
                                    The Pilot & Implementation phase. We transition from strategy to active demonstration, launching your community's first point-of-sentencing pilot.
                                </p>
                                <ul className="space-y-4 mb-12 flex-grow">
                                    {[
                                        'Pilot Design & Launch Support',
                                        'Court Protocol Development',
                                        'Solutionologist Training (Tier 1-2)',
                                        'Data Collection & Evaluation Setup',
                                        'Inter-Agency Agreement Drafting',
                                        'Regulatory Escalation Templates'
                                    ].map(item => (
                                        <li key={item} className="flex gap-3 text-sm font-bold">
                                            <CheckCircle size={18} className="text-seed-accent-green flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button onClick={() => onOpenContactModal('Inquire: Package Escalate')} className="w-full bg-seed-accent-green text-seed-text-primary font-black py-4 rounded-xl hover:bg-white hover:text-seed-text-primary transition-all uppercase tracking-widest text-xs">
                                    Activate Escalate
                                </button>
                            </div>

                            {/* OPERATE */}
                            <div className="bg-white dark:bg-seed-bg-dark p-10 rounded-[3rem] shadow-xl border border-seed-text-primary/5 flex flex-col hover:-translate-y-2 transition-transform duration-300">
                                <div className="mb-8">
                                    <span className="text-seed-accent-green font-black uppercase text-[10px] tracking-[0.3em] block mb-2">Package 3</span>
                                    <h3 className="text-3xl font-serif font-bold text-seed-text-primary dark:text-white">Operate</h3>
                                </div>
                                <p className="text-seed-text-secondary dark:text-seed-text-secondary-dark-theme font-medium mb-8 leading-relaxed">
                                    The Full System Replication phase. For communities and statewide agencies ready to institutionalize the ASG architecture.
                                </p>
                                <ul className="space-y-4 mb-12 flex-grow">
                                    {[
                                        'Full National Model Licensing',
                                        'Statewide Replication Strategy',
                                        'Solutionologist Network Hub Setup',
                                        'Permanent Data Interoperability',
                                        'Legislative Policy Alignment',
                                        'Ongoing System Maintenance'
                                    ].map(item => (
                                        <li key={item} className="flex gap-3 text-sm font-bold">
                                            <CheckCircle size={18} className="text-seed-accent-green flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button onClick={() => onOpenContactModal('Inquire: Package Operate')} className="w-full bg-seed-bg dark:bg-seed-surface-dark text-seed-text-primary dark:text-seed-accent-green font-black py-4 rounded-xl hover:bg-seed-accent-green hover:text-white dark:hover:bg-seed-accent-green dark:hover:text-seed-text-primary transition-all uppercase tracking-widest text-xs">
                                    Master Operate
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHO WE WORK WITH */}
                <section className="py-24 bg-white dark:bg-seed-bg-dark">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-6">Who We Work With</h2>
                            <p className="text-xl text-seed-text-secondary dark:text-seed-text-secondary-dark-theme max-w-3xl mx-auto">
                                Our implementation work is designed for organizations responsible for broad community outcomes.
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { 
                                    i: Landmark, 
                                    t: 'Jurisdictions & Government Agencies', 
                                    d: 'Courts • Child Welfare • Juvenile Justice • Housing • Education • Public Health' 
                                },
                                { 
                                    i: Rocket, 
                                    t: 'Foundations & Philanthropy', 
                                    d: 'National foundations • Regional funders • Family foundations • Impact investors' 
                                },
                                { 
                                    i: HeartPulse, 
                                    t: 'Healthcare Systems', 
                                    d: 'Hospitals • Clinics • Managed care organizations • Medicaid stakeholders' 
                                },
                                { 
                                    i: Users2, 
                                    t: 'Community Organizations & Nonprofits', 
                                    d: 'Service providers • Faith-based organizations • Coalitions • Advocacy groups' 
                                },
                                { 
                                    i: Building2, 
                                    t: 'Housing Developers', 
                                    d: 'Affordable housing • Workforce housing • Community development partners' 
                                },
                                {
                                    i: Briefcase,
                                    t: 'Workforce Entities',
                                    d: 'DOL programs • Trade unions • Apprenticeship centers • Economic agencies'
                                }
                            ].map((partner, i) => (
                                <div key={i} className="bg-seed-bg dark:bg-seed-surface-dark p-8 rounded-[2rem] border border-seed-text-primary/5 hover:border-seed-accent-green transition-all shadow-lg flex flex-col h-full group">
                                    <div className="w-12 h-12 bg-seed-text-primary text-white dark:bg-seed-accent-green dark:text-seed-text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <partner.i size={24} />
                                    </div>
                                    <h4 className="text-xl font-bold text-seed-text-primary dark:text-white mb-3 leading-tight">{partner.t}</h4>
                                    <p className="text-sm text-seed-text-secondary dark:text-seed-text-secondary-dark-theme leading-relaxed mt-auto opacity-80">{partner.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* IMPLEMENTATION ROADMAP */}
                <section className="py-24 bg-seed-text-primary dark:bg-seed-surface-dark text-white relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-seed-accent-green opacity-5 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="container mx-auto px-4 max-w-5xl relative z-10">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl lg:text-6xl font-serif font-bold mb-6">Implementation Methodology</h2>
                            <p className="text-xl opacity-80 max-w-2xl mx-auto">We guide partners through a rigorous, multi-phase process to ensure sustainable transformation.</p>
                        </div>
                        
                        <div className="space-y-12">
                            {[
                                { phase: 'Phase 1', t: 'Exploration & Assessment', d: 'Identify current systemic gaps, stakeholder alignment, and feasibility modeling.', i: FileSearch },
                                { phase: 'Phase 2', t: 'Pilot Design & Launch', d: 'Formalize court protocols, train the initial Solutionologist cohort, and begin family intervention.', i: Rocket },
                                { phase: 'Phase 3', t: 'Expansion & Replication', d: 'Scale the pilot into a permanent jurisdiction-wide or regional model with long-term funding.', i: Globe }
                            ].map((method, i) => (
                                <div key={i} className="flex flex-col md:flex-row gap-8 items-start group">
                                    <div className="w-16 h-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-seed-accent-green group-hover:text-seed-text-primary transition-colors">
                                        <method.i size={30} />
                                    </div>
                                    <div>
                                        <span className="text-seed-accent-green font-black uppercase text-xs tracking-widest">{method.phase}</span>
                                        <h4 className="text-2xl font-serif font-bold mt-1 mb-2">{method.t}</h4>
                                        <p className="text-lg opacity-80 leading-relaxed">{method.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ROI & FISCAL RESPONSIBILITY */}
                <section className="py-24 bg-white dark:bg-seed-bg-dark">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <h2 className="text-3xl lg:text-5xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-8 leading-tight">
                                    The Economics of <br/> Prevention
                                </h2>
                                <p className="text-xl text-seed-text-secondary dark:text-seed-text-secondary-dark-theme leading-relaxed mb-8">
                                    Crisis response is extraordinarily expensive. Governments already pay for the consequences of parental incarceration. We help you redirect that spending upstream.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="p-6 bg-seed-bg dark:bg-seed-surface-dark rounded-2xl border border-seed-text-primary/5">
                                        <h5 className="font-black text-xs uppercase tracking-widest text-red-500 mb-2">Cost of Inaction</h5>
                                        <p className="text-3xl font-serif font-black text-seed-text-primary dark:text-white">$1.36M</p>
                                        <p className="text-xs opacity-60">Per family across all systems</p>
                                    </div>
                                    <div className="p-6 bg-seed-bg dark:bg-seed-surface-dark rounded-2xl border-l-8 border-seed-accent-green shadow-lg">
                                        <h5 className="font-black text-xs uppercase tracking-widest text-seed-accent-green mb-2">Cost of Intervention</h5>
                                        <p className="text-3xl font-serif font-black text-seed-text-primary dark:text-white">$61.5k</p>
                                        <p className="text-xs opacity-60">Per family for full stabilization</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-seed-text-primary text-white p-12 rounded-[3.5rem] shadow-2xl text-center flex flex-col items-center justify-center">
                                <span className="text-seed-accent-green font-black uppercase text-xs tracking-[0.4em] mb-6 block">Return on Investment</span>
                                <span className="text-9xl font-serif font-black leading-none text-seed-accent-green">22:1</span>
                                <p className="mt-8 text-xl font-bold max-w-xs opacity-80 leading-relaxed italic">
                                    "For every $1 invested in point-of-sentencing prevention, communities save $22 in future system costs."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* COMMON ENGAGEMENT GOALS */}
                <section className="py-24 bg-seed-bg dark:bg-seed-surface-dark/30 border-y border-seed-text-primary/5">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="order-2 lg:order-1">
                                <ul className="space-y-6">
                                    {[
                                        'Reduce foster care entry rates',
                                        'Decrease juvenile justice pipelines',
                                        'Improve school stability and engagement',
                                        'Prevent family homelessness & eviction',
                                        'Lower recidivism through family repair',
                                        'Align services across disparate agencies',
                                        'Demonstrate measurable Social Determinant outcomes'
                                    ].map((goal, i) => (
                                        <li key={i} className="flex gap-4 font-bold text-lg items-center">
                                            <CheckCircle size={24} className="text-seed-accent-green flex-shrink-0" />
                                            <span className="text-seed-text-primary dark:text-white">{goal}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="order-1 lg:order-2">
                                <h2 className="text-3xl lg:text-5xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-8 leading-tight">Common Engagement Goals</h2>
                                <p className="text-xl text-seed-text-secondary dark:text-seed-text-secondary-dark-theme leading-relaxed">
                                    Partners typically seek to address the root causes of systemic instability through coordinated structural shifts that benefit both the family and the public fiscal health.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="py-24 lg:py-40 bg-white dark:bg-seed-bg-dark text-center">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-seed-accent-green/10 text-seed-accent-green font-black text-xs uppercase tracking-widest mb-8 border border-seed-accent-green/20">
                            Partner for Implementation
                        </div>
                        <h2 className="text-4xl lg:text-7xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-10 leading-tight">
                            Build the Architecture <br/> of Change.
                        </h2>
                        <p className="text-xl lg:text-2xl text-seed-text-secondary dark:text-seed-text-secondary-dark-theme max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
                            Let's explore how the Whole Community Solution can transform outcomes for your families and your budget.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <button onClick={onOpenAssessmentModal} className="bg-seed-text-primary dark:bg-seed-accent-green text-white dark:text-seed-text-primary font-black px-12 py-5 rounded-xl hover:shadow-2xl transition-all text-xl shadow-lg">
                                Schedule Strategy Briefing
                            </button>
                            <button onClick={() => onOpenContactModal('Request Partnership Overview')} className="bg-white dark:bg-seed-surface-dark text-seed-text-primary dark:text-seed-accent-green border-2 border-seed-text-primary/10 dark:border-seed-border-dark font-black px-12 py-5 rounded-xl hover:shadow-2xl transition-all text-xl shadow-lg flex items-center gap-3">
                                <FileText size={24} /> Request Overview
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