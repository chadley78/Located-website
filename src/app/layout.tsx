import type { Metadata } from 'next'
import { Radio_Canada_Big } from 'next/font/google'
import './globals.css'
import { generateSEO } from '@/lib/seo'

const radioCanadaBig = Radio_Canada_Big({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Regular, Medium, SemiBold, Bold
  variable: '--font-radio-canada',
})

export const metadata: Metadata = generateSEO()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={radioCanadaBig.className}>
        {children}
      </body>
    </html>
  )
}
