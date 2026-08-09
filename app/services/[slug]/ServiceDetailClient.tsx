'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ServiceItem } from '@/data/services';
import { QuickBookingModal } from '@/components/forms/QuickBookingModal';
import { DUMMY_CONTACT, generateWhatsAppLink } from '@/lib/whatsapp';
import { ShieldCheck, Clock, CheckCircle2, Phone, MessageSquare, Wrench, AlertTriangle, ArrowRight, HelpCircle, ChevronRight } from 'lucide-react';

interface ServiceDetailClientProps {
  service: ServiceItem;
}

export const ServiceDetailClient: React.FC<ServiceDetailClientProps> = ({ service }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const whatsappUrl = generateWhatsAppLink({
    name: '',
    phone: '',
    city: 'Nagpur',
    brand: 'Kent / Aquaguard',
    serviceType: service.title,
    problem: `Inquiry for ${service.title}`,
    preferredTime: 'Today'
  });

  return (
    <div className="py-10 space-y-12">
      
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-inter">
          <Link href="/" className="hover:text-cyan-600">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/services" className="hover:text-cyan-600">Services</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-900 dark:text-white font-semibold">{service.title}</span>
        </nav>
      </div>

      {/* Service Hero Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white py-14 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 uppercase tracking-wider">
                {service.category} Service
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-400" /> {service.turnaround} Response
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins">
              {service.title} in Nagpur
            </h1>

            <p className="text-sm sm:text-base text-slate-300 font-inter leading-relaxed max-w-2xl">
              {service.fullDesc}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold pt-2">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <ShieldCheck className="w-4 h-4" /> {service.warranty}
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" /> 100% Genuine OEM Spares
              </span>
              <span className="flex items-center gap-1.5 text-blue-400">
                <Wrench className="w-4 h-4" /> Fixed Upfront Price: {service.priceStarting}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-sm shadow-xl transition-transform active:scale-95"
              >
                Book {service.title} Now
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl transition-transform active:scale-95"
              >
                <MessageSquare className="w-4 h-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Service Quick Card */}
          <div className="lg:col-span-4 bg-slate-900/90 p-6 rounded-3xl border border-cyan-500/30 space-y-4 shadow-xl">
            <div className="text-center space-y-1">
              <span className="text-xs text-slate-400 font-inter">Estimated Starting Rate</span>
              <div className="text-3xl font-extrabold text-cyan-400 font-poppins">{service.priceStarting}</div>
              <span className="text-[11px] text-emerald-400 block font-semibold">Inspection fee waived if service booked</span>
            </div>

            <div className="space-y-2 border-t border-slate-800 pt-4 text-xs font-inter">
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Doorstep Response:</span>
                <span className="font-bold text-white">{service.turnaround}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Service Coverage:</span>
                <span className="font-bold text-white">Entire Nagpur & Vidarbha</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400">Warranty Period:</span>
                <span className="font-bold text-white">{service.warranty}</span>
              </div>
            </div>

            <a
              href={`tel:${DUMMY_CONTACT.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-700 to-cyan-600 text-white font-bold text-xs shadow-md"
            >
              <Phone className="w-4 h-4" /> Direct Hotline: {DUMMY_CONTACT.phoneDisplay}
            </a>
          </div>

        </div>
      </section>

      {/* Main Content Details Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        <div className="lg:col-span-8 space-y-10">
          
          {/* Key Features */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-poppins text-slate-900 dark:text-white">
              What Is Included In Our {service.title} Service?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.keyFeatures.map((feature, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 dark:text-slate-300 font-inter font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Symptoms Solved */}
          <div className="space-y-4 p-6 rounded-3xl bg-amber-500/5 border border-amber-500/20">
            <h3 className="text-lg font-bold font-poppins text-slate-900 dark:text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" /> Symptoms & Faults We Resolve
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300 font-inter">
              {service.commonSymptoms.map((symptom, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>{symptom}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Process Breakdown */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-poppins text-slate-900 dark:text-white">
              Step-by-Step Service Workflow
            </h3>
            <div className="space-y-3">
              {service.processSteps.map((step, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-cyan-600 text-white font-bold flex items-center justify-center font-poppins shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white font-poppins">{step.title}</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-inter mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-xl font-bold font-poppins text-slate-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-cyan-600" /> Frequently Asked Questions
            </h3>
            <div className="space-y-3">
              {service.faqs.map((faq, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-slate-900 dark:text-white font-poppins">{faq.question}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 font-inter">{faq.answer}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4 sticky top-24">
            <h4 className="text-lg font-bold font-poppins text-cyan-400">Need Immediate Help?</h4>
            <p className="text-xs text-slate-300 font-inter leading-relaxed">
              Our mobile engineers are currently active in Dharampeth, Manish Nagar, Sadar, and Wardha Road.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full py-3 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg transition-transform active:scale-95"
            >
              Book Service Ticket Now
            </button>
            <a
              href={`tel:${DUMMY_CONTACT.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs"
            >
              <Phone className="w-4 h-4 text-cyan-400" /> Call {DUMMY_CONTACT.phoneDisplay}
            </a>
          </div>
        </div>

      </div>

      <QuickBookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService={service.title}
      />
    </div>
  );
};
