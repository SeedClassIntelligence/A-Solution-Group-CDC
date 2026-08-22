import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';

type FooterProps = {
  onNavigate: () => void;
  onNavigateToSection?: (sectionId: string) => void;
  onNavigateToConsulting?: () => void;
  onNavigateToServices?: () => void;
  onNavigateToSolutionologist?: () => void;
  onNavigateToCOIP?: () => void;
  onNavigateToSystemsImpact?: () => void;
  onNavigateToCaseStudies?: () => void;
  onNavigateToFamilies?: () => void;
  onNavigateToAbout?: () => void;
  onNavigateToPrograms?: () => void;
  onNavigateToContact?: () => void;
  onNavigateToDonation?: () => void;
  onNavigateToAdmin?: () => void;
  onOpenContactModal: (title: string) => void;
  onOpenFeedbackModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onNavigate, 
  onNavigateToSection, 
  onNavigateToConsulting,
  onNavigateToServices,
  onNavigateToSolutionologist, 
  onNavigateToCOIP,
  onNavigateToSystemsImpact,
  onNavigateToCaseStudies,
  onNavigateToFamilies,
  onNavigateToAbout,
  onNavigateToPrograms,
  onNavigateToContact,
  onNavigateToDonation,
  onNavigateToAdmin,
  onOpenContactModal, 
  onOpenFeedbackModal 
}) => {
  return (
    <footer className="bg-seed-text-primary dark:bg-seed-bg-dark text-white border-t border-white/10">
      <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-8 group">
              <Logo variant="contrast" />
            </div>
            <p className="text-sm text-white/50 mb-8 leading-relaxed max-w-xs">
              Leading the national movement to end intergenerational incarceration by centering children and rebuilding families through architectural community solutions.
            </p>
            <div className="flex gap-4">
               <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-seed-accent-green hover:text-seed-text-primary transition-all cursor-pointer border border-white/5"
                aria-label="Facebook"
               >
                  <Facebook size={18} />
               </a>
               <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-seed-accent-green hover:text-seed-text-primary transition-all cursor-pointer border border-white/5"
                aria-label="Twitter"
               >
                  <Twitter size={18} />
               </a>
               <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-seed-accent-green hover:text-seed-text-primary transition-all cursor-pointer border border-white/5"
                aria-label="LinkedIn"
               >
                  <Linkedin size={18} />
               </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-[10px] font-black text-seed-accent-green tracking-[0.3em] uppercase mb-8 opacity-60">Architectural Frameworks</h3>
            <ul className="space-y-4">
              <li><button onClick={() => onNavigateToSection?.('architecture')} className="text-white/70 hover:text-seed-accent-green transition text-left text-xs uppercase font-bold tracking-widest">WCS Framework</button></li>
              <li><button onClick={() => onNavigateToSection?.('co-design')} className="text-white/70 hover:text-seed-accent-green transition text-left text-xs uppercase font-bold tracking-widest">Reentry Framework</button></li>
              <li><button onClick={onNavigateToSystemsImpact} className="text-white/70 hover:text-seed-accent-green transition text-left text-xs uppercase font-bold tracking-widest">Systems Impact</button></li>
              <li><button onClick={onNavigateToCaseStudies} className="text-white/70 hover:text-seed-accent-green transition text-left text-xs uppercase font-bold tracking-widest">Case Studies</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-black text-seed-accent-green tracking-[0.3em] uppercase mb-8 opacity-60">The Movement</h3>
            <ul className="space-y-4">
              <li><button onClick={onNavigateToAbout} className="text-white/70 hover:text-seed-accent-green transition text-left text-xs uppercase font-bold tracking-widest">Our Mission</button></li>
              <li><button onClick={onNavigateToServices} className="text-white/70 hover:text-seed-accent-green transition text-left text-xs uppercase font-bold tracking-widest">Services</button></li>
              <li><button onClick={onNavigateToFamilies} className="text-white/70 hover:text-seed-accent-green transition text-left text-xs uppercase font-bold tracking-widest">For Families</button></li>
              <li><button onClick={onNavigateToPrograms} className="text-white/70 hover:text-seed-accent-green transition text-left text-xs uppercase font-bold tracking-widest">Programs</button></li>
              <li><button onClick={onNavigateToSolutionologist} className="text-white/70 hover:text-seed-accent-green transition text-left text-xs uppercase font-bold tracking-widest">Join as Solutionologist</button></li>
              <li><button onClick={onNavigateToConsulting} className="text-white/70 hover:text-seed-accent-green transition text-left text-xs uppercase font-bold tracking-widest">Consulting</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-black text-seed-accent-green tracking-[0.3em] uppercase mb-8 opacity-60">Communications</h3>
            <ul className="space-y-4">
              <li><button onClick={onNavigateToContact} className="text-white/70 hover:text-seed-accent-green transition text-left text-xs uppercase font-bold tracking-widest">Contact Us</button></li>
              <li><button onClick={() => onOpenContactModal('Download Policy Brief')} className="text-white/70 hover:text-seed-accent-green transition text-left text-xs uppercase font-bold tracking-widest">Policy Briefs</button></li>
              <li><button onClick={onNavigate} className="text-seed-accent-green hover:text-white transition text-left text-xs uppercase font-black tracking-widest">Vera Studio (Beta)</button></li>
              <li><button onClick={onNavigateToDonation} className="bg-seed-accent-green text-seed-text-primary px-4 py-2 rounded font-black text-[10px] uppercase tracking-widest hover:bg-white transition-colors mt-2">Support the Mission</button></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest">&copy; {new Date().getFullYear()} A Solution Group Community Development Corporation. Federal Compliance Architecture.</p>
              <button onClick={onNavigateToAdmin} className="text-[10px] font-black text-white/20 uppercase tracking-widest hover:text-seed-accent-green flex items-center gap-2 transition-colors">
                <ShieldCheck size={12} /> System Management (Staff Only)
              </button>
            </div>
            <div className="flex gap-8 text-[10px] font-bold text-white/30 uppercase tracking-widest">
                <a href="#" className="hover:text-white transition">Privacy Protocol</a>
                <a href="#" className="hover:text-white transition">Terms of Use</a>
            </div>
        </div>
      </div>
    </footer>
  );
};