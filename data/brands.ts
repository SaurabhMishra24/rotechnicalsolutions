export interface BrandItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  popularModels: string[];
  commonIssues: string[];
  solutions: string[];
  description: string;
  genuinePartsAvailable: boolean;
  warrantyPeriod: string;
  seoKeywords: string[];
}

export const BRANDS: BrandItem[] = [
  {
    id: 'kent',
    slug: 'kent',
    name: 'Kent',
    tagline: 'House of Purity - Kent RO Service & Repair',
    popularModels: ['Kent Grand Plus', 'Kent Pearl', 'Kent Prime TC', 'Kent Supreme', 'Kent Maxx', 'Kent Ultra Storage'],
    commonIssues: [
      'Filter change alarm (beep sound)',
      'UV Lamp failure error light',
      'Low purification speed or slow dripping water',
      'TDS controller valve leakage or misalignment',
      'Smps power adapter burnout'
    ],
    solutions: [
      'Original Kent UV Lamp replacement with Philips germicidal tubes',
      'Kent Spun & Carbon filter replacement with food-grade elements',
      'Digital TDS recalibration for zero bitterness',
      'Booster pump head seal repair and pressure tuning'
    ],
    description: 'RO Technical Solutions is Nagpur\'s trusted independent Kent RO service specialist. We bring 20+ years of expertise servicing Kent Mineral RO purifiers using 100% genuine Kent filters, UV lamps, and zero-leak connectors.',
    genuinePartsAvailable: true,
    warrantyPeriod: '90 Days Service Warranty',
    seoKeywords: ['Kent RO Repair Nagpur', 'Kent Service Center Nagpur', 'Kent Filter Price Nagpur', 'Kent AMC Nagpur']
  },
  {
    id: 'aquaguard',
    slug: 'aquaguard',
    name: 'Aquaguard / Eureka Forbes',
    tagline: 'Paani Ka Doctor - Aquaguard RO Repair Specialists',
    popularModels: ['Aquaguard Geneus', 'Aquaguard Enhance', 'Aquaguard Blaze', 'Aquaguard Ritz', 'Dr Aquaguard Compact'],
    commonIssues: [
      'Red indicator warning light ON',
      'Active Copper filter replacement reminder',
      'E-Boiling UV sensor error',
      'Motor pump humming but not pushing water',
      'Storage tank auto-shut off switch failure'
    ],
    solutions: [
      'Original Eureka Forbes compatible filter cartridge fitting',
      'Copper-Zinc mineral cartridge installation',
      'Electronic sensor resetting & PCB circuit board repair',
      'High-pressure solenoid valve replacement'
    ],
    description: 'Expert Aquaguard & Eureka Forbes water purifier repair in Nagpur. Our certified technicians carry authentic replacement cartridges, Active Copper modules, and UV lamps for quick doorstep restoration.',
    genuinePartsAvailable: true,
    warrantyPeriod: '90 Days Service Warranty',
    seoKeywords: ['Aquaguard Repair Nagpur', 'Aquaguard Service Near Me', 'Dr Aquaguard Technician Nagpur', 'Aquaguard Filter Replacement']
  },
  {
    id: 'ao-smith',
    slug: 'ao-smith',
    name: 'AO Smith',
    tagline: 'Advanced Water Purification Technology',
    popularModels: ['AO Smith Z9 Green', 'AO Smith X8', 'AO Smith Z8 Hot & Normal', 'AO Smith ProPlanet P6'],
    commonIssues: [
      'RO membrane filter change icon',
      'Hot water heater element not working',
      'Night assist light indicator blinking',
      'Waste water continuous discharge'
    ],
    solutions: [
      'Original SCM-Tech / ART (Advance Recovery Technology) membrane change',
      'Hot water tank heating coil & thermostat repair',
      '8-Stage filter overhaul & high-rejection membrane fitting'
    ],
    description: 'Specialized AO Smith RO repair in Nagpur & Vidarbha. We service premium hot water RO models, digital display indicators, and high-recovery green RO membranes with precision.',
    genuinePartsAvailable: true,
    warrantyPeriod: '90 Days Service Warranty',
    seoKeywords: ['AO Smith RO Service Nagpur', 'AO Smith Repair Nagpur', 'AO Smith Z9 Filter Price', 'AO Smith Technician Nagpur']
  },
  {
    id: 'pureit',
    slug: 'pureit',
    name: 'HUL Pureit',
    tagline: 'Pureit Water Purifiers Expert Care',
    popularModels: ['Pureit Ultima Mineral', 'Pureit Marvella', 'Pureit Copper RO', 'Pureit Classic G2', 'Pureit Vital Max'],
    commonIssues: [
      'GKK (Germkill Kit) red end-of-life indicator',
      'Water stopped flowing after GKK lock out',
      'Storage float valve stuck down',
      'Water leaking from bottom tray'
    ],
    solutions: [
      'Original HUL Pureit Germkill Kit (GKK) replacement',
      '6-Stage mineralizer & copper infusion filter fitting',
      'Auto-lock override and micro-processor PCB repair'
    ],
    description: 'Prompt HUL Pureit water purifier service across Nagpur. We supply and install genuine Pureit GKK (Germkill Kits), Copper filters, and power supplies at affordable pricing.',
    genuinePartsAvailable: true,
    warrantyPeriod: '90 Days Service Warranty',
    seoKeywords: ['Pureit Repair Nagpur', 'Pureit Service Center Nagpur', 'Pureit GKK Replacement Nagpur', 'Pureit Water Purifier Repair']
  },
  {
    id: 'livpure',
    slug: 'livpure',
    name: 'Livpure',
    tagline: 'Smart & Pure Water Purification',
    popularModels: ['Livpure Glo Star', 'Livpure Pep Plus', 'Livpure Zinger', 'Livpure Platino Plus', 'Livpure Bolt'],
    commonIssues: [
      'Smart touch panel buttons unresponsive',
      'Alkaline filter exhausted / sour water taste',
      'Low water pressure from storage tap',
      'Continuous beep alert from control unit'
    ],
    solutions: [
      'Alkaline ORP mineralizer cartridge installation',
      'Touch panel PCB unit replacement',
      'High-pressure 100 GPD booster pump overhaul'
    ],
    description: 'Reliable Livpure RO water purifier service in Nagpur. We handle smart RO models, touch panel controls, alkaline filter upgrades, and filter kit replacements.',
    genuinePartsAvailable: true,
    warrantyPeriod: '90 Days Service Warranty',
    seoKeywords: ['Livpure RO Service Nagpur', 'Livpure Repair Near Me', 'Livpure Filter Replacement', 'Livpure Technician Nagpur']
  },
  {
    id: 'blue-star',
    slug: 'blue-star',
    name: 'Blue Star',
    tagline: 'Commercial & Domestic Water Purifiers',
    popularModels: ['Blue Star Stella', 'Blue Star Aristo', 'Blue Star Majesto', 'Blue Star Excella', 'Commercial Cooler RO'],
    commonIssues: [
      'Chiller unit compressor not cooling water',
      'UV sterilization lamp error',
      'Water leakage from stainless steel tank',
      'High noise from internal booster pump'
    ],
    solutions: [
      'Compressor gas charging & cooling thermostat repair',
      'Stainless steel 304 food-grade tank sanitization',
      'Heavy duty commercial pump repair & filter cartridge fitting'
    ],
    description: 'Authorized quality repair for Blue Star residential RO purifiers and commercial water cooler RO plants in offices, colleges, and factories across Vidarbha.',
    genuinePartsAvailable: true,
    warrantyPeriod: '90 Days Service Warranty',
    seoKeywords: ['Blue Star RO Service Nagpur', 'Blue Star Water Cooler Repair', 'Blue Star Purifier Service', 'Blue Star AMC Nagpur']
  },
  {
    id: 'lg',
    slug: 'lg',
    name: 'LG',
    tagline: 'Dual Protection Stainless Steel RO',
    popularModels: ['LG WW180EP', 'LG WW140NP', 'LG WW150NP Dual Protection', 'LG PuriCare RO'],
    commonIssues: [
      'Digital display filter change alert',
      'Stainless steel tank UV sterilization light off',
      'Mineral Booster cartridge depletion',
      'Solenoid valve stuck shut'
    ],
    solutions: [
      'LG Stainless Steel tank hygienic UV-LED service',
      'Original LG multi-stage replacement cartridge fitting',
      'Digital circuit board repair & pressure calibration'
    ],
    description: 'Precision servicing for LG Dual Protection Stainless Steel RO purifiers in Nagpur. We specialize in hygienic tank maintenance, UV-LED sterilization checks, and original filter replacements.',
    genuinePartsAvailable: true,
    warrantyPeriod: '90 Days Service Warranty',
    seoKeywords: ['LG RO Service Nagpur', 'LG Water Purifier Repair', 'LG Purifier Filter Replacement', 'LG Service Technician Nagpur']
  },
  {
    id: 'whirlpool',
    slug: 'whirlpool',
    name: 'Whirlpool',
    tagline: 'Everyday Care Water Purification',
    popularModels: ['Whirlpool Minota', 'Whirlpool Pura', 'Whirlpool Destroyer', 'Whirlpool Supreme RO'],
    commonIssues: [
      'Auto-flush valve continuously draining water',
      'Low water recovery rate',
      'Filter housing hairline crack / water drip',
      'SMPS transformer failure'
    ],
    solutions: [
      'Auto-flush solenoid valve replacement',
      'Food-grade crack-resistant housing replacement',
      'Heavy duty 24V/36V SMPS power supply installation'
    ],
    description: 'Doorstep Whirlpool water purifier repair and AMC maintenance services in Nagpur. Expert troubleshooting of auto-flush mechanisms, electrical transformers, and membranes.',
    genuinePartsAvailable: true,
    warrantyPeriod: '90 Days Service Warranty',
    seoKeywords: ['Whirlpool RO Repair Nagpur', 'Whirlpool Purifier Service', 'Whirlpool Filter Price Nagpur', 'Whirlpool RO Technician']
  }
];
