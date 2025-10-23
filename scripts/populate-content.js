/**
 * Script to populate Sanity with initial content
 * Run with: node scripts/populate-content.js
 */

const { createClient } = require('@sanity/client');
require('dotenv').config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
});

async function populateContent() {
  console.log('🚀 Starting content population...\n');

  try {
    // 1. Create Homepage
    console.log('📄 Creating Homepage...');
    const homepage = await client.createOrReplace({
      _id: 'homepage',
      _type: 'homepage',
      hero: {
        title: 'Located - Stay Connected with Family',
        subtitle: 'Real-time location sharing and geofencing to keep your family safe and connected. Peace of mind, always.',
        ctaText: 'Download on App Store',
        ctaLink: 'https://apps.apple.com',
        secondaryCtaText: 'Learn More',
        secondaryCtaLink: '#features',
      },
      seoTitle: 'Located - Family Location Sharing App for iOS',
      seoDescription: 'Stay connected with real-time location sharing, geofence alerts, and location history. Keep your family safe with privacy-first tracking. Download for iOS.',
    });
    console.log('✅ Homepage created\n');

    // 2. Create Features
    console.log('📍 Creating Features...');
    const features = [
      {
        _id: 'feature-1',
        _type: 'feature',
        title: 'Real-Time Location',
        description: 'See where your family members are at any time with accurate, real-time location updates on an interactive map.',
        icon: '📍',
        order: 0,
      },
      {
        _id: 'feature-2',
        _type: 'feature',
        title: 'Geofence Alerts',
        description: 'Get instant notifications when family members arrive or leave important places like home, school, or work.',
        icon: '🔔',
        order: 1,
      },
      {
        _id: 'feature-3',
        _type: 'feature',
        title: 'Location History',
        description: 'Review past locations and movements with detailed location history and timeline views.',
        icon: '📊',
        order: 2,
      },
      {
        _id: 'feature-4',
        _type: 'feature',
        title: 'Privacy First',
        description: 'Your location data is encrypted and only shared with family members you choose. Complete control over your privacy.',
        icon: '🛡️',
        order: 3,
      },
      {
        _id: 'feature-5',
        _type: 'feature',
        title: 'Battery Efficient',
        description: 'Optimized for minimal battery usage so you can stay connected all day without draining your phone.',
        icon: '🔋',
        order: 4,
      },
      {
        _id: 'feature-6',
        _type: 'feature',
        title: 'Easy Family Management',
        description: 'Simple invite system to add family members. Manage permissions and settings with an intuitive interface.',
        icon: '👨‍👩‍👧‍👦',
        order: 5,
      },
    ];

    for (const feature of features) {
      await client.createOrReplace(feature);
      console.log(`✅ Created: ${feature.title}`);
    }
    console.log('');

    // 3. Create Pricing Plans
    console.log('💰 Creating Pricing Plans...');
    const pricingPlans = [
      {
        _id: 'plan-free',
        _type: 'pricingPlan',
        name: 'Free',
        price: '$0',
        features: [
          'Up to 3 family members',
          'Real-time location sharing',
          '7-day location history',
          'Basic geofences (3 locations)',
          'Standard support',
        ],
        highlighted: false,
        ctaText: 'Get Started',
        ctaLink: 'https://apps.apple.com',
        order: 0,
      },
      {
        _id: 'plan-premium',
        _type: 'pricingPlan',
        name: 'Premium',
        price: '$9.99/month',
        features: [
          'Unlimited family members',
          'Real-time location sharing',
          '30-day location history',
          'Unlimited geofences',
          'Advanced notifications',
          'Priority support',
          'Custom alerts',
        ],
        highlighted: true,
        ctaText: 'Start Free Trial',
        ctaLink: 'https://apps.apple.com',
        order: 1,
      },
      {
        _id: 'plan-family',
        _type: 'pricingPlan',
        name: 'Family',
        price: '$19.99/month',
        features: [
          'Everything in Premium',
          'Up to 10 family members',
          'Unlimited location history',
          'Family activity reports',
          'Dedicated support',
          'Custom integrations',
        ],
        highlighted: false,
        ctaText: 'Contact Us',
        ctaLink: 'https://apps.apple.com',
        order: 2,
      },
    ];

    for (const plan of pricingPlans) {
      await client.createOrReplace(plan);
      console.log(`✅ Created: ${plan.name} plan`);
    }
    console.log('');

    // 4. Create About Section
    console.log('ℹ️ Creating About Section...');
    const about = await client.createOrReplace({
      _id: 'about',
      _type: 'about',
      title: 'About Located',
      content: [
        {
          _type: 'block',
          style: 'h2',
          children: [{ _type: 'span', text: 'Our Mission' }],
        },
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'We believe families should stay connected without compromising privacy. Located provides peace of mind through simple, secure location sharing.',
            },
          ],
        },
        {
          _type: 'block',
          style: 'h2',
          children: [{ _type: 'span', text: 'Why We Built Located' }],
        },
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'As parents ourselves, we understand the need to know your family is safe. We created Located to provide real-time peace of mind while respecting privacy and making location sharing effortless.',
            },
          ],
        },
        {
          _type: 'block',
          style: 'h2',
          children: [{ _type: 'span', text: 'What We Value' }],
        },
        {
          _type: 'block',
          style: 'normal',
          children: [
            { _type: 'span', text: '• ', marks: ['strong'] },
            { _type: 'span', text: 'Privacy First', marks: ['strong'] },
            {
              _type: 'span',
              text: ' - Your data belongs to you, encrypted and secure',
            },
          ],
        },
        {
          _type: 'block',
          style: 'normal',
          children: [
            { _type: 'span', text: '• ', marks: ['strong'] },
            { _type: 'span', text: 'User-Friendly Design', marks: ['strong'] },
            { _type: 'span', text: ' - Simple enough for everyone in the family' },
          ],
        },
        {
          _type: 'block',
          style: 'normal',
          children: [
            { _type: 'span', text: '• ', marks: ['strong'] },
            { _type: 'span', text: 'Family Safety', marks: ['strong'] },
            {
              _type: 'span',
              text: ' - Peace of mind knowing your loved ones are safe',
            },
          ],
        },
      ],
    });
    console.log('✅ About section created\n');

    // 5. Create Privacy Policy
    console.log('📋 Creating Privacy Policy...');
    const privacyPolicy = await client.createOrReplace({
      _id: 'privacyPolicy',
      _type: 'privacyPolicy',
      title: 'Privacy Policy',
      lastUpdated: new Date().toISOString().split('T')[0],
      content: [
        {
          _type: 'block',
          style: 'h2',
          children: [{ _type: 'span', text: '1. Introduction' }],
        },
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'Located ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application.',
            },
          ],
        },
        {
          _type: 'block',
          style: 'h2',
          children: [{ _type: 'span', text: '2. Information We Collect' }],
        },
        {
          _type: 'block',
          style: 'h3',
          children: [{ _type: 'span', text: 'Location Data' }],
        },
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'We collect your real-time location data when you use the app. This includes GPS coordinates, timestamp, and accuracy information. Location data is only shared with family members you explicitly add to your family group.',
            },
          ],
        },
        {
          _type: 'block',
          style: 'h3',
          children: [{ _type: 'span', text: 'Account Information' }],
        },
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'We collect your email address, name, and profile photo when you create an account.',
            },
          ],
        },
        {
          _type: 'block',
          style: 'h2',
          children: [{ _type: 'span', text: '3. How We Use Your Information' }],
        },
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'We use your information to provide location sharing services, send geofence notifications, maintain location history, and improve our services.',
            },
          ],
        },
        {
          _type: 'block',
          style: 'h2',
          children: [{ _type: 'span', text: '4. Data Security' }],
        },
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'All location data is encrypted in transit and at rest. We use industry-standard security measures to protect your information.',
            },
          ],
        },
        {
          _type: 'block',
          style: 'h2',
          children: [{ _type: 'span', text: '5. Your Rights' }],
        },
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'You have the right to access, update, or delete your personal information at any time through the app settings.',
            },
          ],
        },
        {
          _type: 'block',
          style: 'h2',
          children: [{ _type: 'span', text: '6. Contact Us' }],
        },
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'For privacy-related questions, contact us at: privacy@located.app',
            },
          ],
        },
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'Address: 1 Butterfield Grove, Rathfarnham, Dublin, D14NY16, Ireland',
            },
          ],
        },
      ],
    });
    console.log('✅ Privacy policy created\n');

    console.log('🎉 All content created successfully!');
    console.log('\n📱 Visit http://localhost:3000 to see your website');
    console.log('🎨 Visit http://localhost:3000/studio to edit content in Sanity Studio');
  } catch (error) {
    console.error('❌ Error creating content:', error.message);
    process.exit(1);
  }
}

populateContent();



