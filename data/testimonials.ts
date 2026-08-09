export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  date: string;
  purifierModel: string;
  serviceType: string;
  content: string;
  avatarUrl?: string;
  verified: boolean;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'Dr. Rajesh Sharma',
    role: 'Senior Physician & Resident',
    location: 'Dharampeth, Nagpur',
    rating: 5,
    date: '2 weeks ago',
    purifierModel: 'Kent Grand Plus',
    serviceType: 'Emergency Repair & AMC',
    content: 'My Kent RO started leaking continuously on a Sunday morning. RO Technical Solutions dispatched a technician within 35 minutes! He replaced the faulty solenoid valve with a genuine part and set the output TDS to 110 PPM. Incredible response speed and medical-grade professionalism.',
    verified: true
  },
  {
    id: 't-2',
    name: 'Priya Kulkarni',
    role: 'Homemaker',
    location: 'Manish Nagar, Nagpur',
    rating: 5,
    date: '1 month ago',
    purifierModel: 'Aquaguard Geneus',
    serviceType: 'Gold Shield AMC',
    content: 'We have high TDS borewell water in Manish Nagar. After taking their Gold AMC plan, they replaced both the carbon filter and the RO membrane for free. The water taste improved dramatically from bitter to sweet and natural. Highly recommended for Nagpur residents!',
    verified: true
  },
  {
    id: 't-3',
    name: 'Anand Deshmukh',
    role: 'Hotel Owner',
    location: 'Sadar, Nagpur',
    rating: 5,
    date: '3 weeks ago',
    purifierModel: '250 LPH Commercial Plant',
    serviceType: 'Commercial Maintenance',
    content: 'Servicing our restaurant 250 LPH commercial water plant used to be a hassle until we found RO Technical Solutions. Their senior engineers backwashed our sand filters and chemically flushed the membranes on the same day. Outstanding industrial expertise.',
    verified: true
  },
  {
    id: 't-4',
    name: 'Sunita & Rahul Agrawal',
    role: 'IT Professionals',
    location: 'Wardha Road, Nagpur',
    rating: 5,
    date: '2 months ago',
    purifierModel: 'AO Smith Z9',
    serviceType: 'Filter & Membrane Change',
    content: 'Super smooth experience. Booked via WhatsApp, received a confirmation call within 5 minutes, and the technician arrived fully equipped with original AO Smith filter kits. Transparent billing with zero hidden costs.',
    verified: true
  },
  {
    id: 't-5',
    name: 'Vikram Joshi',
    role: 'Apartment Society President',
    location: 'Besa, Nagpur',
    rating: 5,
    date: '1 month ago',
    purifierModel: 'Multiple Brands (Kent, Pureit, Livpure)',
    serviceType: 'Group Society AMC',
    content: 'We signed up 18 flats in our Besa residential building for their Platinum AMC protection plan. Their team comes quarterly like clockwork to clean tanks and replace sediment filters. Zero complaints from any resident in 1.5 years.',
    verified: true
  },
  {
    id: 't-6',
    name: 'Sanjay Patil',
    role: 'Clinic Administrator',
    location: 'Wardha City',
    rating: 5,
    date: '3 weeks ago',
    purifierModel: 'Blue Star Water Cooler RO',
    serviceType: 'Commercial Repair',
    content: 'Finding reliable RO technicians in Wardha used to take days. RO Technical Solutions dispatched an engineer from Nagpur who reached our clinic in under 60 minutes and repaired our water cooler RO motor on the spot. Top tier service!',
    verified: true
  }
];
