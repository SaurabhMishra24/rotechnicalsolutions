import React from 'react';
import { DUMMY_CONTACT, generateWhatsAppLink } from '@/lib/whatsapp';
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck, Zap } from 'lucide-react';
import { EmergencyCTA } from '@/components/home/EmergencyCTA';

export const metadata = {
  title: 'Contact RO Technical Solutions | 24/7 Helpline Nagpur',
  description: 'Reach RO Technical Solutions helpline at +91 98765 43210 or visit our Dharampeth, Nagpur service office. 24/7 emergency dispatch available.'
};

export default function ContactPage() {
  return (
    <div className="py-12 space-y-12">
      
      <div className="bg-slate-900 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
            <Phone className="w-4 h-4 text-cyan-400" /> 24/7 Customer Care
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins">
            Contact RO Technical Solutions
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-inter">
            Have a question or need emergency doorstep RO repair in Nagpur? Call our hotline or send a message on WhatsApp.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
            <h2 className="text-lg font-bold font-poppins text-slate-900 dark:text-white">Customer Support Hotlines</h2>
            
            <a
              href={`tel:${DUMMY_CONTACT.phoneRaw}`}
              className="p-4 rounded-2xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800 flex items-center gap-4 group"
            >
              <div className="p-3 rounded-xl bg-cyan-500 text-slate-950 font-bold group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 fill-slate-950" />
              </div>
              <div>
                <div className="text-[11px] text-slate-500 font-semibold uppercase">24/7 Phone Helpline</div>
                <div className="text-base font-extrabold text-slate-900 dark:text-white font-poppins">{DUMMY_CONTACT.phoneDisplay}</div>
              </div>
            </a>

            <a
              href={generateWhatsAppLink({
                name: '',
                phone: '',
                city: 'Nagpur',
                brand: 'Kent / Aquaguard',
                serviceType: 'Contact Inquiry',
                problem: 'Direct Contact Page',
                preferredTime: 'Today'
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-center gap-4 group"
            >
              <div className="p-3 rounded-xl bg-emerald-600 text-white font-bold group-hover:scale-110 transition-transform">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] text-slate-500 font-semibold uppercase">Instant WhatsApp Chat</div>
                <div className="text-base font-extrabold text-slate-900 dark:text-white font-poppins">{DUMMY_CONTACT.whatsappDisplay}</div>
              </div>
            </a>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-600 text-white shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-xs space-y-1">
                <div className="font-bold text-slate-900 dark:text-white font-poppins">Main Service Center & Office</div>
                <div className="text-slate-600 dark:text-slate-400 font-inter">{DUMMY_CONTACT.address}</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-purple-600 text-white shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-xs space-y-1">
                <div className="font-bold text-slate-900 dark:text-white font-poppins">Email Support</div>
                <div className="text-slate-600 dark:text-slate-400 font-inter">{DUMMY_CONTACT.email}</div>
              </div>
            </div>

          </div>

        </div>

        {/* Google Map Placeholder & Form */}
        <div className="lg:col-span-7 space-y-6">
          <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg h-72">
            <iframe
              src={DUMMY_CONTACT.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RO Technical Solutions Nagpur Location Map"
            />
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg space-y-4">
            <h2 className="text-xl font-bold font-poppins text-slate-900 dark:text-white">Send Us A Message</h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-inter">
              Fill out your details below and our service supervisor will call you back within 10 minutes.
            </p>
            <a
              href={generateWhatsAppLink({
                name: 'Contact Page Inquiry',
                phone: '',
                city: 'Nagpur',
                brand: 'Kent / Aquaguard',
                serviceType: 'RO Repair',
                problem: 'General Inquiry',
                preferredTime: 'Today'
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md"
            >
              <MessageSquare className="w-4 h-4" /> Message Us Directly on WhatsApp
            </a>
          </div>
        </div>

      </div>

      <EmergencyCTA />
    </div>
  );
}
