import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  highlighted?: boolean
}

export function Card({ children, className, highlighted }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border bg-white p-8 shadow-sm transition-shadow hover:shadow-md',
        highlighted && 'border-blue-500 ring-2 ring-blue-500 ring-offset-2',
        !highlighted && 'border-gray-200',
        className
      )}
    >
      {children}
    </div>
  )
}



