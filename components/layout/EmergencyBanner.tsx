import React from 'react';
import { Zap, Phone, Clock } from 'lucide-react';
import { DUMMY_CONTACT } from '@/lib/whatsapp';

export const EmergencyBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-cyan-950 text-white text-xs py-2 px-4 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left font-inter">
        
        <div className="flex items-center gap-2 font-medium">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-400/30 text-[11px] animate-pulse">
            <Zap className="w-3 h-3 text-cyan-400" /> 24/7 EMERGENCY
          </span>
          <span className="text-slate-200 text-[11px] sm:text-xs">
            Same Day Doorstep RO Repair in Nagpur & Vidarbha (Arrives in 30-45 Mins)
          </span>
        </div>

        <div className="flex items-center gap-4 text-[11px] sm:text-xs font-semibold">
          <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-cyan-400" /> 20+ Years Experience • ISO Certified
          </span>
          <a
            href={`tel:${DUMMY_CONTACT.phoneRaw}`}
            className="inline-flex items-center gap-1.5 text-cyan-300 hover:text-white font-bold transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
            <span>Call Helpline: {DUMMY_CONTACT.phoneDisplay}</span>
          </a>
        </div>

      </div>
    </div>
  );
};
