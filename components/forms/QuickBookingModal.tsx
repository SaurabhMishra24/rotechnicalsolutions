'use client';

import React, { useState } from 'react';
import { Phone, Send, X, CheckCircle2, Clock, ShieldCheck, Wrench } from 'lucide-react';
import { generateWhatsAppLink, DUMMY_CONTACT } from '@/lib/whatsapp';

interface QuickBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultBrand?: string;
}

export const QuickBookingModal: React.FC<QuickBookingModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'RO Repair',
  defaultBrand = 'Kent'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Nagpur - Dharampeth',
    brand: defaultBrand,
    serviceType: defaultService,
    problem: 'Water flow slow / Bad taste',
    preferredTime: 'Today (30-45 Mins)'
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const link = generateWhatsAppLink(formData);
    setTimeout(() => {
      window.open(link, '_blank');
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg overflow-hidden bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800">
        
        {/* Header Ribbon */}
        <div className="relative bg-gradient-to-r from-blue-900 via-slate-900 to-cyan-900 p-6 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 mb-2">
            <Clock className="w-3.5 h-3.5" /> 30-45 Min Doorstep Service
          </div>
          
          <h3 className="text-xl font-bold font-poppins">Book RO Service</h3>
          <p className="text-xs text-slate-300 mt-1 font-inter">
            Instant technician dispatch in Nagpur & Vidarbha. No advance payment required.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900/40 text-cyan-600 dark:text-cyan-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white font-poppins">
                Opening WhatsApp Booking...
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 max-w-xs mx-auto font-inter">
                Your pre-filled service ticket is generated. Please press send on WhatsApp to instantly confirm with our team.
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={generateWhatsAppLink(formData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl shadow-lg transition-transform active:scale-95"
                >
                  <Send className="w-4 h-4" /> Continue on WhatsApp
                </a>
                <a
                  href={`tel:${DUMMY_CONTACT.phoneRaw}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-xs rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-cyan-600" /> Or Call Helpline: {DUMMY_CONTACT.phoneDisplay}
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 9876543210"
                    className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    City / Area in Nagpur
                  </label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  >
                    <option value="Nagpur - Dharampeth">Nagpur - Dharampeth / Ramdaspeth</option>
                    <option value="Nagpur - Manish Nagar">Nagpur - Manish Nagar / Besa</option>
                    <option value="Nagpur - Sadar">Nagpur - Sadar / Civil Lines</option>
                    <option value="Nagpur - Wardha Road">Nagpur - Wardha Road / Somalwada</option>
                    <option value="Nagpur - Nandanvan">Nagpur - Nandanvan / Kharbi</option>
                    <option value="Nagpur - Other Area">Nagpur - Other Area</option>
                    <option value="Wardha City">Wardha City / Sevagram</option>
                    <option value="Amravati City">Amravati City</option>
                    <option value="Chandrapur">Chandrapur</option>
                    <option value="Yavatmal / Akola">Yavatmal / Akola / Other Vidarbha</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    RO Brand
                  </label>
                  <select
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  >
                    <option value="Kent">Kent Mineral RO</option>
                    <option value="Aquaguard">Aquaguard / Eureka Forbes</option>
                    <option value="AO Smith">AO Smith</option>
                    <option value="HUL Pureit">HUL Pureit</option>
                    <option value="Livpure">Livpure</option>
                    <option value="Blue Star">Blue Star</option>
                    <option value="LG">LG Stainless Steel RO</option>
                    <option value="Whirlpool">Whirlpool</option>
                    <option value="Other / Multi-Brand">Other Brand / Local RO</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Service Needed
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                >
                  <option value="Emergency RO Repair">Emergency Breakdown Repair (Same Day)</option>
                  <option value="RO Filter Replacement">RO Filter & Carbon Replacement</option>
                  <option value="RO Membrane Replacement">RO Membrane Replacement (TDS High)</option>
                  <option value="RO Installation">New RO Installation / Uninstallation</option>
                  <option value="Annual AMC Contract">RO AMC Annual Contract</option>
                  <option value="Free Home TDS Check">Free Doorstep TDS & Quality Audit</option>
                  <option value="Commercial RO Service">Commercial / Industrial Plant Service</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Describe Problem (Optional)
                </label>
                <textarea
                  name="problem"
                  rows={2}
                  value={formData.problem}
                  onChange={handleChange}
                  placeholder="e.g. Water dripping continuously, strange noise, bad smell"
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" /> Book Service via WhatsApp Now
                </button>
              </div>

              {/* Trust Badges under Form */}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-inter">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-600" /> 90-Day Warranty
                </span>
                <span className="flex items-center gap-1">
                  <Wrench className="w-3.5 h-3.5 text-cyan-600" /> 100% Genuine Parts
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-cyan-600" /> Pay After Service
                </span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
