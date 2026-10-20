import { ArticlePage, H2 } from '@/components/aeo/ArticlePage'
import { faqItems } from '@/content/faq'
import { generateSEO, generateFAQSchema } from '@/lib/seo'

const title = 'Located FAQ: Parent Questions Answered'
const description =
  'Answers to common parent questions about Located: price, Android, privacy, encryption, history, battery, arrival alerts and deleting your data.'

export const metadata = generateSEO({ title, description, path: '/faq' })

export default function FaqPage() {
  return (
    <ArticlePage title={title} description={description} path="/faq" extraSchema={[generateFAQSchema(faqItems)]}>
      <p>Short answers to what parents ask most. Pricing, platforms and features are as of October 2026.</p>
      {faqItems.map((i) => (
        <section key={i.q}>
          <H2>{i.q}</H2>
          <p className="mt-2">{i.a}</p>
        </section>
      ))}
    </ArticlePage>
  )
}
