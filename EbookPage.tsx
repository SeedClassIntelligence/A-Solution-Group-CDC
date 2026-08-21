
import React, { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Logo } from './Logo';
import { wcsFrameworkPillars } from './frameworks';
import { 
  BookOpen, 
  Download, 
  ChevronRight, 
  ArrowLeft, 
  Bookmark, 
  Share2, 
  Maximize2,
  List,
  Target,
  ShieldCheck,
  Zap,
  Layers,
  // Added missing CheckCircle icon to handle error in line 173
  CheckCircle
} from 'lucide-react';

type EbookPageProps = {
  onNavigateHome: () => void;
  onNavigateToStudio: (prompt?: string) => void;
  onNavigateToSection: (sectionId: string) => void;
  onNavigateToCaseStudies: () => void;
  onNavigateToSystemsImpact: () => void;
  onNavigateToSolutionologist: () => void;
  onNavigateToFrameworks: () => void;
  onNavigateToConsulting: () => void;
  onNavigateToServices: () => void;
  onNavigateToCOIP: () => void;
  onNavigateToFamilies: () => void;
  onNavigateToAbout: () => void;
  onNavigateToPrograms: () => void;
  onNavigateToContact: () => void;
  onNavigateToDonation: () => void;
  userRole?: 'admin' | 'partner' | 'user';
  // Added missing onOpenContactModal prop to handle error in line 219
  onOpenContactModal: (title: string) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

export const EbookPage: React.FC<EbookPageProps> = ({ 
  onNavigateHome, 
  onNavigateToStudio,
  onNavigateToSection,
  onNavigateToCaseStudies,
  onNavigateToSystemsImpact,
  onNavigateToSolutionologist,
  onNavigateToFrameworks,
  onNavigateToConsulting,
  onNavigateToServices,
  onNavigateToCOIP,
  onNavigateToFamilies,
  onNavigateToAbout,
  onNavigateToPrograms,
  onNavigateToContact,
  onNavigateToDonation,
  userRole,
  // Destructured missing onOpenContactModal prop
  onOpenContactModal,
  theme, 
  toggleTheme 
}) => {
  const [activeChapter, setActiveChapter] = useState(1);
  const currentPillar = wcsFrameworkPillars.find(p => p.id === activeChapter) || wcsFrameworkPillars[0];

  const handleDownload = () => {
    alert("Preparing your high-fidelity PDF copy of 'The Whole Community Solution Framework'...");
  };

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
        onNavigateToCOIP={onNavigateToCOIP}
        onNavigateToFamilies={onNavigateToFamilies}
        onNavigateToAbout={onNavigateToAbout}
        onNavigateToPrograms={onNavigateToPrograms}
        onNavigateToContact={onNavigateToContact}
        onNavigateToDonation={onNavigateToDonation}
        userRole={userRole}
        theme={theme} 
        toggleTheme={toggleTheme} 
        currentPage="ebook"
      />

      <main className="flex-grow flex flex-col lg:flex-row max-w-[1920px] mx-auto w-full">
        {/* Left Sidebar: Table of Contents */}
        <aside className="w-full lg:w-80 bg-white dark:bg-seed-surface-dark border-r border-seed-text-primary/10 dark:border-seed-border-dark p-8 flex-shrink-0 lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] overflow-y-auto">
          <div className="mb-10">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-seed-accent-green mb-2">The Framework Ebook</h2>
            <h1 className="text-2xl font-serif font-bold text-seed-text-primary dark:text-white leading-tight">Whole Community Solution</h1>
          </div>

          <nav className="space-y-1">
            <p className="text-[9px] font-black uppercase tracking-widest text-seed-text-primary/40 dark:text-white/40 mb-4 px-2">Table of Contents</p>
            {wcsFrameworkPillars.map((pillar) => (
              <button
                key={pillar.id}
                onClick={() => setActiveChapter(pillar.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-3 group ${activeChapter === pillar.id ? 'bg-seed-text-primary text-white shadow-lg' : 'hover:bg-seed-text-primary/5 text-seed-text-primary/60 dark:text-white/60'}`}
              >
                <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-black ${activeChapter === pillar.id ? 'bg-seed-accent-green text-seed-text-primary' : 'bg-seed-text-primary/10 text-seed-text-primary'}`}>{pillar.id}</span>
                <span className="truncate">{pillar.name}</span>
                {activeChapter === pillar.id && <ChevronRight size={14} className="ml-auto" />}
              </button>
            ))}
          </nav>

          <div className="mt-12 pt-8 border-t border-seed-text-primary/10">
            <button 
              onClick={handleDownload}
              className="w-full flex items-center justify-center gap-2 bg-seed-accent-green text-seed-text-primary font-black py-4 rounded-xl shadow-md hover:scale-[1.02] transition-all text-xs uppercase tracking-widest"
            >
              <Download size={16} /> Download Full Copy
            </button>
          </div>
        </aside>

        {/* Main Content: Reader View */}
        <section className="flex-grow bg-white dark:bg-seed-bg-dark lg:rounded-tl-[3rem] p-6 lg:p-16 xl:p-24 shadow-2xl z-10">
          <div className="max-w-4xl mx-auto">
            {/* Chapter Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-12 border-b border-seed-text-primary/10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-seed-accent-green/10 text-seed-accent-green rounded-full">
                  <span className="text-[10px] font-black uppercase tracking-widest leading-none">Chapter {currentPillar.id}</span>
                </div>
                <h2 className="text-4xl lg:text-6xl font-serif font-bold text-seed-text-primary dark:text-white leading-tight">
                  {currentPillar.name}
                </h2>
              </div>
              <div className="flex gap-2">
                <button className="p-3 rounded-full border border-seed-text-primary/10 dark:border-white/10 hover:bg-seed-bg transition-colors"><Bookmark size={20} /></button>
                <button className="p-3 rounded-full border border-seed-text-primary/10 dark:border-white/10 hover:bg-seed-bg transition-colors"><Share2 size={20} /></button>
              </div>
            </div>

            {/* Chapter Philosophy */}
            <div className="mb-16">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-seed-accent-green mb-6">Core Philosophy</h3>
              <p className="text-2xl lg:text-3xl font-serif italic text-seed-text-primary dark:text-white leading-relaxed opacity-90 border-l-8 border-seed-accent-green pl-10 py-4">
                "{currentPillar.corePhilosophy}"
              </p>
            </div>

            {/* Reader Text Body */}
            <div className="prose prose-lg lg:prose-xl prose-stone dark:prose-invert max-w-none mb-20">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <ShieldCheck className="text-seed-accent-green" /> Architectural Components
              </h3>
              <p className="text-lg leading-relaxed mb-10 text-seed-text-secondary/80 dark:text-white/70">
                This pillar forms a critical segment of the Whole Community Solution. By addressing the following components, we ensure that the intervention is not just a service, but a self-sustaining structural shift.
              </p>
              
              <div className="grid md:grid-cols-1 gap-6 not-prose mb-16">
                {currentPillar.uniqueComponents.map((comp, i) => (
                  <div key={i} className="bg-seed-bg dark:bg-seed-surface-dark p-8 rounded-3xl border border-seed-text-primary/5 flex gap-6 items-start shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 bg-seed-text-primary text-white rounded-xl flex items-center justify-center font-serif font-black flex-shrink-0">{i+1}</div>
                    <p className="font-medium text-seed-text-primary dark:text-white leading-relaxed">{comp}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 mt-20">
                <Target className="text-seed-accent-green" /> Implementation Strategies
              </h3>
              <div className="grid md:grid-cols-2 gap-4 not-prose">
                {currentPillar.implementationStrategies.map((strat, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-2xl bg-seed-text-primary/5 dark:bg-white/5 border border-transparent hover:border-seed-accent-green/20 transition-all">
                    {/* Fixed error in line 173: CheckCircle is now imported */}
                    <CheckCircle size={18} className="text-seed-accent-green flex-shrink-0 mt-1" />
                    <span className="font-bold text-sm leading-tight text-seed-text-secondary dark:text-white/80">{strat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chapter Navigation Footer */}
            <div className="mt-24 pt-12 border-t border-seed-text-primary/10 flex items-center justify-between">
              <button 
                disabled={activeChapter === 1}
                onClick={() => setActiveChapter(prev => prev - 1)}
                className="flex items-center gap-3 font-black text-[10px] uppercase tracking-widest disabled:opacity-30 hover:text-seed-accent-green transition-colors"
              >
                <ArrowLeft size={16} /> Previous Chapter
              </button>
              
              <div className="flex items-center gap-2">
                <Logo size="sm" showText={false} />
              </div>

              <button 
                disabled={activeChapter === wcsFrameworkPillars.length}
                onClick={() => setActiveChapter(prev => prev + 1)}
                className="flex items-center gap-3 font-black text-[10px] uppercase tracking-widest disabled:opacity-30 hover:text-seed-accent-green transition-colors"
              >
                Next Chapter <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer 
        onNavigate={onNavigateToStudio} 
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
        // Fixed error in line 219: onOpenContactModal is now defined in EbookPageProps
        onOpenContactModal={onOpenContactModal} 
        onOpenFeedbackModal={() => {}} 
      />
    </div>
  );
};
