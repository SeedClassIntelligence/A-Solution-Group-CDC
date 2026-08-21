
import React, { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { 
    Heart, 
    Zap, 
    ShieldCheck, 
    Globe, 
    ArrowRight, 
    CheckCircle, 
    Landmark, 
    Users, 
    TrendingDown, 
    // Added TrendingUp to resolve errors on lines 204 and 400
    TrendingUp,
    Rocket,
    Gift,
    DollarSign,
    CreditCard,
    Lock,
    PieChart,
    FileText,
    HelpCircle,
    Target,
    ShieldAlert,
    Building2,
    Check,
    RefreshCw,
    Phone,
    Mail,
    ChevronRight
} from 'lucide-react';

type DonationPageProps = {
    onNavigateHome: () => void;
    onNavigateToStudio: (prompt?: string) => void;
    onNavigateToSection: (sectionId: string) => void;
    onNavigateToCaseStudies: () => void;
    onNavigateToSystemsImpact: () => void;
    onNavigateToSolutionologist: () => void;
    onNavigateToFrameworks: () => void;
    onNavigateToConsulting: () => void;
    // Added missing onNavigateToServices to props definition
    onNavigateToServices: () => void;
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

export const DonationPage: React.FC<DonationPageProps> = ({
    onNavigateHome,
    onNavigateToStudio,
    onNavigateToSection,
    onNavigateToCaseStudies,
    onNavigateToSystemsImpact,
    onNavigateToSolutionologist,
    onNavigateToFrameworks,
    onNavigateToConsulting,
    // Destructured missing onNavigateToServices prop
    onNavigateToServices,
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
    const [amount, setAmount] = useState<number | string>(100);
    const [frequency, setFrequency] = useState<'once' | 'monthly'>('monthly');

    const donationOptions = [25, 50, 100, 250, 500, 1000];

    const getImpactText = (val: number | string) => {
        const num = Number(val);
        if (num >= 100000) return "Community stabilization infrastructure expansion.";
        if (num >= 50000) return "Annual capacity serving 15-20 families.";
        if (num >= 10000) return "Complete youth workforce pathway (training, credentials, job placement).";
        if (num >= 5000) return "Two months sustained family stabilization.";
        if (num >= 3000) return "Full year Family Design Studio for one family.";
        if (num >= 2500) return "Full month family support preventing foster care entry.";
        if (num >= 1000) return "One month comprehensive family stabilization.";
        if (num >= 500) return "Two trauma therapy sessions for children.";
        if (num >= 250) return "One week crisis stabilization services.";
        if (num >= 100) return "Emergency food and utility assistance.";
        if (num >= 50) return "One month transportation support (bus passes).";
        return "Emergency crisis supplies for one family.";
    };

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
                onNavigateToCOIP={onNavigateToCOIP}
                onNavigateToFamilies={onNavigateToFamilies}
                onNavigateToAbout={onNavigateToAbout}
                onNavigateToPrograms={onNavigateToPrograms}
                onNavigateToContact={onNavigateToContact}
                onNavigateToDonation={onNavigateToDonation}
                theme={theme} 
                toggleTheme={toggleTheme} 
                currentPage="donation"
            />
            
            <main className="flex-grow">
                {/* HERO SECTION */}
                <section className="bg-seed-text-primary dark:bg-seed-surface-dark text-white py-24 lg:py-40 relative overflow-hidden">
                    <div className="absolute inset-0 bg-seed-accent-green opacity-[0.03] pointer-events-none"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-seed-accent-green text-seed-text-primary font-black text-[10px] uppercase tracking-[0.2em] mb-8 rounded">
                            SUPPORT THE ARCHITECTURE OF CHANGE
                        </div>
                        <h1 className="text-4xl lg:text-8xl font-serif font-bold mb-8 leading-tight max-w-5xl mx-auto tracking-tighter text-white">
                            Invest in <br/> <span className="text-seed-accent-green">Intergenerational Healing.</span>
                        </h1>
                        <p className="text-xl lg:text-3xl opacity-90 max-w-3xl mx-auto leading-relaxed font-medium mb-12">
                            Your contribution directly funds the frameworks that interrupt cycles of incarceration and build stable community foundations for families and youth at highest risk.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button onClick={() => document.getElementById('donation-interface')?.scrollIntoView({ behavior: 'smooth' })} className="bg-seed-accent-green text-seed-text-primary font-black px-10 py-5 rounded-xl hover:shadow-2xl transition-all text-lg shadow-lg">
                                DONATE NOW
                            </button>
                            <button onClick={() => onOpenContactModal('Request Briefing')} className="bg-white/10 backdrop-blur-md text-white border border-white/20 font-black px-10 py-5 rounded-xl hover:bg-white/20 transition-all text-lg shadow-lg">
                                REQUEST BRIEFING
                            </button>
                        </div>
                    </div>
                </section>

                {/* SECTION 1: WHY YOUR SUPPORT MATTERS */}
                <section className="py-24 bg-white dark:bg-seed-bg-dark border-b border-seed-text-primary/5">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <h2 className="text-3xl lg:text-5xl font-serif font-bold text-seed-text-primary dark:text-white mb-8 leading-tight">
                                    Why Your Support <br/> Matters
                                </h2>
                                <div className="space-y-6 text-xl text-seed-text-secondary dark:text-seed-text-secondary-dark-theme leading-relaxed font-medium">
                                    <p>Mass incarceration is a child-welfare crisis that costs the public billions in reactive spending across seven systems: foster care, juvenile justice, education disruption, homelessness, mental health crisis, substance use, and generational poverty.</p>
                                    <p className="font-bold text-seed-text-primary dark:text-white border-l-4 border-seed-accent-green pl-6 italic">
                                        "Every $1 invested in point-of-sentencing prevention saves $22 in future system costs."
                                    </p>
                                    <p>A Solution Group CDC redirects that investment upstream, preventing crisis across jurisdictions through scalable systems infrastructure.</p>
                                </div>
                            </div>
                            <div className="bg-seed-bg dark:bg-seed-surface-dark p-12 rounded-[3.5rem] shadow-xl border border-seed-text-primary/5 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500 opacity-5 rounded-bl-full"></div>
                                <h3 className="text-xl font-bold mb-10 text-seed-text-primary dark:text-white uppercase tracking-widest">Economic Cascade</h3>
                                <div className="space-y-12">
                                    <div className="flex gap-6 items-start">
                                        <div className="p-3 bg-red-500/10 text-red-600 rounded-xl">
                                            <ShieldAlert size={24} />
                                        </div>
                                        <div>
                                            <span className="block text-3xl font-serif font-black text-red-600">$1.36 MILLION</span>
                                            <p className="text-sm font-bold opacity-60 uppercase tracking-widest mt-1">Cost of Crisis Response</p>
                                            <p className="text-xs opacity-50 mt-2">Per family without intervention at sentencing.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6 items-start">
                                        <div className="p-3 bg-seed-accent-green/10 text-seed-accent-green rounded-xl">
                                            <ShieldCheck size={24} />
                                        </div>
                                        <div>
                                            <span className="block text-3xl font-serif font-black text-seed-accent-green">$61,500</span>
                                            <p className="text-sm font-bold opacity-60 uppercase tracking-widest mt-1">Cost of Early Intervention</p>
                                            <p className="text-xs opacity-50 mt-2">Per family for comprehensive stabilization services.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-12 pt-8 border-t border-seed-text-primary/10 text-center">
                                    <span className="text-5xl font-serif font-black text-seed-text-primary dark:text-seed-accent-green">22:1 ROI</span>
                                    <p className="text-xs font-black uppercase tracking-widest mt-2 opacity-60">Redirecting Spending Upstream</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 2: WHAT MAKES US DIFFERENT */}
                <section className="py-24 bg-seed-bg dark:bg-seed-surface-dark/30 border-y border-seed-text-primary/5">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl lg:text-6xl font-serif font-bold text-seed-text-primary dark:text-white mb-6 uppercase tracking-tight">What Makes Us Different</h2>
                            <p className="text-xl text-seed-text-secondary dark:text-seed-text-secondary-dark-theme max-w-3xl mx-auto font-medium">
                                We track outcomes across 9 pillars of the Whole Community Solution (WCS) architecture to ensure every dollar creates verified community value.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12 mb-20">
                            <div className="bg-white dark:bg-seed-bg-dark p-10 rounded-[3rem] shadow-xl border border-seed-text-primary/5 h-full flex flex-col">
                                <TrendingUp className="text-seed-accent-green mb-6" size={40} />
                                <h4 className="text-xl font-serif font-bold text-seed-text-primary dark:text-white mb-4 uppercase">MEASURABLE ROI</h4>
                                <p className="text-sm opacity-70 leading-relaxed mb-6 flex-grow">
                                    Every donation is tracked against verified outcomes: foster care diversion, construction credentials, healthcare enrollment, and educational continuity.
                                </p>
                                <ul className="text-[10px] space-y-2 font-bold opacity-80 grid grid-cols-1">
                                    <li className="flex gap-2 items-center"><CheckCircle size={12} className="text-seed-accent-green"/> FAMILY STABILIZATION</li>
                                    <li className="flex gap-2 items-center"><CheckCircle size={12} className="text-seed-accent-green"/> YOUTH WORKFORCE DEV</li>
                                    <li className="flex gap-2 items-center"><CheckCircle size={12} className="text-seed-accent-green"/> HOUSING SECURITY</li>
                                    <li className="flex gap-2 items-center"><CheckCircle size={12} className="text-seed-accent-green"/> HEALTHCARE ACCESS</li>
                                </ul>
                            </div>
                            <div className="bg-seed-text-primary text-white p-10 rounded-[3rem] shadow-2xl scale-105 z-10 h-full flex flex-col">
                                <Landmark className="text-seed-accent-green mb-6" size={40} />
                                <h4 className="text-xl font-serif font-bold mb-4 uppercase">SYSTEMS FIRST</h4>
                                <p className="text-sm opacity-90 leading-relaxed mb-6 flex-grow">
                                    This is not charity; it's infrastructure. We change the policy conditions that allow cycles to persist by funding intervention protocols and cross-system coordination.
                                </p>
                                <ul className="text-[10px] space-y-2 font-bold text-seed-accent-green">
                                    <li className="flex gap-2 items-center"><Check size={12}/> POINT-OF-SENTENCING PROTOCOLS</li>
                                    <li className="flex gap-2 items-center"><Check size={12}/> EVIDENCE-BASED FRAMEWORKS (COIP)</li>
                                    <li className="flex gap-2 items-center"><Check size={12}/> CROSS-SYSTEM COORDINATION</li>
                                    <li className="flex gap-2 items-center"><Check size={12}/> POLICY ADVOCACY</li>
                                </ul>
                            </div>
                            <div className="bg-white dark:bg-seed-bg-dark p-10 rounded-[3rem] shadow-xl border border-seed-text-primary/5 h-full flex flex-col">
                                <Heart className="text-seed-accent-green mb-6" size={40} />
                                <h4 className="text-xl font-serif font-bold text-seed-text-primary dark:text-white mb-4 uppercase">ZERO COST TO FAMILIES</h4>
                                <p className="text-sm opacity-70 leading-relaxed mb-6 flex-grow">
                                    All services—from emergency housing to trauma therapy—are provided at no cost. Your donation ensures families never receive a bill for stabilization.
                                </p>
                                <ul className="text-[10px] space-y-2 font-bold opacity-80">
                                    <li className="flex gap-2 items-center"><CheckCircle size={12} className="text-seed-accent-green"/> EVICTION PREVENTION</li>
                                    <li className="flex gap-2 items-center"><CheckCircle size={12} className="text-seed-accent-green"/> FOOD & HEALTHCARE ENROLLMENT</li>
                                    <li className="flex gap-2 items-center"><CheckCircle size={12} className="text-seed-accent-green"/> FAMILY NAVIGATOR SERVICES</li>
                                    <li className="flex gap-2 items-center"><CheckCircle size={12} className="text-seed-accent-green"/> 24/7 CRISIS INTERVENTION</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: MAKE AN IMPACT */}
                <section id="donation-interface" className="py-24 bg-white dark:bg-seed-bg-dark relative">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            {/* Left: Detailed Impact Levels */}
                            <div className="space-y-12">
                                <div>
                                    <h2 className="text-3xl lg:text-5xl font-serif font-bold text-seed-text-primary dark:text-white mb-8 leading-tight">
                                        Make an Impact
                                    </h2>
                                    <p className="text-xl text-seed-text-secondary dark:text-seed-text-secondary-dark-theme font-medium leading-relaxed mb-8">
                                        Support our 9-pillar framework and fund stabilization for families and youth at highest risk.
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        <div className="flex items-center gap-2 bg-seed-accent-green/10 text-seed-accent-green px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-seed-accent-green/20">
                                            <CheckCircle size={12} /> 100% Tax Deductible
                                        </div>
                                        <div className="flex items-center gap-2 bg-seed-accent-green/10 text-seed-accent-green px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-seed-accent-green/20">
                                            <PieChart size={12} /> 85¢ per dollar direct to programs
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <h4 className="font-black text-xs uppercase tracking-widest text-seed-text-primary/40 dark:text-white/40 mb-6">Direct Impact Tiers</h4>
                                    {[
                                        { val: '$25', text: 'Emergency crisis supplies for one family' },
                                        { val: '$100', text: 'Emergency food and utility assistance' },
                                        { val: '$500', text: 'Two trauma therapy sessions for children' },
                                        { val: '$1,000', text: 'One month comprehensive family stabilization' },
                                        { val: '$10,000', text: 'Complete youth workforce pathway (training to placement)' },
                                        { val: '$100,000', text: 'Community stabilization infrastructure expansion' }
                                    ].map((impact, i) => (
                                        <div key={i} className="flex items-center justify-between p-4 bg-seed-bg dark:bg-seed-surface-dark rounded-xl border border-seed-text-primary/5 hover:border-seed-accent-green transition-all group">
                                            <span className="font-serif font-black text-xl text-seed-text-primary dark:text-white">{impact.val}</span>
                                            <span className="text-sm font-medium text-seed-text-secondary dark:text-seed-text-secondary-dark-theme group-hover:text-seed-accent-green transition-colors">{impact.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right: Donation Card */}
                            <div className="sticky top-32">
                                <div className="bg-seed-bg dark:bg-seed-surface-dark p-8 md:p-12 rounded-[3.5rem] shadow-2xl border border-seed-text-primary/5 dark:border-seed-border-dark relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-2 bg-seed-accent-green"></div>
                                    
                                    <div className="mb-10 text-center">
                                        <h3 className="text-3xl font-serif font-bold text-seed-text-primary dark:text-white">Secure Gift</h3>
                                        <p className="text-sm opacity-60 uppercase font-black tracking-widest mt-2">Fund the Architecture of Change</p>
                                    </div>

                                    {/* Toggle Once/Monthly */}
                                    <div className="flex p-1 bg-white dark:bg-seed-bg-dark rounded-xl border border-seed-text-primary/10 mb-8">
                                        <button 
                                            onClick={() => setFrequency('once')}
                                            className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${frequency === 'once' ? 'bg-seed-text-primary text-white shadow-lg' : 'text-seed-text-secondary/60 dark:text-white/40 hover:text-seed-text-primary'}`}
                                        >
                                            One-time
                                        </button>
                                        <button 
                                            onClick={() => setFrequency('monthly')}
                                            className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${frequency === 'monthly' ? 'bg-seed-accent-green text-seed-text-primary shadow-lg' : 'text-seed-text-secondary/60 dark:text-white/40 hover:text-seed-text-primary'}`}
                                        >
                                            Monthly Gift
                                        </button>
                                    </div>

                                    {/* Amount Grid */}
                                    <div className="grid grid-cols-3 gap-3 mb-8">
                                        {donationOptions.map(val => (
                                            <button 
                                                key={val}
                                                onClick={() => setAmount(val)}
                                                className={`py-4 rounded-xl border-2 transition-all font-serif font-bold text-xl ${amount === val ? 'bg-seed-accent-green/10 border-seed-accent-green text-seed-text-primary dark:text-seed-accent-green' : 'bg-white dark:bg-seed-bg-dark border-seed-text-primary/5 dark:border-seed-border-dark text-seed-text-secondary/60 dark:text-white/40 hover:border-seed-accent-green/30'}`}
                                            >
                                                ${val}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Custom Amount */}
                                    <div className="relative mb-10">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-serif font-bold text-seed-text-primary dark:text-seed-accent-green">$</div>
                                        <input 
                                            type="number" 
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                            placeholder="Custom Amount"
                                            className="w-full bg-white dark:bg-seed-bg-dark border-2 border-seed-text-primary/10 dark:border-seed-border-dark rounded-xl py-5 pl-10 pr-4 text-2xl font-serif font-bold text-seed-text-primary dark:text-white focus:border-seed-accent-green transition-all"
                                        />
                                    </div>

                                    {/* Dynamic Impact Display */}
                                    <div className="bg-seed-text-primary/5 dark:bg-white/5 p-6 rounded-2xl border-l-4 border-seed-accent-green mb-10">
                                        <h5 className="font-black text-[10px] uppercase tracking-widest text-seed-accent-green mb-2">Impact Highlight</h5>
                                        <p className="text-sm font-medium leading-relaxed italic opacity-80">
                                            "{getImpactText(amount)}"
                                        </p>
                                    </div>

                                    <button className="w-full py-6 bg-seed-text-primary dark:bg-seed-accent-green text-white dark:text-seed-text-primary font-black rounded-2xl text-xl shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 uppercase tracking-widest">
                                        Complete Secure Gift <ArrowRight size={24} />
                                    </button>

                                    <div className="mt-8 flex items-center justify-center gap-6 opacity-40 grayscale group">
                                        <Lock size={16} />
                                        <span className="text-[10px] font-black uppercase tracking-widest">Secure 256-bit Encryption</span>
                                        <div className="flex gap-2">
                                            <CreditCard size={16} />
                                            <Landmark size={16} />
                                        </div>
                                    </div>
                                    <p className="text-center text-[10px] uppercase tracking-widest font-black mt-6 opacity-40">Tax ID (EIN): 87-3344768</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 4: INSTITUTIONAL PARTNERS */}
                <section className="py-24 bg-seed-bg dark:bg-seed-surface-dark/30 border-y border-seed-text-primary/5">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                             <div className="order-2 lg:order-1 space-y-6">
                                <div className="p-8 bg-white dark:bg-seed-bg-dark rounded-[2.5rem] shadow-xl border border-seed-text-primary/5">
                                    <h4 className="text-xl font-serif font-bold text-seed-text-primary dark:text-white mb-6 uppercase tracking-tight">REPORTING & DATA RIGOR</h4>
                                    <ul className="space-y-4">
                                        {[
                                            'Quarterly outcomes reporting across 9 pillars',
                                            'Cost-benefit analysis of systems savings',
                                            'Longitudinal family and youth tracking',
                                            'Framework replication data & multi-jurisdiction insights',
                                            'Policy impact and legislative advocacy outcomes'
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex gap-4 items-start text-sm font-medium">
                                                <CheckCircle size={18} className="text-seed-accent-green flex-shrink-0" />
                                                <span className="opacity-80">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <h2 className="text-3xl lg:text-5xl font-serif font-bold text-seed-text-primary dark:text-white mb-8 leading-tight">
                                    Foundations & <br/> Institutional Partners
                                </h2>
                                <p className="text-xl text-seed-text-secondary dark:text-seed-text-secondary-dark-theme font-medium leading-relaxed mb-12">
                                    A Solution Group CDC operates with the transparency and reporting rigor of a national architecture. We provide comprehensive impact data for institutional investors.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <button onClick={() => onOpenContactModal('Request Annual Report')} className="flex items-center gap-2 bg-seed-text-primary text-white font-black px-8 py-4 rounded-xl text-[11px] uppercase tracking-widest hover:shadow-lg transition">
                                        <FileText size={16}/> Request Annual Report
                                    </button>
                                    <button onClick={() => onOpenContactModal('Request Impact Brief')} className="flex items-center gap-2 border border-seed-text-primary text-seed-text-primary font-black px-8 py-4 rounded-xl text-[11px] uppercase tracking-widest hover:bg-seed-bg transition">
                                        <TrendingUp size={16}/> Impact Data Brief
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 5: PLANNED GIVING */}
                <section className="py-24 bg-white dark:bg-seed-bg-dark border-b border-seed-text-primary/5">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-16 items-start">
                            <div>
                                <h2 className="text-3xl lg:text-5xl font-serif font-bold text-seed-text-primary dark:text-white mb-8 leading-tight">
                                    Planned Giving & <br/> Strategic Partnership
                                </h2>
                                <p className="text-xl text-seed-text-secondary dark:text-seed-text-secondary-dark-theme font-medium leading-relaxed mb-8">
                                    Interested in institutional partnerships, endowments, or legacy gifts? Our executive team provides direct consultation on:
                                </p>
                                <ul className="space-y-4 mb-10">
                                    {[
                                        'Multi-year sustainability commitments',
                                        'Capital project sponsorship (affordable housing)',
                                        'Bequest planning and estate gifts',
                                        'Corporate matching and employee giving structures',
                                        'Foundation program-related investments (PRIs)'
                                    ].map(item => (
                                        <li key={item} className="flex gap-4 items-center text-sm font-bold opacity-80">
                                            <ChevronRight size={16} className="text-seed-accent-green" /> {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="bg-seed-bg dark:bg-seed-surface-dark p-8 rounded-3xl border border-seed-text-primary/5">
                                    <p className="text-xs font-bold opacity-60 mb-4 uppercase tracking-widest">Executive Contact</p>
                                    <div className="space-y-2">
                                        <p className="font-serif font-bold text-xl text-seed-text-primary dark:text-white">William Darnell Jernigan IV</p>
                                        <p className="text-sm font-medium opacity-70">Founder & Executive Director</p>
                                        <div className="flex flex-col gap-1 pt-4">
                                            <div className="flex items-center gap-2 text-sm"><Phone size={14}/> (725) 267-3398</div>
                                            <div className="flex items-center gap-2 text-sm"><Mail size={14}/> darnell@asolutiongroup.com</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-seed-text-primary text-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden flex flex-col justify-center h-full">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-seed-accent-green opacity-10 rounded-bl-full"></div>
                                <Gift className="text-seed-accent-green mb-8" size={64} />
                                <h3 className="text-3xl font-serif font-bold mb-6">Request a Strategic Briefing</h3>
                                <p className="text-xl opacity-80 leading-relaxed mb-10">
                                    Let's discuss how your contribution can become part of the foundational architecture of community change.
                                </p>
                                <button onClick={() => onOpenContactModal('Planned Giving Briefing Request')} className="bg-seed-accent-green text-seed-text-primary font-black px-10 py-5 rounded-2xl text-lg hover:bg-white transition-all shadow-xl">
                                    REQUEST A BRIEFING
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 6: OTHER WAYS TO GIVE */}
                <section className="py-24 bg-seed-bg dark:bg-seed-surface-dark/30 border-y border-seed-text-primary/5">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-seed-text-primary dark:text-white mb-6 uppercase tracking-tight">Other Ways to Give</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                             <div className="bg-white dark:bg-seed-bg-dark p-8 rounded-3xl border border-seed-text-primary/5 flex flex-col">
                                <RefreshCw className="text-seed-accent-green mb-6" size={32} />
                                <h4 className="font-bold text-seed-text-primary dark:text-white text-sm mb-4 uppercase">Monthly Giving</h4>
                                <p className="text-xs opacity-70 leading-relaxed mb-6 flex-grow">Provide predictable support enabling long-term planning and stability.</p>
                                <button onClick={() => document.getElementById('donation-interface')?.scrollIntoView({ behavior: 'smooth' })} className="mt-auto text-seed-accent-green font-bold text-xs uppercase tracking-widest hover:underline flex items-center gap-2">Setup Monthly <ArrowRight size={14}/></button>
                             </div>
                             <div className="bg-white dark:bg-seed-bg-dark p-8 rounded-3xl border border-seed-text-primary/5 flex flex-col">
                                <Building2 className="text-seed-accent-green mb-6" size={32} />
                                <h4 className="font-bold text-seed-text-primary dark:text-white text-sm mb-4 uppercase">Corporate Gifts</h4>
                                <p className="text-xs opacity-70 leading-relaxed mb-6 flex-grow">Align your business with generational community impact initiatives.</p>
                                <button onClick={() => onOpenContactModal('Corporate Giving Inquiry')} className="mt-auto text-seed-accent-green font-bold text-xs uppercase tracking-widest hover:underline flex items-center gap-2">Contact Us <ArrowRight size={14}/></button>
                             </div>
                             <div className="bg-white dark:bg-seed-bg-dark p-8 rounded-3xl border border-seed-text-primary/5 flex flex-col">
                                <Users className="text-seed-accent-green mb-6" size={32} />
                                <h4 className="font-bold text-seed-text-primary dark:text-white text-sm mb-4 uppercase">Donor Advised Funds</h4>
                                <p className="text-xs opacity-70 leading-relaxed mb-6 flex-grow">Recommend grants directly to ASG CDC through your DAF.</p>
                                <button onClick={() => onOpenContactModal('DAF Inquiry')} className="mt-auto text-seed-accent-green font-bold text-xs uppercase tracking-widest hover:underline flex items-center gap-2">Request Info <ArrowRight size={14}/></button>
                             </div>
                             <div className="bg-white dark:bg-seed-bg-dark p-8 rounded-3xl border border-seed-text-primary/5 flex flex-col">
                                <Target className="text-seed-accent-green mb-6" size={32} />
                                <h4 className="font-bold text-seed-text-primary dark:text-white text-sm mb-4 uppercase">Appreciated Stock</h4>
                                <p className="text-xs opacity-70 leading-relaxed mb-6 flex-grow">Maximize tax benefits by donating stock directly to our mission.</p>
                                <button onClick={() => onOpenContactModal('Stock Donation Inquiry')} className="mt-auto text-seed-accent-green font-bold text-xs uppercase tracking-widest hover:underline flex items-center gap-2">Transfer Stock <ArrowRight size={14}/></button>
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
