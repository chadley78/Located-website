// Central, code-owned facts used by the AEO/AI-visibility pages, schema, sitemap and llms.txt.
// Re-review every 60 days (see README) and bump `lastReviewed`.
export const siteConfig = {
  name: 'Located',
  url: 'https://locatedapp.info',
  appStoreUrl: 'https://apps.apple.com/app/id6753875838',
  // Keep the existing support address; locatedapp.info has no mail records.
  supportEmail: 'chadley78@gmail.com',
  founder: 'Darragh Flood',
  address: {
    streetAddress: '1 Butterfield Grove, Rathfarnham',
    addressLocality: 'Dublin',
    postalCode: 'D14NY16',
    addressCountry: 'IE',
  },
  // ISO dates. `published` = first publication of the AEO pages.
  published: '2026-10-20',
  lastReviewed: '2026-10-20',
  asOfLabel: 'October 2026',
  trialDays: 7,
  prices: { EUR: '9.99', GBP: '9.99', USD: '9.99' },
  retention: '6 months',
  minIos: '15.6',
} as const

export function formatLongDate(iso: string) {
  return new Date(iso + 'T00:00:00Z').toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
