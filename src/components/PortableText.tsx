import { PortableText as PortableTextReact, PortableTextComponents } from '@portabletext/react'
import { PortableTextBlock } from '@portabletext/react'
import { ReactNode } from 'react'

interface PortableTextProps {
  content: PortableTextBlock[]
  className?: string
}

const components: PortableTextComponents = {
  block: {
    h2: ({ children }: { children?: ReactNode }) => (
      <h2 className="mb-4 mt-8 text-3xl font-bold text-gray-900">
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: ReactNode }) => (
      <h3 className="mb-3 mt-6 text-2xl font-semibold text-gray-900">
        {children}
      </h3>
    ),
    h4: ({ children }: { children?: ReactNode }) => (
      <h4 className="mb-2 mt-4 text-xl font-semibold text-gray-900">
        {children}
      </h4>
    ),
    normal: ({ children }: { children?: ReactNode }) => (
      <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }: { children?: ReactNode }) => (
      <ul className="mb-4 ml-6 list-disc space-y-2">{children}</ul>
    ),
    number: ({ children }: { children?: ReactNode }) => (
      <ol className="mb-4 ml-6 list-decimal space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: ReactNode }) => (
      <li className="text-gray-700">{children}</li>
    ),
    number: ({ children }: { children?: ReactNode }) => (
      <li className="text-gray-700">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: { children?: ReactNode }) => (
      <strong className="font-semibold text-gray-900">{children}</strong>
    ),
    em: ({ children }: { children?: ReactNode }) => <em className="italic">{children}</em>,
    code: ({ children }: { children?: ReactNode }) => (
      <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm">
        {children}
      </code>
    ),
    link: ({ children, value }: { children?: ReactNode; value?: { href?: string } }) => (
      <a
        href={value?.href}
        className="text-blue-600 underline hover:text-blue-700"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
}

export function PortableText({ content, className }: PortableTextProps) {
  return (
    <div className={className}>
      <PortableTextReact value={content} components={components} />
    </div>
  )
}

