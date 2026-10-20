import { ArticlePage, H2, A } from '@/components/aeo/ArticlePage'
import { generateSEO } from '@/lib/seo'
import { siteConfig } from '@/lib/siteConfig'

const title = 'Located Privacy Explained in Plain English'
const description =
  'What data Located collects, who sees it, how long location history is kept, how it is encrypted and how to delete it. Never sold, no ads.'

export const metadata = generateSEO({ title, description, path: '/privacy-explained' })

export default function PrivacyExplained() {
  return (
    <ArticlePage title={title} description={description} path="/privacy-explained">
      <p>
        This page summarises our <A href="/privacy-policy">privacy policy</A> in plain English. If
        the two ever differ, the privacy policy applies. Facts are as of {siteConfig.asOfLabel}.
      </p>
      <H2>What we collect</H2>
      <ul className="list-disc space-y-1 pl-6">
        <li><strong>Location:</strong> GPS coordinates, timestamps and accuracy, plus location history for the trail view and the places (geofences) you create.</li>
        <li><strong>Account:</strong> name, email address, parent or child role, family name, member relationships and invitation codes.</li>
        <li><strong>Device:</strong> device identifiers and push notification tokens.</li>
        <li><strong>Usage:</strong> features used, session duration, error logs and performance data such as crashes.</li>
      </ul>
      <H2>Who can see it</H2>
      <p>Location is shared only with authorised members of your family group. Parents can see their children’s locations. Children can’t see their parents’ locations.</p>
      <H2>Never sold, no ads</H2>
      <p>We do not sell your personal information, and Located shows no ads. We use Google Firebase to store data and send push notifications, and Apple processes subscription payments through the App Store.</p>
      <H2>Encryption</H2>
      <p>Data is encrypted in transit and at rest. It is not end-to-end encrypted.</p>
      <H2>How long we keep it</H2>
      <ul className="list-disc space-y-1 pl-6">
        <li>Location data: {siteConfig.retention}.</li>
        <li>Account data: while your account is active.</li>
        <li>When you delete your account, your data is deleted.</li>
      </ul>
      <H2>Deleting your data and controlling permissions</H2>
      <p>Use Delete Account in the app to delete your account and associated data. You can turn off location sharing at any time and change permissions in iOS Settings; turning them off limits what the app can do.</p>
      <H2>GDPR and children</H2>
      <p>Located is built in Ireland. For EU users we rely on consent (location and notifications), contract (the subscription) and legitimate interest (improving and securing the app). Location tracking of a child requires parental consent.</p>
      <H2>Contact</H2>
      <p>Privacy questions: <A href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</A>. Postal address: {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality} {siteConfig.address.postalCode}, Ireland.</p>
    </ArticlePage>
  )
}
