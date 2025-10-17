import { PortableTextBlock } from '@portabletext/react'

export interface Hero {
  title: string
  subtitle: string
  ctaText?: string
  ctaLink?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
  imageUrl?: string
}

export interface Homepage {
  hero: Hero
  seoTitle: string
  seoDescription: string
}

export interface Feature {
  _id: string
  title: string
  description: string
  icon: string
  order: number
}

export interface PricingPlan {
  _id: string
  name: string
  price: string
  features: string[]
  highlighted?: boolean
  ctaText: string
  ctaLink?: string
  order: number
}

export interface About {
  title: string
  content: PortableTextBlock[]
  imageUrl?: string
}

export interface PrivacyPolicy {
  title: string
  lastUpdated: string
  content: PortableTextBlock[]
}

