import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Hero as HeroType } from '@/types/sanity'

interface HeroProps {
  hero: HeroType
}

export function Hero({ hero }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 sm:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              {hero.title}
            </h1>
            <p className="mt-6 text-lg text-gray-600 sm:text-xl">
              {hero.subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              {hero.ctaText && hero.ctaLink && (
                <Button href={hero.ctaLink} variant="primary">
                  {hero.ctaText}
                </Button>
              )}
              {hero.secondaryCtaText && hero.secondaryCtaLink && (
                <Button href={hero.secondaryCtaLink} variant="outline">
                  {hero.secondaryCtaText}
                </Button>
              )}
            </div>
          </div>
          {hero.imageUrl && (
            <div className="relative aspect-square lg:aspect-auto lg:h-[600px]">
              <Image
                src={hero.imageUrl}
                alt={hero.title}
                fill
                className="rounded-2xl object-cover shadow-2xl"
                priority
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}

