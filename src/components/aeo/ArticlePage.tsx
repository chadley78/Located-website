import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Footer } from '@/components/sections/Footer'
import { SiteHeader } from '@/components/aeo/SiteHeader'
import { DateStamp } from '@/components/aeo/DateStamp'
import { JsonLd } from '@/components/aeo/JsonLd'
import {
  generateBreadcrumbSchema,
  generateWebPageSchema,
  generateOrganizationSchema,
} from '@/lib/seo'

interface Props {
  title: string
  description: string
  path: string
  children: React.ReactNode
  extraSchema?: object[]
}

export function ArticlePage({ title, description, path, children, extraSchema = [] }: Props) {
  return (
    <>
      <JsonLd data={generateOrganizationSchema()} />
      <JsonLd data={generateWebPageSchema({ name: title, description, path })} />
      <JsonLd data={generateBreadcrumbSchema([{ name: title, path }])} />
      {extraSchema.map((s, i) => (
        <JsonLd key={i} data={s} />
      ))}
      <SiteHeader />
      <main className="bg-white py-12 sm:py-20">
        <Container className="max-w-3xl">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
            <Link href="/" className="hover:underline">Home</Link> / <span>{title}</span>
          </nav>
          <article className="prose-located mt-6 space-y-6 text-gray-700">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">{title}</h1>
            <DateStamp />
            {children}
          </article>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="pt-4 text-2xl font-semibold text-gray-900">{children}</h2>
}

export function A({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      className="text-[#7B61FF] underline"
      {...(external ? { rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  )
}

export function Table({ head, rows }: { head: string[]; rows: React.ReactNode[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h} scope="col" className="border-b-2 border-gray-300 px-3 py-2 font-semibold text-gray-900">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) =>
                j === 0 ? (
                  <th key={j} scope="row" className="border-b border-gray-200 px-3 py-2 font-medium text-gray-900">{c}</th>
                ) : (
                  <td key={j} className="border-b border-gray-200 px-3 py-2 align-top">{c}</td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
