import React from 'react';
import Metadata from 'next';
import Link from 'next/link';
import { SERVICES } from '@/data/services';
import { ServiceGrid } from '@/components/home/ServiceGrid';
import { EmergencyCTA } from '@/components/home/EmergencyCTA';
import { Wrench, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'All RO Water Purifier Services in Nagpur | Repair, AMC & Filter Replacement',
  description: 'Explore 12+ professional RO services in Nagpur & Vidarbha including Emergency Breakdown Repair, RO Installation, AMC Contracts, Membrane Replacement, Commercial RO, and Water Softeners.'
};

export default function ServicesPage() {
  return (
    <div className="py-12 space-y-12">
      
      {/* Header Banner */}
      <div className="bg-slate-900 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
            <Wrench className="w-4 h-4 text-cyan-400" /> Full Service Catalog
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins">
            RO Purifier Repair & Maintenance Services
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-inter">
            Same-day doorstep arrival across Nagpur & Vidarbha with 100% genuine OEM spare parts and a 90-day service guarantee.
          </p>
        </div>
      </div>

      {/* Main Service Grid Component */}
      <ServiceGrid />

      <EmergencyCTA />

    </div>
  );
}
