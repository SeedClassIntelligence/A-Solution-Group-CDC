
import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { 
  Building2, 
  HeartHandshake, 
  Users2, 
  Stethoscope, 
  GraduationCap, 
  ArrowRight, 
  ShieldCheck, 
  Layers,
  MapPin,
  Clock,
  Rocket,
  Landmark,
  Target,
  BarChart3,
  HardHat,
  HeartPulse,
  Scale,
  Sparkles,
  Zap,
  Globe,
  Briefcase,
  Baby
} from 'lucide-react';

type StrategicEcosystemPageProps = {
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
  onNavigateToAdmin: () => void;
  onNavigateToEbook: () => void;
  userRole?: 'admin' | 'partner' | 'user';
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  onOpenContactModal: (title: string) => void;
  currentPage: string;
};

export const StrategicEcosystemPage: React.FC<StrategicEcosystemPageProps> = (props) => {
  return (
    <div className="bg-seed-bg dark:bg-seed-bg-dark text-seed-text-secondary dark:text-seed-text-secondary-dark-theme font-sans min-h-screen flex flex-col overflow-x-hidden">
      <Header {...props} mode="landing" />

      <main className="flex-grow">
        {/* Page 1: Hero Section */}
        <section className="relative py-24 lg:py-40 bg-[#0a1428] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-seed-accent-green rounded-full blur-[150px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-seed-accent-green rounded-full blur-[100px]"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
             <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-8">
                  <span className="inline-block px-4 py-1 rounded-full bg-seed-accent-green/20 text-seed-accent-green text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-seed-accent-green/30">
                    Whole Community Solutions
                  </span>
                  <h1 className="text-4xl lg:text-8xl font-serif font-bold leading-tight mb-8">
                    We are developers <br />
                    with a <span className="text-seed-accent-green italic">greater purpose.</span>
                  </h1>
                  <p className="text-2xl lg:text-3xl opacity-90 leading-relaxed font-medium mb-10 text-seed-accent-green italic">
                    "The development is the catalyst."
                  </p>
                  <p className="text-lg opacity-70 mb-10 max-w-2xl border-l border-seed-accent-green/30 pl-6">
                    A Solution Group CDC × KG Development Group × WCS Framework <br />
                    <span className="text-sm uppercase tracking-widest mt-2 block">Affordable Housing · Healthcare · Workforce · Community Transformation</span>
                  </p>
                </div>
                
                <div className="lg:col-span-4">
                  <div className="p-8 border border-seed-accent-green/30 bg-white/5 backdrop-blur-sm rounded-2xl flex flex-col gap-12">
                    <div className="text-center">
                      <p className="text-5xl font-serif font-bold text-seed-accent-green mb-1">9</p>
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60">WCS Pillars</p>
                    </div>
                    <div className="text-center">
                      <p className="text-5xl font-serif font-bold text-seed-accent-green mb-1">5</p>
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60">Entities</p>
                    </div>
                    <div className="text-center">
                      <p className="text-5xl font-serif font-bold text-seed-accent-green mb-1">8</p>
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60">Sectors</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl lg:text-5xl font-serif font-bold text-seed-accent-green mb-1 uppercase">National</p>
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60">Reach</p>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </section>

        {/* Page 2: Transformation Conditions */}
        <section className="py-24 bg-white dark:bg-seed-surface-dark border-b border-seed-text-primary/10">
          <div className="container mx-auto px-4">
            <div className="mb-20">
              <p className="text-xs font-black uppercase tracking-[0.5em] text-seed-accent-green mb-4">The Development is the Catalyst</p>
              <h2 className="text-3xl lg:text-6xl font-serif font-bold text-seed-text-primary dark:text-white leading-tight">
                KG Development Group doesn't build housing. <br />
                It builds the <span className="italic">conditions for transformation.</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="p-10 rounded-[2rem] bg-seed-text-primary text-white flex flex-col gap-6">
                <h3 className="text-2xl font-serif font-bold border-b border-white/10 pb-4">Residential housing</h3>
                <p className="opacity-80">Intergenerational, affordable, stable. Working families, seniors, foster youth. The foundation every other pillar builds on.</p>
              </div>
              <div className="p-10 rounded-[2rem] border border-seed-text-primary/10 bg-seed-bg dark:bg-seed-bg-dark flex flex-col gap-6">
                <h3 className="text-2xl font-serif font-bold border-b border-seed-text-primary/10 dark:border-white/10 pb-4">Digital health clinic</h3>
                <p className="opacity-70">Jamie's medical entity inside the campus. Primary care, HEDIS closure, CHW billing. Healthcare where members live.</p>
              </div>
              <div className="p-10 rounded-[2rem] border border-seed-text-primary/10 bg-seed-bg dark:bg-seed-bg-dark flex flex-col gap-6">
                <h3 className="text-2xl font-serif font-bold border-b border-seed-text-primary/10 dark:border-white/10 pb-4">Childcare center</h3>
                <p className="opacity-70">The upstream unlock. Without childcare, parents can't enter the workforce. Without workforce, families stay dependent.</p>
              </div>
              <div className="p-10 rounded-[2rem] border border-seed-text-primary/10 bg-seed-bg dark:bg-seed-bg-dark flex flex-col gap-6">
                <h3 className="text-2xl font-serif font-bold border-b border-seed-text-primary/10 dark:border-white/10 pb-4">Community rooms</h3>
                <p className="opacity-70">Financial literacy. Employer nights. Banking access. Health awareness. The civic infrastructure of the campus.</p>
              </div>
              <div className="p-10 rounded-[2rem] bg-seed-accent-green text-seed-text-primary flex flex-col gap-6">
                <h3 className="text-2xl font-serif font-bold border-b border-seed-text-primary/10 pb-4">Workforce training site</h3>
                <p className="opacity-90">The construction site is Stage 1 of the pipeline. Participants train on the project that will serve their community.</p>
              </div>
              <div className="p-10 rounded-[2rem] border border-seed-text-primary/10 bg-seed-bg dark:bg-seed-bg-dark flex flex-col gap-6">
                <h3 className="text-2xl font-serif font-bold border-b border-seed-text-primary/10 dark:border-white/10 pb-4">Five entities — one system</h3>
                <p className="opacity-70 font-medium">KG + ASG CDC + Jamie's clinic + MSO + IP LLC. Each distinct. All integrated. The development activates all five.</p>
              </div>
            </div>

            <div className="mt-16 p-8 bg-seed-bg dark:bg-seed-bg-dark rounded-2xl italic text-lg text-seed-text-secondary dark:text-seed-text-secondary-dark-theme border-l-4 border-seed-accent-green">
              "KG builds the campus. ASG CDC activates the people. Jamie's clinic delivers the healthcare. The WCS Framework governs all nine pillars. The development is not the product — it is what makes the product possible."
            </div>
          </div>
        </section>

        {/* Page 3: The Nine Pillars */}
        <section className="py-24 bg-seed-bg dark:bg-seed-bg-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <p className="text-xs font-black uppercase tracking-[0.5em] text-seed-accent-green mb-4">The Operating System</p>
              <h2 className="text-4xl lg:text-6xl font-serif font-bold text-seed-text-primary dark:text-white mb-6">The WCS Framework — Nine Pillars</h2>
              <p className="text-xl opacity-60">Not a program. An operating system for community transformation.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { n: "1", t: "Affordable Housing & Economic Dev.", d: "Stable housing as health infrastructure. Financial literacy. Homeownership pathways." },
                { n: "2", t: "Mental & Emotional Balance", d: "BH screening. Warm handoffs to therapists. Trauma-informed care. Peer support." },
                { n: "3", t: "Advanced Skills & Technology", d: "Skilled trades training. Digital literacy. Certification pathways. Tech access." },
                { n: "4", t: "Cultural Heritage & Activities", d: "Culturally competent care. Community identity honored. Trusted relationships built." },
                { n: "5", t: "Physical Health & Nutrition", d: "Primary care. Preventive screenings. Food security. Benefit activation." },
                { n: "6", t: "Education & Workforce Dev.", d: "Four-stage pipeline. Exposure → Employment. Medicaid exit documented." },
                { n: "7", t: "Environmental Sustainability", d: "Green workforce opportunities. Energy assistance. Utility cost reduction." },
                { n: "8", t: "Transportation & Connectivity", d: "Transport benefit activation. Medical access. Telehealth connectivity." },
                { n: "9", t: "Community Engagement", d: "Event convening. Financial literacy. Banking access. Community power built." }
              ].map((pillar, idx) => (
                <div key={idx} className="bg-white dark:bg-seed-surface-dark p-8 rounded-2xl border border-seed-text-primary/5 shadow-sm group hover:border-seed-accent-green transition-all">
                  <div className="flex items-start gap-6">
                    <span className="text-4xl font-serif font-bold text-seed-accent-green/30 group-hover:text-seed-accent-green transition-colors">{pillar.n}</span>
                    <div>
                      <h4 className="text-lg font-bold text-seed-text-primary dark:text-white mb-3">{pillar.t}</h4>
                      <p className="text-sm opacity-70 leading-relaxed">{pillar.d}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Page 4: Activation Point */}
        <section className="py-24 bg-white dark:bg-seed-surface-dark overflow-hidden relative">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-20">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.5em] text-seed-accent-green mb-4">The Activation Point</p>
                <h2 className="text-3xl lg:text-5xl font-serif font-bold text-seed-text-primary dark:text-white mb-8">One trusted relationship. <br />The entire system deployed behind it.</h2>
                <div className="space-y-12">
                  <div className="border-l-2 border-seed-accent-green pl-8">
                    <h4 className="text-xs font-black uppercase tracking-widest text-seed-accent-green mb-2">Tier 1 — Community Solutionologists</h4>
                    <p className="text-xl font-bold italic mb-2 text-seed-text-primary dark:text-white">CHWs · Peer mentors · Parent leaders</p>
                    <p className="opacity-70">The trusted first relationship. Activation point for the entire network.</p>
                  </div>
                  <div className="border-l-2 border-seed-accent-green pl-8">
                    <h4 className="text-xs font-black uppercase tracking-widest text-seed-accent-green mb-2">Tier 2 — Core Solutionologists</h4>
                    <p className="text-xl font-bold italic mb-2 text-seed-text-primary dark:text-white">Clinicians · Therapists · Legal advocates · Educators · Workforce specialists</p>
                    <p className="opacity-70">Licensed experts deployed by the CHW for each participant's specific needs.</p>
                  </div>
                  <div className="border-l-2 border-seed-accent-green pl-8">
                    <h4 className="text-xs font-black uppercase tracking-widest text-seed-accent-green mb-2">Tier 3 — Supporting Solutionologists</h4>
                    <p className="text-xl font-bold italic mb-2 text-seed-text-primary dark:text-white">Agency directors · Judges · School principals · Policy actors</p>
                    <p className="opacity-70">Systems-level change agents engaged when institutional action is required.</p>
                  </div>
                </div>
              </div>

              <div className="bg-seed-text-primary text-white p-12 rounded-[4rem] relative shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-seed-accent-green opacity-10 rounded-bl-full"></div>
                <p className="text-xs font-black uppercase tracking-[0.5em] text-seed-accent-green mb-8">The Hidden ROI — Value-Added Benefits</p>
                <h3 className="text-2xl lg:text-3xl font-serif font-bold italic mb-8">MCOs already paid for these benefits. Almost nobody is using them.</h3>
                <p className="text-lg opacity-80 leading-relaxed mb-8">
                  Most members carry a card they use twice a year — sick visit and prescription. The gym membership, OTC allowance, Costco membership, tutoring, prenatal support, meal delivery, transportation benefit — all sit unclaimed.
                </p>
                <div className="p-8 bg-white/5 rounded-3xl border border-white/10 mb-8">
                   <p className="text-xl font-bold text-seed-accent-green mb-4 leading-relaxed">
                     The CHW is the activation key to an investment the MCO already made.
                   </p>
                   <p className="text-sm opacity-70">
                     Every benefit activated is a dollar already spent — now producing an outcome instead of expiring. Quality scores rise. PMPM falls. No new MCO budget required.
                   </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pages 5-12: The Sector Grids */}
        <section className="py-24 bg-seed-bg dark:bg-seed-bg-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-6xl font-serif font-bold text-seed-text-primary dark:text-white mb-6 italic">Sector Solutions</h2>
              <p className="text-xl opacity-60">Architecting value for every stakeholder in the ecosystem.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {[
                {
                  sector: "Health Plans / MCOs",
                  title: "Your members have a card. The CHW is the key that unlocks it.",
                  problem: "Preventable ED visits driving PMPM above benchmark. HEDIS gaps accumulating. Value-added benefits paid for but sitting unclaimed. No clinical home inside the member's daily life.",
                  give: "250–300 attributed Medicaid members. Real-time HEDIS closure at every visit. Network-first referrals tracked to completion. CHW activating every benefit already in the plan.",
                  model: "Clinical Partner Integration at Advent → Digital Health Clinic + Childcare Center. Master Partnership Agreement: preferred MCO status at every future campus.",
                  receive: "$2M–$3.4M projected annual return vs. $1M investment. 2:1 to 3.4:1 ROI.",
                  entities: "Jamie's Medical Entity · ASG CDC · KG Development"
                },
                {
                  sector: "Real Estate & Housing",
                  title: "You build housing. We build the conditions that make it work.",
                  problem: "Affordable housing without integrated services produces buildings, not communities. LIHTC allocators award QAP scoring points for community services integration.",
                  give: "ASG CDC as genuine co-developer — not a checkbox. Unlocks LIHTC nonprofit set-asides, HUD program preferences, QAP scoring advantages. WCS Framework deployed from Day 1.",
                  model: "Co-Developer Agreement per campus. Master Partnership Framework for all future projects. ASG CDC qualifies your project for funding pools KG alone cannot access.",
                  receive: "LIHTC nonprofit set-aside credits. HUD 4%/9% bond advantages. CDBG/HOME eligibility. QAP scoring points. Better investor relationships.",
                  entities: "KG Development · ASG CDC · WCS Framework IP LLC"
                },
                {
                  sector: "Cities & Government",
                  title: "You fund programs that don't talk to each other. We built the system that connects them.",
                  problem: "Housing department, health department, workforce office, social services — separate silos, separate budgets. Residents navigate every system alone. Programs produce reports, not transformation.",
                  give: "An integrated community infrastructure across all nine WCS pillars simultaneously in one place, delivered through one trusted relationship.",
                  model: "CDBG, HOME, Choice Neighborhoods. DOL WIOA workforce contracts. Medicaid 1115 waiver grants. Economic development bond alignment.",
                  receive: "Documented population-level outcomes across every pillar. Reduced emergency service utilization. Growing tax base. A replicable model.",
                  entities: "ASG CDC · KG Development · WCS Framework"
                },
                {
                  sector: "Foundations & Philanthropy",
                  title: "You fund one pillar at a time. We built the system that integrates all nine.",
                  problem: "Community health grants, workforce grants, housing grants, early childhood grants — never connected. Grantees compete for the same population. Integration is missing.",
                  give: "A grantee that integrates every pillar of community wellbeing — and proves it with data. SDOH outcomes documented per person, per pillar, every quarter.",
                  model: "Direct grants to ASG CDC for CHW expansion, workforce pipeline, and health equity. Capital grants for clinic and childcare. Multi-year operating support.",
                  receive: "Proof that integration produces outcomes siloed programs cannot. A replicable model for every community in your portfolio.",
                  entities: "ASG CDC · WCS Framework · ASG Foundation"
                },
                {
                  sector: "Corporate / ESG",
                  title: "Your ESG commitments need documented outcomes. We deliver them.",
                  problem: "Corporate community investment programs are scrutinized for impact. Investors and regulators demand genuine transformation — not branding exercises.",
                  give: "Named community partner with ESG-attributable outcomes. CRA credit for qualifying investments. Direct access to skilled trades workforce pipeline graduates.",
                  model: "Pipeline stage engagement — fund readiness and apprenticeship. WCSN Tier 2 participation. Named partner community events.",
                  receive: "Documented social impact metrics for ESG reporting. New workforce talent pipeline. CRA credit. Genuine community purpose story.",
                  entities: "ASG CDC · WCS Health Management · KG Development"
                },
                {
                  sector: "Employers & Workforce",
                  title: "You need skilled workers. The community needs employment. The pipeline closes that gap.",
                  problem: "Skilled labor shortages. Workforce programs hand people a certificate and release them — that is not a pipeline, that is a handoff. Barriers cause dropout.",
                  give: "A four-stage pipeline that removes every barrier between a community member and your job opening — health, childcare, transportation, SDOH addressed.",
                  model: "Fund pipeline stages for your sector. Commit-to-hire for graduates. Receive CHW warm referrals of job-ready candidates.",
                  receive: "Workforce-ready, barrier-free pipeline graduates. Reduced training dropout. Diverse talent. Documented economic mobility outcomes.",
                  entities: "ASG CDC · KG Development · Jamie's Medical Entity"
                }
              ].map((solution, idx) => (
                <div key={idx} className="bg-white dark:bg-seed-surface-dark rounded-[3rem] p-10 shadow-xl border border-seed-text-primary/5 flex flex-col group hover:border-seed-accent-green transition-all">
                  <div className="flex justify-between items-start mb-8">
                    <span className="px-4 py-1 rounded-full bg-seed-accent-green/10 text-seed-accent-green text-[10px] font-black uppercase tracking-widest">{solution.sector}</span>
                    <BarChart3 size={24} className="text-seed-accent-green opacity-30" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-seed-text-primary dark:text-white mb-6 leading-tight">{solution.title}</h3>
                  <div className="space-y-6 flex-grow">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#e11d48] mb-2">The Problem</p>
                      <p className="text-sm opacity-70">{solution.problem}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-seed-accent-green mb-2">What we give you</p>
                      <p className="text-sm opacity-70">{solution.give}</p>
                    </div>
                    <div className="p-6 bg-seed-bg dark:bg-seed-bg-dark rounded-2xl border border-seed-text-primary/5">
                      <p className="text-[10px] font-black uppercase tracking-widest text-seed-text-primary dark:text-seed-accent-green mb-2">Partnership Model</p>
                      <p className="text-sm font-medium">{solution.model}</p>
                    </div>
                    <div className="border-t border-seed-text-primary/10 pt-4">
                      <p className="text-[10px] font-black uppercase tracking-widest text-seed-accent-green mb-1">What you receive</p>
                      <p className="text-lg font-serif font-bold text-seed-text-primary dark:text-white italic">{solution.receive}</p>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-seed-text-primary/5 flex items-center gap-3">
                    <Layers size={16} className="text-seed-accent-green" />
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-seed-text-secondary/50">{solution.entities}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Page 13: Advent Case Study */}
        <section className="py-24 bg-white dark:bg-seed-surface-dark">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-20 items-end mb-20">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.5em] text-seed-accent-green mb-4">Advent Case Study — Las Vegas, Nevada</p>
                <h2 className="text-4xl lg:text-7xl font-serif font-bold text-seed-text-primary dark:text-white leading-tight">3460 North Rancho Drive</h2>
                <p className="text-xl mt-6 opacity-70 italic font-medium">Construction July 2026 · Opens August 2027</p>
              </div>
              <div className="flex flex-col gap-4">
                <button className="bg-seed-text-primary dark:bg-seed-accent-green text-white dark:text-seed-text-primary font-black px-12 py-5 rounded-2xl hover:scale-105 transition-all text-xl shadow-2xl flex items-center gap-4">
                  Request Case Briefing <ArrowRight size={24} />
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-10 rounded-[3rem] bg-[#f8fafc] dark:bg-seed-bg-dark border-l-[12px] border-[#e11d48]">
                <h4 className="text-3xl font-serif font-bold mb-6">50 residential units</h4>
                <p className="text-lg opacity-70 leading-relaxed font-medium">
                  26 two-bedroom · 18 one-bedroom · 6 studios · 10 foster youth supportive units. The physical anchor of the campus.
                </p>
              </div>
              <div className="p-10 rounded-[3rem] bg-[#f8fafc] dark:bg-seed-bg-dark border-l-[12px] border-seed-accent-green">
                <h4 className="text-3xl font-serif font-bold mb-6">Digital Health Clinic</h4>
                <p className="text-lg opacity-70 leading-relaxed font-medium">
                  Jamie NP as credentialed PCP · HEDIS closure every visit. Direct access for all members.
                </p>
              </div>
              <div className="p-10 rounded-[3rem] bg-[#f8fafc] dark:bg-seed-bg-dark border-l-[12px] border-seed-accent-green">
                <h4 className="text-3xl font-serif font-bold mb-6">Workforce pipeline</h4>
                <p className="text-lg opacity-70 leading-relaxed font-medium">
                  100+ participants · activates NOW before groundbreaking · CHW assigned Day 1 to remove barriers.
                </p>
              </div>
              <div className="p-10 rounded-[3rem] bg-[#f8fafc] dark:bg-seed-bg-dark border-l-[12px] border-seed-accent-green">
                <h4 className="text-3xl font-serif font-bold mb-6">Childcare Center</h4>
                <p className="text-lg opacity-70 leading-relaxed font-medium">
                  CCDF · Head Start · workforce enablement upstream unlock. Integrating families from the start.
                </p>
              </div>
            </div>
            
            <div className="mt-12 grid md:grid-cols-2 gap-8">
               <div className="p-12 bg-seed-text-primary text-white rounded-[4rem]">
                  <p className="text-5xl font-serif font-bold text-seed-accent-green mb-4">250+</p>
                  <p className="text-xl font-bold italic opacity-80 uppercase tracking-widest text-white">Medicaid members</p>
                  <p className="mt-6 opacity-60">Attributed to the campus digital health clinic, driving real-time health outcomes.</p>
               </div>
               <div className="p-12 bg-seed-accent-green text-seed-text-primary rounded-[4rem]">
                  <p className="text-5xl font-serif font-bold mb-4">$2.8M - $5.0M</p>
                  <p className="text-xl font-bold italic opacity-80 uppercase tracking-widest">In annual revenue</p>
                  <p className="mt-6 opacity-60">Projected through integrated clinical, childcare, and service billing models.</p>
               </div>
            </div>
          </div>
        </section>

        {/* Page 14: National Scale */}
        <section className="py-24 bg-[#0a1428] text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <p className="text-xs font-black uppercase tracking-[0.5em] text-seed-accent-green mb-4">National Scale</p>
              <h2 className="text-4xl lg:text-7xl font-serif font-bold mb-8 italic">Advent is the proof of concept. <br />Every community is the market.</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {[
                { t: "Now — Advent, Las Vegas", d: "All five entities operational. 15 legal agreements. Outcomes documented before the building opens." },
                { t: "Milwaukee — foundation strategy", d: "Milwaukee entity provides grantmaking capital for multi-market expansion — bridge funding before Medicaid billing and development fees are operational." },
                { t: "Scale — WCS Framework nationally", d: "Every new campus, every national adopter generates royalty income. Every MCO partnership replicates Advent. The framework compounds with every community it enters." }
              ].map((item, idx) => (
                <div key={idx} className="p-10 border border-white/10 bg-white/5 rounded-[3rem] hover:border-seed-accent-green transition-all">
                  <h4 className="text-2xl font-bold text-seed-accent-green mb-6">{item.t}</h4>
                  <p className="text-lg opacity-70 leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-20 text-center">
              <p className="text-2xl lg:text-3xl font-serif italic text-seed-accent-green max-w-4xl mx-auto">
                "One operating system. Every community. Every sector. The WCS Framework is not a program. It is infrastructure."
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-seed-accent-green text-seed-text-primary text-center">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-4xl lg:text-6xl font-serif font-bold mb-8 italic">Deploy The Catalyst.</h2>
              <p className="text-xl lg:text-2xl font-bold mb-12 max-w-2xl mx-auto opacity-80">
                Partner with the movement that is architecting the soul of community transformation.
              </p>
              <button 
                onClick={() => props.onOpenContactModal('Strategic Briefing')}
                className="bg-seed-text-primary text-white font-black px-12 py-5 rounded-2xl hover:scale-105 transition-all text-xl shadow-2xl flex items-center gap-4 mx-auto"
              >
                  Contact Our Strategic Office <ArrowRight size={24} />
              </button>
            </div>
        </section>
      </main>

      <Footer {...props} />
    </div>
  );
};
