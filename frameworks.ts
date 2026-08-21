/**
 * Intellectual Property Notice: This framework is the original work and licensed intellectual
 * property of William Darnell Jernigan IV, Founder of A Solution Group CDC. All rights
 * reserved. Unauthorized reproduction, distribution, or derivative works are strictly
 * prohibited.
 */
import React from 'react';
import { Building2, HeartHandshake, HeartPulse, Zap, Palette, Recycle, Users, Scale, Handshake, DoorOpen, GitBranchPlus, Activity } from 'lucide-react';


export type Pillar = {
  id: number;
  name: string;
  Icon: React.ElementType;
  corePhilosophy: string;
  uniqueComponents: string[];
  implementationStrategies: string[];
};

export const wcsFrameworkPillars: Pillar[] = [
    {
        id: 1,
        name: 'Affordable Housing & Economic Development',
        Icon: Building2,
        corePhilosophy: 'Housing as a platform for economic mobility and community wealth building.',
        uniqueComponents: [
            'Resident-Centered Development Model: A proprietary approach that ensures community members become stakeholders rather than just beneficiaries',
            'Economic Ecosystem Integration: Connecting housing stability to entrepreneurship and wealth-building opportunities',
            'Transitional Housing Pathways: A graduated system moving from emergency shelter to permanent homeownership',
            'Community Land Trust Integration: Preserving affordability while building community assets',
            'Cooperative Business Incubation: Developing resident-owned enterprises within housing developments',
            'Financial Empowerment Curriculum: Comprehensive financial literacy tied to real estate and business development',
            'Intergenerational Wealth Transfer Planning: Ensuring economic benefits extend beyond initial residents',
        ],
        implementationStrategies: [
            'Mixed-income development with resident preference policies',
            'Workforce development programs embedded within housing communities',
            'Shared equity homeownership models',
            'Community-controlled commercial development',
            'Resident advisory councils with decision-making authority',
            'Cross-pillar programming spaces within housing developments',
        ],
    },
    {
        id: 2,
        name: 'Mental & Emotional Balance',
        Icon: HeartHandshake,
        corePhilosophy: 'Healing-centered approaches that address individual trauma within community context.',
        uniqueComponents: [
            'Trauma-Informed Community Design: Physical spaces and program structures that promote healing',
            'Peer-Led Healing Circles: Community members with lived experience leading recovery processes',
            'Intergenerational Trauma Interruption: Specific programming to break cycles of inherited trauma',
            'Cultural Healing Practices Integration: Incorporating traditional and community-specific healing modalities',
            'Collective Resilience Building: Moving beyond individual therapy to community-wide emotional wellness',
            'Crisis Response Network: Community-based support systems for mental health emergencies',
            'Emotional Intelligence Development: Age-appropriate programming from early childhood through elder care',
        ],
        implementationStrategies: [
            'Embedded mental health professionals within community programs',
            'Peer counselor certification and employment pathways',
            'Trauma-informed training for all community-facing staff',
            'Safe space creation and maintenance protocols',
            'Community healing events and ceremonies',
            'Mental health first aid certification for residents',
        ],
    },
    {
        id: 3,
        name: 'Health & Nutritional Balance',
        Icon: HeartPulse,
        corePhilosophy: 'Health equity through comprehensive, culturally responsive care and food sovereignty.',
        uniqueComponents: [
            'Food Sovereignty Development: Community-controlled food production and distribution systems',
            'Integrated Health Hubs: Co-located services addressing medical, dental, vision, and mental health',
            'Community Health Worker Networks: Trained residents providing health education and navigation',
            'Traditional Medicine Integration: Incorporating culturally relevant healing practices',
            'Environmental Health Advocacy: Addressing systemic health hazards affecting the community',
            'Preventive Care Focus: Emphasizing wellness and disease prevention over treatment alone',
            'Health Equity Data Tracking: Community-controlled health outcome monitoring',
        ],
        implementationStrategies: [
            'Mobile health clinics with wraparound services',
            'Community gardens with nutrition education programming',
            'Cooking classes featuring cultural foods and health benefits',
            'Health insurance enrollment and navigation support',
            'Chronic disease management support groups',
            'Community-based participatory research initiatives',
        ],
    },
    {
        id: 4,
        name: 'Advanced Skills & Technology',
        Icon: Zap,
        corePhilosophy: 'Technology as a tool for empowerment and economic advancement, not just access.',
        uniqueComponents: [
            'Digital Equity Ecosystem: Comprehensive approach to closing digital divides',
            'Future-Ready Skills Development: Training for emerging industries and technologies',
            'Community-Controlled Tech Infrastructure: Resident-managed broadband and device access',
            'Tech Entrepreneurship Incubation: Supporting community members in creating tech-based businesses',
            'Intergenerational Digital Literacy: Cross-age learning programs for technology skills',
            'Tech for Social Good Training: Using technology to address community challenges',
            'Industry Partnership Development: Direct connections to employment and advancement opportunities',
        ],
        implementationStrategies: [
            'Community-owned internet networks and device lending libraries',
            'Coding bootcamps with guaranteed employment pathways',
            'Senior-youth technology mentorship programs',
            'Tech repair and maintenance training programs',
            'Digital storytelling and media production workshops',
            'Online entrepreneurship development courses',
        ],
    },
    {
        id: 5,
        name: 'Cultural Heritage & Activities',
        Icon: Palette,
        corePhilosophy: 'Cultural preservation and celebration as foundations for community identity and pride.',
        uniqueComponents: [
            'Living Heritage Documentation: Active collection and preservation of community stories',
            'Intergenerational Cultural Transfer: Structured programs connecting elders with youth',
            'Cultural Arts as Economic Development: Creating revenue streams through cultural expression',
            'Sacred Space Creation: Establishing community-controlled spaces for cultural practice',
            'Cultural Healing Integration: Using arts and culture as therapeutic interventions',
            'Community Narrative Development: Collaborative storytelling to shape community identity',
            'Cultural Asset Mapping: Identifying and leveraging existing cultural resources',
        ],
        implementationStrategies: [
            'Oral history collection and digital archiving projects',
            'Community cultural festivals and celebrations',
            'Arts-based healing and therapy programs',
            'Cultural mentorship and apprenticeship programs',
            'Community-controlled cultural centers and performance spaces',
            'Cultural exchange programs with other communities',
        ],
    },
    {
        id: 6,
        name: 'Environmental Sustainability',
        Icon: Recycle,
        corePhilosophy: 'Environmental justice and community-controlled environmental stewardship.',
        uniqueComponents: [
            'Community-Led Environmental Monitoring: Residents tracking and addressing environmental hazards',
            'Green Infrastructure Development: Sustainable building and energy systems',
            'Climate Resilience Planning: Preparing communities for climate change impacts',
            'Environmental Justice Advocacy: Addressing systemic environmental racism',
            'Sustainable Community Design: Integrating environmental principles into all community development',
            'Green Economy Development: Creating jobs and businesses in environmental sectors',
            'Indigenous Environmental Practices: Incorporating traditional ecological knowledge',
        ],
        implementationStrategies: [
            'Community solar projects with resident ownership',
            'Urban agriculture and food forest development',
            'Green building certification and training programs',
            'Environmental health impact assessments',
            'Community-based climate adaptation planning',
            'Green job training and placement programs',
        ],
    },
    {
        id: 7,
        name: 'Civic Engagement & Leadership',
        Icon: Users,
        corePhilosophy: 'Community members as decision-makers and change agents in their own communities.',
        uniqueComponents: [
            'Participatory Democracy Structures: Formal mechanisms for community decision-making',
            'Leadership Pipeline Development: Systematic cultivation of community leaders',
            'Policy Advocacy Training: Empowering residents to influence systems change',
            'Community Organizing Integration: Building power to address root causes of community challenges',
            'Civic Education Programming: Comprehensive understanding of governmental and policy systems',
            'Electoral Engagement Strategies: Increasing community political participation',
            'Community Accountability Systems: Mechanisms for holding leaders and institutions accountable',
        ],
        implementationStrategies: [
            'Resident councils with budget authority',
            'Leadership development academies',
            'Policy analysis and advocacy training',
            'Voter registration and engagement campaigns',
            'Community forums and town halls',
            'Youth civic engagement programs',
        ],
    },
    {
        id: 8,
        name: 'Public Safety & Justice',
        Icon: Scale,
        corePhilosophy: 'Community-controlled public safety that emphasizes healing and accountability over punishment.',
        uniqueComponents: [
            'Restorative Justice Implementation: Community-based approaches to addressing harm',
            'Community Safety Strategies: Resident-led public safety initiatives',
            'Reentry Support Systems: Comprehensive support for formerly incarcerated individuals',
            'Violence Prevention Programming: Addressing root causes of community violence',
            'Legal Empowerment Education: Know-your-rights training and legal advocacy',
            'Community Mediation Services: Alternative dispute resolution mechanisms',
            'Trauma-Informed Safety Approaches: Recognizing trauma\'s impact on community safety',
        ],
        implementationStrategies: [
            'Community safety ambassadors and violence interrupters',
            'Restorative justice circles and healing processes',
            'Reentry support groups and mentorship programs',
            'Legal aid clinics and advocacy services',
            'Community policing reform initiatives',
            'Youth justice diversion programs',
        ],
    },
    {
        id: 9,
        name: 'Social Connectivity & Support Systems',
        Icon: Handshake,
        corePhilosophy: 'Strong social networks as the foundation for individual and community resilience.',
        uniqueComponents: [
            'Mutual Aid Network Development: Formal and informal support systems',
            'Intergenerational Programming: Connecting different age groups for mutual benefit',
            'Community Care Systems: Comprehensive support for vulnerable community members',
            'Social Capital Development: Building relationships and networks that provide opportunity',
            'Community Gathering Spaces: Physical and virtual spaces for connection',
            'Peer Support Networks: Residents supporting each other through shared experiences',
            'Community Communication Systems: Ensuring information flows effectively throughout the community',

        ],
        implementationStrategies: [
            'Community time banks and skill sharing programs',
            'Neighborhood support groups and circles',
            'Intergenerational mentorship programs',
            'Community communication platforms and newsletters',
            'Shared community spaces and programming',
            'Peer support group facilitation training',
        ],
    },
];

