import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { 
    AlertCircle, 
    ArrowRight, 
    BarChart3, 
    FileText, 
    ShieldAlert, 
    Scale, 
    Clock, 
    TrendingUp, 
    Users, 
    Building, 
    GraduationCap, 
    Gavel, 
    HeartPulse, 
    CheckCircle,
    Landmark,
    ShieldCheck,
    Download,
    PieChart,
    Users2,
    Briefcase
} from 'lucide-react';

type COIPPageProps = {
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

export const COIPPage: React.FC<COIPPageProps> = ({
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
                currentPage="coip"
            />
            
            <main className="flex-grow">
                {/* POLICY BRIEF HEADER */}
                <section className="bg-seed-text-primary dark:bg-seed-surface-dark text-white py-20 lg:py-28 relative overflow-hidden">
                    <div className="absolute inset-0 bg-seed-accent-green opacity-[0.03] pointer-events-none"></div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-seed-accent-green text-seed-text-primary font-black text-[10px] uppercase tracking-[0.2em] mb-6 rounded">
                                Policy Brief — ASG CDC
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                                Children of Incarcerated Parents (COIP): <br/>
                                <span className="text-seed-accent-green">The Critical Policy Gap</span>
                            </h1>
                            <p className="text-xl lg:text-2xl opacity-90 mb-10 leading-relaxed font-medium max-w-3xl">
                                Mass incarceration is a child-welfare crisis. A Solution Group CDC advances policy solutions that protect children at the moment families become vulnerable.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button onClick={() => onOpenContactModal('Download COIP Policy Brief')} className="bg-seed-accent-green text-seed-text-primary font-black px-8 py-4 rounded-lg hover:shadow-2xl transition-all text-sm uppercase tracking-widest flex items-center gap-2">
                                    <Download size={18} /> Download Full Brief
                                </button>
                                <button onClick={() => onOpenContactModal('Request Legislative Briefing')} className="bg-white/10 backdrop-blur-md text-white border border-white/20 font-black px-8 py-4 rounded-lg hover:bg-white/20 transition-all text-sm uppercase tracking-widest flex items-center gap-2">
                                    <Users2 size={18} /> Request Briefing
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* THE URGENT CASE */}
                <section className="py-24 bg-white dark:bg-seed-bg-dark border-b border-seed-text-primary/5">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <h2 className="text-3xl lg:text-5xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-8 leading-tight">
                                    The Urgent Case for Reform
                                </h2>
                                <div className="space-y-6 text-seed-text-secondary dark:text-seed-text-secondary-dark-theme text-xl leading-relaxed">
                                    <p>Despite the scale of impact, there is a structural policy gap that leaves families invisible when they are most vulnerable. COIP policy addresses this void by mandating response at the source.</p>
                                    <div className="grid grid-cols-2 gap-8 py-8">
                                        <div>
                                            <span className="block text-4xl font-serif font-black text-seed-text-primary dark:text-seed-accent-green mb-1">2.7M</span>
                                            <p className="text-xs font-black uppercase tracking-widest opacity-60">Children currently impacted</p>
                                        </div>
                                        <div>
                                            <span className="block text-4xl font-serif font-black text-seed-text-primary dark:text-seed-accent-green mb-1">1 in 14</span>
                                            <p className="text-xs font-black uppercase tracking-widest opacity-60">Children nationwide</p>
                                        </div>
                                        <div>
                                            <span className="block text-4xl font-serif font-black text-seed-text-primary dark:text-seed-accent-green mb-1">1 in 9</span>
                                            <p className="text-xs font-black uppercase tracking-widest opacity-60">Black children</p>
                                        </div>
                                        <div>
                                            <span className="block text-4xl font-serif font-black text-seed-text-primary dark:text-seed-accent-green mb-1">7 of 10</span>
                                            <p className="text-xs font-black uppercase tracking-widest opacity-60">Facing justice contact</p>
                                        </div>
                                    </div>
                                    <p className="font-bold text-seed-text-primary dark:text-white border-l-4 border-seed-accent-green pl-6">
                                        "Courts routinely ask defendants if they have children—but no system is currently required to act on that information."
                                    </p>
                                </div>
                            </div>
                            <div className="bg-seed-bg dark:bg-seed-surface-dark p-12 rounded-[3rem] shadow-xl border border-seed-text-primary/5 relative">
                                <h3 className="text-xl font-bold mb-8 text-seed-text-primary dark:text-white flex items-center gap-3">
                                    <ShieldAlert className="text-red-500" /> The Fragility of Systems
                                </h3>
                                <div className="space-y-8">
                                    {[
                                        { t: 'Income Loss', d: 'Families lose average of 50-60% of household income immediately.' },
                                        { t: 'Housing Risk', d: 'Eviction and displacement rates skyrocket within 90 days.' },
                                        { t: 'Educational Decline', d: 'Children face increased suspension and dropout risk without support.' }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-4">
                                            <div className="w-1.5 h-auto bg-red-500/20 rounded-full flex-shrink-0"></div>
                                            <div>
                                                <h4 className="font-black text-xs uppercase tracking-widest text-red-500 mb-1">{item.t}</h4>
                                                <p className="text-seed-text-secondary dark:text-seed-text-secondary-dark-theme text-sm">{item.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* HOW POLICY FAILS */}
                <section className="py-24 bg-seed-bg dark:bg-seed-surface-dark/30 border-y border-seed-text-primary/5">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-6">How Policy Currently Fails</h2>
                            <p className="text-xl text-seed-text-secondary dark:text-seed-text-secondary-dark-theme max-3xl mx-auto">
                                Current systems react only *after* harm occurs. We wait for neglect, homelessness, or delinquency before activating services.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-8 bg-white dark:bg-seed-surface-dark rounded-2xl border border-seed-text-primary/5 shadow-md flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-red-50 dark:bg-red-900/10 text-red-500 rounded-full flex items-center justify-center mb-4">
                                    <Gavel size={24} />
                                </div>
                                <h4 className="font-bold text-lg mb-2">Courts</h4>
                                <p className="text-sm opacity-70">Focus on the defendant. No mandated follow-up for the children recorded in pre-sentencing.</p>
                            </div>
                            <div className="p-8 bg-white dark:bg-seed-surface-dark rounded-2xl border border-seed-text-primary/5 shadow-md flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-red-50 dark:bg-red-900/10 text-red-500 rounded-full flex items-center justify-center mb-4">
                                    <Users size={24} />
                                </div>
                                <h4 className="font-bold text-lg mb-2">Child Welfare</h4>
                                <p className="text-sm opacity-70">Intervenes only after crises reach removal thresholds. Lacks a prevention-first lane.</p>
                            </div>
                            <div className="p-8 bg-white dark:bg-seed-surface-dark rounded-2xl border border-seed-text-primary/5 shadow-md flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-red-50 dark:bg-red-900/10 text-red-500 rounded-full flex items-center justify-center mb-4">
                                    <GraduationCap size={24} />
                                </div>
                                <h4 className="font-bold text-lg mb-2">Schools</h4>
                                <p className="text-sm opacity-70">Respond to behavioral decline after it begins, often unaware of the root trauma.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* THE SOLUTION: CIA */}
                <section className="py-24 bg-white dark:bg-seed-bg-dark">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="order-2 lg:order-1 relative">
                                <div className="aspect-[4/3] bg-seed-text-primary/5 dark:bg-seed-accent-green/5 rounded-[3rem] border border-seed-accent-green/20 flex flex-col items-center justify-center p-12">
                                     <ShieldCheck size={160} className="text-seed-accent-green opacity-20" />
                                     <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                                        <h4 className="text-3xl font-serif font-bold text-seed-text-primary dark:text-white mb-2">CIA</h4>
                                        <p className="font-black text-xs uppercase tracking-widest text-seed-accent-green">Child Impact Assessments</p>
                                     </div>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <h2 className="text-3xl lg:text-5xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-8 leading-tight">
                                    The Missing First Step: <br/> Child Impact Assessments
                                </h2>
                                <p className="text-xl text-seed-text-secondary dark:text-seed-text-secondary-dark-theme leading-relaxed mb-8">
                                    ASG CDC advocates for mandatory <strong>Child Impact Assessments (CIA)</strong> at the point of sentencing.
                                </p>
                                <ul className="space-y-6">
                                    {[
                                        'Formal identification of minor children at sentencing.',
                                        'Assignment of a Family Navigator within 24 hours.',
                                        'Coordinated stabilization of housing and school status.',
                                        'Ongoing quarterly stability reviews during incarceration.'
                                    ].map((step, i) => (
                                        <li key={i} className="flex gap-4 items-start font-bold text-seed-text-primary dark:text-white text-lg">
                                            <div className="w-8 h-8 bg-seed-accent-green text-seed-text-primary rounded-full flex items-center justify-center text-sm font-black flex-shrink-0">{i+1}</div>
                                            <span>{step}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* THE ROADMAP */}
                <section className="py-24 bg-seed-bg dark:bg-seed-surface-dark/30 border-y border-seed-text-primary/5">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-6">A Prevention Framework for Courts</h2>
                            <p className="text-xl text-seed-text-secondary dark:text-seed-text-secondary-dark-theme">Intervention organized by chronological family need.</p>
                        </div>
                        <div className="space-y-4">
                            {[
                                { phase: 'Phase 1', t: 'Sentencing Activation', d: 'Children are identified; Navigator assigned within 72 hours.' },
                                { phase: 'Phase 2', t: 'First 30 Days', d: 'Immediate stabilization of food, housing, and school status.' },
                                { phase: 'Phase 3', t: 'Ongoing Monitoring', d: 'Quarterly reviews of child wellbeing during parent absence.' },
                                { phase: 'Phase 4', t: 'Pre-Release Preparation', d: 'Transition housing and workforce plan established for reentry.' },
                                { phase: 'Phase 5', t: 'Family Reintegration', d: 'Intensive family stabilization for 12 months post-release.' }
                            ].map((row, i) => (
                                <div key={i} className="grid md:grid-cols-4 gap-4 p-6 bg-white dark:bg-seed-surface-dark rounded-2xl border border-seed-text-primary/5 hover:border-seed-accent-green transition-all shadow-sm group">
                                    <div className="font-black text-xs uppercase tracking-widest text-seed-accent-green">{row.phase}</div>
                                    <div className="md:col-span-1 font-serif font-bold text-xl text-seed-text-primary dark:text-white">{row.t}</div>
                                    <div className="md:col-span-2 text-seed-text-secondary dark:text-seed-text-secondary-dark-theme font-medium">{row.d}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ECONOMIC IMPACT */}
                <section className="py-24 bg-seed-text-primary dark:bg-seed-surface-dark text-white relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-seed-accent-green/5 rounded-full filter blur-[120px] pointer-events-none"></div>
                    <div className="container mx-auto px-4 max-w-6xl relative z-10">
                         <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <h2 className="text-3xl lg:text-6xl font-serif font-bold mb-8">The Economics of Inaction</h2>
                                <p className="text-xl opacity-80 leading-relaxed mb-8">
                                    Government is already paying for the consequences of parental incarceration. COIP policy redirects spending upstream to save billions in downstream costs.
                                </p>
                                <div className="bg-white/10 backdrop-blur-xl p-8 rounded-[2rem] border border-white/20">
                                    <h4 className="text-seed-accent-green font-black uppercase text-xs tracking-widest mb-6">Return on Investment</h4>
                                    <div className="flex items-end gap-4">
                                        <span className="text-8xl font-serif font-black leading-none">22:1</span>
                                        <span className="text-2xl font-bold mb-2">ROI</span>
                                    </div>
                                    <p className="mt-4 text-sm opacity-70 italic">Every $1 spent on COIP prevention saves $22 in future system response costs.</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <h4 className="font-black text-xs uppercase tracking-widest opacity-60 text-center mb-4">Downstream Cost Per Family</h4>
                                {[
                                    { l: 'Foster Care Response', v: '$500,000' },
                                    { l: 'Juvenile Justice Contact', v: '$450,000' },
                                    { l: 'Homelessness Services', v: '$200,000' },
                                    { l: 'Educational Interventions', v: '$160,000' },
                                    { l: 'Mental Health Crisis', v: '$50,000' }
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between items-center p-4 border-b border-white/10">
                                        <span className="font-bold">{item.l}</span>
                                        <span className="font-serif font-bold text-seed-accent-green text-xl">{item.v}</span>
                                    </div>
                                ))}
                                <div className="flex justify-between items-center p-6 bg-white/5 rounded-xl">
                                    <span className="text-2xl font-serif font-black uppercase">Total Public Cost</span>
                                    <span className="text-4xl font-serif font-black">$1.36M</span>
                                </div>
                            </div>
                         </div>
                    </div>
                </section>

                {/* POLICY PRIORITIES */}
                <section className="py-24 bg-white dark:bg-seed-bg-dark">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-6">Legislative & Policy Priorities</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                { t: 'Mandatory CIAs', d: 'Require Child Impact Assessments as part of pre-sentencing reports.' },
                                { t: 'Family Navigators', d: 'Fund community-based navigators assigned by the court system.' },
                                { t: 'Data Interoperability', d: 'Enable secure data sharing between courts, child welfare, and schools.' },
                                { t: 'Reentry Readiness', d: 'Mandate family reunification planning 12 months prior to release.' }
                            ].map((p, i) => (
                                <div key={i} className="bg-seed-bg dark:bg-seed-surface-dark p-8 rounded-2xl border border-seed-text-primary/10 flex flex-col h-full group hover:border-seed-accent-green transition-all">
                                    <div className="p-3 bg-seed-accent-green/10 text-seed-accent-green w-fit rounded-lg mb-6">
                                        <Scale size={24} />
                                    </div>
                                    <h4 className="text-xl font-bold text-seed-text-primary dark:text-white mb-2">{p.t}</h4>
                                    <p className="text-sm opacity-70 leading-relaxed">{p.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CALL TO ACTION */}
                <section className="py-24 lg:py-40 bg-seed-bg dark:bg-seed-bg-dark text-center relative overflow-hidden">
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-seed-accent-green/5 rounded-full filter blur-[120px] pointer-events-none"></div>
                    <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                        <h2 className="text-4xl lg:text-7xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-8 leading-tight">
                            Advancing National <br/> Policy Solutions
                        </h2>
                        <p className="text-xl lg:text-2xl text-seed-text-secondary dark:text-seed-text-secondary-dark-theme font-medium mb-16 leading-relaxed">
                            A Solution Group CDC works with policymakers, agencies, and jurisdictions to explore COIP implementation pathways and pilot opportunities.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <button onClick={() => onOpenContactModal('Schedule Policy Briefing')} className="bg-seed-text-primary dark:bg-seed-accent-green text-white dark:text-seed-text-primary font-black px-12 py-5 rounded-xl hover:shadow-2xl transition-all text-xl shadow-lg flex items-center gap-3">
                                <Users size={24} /> Schedule Strategy Briefing
                            </button>
                            <button onClick={() => onOpenContactModal('Request Data Brief')} className="bg-white dark:bg-seed-surface-dark text-seed-text-primary dark:text-seed-accent-green border-2 border-seed-text-primary/10 dark:border-seed-border-dark font-black px-12 py-5 rounded-xl hover:shadow-2xl transition-all text-xl shadow-lg flex items-center gap-3">
                                <PieChart size={24} /> Request Data Brief
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