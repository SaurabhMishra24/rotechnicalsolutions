import React from 'react';
import Link from 'next/link';
import { BRANDS } from '@/data/brands';
import { Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import { EmergencyCTA } from '@/components/home/EmergencyCTA';

export const metadata = {
  title: 'We Service All Major RO Water Purifier Brands in Nagpur',
  description: 'Expert doorstep servicing for Kent, Aquaguard, AO Smith, HUL Pureit, Livpure, Blue Star, LG, and Whirlpool RO purifiers in Nagpur & Vidarbha.'
};

export default function BrandsPage() {
  return (
    <div className="py-12 space-y-12">
      <div className="bg-slate-900 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
            <Shield className="w-4 h-4 text-cyan-400" /> Multi-Brand Service Specialist
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins">
            RO Purifier Repair For All Brands
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-inter">
            Our certified field engineers carry 100% genuine replacement parts, membranes, and filters for all top Indian and imported brands.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {BRANDS.map((brand) => (
          <Link
            key={brand.id}
            href={`/brands/${brand.slug}`}
            className="group rounded-3xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="text-xs font-extrabold text-cyan-600 dark:text-cyan-400 font-poppins uppercase tracking-wider">
                {brand.name}
              </div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white font-poppins group-hover:text-cyan-600 transition-colors">
                {brand.name} RO Service
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-inter line-clamp-3 leading-relaxed">
                {brand.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-cyan-600">
              <span>View Faults & Solutions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>

      <EmergencyCTA />
    </div>
  );
}
