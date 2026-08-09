import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SERVICES } from '@/data/services';
import { JsonLd } from '@/components/seo/JsonLd';
import { QuickBookingModal } from '@/components/forms/QuickBookingModal';
import { DUMMY_CONTACT, generateWhatsAppLink } from '@/lib/whatsapp';
import { ShieldCheck, Clock, CheckCircle2, Phone, MessageSquare, Wrench, AlertTriangle, ArrowRight, HelpCircle } from 'lucide-react';
import { ServiceDetailClient } from './ServiceDetailClient';

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} in Nagpur | Price From ${service.priceStarting}`,
    description: service.shortDesc,
    keywords: service.seoKeywords
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <JsonLd serviceSlug={service.slug} />
      <ServiceDetailClient service={service} />
    </>
  );
}