export const wcsTheoreticalUnderpinnings = {
    title: 'Unique Theoretical Underpinnings',
    constructs: [
        {
            name: 'Pillar Interdependence Theory',
            description: 'The recognition that community challenges cannot be addressed in isolation, requiring simultaneous activation across multiple domains to achieve lasting change.',
        },
        {
            name: 'Solutionologist Network Dynamics',
            description: 'A novel approach to community organizing that leverages existing expertise while creating new collaborative structures for maximum impact.',
        },
        {
            name: 'Whole Community Integration Model',
            description: 'A systems approach that ensures all community stakeholders are engaged as both beneficiaries and contributors to the solution ecosystem.',
        },
    ],
};

export const otherFrameworks: Pillar[] = [
    {
        id: 10,
        name: "360-Degree Holistic Care Model",
        Icon: Activity,
        corePhilosophy: "A patient-centered framework integrating physical, mental, emotional, and social determinants of health. It requires seamless coordination between clinical care, social services, housing support, and workforce development to treat the 'whole person' rather than just symptoms.",
        uniqueComponents: [
            "Integrated Care Hubs: Co-located medical, dental, and behavioral health services",
            "Social Determinants of Health Screening: Systematically identifying non-medical needs",
            "Collaborative Care Teams: Doctors, social workers, and CHWs working together",
            "Patient-Centered Medical Homes: Primary care as the hub of wellness",
            "Wrap-Around Support Services: Transportation, housing, and nutrition assistance"
        ],
        implementationStrategies: [
            "Establishing unified electronic health records across providers",
            "Cross-training staff in trauma-informed and holistic care",
            "Developing referral networks with community-based organizations",
            "Implementing integrated care plans that address social needs"
        ]
    },
    {
        id: 11,
        name: "Reentry Demonstration Framework",
        Icon: DoorOpen,
        corePhilosophy: "A specialized framework for supporting individuals returning from incarceration. It emphasizes immediate housing stabilization ('Housing First'), workforce reintegration, family reunification, and legal advocacy to reduce recidivism and ensure successful community reintegration.",
        uniqueComponents: [
            "Housing First Stabilization: Immediate access to permanent housing without preconditions",
            "Workforce Reintegration: Job readiness, training, and placement in friendly industries",
            "Family Reunification Services: Structured support for rebuilding family bonds",
            "Legal Advocacy & Expungement: Removing legal barriers to employment and housing",
            "Cognitive Behavioral Interventions: Addressing criminogenic thinking patterns"
        ],
        implementationStrategies: [
            "Partnerships with landlords for transitional and permanent housing",
            "Employer engagement strategies and tax credit navigation",
            "Mentorship programs with formerly incarcerated individuals",
            "Coordinated service delivery through reentry hubs"
        ]
    },
    {
        id: 12,
        name: "Sequential Intercept Model",
        Icon: GitBranchPlus,
        corePhilosophy: "A framework for identifying intervention points to prevent individuals with behavioral health disorders from entering or penetrating deeper into the criminal justice system.",
        uniqueComponents: [
            "Intercept 0: Community Services & Crisis Response",
            "Intercept 1: Law Enforcement & Emergency Services",
            "Intercept 2: Initial Detention & Initial Court Hearings",
            "Intercept 3: Jails & Courts",
            "Intercept 4: Reentry",
            "Intercept 5: Community Corrections"
        ],
        implementationStrategies: [
            "Crisis Intervention Team (CIT) training for police",
            "Establishment of mental health courts",
            "Jail diversion programs and pre-trial release services",
            "Data-sharing agreements between justice and health systems"
        ]
    }
];