'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { LocationItem } from '@/data/locations';
import { QuickBookingModal } from '@/components/forms/QuickBookingModal';
import { DUMMY_CONTACT, generateWhatsAppLink } from '@/lib/whatsapp';
import { MapPin, Clock, ShieldCheck, CheckCircle2, Phone, MessageSquare, ChevronRight, Wrench } from 'lucide-react';

interface LocationDetailClientProps {
  location: LocationItem;
}

export const LocationDetailClient: React.FC<LocationDetailClientProps> = ({ location }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const whatsappUrl = generateWhatsAppLink({
    name: '',
    phone: '',
    city: location.name,
    brand: 'Kent / Aquaguard',
    serviceType: 'Doorstep Repair',
    problem: `Service request in ${location.name}`,
    preferredTime: 'Today'
  });

  return (
    <div className="py-10 space-y-12">
      
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-inter">
          <Link href="/" className="hover:text-cyan-600">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/location" className="hover:text-cyan-600">Locations</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-900 dark:text-white font-semibold">{location.name}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white py-14 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-4">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 uppercase tracking-wider">
            {location.name} Doorstep Network
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins">
            RO Purifier Service in {location.name}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-inter leading-relaxed">
            {location.description}
          </p>

          <div className="flex flex-wrap gap-4 text-xs font-semibold pt-2">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <Clock className="w-4 h-4" /> {location.avgResponseTime} Doorstep Response
            </span>
            <span className="flex items-center gap-1.5 text-cyan-400">
              <ShieldCheck className="w-4 h-4" /> 90-Day Warranty Guaranteed
            </span>
            <span className="flex items-center gap-1.5 text-blue-400">
              <Wrench className="w-4 h-4" /> {location.happyCustomersCount}+ Satisfied Homes
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto py-3.5 px-6 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-sm shadow-xl active:scale-95 transition-transform"
            >
              Book Technician in {location.name}
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl active:scale-95 transition-transform flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp {location.name} Dispatch
            </a>
          </div>
        </div>
      </section>

      {/* Main Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-8">
          
          <div className="space-y-4">
            <h2 className="text-xl font-bold font-poppins text-slate-900 dark:text-white">
              Most Requested RO Services in {location.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {location.popularServices.map((service, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span className="text-xs font-bold text-slate-900 dark:text-white font-poppins">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 p-6 rounded-3xl bg-slate-900 text-white border border-slate-800">
            <h3 className="text-lg font-bold font-poppins text-cyan-400">
              Why Residents in {location.name} Choose Us
            </h3>
            <p className="text-xs text-slate-300 font-inter leading-relaxed">
              Groundwater in {location.name} requires precise membrane selection and regular filter flushing to prevent mineral scaling. Our localized mobile vans carry specific high-rejection TFC membranes and genuine filter cartridges tailored for this zone.
            </p>
          </div>

        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4">
          <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4 sticky top-24">
            <h4 className="text-lg font-bold font-poppins text-cyan-400">Need Service in {location.name}?</h4>
            <p className="text-xs text-slate-300 font-inter leading-relaxed">
              Technicians active right now near {location.nearbyLandmarks.join(', ')}.
            </p>
            <a
              href={`tel:${DUMMY_CONTACT.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs"
            >
              <Phone className="w-4 h-4" /> Call {DUMMY_CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <QuickBookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
