# Deployment Guide

This guide walks you through deploying the Located website to production.

## Prerequisites

- GitHub account
- Vercel account (free at https://vercel.com)
- Sanity project set up (see main README)

## Step 1: Prepare Your Repository

1. Initialize a git repository (if not already done):
\`\`\`bash
git init
git add .
git commit -m "Initial commit"
\`\`\`

2. Create a repository on GitHub

3. Push your code:
\`\`\`bash
git remote add origin https://github.com/yourusername/located-website.git
git branch -M main
git push -u origin main
\`\`\`

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: .next

5. Add Environment Variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_TOKEN`
   - `SANITY_REVALIDATE_SECRET`

6. Click "Deploy"

### Option B: Deploy via Vercel CLI

1. Install Vercel CLI:
\`\`\`bash
npm install -g vercel
\`\`\`

2. Deploy:
\`\`\`bash
vercel
\`\`\`

3. Follow the prompts and add environment variables when asked

## Step 3: Configure Custom Domain (Optional)

1. In Vercel Dashboard, go to your project
2. Settings → Domains
3. Add your custom domain (e.g., located.app)
4. Update DNS records as instructed by Vercel
5. Update the `url` in `src/lib/seo.ts` to match your domain

## Step 4: Set Up Sanity Webhook

This enables automatic page updates when you edit content.

1. Go to https://sanity.io/manage
2. Select your project
3. Go to **API → Webhooks**
4. Click **Create webhook**
5. Configure:
   - **Name**: Production Deployment
   - **URL**: `https://your-domain.vercel.app/api/revalidate?secret=YOUR_REVALIDATE_SECRET`
   - **Dataset**: production
   - **Trigger on**: Create, Update, Delete
   - **HTTP method**: POST
   - **API version**: v2024-01-01

6. Save the webhook

### Testing the Webhook

1. Go to your Sanity Studio (https://your-domain.vercel.app/studio)
2. Edit any content and save
3. Wait 5-10 seconds
4. Refresh your homepage - changes should appear

## Step 5: Verify Deployment

### Check SEO

1. **Metadata**: View page source and check `<head>` tags
2. **Sitemap**: Visit `https://your-domain.com/sitemap.xml`
3. **Robots.txt**: Visit `https://your-domain.com/robots.txt`
4. **Structured Data**: Use [Google Rich Results Test](https://search.google.com/test/rich-results)

### Test Performance

1. [PageSpeed Insights](https://pagespeed.web.dev/)
2. [GTmetrix](https://gtmetrix.com/)
3. [WebPageTest](https://www.webpagetest.org/)

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## Step 6: Submit to Search Engines

### Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property
3. Verify ownership (use DNS verification)
4. Submit sitemap: `https://your-domain.com/sitemap.xml`

### Bing Webmaster Tools

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add your site
3. Verify ownership
4. Submit sitemap

## Ongoing Maintenance

### Content Updates

- All content changes are made through Sanity Studio
- Pages automatically revalidate via webhook
- No code deployment needed for content changes

### Code Updates

1. Make changes locally
2. Test with `npm run dev`
3. Commit and push to GitHub
4. Vercel automatically deploys on push to main branch

### Monitoring

Set up monitoring in Vercel:
- **Analytics**: Track page views and performance
- **Speed Insights**: Monitor Core Web Vitals
- **Logs**: View function logs for debugging

## Troubleshooting

### Webhook Not Working

1. Check webhook URL in Sanity includes correct secret
2. Verify secret matches `SANITY_REVALIDATE_SECRET` in Vercel
3. Check function logs in Vercel dashboard
4. Test with manual revalidation: `POST https://your-domain.com/api/revalidate?secret=SECRET`

### Images Not Loading

1. Verify `next.config.ts` includes Sanity domain in `remotePatterns`
2. Check Sanity API token has read permissions
3. Verify image URLs in Sanity Studio

### Build Failures

1. Check build logs in Vercel dashboard
2. Ensure all environment variables are set
3. Test build locally: `npm run build`
4. Check for TypeScript errors

## Production Checklist

- [ ] All environment variables configured
- [ ] Custom domain configured (if applicable)
- [ ] Sanity webhook set up
- [ ] Sitemap submitted to search engines
- [ ] Privacy policy content added
- [ ] All content sections populated
- [ ] Images optimized and uploaded
- [ ] Social media links added (if applicable)
- [ ] Analytics configured (if desired)
- [ ] Performance tested (90+ scores)
- [ ] Mobile responsiveness verified
- [ ] Links tested (no 404s)
- [ ] Forms tested (if applicable)
- [ ] SSL certificate active

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Sanity Webhooks](https://www.sanity.io/docs/webhooks)



