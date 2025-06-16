import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://oecus-music.com',
      lastModified: new Date('2025-06-16'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
} 