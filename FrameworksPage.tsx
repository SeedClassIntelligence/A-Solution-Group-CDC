import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { 
    CheckCircle, 
    ArrowRight, 
    Puzzle, 
    Zap, 
    BookOpen, 
    Scale, 
    Users, 
    GraduationCap, 
    Building2, 
    HeartPulse, 
    Briefcase, 
    Brain, 
    Layout, 
    Users2, 
    HeartHandshake, 
    ShieldCheck, 
    Globe, 
    Layers,
    Target,
    Activity,
    ClipboardCheck
} from 'lucide-react';

type FrameworksPageProps = {
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

const ApplicationExample = ({ title, scenario, implementation, result }: { title: string, scenario: string, implementation: string, result: string }) => (
    <div className="mt-12 bg-seed-text-primary/5 dark:bg-white/5 border border-seed-text-primary/10 dark:border-white/10 rounded-3xl p-8 lg:p-10 shadow-inner">
        <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-seed-accent-green/20 text-seed-accent-green rounded-lg">
                <Zap size={20} />
            </div>
            <h4 className="text-xl font-serif font-bold text-seed-text-primary dark:text-white">Real-World Application: {title}</h4>
        </div>
        <div className="space-y-6">
            <div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-seed-text-secondary/50 dark:text-white/40 block mb-2">Scenario</span>
                <p className="text-seed-text-secondary dark:text-seed-text-secondary-dark-theme font-medium leading-relaxed">{scenario}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 pt-4 border-t border-seed-text-primary/10 dark:border-white/5">
                <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-seed-accent-green block mb-2">Implementation</span>
                    <p className="text-sm text-seed-text-secondary/80 dark:text-seed-text-secondary-dark-theme/80 leading-relaxed">{implementation}</p>
                </div>
                <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-seed-text-primary dark:text-seed-accent-green block mb-2">Systemic Result</span>
                    <p className="text-sm text-seed-text-primary dark:text-white font-bold leading-relaxed">{result}</p>
                </div>
            </div>
        </div>
    </div>
);

export const FrameworksPage: React.FC<FrameworksPageProps> = ({
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
        <div className="bg-seed-bg dark:bg-seed-bg-dark text-seed-text-secondary dark:text-seed-text-secondary-dark-theme font-sans min-h-screen flex flex-col overflow-x-hidden">
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
                currentPage="frameworks"
            />
            
            <main className="flex-grow">
                {/* HERO SECTION */}
                <section className="bg-seed-text-primary dark:bg-seed-surface-dark text-white py-24 lg:py-32 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-seed-accent-green opacity-10 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-seed-accent-green font-bold text-xs uppercase tracking-[0.2em] mb-8 border border-white/10">
                            The Architecture Behind the Movement
                        </div>
                        <h1 className="text-4xl lg:text-7xl font-serif font-bold mb-8 leading-tight">
                            Four frameworks. <br/>
                            <span className="text-seed-accent-green">One national solution.</span>
                        </h1>
                        <p className="text-xl lg:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed font-medium">
                            A Solution Group CDC is the creator and steward of an integrated architecture designed to address the full lifecycle of harm created by parental incarceration and systemic instability.
                        </p>
                        <div className="mt-12 flex flex-col items-center gap-4">
                            <p className="text-lg lg:text-xl font-bold border-l-4 border-seed-accent-green pl-6 italic">
                                "We don’t run isolated programs. We build interoperable systems that can be deployed across jurisdictions, sectors, and communities."
                            </p>
                        </div>
                    </div>
                </section>

                {/* SECTION — WHY AN ARCHITECTURE? */}
                <section className="py-24 bg-white dark:bg-seed-bg-dark">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <h2 className="text-3xl lg:text-5xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-8">
                                    Why an architecture?
                                </h2>
                                <div className="space-y-6 text-xl text-seed-text-secondary dark:text-seed-text-secondary-dark-theme leading-relaxed">
                                    <p className="font-bold text-2xl text-seed-text-primary dark:text-white">America does not lack programs. <br/><span className="text-red-500">America lacks coordination.</span></p>
                                    <p>Families impacted by incarceration interact with multiple disconnected entities. Each system works independently. Families are left to navigate the gaps.</p>
                                    <p className="text-seed-accent-green font-bold text-2xl pt-4">Our work connects the systems.</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { i: Scale, t: 'Courts' },
                                    { i: Users, t: 'Child welfare' },
                                    { i: GraduationCap, t: 'Schools' },
                                    { i: Building2, t: 'Housing systems' },
                                    { i: HeartPulse, t: 'Healthcare providers' },
                                    { i: Briefcase, t: 'Workforce programs' },
                                    { i: Brain, t: 'Behavioral health' }
                                ].map((sys, idx) => (
                                    <div key={idx} className="bg-seed-bg dark:bg-seed-surface-dark p-6 rounded-2xl border border-seed-text-primary/10 flex flex-col items-center text-center group hover:border-seed-accent-green transition-colors">
                                        <sys.i size={32} className="text-seed-accent-green mb-4 group-hover:scale-110 transition-transform" />
                                        <span className="font-bold text-seed-text-primary dark:text-white">{sys.t}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION — THE FOUR FRAMEWORKS */}
                <section className="py-24 bg-seed-bg dark:bg-seed-surface-dark/30 border-y border-seed-text-primary/5">
                    <div className="container mx-auto px-4 text-center mb-20">
                        <h2 className="text-4xl lg:text-6xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-6">Built to function together. <br/>Designed to scale nationally.</h2>
                        <p className="text-xl text-seed-text-secondary dark:text-seed-text-secondary-dark-theme max-w-3xl mx-auto">
                            Each framework solves a different layer of the problem. Together, they form a complete, interoperable model.
                        </p>
                    </div>

                    <div className="container mx-auto px-4 max-w-6xl space-y-32">
                        
                        {/* FRAMEWORK 1 — WCS */}
                        <div id="wcs" className="flex flex-col">
                            <div className="grid lg:grid-cols-2 gap-16 items-start">
                                <div className="sticky top-32">
                                    <span className="text-seed-accent-green font-black tracking-widest uppercase text-sm">Framework 1</span>
                                    <h3 className="text-3xl lg:text-4xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mt-2 mb-6">
                                        The Whole Community Solution (WCS)
                                    </h3>
                                    <p className="text-lg font-bold text-seed-text-primary dark:text-seed-accent-green mb-8">
                                        The 9-Pillar Blueprint for Community Transformation
                                    </p>
                                    <div className="space-y-6 text-seed-text-secondary dark:text-seed-text-secondary-dark-theme text-lg leading-relaxed">
                                        <p>The Whole Community Solution Framework is the foundational model that organizes community transformation around the Social Determinants of Health.</p>
                                        <p>Research shows that 80% of life outcomes are determined by social and economic conditions, not clinical services alone.</p>
                                        <p>When a parent is incarcerated, every determinant is disrupted simultaneously. <strong>WCS addresses all of them—at the same time.</strong></p>
                                    </div>
                                    <div className="mt-10 p-6 bg-seed-text-primary text-white rounded-2xl shadow-xl">
                                        <h4 className="font-bold text-seed-accent-green uppercase tracking-widest text-xs mb-4">What WCS Does</h4>
                                        <ul className="space-y-3">
                                            {['Organizes stakeholders across sectors', 'Aligns services around families instead of agencies', 'Creates coordinated community response infrastructure', 'Provides a shared language and implementation blueprint'].map(p => (
                                                <li key={p} className="flex gap-3 text-sm">
                                                    <CheckCircle size={18} className="text-seed-accent-green flex-shrink-0" />
                                                    <span>{p}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="mt-6 font-serif italic text-lg opacity-80 border-t border-white/10 pt-4 text-center">"WCS is the community operating system."</p>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-seed-surface-dark p-8 rounded-[2.5rem] shadow-2xl border border-seed-text-primary/5 grid grid-cols-1 gap-4">
                                    <h4 className="font-bold text-seed-text-primary dark:text-white uppercase tracking-[0.2em] text-xs mb-4 text-center">The Nine Pillars</h4>
                                    {[
                                        { t: 'Affordable Housing & Economic Development', d: 'Housing as a platform for economic mobility and wealth building.' },
                                        { t: 'Mental & Emotional Balance', d: 'Healing-centered approaches addressing trauma within community context.' },
                                        { t: 'Health & Nutritional Balance', d: 'Health equity through comprehensive care and food sovereignty.' },
                                        { t: 'Advanced Skills & Technology', d: 'Technology as a tool for empowerment and economic advancement.' },
                                        { t: 'Cultural Heritage & Activities', d: 'Preservation and celebration as foundations for community identity.' },
                                        { t: 'Environmental Sustainability', d: 'Environmental justice and community-controlled stewardship.' },
                                        { t: 'Civic Engagement & Leadership', d: 'Community members as change agents in their own neighborhoods.' },
                                        { t: 'Public Safety & Justice', d: 'Community-controlled safety focusing on healing and accountability.' },
                                        { t: 'Social Connectivity & Support Systems', d: 'Strong social networks as the foundation for individual resilience.' }
                                    ].map((pillar, i) => (
                                        <div key={i} className="flex flex-col gap-1 p-4 bg-seed-bg dark:bg-seed-bg-dark/50 rounded-xl border-l-4 border-seed-accent-green">
                                            <div className="flex items-center gap-3">
                                                <span className="w-6 h-6 bg-seed-text-primary text-white text-[10px] flex items-center justify-center rounded-full font-black flex-shrink-0">{i+1}</span>
                                                <span className="font-bold text-seed-text-primary dark:text-white">{pillar.t}</span>
                                            </div>
                                            <p className="ml-9 text-xs opacity-70 leading-relaxed">{pillar.d}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <ApplicationExample 
                                title="Municipal Housing Authority Renewal"
                                scenario="A municipal housing authority manages a high-density development where intergenerational incarceration has decimated household income and tenant stability."
                                implementation="The authority adopts the WCS 9-Pillar Framework. They integrate a Tier 1 Solutionologist (Community Health Worker) into property management (Pillar 9), co-locate a mental health clinic (Pillar 2), and launch a resident-owned solar installation cooperative (Pillar 6)."
                                result="A 40% increase in tenant lease compliance and a 65% reduction in emergency security interventions through proactive, cross-pillar stabilization."
                            />
                        </div>

                        {/* FRAMEWORK 2 — Reentry */}
                        <div id="reentry" className="flex flex-col">
                            <div className="grid lg:grid-cols-2 gap-16 items-start">
                                 <div className="order-2 lg:order-1">
                                    <div className="bg-white dark:bg-seed-surface-dark p-10 rounded-[2.5rem] shadow-2xl border border-seed-text-primary/5">
                                        <h4 className="font-bold text-seed-text-primary dark:text-white uppercase tracking-[0.2em] text-xs mb-8 text-center">The 5-Phase, 13-Step System</h4>
                                        <div className="space-y-8">
                                            {[
                                                { t: 'Phase 1 — Sentencing Activation', d: 'Child Impact Assessment ordered. Family Navigator assigned.' },
                                                { t: 'Phase 2 — Emergency Stabilization (0-72 hours)', d: 'Housing, food, healthcare, school stability secured.' },
                                                { t: 'Phase 3 — Family Co-Design (Month 1)', d: 'Families design their own support roadmap.' },
                                                { t: 'Phase 4 — Stabilization & Development (Months 2-12)', d: 'Therapy, education, housing, workforce support.' },
                                                { t: 'Phase 5 — Reunification & Reintegration (Year 2+)', d: 'Pre-release planning and post-release family stabilization.' }
                                            ].map((phase, i) => (
                                                <div key={i} className="flex gap-6">
                                                    <div className="w-12 h-12 bg-seed-accent-green text-seed-text-primary rounded-2xl flex items-center justify-center font-black text-xl flex-shrink-0 shadow-lg">{i+1}</div>
                                                    <div>
                                                        <h5 className="font-bold text-seed-text-primary dark:text-white text-lg mb-1">{phase.t}</h5>
                                                        <p className="text-sm text-seed-text-secondary dark:text-seed-text-secondary-dark-theme">{phase.d}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="order-1 lg:order-2 lg:sticky lg:top-32">
                                    <span className="text-seed-accent-green font-black tracking-widest uppercase text-sm">Framework 2</span>
                                    <h3 className="text-3xl lg:text-4xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mt-2 mb-6">
                                        ASG Reentry Demonstration Framework
                                    </h3>
                                    <p className="text-lg font-bold text-seed-text-primary dark:text-seed-accent-green mb-8">
                                        The Point-of-Sentencing Intervention Model
                                    </p>
                                    <div className="space-y-6 text-seed-text-secondary dark:text-seed-text-secondary-dark-theme text-lg leading-relaxed">
                                        <p>Every cycle of intergenerational incarceration begins at a predictable moment: <strong>The day a parent is sentenced.</strong></p>
                                        <p>This framework activates stabilization immediately.</p>
                                        <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-2xl border border-red-100 dark:border-red-900/20">
                                            <h4 className="text-red-600 dark:text-red-400 font-black uppercase text-xs tracking-widest mb-2">What This Framework Changes</h4>
                                            <p className="text-red-800 dark:text-red-200">Instead of reacting to crisis years later, we intervene at the moment risk becomes predictable. <strong>This is the prevention engine of the architecture.</strong></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ApplicationExample 
                                title="County Court Pilot: Intervention at Sentencing"
                                scenario="A County Superior Court notices that 60% of their criminal defendants are parents, yet the court has no mechanism to ensure those children don't enter the foster care system upon the parent's sentencing."
                                implementation="The court integrates the Reentry Framework Phase 1. When a custodial parent is sentenced, the judge mandates a Child Impact Assessment (CIA) and immediately assigns an ASG-trained Family Navigator to the home within 24 hours."
                                result="A 50% decrease in 'emergency' foster care placements during the pilot, saving the county $2M in annual child welfare costs by maintaining children in stable kinship care."
                            />
                        </div>

                        {/* FRAMEWORK 3 — WCSN */}
                        <div id="wcsn" className="flex flex-col">
                            <div className="grid lg:grid-cols-2 gap-16 items-start">
                                <div className="sticky top-32">
                                    <span className="text-seed-accent-green font-black tracking-widest uppercase text-sm">Framework 3</span>
                                    <h3 className="text-3xl lg:text-4xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mt-2 mb-6">
                                        Whole Community Solution Network (WCSN)
                                    </h3>
                                    <p className="text-lg font-bold text-seed-text-primary dark:text-seed-accent-green mb-8">
                                        The Workforce That Executes the Model
                                    </p>
                                    <div className="space-y-6 text-seed-text-secondary dark:text-seed-text-secondary-dark-theme text-lg leading-relaxed">
                                        <p>Systems do not implement themselves. Communities need trained people to coordinate, navigate, and sustain change.</p>
                                        <p>The WCS Network builds the workforce required to execute the architecture.</p>
                                    </div>
                                    <div className="mt-10 space-y-4">
                                        {[
                                            { t: 'Coordinates professionals across sectors', i: ShieldCheck },
                                            { t: 'Creates shared care plans and communication systems', i: ShieldCheck },
                                            { t: 'Ensures families receive coordinated support', i: ShieldCheck },
                                            { t: 'Builds a new workforce pipeline', i: ShieldCheck }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-3 text-seed-text-primary dark:text-white font-bold">
                                                <item.i size={20} className="text-seed-accent-green" />
                                                <span>{item.t}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="mt-8 font-serif italic text-2xl text-seed-text-primary dark:text-white">"WCSN is the human infrastructure of the architecture."</p>
                                </div>
                                <div className="space-y-6">
                                    <h4 className="font-bold text-seed-text-primary dark:text-white uppercase tracking-[0.2em] text-xs mb-8 text-center">The Three-Tier Workforce Model</h4>
                                    {[
                                        { tier: 'Tier 1', title: 'Community Solutionologists', sub: 'Community Health Workers with lived experience', desc: 'Family navigation, peer support, advocacy.' },
                                        { tier: 'Tier 2', title: 'Core Solutionologists', sub: 'Licensed professionals across all nine pillars', desc: 'Therapists, educators, housing specialists, healthcare providers.' },
                                        { tier: 'Tier 3', title: 'Supporting Solutionologists', sub: 'Institutional leaders and system decision-makers', desc: 'Judges, agency directors, school leaders.' }
                                    ].map((card, i) => (
                                        <div key={i} className="bg-white dark:bg-seed-surface-dark p-8 rounded-3xl shadow-xl border border-seed-text-primary/5 hover:-translate-y-1 transition-transform">
                                            <span className="text-seed-accent-green font-black text-xs uppercase tracking-widest">{card.tier}</span>
                                            <h5 className="text-xl font-serif font-bold text-seed-text-primary dark:text-white mt-1 mb-2">{card.title}</h5>
                                            <p className="font-bold text-sm text-seed-text-primary dark:text-seed-accent-green mb-3">{card.sub}</p>
                                            <p className="text-sm text-seed-text-secondary dark:text-seed-text-secondary-dark-theme leading-relaxed">{card.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <ApplicationExample 
                                title="Regional Healthcare Systems: Workforce Integration"
                                scenario="A multi-state health system struggles with high ER readmission rates among the formerly incarcerated population because patients lack housing and legal support to manage chronic illness."
                                implementation="The system launches a WCSN Hub. They train and hire a cohort of Tier 1 Community Solutionologists (CHWs) and partner with Tier 2 Core Solutionologists (Legal Advocates) to handle housing evictions as a medical intervention."
                                result="The formation of a specialized workforce that speaks the language of both 'lived experience' and 'clinical care,' resulting in a 22% reduction in ER utilization and improved medication adherence."
                            />
                        </div>

                        {/* FRAMEWORK 4 — 360 Holistic */}
                        <div id="holistic" className="flex flex-col">
                            <div className="grid lg:grid-cols-2 gap-16 items-start">
                                 <div className="order-2 lg:order-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        'Separation trauma',
                                        'Shame and stigma',
                                        'Grief and identity disruption',
                                        'Trust breakdown'
                                    ].map((t, i) => (
                                        <div key={i} className="bg-red-50 dark:bg-red-900/10 p-6 rounded-2xl border border-red-100 dark:border-red-900/20 text-center flex flex-col items-center justify-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400 font-black">!</div>
                                            <span className="font-bold text-red-900 dark:text-red-200 text-sm leading-tight">{t}</span>
                                        </div>
                                    ))}
                                    <div className="md:col-span-2 bg-white dark:bg-seed-surface-dark p-8 rounded-[2.5rem] mt-4 shadow-xl border border-seed-text-primary/5">
                                        <h4 className="font-bold text-seed-text-primary dark:text-white uppercase tracking-[0.2em] text-xs mb-6">Core Elements</h4>
                                        <ul className="space-y-4">
                                            {[
                                                'Trauma-informed care integration',
                                                'Family therapy and reunification support',
                                                'Cultural healing practices',
                                                'Peer support networks',
                                                'Trust rebuilding between families and institutions'
                                            ].map(e => (
                                                <li key={e} className="flex gap-3 items-center font-bold text-seed-text-primary dark:text-white">
                                                    <div className="w-2 h-2 rounded-full bg-seed-accent-green"></div>
                                                    {e}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="order-1 lg:order-2 lg:sticky lg:top-32">
                                    <span className="text-seed-accent-green font-black tracking-widest uppercase text-sm">Framework 4</span>
                                    <h3 className="text-3xl lg:text-4xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mt-2 mb-6">
                                        360° Holistic Care Delivery Model
                                    </h3>
                                    <p className="text-lg font-bold text-seed-text-primary dark:text-seed-accent-green mb-8">
                                        Healing the Trauma That Systems Cannot Address Alone
                                    </p>
                                    <div className="space-y-6 text-seed-text-secondary dark:text-seed-text-secondary-dark-theme text-lg leading-relaxed">
                                        <p>System coordination is necessary. But coordination alone does not heal trauma.</p>
                                        <p>The 360° Holistic Care Model provides the emotional and relational repair that makes long-term stability possible.</p>
                                        <p className="font-bold text-2xl text-seed-text-primary dark:text-white pt-4">This framework ensures families are not only stabilized — <span className="text-seed-accent-green underline underline-offset-8">they are healed.</span></p>
                                    </div>
                                </div>
                            </div>
                            <ApplicationExample 
                                title="School-Based Family Wellness Hub"
                                scenario="An elementary school in an area with high incarceration rates sees students exhibiting extreme behavioral disruption and separation anxiety, but traditional school counselors are over capacity."
                                implementation="The school implements the 360° Holistic Care Model. They launch 'Healing Circles' for students and their primary caregivers (usually grandmothers or aunts) that focus on 'identity disruption' and 'shame reduction' related to parental incarceration."
                                result="A 55% reduction in behavioral disciplinary referrals and a measurable increase in 'Trust Scores' between caregivers and the school administration."
                            />
                        </div>

                    </div>
                </section>

                {/* SECTION — HOW THE FRAMEWORKS WORK TOGETHER */}
                <section className="py-24 bg-white dark:bg-seed-bg-dark">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-4">How the frameworks work together</h2>
                            <p className="text-lg text-seed-text-secondary dark:text-seed-text-secondary-dark-theme">Each framework addresses a different layer of change.</p>
                        </div>
                        
                        <div className="overflow-hidden rounded-[2rem] shadow-2xl border border-seed-text-primary/10">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-seed-text-primary text-white uppercase text-xs tracking-widest">
                                        <th className="p-6">Framework</th>
                                        <th className="p-6">Role</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-seed-text-primary/10 dark:divide-seed-border-dark bg-seed-bg dark:bg-seed-surface-dark">
                                    <tr>
                                        <td className="p-6 font-bold text-seed-text-primary dark:text-white">Whole Community Solution</td>
                                        <td className="p-6 text-seed-text-secondary dark:text-seed-text-secondary-dark-theme">Community operating system</td>
                                    </tr>
                                    <tr>
                                        <td className="p-6 font-bold text-seed-text-primary dark:text-white">Reentry Demonstration Framework</td>
                                        <td className="p-6 text-seed-text-secondary dark:text-seed-text-secondary-dark-theme">Prevention engine</td>
                                    </tr>
                                    <tr>
                                        <td className="p-6 font-bold text-seed-text-primary dark:text-white">Solutionologist Network</td>
                                        <td className="p-6 text-seed-text-secondary dark:text-seed-text-secondary-dark-theme">Workforce infrastructure</td>
                                    </tr>
                                    <tr>
                                        <td className="p-6 font-bold text-seed-text-primary dark:text-white">360° Holistic Care Model</td>
                                        <td className="p-6 text-seed-text-secondary dark:text-seed-text-secondary-dark-theme">Healing & trust repair</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-12 text-center">
                            <p className="text-2xl lg:text-3xl font-serif font-bold text-seed-text-primary dark:text-white">Together, they form a complete lifecycle response.</p>
                            <p className="mt-4 font-black text-seed-accent-green uppercase tracking-widest text-sm">No other organization operates all four frameworks together.</p>
                        </div>
                    </div>
                </section>

                {/* SECTION — BUILT FOR NATIONAL REPLICATION */}
                <section className="py-24 bg-seed-text-primary dark:bg-seed-surface-dark text-white relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-seed-accent-green/5 rounded-full filter blur-[120px] pointer-events-none"></div>
                    <div className="container mx-auto px-4 max-w-5xl relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-6xl font-serif font-bold mb-6">Built for National Replication</h2>
                            <p className="text-xl opacity-80 max-w-3xl mx-auto">These frameworks were designed to be jurisdiction-ready, federally aligned, and adaptable to local context.</p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                'Jurisdiction-ready',
                                'Federally aligned',
                                'Scalable across states',
                                'Adaptable to local context',
                                'Deployable through pilots and statewide models'
                            ].map((point, idx) => (
                                <div key={idx} className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex items-center gap-4">
                                    <Globe className="text-seed-accent-green flex-shrink-0" size={24} />
                                    <span className="font-bold text-lg">{point}</span>
                                </div>
                            ))}
                        </div>
                        
                        <div className="mt-20 text-center">
                            <p className="text-3xl font-serif font-bold text-white mb-4">This is not a program.</p>
                            <p className="text-5xl lg:text-7xl font-serif font-black text-seed-accent-green uppercase tracking-tighter">This is a system.</p>
                            <div className="mt-12 flex flex-wrap justify-center gap-6">
                                <button onClick={() => onNavigateToStudio()} className="bg-seed-accent-green text-seed-text-primary font-black px-12 py-5 rounded-2xl hover:shadow-2xl transition-all text-xl shadow-lg">
                                    Try Vera Studio Beta
                                </button>
                                <button onClick={onNavigateToContact} className="bg-white/10 backdrop-blur-md text-white border border-white/20 font-black px-12 py-5 rounded-2xl hover:bg-white/20 transition-all text-xl shadow-lg">
                                    Contact Us
                                </button>
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