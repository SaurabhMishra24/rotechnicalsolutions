export interface AMCPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  originalPrice: string;
  popular?: boolean;
  idealFor: string;
  serviceFrequency: string;
  inclusions: { feature: string; covered: boolean; note?: string }[];
  ctaText: string;
}

export const AMC_PLANS: AMCPlan[] = [
  {
    id: 'basic-care',
    name: 'Basic Care AMC',
    tagline: 'Essential maintenance for budget-conscious households',
    price: '₹1,499',
    originalPrice: '₹1,999',
    popular: false,
    idealFor: 'Municipal tap water purifiers under 2 years old',
    serviceFrequency: '2 Mandatory Visits / Year',
    inclusions: [
      { feature: '2 Free Preventive Maintenance Visits', covered: true },
      { feature: 'Free Spun Sediment Filter Replacement (2x)', covered: true },
      { feature: 'Free Carbon Filter Replacement (1x)', covered: true },
      { feature: 'Free Labor & Service Charge for Repairs', covered: true },
      { feature: 'Free Digital TDS & Water Quality Audit', covered: true },
      { feature: 'RO Membrane Replacement', covered: false, note: '50% discount on membrane' },
      { feature: 'Electrical Parts Coverage (SMPS, Pump, SV)', covered: false },
      { feature: 'Unlimited Emergency Breakdown Visits', covered: false, note: 'Max 2 emergency calls' }
    ],
    ctaText: 'Select Basic Plan'
  },
  {
    id: 'gold-shield',
    name: 'Gold Shield AMC',
    tagline: 'Most popular plan with full filter & membrane coverage',
    price: '₹2,499',
    originalPrice: '₹3,299',
    popular: true,
    idealFor: 'High TDS borewell water & purifiers aged 2-5 years',
    serviceFrequency: '3 Mandatory Visits / Year',
    inclusions: [
      { feature: '3 Free Preventive Maintenance Visits', covered: true },
      { feature: 'Free Spun Sediment Filter Replacement (3x)', covered: true },
      { feature: 'Free Carbon & Post-Carbon Filter Replacement', covered: true },
      { feature: 'Free RO Membrane Replacement (100 GPD)', covered: true, note: '100% Free replacement' },
      { feature: 'Free UV Lamp / UF Membrane Replacement', covered: true },
      { feature: 'Free Labor & Service Charge for Repairs', covered: true },
      { feature: 'Electrical Parts Coverage (SMPS, Solenoid Valve)', covered: true },
      { feature: 'Unlimited Emergency Breakdown Visits', covered: true },
      { feature: 'Booster Pump Motor Repair Coverage', covered: false, note: '30% discount on pump' }
    ],
    ctaText: 'Select Gold Shield'
  },
  {
    id: 'platinum-total',
    name: 'Platinum Total Protection',
    tagline: 'Zero-cost maintenance contract covering ALL parts & electricals',
    price: '₹3,499',
    originalPrice: '₹4,499',
    popular: false,
    idealFor: 'Large families, villas & high usage purifiers',
    serviceFrequency: '4 Mandatory Visits / Year (Quarterly)',
    inclusions: [
      { feature: '4 Quarterly Preventive Maintenance Visits', covered: true },
      { feature: 'Unlimited Free Spun Sediment Filter Changes', covered: true },
      { feature: 'Free Carbon, Mineralizer & Copper Filter', covered: true },
      { feature: 'Free USA Dow/Toray RO Membrane Replacement', covered: true },
      { feature: '100% Electrical Parts Insurance (SMPS, SV, PCB, Pump)', covered: true, note: 'Full replacement covered' },
      { feature: '100% Booster Pump Motor Replacement', covered: true },
      { feature: 'Unlimited 24/7 Priority Emergency Visits', covered: true },
      { feature: 'Free Deep Tank Antibacterial Sanitization (2x)', covered: true },
      { feature: 'Free Water Softener Check & Salt Top-up', covered: true }
    ],
    ctaText: 'Select Platinum Protection'
  }
];
