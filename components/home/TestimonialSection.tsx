import React from 'react';
import { TESTIMONIALS } from '@/data/testimonials';
import { Star, ShieldCheck, Quote, CheckCircle2 } from 'lucide-react';

export const TestimonialSection: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> 4.9★ Rated By 10,000+ Customers
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Verified Customer Reviews
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-inter">
            Read real feedback from homeowners, doctors, hotels, and business owners across Nagpur and Vidarbha.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="rounded-3xl p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md flex flex-col justify-between space-y-4 hover:shadow-xl transition-all"
            >
              <div className="space-y-3">
                {/* Rating stars & verified badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" /> Verified Service
                  </span>
                </div>

                <Quote className="w-6 h-6 text-cyan-600/40" />

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-inter leading-relaxed italic">
                  "{review.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white font-poppins">{review.name}</div>
                  <div className="text-[11px] text-slate-500 font-inter">{review.role} • {review.location}</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-bold text-cyan-600 dark:text-cyan-400 uppercase">{review.purifierModel}</div>
                  <div className="text-[10px] text-slate-400">{review.serviceType}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
