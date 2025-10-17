# Content Management Guide

This guide helps you create and manage content for your Located website using Sanity Studio.

## Accessing Sanity Studio

**Development**: http://localhost:3000/studio  
**Production**: https://your-domain.com/studio

Login with your Sanity account credentials.

## Content Structure

### 1. Homepage

The homepage is a singleton document (only one exists).

**Fields:**
- **Hero Section**
  - **Title**: Main headline (e.g., "Located - Stay Connected with Family")
  - **Subtitle**: Supporting text (e.g., "Real-time location sharing for peace of mind")
  - **CTA Text**: Primary button text (e.g., "Download on App Store")
  - **CTA Link**: App Store URL
  - **Secondary CTA Text**: Optional second button (e.g., "Learn More")
  - **Secondary CTA Link**: Link for second button
  - **Image**: Hero image (recommended: 1200x800px)

- **SEO Title**: Browser tab title (max 60 characters)
- **SEO Description**: Meta description (max 160 characters)

**Best Practices:**
- Keep title concise and impactful (under 10 words)
- Subtitle should explain the value proposition
- Use high-quality, relevant images
- Write compelling SEO descriptions with key benefits

### 2. Features

Add multiple feature documents (recommended: 3-6 features).

**Fields:**
- **Title**: Feature name (e.g., "Real-Time Location")
- **Description**: Explain the feature (2-3 sentences)
- **Icon**: Emoji or icon name (e.g., 📍 or 🔔)
- **Order**: Number for display order (0, 1, 2, etc.)

**Best Practices:**
- Use emojis for quick, visual icons
- Focus on benefits, not just features
- Keep descriptions clear and concise
- Order features by importance

**Example Features:**
```
📍 Real-Time Location
See where your family members are at any time with accurate, real-time location updates.

🔔 Geofence Alerts
Get notified when family members arrive or leave important places like home, school, or work.

🛡️ Privacy First
Your location data is encrypted and only shared with family members you choose.
```

### 3. Pricing Plans

Create multiple pricing plan documents (typically 2-3 tiers).

**Fields:**
- **Name**: Plan name (e.g., "Free", "Premium")
- **Price**: Display price (e.g., "Free", "$9.99/month")
- **Features**: Array of feature bullets
- **Highlighted**: Toggle to mark as recommended
- **CTA Text**: Button text (e.g., "Get Started")
- **CTA Link**: Where button links to
- **Order**: Display order (0, 1, 2)

**Best Practices:**
- Clearly differentiate between tiers
- Highlight the most popular plan
- Include 4-6 features per plan
- Use consistent pricing format

**Example Pricing:**
```
Free
$0
- Up to 3 family members
- Real-time location
- 7-day location history
- Basic geofences

Premium
$9.99/month
- Unlimited family members
- Real-time location
- 30-day location history
- Unlimited geofences
- Priority support
```

### 4. About Section

Single document for your company story.

**Fields:**
- **Title**: Section heading (e.g., "About Located")
- **Content**: Rich text with formatting
- **Image**: Team photo or relevant image (optional)

**Best Practices:**
- Tell your story authentically
- Explain why you built the product
- Include your mission/values
- Use headings to break up long text
- Add personality

**Example Structure:**
```
## Our Mission

We believe families should stay connected without compromising privacy.

## The Story

Located was born when... [tell your origin story]

## What We Value

- Privacy first
- User-friendly design
- Family safety
```

### 5. Privacy Policy

Legal document required for App Store approval.

**Fields:**
- **Title**: Page title (typically "Privacy Policy")
- **Last Updated**: Date of last update
- **Content**: Full privacy policy with rich text formatting

**Best Practices:**
- Use clear, plain language
- Break into sections with H2/H3 headings
- Update the date when making changes
- Include all required legal sections:
  - What data you collect
  - How you use the data
  - Who you share with
  - User rights
  - Contact information

**Required Sections:**
1. Introduction
2. Information We Collect
3. How We Use Your Information
4. Location Data
5. Data Sharing
6. Data Security
7. Your Rights
8. Children's Privacy
9. Changes to Privacy Policy
10. Contact Us

## Rich Text Formatting

### Available Styles
- **Normal**: Regular paragraph text
- **H2**: Major section headings
- **H3**: Subsection headings
- **H4**: Minor headings (privacy policy only)

### Text Decorations
- **Bold**: Emphasize important points
- **Italic**: Subtle emphasis
- **Code**: Technical terms or code

### Lists
- **Bullet lists**: For unordered items
- **Numbered lists**: For sequential steps

### Links
- Select text → click link icon → add URL
- Opens in new tab for external links

## Images

### Uploading Images
1. Click image field
2. Click "Select" or drag & drop
3. Crop/adjust if needed (use hotspot for responsive crops)
4. Add alt text for accessibility

### Image Specifications
- **Hero Image**: 1200x800px minimum (landscape)
- **About Image**: 800x800px (square or landscape)
- **Format**: JPG or PNG
- **Size**: Under 1MB (optimized automatically)

### Best Practices
- Use high-quality images
- Compress before uploading
- Add descriptive alt text
- Use consistent visual style

## SEO Best Practices

### Homepage SEO
- **Title**: Include brand name and primary keyword
- **Description**: Compelling summary with main benefits
- Include call-to-action in description

### Example SEO
```
Title: Located - Family Location Sharing App for iOS
Description: Stay connected with real-time location sharing, geofence alerts, and location history. Keep your family safe with privacy-first tracking. Download for iOS.
```

## Workflow

### Adding New Content
1. Click "+ Create" in Sanity Studio
2. Select document type
3. Fill in all required fields
4. Click "Publish"
5. Changes appear on site within 5-10 seconds (with webhook)

### Editing Content
1. Find document in Sanity Studio
2. Make changes
3. Click "Publish"
4. Webhook triggers automatic revalidation

### Ordering Items
- Use the "Order" field to control display sequence
- Lower numbers appear first (0, 1, 2...)
- No gaps needed in numbering

## Common Tasks

### Updating Pricing
1. Navigate to "Pricing Plans"
2. Click the plan to edit
3. Update price/features
4. Publish changes

### Adding a New Feature
1. Click "+ Create" → "Feature"
2. Fill in title, description, icon
3. Set order number (use next available)
4. Publish

### Updating Privacy Policy
1. Navigate to "Privacy Policy"
2. Update content
3. Update "Last Updated" date
4. Publish

## Tips & Tricks

1. **Preview Before Publishing**: Use "Preview" mode to see draft changes
2. **Keyboard Shortcuts**: 
   - Cmd/Ctrl + S: Publish
   - Cmd/Ctrl + Shift + P: Duplicate
3. **Drafts**: Unpublished changes saved as drafts automatically
4. **Version History**: View past versions (coming soon)
5. **Search**: Use Cmd/Ctrl + K to quickly find documents

## Need Help?

- Check [Sanity Documentation](https://www.sanity.io/docs)
- Review example content in this guide
- Contact support if you encounter issues

