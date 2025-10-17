import { Container } from '@/components/ui/Container'
import { Feature } from '@/types/sanity'

interface FeaturesProps {
  features: Feature[]
}

export function Features({ features }: FeaturesProps) {
  if (!features || features.length === 0) return null

  return (
    <section className="py-20 sm:py-32" id="features">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Features
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to stay connected with your family
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature._id}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-3 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

