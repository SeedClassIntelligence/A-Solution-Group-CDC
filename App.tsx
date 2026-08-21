
import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Studio } from './Studio';
import { CaseStudiesPage } from './CaseStudiesPage';
import { SystemsImpactPage } from './SystemsImpactPage';
import { SolutionologistPage } from './SolutionologistPage';
import { FrameworksPage } from './FrameworksPage';
import { ConsultingPage } from './ConsultingPage';
import { ServicesPage } from './ServicesPage';
import { COIPPage } from './COIPPage';
import { FamiliesPage } from './FamiliesPage';
import { AboutPage } from './AboutPage';
import { ProgramsPage } from './ProgramsPage';
import { ContactPage } from './ContactPage';
import { DonationPage } from './DonationPage';
import { AdminDashboard } from './AdminDashboard';
import { EbookPage } from './EbookPage';
import { StrategicEcosystemPage } from './StrategicEcosystemPage';
import { ContactModal } from './ContactModal';
import { FeedbackModal } from './FeedbackModal';
import { AssessmentModal } from './AssessmentModal';
import { 
  AlertTriangle, ArrowRight, ShieldAlert, Users, Zap, HeartPulse, DoorOpen, 
  Quote, CheckCircle, Landmark, Rocket, Users2, HardHat, Home, FileText, 
  TrendingUp, BarChart3, Heart, Target, Handshake, Building2, HelpCircle, 
  Sparkles, Scale, GraduationCap, PiggyBank, HeartHandshake, Puzzle, Layers
} from 'lucide-react';

