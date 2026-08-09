import React from 'react';
import { Hero } from '@/components/home/Hero';
import { BrandShowcase } from '@/components/home/BrandShowcase';
import { ServiceGrid } from '@/components/home/ServiceGrid';
import { TdsCalculator } from '@/components/interactive/TdsCalculator';
import { ProcessTimeline } from '@/components/home/ProcessTimeline';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { TestimonialSection } from '@/components/home/TestimonialSection';
import { CityCoverage } from '@/components/home/CityCoverage';
import { FAQSection } from '@/components/home/FAQSection';
import { EmergencyCTA } from '@/components/home/EmergencyCTA';
import { ShieldCheck, Award, Zap, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-0">
      
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Supported Brands Showcase */}
      <BrandShowcase />

      {/* 3. Comprehensive Services Grid */}
      <ServiceGrid />

      {/* 4. Interactive TDS Water Quality Calculator */}
      <section className="py-16 bg-slate-100 dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <TdsCalculator />
        </div>
      </section>

      {/* 5. 4-Step Process Timeline */}
      <ProcessTimeline />

      {/* 6. Why Choose Us (E-E-A-T Trust) */}
      <WhyChooseUs />

      {/* 7. Verified Customer Reviews */}
      <TestimonialSection />

      {/* 8. Service Areas Network (Nagpur + Vidarbha) */}
      <CityCoverage />

      {/* 9. 40 FAQ Accordion Hub */}
      <FAQSection />

      {/* 10. High Conversion Emergency CTA */}
      <EmergencyCTA />

    </div>
  );
}
