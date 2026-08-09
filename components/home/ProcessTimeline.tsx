import React from 'react';
import { PhoneCall, Search, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: <PhoneCall className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
      title: '1. Request Service',
      desc: 'Call +91 98765 43210 or message us on WhatsApp with your location & RO brand.'
    },
    {
      num: '02',
      icon: <Search className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: '2. 30-Min Doorstep Visit',
      desc: 'Technician arrives with digital TDS meters, pressure gauges, and spare parts kit.'
    },
    {
      num: '03',
      icon: <Wrench className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      title: '3. Transparent Repair',
      desc: 'Itemized upfront quote. Replacement with 100% original OEM food-grade filters.'
    },
    {
      num: '04',
      icon: <ShieldCheck className="w-6 h-6 text-sky-600 dark:text-sky-400" />,
      title: '4. 90-Day Warranty',
      desc: 'System thoroughly flushed, TDS calibrated to 80-150 PPM, and digital warranty issued.'
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
            Seamless 4-Step Process
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
            How Our Service Works
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-inter">
            Fast, transparent, and completely hassle-free from booking to final warranty signoff.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-3xl p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white">
                  {step.icon}
                </div>
                <span className="text-2xl font-black text-slate-300 dark:text-slate-700 font-poppins">
                  {step.num}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white font-poppins pt-2">
                {step.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-inter leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
