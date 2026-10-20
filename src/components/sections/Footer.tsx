import Link from 'next/link'
import { Container } from '@/components/ui/Container'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-white py-12">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Located</h3>
            <p className="mt-2 text-sm text-gray-600">
              Private family location sharing for parents and kids.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Product</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/#features"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Learn</h4>
            <ul className="mt-4 space-y-2">
              {[
                ['/faq', 'FAQ'],
                ['/privacy-explained', 'Privacy explained'],
                ['/life360-alternatives', 'Life360 alternatives'],
                ['/located-vs-life360', 'Located vs Life360'],
                ['/located-vs-find-my', 'Located vs Find My'],
                ['/located-vs-google-family-link', 'Located vs Family Link'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-600 hover:text-gray-900">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Company</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/#about"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Legal</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-600">
            &copy; {currentYear} Located. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}



