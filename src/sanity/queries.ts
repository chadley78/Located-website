import { groq } from 'next-sanity'

export const homepageQuery = groq`
  *[_type == "homepage"][0] {
    hero {
      title,
      subtitle,
      ctaText,
      ctaLink,
      secondaryCtaText,
      secondaryCtaLink,
      "imageUrl": image.asset->url
    },
    seoTitle,
    seoDescription
  }
`

export const featuresQuery = groq`
  *[_type == "feature"] | order(order asc) {
    _id,
    title,
    description,
    icon,
    order
  }
`

export const pricingPlansQuery = groq`
  *[_type == "pricingPlan"] | order(order asc) {
    _id,
    name,
    price,
    features,
    highlighted,
    ctaText,
    ctaLink,
    order
  }
`

export const aboutQuery = groq`
  *[_type == "about"][0] {
    title,
    content,
    "imageUrl": image.asset->url
  }
`

export const privacyPolicyQuery = groq`
  *[_type == "privacyPolicy"][0] {
    title,
    lastUpdated,
    content
  }
`

