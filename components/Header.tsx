
import React, { useState } from 'react';
import { Sun, Moon, ChevronDown, Heart, Menu, X, ArrowUpRight, ArrowLeft, ShieldCheck, Users2, Trophy, Handshake, FileSearch, ArrowRight, BookOpen, Star } from 'lucide-react';
import { Logo } from './Logo';

type HeaderProps = {
  mode: 'landing' | 'studio';
  onNavigate?: (prompt?: string) => void;
  onNavigateHome?: () => void;
  onNavigateToSection?: (sectionId: string) => void;
  onNavigateToCaseStudies?: () => void;
  onNavigateToSystemsImpact?: () => void;
  onNavigateToSolutionologist?: () => void;
  onNavigateToFrameworks?: () => void;
  onNavigateToConsulting?: () => void;
  onNavigateToServices?: () => void;
  onNavigateToCOIP?: () => void;
  onNavigateToFamilies?: () => void;
  onNavigateToAbout?: () => void;
  onNavigateToPrograms?: () => void;
  onNavigateToContact?: () => void;
  onNavigateToDonation?: () => void;
  onNavigateToAdmin?: () => void;
  onNavigateToEbook?: () => void;
  onNavigateToEcosystem?: () => void;
  userRole?: 'admin' | 'partner' | 'user';
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  currentPage: string;
  onOpenIntegrations?: () => void;
  onOpenFeedback?: () => void;
}

