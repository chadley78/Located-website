# Located Website

A modern, SEO-optimized landing page built with Next.js 14 and Sanity CMS for the Located family location sharing app.

## Tech Stack

- **Next.js 14** (App Router) with TypeScript
- **Sanity CMS** for content management
- **Tailwind CSS** for styling
- **Vercel** for hosting (recommended)

## Features

- 🎨 Beautiful, modern UI with responsive design
- 📝 Rich text editing with Sanity Studio
- 🚀 Static Site Generation (SSG) with Incremental Static Regeneration (ISR)
- 🔍 SEO optimized (metadata, structured data, sitemap, robots.txt)
- 🤖 AI crawler friendly
- ⚡ Fast page loads with Next.js Image optimization
- 📱 Mobile-first design

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Sanity account (free at https://sanity.io)

### 1. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 2. Set Up Sanity

1. Go to https://sanity.io/manage
2. Create a new project
3. Note your Project ID and Dataset name

### 3. Configure Environment Variables

Copy the example environment file and fill in your Sanity credentials:

\`\`\`bash
cp .env.local.example .env.local
\`\`\`

Edit `.env.local`:

\`\`\`bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-read-token
SANITY_REVALIDATE_SECRET=your-random-secret-key
\`\`\`

**Getting your Sanity API Token:**
1. Go to https://sanity.io/manage
2. Select your project
3. Go to API → Tokens
4. Create a new token with "Read" permissions

**Generate a random secret:**
\`\`\`bash
openssl rand -base64 32
\`\`\`

### 4. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to see the website.

### 5. Access Sanity Studio

Navigate to [http://localhost:3000/studio](http://localhost:3000/studio) to access the content management interface.

## Content Management

### Initial Setup

When you first open Sanity Studio, you'll need to create content for each section:

1. **Homepage** - Hero section with title, subtitle, CTA buttons, and image
2. **Features** - Add 3-6 features with icons (emojis work great!), titles, and descriptions
3. **Pricing Plans** - Create pricing tiers with features and CTA buttons
4. **About Section** - Write your story with rich text formatting
5. **Privacy Policy** - Add your privacy policy content (required for App Store)

### Editing Content

All content is editable through the Sanity Studio interface at `/studio`:

- Rich text editor for formatted content
- Image upload with automatic optimization
- Drag-and-drop ordering for features and pricing plans
- Real-time preview in development mode
- Changes trigger automatic revalidation in production

## Project Structure

\`\`\`
located-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout with SEO
│   │   ├── page.tsx           # Homepage
│   │   ├── privacy-policy/    # Privacy policy page
│   │   ├── studio/            # Sanity Studio route
│   │   └── api/revalidate/    # ISR webhook
│   ├── components/
│   │   ├── sections/          # Page sections (Hero, Features, etc.)
│   │   ├── ui/                # Reusable UI components
│   │   └── PortableText.tsx   # Rich text renderer
│   ├── sanity/
│   │   ├── client.ts          # Sanity client config
│   │   ├── queries.ts         # GROQ queries
│   │   └── schemas/           # Content schemas
│   ├── types/                 # TypeScript types
│   └── lib/                   # Utilities
├── studio/                    # Sanity Studio config
└── public/                    # Static assets
\`\`\`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Deploy!

### Configure Sanity Webhook (for ISR)

1. Go to https://sanity.io/manage
2. Select your project → API → Webhooks
3. Create a new webhook:
   - URL: `https://your-domain.vercel.app/api/revalidate?secret=YOUR_SECRET`
   - Dataset: `production`
   - Trigger on: Create, Update, Delete
   - HTTP method: POST

This enables automatic page updates when you edit content (without rebuilding).

## SEO Features

- ✅ Optimized metadata (title, description, Open Graph, Twitter Cards)
- ✅ JSON-LD structured data (Organization, SoftwareApplication)
- ✅ Automatic sitemap generation
- ✅ Robots.txt with AI crawler permissions
- ✅ Semantic HTML with proper heading hierarchy
- ✅ Image optimization with Next.js Image
- ✅ Fast Core Web Vitals scores

## Customization

### Colors

Edit the color scheme in your components or extend Tailwind config in `tailwind.config.ts`.

### Content Structure

Add new content types by:
1. Creating a schema in `src/sanity/schemas/`
2. Adding it to `src/sanity/schemas/index.ts`
3. Creating queries in `src/sanity/queries.ts`
4. Using it in your pages

### SEO

Update SEO defaults in `src/lib/seo.ts`.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Support

For issues or questions, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

MIT
