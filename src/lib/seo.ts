import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
}

export function generateSEO({
  title = 'Located - Family Location Sharing',
  description = 'Stay connected with your family through real-time location sharing and geofencing.',
  image = '/og-image.png',
  url = 'https://locatedapp.info',
}: SEOProps = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
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
    metadataBase: new URL(url),
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Located',
    url: 'https://locatedapp.info',
    logo: 'https://locatedapp.info/logo.png',
    sameAs: [
      // Add social media links when available
    ],
  }
}

export function generateSoftwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Located',
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'iOS',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  }
}



