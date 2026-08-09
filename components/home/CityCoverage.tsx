import React from 'react';
import Link from 'next/link';
import { LOCATIONS } from '@/data/locations';
import { MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

export const CityCoverage: React.FC = () => {
  const nagpurAreas = LOCATIONS.filter(l => l.type === 'area');
  const vidarbhaCities = LOCATIONS.filter(l => l.type === 'city');

  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
            <MapPin className="w-3.5 h-3.5" /> Rapid Doorstep Network
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Service Areas in Nagpur & Vidarbha
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-inter">
            Our localized field technicians are stationed across all Nagpur zones for immediate 30-45 minute emergency dispatch.
          </p>
        </div>

        {/* Nagpur Sectors */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins border-b border-slate-200 dark:border-slate-800 pb-2">
            Nagpur Local Neighborhoods (30-45 Min Response)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {nagpurAreas.map((area) => (
              <Link
                key={area.id}
                href={`/location/${area.slug}`}
                className="group p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-cyan-500/50 hover:shadow-lg transition-all duration-200 flex items-center justify-between"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    <span className="text-sm font-bold text-slate-900 dark:text-white font-poppins group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {area.name}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <span className="flex items-center gap-1 font-semibold text-emerald-600 dark:text-emerald-400">
                      <Clock className="w-3 h-3" /> {area.avgResponseTime}
                    </span>
                    <span>• {area.happyCustomersCount}+ Serviced</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-cyan-600 transition-all shrink-0" />
              </Link>
            ))}
          </div>
        </div>

        {/* Vidarbha Regional Cities */}
        <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-900">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins border-b border-slate-200 dark:border-slate-800 pb-2">
            Vidarbha Regional Cities Coverage
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {vidarbhaCities.map((city) => (
              <Link
                key={city.id}
                href={`/location/${city.slug}`}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-cyan-500/10 hover:border-cyan-500/40 text-center transition-colors"
              >
                <div className="text-xs font-bold text-slate-900 dark:text-white font-poppins">{city.name}</div>
                <div className="text-[10px] text-slate-500 font-inter mt-0.5">{city.avgResponseTime} SLA</div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
