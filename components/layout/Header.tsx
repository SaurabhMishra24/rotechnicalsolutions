'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/icons/Logo';
import { ThemeToggle } from './ThemeToggle';
import { QuickBookingModal } from '@/components/forms/QuickBookingModal';
import { Phone, MessageSquare, ChevronDown, Menu, X, Shield, Wrench, MapPin, Calculator, Activity, BookOpen, Clock } from 'lucide-react';
import { DUMMY_CONTACT, generateWhatsAppLink } from '@/lib/whatsapp';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-md border-b border-slate-200/80 dark:border-slate-800/80 py-3'
            : 'bg-white dark:bg-slate-950 py-4 border-b border-slate-100 dark:border-slate-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="focus:outline-none">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 font-inter text-sm font-medium text-slate-700 dark:text-slate-200">
            <Link
              href="/"
              className="px-3 py-2 rounded-lg hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className="inline-flex items-center gap-1 px-3 py-2 rounded-lg hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Services <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 w-80 p-3 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 grid grid-cols-1 gap-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link
                    href="/services/ro-repair"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/70 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                      <Wrench className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white font-poppins">RO Repair (Same Day)</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">45-min doorstep arrival</div>
                    </div>
                  </Link>

                  <Link
                    href="/services/ro-amc"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/70 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white font-poppins">Annual Maintenance (AMC)</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">Save up to 40% on annual repairs</div>
                    </div>
                  </Link>

                  <Link
                    href="/services/filter-replacement"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/70 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white font-poppins">Filter & Membrane Replacement</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">Original food-grade cartridges</div>
                    </div>
                  </Link>

                  <Link
                    href="/services"
                    className="mt-1 pt-2 border-t border-slate-100 dark:border-slate-800 text-center text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline block"
                  >
                    View All 12+ RO Services &rarr;
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/brands"
              className="px-3 py-2 rounded-lg hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Brands
            </Link>

            <Link
              href="/amc-plans"
              className="px-3 py-2 rounded-lg hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              AMC Plans
            </Link>

            <Link
              href="/location"
              className="px-3 py-2 rounded-lg hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Service Areas
            </Link>

            <Link
              href="/tds-calculator"
              className="px-3 py-2 rounded-lg hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1 text-cyan-600 dark:text-cyan-400 font-semibold"
            >
              <Activity className="w-4 h-4" /> TDS Checker
            </Link>

            <Link
              href="/blog"
              className="px-3 py-2 rounded-lg hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Blog
            </Link>
          </nav>

          {/* Action CTAs & Controls */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* Direct Call Button */}
            <a
              href={`tel:${DUMMY_CONTACT.phoneRaw}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold transition-colors"
              title="Call Helpline"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>{DUMMY_CONTACT.phoneDisplay}</span>
            </a>

            {/* Direct WhatsApp Button */}
            <a
              href={generateWhatsAppLink({
                name: '',
                phone: '',
                city: 'Nagpur',
                brand: 'Kent / Aquaguard',
                serviceType: 'Emergency Repair',
                problem: 'Quick Service',
                preferredTime: 'Today'
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-600/20 transition-transform active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
            </a>

            {/* Book Service Trigger Modal Button */}
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-700 via-blue-800 to-cyan-600 hover:from-blue-600 hover:to-cyan-500 text-white text-xs font-extrabold shadow-lg shadow-blue-700/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Book Service
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle mobile navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[73px] bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-2xl p-5 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
            <div className="grid grid-cols-2 gap-2 text-sm font-semibold">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white"
              >
                Home Page
              </Link>
              <Link
                href="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white"
              >
                All 12+ Services
              </Link>
              <Link
                href="/brands"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white"
              >
                Supported Brands
              </Link>
              <Link
                href="/amc-plans"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white"
              >
                AMC Plans
              </Link>
              <Link
                href="/location"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white"
              >
                Nagpur Areas
              </Link>
              <Link
                href="/tds-calculator"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300 font-bold"
              >
                Free TDS Check
              </Link>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`tel:${DUMMY_CONTACT.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-xl font-bold text-sm shadow-md"
              >
                <Phone className="w-4 h-4 text-cyan-400 dark:text-cyan-600" /> Call {DUMMY_CONTACT.phoneDisplay}
              </a>
              <a
                href={generateWhatsAppLink({
                  name: '',
                  phone: '',
                  city: 'Nagpur',
                  brand: 'Kent / Aquaguard',
                  serviceType: 'Emergency Repair',
                  problem: 'Mobile Request',
                  preferredTime: 'Today'
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 text-white rounded-xl font-bold text-sm shadow-md"
              >
                <MessageSquare className="w-4 h-4" /> Message on WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Reusable Booking Modal */}
      <QuickBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
};
