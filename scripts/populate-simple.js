/**
 * Simplified content population script
 * This bypasses the Studio and creates content directly via API
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Load environment variables
const envPath = path.join(__dirname, '..', '.env.local');
const envContent = fs.readFileSync(envPath, 'utf-8');
const envVars = {};
envContent.split('\n').forEach(line => {
  const match = line.match(/^([^=]+)=(.*)$/);
  if (match) {
    envVars[match[1].trim()] = match[2].trim();
  }
});

const PROJECT_ID = envVars.NEXT_PUBLIC_SANITY_PROJECT_ID;
const DATASET = envVars.NEXT_PUBLIC_SANITY_DATASET;
const TOKEN = envVars.SANITY_API_TOKEN;

console.log('🚀 Populating Sanity content...\n');
console.log(`Project: ${PROJECT_ID}`);
console.log(`Dataset: ${DATASET}\n`);

const mutations = {
  mutations: [
    // Homepage
    {
      createOrReplace: {
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
        seoDescription: 'Stay connected with real-time location sharing, geofence alerts, and location history. Keep your family safe with privacy-first tracking.',
      }
    },
    // Features
    {
      createOrReplace: {
        _id: 'feature-1',
        _type: 'feature',
        title: 'Real-Time Location',
        description: 'See where your family members are at any time with accurate, real-time location updates on an interactive map.',
        icon: '📍',
        order: 0,
      }
    },
    {
      createOrReplace: {
        _id: 'feature-2',
        _type: 'feature',
        title: 'Geofence Alerts',
        description: 'Get instant notifications when family members arrive or leave important places like home, school, or work.',
        icon: '🔔',
        order: 1,
      }
    },
    {
      createOrReplace: {
        _id: 'feature-3',
        _type: 'feature',
        title: 'Location History',
        description: 'Review past locations and movements with detailed location history and timeline views.',
        icon: '📊',
        order: 2,
      }
    },
    {
      createOrReplace: {
        _id: 'feature-4',
        _type: 'feature',
        title: 'Privacy First',
        description: 'Your location data is encrypted and only shared with family members you choose. Complete control over your privacy.',
        icon: '🛡️',
        order: 3,
      }
    },
    {
      createOrReplace: {
        _id: 'feature-5',
        _type: 'feature',
        title: 'Battery Efficient',
        description: 'Optimized for minimal battery usage so you can stay connected all day without draining your phone.',
        icon: '🔋',
        order: 4,
      }
    },
    {
      createOrReplace: {
        _id: 'feature-6',
        _type: 'feature',
        title: 'Easy Family Management',
        description: 'Simple invite system to add family members. Manage permissions and settings with an intuitive interface.',
        icon: '👨‍👩‍👧‍👦',
        order: 5,
      }
    },
    // Pricing Plans
    {
      createOrReplace: {
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
      }
    },
    {
      createOrReplace: {
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
        ],
        highlighted: true,
        ctaText: 'Start Free Trial',
        ctaLink: 'https://apps.apple.com',
        order: 1,
      }
    },
    {
      createOrReplace: {
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
        ],
        highlighted: false,
        ctaText: 'Contact Us',
        order: 2,
      }
    },
    // About
    {
      createOrReplace: {
        _id: 'about',
        _type: 'about',
        title: 'About Located',
        content: [
          {
            _type: 'block',
            _key: 'block1',
            style: 'h2',
            children: [{ _type: 'span', _key: 'span1', text: 'Our Mission', marks: [] }],
            markDefs: [],
          },
          {
            _type: 'block',
            _key: 'block2',
            style: 'normal',
            children: [{
              _type: 'span',
              _key: 'span2',
              text: 'We believe families should stay connected without compromising privacy. Located provides peace of mind through simple, secure location sharing.',
              marks: []
            }],
            markDefs: [],
          },
          {
            _type: 'block',
            _key: 'block3',
            style: 'h2',
            children: [{ _type: 'span', _key: 'span3', text: 'Why We Built Located', marks: [] }],
            markDefs: [],
          },
          {
            _type: 'block',
            _key: 'block4',
            style: 'normal',
            children: [{
              _type: 'span',
              _key: 'span4',
              text: 'As parents ourselves, we understand the need to know your family is safe. We created Located to provide real-time peace of mind while respecting privacy.',
              marks: []
            }],
            markDefs: [],
          },
        ],
      }
    },
    // Privacy Policy
    {
      createOrReplace: {
        _id: 'privacyPolicy',
        _type: 'privacyPolicy',
        title: 'Privacy Policy',
        lastUpdated: new Date().toISOString().split('T')[0],
        content: [
          {
            _type: 'block',
            _key: 'pp1',
            style: 'h2',
            children: [{ _type: 'span', _key: 'pp1s', text: '1. Introduction', marks: [] }],
            markDefs: [],
          },
          {
            _type: 'block',
            _key: 'pp2',
            style: 'normal',
            children: [{
              _type: 'span',
              _key: 'pp2s',
              text: 'Located is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information.',
              marks: []
            }],
            markDefs: [],
          },
          {
            _type: 'block',
            _key: 'pp3',
            style: 'h2',
            children: [{ _type: 'span', _key: 'pp3s', text: '2. Information We Collect', marks: [] }],
            markDefs: [],
          },
          {
            _type: 'block',
            _key: 'pp4',
            style: 'normal',
            children: [{
              _type: 'span',
              _key: 'pp4s',
              text: 'We collect location data, account information, and usage data to provide our services.',
              marks: []
            }],
            markDefs: [],
          },
          {
            _type: 'block',
            _key: 'pp5',
            style: 'h2',
            children: [{ _type: 'span', _key: 'pp5s', text: '3. Contact Us', marks: [] }],
            markDefs: [],
          },
          {
            _type: 'block',
            _key: 'pp6',
            style: 'normal',
            children: [{
              _type: 'span',
              _key: 'pp6s',
              text: 'Address: 1 Butterfield Grove, Rathfarnham, Dublin, D14NY16, Ireland',
              marks: []
            }],
            markDefs: [],
          },
        ],
      }
    },
  ]
};

const postData = JSON.stringify(mutations);

const options = {
  hostname: `${PROJECT_ID}.api.sanity.io`,
  path: `/v2024-01-01/data/mutate/${DATASET}`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${TOKEN}`,
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = https.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    if (res.statusCode === 200) {
      console.log('✅ All content created successfully!\n');
      console.log('📱 Visit http://localhost:3000 to see your website');
      console.log('🎨 Content is now available in Sanity Studio');
    } else {
      console.error(`❌ Error: ${res.statusCode}`);
      console.error(data);
    }
  });
});

req.on('error', (error) => {
  console.error('❌ Request failed:', error.message);
});

req.write(postData);
req.end();

