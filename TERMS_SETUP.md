# Terms of Service Setup Instructions

## What's Been Added

✅ **Terms of Service Page**: `/terms-of-service` route created
✅ **Sanity Schema**: `termsOfService` schema added for content management  
✅ **Footer Link**: Terms of Service link added to footer
✅ **Content Script**: `scripts/populate-terms.js` ready to populate content

## Next Steps

### 1. Deploy Changes
The changes are committed locally but need to be pushed to GitHub when network is available:
```bash
git push
```

### 2. Populate Terms Content
Once deployed, run this script to add the Terms of Service content to Sanity:

```bash
# From the project root
node scripts/populate-terms.js
```

### 3. Verify
- Visit `/terms-of-service` on your live site
- Check that the footer link works
- Verify content displays properly

## Content Included

The Terms of Service includes:
- Acceptance of Terms
- Service Description  
- Subscription Terms (auto-renewal, free trial)
- User Responsibilities (parents & children)
- Privacy and Data Collection
- Prohibited Uses
- Limitation of Liability
- Changes to Terms
- Contact Information
- Governing Law (Ireland)
- Apple EULA reference

## Manual Content Addition (Alternative)

If the script doesn't work, you can manually add the Terms of Service content in Sanity Studio:

1. Go to `/studio` on your live site
2. Create a new "Terms of Service" document
3. Copy the content from `TERMS_OF_SERVICE.md` in your root folder
4. Format it using Sanity's rich text editor

The page will automatically display the content once it's added to Sanity!
