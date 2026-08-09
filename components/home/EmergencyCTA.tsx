'use client';

import React, { useState } from 'react';
import { Phone, MessageSquare, Clock, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import { DUMMY_CONTACT, generateWhatsAppLink } from '@/lib/whatsapp';
import { QuickBookingModal } from '@/components/forms/QuickBookingModal';

export const EmergencyCTA: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-r from-blue-950 via-slate-900 to-cyan-950 text-white relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="rounded-3xl p-8 sm:p-12 bg-slate-900/80 border border-cyan-500/30 backdrop-blur-xl shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
              <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" /> 24/7 Emergency RO Dispatch
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-poppins">
              Is Your Water Purifier Leaking or Not Working?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-inter leading-relaxed">
              Don’t compromise your family's health with dirty or unsafe water. Our certified technician reaches your home in Nagpur within 30 to 45 minutes!
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-300 font-inter pt-2">
              <span className="flex items-center gap-1.5 font-semibold text-white">
                <Clock className="w-4 h-4 text-cyan-400" /> Same Day Guarantee
              </span>
              <span className="flex items-center gap-1.5 font-semibold text-white">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> 90-Day Service Warranty
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full lg:w-auto">
            <a
              href={`tel:${DUMMY_CONTACT.phoneRaw}`}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-sm shadow-xl transition-transform hover:scale-105 active:scale-95"
            >
              <Phone className="w-5 h-5 fill-slate-950" /> Call {DUMMY_CONTACT.phoneDisplay}
            </a>

            <button
              onClick={() => setIsBookingOpen(true)}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm shadow-xl transition-transform hover:scale-105 active:scale-95"
            >
              <MessageSquare className="w-5 h-5" /> Book via WhatsApp
            </button>
          </div>

        </div>
      </div>

      <QuickBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </section>
  );
};
