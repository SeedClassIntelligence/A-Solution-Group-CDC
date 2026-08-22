import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { 
    Heart, 
    Target, 
    Eye, 
    Layers, 
    Scale, 
    Users, 
    GraduationCap, 
    Building2, 
    HeartPulse, 
    Briefcase, 
    ArrowRight,
    Users2,
    ShieldCheck,
    CheckCircle,
    Star,
    Key,
    Rocket,
    Landmark,
    HelpingHand,
    Mail,
    Award,
    FileText,
    History,
    MapPin,
    ShieldAlert,
    HardHat,
    Hammer,
    Activity,
    Stethoscope,
    TrendingUp,
    Globe
} from 'lucide-react';

type AboutPageProps = {
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

export const AboutPage: React.FC<AboutPageProps> = ({
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
                currentPage="about"
            />
            
            <main className="flex-grow">
                {/* HERO / MISSION */}
                <section className="bg-seed-text-primary dark:bg-seed-surface-dark text-white py-24 lg:py-32 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-seed-accent-green opacity-5 rounded-full blur-[150px] -mr-40 -mt-40 pointer-events-none"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-seed-accent-green text-seed-text-primary font-black text-[10px] uppercase tracking-[0.2em] mb-8 rounded">
                            Our Mission & Purpose
                        </div>
                        <h1 className="text-4xl lg:text-7xl font-serif font-bold mb-8 leading-tight max-w-5xl mx-auto">
                            Centering the Children <br className="hidden md:block" /> 
                            <span className="text-seed-accent-green">America Forgot</span>
                        </h1>
                        <p className="text-xl lg:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed font-medium mb-12">
                            A Solution Group CDC interrupts intergenerational incarceration by centering the 2.7 million children in America with incarcerated parents through early intervention, workforce development, and community stabilization.
                        </p>
                        <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 max-w-4xl mx-auto text-left shadow-2xl">
                             <div className="flex gap-6 items-start">
                                 <div className="p-4 bg-seed-accent-green/20 text-seed-accent-green rounded-2xl flex-shrink-0">
                                     <ShieldCheck size={32} />
                                 </div>
                                 <p className="text-lg lg:text-xl font-bold leading-relaxed">
                                     We serve as national steward of the Children of Incarcerated Parents (COIP) policy framework and Whole Community Solution (WCS) architecture—evidence-based intervention models addressing the largest unrecognized childhood trauma population in the United States.
                                 </p>
                             </div>
                        </div>
                    </div>
                </section>

                {/* FOUNDER'S STORY */}
                <section id="founder" className="py-24 lg:py-32 bg-white dark:bg-seed-bg-dark border-b border-seed-text-primary/5">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-20 items-start">
                            <div className="relative">
                                <div className="aspect-[4/5] bg-seed-text-primary rounded-[3rem] overflow-hidden shadow-2xl border-8 border-seed-bg dark:border-seed-surface-dark relative">
                                     <div className="absolute inset-0 bg-gradient-to-t from-seed-text-primary via-transparent to-transparent flex flex-col justify-end p-10">
                                        <h4 className="text-white font-serif text-4xl font-bold">William Darnell Jernigan IV</h4>
                                        <p className="text-seed-accent-green font-bold text-lg tracking-widest uppercase mt-2">Founder & Executive Director</p>
                                     </div>
                                </div>
                                <div className="absolute -bottom-10 -right-10 bg-seed-accent-green text-seed-text-primary p-8 rounded-3xl shadow-2xl border-4 border-white dark:border-seed-surface-dark max-w-sm">
                                    <p className="text-lg italic font-black leading-relaxed">
                                        "Darnell founded A Solution Group CDC so no other family experiences what his has endured."
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-3xl lg:text-5xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-8 leading-tight">
                                    The Personal Catalyst
                                </h2>
                                <div className="space-y-6 text-lg text-seed-text-secondary dark:text-seed-text-secondary-dark-theme leading-relaxed">
                                    <p>While completing pre-release parenting education, Darnell learned that <strong>70% of children with incarcerated parents will themselves experience incarceration.</strong> As a father of three sons, this statistic proved tragically accurate—all three of his sons have experienced incarceration despite his efforts to prevent it.</p>
                                    <p>His middle son, a high-achieving student who graduated before his school's valedictorian, has been incarcerated for 10 years, proving that education alone is insufficient without economic opportunity, stable housing, and trauma repair.</p>
                                    <p>His youngest son, most impacted by Darnell's incarceration during childhood, entered juvenile custody young, spent 3.5 years in juvenile detention, and was sentenced to 7 years in adult prison at age 17, demonstrating that intervention after juvenile system entry is too late.</p>
                                    <div className="p-6 bg-seed-bg dark:bg-seed-surface-dark rounded-2xl border-l-8 border-seed-accent-green shadow-sm">
                                        <p className="font-bold text-seed-text-primary dark:text-white">
                                            Today, Darnell is raising his grandson—his middle son's child—as a child of an incarcerated parent, representing the exact population A Solution Group CDC exists to serve.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Professional & Quantified Output */}
                        <div className="mt-32 grid md:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <h3 className="text-2xl font-serif font-bold text-seed-text-primary dark:text-white flex items-center gap-3">
                                    <Award className="text-seed-accent-green" /> Professional Qualifications
                                </h3>
                                <div className="grid grid-cols-1 gap-4">
                                    {[
                                        { t: 'Systems Architecture', d: 'Creator of COIP framework and WCS architecture.' },
                                        { t: 'CHW Certification', d: 'CHW-1 with Medicaid billing capacity.' },
                                        { t: 'Multi-Jurisdiction', d: 'Implementation in D.C., Nevada, and Wisconsin.' },
                                        { t: 'Workforce Development', d: 'Proven youth supervision and OSHA delivery.' },
                                        { t: 'Operational Leadership', d: 'Operational systems development for high-acuity residential (24/7).' }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-4 p-4 bg-seed-bg dark:bg-seed-surface-dark rounded-xl border border-seed-text-primary/5 group hover:border-seed-accent-green transition-all">
                                            <div className="w-1.5 h-auto bg-seed-accent-green/30 rounded-full group-hover:bg-seed-accent-green transition-colors"></div>
                                            <div>
                                                <h4 className="font-bold text-seed-text-primary dark:text-white text-sm uppercase tracking-widest">{item.t}</h4>
                                                <p className="text-sm opacity-70">{item.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <button onClick={() => onOpenContactModal('Request Founder Bio')} className="flex-1 bg-seed-text-primary dark:bg-seed-accent-green text-white dark:text-seed-text-primary font-black py-4 rounded-xl hover:shadow-lg transition-all text-xs uppercase tracking-widest">
                                        Read Full Bio
                                    </button>
                                    <button onClick={() => onOpenContactModal('Download Founder Resume')} className="flex-1 border-2 border-seed-text-primary/20 dark:border-seed-accent-green/20 text-seed-text-primary dark:text-seed-accent-green font-black py-4 rounded-xl hover:bg-seed-bg transition-all text-xs uppercase tracking-widest">
                                        Download Resume
                                    </button>
                                </div>
                            </div>
                            <div className="bg-seed-text-primary text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col justify-center">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-seed-accent-green opacity-5 rounded-bl-full"></div>
                                <h3 className="text-2xl font-serif font-bold mb-10 text-seed-accent-green uppercase tracking-widest">Quantified Output</h3>
                                <div className="grid grid-cols-2 gap-y-10 gap-x-6">
                                    {[
                                        { v: '850+', l: 'Pages authored' },
                                        { v: '75+', l: 'Assessment tools' },
                                        { v: '38h', l: 'Training content' },
                                        { v: '15+', l: 'Youth OSHA certified' },
                                        { v: '30+', l: 'Jobs created' },
                                        { v: '11+', l: 'Crisis interventions' },
                                        { v: '0', l: 'Safety incidents' }
                                    ].map((stat, i) => (
                                        <div key={i}>
                                            <span className="block text-4xl font-serif font-black text-white">{stat.v}</span>
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-seed-accent-green">{stat.l}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* BOARD OF DIRECTORS */}
                <section id="board" className="py-24 bg-seed-bg dark:bg-seed-surface-dark/30 border-y border-seed-text-primary/5">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-20">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-seed-text-primary text-white font-black text-[10px] uppercase tracking-[0.2em] mb-6 rounded">
                                Stewardship & Governance
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-6 uppercase tracking-tight">
                                Board of Directors
                            </h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { n: 'William Darnell Jernigan IV', r: 'President & Board Chair', d: 'Systems architecture, policy innovation, workforce development.', h: '40 hours/week' },
                                { n: 'Pauline Dorsey', r: 'Treasurer', d: 'Historic West Side resident. Real estate and property rehab partnerships.', h: '10 hours/week' },
                                { n: 'Jamila Gray, NP', r: 'Director', d: 'Licensed Nurse Practitioner. Social drivers of health and clinical protocols.', h: '10 hours/week' },
                                { n: 'Madelyn Rhodes', r: 'Secretary', d: 'Community organizing, nonprofit governance, stakeholder engagement.', h: '10 hours/week' }
                            ].map((member, i) => (
                                <div key={i} className="bg-white dark:bg-seed-surface-dark p-8 rounded-[2.5rem] shadow-xl border border-seed-text-primary/5 flex flex-col h-full group hover:border-seed-accent-green transition-all">
                                    <div className="w-12 h-12 bg-seed-bg dark:bg-seed-bg-dark rounded-xl flex items-center justify-center mb-6 group-hover:bg-seed-accent-green group-hover:text-seed-text-primary transition-colors">
                                        <Users size={24} />
                                    </div>
                                    <h4 className="text-xl font-serif font-bold text-seed-text-primary dark:text-white mb-2 leading-tight">{member.n}</h4>
                                    <p className="text-xs font-black text-seed-accent-green uppercase tracking-widest mb-4">{member.r}</p>
                                    <p className="text-sm opacity-70 mb-6 flex-grow leading-relaxed">{member.d}</p>
                                    <div className="pt-4 border-t border-seed-text-primary/5">
                                         <span className="text-[10px] font-black uppercase text-seed-text-primary/40 dark:text-white/40 tracking-widest">{member.h} (unpaid volunteer)</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-20 bg-white/50 dark:bg-seed-bg-dark/50 p-8 rounded-3xl border border-seed-text-primary/10 text-center max-w-3xl mx-auto">
                            <h4 className="font-bold text-seed-text-primary dark:text-white uppercase tracking-widest text-xs mb-4">Board Governance</h4>
                            <div className="flex flex-wrap justify-center gap-8 text-sm font-medium opacity-80">
                                <span className="flex items-center gap-2"><CheckCircle size={14} className="text-seed-accent-green"/> Quarterly performance reviews</span>
                                <span className="flex items-center gap-2"><CheckCircle size={14} className="text-seed-accent-green"/> Budget approval & compliance</span>
                                <span className="flex items-center gap-2"><CheckCircle size={14} className="text-seed-accent-green"/> Strategic community oversight</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHERE WE WORK */}
                <section id="locations" className="py-24 bg-white dark:bg-seed-bg-dark">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <h2 className="text-3xl lg:text-5xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-8 leading-tight uppercase">
                                    Where We Work
                                </h2>
                                <p className="text-xl text-seed-text-secondary dark:text-seed-text-secondary-dark-theme leading-relaxed mb-12 font-medium">
                                    A multi-jurisdiction systems model operating from hyper-local neighborhoods to national policy stewardship.
                                </p>
                                <div className="space-y-6">
                                    {[
                                        { s: 'Nevada', c: 'Primary Operations', d: 'Historic West Side (89106), YouthBuild, Workforce-to-Housing pipeline.' },
                                        { s: 'Washington D.C.', c: 'Systems Architecture', d: 'DOC partnership, PREA-compliant reentry design, $1.1M cost analysis.' },
                                        { s: 'Wisconsin', c: 'Expansion', d: 'Milwaukee construction employment with KG Development Group.' },
                                        { s: 'National', c: 'Policy Framework', d: 'COIP framework stewardship and multi-jurisdiction consultation.' }
                                    ].map((loc, i) => (
                                        <div key={i} className="flex gap-6 group">
                                            <div className="w-12 h-12 rounded-full bg-seed-bg dark:bg-seed-surface-dark border border-seed-text-primary/5 flex flex-col items-center justify-center font-serif font-black text-seed-accent-green group-hover:bg-seed-accent-green group-hover:text-seed-text-primary transition-colors">
                                                {i + 1}
                                            </div>
                                            <div>
                                                <h4 className="font-serif font-bold text-xl text-seed-text-primary dark:text-white flex items-center gap-2">
                                                    {loc.s} <span className="text-[10px] font-black uppercase tracking-widest text-seed-accent-green">{loc.c}</span>
                                                </h4>
                                                <p className="text-sm opacity-70 leading-relaxed">{loc.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-square bg-seed-bg dark:bg-seed-surface-dark rounded-[4rem] border border-seed-text-primary/5 flex items-center justify-center p-12 overflow-hidden shadow-inner">
                                     <Globe size={400} className="text-seed-accent-green opacity-5 animate-pulse" />
                                     <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
                                         <MapPin size={48} className="text-seed-accent-green mb-4" />
                                         <h4 className="text-3xl font-serif font-bold text-seed-text-primary dark:text-white mb-2">Networked Operations</h4>
                                         <p className="text-sm opacity-60 font-bold max-w-xs uppercase tracking-widest">Bridging local impact with national policy</p>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PARTNERS & COLLABORATORS */}
                <section id="partners" className="py-24 bg-seed-text-primary dark:bg-seed-surface-dark text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-seed-accent-green opacity-[0.03] pointer-events-none"></div>
                    <div className="container mx-auto px-4 max-w-7xl relative z-10">
                        <div className="text-center mb-20">
                             <div className="inline-flex items-center gap-2 px-3 py-1 bg-seed-accent-green text-seed-text-primary font-black text-[10px] uppercase tracking-[0.2em] mb-6 rounded">
                                Collaboration is the Core
                            </div>
                            <h2 className="text-3xl lg:text-6xl font-serif font-bold mb-6 uppercase tracking-tight">Our Partners & Collaborators</h2>
                            <p className="text-xl opacity-80 max-w-3xl mx-auto font-medium">
                                A Solution Group CDC works with leading organizations across workforce, housing, and policy to expand opportunity for youth at highest risk.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Construction & Workforce */}
                            <div className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 shadow-2xl flex flex-col group">
                                <div className="w-14 h-14 bg-seed-accent-green text-seed-text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    <HardHat size={28} />
                                </div>
                                <h3 className="text-xl font-black uppercase tracking-widest mb-6 border-b border-white/10 pb-4 text-seed-accent-green">Construction & Workforce</h3>
                                <div className="space-y-8">
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">KG Development Group</h4>
                                        <p className="text-xs opacity-70 leading-relaxed">Multi-state developer providing licensed supervision and guaranteed employment pipeline.</p>
                                        <p className="text-[10px] font-black text-seed-accent-green mt-2 uppercase">In-kind Match: $88,560</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Registered Apprenticeship Pathways</h4>
                                        <p className="text-xs opacity-70 leading-relaxed">Connecting youth directly into union-led skilled trades training.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Education & Faith */}
                            <div className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 shadow-2xl flex flex-col group">
                                <div className="w-14 h-14 bg-seed-accent-green text-seed-text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    <GraduationCap size={28} />
                                </div>
                                <h3 className="text-xl font-black uppercase tracking-widest mb-6 border-b border-white/10 pb-4 text-seed-accent-green">Education & Faith</h3>
                                <div className="space-y-8">
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Advent United Methodist Church</h4>
                                        <p className="text-xs opacity-70 leading-relaxed">Facility provider (1,300 sq ft classroom) co-located with active construction site.</p>
                                        <p className="text-[10px] font-black text-seed-accent-green mt-2 uppercase">In-kind Match: $72,000</p>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                        <p className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                                            <Star size={12} className="text-seed-accent-green" /> Educational Freedom Priority
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Workforce System */}
                            <div className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 shadow-2xl flex flex-col group">
                                <div className="w-14 h-14 bg-seed-accent-green text-seed-text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    <Briefcase size={28} />
                                </div>
                                <h3 className="text-xl font-black uppercase tracking-widest mb-6 border-b border-white/10 pb-4 text-seed-accent-green">Workforce System</h3>
                                <div className="space-y-8">
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Workforce Connections</h4>
                                        <p className="text-xs opacity-70 leading-relaxed">Nevada American Job Center. Required YouthBuild one-stop partner for WIOA coordination.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">OWINN (Nevada)</h4>
                                        <p className="text-xs opacity-70 leading-relaxed">State Apprenticeship Agency coordinating Registered Apprenticeship (RA) placement.</p>
                                    </div>
                                </div>
                            </div>

                            {/* RA Sponsors */}
                            <div className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 shadow-2xl flex flex-col group">
                                <div className="w-14 h-14 bg-seed-accent-green text-seed-text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    <Hammer size={28} />
                                </div>
                                <h3 className="text-xl font-black uppercase tracking-widest mb-6 border-b border-white/10 pb-4 text-seed-accent-green">Apprenticeship Sponsors</h3>
                                <div className="grid grid-cols-1 gap-4">
                                    {[
                                        'Southwest Carpenters (Carpentry)',
                                        'IBEW Local 357 (Electrical)',
                                        'Pipefitters Local 525 (Plumbing)',
                                        'Sheet Metal Local 88 (HVAC)',
                                        'Ironworkers Local 433 (Structural)'
                                    ].map(ra => (
                                        <div key={ra} className="flex items-center gap-3 text-sm font-bold opacity-80">
                                            <CheckCircle size={16} className="text-seed-accent-green" /> {ra}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Operational Capacity */}
                            <div className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 shadow-2xl flex flex-col group">
                                <div className="w-14 h-14 bg-seed-accent-green text-seed-text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    <Activity size={28} />
                                </div>
                                <h3 className="text-xl font-black uppercase tracking-widest mb-6 border-b border-white/10 pb-4 text-seed-accent-green">Operations Partners</h3>
                                <div className="space-y-8">
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">D.C. Dept. of Corrections</h4>
                                        <p className="text-xs opacity-70 leading-relaxed">Nehemiah Project partnership demonstrating PREA-compliant systems design.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Systemic Pilot Partners</h4>
                                        <p className="text-xs opacity-70 leading-relaxed">Collaborating with municipal agencies to test point-of-sentencing models.</p>
                                    </div>
                                </div>
                            </div>

                            {/* CHW Network */}
                            <div className="bg-seed-accent-green text-seed-text-primary p-10 rounded-[3rem] shadow-2xl flex flex-col group">
                                <div className="w-14 h-14 bg-seed-text-primary text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    <Stethoscope size={28} />
                                </div>
                                <h3 className="text-xl font-black uppercase tracking-widest mb-6 border-b border-seed-text-primary/10 pb-4 text-seed-text-primary">CHW Partners</h3>
                                <p className="text-sm font-bold leading-relaxed mb-8">
                                    Comprehensive case management, care coordination, and healthcare navigation.
                                </p>
                                <div className="mt-auto">
                                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2">Projected Valuation</p>
                                    <p className="text-4xl font-serif font-black">$150,000</p>
                                    <p className="text-xs font-bold opacity-60 uppercase">In-kind Match Contribution</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-20 text-center">
                            <p className="text-3xl font-serif font-bold text-white mb-10 leading-relaxed max-w-2xl mx-auto">
                                "We believe lasting change happens when communities work together."
                            </p>
                            <button onClick={() => onOpenContactModal('Partnership Inquiry')} className="bg-white text-seed-text-primary font-black px-12 py-5 rounded-2xl hover:bg-seed-accent-green transition-all text-xl shadow-lg flex items-center gap-3 mx-auto">
                                <Users2 size={24} /> Contact Us About Partnership
                            </button>
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="py-24 lg:py-40 bg-seed-bg dark:bg-seed-bg-dark text-center relative overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                        <h2 className="text-4xl lg:text-7xl font-serif font-bold text-seed-text-primary dark:text-white mb-10 leading-tight">
                            Ready to make a <br /> <span className="text-seed-accent-green">generational impact?</span>
                        </h2>
                        <div className="flex flex-wrap justify-center gap-6 mt-16">
                            <button onClick={() => onOpenContactModal('General Inquiry')} className="bg-seed-text-primary dark:bg-seed-accent-green text-white dark:text-seed-text-primary font-black px-12 py-5 rounded-xl hover:shadow-2xl transition-all text-xl shadow-lg flex items-center gap-3">
                                <Users2 size={24} /> Contact Us
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