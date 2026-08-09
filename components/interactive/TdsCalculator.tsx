'use client';

import React, { useState } from 'react';
import { Activity, ShieldAlert, CheckCircle2, AlertTriangle, ArrowRight, Zap, RefreshCw } from 'lucide-react';
import { QuickBookingModal } from '@/components/forms/QuickBookingModal';

export const TdsCalculator: React.FC = () => {
  const [tds, setTds] = useState<number>(450);
  const [source, setSource] = useState<'municipal' | 'borewell' | 'tanker'>('borewell');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const getStatus = () => {
    if (tds < 50) {
      return {
        label: 'Micro-Mineral Depleted',
        color: 'text-amber-500 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900',
        badge: 'Low TDS Warning',
        desc: 'Water lacks natural essential minerals (Calcium & Magnesium). May taste bitter or flat.',
        action: 'TDS Controller Adjustment Required'
      };
    } else if (tds <= 150) {
      return {
        label: 'Ideal & Safe Drinking Water',
        color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900',
        badge: 'WHO Recommended Zone',
        desc: 'Perfect mineral balance for direct human consumption, cooking, and health.',
        action: 'System Working Perfectly'
      };
    } else if (tds <= 300) {
      return {
        label: 'Acceptable / Fair Purity',
        color: 'text-blue-600 bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900',
        badge: 'Standard Tap Level',
        desc: 'Suitable for basic drinking, but carbon & sediment filters should be maintained regularly.',
        action: 'Regular Filter Replacement Recommended'
      };
    } else if (tds <= 600) {
      return {
        label: 'High Hardness & Minerals',
        color: 'text-orange-600 bg-orange-50 dark:bg-orange-950/40 border-orange-200 dark:border-orange-900',
        badge: 'RO Membrane Required',
        desc: 'Causes white scaling on boiling vessels. High dissolved salts require multi-stage RO filtration.',
        action: 'High-Rejection RO Membrane Needed'
      };
    } else {
      return {
        label: 'Severe Heavy Minerals & Salts',
        color: 'text-red-600 bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-900',
        badge: 'High Risk Zone',
        desc: 'Excessive TDS common in Nagpur borewell groundwater. High scaling risk, bitter taste, filter choking.',
        action: 'Heavy Duty 100 GPD RO + Booster Pump Required'
      };
    }
  };

  const status = getStatus();

  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200 dark:border-slate-800">
      <div className="flex items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300">
            <Activity className="w-3.5 h-3.5" /> Interactive Tool
          </span>
          <h3 className="text-xl font-bold font-poppins text-slate-900 dark:text-white mt-1">
            Water Quality & TDS Analyzer
          </h3>
        </div>
        <div className="text-right">
          <div className="text-2xl font-extrabold text-cyan-600 dark:text-cyan-400 font-poppins">{tds} <span className="text-xs font-semibold text-slate-500">PPM</span></div>
          <div className="text-[11px] text-slate-500">Parts Per Million</div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Source selector */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
            Select Your Water Source in Nagpur:
          </label>
          <div className="grid grid-cols-3 gap-2">
            {(['municipal', 'borewell', 'tanker'] as const).map(s => (
              <button
                key={s}
                onClick={() => setSource(s)}
                className={`py-2 px-3 rounded-xl text-xs font-bold capitalize transition-all border ${
                  source === s
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                }`}
              >
                {s === 'municipal' ? 'Tap Water' : s === 'borewell' ? 'Ground Borewell' : 'Water Tanker'}
              </button>
            ))}
          </div>
        </div>

        {/* TDS Slider */}
        <div>
          <div className="flex justify-between items-center text-xs font-semibold mb-2 text-slate-700 dark:text-slate-300">
            <span>Drag slider to set TDS reading (PPM):</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold">{tds} PPM</span>
          </div>
          <input
            type="range"
            min={20}
            max={1800}
            step={10}
            value={tds}
            onChange={(e) => setTds(Number(e.target.value))}
            className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
          />
          <div className="flex justify-between text-[10px] text-slate-400 font-inter mt-1">
            <span>20 PPM (Low)</span>
            <span>150 PPM (Ideal)</span>
            <span>500 PPM (Hard)</span>
            <span>1800 PPM (Very High)</span>
          </div>
        </div>

        {/* Dynamic Status Output Box */}
        <div className={`p-5 rounded-2xl border ${status.color} space-y-2 transition-all`}>
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-wider font-poppins">
              {status.label}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/60 dark:bg-black/30">
              {status.badge}
            </span>
          </div>
          <p className="text-xs leading-relaxed opacity-90 font-inter">
            {status.desc}
          </p>
          <div className="pt-2 flex items-center justify-between text-xs font-bold border-t border-black/10 dark:border-white/10">
            <span>Recommended Solution:</span>
            <span className="underline">{status.action}</span>
          </div>
        </div>

        {/* CTA button */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => setIsBookingOpen(true)}
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-700 to-cyan-600 hover:from-blue-600 hover:to-cyan-500 text-white text-xs font-bold shadow-lg shadow-blue-600/20 transition-transform active:scale-95"
          >
            <Zap className="w-4 h-4" /> Book Free Home TDS Check in Nagpur
          </button>
        </div>
      </div>

      <QuickBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultService="Free Doorstep TDS Check"
      />
    </div>
  );
};
