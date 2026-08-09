import React from 'react';
import { FAQSection } from '@/components/home/FAQSection';
import { EmergencyCTA } from '@/components/home/EmergencyCTA';
import { HelpCircle } from 'lucide-react';

export const metadata = {
  title: '40 RO Water Purifier Repair & Maintenance FAQs | Nagpur',
  description: 'Find answers to 40 common questions about RO water purifier repair costs, AMC plans, Kent/Aquaguard servicing, TDS levels, and spare parts in Nagpur.'
};

export default function FAQDirectoryPage() {
  return (
    <div className="py-12 space-y-12">
      <div className="bg-slate-900 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
            <HelpCircle className="w-4 h-4 text-cyan-400" /> Complete FAQ Hub
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins">
            RO Purifier Knowledge & FAQs
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-inter">
            Search our comprehensive directory of 40 customer questions covering RO repairs, AMC pricing, water science, and emergency support.
          </p>
        </div>
      </div>

      <FAQSection />

      <EmergencyCTA />
    </div>
  );
}
