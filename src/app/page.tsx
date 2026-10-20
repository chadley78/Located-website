import { client } from '@/sanity/client'
import { aboutQuery } from '@/sanity/queries'
import { About } from '@/components/sections/About'
import { Footer } from '@/components/sections/Footer'
import { SiteHeader } from '@/components/aeo/SiteHeader'
import { JsonLd } from '@/components/aeo/JsonLd'
import {
  HomeIntro,
  BestAppAnswer,
  HomeFeatures,
  HomePricing,
  HomePrivacy,
} from '@/components/aeo/Home'
import {
  generateSEO,
  generateOrganizationSchema,
  generateMobileApplicationSchema,
  generateWebPageSchema,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
} from '@/lib/seo'
import type { About as AboutType } from '@/types/sanity'

// Revalidate every hour
export const revalidate = 3600

// The hero, definition, pricing, features and privacy copy now live in code
// (src/components/aeo/Home.tsx, src/lib/siteConfig.ts) so every claim is reviewed in
// version control. Only the "About" section is still read from Sanity.
async function getAbout() {
  try {
    return await client.fetch<AboutType>(aboutQuery)
  } catch (error) {
    console.error('Error fetching about data:', error)
    return null
  }
}

export const metadata = generateSEO({ title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION })

export default async function HomePage() {
  const about = await getAbout()

  return (
    <>
      <JsonLd data={generateOrganizationSchema()} />
      <JsonLd data={generateMobileApplicationSchema()} />
      <JsonLd data={generateWebPageSchema({ name: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION, path: '/' })} />
      <SiteHeader />
      <main>
        <HomeIntro />
        <BestAppAnswer />
        <HomeFeatures />
        <HomePricing />
        <HomePrivacy />
        {about && <About about={about} />}
      </main>
      <Footer />
    </>
  )
}
