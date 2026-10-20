import { Metadata } from 'next'
import { siteConfig } from '@/lib/siteConfig'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  path?: string
}

export const DEFAULT_TITLE = 'Located – Private Family Location App for Kids & Parents'
export const DEFAULT_DESCRIPTION =
  'Located is a private family location app for parents and kids: live map, arrival alerts, 6-month history. 7-day free trial, then €9.99/£9.99/$9.99 a year.'

export function generateSEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = '/og-image.png',
  path = '',
}: SEOProps = {}): Metadata {
  const url = `${siteConfig.url}${path}`
  return {
    title: { absolute: title },
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: 'Located – private family location sharing' }],
      url,
      siteName: 'Located',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
    metadataBase: new URL(siteConfig.url),
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: 'Located',
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    founder: { '@type': 'Person', name: siteConfig.founder },
    address: { '@type': 'PostalAddress', ...siteConfig.address },
    sameAs: [siteConfig.appStoreUrl],
  }
}

// No aggregateRating until real ratings exist.
export function generateMobileApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'Located',
    description:
      'Located is a private family location sharing app for parents and kids, with a live family map, arrival and departure alerts and location history.',
    applicationCategory: 'LifestyleApplication',
    operatingSystem: `iOS ${siteConfig.minIos}+`,
    downloadUrl: siteConfig.appStoreUrl,
    installUrl: siteConfig.appStoreUrl,
    publisher: { '@id': `${siteConfig.url}/#organization` },
    offers: (Object.entries(siteConfig.prices) as [string, string][]).map(
      ([priceCurrency, price]) => ({
        '@type': 'Offer',
        price,
        priceCurrency,
        description: `${siteConfig.trialDays}-day free trial, then ${price} ${priceCurrency} per year for the whole family`,
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price,
          priceCurrency,
          billingDuration: 1,
          unitCode: 'ANN',
        },
      })
    ),
  }
}

export function generateWebPageSchema(opts: {
  name: string
  description: string
  path: string
  datePublished?: string
  dateModified?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: opts.name,
    description: opts.description,
    url: `${siteConfig.url}${opts.path}`,
    datePublished: opts.datePublished ?? siteConfig.published,
    dateModified: opts.dateModified ?? siteConfig.lastReviewed,
    isPartOf: { '@type': 'WebSite', name: 'Located', url: siteConfig.url },
    publisher: { '@id': `${siteConfig.url}/#organization` },
  }
}

export function generateBreadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...crumbs].map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${siteConfig.url}${c.path === '/' ? '' : c.path}`,
    })),
  }
}

export function generateFAQSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  }
}
