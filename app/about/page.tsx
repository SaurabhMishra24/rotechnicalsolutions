import React from 'react';
import { Award, ShieldCheck, Users, CheckCircle2, Clock, Wrench } from 'lucide-react';
import { EmergencyCTA } from '@/components/home/EmergencyCTA';

export const metadata = {
  title: 'About RO Technical Solutions | 20+ Years Legacy in Nagpur',
  description: 'Learn about RO Technical Solutions, Nagpur & Vidarbha’s #1 local RO water purifier service company with 20+ years of technical experience and 10,000+ happy clients.'
};

export default function AboutPage() {
  return (
    <div className="py-12 space-y-16">
      
      <div className="bg-slate-900 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
            <Award className="w-4 h-4 text-cyan-400" /> Established 2006
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins">
            20+ Years of Pure Water Excellence
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-inter">
            Dedicated to protecting family health across Nagpur and Vidarbha with medical-grade water purification standards.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12 font-inter text-slate-700 dark:text-slate-300">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-poppins text-slate-900 dark:text-white">
              Who We Are
            </h2>
            <p className="text-sm leading-relaxed">
              Founded in 2006, <strong>RO Technical Solutions</strong> started with a clear mission: to solve high borewell TDS and hard water challenges in Nagpur. Today, we manage over 15+ mobile service teams operating across Dharampeth, Manish Nagar, Sadar, Wardha Road, and Vidarbha regional cities.
            </p>
            <p className="text-sm leading-relaxed">
              We specialize in domestic, commercial, and industrial RO water purifier repairs, Annual Maintenance Contracts (AMC), and water softener installations.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4 shadow-xl">
            <div className="text-3xl font-extrabold text-cyan-400 font-poppins">10,000+</div>
            <div className="text-xs text-slate-300">Purifiers Installed & Maintained Across Vidarbha</div>
            <div className="border-t border-slate-800 pt-4 grid grid-cols-2 gap-4 text-xs font-bold">
              <div>
                <span className="text-emerald-400 text-lg block">90 Days</span>
                <span className="text-slate-400 font-normal">Service Guarantee</span>
              </div>
              <div>
                <span className="text-cyan-400 text-lg block">30-45 Mins</span>
                <span className="text-slate-400 font-normal">Average Response SLA</span>
              </div>
            </div>
          </div>
        </div>

        {/* E-E-A-T Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <ShieldCheck className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
            <h3 className="text-sm font-bold font-poppins text-slate-900 dark:text-white">ISO Certified</h3>
            <p className="text-xs text-slate-500">Adhering to strict international water quality & service standards.</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <Wrench className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h3 className="text-sm font-bold font-poppins text-slate-900 dark:text-white">100% Genuine Spares</h3>
            <p className="text-xs text-slate-500">Only food-grade NSF certified replacement cartridges and membranes.</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <Users className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            <h3 className="text-sm font-bold font-poppins text-slate-900 dark:text-white">Certified Engineers</h3>
            <p className="text-xs text-slate-500">Background verified technicians trained across all top OEM systems.</p>
          </div>
        </div>

      </div>

      <EmergencyCTA />
    </div>
  );
}
