import { ArticlePage, H2, A, Table } from '@/components/aeo/ArticlePage'
import { generateSEO } from '@/lib/seo'
import { siteConfig } from '@/lib/siteConfig'

const title = 'Life360 Alternatives for Families (2026)'
const description = 'Life360 alternatives compared fairly, as of October 2026: Apple Find My, Google Family Link, GPS watches and Located. Which fits your family?'
const path = '/life360-alternatives'

export const metadata = generateSEO({ title, description, path })

export default function Page() {
  return (
    <ArticlePage title={title} description={description} path={path}>

      <p><strong>Short answer:</strong> The best Life360 alternative depends on your devices and what you want. Free and Apple-only: Find My. Parental controls on Android: Google Family Link. Young child without a phone: a GPS watch. Alerts and history on iPhone without data being sold: Located.</p>
      <p className="text-sm text-gray-500">As of {siteConfig.asOfLabel}. Written by the makers of Located, so weigh it accordingly. Competitor facts link to their own sites.</p>
      <Table head={['Option', 'Best for', 'Price', 'Platforms']} rows={[
        [<A key="a" href="/located-vs-find-my">Apple Find My</A>, 'All-Apple families who need a free map', 'Free', 'Apple devices'],
        [<A key="b" href="/located-vs-google-family-link">Google Family Link</A>, 'Parental controls on a child’s Android device', 'Free', 'Android (parent app on iPhone)'],
        ['GPS watch for kids', 'Young children with no phone', 'Device plus usually a plan', 'Standalone'],
        ['Located', 'Alerts and history on iPhone, data never sold', `${siteConfig.trialDays}-day free trial, then €${siteConfig.prices.EUR} / £${siteConfig.prices.GBP} / $${siteConfig.prices.USD} per year for the whole family`, 'iPhone; Android coming soon'],
        [<A key="c" href="/located-vs-life360">Life360</A>, 'Mixed iPhone and Android families wanting the most features', 'Free tier plus paid plans', 'iPhone and Android'],
      ]} />
      <H2>How to choose</H2>
      <ul className="list-disc space-y-1 pl-6">
        <li>Check which phones your family has before anything else.</li>
        <li>Decide if you need history, alerts or just a map.</li>
        <li>Read each app’s privacy policy: what is collected, how long it is kept and whether it is sold.</li>
      </ul>
      <p>Questions? See the <A href="/faq">Located FAQ</A> or the <A href="/privacy-explained">privacy explainer</A>.</p>
    </ArticlePage>
  )
}
