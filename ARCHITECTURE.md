# Architecture Overview

Complete technical architecture documentation for the Located website.

## Tech Stack

### Frontend Framework
- **Next.js 15.5.6** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **clsx + tailwind-merge** - Dynamic class name management

### Content Management
- **Sanity CMS** - Headless CMS for content
- **@portabletext/react** - Rich text rendering
- **next-sanity** - Sanity integration for Next.js

### Deployment
- **Vercel** - Hosting platform (recommended)

## Project Structure

\`\`\`
located-website/
├── src/
│   ├── app/                           # Next.js App Router
│   │   ├── layout.tsx                # Root layout, metadata, fonts
│   │   ├── page.tsx                  # Homepage (server component)
│   │   ├── sitemap.ts                # Auto-generated sitemap
│   │   ├── globals.css               # Global styles
│   │   ├── privacy-policy/
│   │   │   └── page.tsx              # Privacy policy page
│   │   ├── api/
│   │   │   └── revalidate/
│   │   │       └── route.ts          # ISR webhook endpoint
│   │   └── studio/
│   │       └── [[...index]]/
│   │           └── page.tsx          # Sanity Studio (client component)
│   │
│   ├── components/
│   │   ├── sections/                 # Page sections
│   │   │   ├── Hero.tsx              # Hero section with CTA
│   │   │   ├── Features.tsx          # Features grid
│   │   │   ├── Pricing.tsx           # Pricing cards
│   │   │   ├── About.tsx             # About section with rich text
│   │   │   └── Footer.tsx            # Site footer
│   │   ├── ui/                       # Reusable UI components
│   │   │   ├── Button.tsx            # Button with variants
│   │   │   ├── Card.tsx              # Card component
│   │   │   └── Container.tsx         # Max-width container
│   │   └── PortableText.tsx          # Sanity rich text renderer
│   │
│   ├── sanity/                       # Sanity CMS configuration
│   │   ├── client.ts                 # Sanity client instance
│   │   ├── queries.ts                # GROQ queries
│   │   └── schemas/                  # Content type definitions
│   │       ├── index.ts              # Schema registry
│   │       ├── homepage.ts           # Homepage schema
│   │       ├── feature.ts            # Feature item schema
│   │       ├── pricingPlan.ts        # Pricing plan schema
│   │       ├── about.ts              # About section schema
│   │       └── privacyPolicy.ts      # Privacy policy schema
│   │
│   ├── types/
│   │   └── sanity.ts                 # TypeScript interfaces for content
│   │
│   └── lib/
│       ├── utils.ts                  # Utility functions (cn, formatDate)
│       └── seo.ts                    # SEO utilities & structured data
│
├── studio/                           # Sanity Studio configuration
│   ├── sanity.config.ts              # Studio settings & plugins
│   └── structure.ts                  # Custom studio structure/navigation
│
├── public/                           # Static assets
│   ├── robots.txt                    # Search engine directives
│   └── images/                       # Static images
│
├── next.config.ts                    # Next.js configuration
├── tailwind.config.ts                # Tailwind configuration
├── tsconfig.json                     # TypeScript configuration
└── package.json                      # Dependencies & scripts
\`\`\`

## Data Flow

### Content Management Flow

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                      Content Editor                          │
│                                                              │
│  1. Opens Sanity Studio (/studio)                           │
│  2. Edits content (hero, features, pricing, etc.)          │
│  3. Clicks "Publish"                                        │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                    Sanity Cloud                              │
│                                                              │
│  1. Saves content to Sanity dataset                         │
│  2. Triggers webhook to Next.js app                         │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│              Next.js API Route (/api/revalidate)            │
│                                                              │
│  1. Verifies secret                                         │
│  2. Calls revalidatePath() for affected pages              │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                   Next.js Cache                              │
│                                                              │
│  1. Invalidates cached pages                                │
│  2. Next request regenerates static pages                   │
└─────────────────────────────────────────────────────────────┘
\`\`\`

### Page Rendering Flow

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                    User visits page                          │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│              Next.js checks cache                            │
│              (Static pages cached for revalidate time)       │
└────────────────────┬────────────────────────────────────────┘
                     │
        ┌────────────┴───────────┐
        │                        │
   Cache Hit               Cache Miss
        │                        │
        ▼                        ▼
┌──────────────┐      ┌──────────────────────┐
│ Serve cached │      │ Fetch from Sanity    │
│ HTML         │      │ (GROQ queries)       │
└──────────────┘      └──────┬───────────────┘
                             │
                             ▼
                      ┌──────────────────────┐
                      │ Render components    │
                      │ Generate HTML        │
                      └──────┬───────────────┘
                             │
                             ▼
                      ┌──────────────────────┐
                      │ Cache for 1 hour     │
                      │ Serve to user        │
                      └──────────────────────┘
\`\`\`

## Component Architecture

### Server Components (Default)

All pages and most components are React Server Components:

- **Benefits**:
  - Data fetching on server
  - Zero JavaScript to client
  - Direct database/API access
  - SEO-friendly

- **Usage**:
  - Page components (`page.tsx`)
  - Section components (Hero, Features, etc.)
  - Data-fetching components

### Client Components

Only components with interactivity are client components:

- **Sanity Studio** (`/studio/[[...index]]/page.tsx`)
  - Marked with `'use client'`
  - Full CMS interface runs client-side

- **Future interactive components**:
  - Mobile menu toggle
  - Form submissions
  - Interactive elements

## State Management

### Content State
- **Location**: Sanity Cloud (CMS)
- **Access**: Via GROQ queries
- **Updates**: Through Sanity Studio
- **Caching**: ISR with 1-hour revalidation

### UI State
- **Server Components**: No state needed
- **Client Components**: React hooks when needed
- **Global State**: Not required for MVP

## Data Fetching Strategy

### Incremental Static Regeneration (ISR)

Pages use ISR with time-based and on-demand revalidation:

\`\`\`typescript
// Homepage: Revalidate every hour
export const revalidate = 3600

// Privacy Policy: Revalidate every day
export const revalidate = 86400
\`\`\`

### Benefits
- Fast page loads (pre-rendered)
- Fresh content (revalidates on schedule)
- On-demand updates (webhook triggers)
- Reduced API calls
- Better SEO

### GROQ Queries

Sanity uses GROQ (Graph-Relational Object Queries):

\`\`\`typescript
// Example: Fetch homepage with image URL
const homepageQuery = groq\`
  *[_type == "homepage"][0] {
    hero {
      title,
      subtitle,
      "imageUrl": image.asset->url
    },
    seoTitle,
    seoDescription
  }
\`
\`\`\`

## SEO Architecture

### Metadata Generation

\`\`\`typescript
// src/lib/seo.ts
export function generateSEO({
  title,
  description,
  image,
  url
}: SEOProps): Metadata {
  return {
    title,
    description,
    openGraph: { ... },
    twitter: { ... },
    alternates: { canonical: url }
  }
}
\`\`\`

### Structured Data (JSON-LD)

Embedded in pages for rich search results:

- **Organization Schema**: Company information
- **SoftwareApplication Schema**: App details
- **FAQ Schema**: Feature descriptions (optional)

### SEO Features

1. **Dynamic Metadata**: Generated from Sanity content
2. **Open Graph**: Social sharing cards
3. **Twitter Cards**: Optimized Twitter sharing
4. **Canonical URLs**: Prevent duplicate content
5. **Sitemap**: Auto-generated from routes
6. **Robots.txt**: AI crawler permissions
7. **Semantic HTML**: Proper heading hierarchy
8. **Image Optimization**: Next.js automatic optimization
9. **Core Web Vitals**: Optimized for performance

## Security

### Environment Variables

Sensitive data stored in environment variables:

\`\`\`bash
# Public (sent to browser)
NEXT_PUBLIC_SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET

# Private (server-only)
SANITY_API_TOKEN           # Read-only token
SANITY_REVALIDATE_SECRET   # Webhook verification
\`\`\`

### API Protection

\`\`\`typescript
// Webhook verification
if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
  return Response.json({ error: 'Unauthorized' }, { status: 401 })
}
\`\`\`

### Sanity Permissions

- **Public reads**: Content is publicly readable
- **Authenticated writes**: Only via Sanity Studio
- **Token scopes**: Minimal permissions (read-only)

## Performance Optimizations

### Build Time
- Static page generation
- Tree shaking (removes unused code)
- Code splitting (smaller bundles)
- Font optimization (next/font)

### Runtime
- Image optimization (next/image)
- Lazy loading images
- Minimal JavaScript
- CDN distribution (Vercel Edge)

### Caching Strategy

\`\`\`
Browser → Vercel Edge Cache → Next.js Cache → Sanity API
  ^            ^                   ^              ^
  1s         Instant             1hr          Real-time
\`\`\`

## Deployment Architecture

### Vercel Platform

\`\`\`
GitHub Repository
      ↓
  Push to main
      ↓
Vercel Build Process
      ├─ Install dependencies
      ├─ Run Next.js build
      ├─ Generate static pages
      └─ Deploy to Edge Network
      ↓
Production Site
  (Multiple edge locations worldwide)
\`\`\`

### Environment Setup

- **Development**: localhost with hot reload
- **Preview**: Automatic preview for PR branches
- **Production**: Main branch auto-deploys

## Scaling Considerations

### Current MVP
- Static pages (cheap, fast)
- Sanity free tier (100k API requests/month)
- Vercel free tier (100GB bandwidth)

### Future Scaling

As traffic grows:
- Enable Sanity CDN (`useCdn: true`)
- Increase revalidation times
- Add Redis caching layer (optional)
- Use Vercel Pro for more bandwidth
- Consider image CDN for large media

## Extension Points

### Adding New Pages

1. Create page file in `src/app/new-page/page.tsx`
2. Create Sanity schema if needed
3. Fetch data in page component
4. Update sitemap

### Adding New Features

1. Create schema in `src/sanity/schemas/`
2. Add to schema registry
3. Create query in `src/sanity/queries.ts`
4. Create component
5. Use in page

### Adding Interactivity

1. Create client component (`'use client'`)
2. Add to `src/components/`
3. Use React hooks for state
4. Import in page

## Monitoring & Analytics

### Built-in (Vercel)
- **Analytics**: Page views, visitors
- **Speed Insights**: Core Web Vitals
- **Logs**: Function execution logs

### Optional Additions
- Google Analytics 4
- Plausible Analytics (privacy-focused)
- Sentry (error tracking)
- PostHog (product analytics)

## Maintenance

### Regular Tasks
- Update dependencies (`npm update`)
- Review Sanity content
- Monitor Core Web Vitals
- Check broken links

### Sanity Updates
- Content changes deploy instantly (via webhook)
- No code deployment needed
- Preview changes before publishing

### Code Updates
1. Make changes locally
2. Test with `npm run dev`
3. Push to GitHub
4. Vercel auto-deploys
5. Preview URL for testing
6. Merge to deploy to production

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| Build fails | Check environment variables |
| Content not updating | Verify webhook configuration |
| Images broken | Check Sanity domain in next.config |
| TypeScript errors | Run `npm run build` to check |
| Slow builds | Reduce ISR revalidation frequency |

## Resources

- [Next.js App Router](https://nextjs.org/docs/app)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vercel Deployment](https://vercel.com/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)



