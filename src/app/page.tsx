import { client } from '@/sanity/client'
import {
  homepageQuery,
  featuresQuery,
  pricingPlansQuery,
  aboutQuery,
} from '@/sanity/queries'
import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'
import { Pricing } from '@/components/sections/Pricing'
import { About } from '@/components/sections/About'
import { Footer } from '@/components/sections/Footer'
import { generateSEO, generateOrganizationSchema, generateSoftwareApplicationSchema } from '@/lib/seo'
import type { Homepage, Feature, PricingPlan, About as AboutType } from '@/types/sanity'

// Revalidate every hour
export const revalidate = 3600

async function getHomePageData() {
  try {
    const [homepage, features, pricingPlans, about] = await Promise.all([
      client.fetch<Homepage>(homepageQuery),
      client.fetch<Feature[]>(featuresQuery),
      client.fetch<PricingPlan[]>(pricingPlansQuery),
      client.fetch<AboutType>(aboutQuery),
    ])

    return { homepage, features, pricingPlans, about }
  } catch (error) {
    console.error('Error fetching homepage data:', error)
    // Return default data if Sanity is not configured yet
    return {
      homepage: {
        hero: {
          title: 'Located',
          subtitle: 'Stay connected with your family through real-time location sharing.',
          ctaText: 'Download Now',
          ctaLink: '#',
        },
        seoTitle: 'Located - Family Location Sharing',
        seoDescription: 'Stay connected with your family through real-time location sharing and geofencing.',
      },
      features: [],
      pricingPlans: [],
      about: null,
    }
  }
}

export async function generateMetadata() {
  const { homepage } = await getHomePageData()
  
  return generateSEO({
    title: homepage.seoTitle,
    description: homepage.seoDescription,
  })
}

export default async function HomePage() {
  const { homepage, features, pricingPlans, about } = await getHomePageData()

  const organizationSchema = generateOrganizationSchema()
  const softwareSchema = generateSoftwareApplicationSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema),
        }}
      />
      <main>
        <Hero hero={homepage.hero} />
        <Features features={features} />
        <Pricing plans={pricingPlans} />
        {about && <About about={about} />}
        <Footer />
      </main>
    </>
  )
}
