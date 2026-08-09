import React from 'react';
import { notFound } from 'next/navigation';
import { LOCATIONS } from '@/data/locations';
import { JsonLd } from '@/components/seo/JsonLd';
import { LocationDetailClient } from './LocationDetailClient';

export async function generateStaticParams() {
  return LOCATIONS.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) return { title: 'Location Not Found' };

  return {
    title: `RO Water Purifier Repair & Service in ${loc.name} | ${loc.avgResponseTime} SLA`,
    description: loc.description,
    keywords: loc.seoKeywords
  };
}

export default async function LocationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);

  if (!loc) {
    notFound();
  }

  return (
    <>
      <JsonLd locationName={loc.name} />
      <LocationDetailClient location={loc} />
    </>
  );
}
