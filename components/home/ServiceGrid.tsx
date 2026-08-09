'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SERVICES, ServiceItem } from '@/data/services';
import { Wrench, Settings, ShieldCheck, Filter, Disc, Building2, Factory, Droplet, Activity, Sparkles, AlertTriangle, Clock, ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { QuickBookingModal } from '@/components/forms/QuickBookingModal';
import { generateWhatsAppLink, DUMMY_CONTACT } from '@/lib/whatsapp';

export const ServiceGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All 12+ Services' },
    { id: 'emergency', label: '⚡ Emergency Repair' },
    { id: 'residential', label: 'Home RO Services' },
    { id: 'maintenance', label: 'AMC & Cleaning' },
    { id: 'commercial', label: 'Commercial Plants' },
    { id: 'industrial', label: 'Industrial RO' }
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Wrench': return <Wrench className="w-5 h-5" />;
      case 'Settings': return <Settings className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Filter': return <Filter className="w-5 h-5" />;
      case 'Disc': return <Disc className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      case 'Factory': return <Factory className="w-5 h-5" />;
      case 'Droplet': return <Droplet className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'AlertTriangle': return <AlertTriangle className="w-5 h-5" />;
      default: return <Clock className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
            <Wrench className="w-3.5 h-3.5" /> Comprehensive Solutions
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Professional RO Services in Nagpur
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-inter">
            Select a service below to book doorstep technician arrival in 30-45 minutes. Upfront itemized quotes with zero hidden charges.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`py-2 px-4 rounded-xl text-xs font-extrabold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20 scale-105'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-3xl p-6 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Header Icon + Price Tag */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow-md group-hover:scale-110 transition-transform">
                    {getIcon(service.iconName)}
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 block font-inter">Starts From</span>
                    <span className="text-lg font-extrabold text-cyan-600 dark:text-cyan-400 font-poppins">
                      {service.priceStarting}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-inter mt-1.5 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Turnaround & Warranty badges */}
                <div className="flex flex-wrap gap-2 pt-1 text-[11px]">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                    <Clock className="w-3 h-3 text-cyan-600" /> {service.turnaround}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 font-medium">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" /> {service.warranty}
                  </span>
                </div>

                {/* Common Symptoms solved */}
                <div className="space-y-1 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 font-inter">
                  <div className="font-semibold text-slate-700 dark:text-slate-300">Commonly Fixes:</div>
                  {service.commonSymptoms.slice(0, 2).map((symptom, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                      <span className="truncate">{symptom}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Card Actions */}
              <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
                <button
                  onClick={() => setSelectedService(service.title)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-blue-700 to-cyan-600 hover:from-blue-600 hover:to-cyan-500 text-white font-bold text-xs shadow-md transition-all active:scale-95 text-center"
                >
                  Book Service
                </button>
                <Link
                  href={`/services/${service.slug}`}
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  title="View Details"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>

      <QuickBookingModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        defaultService={selectedService || 'RO Repair'}
      />
    </section>
  );
};
