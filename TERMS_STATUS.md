# Terms of Service Content Population

## ✅ Changes Pushed Successfully!

The Terms of Service page has been pushed to GitHub and should be deploying to Vercel now.

## 📝 Next Step: Populate Content

Once your Vercel deployment is live (usually takes 2-3 minutes), you can populate the Terms of Service content by running:

```bash
# From your project directory
cd "/Users/darraghflood/Web Apps/Located/located-website"
node scripts/populate-terms.js
```

**Note**: This script needs the Sanity environment variables to be set. If you don't have them locally, you can:

### Option 1: Manual Content Addition (Recommended)
1. Go to your live site: `https://your-vercel-url.vercel.app/studio`
2. Create a new "Terms of Service" document
3. Copy the content from `TERMS_OF_SERVICE.md` in your root folder
4. Format it using Sanity's rich text editor

### Option 2: Set Environment Variables Locally
Create a `.env.local` file with:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=yva4asgx
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-editor-token
```

Then run the script.

## 🎯 What's Ready

- ✅ Terms of Service page: `/terms-of-service`
- ✅ Footer link added
- ✅ Sanity schema configured
- ✅ Content script ready
- ✅ Changes deployed to GitHub

The page will automatically display the content once it's added to Sanity!
