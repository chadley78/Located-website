import { formatLongDate, siteConfig } from '@/lib/siteConfig'

export function DateStamp() {
  return (
    <p className="text-sm text-gray-500">
      Published{' '}
      <time dateTime={siteConfig.published}>{formatLongDate(siteConfig.published)}</time>
      {' · '}Last updated{' '}
      <time dateTime={siteConfig.lastReviewed}>{formatLongDate(siteConfig.lastReviewed)}</time>
    </p>
  )
}
