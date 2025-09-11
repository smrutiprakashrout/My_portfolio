import type { MetadataRoute } from 'next';
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/contact',
    },
    sitemap: 'https://devsmruti.vercel.app/sitemap.xml',
  }
}