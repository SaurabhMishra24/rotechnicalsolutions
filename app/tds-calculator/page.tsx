import React from 'react';
import { TdsCalculator } from '@/components/interactive/TdsCalculator';
import { Activity, ShieldCheck } from 'lucide-react';
import { EmergencyCTA } from '@/components/home/EmergencyCTA';

export const metadata = {
  title: 'Free Home Water TDS Calculator & Quality Check Nagpur',
  description: 'Test your drinking water TDS PPM levels. Get WHO recommended guidelines, borewell water treatment recommendations, and free doorstep water quality audits in Nagpur.'
};

export default function TdsCalculatorPage() {
  return (
    <div className="py-12 space-y-12">
      <div className="bg-slate-900 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
            <Activity className="w-4 h-4 text-cyan-400" /> Interactive Water Audit
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins">
            Water Quality & TDS Health Check
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-inter">
            Calculate if your drinking water falls within WHO safe limits (80-150 PPM) and find the exact filtration technology needed for your home.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <TdsCalculator />
      </div>

      <EmergencyCTA />
    </div>
  );
}
