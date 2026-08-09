import { MetadataRoute } from 'next';
import { SERVICES } from '@/data/services';
import { BRANDS } from '@/data/brands';
import { LOCATIONS } from '@/data/locations';
import { BLOG_POSTS } from '@/data/blogPosts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rotechnicalsolutions.com';

  const staticRoutes = [
    '',
    '/services',
    '/brands',
    '/location',
    '/amc-plans',
    '/tds-calculator',
    '/blog',
    '/contact',
    '/book-service',
    '/faq',
    '/about'
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8
  }));

  const serviceRoutes = SERVICES.map(s => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9
  }));

  const brandRoutes = BRANDS.map(b => ({
    url: `${baseUrl}/brands/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8
  }));

  const locationRoutes = LOCATIONS.map(l => ({
    url: `${baseUrl}/location/${l.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9
  }));

  const blogRoutes = BLOG_POSTS.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  return [...staticRoutes, ...serviceRoutes, ...brandRoutes, ...locationRoutes, ...blogRoutes];
}
