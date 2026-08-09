'use client';

import React, { useState } from 'react';
import { AMC_PLANS } from '@/data/amcPlans';
import { ShieldCheck, CheckCircle2, XCircle, Zap, Phone, MessageSquare, ArrowRight, Award } from 'lucide-react';
import { QuickBookingModal } from '@/components/forms/QuickBookingModal';
import { DUMMY_CONTACT, generateWhatsAppLink } from '@/lib/whatsapp';

export default function AmcPlansPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <div className="py-12 space-y-16">
      
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
            <ShieldCheck className="w-4 h-4 text-cyan-400" /> Save Up To 43% Annually
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins">
            RO Annual Maintenance Contracts (AMC)
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-inter">
            Zero surprise repair bills. Unlimited emergency calls, free sediment/carbon filter changes, membrane cover, and 4 quarterly preventive tune-ups in Nagpur.
          </p>
        </div>
      </div>

      {/* Pricing Cards Comparison */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AMC_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900 border flex flex-col justify-between space-y-6 transition-all duration-300 ${
                plan.popular
                  ? 'border-cyan-500 shadow-2xl ring-2 ring-cyan-500/30 scale-105 z-10'
                  : 'border-slate-200 dark:border-slate-800 shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-extrabold text-[11px] uppercase tracking-wider shadow-md">
                  Most Popular Choice
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">{plan.name}</h3>
                  <p className="text-xs text-slate-500 font-inter mt-1">{plan.tagline}</p>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-cyan-600 dark:text-cyan-400 font-poppins">
                    {plan.price}
                  </span>
                  <span className="text-xs text-slate-400 line-through">{plan.originalPrice}</span>
                  <span className="text-xs text-slate-500">/ Year</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Ideal For: {plan.idealFor}
                </div>

                <div className="space-y-2.5 pt-2 text-xs font-inter border-t border-slate-100 dark:border-slate-800">
                  <div className="font-bold text-slate-900 dark:text-white pb-1">What's Covered:</div>
                  {plan.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2">
                      {inc.covered ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      )}
                      <span className={inc.covered ? 'text-slate-800 dark:text-slate-200' : 'text-slate-400'}>
                        {inc.feature} {inc.note && <span className="text-[10px] text-cyan-600">({inc.note})</span>}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => setSelectedPlan(plan.name)}
                  className={`w-full py-3.5 px-4 rounded-xl font-extrabold text-xs shadow-lg transition-transform active:scale-95 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950'
                      : 'bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-white dark:text-slate-900'
                  }`}
                >
                  {plan.ctaText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <QuickBookingModal
        isOpen={!!selectedPlan}
        onClose={() => setSelectedPlan(null)}
        defaultService={selectedPlan ? `AMC Plan: ${selectedPlan}` : 'RO AMC Package'}
      />
    </div>
  );
}
