'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/icons/Logo';
import { ThemeToggle } from './ThemeToggle';
import { QuickBookingModal } from '@/components/forms/QuickBookingModal';
import { Phone, MessageSquare, ChevronDown, Menu, X, Shield, Wrench, MapPin, Calculator, Activity, BookOpen, Clock, Home, Info, PhoneCall } from 'lucide-react';
import { DUMMY_CONTACT, generateWhatsAppLink } from '@/lib/whatsapp';

export const Header: React.FC = () => {
  const pathname = usePathname();
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

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { href: '/services', label: 'Services', icon: <Wrench className="w-4 h-4" /> },
    { href: '/brands', label: 'Brands', icon: <Shield className="w-4 h-4" /> },
    { href: '/amc-plans', label: 'AMC Plans', icon: <Calculator className="w-4 h-4" /> },
    { href: '/location', label: 'Service Areas', icon: <MapPin className="w-4 h-4" /> },
    { href: '/tds-calculator', label: 'TDS Checker', icon: <Activity className="w-4 h-4" /> },
    { href: '/blog', label: 'Blog', icon: <BookOpen className="w-4 h-4" /> },
    { href: '/about', label: 'About Us', icon: <Info className="w-4 h-4" /> },
    { href: '/contact', label: 'Contact', icon: <PhoneCall className="w-4 h-4" /> },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-md border-b border-slate-200/80 dark:border-slate-800/80 py-3'
            : 'bg-white dark:bg-slate-950 py-4 border-b border-slate-100 dark:border-slate-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="focus:outline-none shrink-0">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 font-inter text-sm font-medium text-slate-700 dark:text-slate-200">
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg transition-colors ${
                pathname === '/'
                  ? 'text-cyan-600 dark:text-cyan-400 font-bold bg-cyan-50 dark:bg-cyan-950/40'
                  : 'hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
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
                className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                  pathname.startsWith('/services')
                    ? 'text-cyan-600 dark:text-cyan-400 font-bold bg-cyan-50 dark:bg-cyan-950/40'
                    : 'hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                Services <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 w-80 p-3 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 grid grid-cols-1 gap-1 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
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
              className={`px-3 py-2 rounded-lg transition-colors ${
                pathname.startsWith('/brands')
                  ? 'text-cyan-600 dark:text-cyan-400 font-bold bg-cyan-50 dark:bg-cyan-950/40'
                  : 'hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              Brands
            </Link>

            <Link
              href="/amc-plans"
              className={`px-3 py-2 rounded-lg transition-colors ${
                pathname === '/amc-plans'
                  ? 'text-cyan-600 dark:text-cyan-400 font-bold bg-cyan-50 dark:bg-cyan-950/40'
                  : 'hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              AMC Plans
            </Link>

            <Link
              href="/location"
              className={`px-3 py-2 rounded-lg transition-colors ${
                pathname.startsWith('/location')
                  ? 'text-cyan-600 dark:text-cyan-400 font-bold bg-cyan-50 dark:bg-cyan-950/40'
                  : 'hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              Service Areas
            </Link>

            <Link
              href="/tds-calculator"
              className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1 font-semibold ${
                pathname === '/tds-calculator'
                  ? 'text-cyan-600 dark:text-cyan-400 font-bold bg-cyan-50 dark:bg-cyan-950/40'
                  : 'text-cyan-600 dark:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Activity className="w-4 h-4" /> TDS Checker
            </Link>

            <Link
              href="/blog"
              className={`px-3 py-2 rounded-lg transition-colors ${
                pathname.startsWith('/blog')
                  ? 'text-cyan-600 dark:text-cyan-400 font-bold bg-cyan-50 dark:bg-cyan-950/40'
                  : 'hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
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

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
              aria-label="Toggle mobile navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-cyan-600 dark:text-cyan-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Navigation Full-Screen Overlay & Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col bg-white/98 dark:bg-slate-950/98 backdrop-blur-xl animate-in fade-in duration-200">
          
          {/* Mobile Drawer Top Header */}
          <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <Logo size="md" />
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Close mobile menu"
              >
                <X className="w-6 h-6 text-slate-700 dark:text-slate-200" />
              </button>
            </div>
          </div>

          {/* Mobile Drawer Scrollable Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            
            {/* Quick Actions Strip */}
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${DUMMY_CONTACT.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-blue-600 text-white font-bold text-xs shadow-md"
              >
                <Phone className="w-4 h-4" /> Call Helpline
              </a>
              <a
                href={generateWhatsAppLink({
                  name: '',
                  phone: '',
                  city: 'Nagpur',
                  brand: 'Kent / Aquaguard',
                  serviceType: 'Emergency Repair',
                  problem: 'Mobile Direct Request',
                  preferredTime: 'Today'
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-md"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp
              </a>
            </div>

            {/* Full Navigation Links */}
            <div className="space-y-1">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2 font-poppins">
                Navigation Tabs
              </div>

              {navLinks.map((link) => {
                const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between p-3.5 rounded-2xl text-sm font-bold transition-all ${
                      isActive
                        ? 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30'
                        : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className={isActive ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-400'}>
                        {link.icon}
                      </span>
                      {link.label}
                    </span>
                    <span className="text-xs text-slate-400">&rsaquo;</span>
                  </Link>
                );
              })}
            </div>

            {/* Popular RO Services Links */}
            <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 font-poppins">
                Popular Quick Links
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                <Link
                  href="/services/ro-repair"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200"
                >
                  ⚡ Emergency RO Repair
                </Link>
                <Link
                  href="/services/ro-amc"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200"
                >
                  🛡️ Annual AMC Contract
                </Link>
                <Link
                  href="/services/filter-replacement"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200"
                >
                  💧 Filter Replacement
                </Link>
                <Link
                  href="/services/membrane-replacement"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200"
                >
                  🔬 Membrane Change
                </Link>
              </div>
            </div>

            {/* Instant Booking Trigger Button */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsBookingModalOpen(true);
              }}
              className="w-full py-4 px-4 rounded-2xl bg-gradient-to-r from-blue-700 via-blue-800 to-cyan-600 text-white font-extrabold text-sm shadow-xl"
            >
              Book Service Ticket Now (30-45 Min Arrival)
            </button>

          </div>
        </div>
      )}

      {/* Reusable Booking Modal */}
      <QuickBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
};
