import { ArticlePage, H2, A, Table } from '@/components/aeo/ArticlePage'
import { generateSEO } from '@/lib/seo'
import { siteConfig } from '@/lib/siteConfig'

const title = 'Located vs Apple Find My: Which Is Better?'
const description = 'Located vs Apple Find My for families: price, alerts, history and Android support compared, as of October 2026.'
const path = '/located-vs-find-my'

export const metadata = generateSEO({ title, description, path })

export default function Page() {
  return (
    <ArticlePage title={title} description={description} path={path}>

      <p><strong>Short answer:</strong> If everyone in your family has an Apple device and you only need to see a map, Find My is free and built in. Located adds a family structure with parent and child roles, a location history trail and a dedicated app, for a yearly fee.</p>
      <p className="text-sm text-gray-500">As of {siteConfig.asOfLabel}. Find My details are from <A href="https://www.apple.com/icloud/find-my/">Apple</A> and may change.</p>
      <Table head={['', 'Located', 'Apple Find My']} rows={[
        ['Price', `${siteConfig.trialDays}-day free trial, then €${siteConfig.prices.EUR} / £${siteConfig.prices.GBP} / $${siteConfig.prices.USD} per year for the whole family`, 'Free, built into Apple devices'],
        ['Platforms', 'iPhone today; Android coming soon', 'Apple devices'],
        ['Setup', 'Install the app; join a family with an invitation code', 'Nothing to install; share location from Apple devices'],
        ['Parent and child roles', 'Yes', 'Uses Apple Family Sharing / location sharing'],
        ['Arrival / departure alerts', 'Yes (custom places)', 'Yes (notifications on arrival or departure)'],
        ['Location history trail', 'Yes, {siteConfig.retention}', 'No history of people’s past locations'],
        ['Data selling', 'Never sold; no ads', 'See Apple’s privacy policy'],
      ]} />
      <H2>Which should you pick?</H2>
      <p>Free and simple: Find My. Want a history trail and a family-focused app: Located. See also <A href="/located-vs-life360">Located vs Life360</A>.</p>
    </ArticlePage>
  )
}
