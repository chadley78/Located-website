import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { PricingPlan } from '@/types/sanity'

interface PricingProps {
  plans: PricingPlan[]
}

export function Pricing({ plans }: PricingProps) {
  if (!plans || plans.length === 0) return null

  return (
    <section className="py-20 sm:py-32" id="pricing">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Subscription Info
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the plan that works best for your family
          </p>
        </div>

        <div className={`mt-16 grid gap-8 ${plans.length === 1 ? 'lg:grid-cols-1 max-w-md mx-auto' : plans.length === 2 ? 'lg:grid-cols-2 max-w-4xl mx-auto' : 'lg:grid-cols-3'}`}>
          {plans.map((plan) => (
            <Card key={plan._id} highlighted={plan.highlighted}>
              {plan.highlighted && (
                <div className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-600">
                  Recommended
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-5xl font-bold text-gray-900">
                  {plan.price}
                </span>
              </div>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-6 w-6 flex-shrink-0 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="ml-3 text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  href={plan.ctaLink || '#'}
                  variant={plan.highlighted ? 'primary' : 'outline'}
                  className="w-full"
                >
                  {plan.ctaText}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}



