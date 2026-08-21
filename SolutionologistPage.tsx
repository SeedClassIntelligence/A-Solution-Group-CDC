
import React, { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { backendService } from '../services/backendService';
import { Building2, HeartHandshake, Zap, Palette, HeartPulse, GraduationCap, Recycle, Waypoints, Handshake, Users2, Rocket, CheckCircle, Bookmark, Loader, ArrowRight, Star, ShieldCheck, Key } from 'lucide-react';

type SolutionologistPageProps = {
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
    onNavigateToYouthBuild?: () => void;
    onNavigateToPrograms: () => void;
    onNavigateToContact: () => void;
    onNavigateToDonation: () => void;
    onNavigateToAdmin?: () => void;
    onOpenContactModal: (title: string) => void;
    onOpenAssessmentModal: () => void;
    theme: 'light' | 'dark';
    toggleTheme: () => void;
};

const pillars = [
  {
    id: 1,
    title: 'Affordable Housing & Economic Development',
    Icon: Building2,
    members: ['Housing Developers', 'Financial Institutions', 'Land Trusts', 'Policy Experts', 'Legal Advocates', 'Homeownership Education Providers'],
    howItWorks: [
      'Ensures access to financial resources for affordable housing projects.',
      'Supports first-time homebuyers, renters, and landowners with legal and financial education.',
      'Advocates for anti-displacement policies and land preservation initiatives.'
    ]
  },
  {
    id: 2,
    title: 'Mental & Emotional Balance',
    Icon: HeartHandshake,
    members: ['Mental Health Professionals', 'CHWs', 'Peer Support Specialists', 'Trauma-Informed Care Experts', 'Crisis Intervention Teams'],
    howItWorks: [
      'Provides culturally competent mental health services and peer-led trauma recovery support.',
      'Integrates CHWs into housing, workforce, and healthcare systems to improve mental health accessibility.',
      'Facilitates crisis response teams for individuals at risk of homelessness, addiction, or behavioral health challenges.'
    ]
  },
  {
    id: 3,
    title: 'Advanced Skills & Technology',
    Icon: Zap,
    members: ['Tech Training Institutes', 'STEM Educators', 'Apprenticeship Programs', 'IT Professionals', 'Workforce Innovation Leaders'],
    howItWorks: [
      'Ensures digital inclusion and technology-based workforce training for low-income communities.',
      'Partners with tech companies and universities to create career pathways in high-demand industries.',
      'Develops certification programs in coding, cybersecurity, robotics, and advanced manufacturing.'
    ]
  },
  {
    id: 4,
    title: 'Cultural Heritage & Activities',
    Icon: Palette,
    members: ['Artists', 'Historians', 'Cultural Preservation Organizations', 'Museum Directors', 'Performing Arts Groups'],
    howItWorks: [
      'Preserves historic neighborhoods through community-driven storytelling and public art initiatives.',
      'Supports local artists and entrepreneurs by creating cultural districts and economic hubs.',
      'Integrates heritage education into youth programs and community development plans.'
    ]
  },
  {
    id: 5,
    title: 'Physical Health & Nutritional Balance',
    Icon: HeartPulse,
    members: ['Healthcare Providers', 'Nutritionists', 'CHWs', 'Public Health Agencies', 'Mobile Health Clinics'],
    howItWorks: [
      'Establishes mobile health clinics and telemedicine services in underserved areas.',
      'Deploys CHWs to help individuals navigate healthcare systems and access preventative care.',
      'Develops food security programs, urban farms, and community wellness initiatives.'
    ]
  },
  {
    id: 6,
    title: 'Education & Workforce Development',
    Icon: GraduationCap,
    members: ['Schools', 'Job Training Centers', 'Trade Unions', 'Career Coaches', 'CHWs Focused on Workforce Navigation'],
    howItWorks: [
      'Creates strong education-to-career pipelines for youth and returning citizens.',
      'Develops pre-apprenticeship programs that lead directly into unionized skilled trades.',
      'Ensures adult learners and low-income residents have access to free job training and placement services.'
    ]
  },
  {
    id: 7,
    title: 'Environmental Sustainability',
    Icon: Recycle,
    members: ['Sustainability Experts', 'Renewable Energy Companies', 'Green Workforce Trainers', 'Environmental Justice Advocates'],
    howItWorks: [
      'Creates green workforce programs that train individuals in solar panel installation, conservation, and urban farming.',
      'Establishes eco-friendly affordable housing models.',
      'Advocates for environmental justice initiatives in historically marginalized communities.'
    ]
  },
  {
    id: 8,
    title: 'Transportation & Connectivity',
    Icon: Waypoints,
    members: ['Public Transit Agencies', 'Rideshare Companies', 'Mobility Experts', 'Infrastructure Developers'],
    howItWorks: [
      'Ensures equitable transit access and transportation subsidies for low-income residents.',
      'Develops community rideshare and micro-mobility solutions.'
    ]
  },
  {
    id: 9,
    title: 'Community Engagement & Empowerment',
    Icon: Handshake,
    members: ['Civic Leaders', 'Policy Advocates', 'Nonprofits', 'Resident Associations', 'Faith-Based Organizations'],
    howItWorks: [
      'Strengthens resident-led governance through participatory budgeting and decision-making models.',
      'Trains community members in leadership, advocacy, and public policy.',
      'Organizes Community Benefits Agreements (CBAs) to ensure corporate and developer accountability.'
    ]
  }
];

const StepCard: React.FC<{ number: number; title: string; children: React.ReactNode }> = ({ number, title, children }) => (
    <div className="bg-white dark:bg-seed-surface-dark p-6 rounded-xl shadow-lg border border-seed-text-primary/10 dark:border-seed-border-dark">
        <div className="flex items-center gap-4">
            <div className="flex-shrink-0 bg-seed-text-primary text-white dark:bg-seed-accent-green dark:text-seed-text-primary h-10 w-10 rounded-full flex items-center justify-center font-bold text-lg">{number}</div>
            <h3 className="font-semibold text-lg text-seed-text-primary dark:text-seed-text-primary-dark-theme">{title}</h3>
        </div>
        <p className="mt-4 text-seed-text-secondary dark:text-seed-text-secondary-dark-theme">{children}</p>
    </div>
);

const PillarCard: React.FC<{ pillar: typeof pillars[0] }> = ({ pillar }) => (
    <div className="bg-white dark:bg-seed-surface-dark p-6 rounded-2xl shadow-md border border-transparent hover:border-seed-accent-green/50 hover:shadow-xl transition-all duration-300 flex flex-col gap-4">
        <div className="flex items-center gap-3">
            <div className="flex-shrink-0 bg-seed-text-primary/10 dark:bg-seed-accent-green/10 text-seed-accent-green p-3 rounded-full">
                <pillar.Icon size={24} />
            </div>
            <h3 className="font-serif font-bold text-xl text-seed-text-primary dark:text-seed-text-primary-dark-theme leading-tight">
                <span className="text-seed-accent-green font-sans font-bold">{pillar.id}.</span> {pillar.title}
            </h3>
        </div>
        <div>
            <div className="flex items-center gap-2 mb-2">
                <Users2 size={16} className="text-seed-text-secondary dark:text-seed-text-secondary-dark-theme flex-shrink-0" />
                <h4 className="font-semibold text-sm text-seed-text-primary dark:text-seed-text-primary-dark-theme">WCSN Members</h4>
            </div>
            <p className="text-sm text-seed-text-secondary/80 dark:text-seed-text-secondary-dark-theme/80 italic">
                {pillar.members.join(', ')}
            </p>
        </div>
        <div>
            <div className="flex items-center gap-2 mb-2">
                <Zap size={16} className="text-seed-accent-green flex-shrink-0" />
                <h4 className="font-semibold text-sm text-seed-text-primary dark:text-seed-text-primary-dark-theme">How WCSN Works</h4>
            </div>
            <ul className="space-y-1">
                {pillar.howItWorks.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-seed-text-secondary dark:text-seed-text-secondary-dark-theme">
                        <CheckCircle size={14} className="text-seed-accent-green flex-shrink-0 mt-1" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);


export const SolutionologistPage: React.FC<SolutionologistPageProps> = ({ 
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
    onNavigateToAdmin,
    onOpenContactModal,
    onOpenAssessmentModal,
    theme, 
    toggleTheme 
}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        website: '',
        phone: '',
        expertise: '',
        pillars: [] as number[],
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handlePillarChange = (pillarId: number) => {
        setFormData(prev => {
            const newPillars = prev.pillars.includes(pillarId)
                ? prev.pillars.filter(id => id !== pillarId)
                : [...prev.pillars, pillarId];
            return { ...prev, pillars: newPillars };
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call to local persistence
        setTimeout(() => {
            backendService.saveSubmission('solutionologist', formData);
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1500);
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
                userRole={userRole}
                onNavigateToCOIP={onNavigateToCOIP}
                onNavigateToFamilies={onNavigateToFamilies}
                onNavigateToAbout={onNavigateToAbout}
                onNavigateToPrograms={onNavigateToPrograms}
                onNavigateToContact={onNavigateToContact}
                onNavigateToDonation={onNavigateToDonation}
                theme={theme} 
                toggleTheme={toggleTheme} 
                currentPage="solutionologist"
            />
            <main className="flex-grow">
                <section className="py-20 lg:py-24">
                  <div className="container mx-auto px-4">
                    <div className="text-center mb-16 max-w-4xl mx-auto">
                      <h1 className="text-4xl lg:text-5xl font-serif font-bold tracking-tight text-seed-text-primary dark:text-seed-text-primary-dark-theme">
                        Solutionologist: The WCS Network
                      </h1>
                      <p className="mt-6 text-lg lg:text-xl text-seed-text-secondary dark:text-seed-text-secondary-dark-theme">
                        The Three Tiers of Solutionologists
                      </p>
                    </div>

                    <div className="max-w-4xl mx-auto mb-16 bg-seed-text-primary/5 dark:bg-seed-accent-green/5 p-8 rounded-xl border border-seed-text-primary/10 dark:border-seed-accent-green/20 text-center">
                        <h3 className="text-2xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-4">
                            Is your organization ready for the WCS Network?
                        </h3>
                        <p className="text-seed-text-secondary dark:text-seed-text-secondary-dark-theme mb-6 max-w-2xl mx-auto">
                            Complete our brief readiness assessment. We will create a preliminary 2-3 page strategic draft tailored to your needs before scheduling your free consultation.
                        </p>
                        <button 
                            onClick={onOpenAssessmentModal}
                            className="bg-seed-accent-green text-white dark:text-seed-text-primary font-bold px-8 py-3 rounded-lg hover:bg-seed-accent-green-dark transition shadow-lg flex items-center gap-2 mx-auto"
                        >
                            Take Assessment & Book Strategy Call <ArrowRight size={18} />
                        </button>
                    </div>
                    
                    <div className="max-w-4xl mx-auto prose prose-lg prose-stone dark:prose-invert text-seed-text-secondary dark:text-seed-text-secondary-dark-theme">
                        <p>The Whole Community Solution Network (WCSN) Framework is the operational backbone of the Whole Community Solution (WCS) Framework. While the WCS Framework defines the nine pillars that create holistic, sustainable community development, the WCSN Framework ensures the execution and facilitation of these pillars by creating a network of experts, organizations, and professionals who actively implement, maintain, and expand each pillar.</p>
                        
                        <div className="flex items-start gap-3 mt-8">
                            <Bookmark className="text-seed-accent-green mt-1 flex-shrink-0" />
                            <h2 className="text-seed-text-primary dark:text-seed-text-primary-dark-theme font-serif !mt-0">Why Is the WCSN Framework Critical?</h2>
                        </div>
                        <p>The Whole Community Solution Framework cannot function effectively without a strategic, well-organized network that can mobilize services, funding, expertise, and resources within each of its nine pillars. The WCSN Framework builds that operational structure, ensuring that each community or entity that adopts the WCS Framework has a fully functional support system ready to deploy solutions in a structured and scalable manner.</p>
                        
                        <div className="flex items-start gap-3 mt-8">
                            <Zap className="text-seed-accent-green mt-1 flex-shrink-0" />
                            <h2 className="text-seed-text-primary dark:text-seed-text-primary-dark-theme font-serif !mt-0">How the Whole Community Solution Network (WCSN) Works</h2>
                        </div>
                        <p>The WCSN Framework ensures that every entity implementing the Whole Community Solution Framework has a custom-built support system of professionals, businesses, nonprofits, government agencies, and community-based organizations that specialize in the specific services required under each pillar.</p>
                    </div>

                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 my-16">
                        <StepCard number={1} title="Identifying the Entity & Industry">
                            The WCSN Framework is adapted to the specific needs of the entity using the WCS Framework. This could be a community development project, housing authority, workforce development initiative, healthcare organization, or reentry program.
                        </StepCard>
                        <StepCard number={2} title="Creating the WCSN for the Entity">
                            Each entity receives a tailored network of subject matter experts, service providers, and organizations that align with the nine pillars of the WCS Framework. Example: If a daycare center is implementing the WCS Framework, the WCSN will include early childhood educators, social workers, mental health specialists, nutritionists, and family support coordinators.
                        </StepCard>
                        <StepCard number={3} title="Deploying the WCSN to Facilitate Services">
                           The network of professionals, nonprofits, and businesses begin to collaborate under the WCS Framework to provide direct services and solutions. Example: In a housing development project, the WCSN would activate CHWs for tenant support, financial literacy experts for homebuyer education, and workforce training providers for job placement.
                        </StepCard>
                        <StepCard number={4} title="Sustaining the WCSN for Long-Term Impact">
                           The network is designed to remain active and evolve as the community or organization grows. WCSN members continue to meet, plan, and refine services to ensure ongoing impact and expansion.
                        </StepCard>
                    </div>
                    
                     <div className="text-center my-16 max-w-4xl mx-auto">
                      <h2 className="text-3xl lg:text-4xl font-serif font-bold tracking-tight text-seed-text-primary dark:text-seed-text-primary-dark-theme">
                        How the WCSN Framework Supports Each of the Nine Pillars
                      </h2>
                      <p className="mt-4 text-lg text-seed-text-secondary dark:text-seed-text-secondary-dark-theme">
                        For the Whole Community Solution Framework to be effective, each pillar requires a dedicated network of professionals, service providers, and organizations who specialize in executing the necessary services.
                      </p>
                    </div>

                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pillars.map(pillar => (
                            <PillarCard key={pillar.id} pillar={pillar} />
                        ))}
                    </div>

                     {/* New Three Tiers of Solutionologists Section */}
                    <div className="max-w-7xl mx-auto mt-24 mb-16">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme">The Three Tiers of Solutionologists</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Card 1: Success / Tier 1 */}
                            <div className="bg-white dark:bg-seed-surface-dark p-10 rounded-3xl shadow-xl border-t-8 border-seed-accent-green flex flex-col relative overflow-hidden group hover:-translate-y-2 transition-all duration-300">
                                <div className="absolute -right-8 -top-8 text-seed-accent-green/5 font-black text-8xl uppercase tracking-tighter pointer-events-none group-hover:scale-110 transition-transform">Success</div>
                                <div className="bg-seed-accent-green/10 text-seed-accent-green p-4 rounded-2xl w-fit mb-8">
                                    <Star size={32} />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-2">Community Solutionologists</h3>
                                <p className="text-seed-accent-green font-bold text-sm uppercase tracking-widest mb-6">Tier 1</p>
                                <ul className="space-y-3 mb-10 flex-grow">
                                    <li className="font-semibold text-seed-text-primary dark:text-white">Community Health Workers</li>
                                    <li className="font-semibold text-seed-text-primary dark:text-white">Peer Mentors</li>
                                    <li className="font-semibold text-seed-text-primary dark:text-white">Parent Leaders</li>
                                </ul>
                                <div className="bg-seed-bg dark:bg-seed-bg-dark p-4 rounded-xl italic text-seed-text-secondary dark:text-seed-text-secondary-dark-theme border-l-4 border-seed-accent-green">
                                    "Trust. Families trust people who've been there."
                                </div>
                            </div>

                            {/* Card 2: WCS / Tier 2 */}
                            <div className="bg-white dark:bg-seed-surface-dark p-10 rounded-3xl shadow-xl border-t-8 border-seed-text-primary dark:border-seed-accent-green flex flex-col relative overflow-hidden group hover:-translate-y-2 transition-all duration-300">
                                <div className="absolute -right-8 -top-8 text-seed-text-primary/5 dark:text-seed-accent-green/5 font-black text-8xl uppercase tracking-tighter pointer-events-none group-hover:scale-110 transition-transform">WCS</div>
                                <div className="bg-seed-text-primary/10 dark:bg-seed-accent-green/10 text-seed-text-primary dark:text-seed-accent-green p-4 rounded-2xl w-fit mb-4">
                                    <ShieldCheck size={32} />
                                </div>
                                <div className="mb-4">
                                    <span className="bg-seed-text-primary dark:bg-seed-accent-green text-white dark:text-seed-text-primary text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">Most Common</span>
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-2">Core Solutionologists</h3>
                                <p className="text-seed-text-primary dark:text-seed-accent-green font-bold text-sm uppercase tracking-widest mb-6">Tier 2</p>
                                <ul className="space-y-3 mb-10 flex-grow">
                                    <li className="font-semibold text-seed-text-primary dark:text-white">Licensed Therapists</li>
                                    <li className="font-semibold text-seed-text-primary dark:text-white">Doctors & Nurses</li>
                                    <li className="font-semibold text-seed-text-primary dark:text-white">Lawyers & Advocates</li>
                                </ul>
                                <div className="bg-seed-bg dark:bg-seed-bg-dark p-4 rounded-xl italic text-seed-text-secondary dark:text-seed-text-secondary-dark-theme border-l-4 border-seed-text-primary dark:border-seed-border-green">
                                    "Expertise. Providing specialized services tailored to the 9 pillars."
                                </div>
                            </div>

                            {/* Card 3: Keys / Tier 3 */}
                            <div className="bg-white dark:bg-seed-surface-dark p-10 rounded-3xl shadow-xl border-t-8 border-seed-accent-green/60 flex flex-col relative overflow-hidden group hover:-translate-y-2 transition-all duration-300">
                                <div className="absolute -right-8 -top-8 text-seed-accent-green/5 font-black text-8xl uppercase tracking-tighter pointer-events-none group-hover:scale-110 transition-transform">Keys</div>
                                <div className="bg-seed-accent-green/10 text-seed-accent-green p-4 rounded-2xl w-fit mb-8">
                                    <Key size={32} />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-seed-text-primary dark:text-seed-text-primary-dark-theme mb-2">Supporting Solutionologists</h3>
                                <p className="text-seed-accent-green/60 font-bold text-sm uppercase tracking-widest mb-6">Tier 3</p>
                                <ul className="space-y-3 mb-10 flex-grow">
                                    <li className="font-semibold text-seed-text-primary dark:text-white">Judges & Prosecutors</li>
                                    <li className="font-semibold text-seed-text-primary dark:text-white">School Principals</li>
                                    <li className="font-semibold text-seed-text-primary dark:text-white">Agency Directors</li>
                                </ul>
                                <div className="bg-seed-bg dark:bg-seed-bg-dark p-4 rounded-xl italic text-seed-text-secondary dark:text-seed-text-secondary-dark-theme border-l-4 border-seed-accent-green/60">
                                    "Power. Changing the conditions for ALL families through policy."
                                </div>
                            </div>
                        </div>
                    </div>

                  </div>
                </section>
                
                <section id="join-network" className="py-20 lg:py-24 bg-white dark:bg-seed-surface-dark">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-4xl font-serif font-bold tracking-tight text-seed-text-primary dark:text-seed-text-primary-dark-theme">
                                Join the Movement
                            </h2>
                            <p className="mt-4 text-lg text-seed-text-secondary dark:text-seed-text-secondary-dark-theme max-w-2xl mx-auto">
                                Are you an expert in your field? Join our network of professionals, academics, and community leaders dedicated to implementing the Whole Community Solution Framework.
                            </p>
                        </div>

                        <div className="bg-seed-bg dark:bg-seed-bg-dark p-8 rounded-2xl border border-seed-text-primary/10 dark:border-seed-border-dark shadow-lg">
                            {isSubmitted ? (
                                <div className="text-center py-10">
                                    <CheckCircle size={48} className="mx-auto text-seed-accent-green" />
                                    <h3 className="mt-4 text-2xl font-semibold text-seed-text-primary dark:text-seed-text-primary-dark-theme">Thank You for Applying!</h3>
                                    <p className="mt-2 text-seed-text-secondary dark:text-seed-text-secondary-dark-theme">Your application to join the WCSN has been received. Our team will review your information and be in touch shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-seed-text-secondary dark:text-seed-text-secondary-dark-theme">Full Name</label>
                                            <input type="text" name="name" id="name" required value={formData.name} onChange={handleInputChange} className="mt-1 block w-full rounded-md bg-white dark:bg-seed-surface-dark border-seed-text-primary/20 dark:border-seed-border-dark focus:ring-seed-accent-green focus:border-seed-accent-green shadow-sm" />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-seed-text-secondary dark:text-seed-text-secondary-dark-theme">Email Address</label>
                                            <input type="email" name="email" id="email" required value={formData.email} onChange={handleInputChange} className="mt-1 block w-full rounded-md bg-white dark:bg-seed-surface-dark border-seed-text-primary/20 dark:border-seed-border-dark focus:ring-seed-accent-green focus:border-seed-accent-green shadow-sm" />
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="website" className="block text-sm font-medium text-seed-text-secondary dark:text-seed-text-secondary-dark-theme">Website (Optional)</label>
                                            <input type="url" name="website" id="website" value={formData.website} onChange={handleInputChange} className="mt-1 block w-full rounded-md bg-white dark:bg-seed-surface-dark border-seed-text-primary/20 dark:border-seed-border-dark focus:ring-seed-accent-green focus:border-seed-accent-green shadow-sm" />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-seed-text-secondary dark:text-seed-text-secondary-dark-theme">Phone Number (Optional)</label>
                                            <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-white dark:bg-seed-bg-dark border-seed-text-primary/20 dark:border-seed-border-dark focus:ring-seed-accent-green focus:border-seed-accent-green shadow-sm" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="expertise" className="block text-sm font-medium text-seed-text-secondary dark:text-seed-text-secondary-dark-theme">
                                            Tell us about your expertise or inquiry
                                        </label>
                                        <textarea name="expertise" id="expertise" rows={4} required value={formData.expertise} onChange={handleInputChange} className="mt-1 block w-full rounded-md bg-white dark:bg-seed-surface-dark border-seed-text-primary/20 dark:border-seed-border-dark focus:ring-seed-accent-green focus:border-seed-accent-green shadow-sm" placeholder="e.g., Urban planning with a focus on equitable development, grant writing for non-profits, etc."></textarea>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-seed-text-secondary dark:text-seed-text-secondary-dark-theme">Which pillar(s) do you align with?</label>
                                        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {pillars.map(pillar => (
                                                <label key={pillar.id} className={`flex items-center gap-3 p-3 rounded-md border cursor-pointer transition ${formData.pillars.includes(pillar.id) ? 'bg-seed-accent-green/10 border-seed-accent-green' : 'bg-white dark:bg-seed-surface-dark border-seed-text-primary/10 dark:border-seed-border-dark hover:border-seed-accent-green/50'}`}>
                                                    <input
                                                        type="checkbox"
                                                        checked={formData.pillars.includes(pillar.id)}
                                                        onChange={() => handlePillarChange(pillar.id)}
                                                        className="h-4 w-4 rounded border-gray-300 text-seed-accent-green focus:ring-seed-accent-green"
                                                    />
                                                    <span className="text-sm font-medium text-seed-text-secondary dark:text-seed-text-secondary-dark-theme">{pillar.title}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex justify-end pt-2">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full sm:w-auto bg-seed-text-primary dark:bg-seed-accent-green text-white dark:text-seed-text-primary font-semibold px-8 py-3 rounded-lg hover:bg-seed-text-primary-dark dark:hover:bg-seed-accent-green-dark transition shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader size={20} className="animate-spin mr-2" />
                                                    Submitting Application...
                                                </>
                                            ) : (
                                                'Join the Movement'
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}
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
                onNavigateToAdmin={onNavigateToAdmin}
                onOpenContactModal={onOpenContactModal} 
                onOpenFeedbackModal={() => {}}
            />
        </div>
    );
};
