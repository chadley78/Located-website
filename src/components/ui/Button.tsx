import { cn } from '@/lib/utils'
import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  onClick?: () => void
}

export function Button({
  children,
  href,
  variant = 'primary',
  className,
  onClick,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 min-h-[50px]'

  const variants = {
    primary:
      'bg-[#7B61FF] text-white hover:bg-[#6B51EF] focus:ring-[#7B61FF] active:scale-95',
    secondary:
      'bg-[#FFE36E] text-black hover:bg-[#FFD84E] focus:ring-[#FFE36E] active:scale-95',
    outline:
      'border-2 border-[#7B61FF] text-[#7B61FF] hover:bg-[#7B61FF]/10 focus:ring-[#7B61FF] active:scale-95',
  }

  const classes = cn(baseStyles, variants[variant], className)

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}



