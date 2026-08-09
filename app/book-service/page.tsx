'use client';

import React, { useState } from 'react';
import { generateWhatsAppLink, DUMMY_CONTACT } from '@/lib/whatsapp';
import { Send, Phone, Clock, ShieldCheck, Wrench, CheckCircle2 } from 'lucide-react';

export default function BookServicePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Nagpur - Dharampeth',
    brand: 'Kent',
    serviceType: 'Emergency RO Repair',
    problem: '',
    preferredTime: 'Today (As soon as possible)'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const link = generateWhatsAppLink(formData);
    window.open(link, '_blank');
  };

  return (
    <div className="py-12 space-y-12">
      <div className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
            <Clock className="w-4 h-4 text-cyan-400" /> 30-45 Min Doorstep Arrival
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-poppins">
            Book RO Service Ticket
          </h1>
          <p className="text-sm text-slate-300 max-w-xl mx-auto font-inter">
            No advance payment needed. Fill out the quick form below to auto-compose your pre-filled WhatsApp service booking ticket.
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Dr. Rajesh Sharma"
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 9876543210"
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  City / Area
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                >
                  <option value="Nagpur - Dharampeth">Nagpur - Dharampeth / Ramdaspeth</option>
                  <option value="Nagpur - Manish Nagar">Nagpur - Manish Nagar / Besa</option>
                  <option value="Nagpur - Sadar">Nagpur - Sadar / Civil Lines</option>
                  <option value="Nagpur - Wardha Road">Nagpur - Wardha Road / Somalwada</option>
                  <option value="Nagpur - Nandanvan">Nagpur - Nandanvan / Kharbi</option>
                  <option value="Wardha City">Wardha City / Sevagram</option>
                  <option value="Amravati City">Amravati City</option>
                  <option value="Chandrapur">Chandrapur</option>
                  <option value="Yavatmal / Akola">Yavatmal / Akola</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  RO Brand
                </label>
                <select
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                >
                  <option value="Kent">Kent Mineral RO</option>
                  <option value="Aquaguard">Aquaguard / Eureka Forbes</option>
                  <option value="AO Smith">AO Smith</option>
                  <option value="HUL Pureit">HUL Pureit</option>
                  <option value="Livpure">Livpure</option>
                  <option value="Blue Star">Blue Star</option>
                  <option value="LG">LG Stainless Steel RO</option>
                  <option value="Whirlpool">Whirlpool</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Service Type Needed
              </label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              >
                <option value="Emergency RO Repair">Emergency RO Repair (Same Day)</option>
                <option value="RO Installation">RO Installation & Wall Mounting</option>
                <option value="RO AMC Plan">RO AMC Annual Maintenance Contract</option>
                <option value="Filter Replacement">Sediment & Pre-Carbon Filter Change</option>
                <option value="Membrane Replacement">RO Membrane Replacement (TDS High)</option>
                <option value="Free TDS Check">Free Doorstep TDS & Quality Audit</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Problem Description (Optional)
              </label>
              <textarea
                name="problem"
                rows={3}
                value={formData.problem}
                onChange={handleChange}
                placeholder="e.g. Water taste sour, motor humming, filter light red"
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-xl shadow-lg transition-transform active:scale-95"
              >
                <Send className="w-4 h-4" /> Open WhatsApp Pre-Filled Booking
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