const NavItem = ({ onClick, children, active = false }: React.PropsWithChildren<{ onClick?: () => void, active?: boolean }>) => (
    <button 
      onClick={onClick} 
      className={`hover:text-seed-text-primary dark:hover:text-seed-accent-green transition relative group py-4 whitespace-nowrap text-[11px] font-black uppercase tracking-[0.25em] ${active ? 'text-seed-text-primary dark:text-seed-accent-green' : 'text-seed-text-secondary dark:text-seed-text-secondary-dark-theme'}`}
    >
      {children}
      <span className={`absolute bottom-0 left-0 h-[3px] bg-seed-text-primary dark:bg-seed-accent-green transition-all ${active ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
    </button>
  );

export const Header: React.FC<HeaderProps> = ({ 
  mode, 
  onNavigate, 
  onNavigateHome, 
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
  onNavigateToAdmin,
  onNavigateToEbook,
  onNavigateToEcosystem,
  userRole,
  theme, 
  toggleTheme,
  currentPage,
  onOpenIntegrations,
  onOpenFeedback
}) => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleAboutSubNavigation = (sectionId?: string) => {
    onNavigateToAbout?.();
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsAboutOpen(false);
  };

  if (mode === 'studio') {
    return (
      <header className="sticky top-0 z-50 bg-seed-bg dark:bg-seed-surface-dark border-b border-seed-text-primary/10 dark:border-seed-border-dark flex flex-col transition-colors duration-300 shadow-sm">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
            <button 
              onClick={onNavigateHome}
              className="flex items-center gap-3 group transition-all duration-300"
            >
                <div className="w-9 h-9 border border-seed-text-primary/30 dark:border-seed-accent-green/30 rounded-sm flex items-center justify-center bg-seed-text-primary/5 dark:bg-seed-accent-green/5">
                    <span className="text-seed-text-primary dark:text-seed-accent-green font-serif font-black text-lg mt-0.5">V</span>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[12px] font-black text-seed-text-primary dark:text-seed-accent-green uppercase tracking-[0.15em]">
                    Vera Studio
                  </span>
                  <span className="text-[9px] font-bold text-seed-text-secondary/60 dark:text-white/40 uppercase tracking-[0.1em]">
                    Strategic Engine
                  </span>
                </div>
            </button>

            <div className="flex items-center gap-6">
                <button 
                    onClick={onOpenFeedback}
                    className="flex items-center gap-2 text-seed-text-secondary/60 hover:text-seed-text-primary dark:text-white/40 dark:hover:text-seed-accent-green font-black text-[10px] uppercase tracking-[0.2em] transition-all"
                >
                    <Star size={14} /> Feedback
                </button>

                <div className="h-4 w-px bg-seed-text-primary/10 dark:bg-white/10"></div>

                <button 
                    onClick={onOpenIntegrations}
                    className="flex items-center gap-2 text-seed-text-secondary/60 hover:text-seed-text-primary dark:text-white/40 dark:hover:text-seed-accent-green font-black text-[10px] uppercase tracking-[0.2em] transition-all"
                >
                    <ShieldCheck size={14} /> Integrations
                </button>

                <div className="h-4 w-px bg-seed-text-primary/10 dark:bg-white/10"></div>

                <button 
                    onClick={onNavigateHome} 
                    className="flex items-center gap-2 text-seed-text-secondary/60 hover:text-seed-text-primary dark:text-white/40 dark:hover:text-seed-accent-green font-black text-[10px] uppercase tracking-[0.2em] transition-all"
                >
                    <ArrowLeft size={14} /> Exit to Site
                </button>

                <div className="h-4 w-px bg-seed-text-primary/10 dark:bg-white/10"></div>

                <button 
                    onClick={toggleTheme} 
                    className="p-2 rounded-full text-seed-text-secondary dark:text-seed-text-secondary-dark-theme hover:bg-seed-text-primary/10 dark:hover:bg-seed-accent-green/10 transition" 
                    aria-label="Toggle theme"
                >
                    {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                </button>
            </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 bg-seed-bg/95 dark:bg-seed-surface-dark/95 backdrop-blur-md shadow-sm border-b border-seed-text-primary/10 dark:border-seed-border-dark flex flex-col transition-colors duration-300">
      <div className="border-b border-seed-text-primary/5 dark:border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <button 
              onClick={onNavigateHome}
              className="flex-shrink-0 group transition-all"
              aria-label="A Solution Group CDC Home"
            >
              <Logo className="group-hover:opacity-80 transition-opacity hidden sm:flex" size="md" />
              <Logo className="group-hover:opacity-80 transition-opacity sm:hidden" size="sm" />
            </button>

            <div className="flex items-center gap-4">
                <button 
                    onClick={onNavigateToEbook} 
                    className={`hidden lg:flex items-center gap-2 font-black text-[10px] uppercase tracking-[0.2em] px-4 py-2 rounded-lg transition border border-seed-accent-green/30 text-seed-accent-green bg-seed-accent-green/5 hover:bg-seed-accent-green hover:text-seed-text-primary ${currentPage === 'ebook' ? 'bg-seed-accent-green text-seed-text-primary' : ''}`}
                >
                    <BookOpen size={14} /> The Ebook
                </button>

                <button 
                    onClick={onNavigateToEcosystem} 
                    className={`hidden lg:flex items-center gap-1 font-black text-[10px] uppercase tracking-[0.2em] transition-opacity ${currentPage === 'ecosystem' ? 'text-seed-accent-green' : 'text-seed-text-primary dark:text-white hover:opacity-70'}`}
                >
                    Strategic Ecosystem <ArrowUpRight size={10} className="opacity-50" />
                </button>

                <div className="h-4 w-px bg-seed-text-primary/10 dark:bg-white/10 hidden lg:block mx-1"></div>

                <button 
                    onClick={() => onNavigateToDonation?.()} 
                    className={`hidden md:flex items-center gap-2 font-black text-[10px] uppercase tracking-[0.2em] px-3 py-2 rounded-lg transition border border-transparent ${currentPage === 'donation' ? 'bg-seed-accent-green/10 text-seed-accent-green border-seed-accent-green/20' : 'text-seed-text-primary dark:text-seed-accent-green hover:bg-seed-text-primary/5 dark:hover:bg-seed-accent-green/10'}`}
                >
                    <Heart size={14} /> Donate
                </button>
                
                <button 
                    onClick={() => onNavigate?.()} 
                    className="hidden lg:flex bg-seed-text-primary dark:bg-seed-accent-green text-white dark:text-seed-text-primary font-black px-6 py-2.5 rounded-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-[10px] uppercase tracking-[0.2em] items-center gap-2 shadow-md"
                >
                    VERA STUDIO BETA
                </button>

                <button 
                    onClick={toggleTheme} 
                    className="p-2 rounded-full text-seed-text-secondary dark:text-seed-text-secondary-dark-theme hover:bg-seed-text-primary/10 dark:hover:bg-seed-accent-green/10 transition" 
                    aria-label="Toggle theme"
                >
                    {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                </button>

                <button 
                  className="lg:hidden p-2 text-seed-text-primary dark:text-seed-text-primary-dark-theme"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </div>
      </div>

      <div className="hidden lg:block bg-white/40 dark:bg-black/20">
        <div className="container mx-auto px-8 py-0">
          <nav className="flex items-center justify-center gap-12">
              <NavItem onClick={onNavigateHome} active={currentPage === 'landing'}>Home</NavItem>
              <NavItem onClick={onNavigateToFrameworks} active={currentPage === 'frameworks'}>Frameworks</NavItem>
              <NavItem onClick={onNavigateToSystemsImpact} active={currentPage === 'systems-impact'}>Impact</NavItem>
              <NavItem onClick={onNavigateToServices} active={currentPage === 'services'}>Services</NavItem>
              <NavItem onClick={onNavigateToSolutionologist} active={currentPage === 'solutionologist'}>Solutionologists</NavItem>
              <NavItem onClick={onNavigateToCOIP} active={currentPage === 'coip'}>Policy</NavItem>
              <NavItem onClick={onNavigateToFamilies} active={currentPage === 'families'}>Families</NavItem>
              <NavItem onClick={onNavigateToPrograms} active={currentPage === 'programs'}>Programs</NavItem>
              
              <div 
                className="relative group"
                onMouseEnter={() => setIsAboutOpen(true)}
                onMouseLeave={() => setIsAboutOpen(false)}
              >
                <button className={`flex items-center gap-2 py-4 transition whitespace-nowrap text-[11px] font-black uppercase tracking-[0.25em] ${['about', 'case-studies', 'contact'].includes(currentPage) ? 'text-seed-text-primary dark:text-seed-accent-green' : 'text-seed-text-secondary dark:text-seed-text-secondary-dark-theme hover:text-seed-text-primary dark:hover:text-seed-accent-green'}`}>
                  About <ChevronDown size={12} className={`transition-transform duration-300 ${isAboutOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[36rem] bg-white dark:bg-seed-surface-dark shadow-2xl rounded-2xl p-6 border border-seed-text-primary/10 dark:border-seed-border-dark transition-all duration-300 origin-top z-[60] ${isAboutOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'}`}>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                    <div className="col-span-2 mb-4">
                      <h4 className="text-[10px] font-black text-seed-accent-green uppercase tracking-widest border-b border-seed-text-primary/5 pb-2 mb-4">The Movement</h4>
                    </div>
                    
                    <button onClick={() => handleAboutSubNavigation()} className={`w-full text-left p-3 rounded-xl transition-colors flex gap-4 items-start group/item ${currentPage === 'about' ? 'bg-seed-accent-green/5' : 'hover:bg-seed-bg dark:hover:bg-seed-bg-dark'}`}>
                      <div className={`p-2 rounded-lg transition-colors ${currentPage === 'about' ? 'bg-seed-accent-green text-seed-text-primary' : 'bg-seed-accent-green/10 text-seed-accent-green group-hover/item:bg-seed-accent-green group-hover/item:text-seed-text-primary'}`}>
                        <ShieldCheck size={18} />
                      </div>
                      <div className="flex flex-col">
                        <span className={`font-bold text-sm ${currentPage === 'about' ? 'text-seed-accent-green' : 'text-seed-text-primary dark:text-seed-text-primary-dark-theme'}`}>Who We Are</span>
                        <span className="text-[10px] opacity-60 normal-case font-medium">History & Mission</span>
                      </div>
                    </button>

                    <button onClick={() => handleAboutSubNavigation('founder')} className="w-full text-left p-3 rounded-xl hover:bg-seed-bg dark:hover:bg-seed-bg-dark transition-colors flex gap-4 items-start group/item">
                      <div className="p-2 bg-seed-accent-green/10 text-seed-accent-green rounded-lg group-hover/item:bg-seed-accent-green group-hover/item:text-seed-text-primary transition-colors">
                        <Trophy size={18} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-seed-text-primary dark:text-seed-text-primary-dark-theme font-bold text-sm">Founder's Story</span>
                        <span className="text-[10px] opacity-60 normal-case font-medium">Lived Experience Catalyst</span>
                      </div>
                    </button>

                    <button onClick={() => { onNavigateToCaseStudies?.(); setIsAboutOpen(false); }} className={`w-full text-left p-3 rounded-xl transition-colors flex gap-4 items-start group/item ${currentPage === 'case-studies' ? 'bg-seed-accent-green/5' : 'hover:bg-seed-bg dark:hover:bg-seed-bg-dark'}`}>
                      <div className={`p-2 rounded-lg transition-colors ${currentPage === 'case-studies' ? 'bg-seed-accent-green text-seed-text-primary' : 'bg-seed-accent-green/10 text-seed-accent-green group-hover/item:bg-seed-accent-green group-hover/item:text-seed-text-primary'}`}>
                        <FileSearch size={18} />
                      </div>
                      <div className="flex flex-col">
                        <span className={`font-bold text-sm ${currentPage === 'case-studies' ? 'text-seed-accent-green' : 'text-seed-text-primary dark:text-seed-text-primary-dark-theme'}`}>Case Studies</span>
                        <span className="text-[10px] opacity-60 normal-case font-medium">Industry Blueprints</span>
                      </div>
                    </button>

                    <button onClick={() => handleAboutSubNavigation('board')} className="w-full text-left p-3 rounded-xl hover:bg-seed-bg dark:hover:bg-seed-bg-dark transition-colors flex gap-4 items-start group/item">
                      <div className="p-2 bg-seed-accent-green/10 text-seed-accent-green rounded-lg group-hover/item:bg-seed-accent-green group-hover/item:text-seed-text-primary transition-colors">
                        <Users2 size={18} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-seed-text-primary dark:text-seed-text-primary-dark-theme font-bold text-sm">Leadership & Board</span>
                        <span className="text-[10px] opacity-60 normal-case font-medium">Governance & Stewardship</span>
                      </div>
                    </button>

                    <button onClick={() => { onNavigateToEcosystem?.(); setIsAboutOpen(false); }} className={`w-full text-left p-3 rounded-xl transition-colors flex gap-4 items-start group/item ${currentPage === 'ecosystem' ? 'bg-seed-accent-green/5' : 'hover:bg-seed-bg dark:hover:bg-seed-bg-dark'}`}>
                      <div className={`p-2 rounded-lg transition-colors ${currentPage === 'ecosystem' ? 'bg-seed-accent-green text-seed-text-primary' : 'bg-seed-accent-green/10 text-seed-accent-green group-hover/item:bg-seed-accent-green group-hover/item:text-seed-text-primary'}`}>
                        <Handshake size={18} />
                      </div>
                      <div className="flex flex-col">
                        <span className={`font-bold text-sm ${currentPage === 'ecosystem' ? 'text-seed-accent-green' : 'text-seed-text-primary dark:text-seed-text-primary-dark-theme'}`}>Strategic Ecosystem</span>
                        <span className="text-[10px] opacity-60 normal-case font-medium">Partnership Model</span>
                      </div>
                    </button>

                    <div className="col-span-2 my-2 border-t border-seed-text-primary/5"></div>

                    <button onClick={() => { onNavigateToConsulting?.(); setIsAboutOpen(false); }} className={`w-full text-left p-3 rounded-xl transition-colors flex gap-4 items-start group/item ${currentPage === 'consulting' ? 'bg-seed-accent-green/5' : 'hover:bg-seed-bg dark:hover:bg-seed-bg-dark'}`}>
                      <div className={`p-2 rounded-lg transition-colors ${currentPage === 'consulting' ? 'bg-seed-accent-green text-seed-text-primary' : 'bg-seed-text-primary text-white dark:bg-seed-accent-green dark:text-seed-text-primary'}`}>
                        <ArrowUpRight size={18} />
                      </div>
                      <div className="flex flex-col">
                        <span className={`font-bold text-sm ${currentPage === 'consulting' ? 'text-seed-accent-green' : 'text-seed-text-primary dark:text-seed-text-primary-dark-theme'}`}>Consulting Services</span>
                        <span className="text-[10px] opacity-60 normal-case font-medium">Institutional Implementation</span>
                      </div>
                    </button>

                    <button onClick={() => { onNavigateToContact?.(); setIsAboutOpen(false); }} className={`w-full text-left p-3 rounded-xl transition-colors flex gap-4 items-start group/item ${currentPage === 'contact' ? 'bg-seed-accent-green/5' : 'hover:bg-seed-bg dark:hover:bg-seed-bg-dark'}`}>
                      <div className={`p-2 rounded-lg transition-colors ${currentPage === 'contact' ? 'bg-seed-accent-green text-seed-text-primary' : 'bg-seed-text-primary text-white dark:bg-seed-accent-green dark:text-seed-text-primary'}`}>
                        <ArrowRight size={18} />
                      </div>
                      <div className="flex flex-col">
                        <span className={`font-bold text-sm ${currentPage === 'contact' ? 'text-seed-accent-green' : 'text-seed-text-primary dark:text-seed-text-primary-dark-theme'}`}>Contact Us</span>
                        <span className="text-[10px] opacity-60 normal-case font-medium">Institutional Inquiries</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
          </nav>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-seed-surface-dark border-t border-seed-text-primary/10 p-4 animate-fade-in max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest text-seed-text-secondary dark:text-seed-text-secondary-dark-theme">
            <button onClick={() => {onNavigateHome?.(); setIsMobileMenuOpen(false)}} className={`text-left py-3 border-b border-seed-text-primary/5 font-serif text-lg ${currentPage === 'landing' ? 'text-seed-accent-green' : 'text-seed-text-primary dark:text-seed-accent-green'}`}>Home</button>
            <button onClick={() => {onNavigateToEbook?.(); setIsMobileMenuOpen(false)}} className={`text-left py-3 border-b border-seed-text-primary/5 flex items-center justify-between ${currentPage === 'ebook' ? 'text-seed-accent-green' : 'text-seed-text-primary dark:text-white'}`}>The Ebook <BookOpen size={14} /></button>
            <button onClick={() => {onNavigateToEcosystem?.(); setIsMobileMenuOpen(false)}} className={`text-left py-3 border-b border-seed-text-primary/5 flex items-center justify-between ${currentPage === 'ecosystem' ? 'text-seed-accent-green' : 'text-seed-text-primary dark:text-white'}`}>Strategic Ecosystem <Handshake size={14} /></button>
            <button onClick={() => {onNavigateToConsulting?.(); setIsMobileMenuOpen(false)}} className={`text-left py-3 border-b border-seed-text-primary/5 flex items-center justify-between ${currentPage === 'consulting' ? 'text-seed-accent-green' : 'text-seed-text-primary dark:text-white'}`}>ASG Consulting <ArrowUpRight size={14} /></button>
            <button onClick={() => {onNavigateToFrameworks?.(); setIsMobileMenuOpen(false)}} className={`text-left py-3 border-b border-seed-text-primary/5 ${currentPage === 'frameworks' ? 'text-seed-accent-green' : ''}`}>Frameworks</button>
            <button onClick={() => {onNavigateToSystemsImpact?.(); setIsMobileMenuOpen(false)}} className={`text-left py-3 border-b border-seed-text-primary/5 ${currentPage === 'systems-impact' ? 'text-seed-accent-green' : ''}`}>Impact</button>
            <button onClick={() => {onNavigateToServices?.(); setIsMobileMenuOpen(false)}} className={`text-left py-3 border-b border-seed-text-primary/5 ${currentPage === 'services' ? 'text-seed-accent-green' : ''}`}>Services</button>
            <button onClick={() => {onNavigateToCOIP?.(); setIsMobileMenuOpen(false)}} className={`text-left py-3 border-b border-seed-text-primary/5 ${currentPage === 'coip' ? 'text-seed-accent-green' : ''}`}>Policy</button>
            <button onClick={() => {onNavigateToPrograms?.(); setIsMobileMenuOpen(false)}} className={`text-left py-3 border-b border-seed-text-primary/5 ${currentPage === 'programs' ? 'text-seed-accent-green' : ''}`}>Programs</button>
            <button onClick={() => {onNavigateToCaseStudies?.(); setIsMobileMenuOpen(false)}} className={`text-left py-3 border-b border-seed-text-primary/5 ${currentPage === 'case-studies' ? 'text-seed-accent-green' : ''}`}>Case Studies</button>
            <button onClick={() => {onNavigateToSolutionologist?.(); setIsMobileMenuOpen(false)}} className={`text-left py-3 border-b border-seed-text-primary/5 ${currentPage === 'solutionologist' ? 'text-seed-accent-green' : ''}`}>Solutionologists</button>
            <button onClick={() => {onNavigateToFamilies?.(); setIsMobileMenuOpen(false)}} className={`text-left py-3 border-b border-seed-text-primary/5 ${currentPage === 'families' ? 'text-seed-accent-green' : ''}`}>Families</button>
            <button onClick={() => {onNavigateToAbout?.(); setIsMobileMenuOpen(false)}} className={`text-left py-3 border-b border-seed-text-primary/5 ${currentPage === 'about' ? 'text-seed-accent-green' : ''}`}>About Us</button>
            <button onClick={() => {onNavigateToContact?.(); setIsMobileMenuOpen(false)}} className={`text-left py-3 border-b border-seed-text-primary/5 ${currentPage === 'contact' ? 'text-seed-accent-green' : ''}`}>Contact</button>
            <button onClick={() => {onNavigateToDonation?.(); setIsMobileMenuOpen(false)}} className={`text-left py-3 font-black flex items-center gap-2 ${currentPage === 'donation' ? 'text-seed-accent-green' : 'text-seed-text-primary dark:text-seed-accent-green'}`}>
              <Heart size={16} /> Donate Now
            </button>
            {(userRole === 'admin' || userRole === 'partner') && (
              <button onClick={() => {onNavigateToAdmin?.(); setIsMobileMenuOpen(false)}} className="text-left py-3 border-t border-seed-text-primary/5 flex items-center gap-2 text-seed-text-primary/40 dark:text-white/40">
                <ShieldCheck size={16} /> System Management
              </button>
            )}
            <button 
                onClick={() => {onNavigate?.(); setIsMobileMenuOpen(false)}} 
                className="w-full mt-4 bg-seed-text-primary dark:bg-seed-accent-green text-white dark:text-seed-text-primary font-black py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg text-sm uppercase tracking-widest"
            >
                VERA STUDIO BETA
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
