import { ArticlePage, H2, A, Table } from '@/components/aeo/ArticlePage'
import { generateSEO } from '@/lib/seo'
import { siteConfig } from '@/lib/siteConfig'

const title = 'Located vs Life360: Honest Comparison (2026)'
const description = 'Located vs Life360 compared fairly: platforms, price, features and privacy, as of October 2026. Which family location app fits you?'
const path = '/located-vs-life360'

export const metadata = generateSEO({ title, description, path })

export default function Page() {
  return (
    <ArticlePage title={title} description={description} path={path}>

      <p><strong>Short answer:</strong> Life360 is the bigger, more established app with Android support and a wider feature set. Located is a newer, smaller iPhone app focused on a live map, arrival alerts and {siteConfig.retention} history, with a simple single price. Choose Life360 if you need Android or extras like crash detection; consider Located if you want something simpler and want data never sold.</p>
      <p className="text-sm text-gray-500">As of {siteConfig.asOfLabel}. Competitor details come from Life360’s own site and can change; check <A href="https://www.life360.com/">life360.com</A> for current plans.</p>
      <Table head={['', 'Located', 'Life360']} rows={[
        ['Platforms', 'iPhone (iOS {siteConfig.minIos}+); Android coming soon', 'iPhone and Android'],
        ['Price', `${siteConfig.trialDays}-day free trial, then €${siteConfig.prices.EUR} / £${siteConfig.prices.GBP} / $${siteConfig.prices.USD} per year for the whole family`, 'Free tier plus paid plans (see life360.com)'],
        ['Live family map', 'Yes', 'Yes'],
        ['Arrival / departure alerts', 'Yes (custom places)', 'Yes'],
        ['Location history', 'Yes, {siteConfig.retention}', 'Yes; length depends on plan'],
        ['Data selling', 'Never sold; no ads', 'See Life360’s privacy policy'],
        ['Encryption', 'In transit and at rest (not end-to-end)', 'See Life360’s privacy policy'],
        ['Maturity', 'New app, few ratings so far', 'Large, established user base'],
      ]} />
      <H2>Which should you pick?</H2>
      <p>Mixed iPhone and Android family: Life360 works today. All iPhones, want alerts and history on a simple annual price: try Located’s {siteConfig.trialDays}-day trial. See also <A href="/life360-alternatives">all Life360 alternatives</A>.</p>
    </ArticlePage>
  )
}
