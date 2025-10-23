import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { PortableText } from '@/components/PortableText'
import { About as AboutType } from '@/types/sanity'

interface AboutProps {
  about: AboutType
}

export function About({ about }: AboutProps) {
  if (!about) return null

  return (
    <section className="py-20 sm:py-32" id="about">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {about.imageUrl && (
            <div className="relative aspect-square lg:aspect-auto lg:h-[500px]">
              <Image
                src={about.imageUrl}
                alt={about.title}
                fill
                className="rounded-2xl object-cover shadow-xl"
              />
            </div>
          )}
          <div className={!about.imageUrl ? 'lg:col-span-2' : ''}>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {about.title}
            </h2>
            <div className="mt-6">
              <PortableText content={about.content} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}



