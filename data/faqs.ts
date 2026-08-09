export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: 'General' | 'RO Repair' | 'AMC & Pricing' | 'Water Quality & TDS' | 'Spare Parts' | 'Commercial & Industrial';
}

export const FAQS: FAQItem[] = [
  // General (1-7)
  {
    id: 1,
    category: 'General',
    question: 'Why choose RO Technical Solutions for RO water purifier service in Nagpur?',
    answer: 'RO Technical Solutions brings 20+ years of proven experience, 10,000+ satisfied customers, ISO certification, and 100% genuine spare parts. Our certified technicians reach your doorstep in Nagpur within 30 to 45 minutes with a transparent pricing guarantee and a 90-day service warranty.'
  },
  {
    id: 2,
    category: 'General',
    question: 'What water purifier brands do you service?',
    answer: 'We service all major brands including Kent, Aquaguard (Eureka Forbes), AO Smith, HUL Pureit, Livpure, Blue Star, LG, Whirlpool, Havells, Faber, and custom local RO purifiers.'
  },
  {
    id: 3,
    category: 'General',
    question: 'What are your working hours and operational days?',
    answer: 'Our regular service hours are 8:00 AM to 9:00 PM, 7 days a week. For emergencies like severe pipe leaks or sudden breakdowns, our 24/7 emergency dispatch helpline (+91 98765 43210) remains active round the clock.'
  },
  {
    id: 4,
    category: 'General',
    question: 'Which areas in Nagpur and Vidarbha do you cover?',
    answer: 'We cover all areas in Nagpur (Dharampeth, Sadar, Wardha Road, Manish Nagar, Besa, Civil Lines, Nandanvan, Sitabuldi, MIHAN, etc.) and major Vidarbha cities including Wardha, Amravati, Chandrapur, Yavatmal, Akola, and Bhandara.'
  },
  {
    id: 5,
    category: 'General',
    question: 'How do I book an RO service appointment?',
    answer: 'You can call us directly at +91 98765 43210, send a pre-filled instant message on WhatsApp, or click the "Book Service" button on our website to choose your preferred time slot.'
  },
  {
    id: 6,
    category: 'General',
    question: 'Is RO Technical Solutions an official service center or an independent specialist?',
    answer: 'RO Technical Solutions is a premier independent multi-brand RO water purification sales, service, and maintenance provider with certified engineers trained across all major OEM systems.'
  },
  {
    id: 7,
    category: 'General',
    question: 'Do you offer doorstep service for home purifiers?',
    answer: 'Yes! 100% of our domestic RO repair, filter replacements, installation, and AMC servicing are conducted directly at your home or office doorstep.'
  },

  // RO Repair (8-15)
  {
    id: 8,
    category: 'RO Repair',
    question: 'Why is my RO water purifier making a loud buzzing or humming noise?',
    answer: 'Loud noise is usually caused by air trapped in booster pump heads, a failing pump bearing, worn solenoid valves, or loose wall mounting brackets. Our technician will inspect pump pressure and replace worn bearings or dampers.'
  },
  {
    id: 9,
    category: 'RO Repair',
    question: 'Why is my RO storage tank filling very slowly or not filling at all?',
    answer: 'Slow tank filling is caused by clogged sediment or carbon pre-filters, exhausted RO membrane, low water inlet pressure (< 10 PSI), or a weak booster pump motor. We diagnose inlet PSI and replace blocked cartridges.'
  },
  {
    id: 10,
    category: 'RO Repair',
    question: 'What causes continuous water leakage from the RO purifier?',
    answer: 'Leaks stem from cracked filter housings, loose push-fit elbow joints, worn O-ring gaskets, or excessive water pressure. Our technician replaces damaged food-grade connectors and fits pressure reduction valves.'
  },
  {
    id: 11,
    category: 'RO Repair',
    question: 'Why does my RO drinking water taste bitter or bad?',
    answer: 'Bitterness occurs if the output TDS drops too low (< 50 PPM), if carbon filters are degraded, or if bacterial slime has built up inside the storage tank. We recalibrate TDS modulators and perform deep tank sanitization.'
  },
  {
    id: 12,
    category: 'RO Repair',
    question: 'Why is waste water flowing continuously even when the RO machine is turned OFF?',
    answer: 'Continuous waste flow is caused by a faulty Solenoid Valve (SV) that fails to shut off water inlet, or a damaged Auto Cut-Off switch. Replacing the solenoid valve instantly stops unnecessary water waste.'
  },
  {
    id: 13,
    category: 'RO Repair',
    question: 'Why is my RO purifier not turning ON at all?',
    answer: 'Power failure is commonly caused by a blown SMPS power supply adapter, faulty electrical outlet, tripped internal PCB micro-fuse, or a stuck high-pressure cut-off switch.'
  },
  {
    id: 14,
    category: 'RO Repair',
    question: 'How long does a standard RO repair visit take?',
    answer: 'A standard repair or filter replacement takes between 30 to 45 minutes on-site.'
  },
  {
    id: 15,
    category: 'RO Repair',
    question: 'What warranty do you provide on RO repair work?',
    answer: 'We provide a 90-day comprehensive service warranty on all replacement parts and labor performed by our engineers.'
  },

  // AMC & Pricing (16-23)
  {
    id: 16,
    category: 'AMC & Pricing',
    question: 'How much does an RO water purifier repair cost in Nagpur?',
    answer: 'Our technician visit and diagnostic inspection fee is ₹199 (waived when repair work is done). Basic repairs start from ₹299, filter replacements from ₹499, and membranes from ₹1,299.'
  },
  {
    id: 17,
    category: 'AMC & Pricing',
    question: 'What is an RO AMC (Annual Maintenance Contract) and is it worth buying?',
    answer: 'An RO AMC is an annual contract covering scheduled quarterly preventive maintenance, free replacement of sediment, carbon, and RO membrane filters, and unlimited emergency breakdown visits with zero labor charges. It saves up to 40% compared to pay-per-service repairs.'
  },
  {
    id: 18,
    category: 'AMC & Pricing',
    question: 'What AMC plans do you offer?',
    answer: 'We offer three flexible plans: Basic Care AMC (₹1,499/yr), Gold Shield AMC (₹2,499/yr - includes membrane & filters), and Platinum Total Protection (₹3,499/yr - covers 100% parts, motor, pump, PCB, and membrane).'
  },
  {
    id: 19,
    category: 'AMC & Pricing',
    question: 'Can I purchase AMC for an old or out-of-warranty purifier?',
    answer: 'Yes! We issue AMC contracts for purifiers of any brand and any age up to 10 years old following a baseline health inspection.'
  },
  {
    id: 20,
    category: 'AMC & Pricing',
    question: 'Are genuine spare parts included in the AMC cost?',
    answer: 'Yes, our Gold and Platinum AMC plans include 100% free genuine replacement filters, UV lamps, and membranes without hidden part costs.'
  },
  {
    id: 21,
    category: 'AMC & Pricing',
    question: 'How often will the technician visit during an AMC period?',
    answer: 'Depending on your plan, our technicians perform scheduled preventive maintenance every 3 to 4 months (3x to 4x per year), plus unlimited emergency breakdown calls.'
  },
  {
    id: 22,
    category: 'AMC & Pricing',
    question: 'Do you offer installment payment options for AMC plans?',
    answer: 'Yes, we accept UPI, debit/credit cards, net banking, cash on service completion, and flexible payment terms for commercial AMC clients.'
  },
  {
    id: 23,
    category: 'AMC & Pricing',
    question: 'Is there any discount if I buy AMC for multiple purifiers or society apartments?',
    answer: 'Yes, we offer group residential society and corporate office discounts up to 20% off when 3 or more purifiers are enrolled together.'
  },

  // Water Quality & TDS (24-30)
  {
    id: 24,
    category: 'Water Quality & TDS',
    question: 'What is TDS in drinking water and why does it matter?',
    answer: 'TDS stands for Total Dissolved Solids, representing dissolved minerals, salts, and heavy metals in water measured in Parts Per Million (PPM). According to WHO & BIS standards, drinking water TDS should ideally be between 80 PPM and 150 PPM for safety and taste.'
  },
  {
    id: 25,
    category: 'Water Quality & TDS',
    question: 'What is the raw water TDS level in Nagpur areas?',
    answer: 'Municipal tap water in central Nagpur ranges from 150 to 300 PPM. Ground borewell water in areas like Besa, Manish Nagar, Wardha Road, and Hudkeshwar often exceeds 600 to 1,800+ PPM, requiring multi-stage high-rejection RO membranes.'
  },
  {
    id: 26,
    category: 'Water Quality & TDS',
    question: 'Is very low TDS (< 50 PPM) water harmful to health?',
    answer: 'Drinking water with TDS below 50 PPM lacks essential natural minerals like calcium and magnesium, giving water a flat or bitter taste. Our technicians adjust TDS modulators to ensure health-optimal 80-140 PPM.'
  },
  {
    id: 27,
    category: 'Water Quality & TDS',
    question: 'How do I check if my home water purifier TDS is correct?',
    answer: 'Book our 100% Free Doorstep TDS Check. Our technician arrives with a calibrated digital TDS meter and tests your tap water versus purified tank water in 5 minutes.'
  },
  {
    id: 28,
    category: 'Water Quality & TDS',
    question: 'What is the difference between RO, UV, and UF purification?',
    answer: 'RO (Reverse Osmosis) reduces dissolved salts and heavy metals (high TDS). UV (Ultra Violet) kills bacteria and viruses with light. UF (Ultra Filtration) traps suspended solids without electricity. High TDS water requires RO + UV + UF combined.'
  },
  {
    id: 29,
    category: 'Water Quality & TDS',
    question: 'Does RO purification remove beneficial minerals from drinking water?',
    answer: 'Standard RO removes both harmful heavy metals and mineral ions. However, our purifiers and filter replacements include Mineral Alkaline Post-Carbon Cartridges that re-infuse essential Calcium, Magnesium, and Potassium back into drinking water.'
  },
  {
    id: 30,
    category: 'Water Quality & TDS',
    question: 'How does hard water affect home plumbing and water purifiers?',
    answer: 'Hard water contains high Calcium and Magnesium salts that deposit white scale in pipes, shorten RO membrane life, and cause skin dryness. We install resin-based water softeners to protect your entire home.'
  },

  // Spare Parts (31-35)
  {
    id: 31,
    category: 'Spare Parts',
    question: 'Do you use original factory replacement filters and parts?',
    answer: 'Yes, we use 100% food-grade NSF-certified original cartridges and OEM-compatible high-grade spare parts with holographic authenticity seals.'
  },
  {
    id: 32,
    category: 'Spare Parts',
    question: 'How often should sediment and carbon filters be replaced?',
    answer: 'Spun sediment and pre-carbon block filters should be replaced every 6 to 9 months depending on water usage and sediment load in your area.'
  },
  {
    id: 33,
    category: 'Spare Parts',
    question: 'How long does an RO membrane last before needing replacement?',
    answer: 'An RO membrane typically lasts 18 to 24 months. In high TDS borewell water (> 1,000 PPM), replacement may be needed every 12 to 18 months.'
  },
  {
    id: 34,
    category: 'Spare Parts',
    question: 'What brand of RO booster pumps do you install?',
    answer: 'We install heavy-duty 75 GPD and 100 GPD Copper Winding Booster Pumps (such as Echen, Grand Forest, or Kemflo) rated for 10,000+ operating hours.'
  },
  {
    id: 35,
    category: 'Spare Parts',
    question: 'Can I purchase replacement filters directly for self-installation?',
    answer: 'While we sell genuine replacement cartridges, we strongly recommend professional installation by our engineers to ensure zero leak seal integrity and proper flushing.'
  },

  // Commercial & Industrial (36-40)
  {
    id: 36,
    category: 'Commercial & Industrial',
    question: 'Do you service commercial RO plants in hospitals, schools, and offices?',
    answer: 'Yes! We service 50 LPH, 100 LPH, 250 LPH, 500 LPH, and 1000 LPH commercial water purification plants for hospitals, colleges, hotels, restaurants, and IT parks across Vidarbha.'
  },
  {
    id: 37,
    category: 'Commercial & Industrial',
    question: 'What services are included in commercial plant servicing?',
    answer: 'Commercial plant service includes quartz sand and activated carbon media backwashing, CIP chemical membrane descaling, high-pressure pump mechanical seal repair, and digital panel troubleshooting.'
  },
  {
    id: 38,
    category: 'Commercial & Industrial',
    question: 'What is CIP chemical cleaning for industrial RO membranes?',
    answer: 'CIP (Clean-in-Place) uses specialized acidic and alkaline chemical circulation to dissolve mineral scaling and bio-fouling from 4040 and 8040 industrial membranes without destroying delicate TFC layers.'
  },
  {
    id: 39,
    category: 'Commercial & Industrial',
    question: 'Do you provide water purity test reports for food safety and NABH compliance?',
    answer: 'Yes, we provide certified digital water purity test logs required for FSSAI food licensing, NABH hospital accreditations, and industrial quality standards.'
  },
  {
    id: 40,
    category: 'Commercial & Industrial',
    question: 'How quickly can an engineer respond to an industrial RO plant breakdown?',
    answer: 'For commercial and industrial SLA clients in Nagpur, Butibori, Hingna, and surrounding industrial hubs, our senior process engineers arrive within 2 hours.'
  }
];
