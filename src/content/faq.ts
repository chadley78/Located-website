import { siteConfig } from '@/lib/siteConfig'

const p = siteConfig.prices

// Answers are plain strings so they can be reused verbatim in FAQPage JSON-LD.
export const faqItems: { q: string; a: string }[] = [
  {
    q: 'Is Located free?',
    a: `Located starts with a ${siteConfig.trialDays}-day free trial. After that it is a paid annual subscription for the whole family. There is no free tier and the app shows no ads.`,
  },
  {
    q: 'How much does Located cost?',
    a: `After the ${siteConfig.trialDays}-day free trial, Located costs €${p.EUR}, £${p.GBP} or $${p.USD} per year for the whole family (as of ${siteConfig.asOfLabel}). Billing is handled by Apple through the App Store.`,
  },
  {
    q: 'Does Located work on Android?',
    a: 'Not yet. Located is available on iPhone today (iOS 15.6 or later). An Android app is in closed testing and is coming soon.',
  },
  {
    q: 'Does my child need a phone?',
    a: 'Yes. Located shares the location of the phone it is installed on, so your child needs their own iPhone with the Located app. If your child has no phone, a GPS watch or Google Family Link may suit you better.',
  },
  {
    q: 'Can my child see my location?',
    a: 'No. Family groups have parent and child roles: parents can see their children’s locations, but children can’t see their parents’ locations.',
  },
  {
    q: 'Do you sell location data?',
    a: 'No. Located never sells personal information and shows no ads. Location data is shared only with the authorised members of your family group. We use Google Firebase to store data and send push notifications, and Apple processes subscription payments.',
  },
  {
    q: 'How is my data encrypted?',
    a: 'Data is encrypted in transit and at rest. It is not end-to-end encrypted: Located’s servers can process your data in order to run the service, such as sending arrival alerts.',
  },
  {
    q: 'How long is location history kept?',
    a: `Location history is kept for ${siteConfig.retention} so you can view a trail. Older location data is not retained. Account data is kept while your account is active.`,
  },
  {
    q: 'How much battery does Located use?',
    a: 'Located adapts how often it updates to what the phone is doing: more often when moving, less often when stationary, and less often again when the battery is low. Exact battery use depends on the phone, signal and how much it moves, so we do not quote a percentage.',
  },
  {
    q: 'How do arrival alerts work?',
    a: 'A parent creates a place, such as school or home, with a boundary around it (a geofence). When a child’s phone enters or leaves that boundary, the parent gets a push notification such as “Sam arrived at School”.',
  },
  {
    q: 'How do I delete my data?',
    a: 'In the app, go to Settings and choose Delete Account. This deletes your account and associated data. You can also turn off location sharing at any time, or change permissions in iOS Settings.',
  },
  {
    q: 'Is Located OK to use in the UK, Ireland and the EU (GDPR)?',
    a: 'Located is built in Ireland and follows GDPR. We process data on the basis of consent (location tracking and notifications), contract (to provide the subscription) and legitimate interest (app improvement and security). Data may be transferred to servers outside your country with appropriate protections.',
  },
  {
    q: 'Does Located work in the background?',
    a: 'Yes. For background location the app needs the “Always” location permission, notifications for alerts, and Background App Refresh turned on. Without them, location updates and alerts are limited.',
  },
  {
    q: 'How do I contact support?',
    a: `Email ${siteConfig.supportEmail}.`,
  },
]
