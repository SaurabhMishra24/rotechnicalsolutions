export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  category: 'residential' | 'commercial' | 'industrial' | 'maintenance' | 'emergency';
  priceStarting: string;
  turnaround: string;
  warranty: string;
  keyFeatures: string[];
  commonSymptoms: string[];
  processSteps: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  seoKeywords: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'ro-repair',
    slug: 'ro-repair',
    title: 'Emergency RO Repair',
    shortDesc: 'Instant 45-minute response in Nagpur for water leakage, motor pump failure, low water flow, or unusual noise.',
    fullDesc: 'RO Technical Solutions provides same-day diagnostic and repair services for all domestic and commercial RO water purifiers in Nagpur and Vidarbha. Backed by 20+ years of technical experience, our certified technicians carry 100% genuine OEM spare parts directly to your doorstep.',
    iconName: 'Wrench',
    category: 'emergency',
    priceStarting: '₹299',
    turnaround: '30-45 Minutes',
    warranty: '90-Day Service Warranty',
    keyFeatures: [
      'Doorstep technician arrival within 45 minutes',
      'Diagnose multi-stage purification failures',
      '100% Genuine OEM spare parts with warranty',
      'Free TDS and digital water quality check',
      'Zero visit charge if service is booked'
    ],
    commonSymptoms: [
      'Water taste turned sour or salty',
      'Low water pressure or slow tank filling',
      'Continuous water leak from bottom or pipe',
      'Purifier making loud vibrating or humming noise',
      'Power indicator off / Booster pump not starting',
      'Foul odor in purified drinking water'
    ],
    processSteps: [
      { title: '1. Instant Call / WhatsApp', desc: 'Contact our 24/7 helpline. Technician assigned based on your location.' },
      { title: '2. Doorstep Diagnosis', desc: 'Detailed 12-point inspection including pressure gauge & TDS meter analysis.' },
      { title: '3. Upfront Fixed Quote', desc: 'No hidden charges. Clear itemized breakdown before starting repair.' },
      { title: '4. Precision Repair & Testing', desc: 'Replacement with genuine parts and post-repair quality check.' }
    ],
    faqs: [
      { question: 'How quickly can a technician reach my location in Nagpur?', answer: 'Our localized mobile service units reach any location in Nagpur (Dharampeth, Sadar, Wardha Road, Manish Nagar, etc.) within 30 to 45 minutes of booking.' },
      { question: 'Do you charge a visiting fee?', answer: 'Inspection fee is ₹199, which is completely waived off when you proceed with the repair work.' }
    ],
    seoKeywords: ['RO Repair Nagpur', 'Water Purifier Repair Near Me', 'Emergency RO Service Nagpur', 'Kent Repair Nagpur', 'Aquaguard Technician Nagpur']
  },
  {
    id: 'ro-installation',
    slug: 'ro-installation',
    title: 'RO Installation & Uninstallation',
    shortDesc: 'Professional wall mounting, inlet valve fitting, post-install TDS calibration, and leakage risk prevention.',
    fullDesc: 'Proper installation is essential for maximum RO membrane life and zero water leakage. Our certified engineers handle complete installation, wall mounting, electrical connection, pre-filter housing setup, and optimal TDS calibration for new or re-located purifiers.',
    iconName: 'Settings',
    category: 'residential',
    priceStarting: '₹399',
    turnaround: '60 Minutes',
    warranty: '180-Day Installation Guarantee',
    keyFeatures: [
      'Wall mounting with high-load heavy duty anchors',
      'Inlet diverter valve & pressure reduction valve fitting',
      'Zero-leak tube routing & clean cable management',
      'Post-installation water pressure & TDS tuning',
      'Complete uninstallation & safe packing during home shifting'
    ],
    commonSymptoms: [
      'Shifted to a new apartment or house in Nagpur',
      'Purchased a new RO purifier online or from store',
      'Improper wall mounting causing purifier vibration',
      'Water leaking from inlet tap adapter'
    ],
    processSteps: [
      { title: '1. Site & Water Pressure Check', desc: 'We verify water input pressure (PSI) and select the optimal wall location.' },
      { title: '2. Precision Drilling & Mounting', desc: 'Secure heavy-duty wall anchors to prevent accidental detachment.' },
      { title: '3. Plumbing & Electrical Connection', desc: 'Leak-proof food-grade tubing connection with stainless steel diverter.' },
      { title: '4. TDS Calibration & Sanitation', desc: 'Flush initial water batch and set TDS to health-recommended levels (80-150 PPM).' }
    ],
    faqs: [
      { question: 'What is included in the installation service?', answer: 'Installation includes wall drilling, mounting, plumbing inlet connections, food-grade tubing setup, TDS setting, and initial system flush.' },
      { question: 'Do you provide spare fittings if needed?', answer: 'Yes, our technicians carry heavy-duty diverters, pressure valves, Teflon tapes, and food-grade tubes.' }
    ],
    seoKeywords: ['RO Installation Nagpur', 'Water Purifier Installation Near Me', 'RO Uninstallation Service Nagpur', 'Kent Installation Nagpur']
  },
  {
    id: 'ro-amc',
    slug: 'ro-amc',
    title: 'Annual Maintenance Contract (AMC)',
    shortDesc: 'Comprehensive 1-Year coverage with unlimited emergency calls, free filter changes, membrane cover, and zero labor fees.',
    fullDesc: 'Protect your family round the year with RO Technical Solutions AMC Plans. Avoid unexpected repair expenses with scheduled quarterly preventive maintenance, free spare replacement (Sediment, Carbon, UV, UF, RO Membrane), and priority emergency breakdown support.',
    iconName: 'ShieldCheck',
    category: 'maintenance',
    priceStarting: '₹2,499 / Year',
    turnaround: 'Scheduled 4x Visits / Year',
    warranty: '100% Comprehensive Coverage',
    keyFeatures: [
      '4 Free preventive maintenance visits per year',
      'Free replacement of Sediment Filter, Carbon Filter & RO Membrane',
      'Unlimited emergency breakdown repair visits',
      'Free replacement of electrical parts (SMPS, Solenoid Valve, Pump)',
      'Free sanitization & tank descaling'
    ],
    commonSymptoms: [
      'Purifier requires filter changes every few months',
      'Frequent motor or electrical component burnouts',
      'Want fixed annual budget for clean water without high bills',
      'Forget maintenance dates and need automated service reminders'
    ],
    processSteps: [
      { title: '1. Water Quality & Purifier Audit', desc: 'Technician checks current filter condition and raw water TDS.' },
      { title: '2. Plan Selection & Registration', desc: 'Choose Basic, Gold, or Platinum AMC package suited for your household.' },
      { title: '3. Initial Comprehensive Servicing', desc: 'Complete filter overhaul and replacement included in plan onset.' },
      { title: '4. Automated Reminder & Visits', desc: 'We notify you every 3 months for regular scheduled tune-ups.' }
    ],
    faqs: [
      { question: 'Does AMC cover RO Membrane replacement?', answer: 'Yes! Gold and Platinum AMC plans include 100% free RO membrane replacement whenever required.' },
      { question: 'Is labor charged extra during AMC repair calls?', answer: 'No, all repair labor visits and service charges are 100% covered under the annual contract.' }
    ],
    seoKeywords: ['RO AMC Nagpur', 'RO Maintenance Contract Nagpur', 'Kent AMC Nagpur', 'Aquaguard Annual Contract', 'RO Maintenance Plan Nagpur']
  },
  {
    id: 'filter-replacement',
    slug: 'filter-replacement',
    title: 'RO Filter Replacement',
    shortDesc: 'High-density spun sediment filters, activated carbon blocks, UV lamp & UF membrane replacement for pure taste.',
    fullDesc: 'Clogged filters reduce water output and compromise water safety. We install high-efficiency 5-micron sediment filters, silver-impregnated coconut shell carbon filters, and UV sterilization tubes that trap rust, sand, chlorine, pesticides, and organic impurities.',
    iconName: 'Filter',
    category: 'residential',
    priceStarting: '₹499',
    turnaround: '30 Minutes',
    warranty: '6 Months Filter Warranty',
    keyFeatures: [
      'Food-grade 5-micron spun sediment cartridge',
      'High Iodine coconut shell activated carbon filter',
      'Eliminates foul smell, chlorine, rust, dirt, and heavy metals',
      'Philips/Osram high-intensity UV lamp replacement',
      'Improves water flow rate & extends RO membrane life'
    ],
    commonSymptoms: [
      'Bad taste or odor in drinking water',
      'Muddy or yellowish tint in stored water tank',
      'Water flow rate slowed down significantly',
      'Purifier filter light indicator glowing red'
    ],
    processSteps: [
      { title: '1. Filter Flushing & Audit', desc: 'We measure input raw water turbidity and pressure drops across filters.' },
      { title: '2. Housing Cleaning & Sanitization', desc: 'Sterilize filter bowls to kill bacteria and mold buildup.' },
      { title: '3. Original Filter Installation', desc: 'Fit genuine 100% sealed food-grade filter cartridges.' },
      { title: '4. Water Sanitization Test', desc: 'Flush first 5 liters and verify zero sediment passage.' }
    ],
    faqs: [
      { question: 'How often should RO filters be replaced?', answer: 'Sediment and Pre-Carbon filters should be replaced every 6 to 9 months depending on water quality in your Nagpur area.' },
      { question: 'Are replacement filters original OEM parts?', answer: 'Yes, we use certified high-grade food-grade filters compatible with Kent, Aquaguard, Pureit, and all major brands.' }
    ],
    seoKeywords: ['RO Filter Replacement Nagpur', 'Kent Filter Price Nagpur', 'Aquaguard Carbon Filter Nagpur', 'Water Purifier Filter Change Near Me']
  },
  {
    id: 'membrane-replacement',
    slug: 'membrane-replacement',
    title: 'RO Membrane Replacement',
    shortDesc: '75-100 GPD high-rejection Thin Film Composite (TFC) membrane installation for high TDS borewell & municipal water.',
    fullDesc: 'The RO membrane is the heart of your water purifier. When TDS climbs above safe limits (150+ PPM), our engineers install original USA Dow Filmtec, Toray, or CSM high-rejection TFC membranes that remove up to 99.8% of dissolved salts, lead, arsenic, nitrate, and heavy metals.',
    iconName: 'Disc',
    category: 'residential',
    priceStarting: '₹1,299',
    turnaround: '45 Minutes',
    warranty: '1 Year Performance Guarantee',
    keyFeatures: [
      'High rejection rate (98.5% - 99.8% TDS reduction)',
      '75 GPD / 100 GPD / 300 GPD Graphene & TFC technology',
      'Effective for borewell water TDS up to 3000 PPM',
      'Auto-flushing valve setup to prevent scaling',
      'Comes with 12 months full warranty'
    ],
    commonSymptoms: [
      'Drinking water tastes heavy, bitter, or excessively salty',
      'Digital TDS check shows reading over 250 PPM',
      'Reject water pipe flowing constantly without filling storage tank',
      'White scale formation on boiling water kettles or glasses'
    ],
    processSteps: [
      { title: '1. Digital TDS & Pressure Analysis', desc: 'We test raw water vs purified water TDS levels using calibrated meters.' },
      { title: '2. FR (Flow Restrictor) Replacement', desc: 'We replace the Flow Restrictor (FR) alongside the membrane to prevent premature clogging.' },
      { title: '3. Membrane Housing Sterilization', desc: 'Thorough chemical flushing of the housing container.' },
      { title: '4. Final TDS Setting & Mineral Balance', desc: 'Set output TDS precisely to 80 - 140 PPM for optimal mineral retention.' }
    ],
    faqs: [
      { question: 'What is the life of an RO membrane in Nagpur?', answer: 'In Nagpur areas with high ground TDS (like Besa, Manish Nagar, Wardha Road), an RO membrane typically lasts 1.5 to 2 years.' },
      { question: 'Why does my water taste bitter after membrane change?', answer: 'Bitterness happens if TDS drops too low (below 50 PPM). Our technicians adjust the TDS modulator to ensure sweet, mineral-rich taste.' }
    ],
    seoKeywords: ['RO Membrane Replacement Nagpur', 'Dow Filmtec Membrane Nagpur', 'TDS Reduction Service Nagpur', 'RO Purifier Membrane Price']
  },
  {
    id: 'commercial-ro-service',
    slug: 'commercial-ro-service',
    title: 'Commercial RO Plant Service',
    shortDesc: '50 LPH to 1000 LPH commercial water purification maintenance for offices, hospitals, restaurants, hotels & schools.',
    fullDesc: 'Commercial RO plants require specialized industrial engineering. We provide emergency repairs, sand/carbon filter backwashing, high-pressure pump servicing, dosing pump recalibration, and CIP (Clean-in-Place) membrane descaling for commercial establishments across Vidarbha.',
    iconName: 'Building2',
    category: 'commercial',
    priceStarting: '₹1,499',
    turnaround: 'Same Day / Scheduled',
    warranty: '180-Day Industrial Warranty',
    keyFeatures: [
      'Servicing for 50, 100, 250, 500 & 1000 LPH commercial plants',
      'Multi-port valve backwashing & media replacement (MGF & ACF)',
      'High-pressure vertical pump (CNP / Shakti) mechanical seal repair',
      'CIP (Clean In Place) chemical membrane cleaning',
      'Antiscalant dosing pump calibration & RO controller troubleshooting'
    ],
    commonSymptoms: [
      'Commercial plant output dropped below capacity',
      'High pressure pump tripping or overheating',
      'Conductivity meter showing high mineral contamination',
      'Frequent tripping of automatic water level float switches'
    ],
    processSteps: [
      { title: '1. On-Site System Audit', desc: 'Detailed assessment of raw water pump, pre-treatment vessels, and membrane array.' },
      { title: '2. Media Backwashing & CIP Flushing', desc: 'Clean quartz sand and carbon beds; run anti-scalant CIP flush.' },
      { title: '3. Electrical & Mechanical Overhaul', desc: 'Inspect panel boards, pressure switches, and pump impellers.' },
      { title: '4. Water Purity Certification', desc: 'Provide digital purity test report for food safety & NABH hospital compliance.' }
    ],
    faqs: [
      { question: 'Do you offer commercial AMC contracts for hospitals & schools?', answer: 'Yes, we provide customizable commercial AMC contracts including monthly preventive maintenance and emergency breakdown SLAs.' },
      { question: 'Can you service custom-built commercial RO plants?', answer: 'Yes, our senior engineers have 20+ years experience servicing custom panels, CNP pumps, and multi-membrane arrays.' }
    ],
    seoKeywords: ['Commercial RO Service Nagpur', '50 LPH RO Repair Nagpur', 'Industrial Water Purifier Service Nagpur', 'Hospital RO Maintenance Vidarbha']
  },
  {
    id: 'industrial-ro-service',
    slug: 'industrial-ro-service',
    title: 'Industrial RO Plant Maintenance',
    shortDesc: 'Heavy-duty 2000 LPH+ industrial water filtration systems, EDI plants, and boiler feed water purification solutions.',
    fullDesc: 'Industrial manufacturing units, pharma plants, textile mills, and bottling facilities rely on RO Technical Solutions for robust industrial RO maintenance. We manage high TDS brackish water treatment, zero liquid discharge (ZLD) support, and PLC panel automation.',
    iconName: 'Factory',
    category: 'industrial',
    priceStarting: 'Custom Quote',
    turnaround: 'Immediate Dispatch',
    warranty: 'Industrial Service SLA',
    keyFeatures: [
      'Heavy industrial plant maintenance (2000 LPH to 10,000 LPH+)',
      'FRP vessel media re-bedding (Anthracite, Sand, Carbon, Softener Resin)',
      '4040 & 8040 industrial RO membrane chemical washing',
      'PLC control panel debugging & sensor calibration',
      'Scheduled preventive shutdown maintenance'
    ],
    commonSymptoms: [
      'High differential pressure across industrial membranes',
      'Boiler feed water purity failing conductivity standards',
      'Automated PLC controller throwing pressure error codes',
      'Resin exhaustion in industrial water softeners'
    ],
    processSteps: [
      { title: '1. Engineer Inspection', desc: 'Senior industrial process engineer inspects flow rates, pressure metrics, and chemistry.' },
      { title: '2. Custom Maintenance Protocol', desc: 'Deploy specialized chemical cleaning rigs and media replacement crews.' },
      { title: '3. Membrane & Vessel Servicing', desc: 'Perform multi-stage CIP descaling and replace worn O-rings & gaskets.' },
      { title: '4. Quality & Compliance Signoff', desc: 'Verify output micro-siemens/cm conductivity and provide operational logbook.' }
    ],
    faqs: [
      { question: 'What regions do you cover for industrial RO servicing?', answer: 'We cover the entire Vidarbha industrial belt including Nagpur (Butibori, Hingna), Wardha, Chandrapur, Amravati, and Akola.' }
    ],
    seoKeywords: ['Industrial RO Maintenance Nagpur', '8040 Membrane CIP Cleaning Vidarbha', 'Butibori Industrial RO Service', 'Boiler Water RO Service']
  },
  {
    id: 'water-softener-service',
    slug: 'water-softener-service',
    title: 'Water Softener Repair & Salt Regeneration',
    shortDesc: 'Hard water treatment for homes, villas & commercial buildings. Resin replacement, control valve repair & salt top-ups.',
    fullDesc: 'Hard water in Nagpur causes scaling in pipes, water heaters, hair fall, and skin dryness. RO Technical Solutions provides complete servicing for automatic and manual resin-based water softeners, multiport valve repair, and cation exchange resin replenishment.',
    iconName: 'Droplet',
    category: 'residential',
    priceStarting: '₹799',
    turnaround: '90 Minutes',
    warranty: '1 Year Softener Warranty',
    keyFeatures: [
      'Cation exchange resin quality testing & topping',
      'Automatic / Manual Multiport Valve repair & servicing',
      'Brine tank cleaning & vacuum salt regeneration',
      'Hardness testing (PPM / GPG calculation)',
      'Whole-house water softener installation & maintenance'
    ],
    commonSymptoms: [
      'White chalky scale deposits on bathroom taps & tiles',
      'Soap not lathering well during shower',
      'Water feeling sticky or harsh on skin and hair',
      'Softener brine tank overflowing or not drawing salt'
    ],
    processSteps: [
      { title: '1. Hardness Level Test', desc: 'We test total hardness (PPM as CaCO3) before and after softener.' },
      { title: '2. Resin Capacity Check', desc: 'Assess resin bead degradation and backwash to un-compact channels.' },
      { title: '3. Valve Servicing & Brine Flush', desc: 'Dismantle multiport valve, replace seal kits, and run high-grade salt regeneration.' },
      { title: '4. Final Hardness Check', desc: 'Verify soft water output (< 50 PPM hardness).' }
    ],
    faqs: [
      { question: 'Why is salt regeneration necessary for softeners?', answer: 'Brine salt recharges the resin beads with sodium ions so they can continue trapping calcium and magnesium hard minerals.' }
    ],
    seoKeywords: ['Water Softener Service Nagpur', 'Hard Water Solution Nagpur', 'Resin Replacement Water Softener', 'Whole House Softener Repair']
  },
  {
    id: 'tds-check',
    slug: 'tds-check',
    title: 'Free Doorstep TDS & Water Quality Audit',
    shortDesc: 'Comprehensive 8-point digital testing of Total Dissolved Solids, pH, Hardness, and bacterial contamination indicators.',
    fullDesc: 'Is your drinking water safe? Book a free home water audit in Nagpur. Our technician visits your location with digital TDS meters, pH drops, and hardness test kits to evaluate raw input water versus your purified drinking water.',
    iconName: 'Activity',
    category: 'residential',
    priceStarting: 'FREE',
    turnaround: '15 Minutes',
    warranty: 'Digital Test Report Included',
    keyFeatures: [
      'Digital TDS (Total Dissolved Solids) PPM measurement',
      'pH acidity / alkalinity balance check',
      'Water hardness (Ca & Mg) level calculation',
      'Turbidity & clarity visual inspection',
      'Unbiased expert recommendation on purifier needs'
    ],
    commonSymptoms: [
      'Unsure if existing purifier is working correctly',
      'Moved into a new home and want to check groundwater TDS',
      'Experiencing frequent stomach upset or taste changes',
      'Want to know if your TDS level is within WHO safe limit (80-150 PPM)'
    ],
    processSteps: [
      { title: '1. Technician Visit', desc: 'Our certified expert arrives at your home with calibrated testing instruments.' },
      { title: '2. Dual Sample Testing', desc: 'We test raw tap/borewell water and purified drinking water side by side.' },
      { title: '3. Purity Report & Consultation', desc: 'Receive instant digital readings and customized advice.' }
    ],
    faqs: [
      { question: 'Is the TDS check really free?', answer: 'Yes! We offer 100% free home TDS testing in Nagpur with no purchase obligation.' }
    ],
    seoKeywords: ['Free TDS Check Nagpur', 'Water Quality Test Nagpur', 'Borewell TDS Test Nagpur', 'Drinking Water Audit Near Me']
  },
  {
    id: 'water-purifier-cleaning',
    slug: 'water-purifier-cleaning',
    title: 'Deep Tank Sanitization & Cleaning',
    shortDesc: 'Medical-grade antibacterial tank cleaning, chemical descaling, internal tube flushing, and mold elimination.',
    fullDesc: 'Water storage tanks in purifiers can accumulate biofilm, algae, slime, and bacteria over time. Our medical-grade sanitization service uses food-safe hydrogen peroxide and citric acid descaling to thoroughly sterilize storage tanks and internal tubing.',
    iconName: 'Sparkles',
    category: 'maintenance',
    priceStarting: '₹349',
    turnaround: '30 Minutes',
    warranty: '100% Germ-Free Guarantee',
    keyFeatures: [
      'Food-grade organic chemical tank descaling',
      'UV-C & ozone antibacterial tube flushing',
      'Removal of slippery slime biofilm and algae deposits',
      'Inspection of auto-cut off float valve switch',
      'Restores crystal clear fresh water taste'
    ],
    commonSymptoms: [
      'Stored water smells stale or musty',
      'Visible black or green spots inside storage tank',
      'Water purifier hasn’t been cleaned inside for over 6 months'
    ],
    processSteps: [
      { title: '1. Tank Drainage & Inspection', desc: 'Empty tank and inspect internal walls for biofilm and mineral scaling.' },
      { title: '2. Organic Descaling & Scrubbing', desc: 'Apply non-toxic food-grade cleaner and sterilize with soft scrubbers.' },
      { title: '3. Pressurized Flush & Sanitize', desc: 'Flush internal tubes under pressure to eliminate trapped microbes.' }
    ],
    faqs: [
      { question: 'How often should the RO water tank be cleaned?', answer: 'We recommend deep sanitization every 3 to 6 months to prevent bacterial growth in stored water.' }
    ],
    seoKeywords: ['RO Tank Cleaning Nagpur', 'Water Purifier Sanitization Service', 'RO Cleaning Near Me', 'RO Tank Smell Fix']
  },
  {
    id: 'emergency-ro-repair',
    slug: 'emergency-ro-repair',
    title: '24/7 Emergency RO Breakdown Repair',
    shortDesc: 'Urgent late-night & weekend dispatch for sudden water pipe bursts, continuous leaks, or dead purifiers.',
    fullDesc: 'A leaking RO water purifier can flood your kitchen floor or leave your family without safe drinking water. RO Technical Solutions provides dedicated emergency response teams active 24 hours a day, 7 days a week across Nagpur city.',
    iconName: 'AlertTriangle',
    category: 'emergency',
    priceStarting: '₹349',
    turnaround: '30 Minutes Priority Dispatch',
    warranty: '90-Day Repair Warranty',
    keyFeatures: [
      'Active 24/7 hotline including Sundays & Public Holidays',
      'Rapid 30-minute doorstep arrival in Nagpur urban zone',
      'On-the-spot repair for high-pressure leaks & solenoid valve failures',
      'SMPS transformer & pump motor emergency replacements',
      'Temporary water backup provision if major overhaul is needed'
    ],
    commonSymptoms: [
      'Water gushing out of purifier housing or adapter',
      'Purifier tripping main MCB electrical circuit breaker',
      'Sudden stoppage of drinking water supply before major family event'
    ],
    processSteps: [
      { title: '1. Instant Call / WhatsApp Hotline', desc: 'Call +91 98765 43210 for priority emergency assignment.' },
      { title: '2. Express Dispatch', desc: 'Nearest field engineer dispatched immediately with spare kits.' },
      { title: '3. Immediate Leak Control & Repair', desc: 'Water inlet shut down, burst component replaced, system restored.' }
    ],
    faqs: [
      { question: 'Are emergency repairs available on Sundays in Nagpur?', answer: 'Yes! Our emergency repair teams operate 365 days a year without holiday interruption.' }
    ],
    seoKeywords: ['24/7 Emergency RO Repair Nagpur', 'Late Night RO Service Nagpur', 'RO Water Leak Emergency', 'Urgent Water Purifier Repair']
  },
  {
    id: 'same-day-service',
    slug: 'same-day-service',
    title: 'Same Day RO Service Guarantee',
    shortDesc: 'Guaranteed same-day service completion for all bookings made before 4:00 PM across Nagpur and surrounding areas.',
    fullDesc: 'Don’t wait days for a technician. Book your service before 4 PM, and our expert engineers will complete the inspection, filter replacement, or repair on the exact same day. If we fail to arrive on the same day, your visit fee is 100% FREE.',
    iconName: 'Clock',
    category: 'residential',
    priceStarting: 'Standard Service Rate',
    turnaround: 'Same Day Guaranteed',
    warranty: '100% On-Time Guarantee',
    keyFeatures: [
      'Guaranteed same-day technician visit if booked before 4 PM',
      '100% Free visit charge if we miss our same-day commitment',
      'Fully equipped service vans with all spare parts in stock',
      'Real-time technician tracking updates via SMS / WhatsApp'
    ],
    commonSymptoms: [
      'Need immediate filter change before guest arrival',
      'Busy weekday schedule needing fast evening appointment'
    ],
    processSteps: [
      { title: '1. Book Before 4 PM', desc: 'Submit quick form or call us to lock your same-day slot.' },
      { title: '2. Arrival Confirmation', desc: 'Technician calls 15 minutes before reaching your doorstep.' },
      { title: '3. On-Time Completion', desc: 'Service completed efficiently in 30-45 minutes.' }
    ],
    faqs: [
      { question: 'What happens if the technician arrives late?', answer: 'If we fail to reach your home on the scheduled day, your inspection fee is 100% waived.' }
    ],
    seoKeywords: ['Same Day RO Repair Nagpur', 'Fast Water Purifier Service', 'Quick RO Technician Nagpur', 'Express RO Repair Near Me']
  }
];
