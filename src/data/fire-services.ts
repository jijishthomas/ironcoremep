export interface FireService {
  slug: string;
  href: string;
  title: string;
  heroTitle: string;
  cardSummary: string;
  cardPoints: string[];
  heroDescription: string;
  overviewTitle: string;
  overview: string;
  whatWeProvide: string[];
  applications: string[];
  systemCoverage: string[];
  complianceAndMaintenance: string;
  benefits: string[];
  ctaTitle: string;
  ctaDescription: string;
  relatedSlugs: string[];
  metaTitle: string;
  metaDescription: string;
}

export const fireServices: FireService[] = [
  {
    slug: 'fire-alarm-systems',
    href: '/fire-alarm-systems',
    title: 'Fire Alarm Systems',
    heroTitle: 'Fire Alarm Systems',
    cardSummary:
      'Installation, testing, and maintenance of conventional and addressable fire alarm systems for dependable early detection and Civil Defence compliance.',
    cardPoints: [
      'Conventional and addressable systems',
      'Design, installation, testing, and commissioning',
      'Inspection and maintenance support'
    ],
    heroDescription:
      'We design, install, test, and maintain fire alarm systems that deliver early warning and support coordinated emergency response across occupied facilities.',
    overviewTitle: 'Reliable early detection for life safety',
    overview:
      'Our fire alarm scope covers new installations, upgrades, and maintenance support for commercial, residential, industrial, and specialized facilities. We plan system architecture around site risk, occupancy, and operational requirements.',
    whatWeProvide: [
      'Design and consultation for conventional and addressable fire alarm architecture',
      'Installation of control panels, detectors, manual call points, sounders, and visual alarms',
      'Testing and commissioning to verify signal flow, audibility, and zone/device response',
      'Integration support with emergency lighting and evacuation planning',
      'Routine inspections, fault rectification, and preventive maintenance programs'
    ],
    applications: [
      'Commercial towers and office floors',
      'Warehouses, factories, and industrial utilities',
      'Residential and mixed-use buildings',
      'Hotels, healthcare, and educational facilities'
    ],
    systemCoverage: [
      'Control panels and loop devices',
      'Smoke and heat detection network',
      'Manual call points and notification appliances',
      'Cause-and-effect sequence verification',
      'Interface coordination for evacuation procedures'
    ],
    complianceAndMaintenance:
      'Testing, commissioning, and maintenance activities are documented to support Civil Defence compliance workflows and periodic audit readiness.',
    benefits: [
      'Faster incident awareness and occupant notification',
      'Reduced operational risk through scheduled inspections',
      'Improved reliability through preventive servicing',
      'Clear documentation for compliance-oriented reviews'
    ],
    ctaTitle: 'Need dependable fire alarm coverage?',
    ctaDescription:
      'Request a site assessment for system design, installation, testing, and maintenance planning.',
    relatedSlugs: ['fire-suppression-systems', 'emergency-lighting-exit-signs', 'annual-maintenance-contracts'],
    metaTitle: 'Fire Alarm Systems | Design, Installation, Testing & Maintenance',
    metaDescription:
      'Professional fire alarm services including conventional and addressable systems, installation, testing, commissioning, and maintenance support.'
  },
  {
    slug: 'fire-suppression-systems',
    href: '/fire-suppression-systems',
    title: 'Fire Suppression Systems',
    heroTitle: 'Fire Suppression Systems',
    cardSummary:
      'Customized suppression solutions for critical environments, including FM-200, CO2, wet chemical, foam, dry chemical, and clean agent systems.',
    cardPoints: [
      'FM-200, Novec, and clean agent options',
      'CO2, foam, dry chemical, and wet chemical systems',
      'Risk-specific system design and commissioning'
    ],
    heroDescription:
      'Our suppression solutions are selected by hazard profile and protected asset type, with system design and execution aligned to facility operations.',
    overviewTitle: 'Specialized protection for high-risk areas',
    overview:
      'We deliver specialized suppression systems for environments where water-based firefighting is not suitable or where high-value equipment requires targeted protection. System selection is based on fire load, process risk, and occupancy constraints.',
    whatWeProvide: [
      'FM-200, Novec, and clean agent systems for data centers, control rooms, and sensitive spaces',
      'CO2 systems for defined industrial and utility applications',
      'Wet chemical systems for kitchen hood and commercial cooking lines',
      'Foam and dry chemical systems for industrial process and storage areas',
      'Design consultation, installation, testing, commissioning, and periodic maintenance'
    ],
    applications: [
      'Data centers and communication rooms',
      'Electrical and control rooms',
      'Commercial kitchens and food production areas',
      'Industrial plants and fuel-risk zones'
    ],
    systemCoverage: [
      'Specialized fire suppression system: FM-200, Novec, clean agent',
      'CO2 flooding and local application arrangements',
      'Kitchen hood wet chemical protection',
      'Foam and dry chemical suppression skids',
      'Discharge logic, abort/manual release, and alarm interfaces'
    ],
    complianceAndMaintenance:
      'System testing and maintenance are scheduled to preserve readiness, verify release pathways, and support compliance documentation.',
    benefits: [
      'Targeted control of high-consequence fire risks',
      'Protection for asset-sensitive environments',
      'Improved readiness through performance verification',
      'Reduced interruption risk with preventive maintenance'
    ],
    ctaTitle: 'Planning suppression for a critical area?',
    ctaDescription:
      'Talk to our team about risk-based system selection, installation, and long-term maintenance.',
    relatedSlugs: ['fire-alarm-systems', 'fire-pump-systems', 'civil-defence-approvals'],
    metaTitle: 'Fire Suppression Systems | FM-200, CO2, Wet Chemical, Foam & DCP',
    metaDescription:
      'Customized suppression systems for critical areas with FM-200, Novec, CO2, wet chemical, foam, and dry chemical solutions.'
  },
  {
    slug: 'firefighting-equipment',
    href: '/firefighting-equipment',
    title: 'Firefighting Equipment',
    heroTitle: 'Firefighting Equipment',
    cardSummary:
      'Supply, installation, and servicing of essential firefighting equipment for effective manual response and on-site preparedness.',
    cardPoints: [
      'Extinguishers: CO2, water, foam, DCP, wet chemical',
      'Hose reels, cabinets, hydrants, and landing valves',
      'Inspection, refilling, replacement, and maintenance'
    ],
    heroDescription:
      'We supply and maintain critical firefighting equipment that supports immediate on-site response and complements fixed protection systems.',
    overviewTitle: 'Essential equipment for first-response control',
    overview:
      'Our firefighting equipment scope combines supply, installation, and service support to keep manual response resources available, correctly positioned, and functionally ready.',
    whatWeProvide: [
      'Supply of fire safety products for project and replacement requirements',
      'Fire extinguisher systems: CO2, water, foam, DCP (Dry Chemical Powder), and wet chemical',
      'Fire hose reel and cabinet installation and servicing',
      'Landing valves, hydrants, nozzles, and accessory support',
      'Inspection, refilling/replacement, and preventive service scheduling'
    ],
    applications: [
      'Commercial and office buildings',
      'Warehouses and logistics sites',
      'Industrial process facilities',
      'Residential and mixed-use developments'
    ],
    systemCoverage: [
      'Fire hose reel, landing valve, and hydrant assemblies',
      'Portable and trolley extinguishing equipment',
      'Cabinets, signage, and deployment point coverage',
      'Readiness checks and service tagging workflows',
      'Coordination with pump-fed firefighting networks'
    ],
    complianceAndMaintenance:
      'Service intervals and equipment checks are managed to maintain operational readiness and support compliance-oriented records.',
    benefits: [
      'Faster manual intervention during early-stage incidents',
      'Reduced equipment failure risk through scheduled servicing',
      'Better preparedness across occupied and industrial spaces',
      'Practical lifecycle support for firefighting assets'
    ],
    ctaTitle: 'Need supply or servicing of firefighting equipment?',
    ctaDescription:
      'Request support for equipment selection, installation, inspection, and ongoing maintenance.',
    relatedSlugs: ['fire-pump-systems', 'fire-sprinkler-systems', 'annual-maintenance-contracts'],
    metaTitle: 'Firefighting Equipment | Extinguishers, Hose Reels, Hydrants & Valves',
    metaDescription:
      'Supply and maintenance of firefighting equipment including extinguishers, hose reels, hydrants, landing valves, and cabinets.'
  },
  {
    slug: 'fire-sprinkler-systems',
    href: '/fire-sprinkler-systems',
    title: 'Fire Sprinkler Systems',
    heroTitle: 'Fire Sprinkler Systems',
    cardSummary:
      'Automatic sprinkler systems designed and installed for reliable fire control and compliance with international and UAE standards.',
    cardPoints: [
      'Automatic sprinkler network design and installation',
      'Hydraulic and distribution coordination',
      'Testing, commissioning, and maintenance support'
    ],
    heroDescription:
      'We deliver automatic sprinkler systems that provide rapid response, dependable area coverage, and integration with pump and hydrant infrastructure.',
    overviewTitle: 'Automatic response for dependable area protection',
    overview:
      'Our sprinkler services are structured for commercial, industrial, warehouse, and large-facility requirements. Design, installation, and commissioning are coordinated to align with operational constraints and coverage objectives.',
    whatWeProvide: [
      'Automatic sprinkler system design and consultations',
      'Network installation for wet and relevant project-specific sprinkler arrangements',
      'Pipework, sectional control, and coverage zoning execution',
      'Testing and commissioning for pressure, flow, and discharge verification',
      'Preventive maintenance and performance checks'
    ],
    applications: [
      'Commercial complexes and high-occupancy facilities',
      'Warehouses and logistics hubs',
      'Industrial production and storage areas',
      'Residential towers and mixed-use properties'
    ],
    systemCoverage: [
      'Sprinkler network distribution and zoning',
      'Interface with fire pump system and hydrant network',
      'Landing valve and hose reel coordination where required',
      'Flow/pressure test points and commissioning protocols',
      'Integration with fire alarm interfaces'
    ],
    complianceAndMaintenance:
      'Design and execution are coordinated to reflect international and UAE standards, with routine testing and maintenance for system readiness.',
    benefits: [
      'Rapid automatic fire control at point of origin',
      'Consistent coverage for large protected zones',
      'Improved life safety and asset protection',
      'Sustained reliability through scheduled maintenance'
    ],
    ctaTitle: 'Planning a sprinkler network upgrade or new installation?',
    ctaDescription:
      'Get technical support for design, installation, testing, and long-term performance management.',
    relatedSlugs: ['fire-pump-systems', 'firefighting-equipment', 'civil-defence-approvals'],
    metaTitle: 'Fire Sprinkler Systems | Design, Installation, Testing & Commissioning',
    metaDescription:
      'Automatic sprinkler system services for commercial and industrial facilities with design, installation, testing, commissioning, and maintenance support.'
  },
  {
    slug: 'emergency-lighting-exit-signs',
    href: '/emergency-lighting-exit-signs',
    title: 'Emergency Lighting & Exit Signs',
    heroTitle: 'Emergency Lighting & Exit Signs',
    cardSummary:
      'Installation and maintenance of emergency lighting and exit sign systems to support safe evacuation during power loss and emergencies.',
    cardPoints: [
      'Emergency and exit light system installation',
      'Routine functionality and battery testing',
      'Evacuation-route visibility support'
    ],
    heroDescription:
      'We implement emergency lighting and illuminated exit signage systems that keep evacuation routes visible and improve occupant safety under abnormal conditions.',
    overviewTitle: 'Clear evacuation guidance when normal power fails',
    overview:
      'Emergency lighting and exit signs are a core life-safety layer for occupied facilities. We provide design guidance, installation, testing, and maintenance for dependable evacuation support.',
    whatWeProvide: [
      'Emergency and exit light system design and placement consultation',
      'Installation of illuminated exit signage and emergency luminaires',
      'Routine testing of functional operation and backup duration',
      'Maintenance and replacement support for failed units and batteries',
      'Alignment support with emergency evacuation plan requirements'
    ],
    applications: [
      'Commercial offices and retail spaces',
      'Hospitals, schools, and hospitality sites',
      'Warehouses and industrial occupancies',
      'Residential towers and shared facilities'
    ],
    systemCoverage: [
      'Escape route and exit point illumination',
      'Directional signage and critical junction visibility',
      'Backup power endurance verification',
      'Integration touchpoints with fire alarm activation logic',
      'Periodic inspection and maintenance records'
    ],
    complianceAndMaintenance:
      'Testing and maintenance schedules are structured to keep emergency lighting systems functional and inspection-ready.',
    benefits: [
      'Safer occupant movement during emergencies',
      'Improved visibility under smoke and outage conditions',
      'Reduced compliance gaps through routine testing',
      'Clear, maintainable evacuation route guidance'
    ],
    ctaTitle: 'Need a compliant emergency lighting plan?',
    ctaDescription:
      'Request support for design, installation, testing, and maintenance of emergency and exit lighting systems.',
    relatedSlugs: ['fire-alarm-systems', 'civil-defence-approvals', 'annual-maintenance-contracts'],
    metaTitle: 'Emergency Lighting & Exit Signs | Installation, Testing & Maintenance',
    metaDescription:
      'Emergency and exit lighting services including installation, battery testing, maintenance, and evacuation-path visibility support.'
  },
  {
    slug: 'annual-maintenance-contracts',
    href: '/annual-maintenance-contracts',
    title: 'Annual Maintenance Contracts (AMC)',
    heroTitle: 'Annual Maintenance Contracts (AMC)',
    cardSummary:
      'Preventive maintenance programs with regular inspections, performance testing, and reporting support for Civil Defence audit readiness.',
    cardPoints: [
      'Regular inspections and performance tests',
      'Preventive maintenance and rectification planning',
      'Detailed reports for compliance reviews'
    ],
    heroDescription:
      'Our AMC services keep fire safety systems reliable through scheduled inspections, preventive maintenance, and documented performance checks.',
    overviewTitle: 'Ongoing support for reliable system performance',
    overview:
      'AMC programs are structured around recurring technical checks and maintenance actions that reduce avoidable downtime and support readiness for audits and inspections.',
    whatWeProvide: [
      'Regular inspections for fire alarm, suppression, sprinkler, pump, and emergency lighting systems',
      'Performance tests and preventive maintenance aligned to system type',
      'Fault identification, rectification planning, and follow-up verification',
      'Detailed service reports for Civil Defence audit documentation',
      'Scheduled visit planning for predictable lifecycle support'
    ],
    applications: [
      'Commercial and mixed-use facilities',
      'Industrial plants and process buildings',
      'Hospitality, healthcare, and education sites',
      'Warehouses and logistics infrastructure'
    ],
    systemCoverage: [
      'Fire alarm inspection and function testing',
      'Suppression, sprinkler, and pump performance checks',
      'Emergency and exit light system testing',
      'Equipment servicing and readiness logs',
      'Testing and commissioning support during major upgrades'
    ],
    complianceAndMaintenance:
      'Maintenance reporting and inspection records are prepared to support compliance reviews and Civil Defence audit workflows.',
    benefits: [
      'Lower risk of unplanned system failures',
      'Improved response readiness across life-safety systems',
      'Predictable maintenance budgeting and scheduling',
      'Stronger audit preparedness through documented service history'
    ],
    ctaTitle: 'Need an AMC plan tailored to your facility?',
    ctaDescription:
      'Talk to our team about scheduled inspections, preventive maintenance, and reporting support.',
    relatedSlugs: ['fire-alarm-systems', 'fire-sprinkler-systems', 'civil-defence-approvals'],
    metaTitle: 'Annual Maintenance Contracts (AMC) | Fire Safety System Maintenance',
    metaDescription:
      'AMC services for fire safety systems including inspections, preventive maintenance, performance testing, and Civil Defence audit support.'
  },
  {
    slug: 'civil-defence-approvals',
    href: '/civil-defence-approvals',
    title: 'Civil Defence Approvals',
    heroTitle: 'Civil Defence Approvals',
    cardSummary:
      'End-to-end coordination for Civil Defence approvals, documentation, inspection readiness, and final certification process support.',
    cardPoints: [
      'Documentation and submission coordination',
      'Inspection readiness and follow-up support',
      'Installation-to-certification process guidance'
    ],
    heroDescription:
      'We coordinate approval workflows from project documentation and inspections through to final certification support, helping reduce avoidable delays.',
    overviewTitle: 'Structured support for approval workflows',
    overview:
      'Our Civil Defence approval service supports clients through compliance preparation, documentation management, inspection coordination, and post-inspection follow-up. The scope is execution and coordination support, without claiming authority affiliation.',
    whatWeProvide: [
      'Documentation preparation support for system submissions',
      'Coordination between project teams and inspection requirements',
      'Readiness checks before Civil Defence inspection visits',
      'Rectification planning support based on inspection feedback',
      'Final certification process coordination through project closure'
    ],
    applications: [
      'New construction handover stages',
      'Retrofit and system upgrade projects',
      'Fit-out and tenancy compliance requirements',
      'Operational facilities preparing for inspections'
    ],
    systemCoverage: [
      'Compliance-oriented planning across alarm, suppression, sprinkler, and pump systems',
      'Emergency and exit light documentation support',
      'Testing and commissioning record consolidation',
      'Inspection log and corrective action tracking',
      'Approval process communication support'
    ],
    complianceAndMaintenance:
      'Coordination includes compliance preparation, documentation quality checks, and inspection follow-up to keep approval progression structured and practical.',
    benefits: [
      'Reduced approval-cycle friction through organized coordination',
      'Better inspection readiness and response tracking',
      'Clearer documentation workflows for stakeholders',
      'Practical support from installation stage to final certification'
    ],
    ctaTitle: 'Need help with Civil Defence approval coordination?',
    ctaDescription:
      'Engage our team for documentation, inspection readiness, and final certification process support.',
    relatedSlugs: ['annual-maintenance-contracts', 'fire-alarm-systems', 'fire-sprinkler-systems'],
    metaTitle: 'Civil Defence Approvals | Documentation & Inspection Coordination',
    metaDescription:
      'Civil Defence approval support for fire safety systems, including documentation, inspection readiness, and certification process coordination.'
  },
  {
    slug: 'fire-pump-systems',
    href: '/fire-pump-systems',
    title: 'Fire Pump Systems',
    heroTitle: 'Fire Pump Systems',
    cardSummary:
      'Design, installation, testing, and maintenance of fire pump systems for dependable pressure and flow in firefighting networks.',
    cardPoints: [
      'Pump system design and installation',
      'Pressure, flow, and operational testing',
      'Support for sprinkler, hydrant, and hose reel networks'
    ],
    heroDescription:
      'We deliver fire pump systems that maintain the pressure and flow required for sprinkler and hydrant performance during critical incidents.',
    overviewTitle: 'Pressure reliability for active fire protection networks',
    overview:
      'Fire pump systems are central to networked fire protection. Our scope covers design consultation, installation, commissioning, and maintenance to support dependable water delivery.',
    whatWeProvide: [
      'Fire pump system design and consultations based on network demand',
      'Installation and integration with sprinkler and hydrant lines',
      'Control and instrumentation alignment for operational reliability',
      'Testing and commissioning for flow, pressure, and automatic start response',
      'Routine preventive maintenance and operational checks'
    ],
    applications: [
      'High-rise and commercial complexes',
      'Industrial sites and process plants',
      'Warehouses and logistics facilities',
      'Large mixed-use and institutional properties'
    ],
    systemCoverage: [
      'Pump and controller assemblies',
      'Automatic sprinkler system feed reliability',
      'Hydrant network, landing valve, and hose reel support',
      'Pressure stabilization and performance testing',
      'Commissioning and lifecycle maintenance reporting'
    ],
    complianceAndMaintenance:
      'Testing and maintenance routines are implemented to sustain pressure reliability and support inspection and compliance documentation.',
    benefits: [
      'Reliable water delivery for sprinkler and hydrant operation',
      'Improved network readiness during emergencies',
      'Reduced risk of pressure-related system underperformance',
      'Longer system service life through preventive maintenance'
    ],
    ctaTitle: 'Need support for a fire pump installation or upgrade?',
    ctaDescription:
      'Request a technical consultation for design, commissioning, and maintenance of your fire pump system.',
    relatedSlugs: ['fire-sprinkler-systems', 'firefighting-equipment', 'annual-maintenance-contracts'],
    metaTitle: 'Fire Pump Systems | Design, Installation, Testing & Maintenance',
    metaDescription:
      'Fire pump system services for sprinkler and hydrant networks including design, installation, commissioning, testing, and maintenance support.'
  }
];

