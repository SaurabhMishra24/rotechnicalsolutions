import React from 'react';
import { ShieldCheck, Award, Wrench, Clock, CheckCircle2, DollarSign, Users, ThumbsUp } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const trustPoints = [
    {
      icon: <Award className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
      title: '20+ Years Local Experience',
      desc: 'Deep technical mastery of Nagpur borewell TDS variations and municipal water purification engineering.'
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: '10,000+ Satisfied Customers',
      desc: 'Trusted by top households, apartments, private hospitals, schools, and offices across Vidarbha.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      title: '90-Day Service Warranty',
      desc: 'Complete peace of mind. Any fault in replaced parts or service within 90 days is fixed 100% free.'
    },
    {
      icon: <Wrench className="w-6 h-6 text-sky-600 dark:text-sky-400" />,
      title: '100% Genuine OEM Spare Parts',
      desc: 'We use food-grade NSF-certified filters, USA Dow membranes, and original factory transformers.'
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      title: '30-45 Min Doorstep SLA',
      desc: 'Localized fleet of mobile service vans positioned across Dharampeth, Manish Nagar, Sadar, and Wardha Road.'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      title: 'Transparent Upfront Quotes',
      desc: 'Zero surprise bills. Technician inspects first, gives itemized quote, and starts work only after your approval.'
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
            <ThumbsUp className="w-3.5 h-3.5" /> Built On Trust & Excellence
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-poppins">
            Why Nagpur Trusts RO Technical Solutions
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-inter">
            We don’t just fix purifiers—we ensure clean, safe, mineral-rich drinking water for your family every single day.
          </p>
        </div>

        {/* 6 Trust Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl bg-slate-800/60 backdrop-blur-sm border border-slate-700/60 hover:border-cyan-500/40 transition-all duration-300 space-y-3 group"
            >
              <div className="p-3 rounded-2xl bg-slate-900 w-fit group-hover:scale-110 transition-transform border border-slate-700/50">
                {point.icon}
              </div>
              <h3 className="text-lg font-bold font-poppins text-white group-hover:text-cyan-400 transition-colors">
                {point.title}
              </h3>
              <p className="text-xs text-slate-300 font-inter leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ISO & Certification Strip */}
        <div className="pt-8 border-t border-slate-800 flex flex-wrap items-center justify-around gap-6 text-center text-xs font-semibold text-slate-300 font-inter">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" /> ISO 9001:2015 Certified Service Standards
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" /> GST Compliant Billing & Warranty Receipts
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Verified Background-Checked Engineers
          </div>
        </div>

      </div>
    </section>
  );
};
