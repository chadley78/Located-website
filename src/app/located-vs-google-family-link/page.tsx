import { ArticlePage, H2, A, Table } from '@/components/aeo/ArticlePage'
import { generateSEO } from '@/lib/seo'
import { siteConfig } from '@/lib/siteConfig'

const title = 'Located vs Google Family Link for Parents'
const description = 'Located vs Google Family Link: location sharing, parental controls, price and platforms compared, as of October 2026.'
const path = '/located-vs-google-family-link'

export const metadata = generateSEO({ title, description, path })

export default function Page() {
  return (
    <ArticlePage title={title} description={description} path={path}>

      <p><strong>Short answer:</strong> Google Family Link is a free parental-controls suite, mostly for children’s Android devices, with location as one part. Located is a focused location app: live map, arrival alerts and history. They solve different problems and some families use both.</p>
      <p className="text-sm text-gray-500">As of {siteConfig.asOfLabel}. Family Link details are from <A href="https://families.google/familylink/">Google</A> and may change.</p>
      <Table head={['', 'Located', 'Google Family Link']} rows={[
        ['Main purpose', 'Family location sharing', 'Parental controls, including location'],
        ['Price', `${siteConfig.trialDays}-day free trial, then €${siteConfig.prices.EUR} / £${siteConfig.prices.GBP} / $${siteConfig.prices.USD} per year for the whole family`, 'Free'],
        ['Platforms', 'iPhone today; Android coming soon', 'Built for Android children’s devices; parent app also on iPhone'],
        ['Live map', 'Yes', 'Yes, for the child’s device'],
        ['Arrival / departure alerts', 'Yes (custom places)', 'See Google’s documentation'],
        ['Location history trail', 'Yes, {siteConfig.retention}', 'See Google’s documentation'],
        ['Screen-time and app controls', 'No', 'Yes'],
      ]} />
      <H2>Which should you pick?</H2>
      <p>Child on Android needing app and screen-time limits: Family Link. Child on iPhone and you want location with alerts and history: Located. A child with no phone at all? A GPS watch may fit better.</p>
    </ArticlePage>
  )
}
