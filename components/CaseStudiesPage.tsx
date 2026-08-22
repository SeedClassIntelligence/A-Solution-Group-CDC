import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { 
    Scale, 
    HeartPulse, 
    GraduationCap, 
    Building2, 
    Landmark, 
    Zap, 
    PiggyBank, 
    Users, 
    HeartHandshake, 
    HardHat, 
    CheckCircle, 
    ArrowRight,
    Puzzle,
    Activity,
    ShieldCheck,
    Dna,
    Layers
} from 'lucide-react';

type CaseStudiesPageProps = {
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

const bluePrints = [
    {
        category: "Housing Authorities",
        title: "From Shelter to Sovereign Communities",
        frameworks: ["WCS Pillar 1", "WCSN Tier 1"],
        challenge: "Subsidized housing often acts as a static warehouse for poverty rather than an engine for mobility.",
        activation: "Integrate economic development, workforce training, and resident ownership models directly into public housing properties.",
        result: "Transforms static units into dynamic economic hubs, reducing dependency and building intergenerational wealth through cooperative ownership.",
        icon: Building2
    },
    {
        category: "Real Estate Developers",
        title: "Equitable Development & Community Benefits",
        frameworks: ["WCS Pillar 9", "WCSN Tier 3"],
        challenge: "Large-scale developments often trigger gentrification, displacing the very residents they aim to serve.",
        activation: "Utilize Community Benefit Agreements (CBAs) to guarantee local hiring, affordable commercial space, and resident-led advisory councils.",
        result: "Secures community buy-in and accelerates approval timelines while ensuring the neighborhood grows *with* the development.",
        icon: HardHat
    },
    {
        category: "Healthcare Systems",
        title: "Clinical Care to Community Health",
        frameworks: ["360° Holistic Model", "WCS Pillar 3"],
        challenge: "Social Determinants of Health (SDOH) drive 80% of outcomes but are rarely addressed in clinical settings.",
        activation: "Integrate Family Navigators and CHWs into the care team to address housing stabilization and food security as part of a patient’s health plan.",
        result: "Reduces ER readmissions and costs by treating the 'whole person' and addressing crises before they manifest as medical emergencies.",
        icon: HeartPulse
    },
    {
        category: "Justice Systems",
        title: "The Restorative Justice Ecosystem",
        frameworks: ["Reentry Framework", "SIM Model"],
        challenge: "The revolving door of recidivism is fueled by a total breakdown of family stability at the moment of sentencing.",
        activation: "Mandate Child Impact Assessments and assign Family Navigators within 72 hours of parental incarceration.",
        result: "Dismantles cycles of intergenerational incarceration by providing immediate stabilization and maintaining parent-child bonds.",
        icon: Scale
    },
    {
        category: "Technology & Innovation",
        title: "Digital Sovereignty & Smart Access",
        frameworks: ["WCS Pillar 4", "WCSN Tier 2"],
        challenge: "The digital divide is a modern form of redlining, preventing participation in the global economy.",
        activation: "Establish community-owned mesh networks and digital literacy hubs managed and maintained by local residents.",
        result: "Creates local high-tech jobs and ensures data sovereignty, providing the community with permanent, reliable, and owned infrastructure.",
        icon: Zap
    },
    {
        category: "Education Systems",
        title: "Schools as Community Wellness Hubs",
        frameworks: ["WCS Pillar 2", "360° Holistic Model"],
        challenge: "Children cannot learn effectively while experiencing the trauma of food, housing, or family instability.",
        activation: "Co-locate health clinics, adult education, and community kitchens within school buildings to stabilize families.",
        result: "Removes non-academic barriers to learning, resulting in higher attendance, deeper student engagement, and stronger family units.",
        icon: GraduationCap
    },
    {
        category: "Non-Profits & Coalitions",
        title: "Breaking Silos via Networked Impact",
        frameworks: ["WCSN Tier 1-3", "WCS Framework"],
        challenge: "Fragmented services lead to 'referral loops' where residents never actually receive the help they need.",
        activation: "Unify organizations into a seamless service delivery network sharing a single care plan and accountability dashboard.",
        result: "Maximizes donor ROI and eliminates service gaps, providing families with a seamless, 'no wrong door' experience.",
        icon: HeartHandshake
    },
    {
        category: "Government & Municipalities",
        title: "Participatory Budgeting & Co-Governance",
        frameworks: ["WCS Pillar 7", "WCSN Tier 3"],
        challenge: "Top-down administration often fails to address the unique, hyper-local needs of marginalized neighborhoods.",
        activation: "Shift decision-making power over development budgets to neighborhood assemblies led by trained local Solutionologists.",
        result: "Restores public trust and ensures funds target actual community needs, cultivating a pipeline of local civic leaders.",
        icon: Landmark
    },
    {
        category: "Finance & CDFIs",
        title: "Regenerative Capital & Local Wealth",
        frameworks: ["WCS Pillar 1", "WCS Pillar 9"],
        challenge: "Traditional capital extraction drains wealth from neighborhoods, leaving them dependent on external aid.",
        activation: "Design revolving loan funds and community-owned investment vehicles that circulate capital multiple times within the neighborhood.",
        result: "Insulates the local economy from external market shocks and makes capital accessible to historically excluded entrepreneurs.",
        icon: PiggyBank
    },
    {
        category: "Community Organizations",
        title: "Grassroots Resilience & Mutual Aid",
        frameworks: ["WCS Pillar 6", "WCSN Tier 1"],
        challenge: "Informal support networks lack the structural permanence required to respond to long-term systemic crises.",
        activation: "Formalize mutual aid into robust, sustainable community infrastructure with emergency response and stabilization capabilities.",
        result: "Builds deep social capital, ensuring the community has the human infrastructure to support itself effectively during crises.",
        icon: Users
    }
];

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ 
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
    toggleTheme,
    onOpenContactModal
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
                currentPage="case-studies"
            />
            
            <main className="flex-grow">
                {/* HERO SECTION */}
                <section className="bg-seed-text-primary dark:bg-seed-surface-dark text-white py-24 lg:py-32 relative overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                        <div className="absolute top-10 left-10 w-96 h-96 bg-seed-accent-green rounded-full filter blur-[150px]"></div>
                    </div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-seed-accent-green font-bold text-xs uppercase tracking-[0.2em] mb-8 border border-white/10">
                            Institutional Implementation
                        </div>
                        <h1 className="text-4xl lg:text-7xl font-serif font-bold mb-8 leading-tight uppercase tracking-tight">
                            Case Studies: <br/>
                            <span className="text-seed-accent-green">Blueprints of Change</span>
                        </h1>
                        <p className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed font-medium opacity-90">
                            A Solution Group CDC provides the architectural blueprints that move organizations from traditional services to systems transformation across ten distinct sectors.
                        </p>
                    </div>
                </section>

                {/* INDUSTRY GRID */}
                <section className="py-24 bg-white dark:bg-seed-bg-dark">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
                            {bluePrints.map((bp, i) => (
                                <div key={i} className="group bg-seed-bg dark:bg-seed-surface-dark p-10 rounded-[3rem] border border-seed-text-primary/5 hover:border-seed-accent-green transition-all shadow-xl flex flex-col">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="w-16 h-16 bg-seed-text-primary/5 dark:bg-seed-accent-green/10 text-seed-accent-green rounded-2xl flex items-center justify-center">
                                            <bp.icon size={32} />
                                        </div>
                                        <div className="flex flex-wrap justify-end gap-2 max-w-[50%]">
                                            {bp.frameworks.map((f, idx) => (
                                                <span key={idx} className="bg-seed-text-primary text-white dark:bg-seed-accent-green dark:text-seed-text-primary text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1">
                                                    <Layers size={10} /> {f}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <span className="text-seed-accent-green font-black uppercase text-xs tracking-[0.2em] mb-2">{bp.category}</span>
                                    <h3 className="text-3xl font-serif font-bold text-seed-text-primary dark:text-white mb-6 leading-tight group-hover:text-seed-accent-green transition-colors">{bp.title}</h3>
                                    
                                    <div className="space-y-6 flex-grow">
                                        <div>
                                            <h4 className="text-xs font-black text-seed-text-primary/40 dark:text-white/40 uppercase mb-2">The Challenge</h4>
                                            <p className="text-lg text-seed-text-secondary dark:text-seed-text-secondary-dark-theme font-medium leading-relaxed italic border-l-4 border-red-500/20 pl-4">{bp.challenge}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-black text-seed-accent-green uppercase mb-2">System Activation</h4>
                                            <p className="text-seed-text-secondary dark:text-seed-text-secondary-dark-theme leading-relaxed">{bp.activation}</p>
                                        </div>
                                        <div className="bg-white/50 dark:bg-seed-bg-dark/50 p-6 rounded-2xl border border-seed-text-primary/5">
                                            <h4 className="text-xs font-black text-seed-text-primary dark:text-seed-accent-green uppercase mb-2">Projected Result</h4>
                                            <p className="text-seed-text-primary dark:text-white font-bold">{bp.result}</p>
                                        </div>
                                    </div>
                                    
                                    <button 
                                        onClick={() => onOpenContactModal(`Case Study Request: ${bp.category}`)}
                                        className="mt-10 flex items-center justify-between w-full p-4 rounded-xl border border-seed-text-primary/10 hover:bg-seed-text-primary hover:text-white dark:hover:bg-seed-accent-green dark:hover:text-seed-text-primary transition-all font-bold"
                                    >
                                        <span>Request Detailed Case Study</span>
                                        <ArrowRight size={20} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ARCHITECTURAL CTA */}
                <section className="py-24 bg-seed-text-primary dark:bg-seed-surface-dark text-white text-center relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-seed-accent-green/5 rounded-full filter blur-[120px] pointer-events-none"></div>
                    <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                        <h2 className="text-4xl lg:text-7xl font-serif font-bold mb-10 leading-tight">
                            Your industry is a <br/>
                            <span className="text-seed-accent-green">component of the solution.</span>
                        </h2>
                        <p className="text-xl lg:text-2xl mb-16 opacity-80 max-w-3xl mx-auto font-medium">
                            A Solution Group CDC works with individual entities to align their operations with the national architecture.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <button onClick={() => onOpenContactModal('Custom Case Study Consultation')} className="bg-seed-accent-green text-seed-text-primary font-black px-12 py-5 rounded-xl hover:shadow-2xl transition-all text-xl shadow-lg flex items-center gap-3">
                                <Puzzle size={24} /> Start Custom Blueprint
                            </button>
                            <button onClick={onNavigateToSystemsImpact} className="bg-white/10 backdrop-blur-md text-white border border-white/20 font-black px-12 py-5 rounded-xl hover:bg-white/20 transition-all text-xl shadow-lg flex items-center gap-3">
                                <Activity size={24} /> See Impact Metrics
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            
            <Footer 
                onNavigate={() => onNavigateToStudio()} 
                onNavigateToSection={onNavigateToSection} 
                onNavigateToConsulting={onNavigateToConsulting}
                onNavigateToServices={onNavigateToServices}
                onNavigateToCOIP={onNavigateToCOIP}
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