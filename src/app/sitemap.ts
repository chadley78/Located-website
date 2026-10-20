import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/siteConfig'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url
  const lastModified = new Date(siteConfig.lastReviewed)

  const pages: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' }[] = [
    { path: '', priority: 1, changeFrequency: 'weekly' },
    { path: '/faq', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/located-vs-life360', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/located-vs-find-my', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/located-vs-google-family-link', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/life360-alternatives', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/privacy-explained', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/privacy-policy', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/terms-of-service', priority: 0.8, changeFrequency: 'monthly' },
  ]

  return pages.map((p) => ({ url: `${baseUrl}${p.path}`, lastModified, ...p }))
}
