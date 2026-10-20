import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'

const asOf = `As of ${siteConfig.asOfLabel}`

export function HomeIntro() {
  return (
    <section className="py-16 sm:py-24" aria-labelledby="home-title">
      <Container className="max-w-4xl">
        <h1 id="home-title" className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Located: private family location sharing for parents and kids
        </h1>
        <p className="mt-6 text-lg text-gray-700">
          Located is a family location sharing app for parents and kids. It shows a live family
          map, sends arrival and departure alerts and keeps a {siteConfig.retention} location
          history, and your location data is never sold. It is available on iPhone (iOS{' '}
          {siteConfig.minIos}+), with Android coming soon, and costs €{siteConfig.prices.EUR} / £
          {siteConfig.prices.GBP} / ${siteConfig.prices.USD} per year for the whole family after a{' '}
          {siteConfig.trialDays}-day free trial.
        </p>
        <p className="mt-2 text-sm text-gray-500">{asOf}.</p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button href={siteConfig.appStoreUrl} variant="primary">
            Download on the App Store
          </Button>
          <Button href="/faq" variant="outline">
            Read the FAQ
          </Button>
        </div>
      </Container>
    </section>
  )
}

export function BestAppAnswer() {
  return (
    <section className="bg-gray-50 py-16" aria-labelledby="best-app">
      <Container className="max-w-4xl">
        <h2 id="best-app" className="text-3xl font-bold text-gray-900">
          What’s the best app to see where my kids are?
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          It depends. If everyone has an iPhone and you only want a map, Apple’s Find My is free
          and built in. If your child is young and has no phone, a GPS watch or Google Family Link
          fits better. If you want arrival alerts and location history without your data being
          sold, and you’re on iPhone today, Located is built for that.
        </p>
        <p className="mt-4 text-sm text-gray-600">
          Compare in detail: <Link className="underline" href="/life360-alternatives">Life360 alternatives</Link>.
        </p>
      </Container>
    </section>
  )
}

const features = [
  { icon: '📍', title: 'Real-time family map', text: 'See where family members are on one map.' },
  { icon: '🔔', title: 'Arrival and departure alerts', text: 'Create places such as home or school and get a notification when a child arrives or leaves.' },
  { icon: '🛤️', title: 'Location history', text: `View a trail of where a child has been, kept for ${siteConfig.retention}.` },
  { icon: '👨‍👩‍👧', title: 'Invite-only family groups', text: 'Join with an invitation code. Parent and child roles control who sees what.' },
  { icon: '🔋', title: 'Battery-aware updates', text: 'Updates are less frequent when a child is stationary or the battery is low.' },
]

export function HomeFeatures() {
  return (
    <section className="py-16 sm:py-24" id="features" aria-labelledby="features-title">
      <Container>
        <h2 id="features-title" className="text-3xl font-bold text-gray-900">What Located does</h2>
        <p className="mt-2 text-sm text-gray-500">{asOf}.</p>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <li key={f.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <span aria-hidden="true" className="text-3xl">{f.icon}</span>
              <h3 className="mt-3 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-gray-600">
          Platforms: iPhone today (iOS {siteConfig.minIos} or later); Android is in closed testing and coming soon.
        </p>
      </Container>
    </section>
  )
}

export function HomePricing() {
  const { prices, trialDays } = siteConfig
  return (
    <section className="bg-gray-50 py-16 sm:py-24" id="pricing" aria-labelledby="pricing-title">
      <Container className="max-w-4xl">
        <h2 id="pricing-title" className="text-3xl font-bold text-gray-900">Pricing</h2>
        <p className="mt-4 text-lg text-gray-700">
          Start with a {trialDays}-day free trial. After that, one annual subscription covers the
          whole family:
        </p>
        <ul className="mt-4 list-disc space-y-1 pl-6 text-lg text-gray-700">
          <li>€{prices.EUR} per year (euro)</li>
          <li>£{prices.GBP} per year (pound sterling)</li>
          <li>${prices.USD} per year (US dollar)</li>
        </ul>
        <p className="mt-2 text-sm text-gray-500">
          {asOf}. Billed through the App Store; you can cancel any time in your Apple subscription settings.
        </p>
      </Container>
    </section>
  )
}

export function HomePrivacy() {
  return (
    <section className="py-16 sm:py-24" id="privacy" aria-labelledby="privacy-title">
      <Container className="max-w-4xl">
        <h2 id="privacy-title" className="text-3xl font-bold text-gray-900">Privacy: what we collect and keep</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-lg text-gray-700">
          <li>We collect location (coordinates, timestamps, accuracy), account details (name, email, parent/child role), device identifiers and push tokens, and app usage and crash data.</li>
          <li>Location history is kept for {siteConfig.retention}. Account data is kept while your account is active and deleted when you delete your account.</li>
          <li>Data is encrypted in transit and at rest. Your location data is never sold, and Located shows no ads.</li>
          <li>Location is shared only with authorised members of your family group.</li>
        </ul>
        <p className="mt-4 text-gray-700">
          Built in Ireland and GDPR-aware. Read the <Link className="underline" href="/privacy-explained">plain-English privacy explainer</Link>{' '}
          or the full <Link className="underline" href="/privacy-policy">privacy policy</Link>. {asOf}.
        </p>
        <p className="mt-4 text-gray-700">
          More questions? See the <Link className="underline" href="/faq">FAQ</Link>.
        </p>
      </Container>
    </section>
  )
}

// Testimonials: add a plain-text section here only when real user testimonials exist.
// Do not use placeholders or invented quotes, and don't add aggregateRating schema until real ratings exist.
