# Quick Start Guide

Get your Located website up and running in 10 minutes.

## Step 1: Set Up Sanity (5 minutes)

### Create Sanity Project

1. Visit https://sanity.io/manage
2. Click "Create project"
3. Choose a project name (e.g., "Located Website")
4. Select a dataset name: `production`
5. Note your **Project ID** (you'll need this)

### Get API Token

1. In your Sanity project dashboard
2. Go to **API** → **Tokens**
3. Click **Add API token**
4. Name: "Website Read Token"
5. Permissions: **Viewer** (read access)
6. Copy the token (you'll need this)

## Step 2: Configure Environment

1. Copy the example environment file:
\`\`\`bash
cp .env.local.example .env.local
\`\`\`

2. Edit `.env.local` and add your Sanity credentials:
\`\`\`bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your-actual-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-actual-api-token
SANITY_REVALIDATE_SECRET=$(openssl rand -base64 32)
\`\`\`

## Step 3: Start Development (2 minutes)

\`\`\`bash
npm install
npm run dev
\`\`\`

Your website is now running at:
- **Website**: http://localhost:3000
- **Sanity Studio**: http://localhost:3000/studio

## Step 4: Add Content (3 minutes)

Navigate to http://localhost:3000/studio and create:

### 1. Homepage
- Click "Create" → "Homepage"
- Fill in hero section
- Add SEO title and description
- Publish

### 2. Features (3-6 items)
- Click "Create" → "Feature"
- Title: "Real-Time Location" 📍
- Description: "See where your family is at any time"
- Icon: 📍 (or any emoji)
- Order: 0
- Publish
- Repeat for more features

### 3. Pricing Plans (2-3 items)
- Click "Create" → "Pricing Plan"
- Name: "Free"
- Price: "$0"
- Features: ["Up to 3 family members", "Real-time location", "Basic geofences"]
- Order: 0
- Publish
- Repeat for more plans

### 4. About Section
- Click "Create" → "About Section"
- Add your story
- Publish

### 5. Privacy Policy
- Click "Create" → "Privacy Policy"
- Add your privacy policy
- Set last updated date
- Publish

## Step 5: View Your Site

Navigate to http://localhost:3000 to see your live website with all the content you just created!

## Next Steps

- **Customize styling**: Edit components in `src/components/`
- **Add more content**: Use Sanity Studio to add more features/plans
- **Deploy**: Follow [DEPLOYMENT.md](./DEPLOYMENT.md) to deploy to Vercel

## Troubleshooting

### "Configuration must contain projectId"
- Make sure `.env.local` exists and has correct Sanity credentials
- Restart the dev server after adding environment variables

### Changes not appearing
- Make sure you clicked "Publish" in Sanity Studio
- Refresh the page
- Check browser console for errors

### Sanity Studio won't load
- Check that Sanity packages are installed: `npm install`
- Make sure project ID is correct in `.env.local`

## Common Commands

\`\`\`bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run linter
\`\`\`

## Resources

- **Full README**: [README.md](./README.md)
- **Content Guide**: [CONTENT_GUIDE.md](./CONTENT_GUIDE.md)
- **Deployment**: [DEPLOYMENT.md](./DEPLOYMENT.md)

## Need Help?

- Sanity docs: https://www.sanity.io/docs
- Next.js docs: https://nextjs.org/docs
- Tailwind docs: https://tailwindcss.com/docs

