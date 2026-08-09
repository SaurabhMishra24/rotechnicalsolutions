import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/icons/Logo';
import { Phone, Mail, MapPin, ShieldCheck, Clock, Award, CheckCircle2 } from 'lucide-react';
import { DUMMY_CONTACT, generateWhatsAppLink } from '@/lib/whatsapp';
import { SERVICES } from '@/data/services';
import { BRANDS } from '@/data/brands';
import { LOCATIONS } from '@/data/locations';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Column 1: Company Info & Trust */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" />
            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              RO Technical Solutions is Nagpur & Vidarbha’s premier local RO water purifier service company. With 20+ years of technical experience, 10,000+ satisfied customers, and 100% genuine replacement parts, we deliver 30-45 minute express doorstep repairs.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-900/60 text-blue-300 border border-blue-700/50">
                <Award className="w-3.5 h-3.5 text-cyan-400" /> ISO Certified
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-900/60 text-cyan-300 border border-cyan-700/50">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> GST Registered
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-900/60 text-emerald-300 border border-emerald-700/50">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 90-Day Warranty
              </span>
            </div>

            {/* Direct Emergency Contact Box */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 border border-cyan-500/30 flex items-center justify-between gap-4 mt-4">
              <div>
                <div className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider">24/7 Emergency Dispatch</div>
                <div className="text-base font-extrabold text-white font-poppins">{DUMMY_CONTACT.phoneDisplay}</div>
              </div>
              <a
                href={`tel:${DUMMY_CONTACT.phoneRaw}`}
                className="px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg transition-transform active:scale-95 shrink-0"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Column 2: Our Core Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-poppins border-b border-slate-800 pb-2">
              Our RO Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.slice(0, 7).map(service => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-cyan-400 transition-colors flex items-center gap-1"
                  >
                    <span>&rsaquo;</span> {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-cyan-400 font-semibold hover:underline">
                  View All 12+ Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Brands Serviced */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-poppins border-b border-slate-800 pb-2">
              Brands We Service
            </h4>
            <ul className="space-y-2 text-xs">
              {BRANDS.map(brand => (
                <li key={brand.id}>
                  <Link
                    href={`/brands/${brand.slug}`}
                    className="hover:text-cyan-400 transition-colors flex items-center gap-1"
                  >
                    <span>&rsaquo;</span> {brand.name} RO Service
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Service Areas & Cities */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-poppins border-b border-slate-800 pb-2">
              Service Areas
            </h4>
            <ul className="space-y-2 text-xs">
              {LOCATIONS.slice(0, 8).map(loc => (
                <li key={loc.id}>
                  <Link
                    href={`/location/${loc.slug}`}
                    className="hover:text-cyan-400 transition-colors flex items-center gap-1"
                  >
                    <span>&rsaquo;</span> {loc.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/location" className="text-cyan-400 font-semibold hover:underline">
                  View All Vidarbha Cities &rarr;
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Middle Divider: Quick Keywords Tag Cloud for SEO */}
        <div className="pt-6 border-t border-slate-900">
          <div className="text-[11px] font-bold uppercase text-slate-500 mb-2">Popular Search Queries</div>
          <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
            <span className="bg-slate-900 px-2 py-1 rounded">RO Repair Nagpur</span>
            <span className="bg-slate-900 px-2 py-1 rounded">Kent RO Repair Nagpur</span>
            <span className="bg-slate-900 px-2 py-1 rounded">Aquaguard Service Nagpur</span>
            <span className="bg-slate-900 px-2 py-1 rounded">RO AMC Nagpur</span>
            <span className="bg-slate-900 px-2 py-1 rounded">RO Service Manish Nagar</span>
            <span className="bg-slate-900 px-2 py-1 rounded">RO Installation Dharampeth</span>
            <span className="bg-slate-900 px-2 py-1 rounded">Commercial RO Service Vidarbha</span>
            <span className="bg-slate-900 px-2 py-1 rounded">Water Softener Repair Nagpur</span>
            <span className="bg-slate-900 px-2 py-1 rounded">TDS Check Nagpur</span>
            <span className="bg-slate-900 px-2 py-1 rounded">Emergency RO Service Wardha</span>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Disclaimers */}
        <div className="pt-6 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} RO Technical Solutions. All Rights Reserved. Built for Lead Generation & High Conversion.
          </div>

          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-slate-300">About Us</Link>
            <Link href="/contact" className="hover:text-slate-300">Contact</Link>
            <Link href="/faq" className="hover:text-slate-300">FAQ</Link>
            <Link href="/sitemap.xml" className="hover:text-slate-300">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
