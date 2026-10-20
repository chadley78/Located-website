import Link from 'next/link'
import { Container } from '@/components/ui/Container'

const links = [
  { href: '/#features', label: 'Features' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
  { href: '/privacy-explained', label: 'Privacy' },
  { href: '/life360-alternatives', label: 'Compare' },
]

export function SiteHeader() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-4">
        <Link href="/" className="text-xl font-bold text-gray-900">
          Located
        </Link>
        <nav aria-label="Main">
          <ul className="flex flex-wrap gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  )
}
