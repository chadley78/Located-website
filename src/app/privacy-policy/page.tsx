import { client } from '@/sanity/client'
import { privacyPolicyQuery } from '@/sanity/queries'
import { Container } from '@/components/ui/Container'
import { PortableText } from '@/components/PortableText'
import { Footer } from '@/components/sections/Footer'
import { generateSEO } from '@/lib/seo'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'
import type { PrivacyPolicy } from '@/types/sanity'

// Revalidate every day
export const revalidate = 86400

async function getPrivacyPolicy() {
  try {
    const privacyPolicy = await client.fetch<PrivacyPolicy>(privacyPolicyQuery)
    return privacyPolicy
  } catch (error) {
    console.error('Error fetching privacy policy:', error)
    // Return default data if Sanity is not configured yet
    return {
      title: 'Privacy Policy',
      lastUpdated: new Date().toISOString(),
      content: [],
    }
  }
}

export async function generateMetadata() {
  const privacyPolicy = await getPrivacyPolicy()
  
  return generateSEO({
    title: `${privacyPolicy.title} - Located`,
    description: 'Read our privacy policy to learn how we collect, use, and protect your data.',
  })
}

export default async function PrivacyPolicyPage() {
  const privacyPolicy = await getPrivacyPolicy()

  return (
    <>
      <div className="bg-white py-12">
        <Container>
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            <svg
              className="mr-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </Container>
      </div>

      <main className="bg-white py-16">
        <Container>
          <article className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {privacyPolicy.title}
            </h1>
            <p className="mt-4 text-gray-600">
              Last updated: {formatDate(privacyPolicy.lastUpdated)}
            </p>
            
            {privacyPolicy.content && privacyPolicy.content.length > 0 ? (
              <div className="mt-10">
                <PortableText content={privacyPolicy.content} />
              </div>
            ) : (
              <div className="mt-10">
                <p className="text-gray-600">
                  Please configure your privacy policy content in Sanity Studio.
                </p>
              </div>
            )}
          </article>
        </Container>
      </main>

      <Footer />
    </>
  )
}

