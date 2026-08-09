'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BrandItem } from '@/data/brands';
import { QuickBookingModal } from '@/components/forms/QuickBookingModal';
import { DUMMY_CONTACT, generateWhatsAppLink } from '@/lib/whatsapp';
import { ShieldCheck, CheckCircle2, Wrench, Phone, MessageSquare, AlertTriangle, ChevronRight, Check } from 'lucide-react';

interface BrandDetailClientProps {
  brand: BrandItem;
}

export const BrandDetailClient: React.FC<BrandDetailClientProps> = ({ brand }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const whatsappUrl = generateWhatsAppLink({
    name: '',
    phone: '',
    city: 'Nagpur',
    brand: brand.name,
    serviceType: `${brand.name} Repair Service`,
    problem: `Fault with ${brand.name} purifier`,
    preferredTime: 'Today'
  });

  return (
    <div className="py-10 space-y-12">
      
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-inter">
          <Link href="/" className="hover:text-cyan-600">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/brands" className="hover:text-cyan-600">Brands</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-900 dark:text-white font-semibold">{brand.name} RO Service</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white py-14 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-4">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 uppercase tracking-wider">
            {brand.name} Service Specialist Nagpur
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins">
            {brand.name} RO Water Purifier Repair
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-inter leading-relaxed">
            {brand.description}
          </p>

          <div className="flex flex-wrap gap-4 text-xs font-semibold pt-2">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" /> 100% Genuine {brand.name} Replacement Spares
            </span>
            <span className="flex items-center gap-1.5 text-cyan-400">
              <ShieldCheck className="w-4 h-4" /> {brand.warrantyPeriod}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto py-3.5 px-6 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-sm shadow-xl active:scale-95 transition-transform"
            >
              Book {brand.name} Service Technician
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl active:scale-95 transition-transform flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp {brand.name} Booking
            </a>
          </div>
        </div>
      </section>

      {/* Main Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-8">
          
          {/* Models Handled */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold font-poppins text-slate-900 dark:text-white">
              Popular {brand.name} Models We Service
            </h2>
            <div className="flex flex-wrap gap-2">
              {brand.popularModels.map((model, i) => (
                <span key={i} className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold">
                  {model}
                </span>
              ))}
            </div>
          </div>

          {/* Faults & Solutions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-amber-500/5 border border-amber-500/20 space-y-3">
              <h3 className="text-base font-bold font-poppins text-slate-900 dark:text-white flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" /> Common {brand.name} Faults
              </h3>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 font-inter">
                {brand.commonIssues.map((issue, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                    <span>{issue}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-emerald-500/5 border border-emerald-500/20 space-y-3">
              <h3 className="text-base font-bold font-poppins text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Our Technical Solutions
              </h3>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 font-inter">
                {brand.solutions.map((sol, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{sol}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Sidebar Box */}
        <div className="lg:col-span-4">
          <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4">
            <h4 className="text-lg font-bold font-poppins text-cyan-400">Need {brand.name} Repair Today?</h4>
            <p className="text-xs text-slate-300 font-inter leading-relaxed">
              Our technicians carry authentic {brand.name} compatible filter kits, UV lamps, and SMPS power supplies in mobile service vans across Nagpur.
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
        defaultBrand={brand.name}
      />
    </div>
  );
};