export const fireServiceBySlug = Object.fromEntries(fireServices.map((service) => [service.slug, service])) as Record<string, FireService>;

export const homeFeaturedServiceSlugs = [
  'fire-alarm-systems',
  'fire-suppression-systems',
  'fire-sprinkler-systems',
  'fire-pump-systems',
  'firefighting-equipment',
  'annual-maintenance-contracts'
];

export const serviceDeliveryLifecycle = [
  {
    title: 'Design & Consultations',
    description: 'Risk-based planning, system selection guidance, and compliance-oriented design support.'
  },
  {
    title: 'Supply',
    description: 'Supply of fire safety products and approved system materials for project and replacement scope.'
  },
  {
    title: 'Installation',
    description: 'Structured installation of fire alarm, suppression, sprinkler, pump, and evacuation support systems.'
  },
  {
    title: 'Testing & Commissioning',
    description: 'Functional verification, performance checks, and commissioning documentation for handover and operation.'
  },
  {
    title: 'Maintenance & AMC',
    description: 'Preventive maintenance programs, inspections, and readiness checks to sustain system reliability.'
  },
  {
    title: 'Approval Support',
    description: 'Civil Defence documentation coordination, inspection readiness, and certification process support.'
  }
];

export const systemsCoverage = [
  'Fire Alarm System',
  'Automatic Sprinkler System',
  'Fire Pump System',
  'Fire Hose Reel, Landing Valve & Hydrant',
  'Fire Extinguisher System - CO2, Water, Foam, DCP, Wet Chemical',
  'Specialized Fire Suppression System - FM-200, Novec, Clean Agent',
  'Kitchen Hood',
  'Emergency & Exit Light System',
  'Fire Damper',
  'Fire Sealant',
  'Ventilation'
];

export const planningSupportPoints = [
  'Emergency evacuation plan support aligned to building layout and occupancy',
  'Compliance-oriented planning for installation and inspection stages',
  'System selection guidance based on risk profile and operating constraints',
  'Coordination of design, installation, and testing sequences'
];

export const relatedServiceLinks = (slugs: string[]) =>
  slugs
    .map((slug) => fireServiceBySlug[slug])
    .filter(Boolean)
    .map((service) => ({
      title: service.title,
      description: service.cardSummary,
      href: service.href
    }));
