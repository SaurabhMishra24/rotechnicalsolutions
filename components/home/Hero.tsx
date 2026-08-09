'use client';

import React, { useState } from 'react';
import { Phone, MessageSquare, ShieldCheck, Clock, Award, Star, CheckCircle2, Zap, Wrench, ArrowRight } from 'lucide-react';
import { DUMMY_CONTACT, generateWhatsAppLink } from '@/lib/whatsapp';
import { QuickBookingModal } from '@/components/forms/QuickBookingModal';

export const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950 text-white pt-10 pb-20 lg:pt-16 lg:pb-28">
      
      {/* Background Decorative Glow Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      
      {/* Subtle Mesh Grid lines */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* 20+ Years Badge & Emergency Dispatch tag */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-400/30 backdrop-blur-sm">
                <Award className="w-4 h-4 text-cyan-400" /> 20+ Years Legacy in Nagpur
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                <Zap className="w-3.5 h-3.5 text-emerald-400 animate-pulse" /> 30-45 Min Doorstep Arrival
              </span>
            </div>

            {/* Main Powerful Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-poppins leading-[1.15]">
              Nagpur’s #1 Rated <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                RO Water Purifier
              </span>{' '}
              Repair & AMC Service
            </h1>

            {/* Supporting Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-inter leading-relaxed mx-auto lg:mx-0">
              Instant doorstep technicians for <strong className="text-white">Kent, Aquaguard, Pureit, AO Smith, & all major brands</strong>. Fixed upfront pricing, 100% genuine spare parts, and a 90-day service warranty.
            </p>

            {/* Primary Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              
              {/* Call Now */}
              <a
                href={`tel:${DUMMY_CONTACT.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-cyan-500/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="w-5 h-5 text-slate-950 fill-slate-950" />
                <span>Call Helpline: {DUMMY_CONTACT.phoneDisplay}</span>
              </a>

              {/* WhatsApp Direct */}
              <a
                href={generateWhatsAppLink({
                  name: '',
                  phone: '',
                  city: 'Nagpur',
                  brand: 'Kent / Aquaguard',
                  serviceType: 'Emergency Repair',
                  problem: 'Hero Quick Callout',
                  preferredTime: 'Today'
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/20 transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Book on WhatsApp</span>
              </a>

            </div>

            {/* Trust Indicators Bar */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-white ml-1">4.9/5</span>
                </div>
                <div className="text-[11px] text-slate-400 font-inter mt-0.5">10,000+ Happy Clients</div>
              </div>

              <div>
                <div className="text-sm font-extrabold text-cyan-400 font-poppins">30-45 Mins</div>
                <div className="text-[11px] text-slate-400 font-inter mt-0.5">Fastest Response SLA</div>
              </div>

              <div>
                <div className="text-sm font-extrabold text-emerald-400 font-poppins">90-Day Warranty</div>
                <div className="text-[11px] text-slate-400 font-inter mt-0.5">On All Repair Spares</div>
              </div>

              <div>
                <div className="text-sm font-extrabold text-blue-400 font-poppins">ISO & GST</div>
                <div className="text-[11px] text-slate-400 font-inter mt-0.5">Certified Company</div>
              </div>
            </div>

          </div>

          {/* Right Hero Column: Interactive Express Booking Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-6 sm:p-8 bg-slate-900/90 backdrop-blur-xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/10 space-y-5">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">Express Doorstep Booking</span>
                  <h3 className="text-xl font-bold font-poppins text-white">Get Instant RO Service</h3>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-400/30">
                  <Wrench className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Visiting Fee
                  </span>
                  <span className="font-bold text-white">₹199 (Waived if repaired)</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-2 font-medium">
                    <Clock className="w-4 h-4 text-cyan-400" /> Technician Arrival
                  </span>
                  <span className="font-bold text-white">30 - 45 Minutes</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-2 font-medium">
                    <ShieldCheck className="w-4 h-4 text-blue-400" /> Spare Part Guarantee
                  </span>
                  <span className="font-bold text-white">100% Original OEM</span>
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-sm shadow-xl shadow-emerald-500/20 transition-transform active:scale-95"
              >
                <span>Book Service in 30 Seconds</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center text-[11px] text-slate-400 font-inter">
                No advance payment needed. Pay after inspection.
              </div>

            </div>
          </div>

        </div>
      </div>

      <QuickBookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
