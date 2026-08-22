import React from 'react';
import { Scale, HeartPulse, Briefcase, GitBranchPlus, GraduationCap, Building2, Landmark, Handshake, Building, HardHat, Zap, PiggyBank, Users, HeartHandshake } from 'lucide-react';

export type CaseStudy = {
  category: string;
  title: string;
  description: string;
  prompt: string;
  Icon: React.ElementType;
  impact: string;
};

export const caseStudies: CaseStudy[] = [
  {
    category: "Housing Authorities",
    title: "From Shelter to Sovereign Communities",
    description: "Moving beyond property management to holistic community development by integrating economic engines directly into public housing. This model transforms static units into incubators for growth.",
    prompt: "Design a plan for a Housing Authority to integrate economic development, workforce training, and resident ownership models into their properties.",
    Icon: Building2,
    impact: "Transforms subsidized housing into dynamic economic hubs, reducing dependency and building intergenerational wealth for residents through cooperative ownership and on-site workforce pipelines.",
  },
  {
    category: "Real Estate Developers",
    title: "Equitable Development & Community Benefits",
    description: "Replacing gentrification with inclusive growth. This model utilizes Community Benefit Agreements (CBAs) to ensure large-scale developments provide tangible assets—like affordable commercial space and local hiring—to existing residents.",
    prompt: "Draft a Community Benefit Agreement strategy for a mixed-use development that prevents displacement and guarantees local business incubation space.",
    Icon: HardHat,
    impact: "Secures community buy-in, accelerates project approval timelines, and creates a sustainable tenant base by ensuring the existing neighborhood grows *with* the development rather than being displaced by it.",
  },
  {
    category: "Healthcare Systems",
    title: "Clinical Care to Community Health",
    description: "Extending the continuum of care beyond hospital walls using the 360-Degree Holistic Care framework. It integrates housing stabilization and nutrition directly into the treatment plan for chronic conditions.",
    prompt: "Develop a community health integration plan for a hospital system that utilizes Community Health Workers to address housing and nutrition needs.",
    Icon: HeartPulse,
    impact: "Drastically reduces emergency room readmissions and costs by proactively addressing the social determinants of health (housing, food, stress) before they manifest as acute medical crises.",
  },
  {
    category: "Justice Systems",
    title: "The Restorative Justice Ecosystem",
    description: "Replacing punitive cycles with restorative pathways using the Reentry Demonstration Framework. This system prioritizes 'Housing First' and immediate workforce connection to dismantle the pipeline to prison.",
    prompt: "Design a diversion and reentry ecosystem for a county justice system that prioritizes 'Housing First' and immediate workforce connection.",
    Icon: Scale,
    impact: "Dismantles the revolving door of recidivism by providing immediate stability and dignity, turning formerly incarcerated individuals into contributing community members and taxpayers rather than liabilities.",
  },
  {
    category: "Technology & Innovation",
    title: "Digital Sovereignty & Smart Access",
    description: "Moving beyond basic internet access to full digital ownership. This model establishes community-owned broadband networks and 'Smart Neighborhood' infrastructure managed by local residents.",
    prompt: "Create a proposal for a community-owned mesh network and digital literacy hub that empowers residents to manage their own digital infrastructure.",
    Icon: Zap,
    impact: "Closes the digital divide permanently, creates local high-tech jobs in network maintenance, and ensures data sovereignty for the community, preventing digital redlining.",
  },
  {
    category: "Education Systems",
    title: "Schools as Community Wellness Hubs",
    description: "Reimagining schools not just as centers of academic learning, but as anchors for family stability. This model co-locates health clinics, adult education, and food pantries directly within school buildings.",
    prompt: "Create a strategy to transform a school district into full-service community hubs that co-locate health clinics, adult education, and food pantries.",
    Icon: GraduationCap,
    impact: "Removes non-academic barriers to learning—such as hunger, trauma, and unstable housing—resulting in higher attendance, deeper student engagement, and stronger family units.",
  },
  {
    category: "Non-Profits & Coalitions",
    title: "Breaking Silos via Networked Impact",
    description: "Transitioning from competitive scarcity to collaborative abundance. This model unifies fragmented non-profits into a seamless service delivery network sharing data, resources, and referrals.",
    prompt: "Draft a collaborative network strategy for a coalition of non-profits to share data, resources, and referrals using the Solutionologist Network model.",
    Icon: HeartHandshake,
    impact: "Maximizes donor ROI and eliminates service gaps, providing clients with a seamless, 'no wrong door' experience where their needs are met holistically rather than piecemeal.",
  },
  {
    category: "Government & Municipalities",
    title: "Participatory Budgeting & Co-Governance",
    description: "Shifting from top-down administration to a model where residents have direct decision-making power over local resources. This enables neighborhoods to direct funds to where they are needed most.",
    prompt: "Outline a participatory governance model for a local municipality that gives neighborhood assemblies authority over development budgets.",
    Icon: Landmark,
    impact: "Restores trust in public institutions, ensures public funds target actual community needs, and cultivates a robust pipeline of local civic leaders committed to the common good.",
  },
  {
    category: "Finance & CDFIs",
    title: "Regenerative Capital & Local Wealth",
    description: "Redefining ROI to include social impact. This model helps Community Development Financial Institutions (CDFIs) design revolving loan funds that circulate capital within the neighborhood.",
    prompt: "Design a structure for a neighborhood revolving loan fund that supports local entrepreneurs and cooperative housing developments.",
    Icon: PiggyBank,
    impact: "Keeps capital circulating locally (the multiplier effect), makes funding accessible to historically excluded entrepreneurs, and insulates the local economy from external market shocks.",
  },
  {
    category: "Community Organizations",
    title: "Grassroots Resilience & Mutual Aid",
    description: "Formalizing informal support networks into robust safety nets. This model strengthens neighborhood associations to manage their own emergency response, food distribution, and conflict resolution.",
    prompt: "Develop a plan to formalize a neighborhood mutual aid network into a sustainable community organization with emergency response capabilities.",
    Icon: Users,
    impact: "Builds deep social capital and resilience, ensuring that when crises hit (economic or environmental), the community has the infrastructure to support itself immediately and effectively.",
  },
];