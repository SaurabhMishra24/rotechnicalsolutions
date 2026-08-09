import React from 'react';
import Link from 'next/link';
import { LOCATIONS } from '@/data/locations';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { EmergencyCTA } from '@/components/home/EmergencyCTA';

export const metadata = {
  title: 'RO Water Purifier Service Areas | Nagpur & Vidarbha Region',
  description: 'Doorstep 30-45 minute RO repair and service across all Nagpur neighborhoods (Dharampeth, Manish Nagar, Sadar, Wardha Road) and Vidarbha regional cities.'
};

export default function LocationDirectoryPage() {
  return (
    <div className="py-12 space-y-12">
      <div className="bg-slate-900 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
            <MapPin className="w-4 h-4 text-cyan-400" /> Doorstep Service Network
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins">
            RO Purifier Service Locations
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-inter">
            Select your city or neighborhood below to view response SLAs, local technician availability, and customer reviews.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LOCATIONS.map((loc) => (
            <Link
              key={loc.id}
              href={`/location/${loc.slug}`}
              className="group p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-cyan-500/50 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 uppercase">
                    {loc.type === 'city' ? 'City Hub' : 'Nagpur Area'}
                  </span>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {loc.avgResponseTime}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white font-poppins group-hover:text-cyan-600 transition-colors">
                  {loc.name}
                </h2>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-inter line-clamp-2">
                  {loc.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-cyan-600">
                <span>View Local Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <EmergencyCTA />
    </div>
  );
}