const BetaWarningModal: React.FC<{ isOpen: boolean; onClose: () => void; onConfirm: () => void }> = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 backdrop-blur-md animate-fade-in" onClick={onClose}>
            <div className="bg-white dark:bg-seed-surface-dark max-w-md w-full rounded-2xl p-8 shadow-2xl border border-seed-accent-green/30 relative" onClick={e => e.stopPropagation()}>
                <div className="flex items-center gap-3 text-seed-accent-green mb-5">
                    <div className="p-3 bg-seed-accent-green/10 rounded-full">
                        <Sparkles size={32} />
                    </div>
                    <h2 className="text-xl font-bold font-serif text-seed-text-primary dark:text-seed-text-primary-dark-theme">Vera Studio Beta</h2>
                </div>
                <div className="prose prose-sm dark:prose-invert text-seed-text-secondary dark:text-seed-text-secondary-dark-theme mb-6">
                    <p className="font-bold text-seed-text-primary dark:text-white">Notice to all users:</p>
                    <p>
                        The Vera Studio is currently in <strong>Beta</strong> and is <strong>free to use</strong> during this testing period.
                    </p>
                    <p>
                        Please be aware that this platform is being trained and built exclusively on <strong>proprietary frameworks</strong> developed by A Solution Group CDC.
                    </p>
                    <p className="italic bg-seed-bg dark:bg-seed-bg-dark p-3 rounded-lg border border-seed-text-primary/10 dark:border-seed-border-dark">
                        This serves as a pre-warning: while highly functional for strategy drafting, results are experimental. For expert-verified compliance and implementation, consider our consulting services.
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <button onClick={onConfirm} className="w-full py-4 bg-seed-accent-green text-seed-text-primary font-black rounded-lg hover:bg-seed-accent-green-dark transition shadow-lg uppercase tracking-widest text-xs">
                        Accept & Enter Studio
                    </button>
                    <button onClick={onClose} className="w-full py-3 text-seed-text-secondary/60 hover:text-seed-text-primary dark:text-white/60 dark:hover:text-white font-semibold transition text-sm">
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export const App: React.FC = () => {
  const [page, setPage] = useState<'landing' | 'consulting' | 'services' | 'studio' | 'case-studies' | 'systems-impact' | 'solutionologist' | 'frameworks' | 'coip' | 'families' | 'about' | 'programs' | 'contact' | 'donation' | 'admin' | 'ebook' | 'ecosystem'>('landing');
  const [userRole, setUserRole] = useState<'admin' | 'partner' | 'user'>('admin'); // Simulating logged in admin
  const [initialStudioPrompt, setInitialStudioPrompt] = useState<string | undefined>(undefined);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [isBetaModalOpen, setIsBetaModalOpen] = useState(false);
  const [isAssessmentModalOpen, setIsAssessmentModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const openContactModal = (title: string) => {
    setModalTitle(title);
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  const handleStudioAccessRequest = (prompt?: string) => {
      setInitialStudioPrompt(prompt);
      setIsBetaModalOpen(true);
  };

  const confirmStudioAccess = () => {
      setIsBetaModalOpen(false);
      setPage('studio');
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToLanding = () => {
    setInitialStudioPrompt(undefined);
    setPage('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const navigateToConsulting = () => {
    setPage('consulting');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const navigateToServices = () => {
    setPage('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const navigateToCaseStudies = () => {
    setPage('case-studies');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const navigateToSystemsImpact = () => {
    setPage('systems-impact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const navigateToSolutionologist = () => {
    setPage('solutionologist');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const navigateToFrameworks = () => {
    setPage('frameworks');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const navigateToCOIP = () => {
    setPage('coip');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const navigateToFamilies = () => {
    setPage('families');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const navigateToAbout = () => {
    setPage('about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const navigateToPrograms = () => {
    setPage('programs');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const navigateToContact = () => {
    setPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const navigateToDonation = () => {
    setPage('donation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const navigateToAdmin = () => {
    setPage('admin');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const navigateToEbook = () => {
    setPage('ebook');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const navigateToEcosystem = () => {
    setPage('ecosystem');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToSection = (sectionId: string) => {
    if (page !== 'landing') {
        navigateToLanding();
        setTimeout(() => {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    } else {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navProps = {
    onNavigateHome: navigateToLanding,
    onNavigateToStudio: handleStudioAccessRequest,
    onNavigateToSection: navigateToSection,
    onNavigateToCaseStudies: navigateToCaseStudies,
    onNavigateToSystemsImpact: navigateToSystemsImpact,
    onNavigateToSolutionologist: navigateToSolutionologist,
    onNavigateToFrameworks: navigateToFrameworks,
    onNavigateToConsulting: navigateToConsulting,
    onNavigateToServices: navigateToServices,
    onNavigateToCOIP: navigateToCOIP,
    onNavigateToFamilies: navigateToFamilies,
    onNavigateToAbout: navigateToAbout,
    onNavigateToPrograms: navigateToPrograms,
    onNavigateToContact: navigateToContact,
    onNavigateToDonation: navigateToDonation,
    onNavigateToAdmin: navigateToAdmin,
    onNavigateToEbook: navigateToEbook,
    onNavigateToEcosystem: navigateToEcosystem,
    userRole: userRole,
    theme: theme,
    toggleTheme: toggleTheme,
    onOpenContactModal: openContactModal,
    currentPage: page,
  };
  
  if (page === 'studio') {
    return <Studio onNavigateHome={navigateToLanding} theme={theme} toggleTheme={toggleTheme} initialPrompt={initialStudioPrompt} />;
  }

  if (page === 'admin') {
    return <AdminDashboard userRole={userRole} onNavigateHome={navigateToLanding} theme={theme} toggleTheme={toggleTheme} />;
  }

  if (page === 'ebook') {
    return <EbookPage {...navProps} />;
  }

  if (page === 'ecosystem') {
    return <StrategicEcosystemPage {...navProps} />;
  }

  if (page === 'case-studies') {
    return <CaseStudiesPage {...navProps} />;
  }

  if (page === 'systems-impact') {
    return <SystemsImpactPage {...navProps} />;
  }
  
  if (page === 'solutionologist') {
    return <SolutionologistPage 
      {...navProps}
      onOpenAssessmentModal={() => setIsAssessmentModalOpen(true)}
    />;
  }

  if (page === 'frameworks') {
      return <FrameworksPage {...navProps} />
  }

  if (page === 'coip') {
      return <COIPPage {...navProps} />
  }

  if (page === 'families') {
      return <FamiliesPage {...navProps} />
  }

  if (page === 'about') {
      return <AboutPage {...navProps} />
  }

  if (page === 'programs') {
    return <ProgramsPage {...navProps} />
  }

  if (page === 'contact') {
      return <ContactPage {...navProps} />
  }

  if (page === 'donation') {
    return <DonationPage {...navProps} />
  }

  if (page === 'services') {
    return <ServicesPage {...navProps} onOpenAssessmentModal={() => setIsAssessmentModalOpen(true)} />;
  }

  if (page === 'consulting') {
      return <ConsultingPage 
        {...navProps}
        onOpenAssessmentModal={() => setIsAssessmentModalOpen(true)}
        onOpenBetaModal={() => setIsBetaModalOpen(true)}
      />;
  }

  const industryBlueprints = [
    { title: "Housing Authorities", icon: Building2, desc: "Sovereign communities." },
    { title: "Developers", icon: HardHat, desc: "Equitable development." },
    { title: "Healthcare", icon: HeartPulse, desc: "Holistic care models." },
    { title: "Justice Systems", icon: Scale, desc: "Restorative ecosystems." },
    { title: "Technology", icon: Zap, desc: "Digital sovereignty." },
    { title: "Education", icon: GraduationCap, desc: "Wellness hubs." },
    { title: "Non-Profits", icon: HeartHandshake, desc: "Networked impact." },
    { title: "Government", icon: Landmark, desc: "Co-governance models." },
    { title: "Finance", icon: PiggyBank, desc: "Regenerative capital." },
    { title: "Community Org", icon: Users, desc: "Grassroots resilience." }
  ];

  return (
    <div className="bg-seed-bg dark:bg-seed-bg-dark text-seed-text-secondary dark:text-seed-text-secondary-dark-theme font-sans min-h-screen flex flex-col overflow-x-hidden">
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} title={modalTitle} />
      <AssessmentModal isOpen={isAssessmentModalOpen} onClose={() => setIsAssessmentModalOpen(false)} />
      <FeedbackModal isOpen={isFeedbackModalOpen} onClose={() => setIsFeedbackModalOpen(false)} />
      <BetaWarningModal isOpen={isBetaModalOpen} onClose={() => setIsBetaModalOpen(false)} onConfirm={confirmStudioAccess} />
      
      <Header 
        mode="landing" 
        onNavigate={handleStudioAccessRequest} 
        onNavigateHome={navigateToLanding}
        onNavigateToSection={navigateToSection} 
        onNavigateToCaseStudies={navigateToCaseStudies} 
        onNavigateToSystemsImpact={navigateToSystemsImpact}
        onNavigateToSolutionologist={navigateToSolutionologist} 
        onNavigateToFrameworks={navigateToFrameworks}
        onNavigateToConsulting={navigateToConsulting}
        onNavigateToServices={navigateToServices}
        onNavigateToCOIP={navigateToCOIP}
        onNavigateToFamilies={navigateToFamilies}
        onNavigateToAbout={navigateToAbout}
        onNavigateToPrograms={navigateToPrograms}
        onNavigateToContact={navigateToContact}
        onNavigateToDonation={navigateToDonation}
        onNavigateToEbook={navigateToEbook}
        onNavigateToEcosystem={navigateToEcosystem}
        userRole={userRole}
        theme={theme} 
        toggleTheme={toggleTheme} 
        currentPage={page}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="text-center py-24 lg:py-40 relative overflow-hidden bg-seed-text-primary text-white dark:bg-seed-bg-dark">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10 pointer-events-none">
             <div className="absolute top-10 left-10 w-64 h-64 bg-seed-accent-green rounded-full filter blur-[100px]"></div>
             <div className="absolute bottom-10 right-10 w-96 h-96 bg-seed-accent-green rounded-full filter blur-[120px]"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold tracking-tight mb-8 leading-[1.1] animate-fade-in px-2">
             We are ending intergenerational incarceration — <br className="hidden sm:block"/>
             <span className="text-seed-accent-green">by centering the children America forgot.</span>
            </h1>
            <p className="mt-8 text-lg sm:text-xl lg:text-3xl max-w-4xl mx-auto leading-relaxed font-medium opacity-90 drop-shadow-sm px-4">
              A Solution Group CDC leads the national movement to break the cycle for the millions of children whose lives are shaped by parental incarceration — an estimated 2.6–2.7 million right now, and nearly 5 million who have experienced it at some point in childhood.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
              <button onClick={navigateToFrameworks} className="w-full sm:w-auto bg-seed-accent-green text-seed-text-primary font-bold px-10 py-5 rounded-lg hover:bg-seed-accent-green-dark transition shadow-xl flex items-center justify-center gap-2 text-lg">
                See the Framework
              </button>
              <button onClick={navigateToSolutionologist} className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold px-10 py-5 rounded-lg hover:bg-white/20 transition flex items-center justify-center gap-2 shadow-lg text-lg">
                Join the Movement
              </button>
              <button onClick={navigateToDonation} className="w-full sm:w-auto bg-transparent text-white border-b-2 border-white/40 hover:border-white transition font-bold px-4 py-4 flex items-center justify-center gap-2 text-lg">
                Donate Now <ArrowRight size={22} />
              </button>
            </div>
          </div>
        </section>

        {/* Section 1 — The Crisis */}
        <section id="crisis" className="py-20 lg:py-32 bg-seed-bg dark:bg-seed-bg-dark">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div>
                    <h2 className="text-3xl lg:text-5xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-8 leading-tight">
                        The largest unrecognized childhood trauma in America is parental incarceration.
                    </h2>
                    <div className="space-y-6 text-lg lg:text-xl text-seed-text-secondary dark:text-seed-text-secondary-dark-theme leading-relaxed">
                        <p>In the United States, an estimated 2.6–2.7 million children currently have a parent in jail or prison, and nearly 5 million children — about 1 in 14 — have had a parent incarcerated at some point in childhood.</p>
                        <p className="font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme">Yet there is no national policy, no federal protection category, and no coordinated response.</p>
                        <p>Black children carry a devastating share of this burden: roughly 1 in 9 Black children have had a parent incarcerated, compared to about 1 in 28 Latino children and 1 in 57 white children.</p>
                    </div>
                </div>
                <div className="bg-white dark:bg-seed-surface-dark p-10 rounded-3xl shadow-2xl border border-seed-text-primary/10 dark:border-seed-border-dark relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-50/5 rounded-bl-full"></div>
                    <div className="flex items-center gap-3 text-red-500 mb-8">
                        <ShieldAlert size={32} />
                        <h4 className="font-bold uppercase tracking-[0.2em] text-sm">Systemic Failure</h4>
                    </div>
                    <p className="text-seed-text-secondary dark:text-seed-text-secondary-dark-theme mb-8 text-lg font-medium">These children appear in every system America claims to care about:</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                        {['Foster care', 'Emergency placement', 'Youth homelessness', 'Behavioral health', 'Juvenile justice', 'Special education'].map((item) => (
                            <li key={item} className="flex items-center gap-3 text-base font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme">
                                <span className="w-2.5 h-2.5 bg-red-500 rounded-full flex-shrink-0"></span> {item}
                            </li>
                        ))}
                    </ul>
                    <div className="bg-seed-bg dark:bg-seed-bg-dark p-8 rounded-2xl border-l-8 border-seed-text-primary shadow-inner">
                         <p className="text-2xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme italic leading-relaxed">
                            "ASG CDC names what the nation has refused to confront: Mass incarceration is a child‑welfare crisis."
                         </p>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* Section 2 — Our Movement */}
        <section id="movement" className="py-24 bg-seed-text-primary dark:bg-seed-surface-dark text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl lg:text-6xl font-serif font-bold mb-10 leading-tight">
                We don’t run programs. We build systems.<br/>
                We don’t serve communities. We ARE the community.
            </h2>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto mb-16 opacity-90 leading-relaxed">
                A Solution Group CDC is the national home of a new era in reentry, family stabilization, and child impact prevention.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                {[
                    { text: 'Centers children of incarcerated parents', link: null },
                    { text: 'Rebuilds families and restores parent‑child bonds', link: null },
                    { text: 'Homelessness & Un-sheltered Stability Frameworks', link: 'ecosystem' },
                    { text: 'Neuro-Developmental (IDD) Assessment & Integration', link: 'ecosystem' },
                    { text: 'Holds institutions accountable for generational harm', link: null },
                    { text: 'Trains a new workforce of Solutionologists', link: 'solutionologist' },
                    { text: 'Equips policymakers with real pathways to reform', link: 'frameworks' },
                    { text: 'Demonstrates what community transformation looks like', link: 'case-studies' }
                ].map((point, i) => (
                    <div 
                        key={i} 
                        onClick={() => {
                            if (point.link === 'ecosystem') navigateToEcosystem();
                            if (point.link === 'solutionologist') navigateToSolutionologist();
                            if (point.link === 'frameworks') navigateToFrameworks();
                            if (point.link === 'case-studies') navigateToCaseStudies();
                        }}
                        className={`bg-white/5 border border-white/10 p-8 rounded-2xl flex gap-5 items-start hover:bg-white/10 transition-colors group ${point.link ? 'cursor-pointer border-seed-accent-green/30' : ''}`}
                    >
                        <CheckCircle size={28} className={`${point.link ? 'text-seed-accent-green' : 'text-white/40'} flex-shrink-0 group-hover:scale-110 transition-transform`} />
                        <div className="flex flex-col gap-2">
                           <span className="font-bold text-xl leading-tight">{point.text}</span>
                           {point.link && (
                             <span className="text-[10px] font-black uppercase tracking-widest text-seed-accent-green opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                               View Strategic System <ArrowRight size={10} />
                             </span>
                           )}
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </section>
        
        {/* Section 3 — The Architecture Behind the Movement */}
        <section id="architecture" className="py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-6xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-6">Four frameworks. One national solution.</h2>
              <p className="text-xl text-seed-text-secondary dark:text-seed-text-secondary-dark-theme max-w-4xl mx-auto leading-relaxed">
                A Solution Group CDC is the creator, steward, and national hub of an integrated architecture that finally addresses the full lifecycle of harm.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                {
                    title: 'Whole Community Solution (WCS) Framework',
                    desc: 'The 9‑pillar blueprint for community transformation.',
                    icon: Users
                },
                {
                    title: 'ASG Reentry Demonstration Framework',
                    desc: 'The 5‑phase, 13‑step system that intervenes at sentencing and stabilizes families.',
                    icon: DoorOpen
                },
                {
                    title: 'Whole Community Solution Network (WCSN)',
                    desc: 'The workforce ecosystem of Solutionologists who execute every pillar.',
                    icon: Zap
                },
                {
                    title: '360° Holistic Care Delivery Model',
                    desc: 'The emotional, psychological, and relational healing system that repairs trauma and rebuilds trust.',
                    icon: HeartPulse
                }
              ].map((fw, i) => (
                <div key={i} className="bg-white dark:bg-seed-surface-dark p-10 rounded-3xl border border-seed-text-primary/10 dark:border-seed-border-dark shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all group flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-seed-text-primary/5 dark:bg-seed-accent-green/10 text-seed-accent-green rounded-3xl flex items-center justify-center mb-8 group-hover:bg-seed-accent-green group-hover:text-seed-text-primary transition-all shadow-sm">
                        <fw.icon size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-4 leading-tight">{fw.title}</h3>
                    <p className="text-seed-text-secondary dark:text-seed-text-secondary-dark-theme text-base leading-relaxed">{fw.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-20 text-center">
                 <p className="text-2xl font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-10">No other organization in the nation possesses all four.</p>
                 <button onClick={navigateToFrameworks} className="bg-seed-text-primary dark:bg-seed-accent-green text-white dark:text-seed-text-primary font-bold px-12 py-5 rounded-lg hover:shadow-2xl transition text-xl">
                    Explore the Frameworks
                 </button>
            </div>
          </div>
        </section>

        {/* SECTION — Blueprints of Change */}
        <section id="blueprints" className="py-24 bg-white dark:bg-seed-bg-dark border-y border-seed-text-primary/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-serif font-bold text-seed-text-primary dark:text-white mb-4 uppercase tracking-tight">Blueprints of Change</h2>
                    <p className="text-xl opacity-70 max-w-3xl mx-auto font-medium">Strategic blueprints for industries and entities to implement the architecture of change.</p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 max-w-7xl mx-auto">
                    {industryBlueprints.map((item, i) => (
                        <div key={i} className="group flex flex-col items-center text-center p-8 rounded-3xl bg-seed-bg dark:bg-seed-surface-dark border border-seed-text-primary/5 hover:border-seed-accent-green hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 bg-seed-text-primary/5 dark:bg-seed-accent-green/10 text-seed-accent-green rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-seed-accent-green group-hover:text-seed-text-primary transition-all duration-300">
                                <item.icon size={32} />
                            </div>
                            <h3 className="font-bold text-seed-text-primary dark:text-white text-sm mb-2 uppercase tracking-wide leading-tight">{item.title}</h3>
                            <p className="text-[10px] font-black text-seed-accent-green uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">{item.desc}</p>
                        </div>
                    ))}
                </div>
                
                <div className="mt-16 text-center">
                    <button onClick={navigateToCaseStudies} className="inline-flex items-center gap-3 bg-seed-text-primary dark:bg-seed-accent-green text-white dark:text-seed-text-primary font-black px-10 py-4 rounded-xl hover:shadow-2xl transition-all text-sm uppercase tracking-widest">
                        <Layers size={18} /> View All Industry Blueprints
                    </button>
                </div>
            </div>
        </section>

        {/* Section 4 — Key Performance & Program Highlights */}
        <section id="impact-overview" className="bg-seed-bg dark:bg-seed-bg-dark">
            {/* Key Stats Bar */}
            <div className="bg-seed-text-primary text-white py-6 border-y border-white/10 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 text-center">
                        {[
                            { v: '15+', l: 'YOUTH OSHA-CERTIFIED' },
                            { v: '30+', l: 'JOBS CREATED' },
                            { v: '$285K', l: 'PROPERTY VALUE CREATED' },
                            { v: '2.7M', l: 'CHILDREN SERVED NATIONALLY' }
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col md:flex-row items-center gap-2">
                                <span className="text-3xl font-serif font-black text-seed-accent-green">{stat.v}</span>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">{stat.l}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Program Highlights */}
            <div className="py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-serif font-bold text-seed-text-primary dark:text-white mb-4">Program Highlights</h2>
                        <p className="text-xl opacity-70 font-medium">Strategic pillars of our national intervention architecture.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                        {/* Box 1: YouthBuild */}
                        <div className="bg-white dark:bg-seed-surface-dark p-10 rounded-[2.5rem] shadow-xl border border-seed-text-primary/5 hover:border-seed-accent-green transition-all flex flex-col group">
                            <div className="w-14 h-14 bg-seed-accent-green/10 text-seed-accent-green rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <HardHat size={28} />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-seed-text-primary dark:text-white mb-4">YouthBuild Program</h3>
                            <ul className="space-y-4 text-seed-text-secondary dark:text-seed-text-secondary-dark-theme mb-8 flex-grow">
                                <li className="flex items-start gap-3 font-medium">
                                    <CheckCircle size={18} className="text-seed-accent-green mt-1 flex-shrink-0" />
                                    <span>Construction training + education + supportive services</span>
                                </li>
                                <li className="flex items-start gap-3 font-medium">
                                    <CheckCircle size={18} className="text-seed-accent-green mt-1 flex-shrink-0" />
                                    <span>Serving opportunity youth ages 16-24</span>
                                </li>
                            </ul>
                            <button onClick={navigateToPrograms} className="flex items-center justify-between w-full p-4 rounded-xl bg-seed-bg dark:bg-seed-bg-dark border border-seed-text-primary/5 hover:bg-seed-accent-green hover:text-white transition-all font-bold text-sm uppercase tracking-widest">
                                Learn More <ArrowRight size={18} />
                            </button>
                        </div>

                        {/* Box 4: Strategic Ecosystem (NEW) */}
                        <div className="bg-white dark:bg-seed-surface-dark p-10 rounded-[2.5rem] shadow-xl border-2 border-seed-accent-green/30 hover:border-seed-accent-green transition-all flex flex-col group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-seed-accent-green/10 rounded-bl-full"></div>
                            <div className="w-14 h-14 bg-seed-accent-green/10 text-seed-accent-green rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <Handshake size={28} />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-seed-text-primary dark:text-white mb-4">The Strategic Ecosystem</h3>
                            <ul className="space-y-4 text-seed-text-secondary dark:text-seed-text-secondary-dark-theme mb-8 flex-grow">
                                <li className="flex items-start gap-3 font-medium text-seed-text-primary dark:text-white">
                                    <CheckCircle size={18} className="text-seed-accent-green mt-1 flex-shrink-0" />
                                    <span>Homelessness & Un-sheltered Stability frameworks</span>
                                </li>
                                <li className="flex items-start gap-3 font-medium text-seed-text-primary dark:text-white">
                                    <CheckCircle size={18} className="text-seed-accent-green mt-1 flex-shrink-0" />
                                    <span>Neuro-Developmental (IDD) Assessment integration</span>
                                </li>
                            </ul>
                            <button onClick={navigateToEcosystem} className="flex items-center justify-between w-full p-4 rounded-xl bg-seed-text-primary dark:bg-seed-accent-green text-white dark:text-seed-text-primary transition-all font-bold text-sm uppercase tracking-widest shadow-lg">
                                See The Model <ArrowRight size={18} />
                            </button>
                        </div>

                        {/* Box 2: Pipeline */}
                        <div className="bg-white dark:bg-seed-surface-dark p-10 rounded-[2.5rem] shadow-xl border border-seed-text-primary/5 hover:border-seed-accent-green transition-all flex flex-col group">
                            <div className="w-14 h-14 bg-seed-accent-green/10 text-seed-accent-green rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <Home size={28} />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-seed-text-primary dark:text-white mb-4">Workforce-to-Housing Pipeline</h3>
                            <ul className="space-y-4 text-seed-text-secondary dark:text-seed-text-secondary-dark-theme mb-8 flex-grow">
                                <li className="flex items-start gap-3 font-medium">
                                    <CheckCircle size={18} className="text-seed-accent-green mt-1 flex-shrink-0" />
                                    <span>Integrating construction training with affordable housing production</span>
                                </li>
                                <li className="flex items-start gap-3 font-medium">
                                    <CheckCircle size={18} className="text-seed-accent-green mt-1 flex-shrink-0" />
                                    <span>Community revitalization through youth development</span>
                                </li>
                            </ul>
                            <button onClick={navigateToPrograms} className="flex items-center justify-between w-full p-4 rounded-xl bg-seed-bg dark:bg-seed-bg-dark border border-seed-text-primary/5 hover:bg-seed-accent-green hover:text-white transition-all font-bold text-sm uppercase tracking-widest">
                                Learn More <ArrowRight size={18} />
                            </button>
                        </div>

                        {/* Box 3: COIP */}
                        <div className="bg-white dark:bg-seed-surface-dark p-10 rounded-[2.5rem] shadow-xl border border-seed-text-primary/5 hover:border-seed-accent-green transition-all flex flex-col group">
                            <div className="w-14 h-14 bg-seed-accent-green/10 text-seed-accent-green rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <FileText size={28} />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-seed-text-primary dark:text-white mb-4">COIP Framework</h3>
                            <ul className="space-y-4 text-seed-text-secondary dark:text-seed-text-secondary-dark-theme mb-8 flex-grow">
                                <li className="flex items-start gap-3 font-medium">
                                    <CheckCircle size={18} className="text-seed-accent-green mt-1 flex-shrink-0" />
                                    <span>National policy architecture interrupting cycles</span>
                                </li>
                                <li className="flex items-start gap-3 font-medium">
                                    <CheckCircle size={18} className="text-seed-accent-green mt-1 flex-shrink-0" />
                                    <span>Point-of-sentencing intervention</span>
                                </li>
                            </ul>
                            <button onClick={navigateToCOIP} className="flex items-center justify-between w-full p-4 rounded-xl bg-seed-bg dark:bg-seed-bg-dark border border-seed-text-primary/5 hover:bg-seed-accent-green hover:text-white transition-all font-bold text-sm uppercase tracking-widest">
                                Learn More <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Impact Snapshot */}
                    <div className="max-w-4xl mx-auto bg-seed-text-primary text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-seed-accent-green opacity-10 rounded-bl-full"></div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-serif font-bold mb-4 flex items-center gap-3">
                                <TrendingUp className="text-seed-accent-green" /> Impact Snapshot
                            </h3>
                            <p className="text-lg opacity-80 font-medium leading-relaxed">
                                From local pilot success in 2020 to a national multi-jurisdiction architecture in 2026, we are demonstrating measurable trajectory.
                            </p>
                        </div>
                        <button onClick={navigateToSystemsImpact} className="bg-seed-accent-green text-seed-text-primary font-black px-10 py-5 rounded-xl hover:bg-white transition-all text-lg shadow-lg whitespace-nowrap flex items-center gap-3">
                            <BarChart3 size={22} /> See Full Impact Report
                        </button>
                    </div>
                </div>
            </div>

            {/* Partners Bar */}
            <div className="py-12 bg-white dark:bg-seed-surface-dark/50 border-t border-seed-text-primary/5">
                <div className="container mx-auto px-4">
                    <p className="text-center text-[10px] font-black uppercase tracking-[0.4em] opacity-40 mb-10">Trusted by leading organizations committed to youth opportunity</p>
                    <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                        {['KG Development', 'Advent UMC', 'Workforce Connections'].map(p => (
                            <span key={p} className="font-serif font-bold text-lg md:text-xl tracking-tight text-seed-text-primary dark:text-white">{p}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Section 5 — For Policymakers, Funders & Partners */}
        <section id="partners" className="py-24 lg:py-32 bg-white dark:bg-seed-surface-dark">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl lg:text-6xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-6">A scalable, federally aligned model ready for adoption.</h2>
                </div>
                
                <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                     {/* Policymakers */}
                    <div className="flex flex-col p-8 rounded-[3rem] bg-seed-bg dark:bg-seed-bg-dark/40 border-2 border-transparent hover:border-seed-accent-green/20 transition-all shadow-lg hover:shadow-2xl">
                         <div className="flex items-center gap-6 mb-8">
                            <Landmark size={48} className="text-seed-accent-green flex-shrink-0" />
                            <h3 className="text-2xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme">For Policymakers</h3>
                        </div>
                        <ul className="space-y-4 flex-grow">
                            {['Statewide implementation strategies', 'Child Impact Assessments', 'Reentry and sentencing reform pathways', 'Homelessness prevention cost-benefits'].map((item) => (
                                <li key={item} className="flex gap-4 text-base font-medium text-seed-text-secondary dark:text-seed-text-secondary-dark-theme">
                                    <ArrowRight size={20} className="text-seed-accent-green flex-shrink-0 mt-1" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Foundations */}
                    <div className="flex flex-col p-8 rounded-[3rem] bg-seed-bg dark:bg-seed-bg-dark/40 border-2 border-transparent hover:border-seed-accent-green/20 transition-all shadow-lg hover:shadow-2xl">
                         <div className="flex items-center gap-6 mb-8">
                            <Rocket size={48} className="text-seed-accent-green flex-shrink-0" />
                            <h3 className="text-2xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme">For Foundations</h3>
                        </div>
                        <ul className="space-y-4 flex-grow">
                            {['Nation’s first child‑centered reentry model', 'IDD integration & neuro-stability outcomes', 'Multi‑system ROI across 7 domains', 'Scalable ecosystem replication'].map((item) => (
                                <li key={item} className="flex gap-4 text-base font-medium text-seed-text-secondary dark:text-seed-text-secondary-dark-theme">
                                    <ArrowRight size={20} className="text-seed-accent-green flex-shrink-0 mt-1" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Community Partners */}
                    <div className="flex flex-col p-8 rounded-[3rem] bg-seed-bg dark:bg-seed-bg-dark/40 border-2 border-transparent hover:border-seed-accent-green/20 transition-all shadow-lg hover:shadow-2xl">
                         <div className="flex items-center gap-6 mb-8">
                            <Users2 size={48} className="text-seed-accent-green flex-shrink-0" />
                            <h3 className="text-2xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme">For Partners</h3>
                        </div>
                        <ul className="space-y-4 flex-grow">
                            {['Workforce training for Solutionologists', 'SDOH & IDD transition facilitation', 'Technical assistance for developers', 'Joint Venture (JV) Certification'].map((item) => (
                                <li key={item} className="flex gap-4 text-base font-medium text-seed-text-secondary dark:text-seed-text-secondary-dark-theme">
                                    <ArrowRight size={20} className="text-seed-accent-green flex-shrink-0 mt-1" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mt-20 text-center">
                    <button onClick={() => openContactModal('Schedule a Strategy Briefing')} className="bg-seed-accent-green text-seed-text-primary font-bold px-12 py-5 rounded-lg hover:shadow-2xl transition text-xl shadow-lg">
                        Schedule a Strategy Briefing
                    </button>
                </div>
            </div>
        </section>

        {/* Section 6 — How We Break the Cycle */}
        <section id="co-design" className="py-24 lg:py-32 bg-seed-text-primary dark:bg-seed-surface-dark text-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <h2 className="text-4xl lg:text-6xl font-serif font-bold mb-10 leading-tight">We put power back in the hands of parents and children.</h2>
                        <div className="space-y-8 text-xl lg:text-2xl opacity-90 leading-relaxed font-medium">
                            <p>The first month of ASG’s reentry model is revolutionary: <strong>Families co‑design the remaining eleven months.</strong></p>
                            <p>No more top‑down programs. No more deficit‑based assumptions. No more treating families as clients.</p>
                            <div className="flex flex-col gap-6 pt-6">
                                <span className="flex items-center gap-4 font-bold text-seed-accent-green text-2xl"><CheckCircle size={32} /> This is healing.</span>
                                <span className="flex items-center gap-4 font-bold text-seed-accent-green text-2xl"><CheckCircle size={32} /> This is empowerment.</span>
                                <span className="flex items-center gap-4 font-bold text-seed-accent-green text-2xl"><CheckCircle size={32} /> This is transformation.</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-xl p-12 rounded-[3rem] border border-white/20 shadow-2xl relative">
                        <div className="absolute -top-6 -left-6 bg-seed-accent-green text-seed-text-primary font-bold px-6 py-2 rounded-full shadow-lg">CO-DESIGN MODEL</div>
                        <h4 className="text-3xl font-serif font-bold mb-10">How Co‑Design Works</h4>
                        <div className="space-y-10">
                            {[
                                { t: 'Assessment', d: 'Comprehensive SDOH mapping including neuro-developmental (IDD) diagnostic focus on unrecorded generational trauma.' },
                                { t: 'Planning', d: 'Collaborative drafting of the 12-month transformation roadmap.' },
                                { t: 'Execution', d: 'Solutionologist-supported activation of all nine pillars.' }
                            ].map((step, idx) => (
                                <div key={idx} className="flex gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-seed-accent-green text-seed-text-primary flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-lg">{idx+1}</div>
                                    <div>
                                        <h5 className="font-bold text-2xl mb-2">{step.t}</h5>
                                        <p className="text-lg opacity-80 leading-relaxed font-medium">{step.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button onClick={navigateToSolutionologist} className="w-full mt-12 bg-white text-seed-text-primary font-bold py-5 rounded-xl hover:bg-seed-accent-green transition text-xl shadow-xl">
                            Learn More About Co-Design
                        </button>
                    </div>
                </div>
            </div>
        </section>

        {/* Section 7 — How You Can Get Involved */}
        <section id="cta" className="py-24 lg:py-40 bg-seed-bg dark:bg-seed-bg-dark relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-seed-accent-green/5 rounded-full filter blur-[120px] pointer-events-none"></div>
            <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                <div className="text-center mb-20">
                    <h2 className="text-4xl lg:text-6xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-6 uppercase tracking-tight">
                        HOW YOU CAN GET INVOLVED
                    </h2>
                    <p className="text-xl lg:text-2xl text-seed-text-secondary dark:text-seed-text-secondary-dark-theme max-w-3xl mx-auto leading-relaxed font-medium">
                        Break intergenerational incarceration cycles. Create economic opportunity. Support families in crisis.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* COLUMN 1: FAMILIES IN CRISIS */}
                    <div className="bg-white dark:bg-seed-surface-dark p-8 rounded-[2.5rem] border border-seed-text-primary/5 flex flex-col shadow-xl group hover:border-seed-accent-green transition-all duration-300">
                        <div className="w-14 h-14 bg-red-100 dark:bg-red-900/20 text-red-500 rounded-2xl flex items-center justify-center mb-6">
                            <Heart size={28} />
                        </div>
                        <h4 className="text-2xl font-serif font-bold text-seed-text-primary dark:text-white mb-4">Get Support Now</h4>
                        <div className="text-sm text-seed-text-secondary dark:text-seed-text-secondary-dark-theme mb-8 space-y-2 flex-grow font-medium">
                            <p>Someone you love just sentenced?</p>
                            <p>Facing housing loss?</p>
                            <p>Children struggling?</p>
                            <div className="pt-4 font-bold text-seed-text-primary dark:text-white">
                                <p>Immediate help available.</p>
                                <p>Zero cost to families.</p>
                            </div>
                        </div>
                        <button onClick={navigateToFamilies} className="flex items-center justify-between w-full p-4 rounded-xl bg-seed-bg dark:bg-seed-bg-dark border border-seed-text-primary/5 hover:bg-red-500 hover:text-white transition-all font-bold text-xs uppercase tracking-widest">
                            Get Family Support <ArrowRight size={16} />
                        </button>
                    </div>

                    {/* COLUMN 2: DONATE */}
                    <div className="bg-white dark:bg-seed-surface-dark p-8 rounded-[2.5rem] border border-seed-text-primary/5 flex flex-col shadow-xl group hover:border-seed-accent-green transition-all duration-300">
                        <div className="w-14 h-14 bg-seed-accent-green/10 text-seed-accent-green rounded-2xl flex items-center justify-center mb-6">
                            <Target size={28} />
                        </div>
                        <h4 className="text-2xl font-serif font-bold text-seed-text-primary dark:text-white mb-4">Fund Second Chances</h4>
                        <div className="text-sm text-seed-text-secondary dark:text-seed-text-secondary-dark-theme mb-8 space-y-2 flex-grow font-medium">
                            <p><span className="font-bold text-seed-text-primary dark:text-white">$100</span> = OSHA certification</p>
                            <p><span className="font-bold text-seed-text-primary dark:text-white">$500</span> = GED preparation</p>
                            <p><span className="font-bold text-seed-text-primary dark:text-white">$1,000</span> = Monthly family support</p>
                            <p className="pt-4 italic">Every dollar breaks cycles.</p>
                        </div>
                        <button onClick={navigateToDonation} className="flex items-center justify-between w-full p-4 rounded-xl bg-seed-bg dark:bg-seed-bg-dark border border-seed-text-primary/5 hover:bg-seed-accent-green hover:text-white transition-all font-bold text-xs uppercase tracking-widest">
                            Donate Now <ArrowRight size={16} />
                        </button>
                    </div>

                    {/* COLUMN 3: VOLUNTEER */}
                    <div className="bg-white dark:bg-seed-surface-dark p-8 rounded-[2.5rem] border border-seed-text-primary/5 flex flex-col shadow-xl group hover:border-seed-accent-green transition-all duration-300">
                        <div className="w-14 h-14 bg-seed-text-primary/5 dark:bg-seed-accent-green/10 text-seed-text-primary dark:text-seed-accent-green rounded-2xl flex items-center justify-center mb-6">
                            <Handshake size={28} />
                        </div>
                        <h4 className="text-2xl font-serif font-bold text-seed-text-primary dark:text-white mb-4">Share Your Skills</h4>
                        <div className="text-sm text-seed-text-secondary dark:text-seed-text-secondary-dark-theme mb-8 space-y-2 flex-grow font-medium">
                            <p>Construction mentors</p>
                            <p>Education tutors</p>
                            <p>Career navigators</p>
                            <p className="pt-4 font-bold text-seed-text-primary dark:text-white">Your expertise changes lives.</p>
                        </div>
                        <button onClick={() => openContactModal('Volunteer Inquiry')} className="flex items-center justify-between w-full p-4 rounded-xl bg-seed-bg dark:bg-seed-bg-dark border border-seed-text-primary/5 hover:bg-seed-text-primary hover:text-white transition-all font-bold text-xs uppercase tracking-widest">
                            Volunteer <ArrowRight size={16} />
                        </button>
                    </div>

                    {/* COLUMN 4: PARTNER */}
                    <div className="bg-white dark:bg-seed-surface-dark p-8 rounded-[2.5rem] border border-seed-text-primary/5 flex flex-col shadow-xl group hover:border-seed-accent-green transition-all duration-300">
                        <div className="w-14 h-14 bg-seed-text-primary/5 dark:bg-seed-accent-green/10 text-seed-text-primary dark:text-seed-accent-green rounded-2xl flex items-center justify-center mb-6">
                            <Building2 size={28} />
                        </div>
                        <h4 className="text-2xl font-serif font-bold text-seed-text-primary dark:text-white mb-4">Collaborate</h4>
                        <div className="text-sm text-seed-text-secondary dark:text-seed-text-secondary-dark-theme mb-8 space-y-2 flex-grow font-medium">
                            <p>Hire graduates</p>
                            <p>Host work sites</p>
                            <p>Fund programs</p>
                            <p className="pt-4 font-bold text-seed-text-primary dark:text-white">Your business creates opportunity.</p>
                        </div>
                        <button onClick={navigateToContact} className="flex items-center justify-between w-full p-4 rounded-xl bg-seed-bg dark:bg-seed-bg-dark border border-seed-text-primary/5 hover:bg-seed-text-primary hover:text-white transition-all font-bold text-xs uppercase tracking-widest">
                            Partner with Us <ArrowRight size={16} />
                        </button>
                    </div>
                </div>

                <div className="mt-24 text-center">
                    <p className="text-3xl lg:text-5xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme italic">
                        The cycle ends here. <br className="md:hidden" /> The future begins.
                    </p>
                </div>
            </div>
        </section>

      </main>

      <Footer 
        onNavigate={handleStudioAccessRequest} 
        onNavigateToSection={navigateToSection} 
        onNavigateToConsulting={navigateToConsulting}
        onNavigateToServices={navigateToServices}
        onNavigateToSolutionologist={navigateToSolutionologist}
        onNavigateToCOIP={navigateToCOIP}
        onNavigateToSystemsImpact={navigateToSystemsImpact}
        onNavigateToCaseStudies={navigateToCaseStudies}
        onNavigateToFamilies={navigateToFamilies}
        onNavigateToAbout={navigateToAbout}
        onNavigateToPrograms={navigateToPrograms}
        onNavigateToContact={navigateToContact}
        onNavigateToDonation={navigateToDonation}
        onNavigateToAdmin={navigateToAdmin}
        onOpenContactModal={openContactModal} 
        onOpenFeedbackModal={() => setIsFeedbackModalOpen(true)} 
      />
    </div>
  );
};
