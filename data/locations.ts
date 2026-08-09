export interface LocationItem {
  id: string;
  slug: string;
  name: string;
  type: 'city' | 'area';
  region: string;
  tagline: string;
  description: string;
  avgResponseTime: string;
  techniciansCount: number;
  happyCustomersCount: number;
  popularServices: string[];
  nearbyLandmarks: string[];
  geoCoords: { lat: number; lng: number };
  seoKeywords: string[];
}

export const LOCATIONS: LocationItem[] = [
  {
    id: 'nagpur-city',
    slug: 'nagpur',
    name: 'Nagpur City',
    type: 'city',
    region: 'Vidarbha',
    tagline: '24/7 Doorstep RO Water Purifier Repair & AMC Service in Nagpur',
    description: 'RO Technical Solutions is the #1 rated local RO repair and service provider in Nagpur. Operating 15+ mobile service units, our certified technicians reach any residence, hospital, office, or industrial unit across East, West, North, and South Nagpur within 30 to 45 minutes.',
    avgResponseTime: '30-45 Mins',
    techniciansCount: 35,
    happyCustomersCount: 12500,
    popularServices: ['Emergency RO Repair', 'Kent RO Service', 'Aquaguard Service', 'RO AMC Package', 'Borewell TDS Treatment'],
    nearbyLandmarks: ['Zero Mile', 'Futala Lake', 'Sitabuldi', 'MIHAN', 'Airport Wardha Road'],
    geoCoords: { lat: 21.1458, lng: 79.0882 },
    seoKeywords: ['RO Repair Nagpur', 'RO Service Nagpur', 'Kent RO Repair Nagpur', 'Aquaguard Repair Nagpur', 'Water Purifier Service Near Me Nagpur']
  },
  {
    id: 'dharampeth',
    slug: 'dharampeth',
    name: 'Dharampeth, Nagpur',
    type: 'area',
    region: 'West Nagpur',
    tagline: 'Express Doorstep RO Purifier Repair in Dharampeth & Ramdaspeth',
    description: 'Fast 30-minute doorstep water purifier technician dispatch for homes, clinics, and offices in Dharampeth, Gokulpeth, Shivaji Nagar, and Ramdaspeth. Genuine spare parts with 90-day warranty.',
    avgResponseTime: '30 Mins',
    techniciansCount: 8,
    happyCustomersCount: 2100,
    popularServices: ['Filter Replacement', 'Emergency Leak Repair', 'Aquaguard Active Copper Repair', 'AMC Plan'],
    nearbyLandmarks: ['Coffee House Square', 'GS College', 'Laxmi Nagar Square'],
    geoCoords: { lat: 21.1412, lng: 79.0664 },
    seoKeywords: ['RO Repair Dharampeth Nagpur', 'Water Purifier Service Dharampeth', 'Kent Repair Ramdaspeth']
  },
  {
    id: 'manish-nagar',
    slug: 'manish-nagar',
    name: 'Manish Nagar & Besa, Nagpur',
    type: 'area',
    region: 'South Nagpur',
    tagline: 'High TDS Borewell Water Specialist in Manish Nagar, Besa & Beltarodi',
    description: 'Manish Nagar and Besa areas experience high borewell TDS (500-1500+ PPM). We install heavy-duty USA TFC RO membranes and water softeners specially calibrated for local groundwater conditions.',
    avgResponseTime: '30 Mins',
    techniciansCount: 10,
    happyCustomersCount: 3400,
    popularServices: ['RO Membrane Replacement', 'Water Softener Repair', 'Borewell TDS Treatment', 'RO AMC'],
    nearbyLandmarks: ['Manish Nagar Railway Crossing', 'Besa Square', 'Beltarodi Road'],
    geoCoords: { lat: 21.0917, lng: 79.0831 },
    seoKeywords: ['RO Repair Manish Nagar', 'Besa RO Water Purifier Service', 'RO Membrane Change Beltarodi']
  },
  {
    id: 'sadar',
    slug: 'sadar',
    name: 'Sadar & Civil Lines, Nagpur',
    type: 'area',
    region: 'Central Nagpur',
    tagline: 'Corporate & Residential RO Maintenance in Sadar & Civil Lines',
    description: 'Dedicated RO technicians servicing corporate offices, government quarters, hospitals, and luxury residences in Sadar, Civil Lines, and Mount Road.',
    avgResponseTime: '30 Mins',
    techniciansCount: 6,
    happyCustomersCount: 1850,
    popularServices: ['Commercial RO Service', 'Office Water Cooler Service', 'Kent & AO Smith Repair', 'RO AMC'],
    nearbyLandmarks: ['High Court Nagpur', 'Sadar Flyover', 'Mount Road'],
    geoCoords: { lat: 21.1610, lng: 79.0805 },
    seoKeywords: ['RO Repair Sadar Nagpur', 'Civil Lines Water Purifier Maintenance', 'Commercial RO Service Sadar']
  },
  {
    id: 'wardha-road',
    slug: 'wardha-road',
    name: 'Wardha Road & Somalwada, Nagpur',
    type: 'area',
    region: 'South Nagpur',
    tagline: 'Rapid RO Service on Wardha Road, Somalwada & Airport Area',
    description: 'Immediate technician arrival along the main Wardha Road stretch including Somalwada, Chhatrapati Square, Ujjwal Nagar, and Airport metro station vicinity.',
    avgResponseTime: '25 Mins',
    techniciansCount: 9,
    happyCustomersCount: 2900,
    popularServices: ['Emergency RO Service', 'Filter Change', 'TDS Check', 'RO Uninstallation'],
    nearbyLandmarks: ['Chhatrapati Square', 'Airport Metro Station', 'Hotel Pride'],
    geoCoords: { lat: 21.1065, lng: 79.0689 },
    seoKeywords: ['RO Repair Wardha Road', 'Water Purifier Service Chhatrapati Square', 'Somalwada RO Technician']
  },
  {
    id: 'nandanvan',
    slug: 'nandanvan',
    name: 'Nandanvan & KDK College Area, Nagpur',
    type: 'area',
    region: 'East Nagpur',
    tagline: 'Affordable Household RO Repair in Nandanvan, Wathoda & Kharbi',
    description: 'Pocket-friendly RO maintenance, filter replacement, and emergency motor repair for apartments and homes across Nandanvan, Wathoda, and Kharbi road.',
    avgResponseTime: '35 Mins',
    techniciansCount: 7,
    happyCustomersCount: 2300,
    popularServices: ['Affordable RO Repair', 'Filter Replacement', 'Pureit GKK Change', 'Same Day Service'],
    nearbyLandmarks: ['KDK College of Engineering', 'Hasanbagh Square', 'Wathoda Ring Road'],
    geoCoords: { lat: 21.1324, lng: 79.1256 },
    seoKeywords: ['RO Repair Nandanvan Nagpur', 'Wathoda Water Purifier Service', 'Kharbi RO Service']
  },
  {
    id: 'mihan',
    slug: 'mihan',
    name: 'MIHAN & SEZ Area, Nagpur',
    type: 'area',
    region: 'Industrial Zone',
    tagline: 'Industrial & IT Park Commercial RO Maintenance in MIHAN',
    description: 'Expert industrial RO plant maintenance, 100 LPH+ water purification servicing, and residential township RO support in MIHAN IT Park and SEZ campus.',
    avgResponseTime: '40 Mins',
    techniciansCount: 5,
    happyCustomersCount: 1400,
    popularServices: ['Industrial RO Maintenance', 'Commercial RO Plant Service', 'Hospital & IT Park AMC'],
    nearbyLandmarks: ['TCS MIHAN', 'Infosys Campus', 'AIIMS Nagpur'],
    geoCoords: { lat: 21.0375, lng: 79.0321 },
    seoKeywords: ['Industrial RO Service MIHAN', 'Commercial RO Repair SEZ Nagpur', 'AIIMS Area RO Maintenance']
  },
  {
    id: 'wardha',
    slug: 'wardha',
    name: 'Wardha City',
    type: 'city',
    region: 'Vidarbha',
    tagline: 'Top Rated RO Purifier Service & AMC in Wardha & Sevagram',
    description: 'Expanding top quality water purifier services to Wardha city, Sevagram, and Sawangi medical hub. On-demand doorstep technicians with full OEM spares inventory.',
    avgResponseTime: '60 Mins',
    techniciansCount: 8,
    happyCustomersCount: 1950,
    popularServices: ['Kent RO Repair Wardha', 'Aquaguard Service Sevagram', 'Hospital Commercial RO', 'AMC Plan'],
    nearbyLandmarks: ['Sevagram Hospital', 'Wardha Railway Station', 'Sawangi Meghe Campus'],
    geoCoords: { lat: 20.7453, lng: 78.6022 },
    seoKeywords: ['RO Repair Wardha', 'Water Purifier Service Sevagram', 'Kent Service Wardha', 'RO AMC Wardha']
  },
  {
    id: 'amravati',
    slug: 'amravati',
    name: 'Amravati City',
    type: 'city',
    region: 'Vidarbha',
    tagline: 'Professional RO Water Purifier Repair & Maintenance in Amravati',
    description: 'Prompt service dispatch across Amravati city including Rajapeth, Badnera Road, Camp Area, and Gadge Nagar. Specialized borewell water treatment and commercial AMC.',
    avgResponseTime: '60 Mins',
    techniciansCount: 12,
    happyCustomersCount: 3100,
    popularServices: ['RO Repair Amravati', 'Kent Service Center Amravati', 'Commercial Plant Repair', 'Filter Change'],
    nearbyLandmarks: ['Rajapeth Square', 'HVPM Campus', 'Badnera Junction'],
    geoCoords: { lat: 20.9374, lng: 77.7796 },
    seoKeywords: ['RO Repair Amravati', 'Water Purifier Service Amravati', 'Kent RO Repair Amravati', 'Aquaguard Technician Amravati']
  },
  {
    id: 'chandrapur',
    slug: 'chandrapur',
    name: 'Chandrapur',
    type: 'city',
    region: 'Vidarbha',
    tagline: 'Industrial & Domestic RO Purification Solutions in Chandrapur',
    description: 'High hardness water purification specialist in Chandrapur industrial belt. Complete maintenance for homes, thermal power plant townships, and commercial spaces.',
    avgResponseTime: '60 Mins',
    techniciansCount: 7,
    happyCustomersCount: 1750,
    popularServices: ['Water Softener Repair', 'High TDS Membrane', 'Industrial RO Maintenance', 'Same Day Service'],
    nearbyLandmarks: ['Tadoba Gate', 'Thermal Power Station Township', 'Mul Road'],
    geoCoords: { lat: 19.9615, lng: 79.2961 },
    seoKeywords: ['RO Repair Chandrapur', 'Water Softener Service Chandrapur', 'Industrial RO Maintenance Chandrapur']
  },
  {
    id: 'yavatmal',
    slug: 'yavatmal',
    name: 'Yavatmal City',
    type: 'city',
    region: 'Vidarbha',
    tagline: 'Doorstep RO Purifier Repair & AMC Contract in Yavatmal',
    description: 'Complete RO water purifier repair, uninstallation, filter replacement, and annual maintenance contracts for households and commercial establishments in Yavatmal.',
    avgResponseTime: '90 Mins',
    techniciansCount: 5,
    happyCustomersCount: 1200,
    popularServices: ['RO Repair Yavatmal', 'Filter Replacement', 'Borewell TDS Control', 'RO AMC'],
    nearbyLandmarks: ['Dhamangaon Road', 'Bus Stand Area', 'Government Medical College'],
    geoCoords: { lat: 20.3888, lng: 78.1204 },
    seoKeywords: ['RO Repair Yavatmal', 'Water Purifier Service Yavatmal', 'Kent Repair Yavatmal']
  },
  {
    id: 'akola',
    slug: 'akola',
    name: 'Akola City',
    type: 'city',
    region: 'Vidarbha',
    tagline: 'Expert RO Water Purifier Technician Services in Akola',
    description: 'Doorstep technician visit for Kent, Aquaguard, Pureit, and AO Smith water purifiers in Akola. Guaranteed genuine spares, transparent pricing, and 90-day warranty.',
    avgResponseTime: '90 Mins',
    techniciansCount: 6,
    happyCustomersCount: 1550,
    popularServices: ['RO Service Akola', 'Aquaguard Repair Akola', 'Commercial RO Service', 'TDS Check'],
    nearbyLandmarks: ['Tower Square', 'Civil Lines Akola', 'Jowhar Nagar'],
    geoCoords: { lat: 20.7002, lng: 77.0082 },
    seoKeywords: ['RO Repair Akola', 'Water Purifier Technician Akola', 'Kent Service Center Akola']
  }
];
