import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { 
    AlertTriangle, 
    ArrowRight, 
    ShieldAlert, 
    Gavel, 
    GraduationCap, 
    Home, 
    HeartPulse, 
    Zap, 
    TrendingDown, 
    Scale, 
    Users, 
    BarChart3, 
    Dna, 
    Coins,
    CheckCircle,
    Globe,
    FileText,
    TrendingUp,
    Heart,
    Rocket,
    Landmark,
    Users2,
    Briefcase,
    ShieldCheck,
    Download,
    Layers
} from 'lucide-react';

type SystemsImpactPageProps = {
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
};

export const SystemsImpactPage: React.FC<SystemsImpactPageProps> = ({ 
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
    theme, 
    toggleTheme 
}) => {
    return (
        <div className="bg-seed-bg dark:bg-seed-bg-dark text-seed-text-secondary dark:text-seed-text-secondary-dark-theme font-sans min-h-screen flex flex-col overflow-x-hidden">
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
                currentPage="systems-impact"
            />
            
            <main className="flex-grow">
                {/* HERO SECTION */}
                <section className="bg-seed-text-primary dark:bg-seed-surface-dark text-white py-24 lg:py-40 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
                        <div className="absolute inset-0 bg-black opacity-40"></div>
                        <div className="absolute top-10 left-10 w-96 h-96 bg-seed-accent-green rounded-full filter blur-[150px]"></div>
                        <div className="absolute bottom-10 right-10 w-96 h-96 bg-seed-accent-green rounded-full filter blur-[150px]"></div>
                    </div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <h1 className="text-4xl lg:text-7xl font-serif font-bold mb-8 leading-tight animate-fade-in uppercase tracking-tight">
                            One Event. Seven Systems. <br/>
                            <span className="text-seed-accent-green">Generational Consequences.</span>
                        </h1>
                        <p className="text-xl lg:text-3xl max-w-4xl mx-auto leading-relaxed font-medium mb-12 opacity-90 drop-shadow-lg">
                            When a parent is incarcerated, the impact does not stay in the justice system. 
                            It cascades across every major social system in America—and no one intervenes.
                        </p>
                        <p className="text-lg lg:text-xl max-w-3xl mx-auto mb-16 opacity-80 font-bold">
                            A Solution Group CDC interrupts this cascade through early intervention, 
                            workforce development, and comprehensive community stabilization.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <button onClick={onNavigateToFrameworks} className="bg-seed-accent-green text-seed-text-primary font-black px-12 py-5 rounded-xl hover:shadow-2xl transition-all text-xl shadow-lg">
                                LEARN HOW WE INTERVENE
                            </button>
                            <button onClick={onNavigateToDonation} className="bg-white/10 backdrop-blur-md text-white border border-white/20 font-black px-12 py-5 rounded-xl hover:bg-white/20 transition-all text-xl shadow-lg">
                                DONATE NOW
                            </button>
                        </div>
                    </div>
                </section>

                {/* SECTION 1 — THE INVISIBLE GENERATOR */}
                <section className="py-24 bg-white dark:bg-seed-bg-dark">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl lg:text-5xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-8 leading-tight">
                                    The Largest Unrecognized <br/> Childhood Trauma in America
                                </h2>
                                <p className="text-xl text-seed-text-secondary dark:text-seed-text-secondary-dark-theme leading-relaxed mb-10">
                                    Parental incarceration is one of the most pervasive yet invisible childhood traumas in the United States.
                                </p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                                    <div className="bg-seed-bg dark:bg-seed-surface-dark p-6 rounded-2xl border border-seed-text-primary/5 text-center">
                                        <span className="block text-4xl font-serif font-black text-seed-text-primary dark:text-seed-accent-green mb-1">2.7M</span>
                                        <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Children currently have a parent in jail/prison</p>
                                    </div>
                                    <div className="bg-seed-bg dark:bg-seed-surface-dark p-6 rounded-2xl border border-seed-text-primary/5 text-center">
                                        <span className="block text-4xl font-serif font-black text-seed-text-primary dark:text-seed-accent-green mb-1">5M</span>
                                        <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Children (1 in 14) experience it during childhood</p>
                                    </div>
                                    <div className="bg-seed-bg dark:bg-seed-surface-dark p-6 rounded-2xl border border-seed-text-primary/5 text-center">
                                        <span className="block text-4xl font-serif font-black text-seed-text-primary dark:text-seed-accent-green mb-1">70%</span>
                                        <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Of these children will be incarcerated absent intervention</p>
                                    </div>
                                </div>

                                <div className="bg-seed-text-primary text-white p-8 rounded-3xl shadow-xl relative overflow-hidden italic font-serif text-2xl leading-relaxed">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-seed-accent-green opacity-10 rounded-bl-full"></div>
                                    "Children do not enter crisis because systems fail independently. They enter crisis because systems fail together."
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="bg-red-50 dark:bg-red-900/10 p-10 rounded-[3rem] border border-red-100 dark:border-red-900/20">
                                    <h4 className="font-black uppercase tracking-widest text-xs text-red-600 dark:text-red-400 mb-6">Structural Failure: Three Critical Gaps</h4>
                                    <div className="space-y-8">
                                        <div className="flex gap-4">
                                            <span className="text-2xl opacity-100 flex-shrink-0">❌</span>
                                            <div>
                                                <h5 className="font-black text-sm uppercase text-red-900 dark:text-red-200 mb-1">NO FEDERAL PROTECTION CATEGORY EXISTS</h5>
                                                <p className="text-sm text-red-800 dark:text-red-300">Children of incarcerated parents are not recognized as a protected class requiring intervention.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <span className="text-2xl opacity-100 flex-shrink-0">❌</span>
                                            <div>
                                                <h5 className="font-black text-sm uppercase text-red-900 dark:text-red-200 mb-1">NO MANDATED INTERVENTION EXISTS</h5>
                                                <p className="text-sm text-red-800 dark:text-red-300">When a parent is sentenced, courts document children but trigger no stabilization protocol.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <span className="text-2xl opacity-100 flex-shrink-0">❌</span>
                                            <div>
                                                <h5 className="font-black text-sm uppercase text-red-900 dark:text-red-200 mb-1">NO COORDINATED RESPONSE EXISTS</h5>
                                                <p className="text-sm text-red-800 dark:text-red-300">Each system operates independently, forcing families to navigate all simultaneously.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mt-8 font-black text-red-700 dark:text-red-400 text-sm italic text-center">Result: These children become invisible inputs into multiple systems.</p>
                                </div>

                                <div className="bg-seed-bg dark:bg-seed-surface-dark p-10 rounded-[3rem] border border-seed-text-primary/5">
                                    <h4 className="font-black uppercase tracking-widest text-xs text-seed-text-primary dark:text-white mb-6 text-center">Disproportionate Impact</h4>
                                    <p className="text-sm text-center mb-8 opacity-70 italic">Parental incarceration does not impact all communities equally.</p>
                                    <div className="overflow-hidden rounded-xl border border-seed-text-primary/10">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="bg-seed-text-primary text-white text-[10px] font-black uppercase tracking-widest">
                                                    <th className="p-4">Population</th>
                                                    <th className="p-4 text-right">Likelihood</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-seed-text-primary/5 dark:divide-seed-border-dark">
                                                <tr><td className="p-4 font-bold">Black children</td><td className="p-4 text-right font-serif font-black text-xl text-seed-accent-green">1 in 9</td></tr>
                                                <tr><td className="p-4 font-bold">Latino children</td><td className="p-4 text-right font-serif font-black text-xl text-seed-accent-green">1 in 28</td></tr>
                                                <tr><td className="p-4 font-bold">White children</td><td className="p-4 text-right font-serif font-black text-xl text-seed-accent-green">1 in 57</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="mt-6 text-xs text-center font-bold text-seed-text-primary dark:text-white uppercase tracking-widest">This is a racial justice crisis compounding generational poverty.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 2 — THE CROSS-SYSTEM CASCADE */}
                <section className="py-24 bg-seed-bg dark:bg-seed-surface-dark/30 border-y border-seed-text-primary/5">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl lg:text-6xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-6">The Cross-System Cascade</h2>
                            <p className="text-xl text-seed-text-secondary dark:text-seed-text-secondary-dark-theme max-w-3xl mx-auto">
                                When one system activates, the others follow. Children impacted by parental incarceration appear across <strong>seven major systems.</strong>
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { 
                                    i: Users, 
                                    t: '1. Foster Care', 
                                    points: ['1 in 5 children in foster care has an incarcerated parent', 'Emergency removal often occurs within 72 hours of sentencing', 'Siblings frequently separated across placements'],
                                    desc: 'Caregivers cannot manage additional children. Income loss destabilizes households. Child welfare intervenes not because of abuse, but because systems failed to stabilize families when parents were sentenced.'
                                },
                                { 
                                    i: Gavel, 
                                    t: '2. Juvenile Justice', 
                                    points: ['7 out of 10 children with incarcerated parents will be incarcerated themselves', 'Survival behaviors are criminalized as delinquency', 'Justice involvement begins as early as elementary school'],
                                    desc: 'Trauma manifests as behavioral disruption. Schools respond with suspension. Police respond with arrests. Children acting out unaddressed trauma become justice-involved youth.'
                                },
                                { 
                                    i: GraduationCap, 
                                    t: '3. Education Disruption', 
                                    points: ['50% higher dropout rates than peers', 'Increased suspension and expulsion', 'Higher special education needs (trauma misdiagnosed as disability)'],
                                    desc: "Children move between households. Schools change. Grades drop. No one connects the dots back to parental incarceration. Educational failure becomes inevitable."
                                },
                                { 
                                    i: Home, 
                                    t: '4. Youth Homelessness', 
                                    points: ['50%+ of homeless youth have an incarcerated parent', 'Housing loss often occurs within months of sentencing', 'Neuro-developmental instability (IDD) and housing loss correlation'],
                                    desc: "Families lose income. Rent goes unpaid. Evictions follow. Eventually, placements break down. Youth age out with nowhere to go. Homelessness is the final stage of systemic displacement."
                                },
                                { 
                                    i: HeartPulse, 
                                    t: '5. Mental Health Crisis', 
                                    points: ['2–3× higher rates of depression, anxiety, PTSD', '80% receive no treatment', 'Un-addressed IDD caused by generational trauma'],
                                    desc: "Children experience parental separation as abandonment. Neuro-developmental instability manifest as behavioral symptoms. Crisis becomes chronic. Untreated trauma compounds across systems."
                                },
                                { 
                                    i: Zap, 
                                    t: '6. Substance Use', 
                                    points: ['3× higher likelihood of substance use disorders', 'Self-medication of unaddressed trauma', 'Early initiation (ages 12-15)'],
                                    desc: "Youth self-medicate trauma symptoms. Substances provide temporary escape. Addiction develops. Justice system responds punitively. The cycle perpetuates."
                                },
                                { 
                                    i: TrendingDown, 
                                    t: '7. Generational Poverty', 
                                    points: ['65% of families fall below poverty line after incarceration', 'Children earn 40% less as adults', 'Economic instability persists across generations'],
                                    desc: "Families lose primary income. Housing becomes unstable. Educational disruption limits opportunity. Employment barriers persist. Poverty becomes generational.",
                                    full: true
                                }
                            ].map((card, i) => (
                                <div key={i} className={`bg-white dark:bg-seed-surface-dark p-10 rounded-[2.5rem] shadow-xl border border-seed-text-primary/5 flex flex-col hover:-translate-y-2 transition-all duration-300 ${card.full ? 'md:col-span-2 lg:col-span-3 lg:flex-row lg:items-center gap-10' : ''}`}>
                                    <div className="flex-shrink-0 w-16 h-16 bg-seed-accent-green/10 text-seed-accent-green rounded-2xl flex items-center justify-center mb-6 lg:mb-0">
                                        <card.i size={32} />
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="text-2xl font-serif font-bold text-seed-text-primary dark:text-white mb-4">{card.t}</h4>
                                        <ul className="space-y-3 mb-6">
                                            {card.points.map((p, idx) => (
                                                <li key={idx} className="flex gap-3 text-sm font-medium text-seed-text-secondary dark:text-seed-text-secondary-dark-theme">
                                                    <div className="w-1.5 h-1.5 bg-seed-accent-green rounded-full mt-1.5 flex-shrink-0"></div>
                                                    <span>{p}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="bg-seed-bg dark:bg-seed-bg-dark/50 p-6 rounded-2xl border-l-4 border-seed-accent-green">
                                            <h5 className="font-black text-[10px] uppercase tracking-widest mb-2 opacity-60">What Happens:</h5>
                                            <p className="text-sm opacity-80 leading-relaxed italic">{card.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 3 — THE INTERSECTION EFFECT */}
                <section className="py-24 bg-white dark:bg-seed-bg-dark">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <h2 className="text-3xl lg:text-5xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-8 leading-tight">
                                    The Intersection Effect
                                </h2>
                                <p className="text-xl text-seed-text-secondary dark:text-seed-text-secondary-dark-theme leading-relaxed mb-8 font-medium">
                                    Once a child enters one system, risk multiplies. Systems treat symptoms independently. No system addresses the root cause. Children cycle through all of them.
                                </p>
                                <div className="bg-seed-text-primary text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden mb-8">
                                     <div className="absolute top-0 right-0 w-32 h-32 bg-seed-accent-green opacity-10 rounded-bl-full"></div>
                                     <h4 className="text-seed-accent-green font-black uppercase text-xs tracking-widest mb-4">Multiplier Risk</h4>
                                     <p className="text-xl font-bold italic mb-0 leading-relaxed">
                                        "A child entering foster care due to parental incarceration experiences a 65% increase in juvenile justice contact risk."
                                     </p>
                                </div>
                                <p className="text-sm opacity-60 italic text-center">Each system entry makes the next more likely. This is not random. This is predictable cascade.</p>
                            </div>
                            <div className="bg-seed-bg dark:bg-seed-surface-dark p-10 rounded-[3rem] border border-seed-text-primary/5 shadow-xl">
                                <h4 className="font-black uppercase tracking-widest text-xs text-seed-text-primary dark:text-white mb-6 text-center">Intersection Probability Table</h4>
                                <div className="overflow-hidden rounded-xl border border-seed-text-primary/10">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-seed-text-primary text-white text-[10px] font-black uppercase tracking-widest">
                                                <th className="p-4">System Entry</th>
                                                <th className="p-4 text-right">Compounding Risk</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-seed-text-primary/5 dark:divide-seed-border-dark text-sm">
                                            <tr><td className="p-4 font-bold">Foster care entry</td><td className="p-4 text-right font-black text-red-500">65% increase in juvenile justice contact</td></tr>
                                            <tr><td className="p-4 font-bold">Juvenile justice contact</td><td className="p-4 text-right font-black text-red-500">80% increase in mental health crisis</td></tr>
                                            <tr><td className="p-4 font-bold">Mental health crisis</td><td className="p-4 text-right font-black text-red-500">45% increase in substance use issues</td></tr>
                                            <tr><td className="p-4 font-bold">Substance use</td><td className="p-4 text-right font-black text-red-500">20% increase in homelessness</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 4 — THE COST OF INACTION */}
                <section className="py-24 bg-seed-text-primary dark:bg-seed-surface-dark text-white relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-seed-accent-green/5 rounded-full filter blur-[120px] pointer-events-none"></div>
                    <div className="container mx-auto px-4 max-w-6xl relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl lg:text-7xl font-serif font-bold mb-6 uppercase tracking-tighter">The Cost of Inaction</h2>
                            <p className="text-xl opacity-80 max-w-3xl mx-auto leading-relaxed">
                                Crisis response is extraordinarily expensive. Governments are already paying—through fragmented, reactive spending across seven systems. All because no one intervened on Day 1.
                            </p>
                        </div>
                        
                        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
                            {/* CASE PROFILE */}
                            <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-[3rem] overflow-hidden shadow-2xl">
                                <div className="p-8 border-b border-white/10 bg-white/5 text-center">
                                    <h3 className="text-2xl font-serif font-bold">CASE PROFILE: ONE FAMILY</h3>
                                    <p className="text-xs uppercase font-black text-seed-accent-green tracking-widest mt-2">TWO CHILDREN, FIVE-YEAR SENTENCE</p>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-white/10 text-white uppercase text-[10px] font-black tracking-widest">
                                                <th className="p-6">Without Intervention</th>
                                                <th className="p-6 text-right">Estimated Cost</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/10">
                                            <tr><td className="p-6 font-bold opacity-80">Foster care (2 children, 3 years)</td><td className="p-6 text-right font-serif font-black">$500,000</td></tr>
                                            <tr><td className="p-6 font-bold opacity-80">Juvenile justice (detention, probation)</td><td className="p-6 text-right font-serif font-black">$450,000</td></tr>
                                            <tr><td className="p-6 font-bold opacity-80">Homeless services (emergency shelter)</td><td className="p-6 text-right font-serif font-black">$200,000</td></tr>
                                            <tr><td className="p-6 font-bold opacity-80">Mental health crisis (ER, hospital)</td><td className="p-6 text-right font-serif font-black">$50,000</td></tr>
                                            <tr><td className="p-6 font-bold opacity-80">Special education (IEPs, supports)</td><td className="p-6 text-right font-serif font-black">$160,000</td></tr>
                                            <tr className="bg-red-600 text-white">
                                                <td className="p-8 text-2xl font-black uppercase tracking-tighter">TOTAL PUBLIC COST</td>
                                                <td className="p-8 text-4xl text-right font-serif font-black">$1.36 MILLION</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="p-6 text-center text-xs opacity-50 font-bold uppercase tracking-widest italic">This is the cost of one family across five years. Multiply by 2.7 million children.</p>
                            </div>

                            {/* PREVENTION COMPARISON */}
                            <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-[3rem] overflow-hidden shadow-2xl">
                                <div className="p-8 border-b border-white/10 bg-white/5 text-center">
                                    <h3 className="text-2xl font-serif font-bold">THE PREVENTION COMPARISON</h3>
                                    <p className="text-xs uppercase font-black text-seed-accent-green tracking-widest mt-2">What if we intervened at sentencing instead?</p>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-white/10 text-white uppercase text-[10px] font-black tracking-widest">
                                                <th className="p-6">Comprehensive Stabilization</th>
                                                <th className="p-6 text-right">Estimated Cost</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/10">
                                            <tr><td className="p-6 font-bold opacity-80">Caregiver support (finance, childcare)</td><td className="p-6 text-right font-serif font-black">$18,000</td></tr>
                                            <tr><td className="p-6 font-bold opacity-80">Children's services (counseling, mentoring)</td><td className="p-6 text-right font-serif font-black">$15,000</td></tr>
                                            <tr><td className="p-6 font-bold opacity-80">Housing stabilization (rent, utilities)</td><td className="p-6 text-right font-serif font-black">$12,000</td></tr>
                                            <tr><td className="p-6 font-bold opacity-80">Healthcare coordination (medical, behavioral)</td><td className="p-6 text-right font-serif font-black">$8,500</td></tr>
                                            <tr><td className="p-6 font-bold opacity-80">Workforce services (caregiver employment)</td><td className="p-6 text-right font-serif font-black">$8,000</td></tr>
                                            <tr className="bg-seed-accent-green text-seed-text-primary">
                                                <td className="p-8 text-2xl font-black uppercase tracking-tighter">TOTAL INTERVENTION COST</td>
                                                <td className="p-8 text-4xl text-right font-serif font-black">$61,500</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* ROI SECTION */}
                        <div className="bg-white/10 p-12 rounded-[4rem] border border-white/20 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-3xl">
                            <div className="flex-1 text-center lg:text-left">
                                <h3 className="text-4xl font-serif font-bold mb-6 text-seed-accent-green uppercase">RETURN ON INVESTMENT</h3>
                                <div className="space-y-4 text-xl">
                                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                        <span className="opacity-70">Without Intervention:</span>
                                        <span className="font-serif font-black">$1,360,000</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                        <span className="opacity-70">With Intervention:</span>
                                        <span className="font-serif font-black text-seed-accent-green">$61,500</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-2">
                                        <span className="font-black text-2xl">NET SAVINGS:</span>
                                        <span className="font-serif font-black text-4xl text-seed-accent-green">$1,298,500</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="text-9xl font-serif font-black text-seed-accent-green drop-shadow-[0_0_30px_rgba(82,183,136,0.3)]">22:1</div>
                                <div className="text-2xl font-black uppercase tracking-[0.4em] mt-4 opacity-70">ROI PER FAMILY</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 7 — OUR RESPONSE */}
                <section className="py-24 bg-white dark:bg-seed-bg-dark">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl lg:text-7xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-6 uppercase tracking-tighter">OUR RESPONSE</h2>
                            <p className="text-xl text-seed-text-secondary dark:text-seed-text-secondary-dark-theme max-w-3xl mx-auto">
                                A Solution Group CDC was founded specifically to address this systemic failure through comprehensive intervention.
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* 1. COIP FRAMEWORK */}
                            <div className="p-10 bg-seed-bg dark:bg-seed-surface-dark rounded-[3rem] shadow-xl border border-seed-text-primary/5 flex flex-col group hover:border-seed-accent-green transition-all">
                                <span className="text-seed-accent-green font-black uppercase text-[10px] tracking-[0.3em] block mb-4">Approach 1</span>
                                <h3 className="text-2xl font-serif font-bold text-seed-text-primary dark:text-white mb-6 uppercase">COIP Framework</h3>
                                <p className="text-sm opacity-80 mb-8 flex-grow leading-relaxed">
                                    Point-of-sentencing intervention stabilizing families before crisis cascades into foster care, juvenile justice, and eventual adult incarceration.
                                </p>
                                <ul className="space-y-3 mb-10">
                                    {[
                                        'Immediate caregiver support & financial stabilization',
                                        'Children\'s mental health & educational services',
                                        'Housing stability & emergency assistance',
                                        'Workforce development for caregivers',
                                        'Coordinated cross-system response'
                                    ].map(item => (
                                        <li key={item} className="flex gap-3 text-sm font-bold">
                                            <CheckCircle size={18} className="text-seed-accent-green" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button onClick={onNavigateToCOIP} className="mt-auto flex items-center justify-between w-full p-4 rounded-xl border border-seed-text-primary/10 hover:bg-seed-text-primary hover:text-white transition-all font-bold text-sm uppercase tracking-widest">
                                    Learn More About COIP <ArrowRight size={18} />
                                </button>
                            </div>

                            {/* 2. CASE STUDIES */}
                            <div className="p-10 bg-seed-bg dark:bg-seed-surface-dark rounded-[3rem] shadow-xl border border-seed-text-primary/5 flex flex-col group hover:border-seed-accent-green transition-all">
                                <span className="text-seed-accent-green font-black uppercase text-[10px] tracking-[0.3em] block mb-4">Approach 2</span>
                                <h3 className="text-2xl font-serif font-bold text-seed-text-primary dark:text-white mb-6 uppercase">Implementation Case Studies</h3>
                                <p className="text-sm opacity-80 mb-8 flex-grow leading-relaxed">
                                    See how our architectural blueprints are deployed across different industry sectors to achieve these metrics.
                                </p>
                                <ul className="space-y-3 mb-10">
                                    {[
                                        'Housing Authority Renewal Blueprints',
                                        'Healthcare Systems Integration',
                                        'Restorative Justice Ecosystems',
                                        'Co-Governance & Budgeting Models',
                                        'Workforce-to-Housing Pipeline'
                                    ].map(item => (
                                        <li key={item} className="flex gap-3 text-sm font-bold">
                                            <Layers size={18} className="text-seed-accent-green" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button onClick={onNavigateToCaseStudies} className="mt-auto flex items-center justify-between w-full p-4 rounded-xl border border-seed-text-primary/10 hover:bg-seed-text-primary hover:text-white transition-all font-bold text-sm uppercase tracking-widest">
                                    View All Case Studies <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CLOSING SECTION */}
                <section className="py-24 lg:py-40 bg-seed-text-primary dark:bg-seed-surface-dark text-white text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-seed-accent-green opacity-[0.02] pointer-events-none"></div>
                    <div className="container mx-auto px-4 relative z-10 max-w-5xl">
                        <h2 className="text-5xl lg:text-9xl font-serif font-black mb-10 leading-tight uppercase tracking-tighter">Scale Everywhere</h2>
                        <div className="space-y-10 text-xl lg:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed font-medium mb-16">
                            <p className="text-seed-accent-green text-3xl lg:text-5xl font-black uppercase">What's missing is coordination.</p>
                            <p>A Solution Group CDC provides the architecture to interrupt intergenerational incarceration at scale—through early intervention, workforce development, and comprehensive community stabilization.</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6">
                            <button onClick={onNavigateToFrameworks} className="bg-white text-seed-text-primary font-black px-12 py-5 rounded-xl hover:bg-seed-accent-green hover:text-white transition-all text-xl shadow-lg uppercase tracking-widest">
                                EXPLORE OUR FRAMEWORKS
                            </button>
                            <button onClick={onNavigateToContact} className="bg-seed-accent-green text-seed-text-primary font-black px-12 py-5 rounded-xl hover:shadow-2xl transition-all text-xl shadow-lg uppercase tracking-widest">
                                PARTNER WITH US
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
                onOpenContactModal={() => {}} 
                onOpenFeedbackModal={() => {}} 
            />
        </div>
    );
};