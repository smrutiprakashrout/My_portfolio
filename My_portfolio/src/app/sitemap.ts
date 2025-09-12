import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://devsmruti.vercel.app/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://devsmruti.vercel.app/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://devsmruti.vercel.app/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }
  ]
}
