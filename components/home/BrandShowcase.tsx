import React from 'react';
import Link from 'next/link';
import { BRANDS } from '@/data/brands';
import { Shield, ArrowRight, CheckCircle2 } from 'lucide-react';

export const BrandShowcase: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
            <Shield className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" /> Multi-Brand Expertise
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
            We Service All Major RO Brands
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-inter">
            Our certified field engineers carry 100% original OEM replacement filters, membranes, UV lamps, and electrical adapters for every major water purifier brand in India.
          </p>
        </div>

        {/* Brand Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
          {BRANDS.map((brand) => (
            <Link
              key={brand.id}
              href={`/brands/${brand.slug}`}
              className="group relative rounded-2xl p-5 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-cyan-600 dark:text-cyan-400 font-poppins uppercase tracking-wider">
                    {brand.name}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white font-poppins group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {brand.name} Service & Repair
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-inter line-clamp-2">
                  {brand.tagline}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                <span>View Models & Faults</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900 via-slate-900 to-cyan-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold font-poppins">Don't See Your Brand Listed?</div>
              <div className="text-xs text-slate-300 font-inter">We service custom assemblers, unbranded local RO purifiers, and imported water purifiers as well.</div>
            </div>
          </div>
          <a
            href="tel:+919876543210"
            className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md transition-transform active:scale-95 shrink-0"
          >
            Call Helpline: +91 98765 43210
          </a>
        </div>

      </div>
    </section>
  );
};
