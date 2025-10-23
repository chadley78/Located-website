import { sanityClient } from '@/sanity/client'
import { termsOfServiceQuery } from '@/sanity/queries'
import { PortableText } from '@/components/PortableText'
import { Container } from '@/components/ui/Container'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Located',
  description: 'Terms of Service for the Located family location sharing app.',
  openGraph: {
    title: 'Terms of Service - Located',
    description: 'Terms of Service for the Located family location sharing app.',
    type: 'website',
  },
}

export const revalidate = 3600 // Revalidate every hour

async function getTermsOfService() {
  return sanityClient.fetch(termsOfServiceQuery)
}

export default async function TermsOfServicePage() {
  const terms = await getTermsOfService()

  if (!terms) {
    return (
      <Container>
        <div className="py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <p className="text-gray-600">Terms of Service content is not available at this time.</p>
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <div className="py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{terms.title}</h1>
          {terms.lastUpdated && (
            <p className="text-gray-600 mb-8">
              Last updated: {new Date(terms.lastUpdated).toLocaleDateString()}
            </p>
          )}
          <div className="prose prose-lg max-w-none">
            <PortableText value={terms.content} />
          </div>
        </div>
      </div>
    </Container>
  )
}
