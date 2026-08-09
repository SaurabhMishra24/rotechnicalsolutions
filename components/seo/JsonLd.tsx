import React from 'react';
import { SERVICES } from '@/data/services';
import { FAQS } from '@/data/faqs';

interface JsonLdProps {
  type?: 'LocalBusiness' | 'Service' | 'FAQPage' | 'Organization' | 'All';
  serviceSlug?: string;
  locationName?: string;
}

export const JsonLd: React.FC<JsonLdProps> = ({
  type = 'All',
  serviceSlug,
  locationName = 'Nagpur'
}) => {
  const currentService = serviceSlug ? SERVICES.find(s => s.slug === serviceSlug) : null;

  // LocalBusiness Schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': 'https://rotechnicalsolutions.com/#localbusiness',
    name: 'RO Technical Solutions',
    description: 'Premier RO Water Purifier Repair, Service, Installation & AMC Company in Nagpur & Vidarbha with 20+ Years Experience.',
    url: 'https://rotechnicalsolutions.com',
    telephone: '+919876543210',
    priceRange: '₹299 - ₹3,499',
    image: 'https://rotechnicalsolutions.com/favicon.svg',
    logo: 'https://rotechnicalsolutions.com/favicon.svg',
    email: 'support@rotechnicalsolutions.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Plot 42, Central Avenue, Near Coffee House Square, Dharampeth',
      addressLocality: 'Nagpur',
      addressRegion: 'Maharashtra',
      postalCode: '440010',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 21.1458,
      longitude: 79.0882
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:00',
        closes: '21:00'
      }
    ],
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Nagpur' },
      { '@type': 'AdministrativeArea', name: 'Dharampeth' },
      { '@type': 'AdministrativeArea', name: 'Manish Nagar' },
      { '@type': 'AdministrativeArea', name: 'Sadar' },
      { '@type': 'AdministrativeArea', name: 'Wardha Road' },
      { '@type': 'AdministrativeArea', name: 'Wardha' },
      { '@type': 'AdministrativeArea', name: 'Amravati' },
      { '@type': 'AdministrativeArea', name: 'Chandrapur' },
      { '@type': 'AdministrativeArea', name: 'Vidarbha' }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '12500',
      bestRating: '5',
      worstRating: '1'
    },
    sameAs: [
      'https://facebook.com/rotechnicalsolutions',
      'https://instagram.com/rotechnicalsolutions',
      'https://g.page/rotechnicalsolutions'
    ]
  };

  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'RO Technical Solutions',
    url: 'https://rotechnicalsolutions.com',
    logo: 'https://rotechnicalsolutions.com/favicon.svg',
    foundingDate: '2006',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+919876543210',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi', 'Marathi']
    }
  };

  // Service Schema
  const serviceSchema = currentService
    ? {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: currentService.title,
        description: currentService.fullDesc,
        provider: {
          '@type': 'LocalBusiness',
          name: 'RO Technical Solutions'
        },
        areaServed: {
          '@type': 'City',
          name: locationName
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'RO Water Purification Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: currentService.title
              },
              price: currentService.priceStarting.replace(/[^0-9]/g, '') || '299',
              priceCurrency: 'INR'
            }
          ]
        }
      }
    : null;

  // FAQ Schema (Top 10 representative FAQs)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.slice(0, 15).map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  // WebSite & SearchAction Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'RO Technical Solutions',
    url: 'https://rotechnicalsolutions.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://rotechnicalsolutions.com/faq?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      )}
    </>
  );
};
