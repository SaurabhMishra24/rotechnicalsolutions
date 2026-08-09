'use client';

import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { generateWhatsAppLink, DUMMY_CONTACT } from '@/lib/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = generateWhatsAppLink({
    name: '',
    phone: '',
    city: 'Nagpur',
    brand: 'Kent / Aquaguard',
    serviceType: 'Emergency Repair',
    problem: 'Direct Floating WhatsApp Request',
    preferredTime: 'Today'
  });

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      
      {/* Phone Call Float Button */}
      <a
        href={`tel:${DUMMY_CONTACT.phoneRaw}`}
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 text-cyan-400 shadow-xl border border-slate-700 hover:bg-slate-800 transition-transform hover:scale-110 active:scale-95"
        title="Call Emergency Helpline"
      >
        <Phone className="w-5 h-5" />
        <span className="absolute right-14 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-800">
          Call Helpline: {DUMMY_CONTACT.phoneDisplay}
        </span>
      </a>

      {/* WhatsApp Main Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 text-white shadow-2xl hover:bg-emerald-500 transition-all hover:scale-110 active:scale-95 ring-4 ring-emerald-500/20"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-7 h-7" />

        {/* Pulse Glow Effect */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping -z-10" />

        {/* Hover Tooltip */}
        <span className="absolute right-16 px-3.5 py-2 rounded-2xl bg-slate-900 text-emerald-400 text-xs font-extrabold whitespace-nowrap shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-emerald-500/30 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Book Service via WhatsApp (Instant Reply)
        </span>
      </a>

    </div>
  );
};
