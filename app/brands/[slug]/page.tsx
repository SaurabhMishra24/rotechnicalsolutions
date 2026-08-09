import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BRANDS } from '@/data/brands';
import { JsonLd } from '@/components/seo/JsonLd';
import { DUMMY_CONTACT, generateWhatsAppLink } from '@/lib/whatsapp';
import { ShieldCheck, CheckCircle2, Wrench, Phone, MessageSquare, AlertTriangle, ArrowRight, ChevronRight } from 'lucide-react';
import { BrandDetailClient } from './BrandDetailClient';

export async function generateStaticParams() {
  return BRANDS.map((brand) => ({
    slug: brand.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const brand = BRANDS.find((b) => b.slug === slug);
  if (!brand) return { title: 'Brand Not Found' };

  return {
    title: `${brand.name} RO Repair & Service Center in Nagpur | 30-Min Arrival`,
    description: brand.description,
    keywords: brand.seoKeywords
  };
}

export default async function BrandDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const brand = BRANDS.find((b) => b.slug === slug);

  if (!brand) {
    notFound();
  }

  return (
    <>
      <JsonLd type="Service" serviceSlug="ro-repair" />
      <BrandDetailClient brand={brand} />
    </>
  );
}
