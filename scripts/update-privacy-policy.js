/**
 * Update Privacy Policy in Sanity from PRIVACY_POLICY.md
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

// Helper to create unique keys
let keyCounter = 0;
const getKey = () => `key${keyCounter++}`;

// Convert markdown to Sanity blocks
const content = [
  // Introduction
  {
    _type: 'block',
    _key: getKey(),
    style: 'h2',
    children: [{ _type: 'span', _key: getKey(), text: 'Introduction', marks: [] }],
    markDefs: [],
  },
  {
    _type: 'block',
    _key: getKey(),
    style: 'normal',
    children: [{
      _type: 'span',
      _key: getKey(),
      text: 'Located ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application Located (the "App"). Please read this Privacy Policy carefully.',
      marks: []
    }],
    markDefs: [],
  },

  // Information We Collect
  {
    _type: 'block',
    _key: getKey(),
    style: 'h2',
    children: [{ _type: 'span', _key: getKey(), text: 'Information We Collect', marks: [] }],
    markDefs: [],
  },
  {
    _type: 'block',
    _key: getKey(),
    style: 'h3',
    children: [{ _type: 'span', _key: getKey(), text: 'Location Information', marks: [] }],
    markDefs: [],
  },
  {
    _type: 'block',
    _key: getKey(),
    style: 'normal',
    children: [
      { _type: 'span', _key: getKey(), text: 'Real-time Location', marks: ['strong'] },
      { _type: 'span', _key: getKey(), text: ': We collect your current location to provide family safety features, including live location sharing and geofence monitoring', marks: [] }
    ],
    markDefs: [],
  },
  {
    _type: 'block',
    _key: getKey(),
    style: 'normal',
    children: [
      { _type: 'span', _key: getKey(), text: 'Location History', marks: ['strong'] },
      { _type: 'span', _key: getKey(), text: ': We temporarily store location data to enable features like arrival/departure notifications and location-based alerts', marks: [] }
    ],
    markDefs: [],
  },
  {
    _type: 'block',
    _key: getKey(),
    style: 'normal',
    children: [
      { _type: 'span', _key: getKey(), text: 'Geofence Data', marks: ['strong'] },
      { _type: 'span', _key: getKey(), text: ': We store information about designated safe zones and boundaries you create for family members', marks: [] }
    ],
    markDefs: [],
  },

  {
    _type: 'block',
    _key: getKey(),
    style: 'h3',
    children: [{ _type: 'span', _key: getKey(), text: 'Personal Information', marks: [] }],
    markDefs: [],
  },
  {
    _type: 'block',
    _key: getKey(),
    style: 'normal',
    children: [
      { _type: 'span', _key: getKey(), text: 'Account Information', marks: ['strong'] },
      { _type: 'span', _key: getKey(), text: ': Email address, name, and family relationship information', marks: [] }
    ],
    markDefs: [],
  },
  {
    _type: 'block',
    _key: getKey(),
    style: 'normal',
    children: [
      { _type: 'span', _key: getKey(), text: 'Family Connections', marks: ['strong'] },
      { _type: 'span', _key: getKey(), text: ': Information about family members you invite to use the app', marks: [] }
    ],
    markDefs: [],
  },
  {
    _type: 'block',
    _key: getKey(),
    style: 'normal',
    children: [
      { _type: 'span', _key: getKey(), text: 'Device Information', marks: ['strong'] },
      { _type: 'span', _key: getKey(), text: ': Device type, operating system, and unique device identifiers', marks: [] }
    ],
    markDefs: [],
  },

  // How We Use Your Information
  {
    _type: 'block',
    _key: getKey(),
    style: 'h2',
    children: [{ _type: 'span', _key: getKey(), text: 'How We Use Your Information', marks: [] }],
    markDefs: [],
  },
  {
    _type: 'block',
    _key: getKey(),
    style: 'h3',
    children: [{ _type: 'span', _key: getKey(), text: 'Core Safety Features', marks: [] }],
    markDefs: [],
  },
  {
    _type: 'block',
    _key: getKey(),
    style: 'normal',
    children: [{
      _type: 'span',
      _key: getKey(),
      text: 'Location Sharing: Enable real-time location sharing between family members. Geofence Alerts: Send notifications when family members enter or leave designated areas. Safety Monitoring: Provide peace of mind through continuous location tracking when enabled.',
      marks: []
    }],
    markDefs: [],
  },

  // Data Security
  {
    _type: 'block',
    _key: getKey(),
    style: 'h2',
    children: [{ _type: 'span', _key: getKey(), text: 'Data Security', marks: [] }],
    markDefs: [],
  },
  {
    _type: 'block',
    _key: getKey(),
    style: 'normal',
    children: [{
      _type: 'span',
      _key: getKey(),
      text: 'We implement appropriate security measures to protect your information: All data is encrypted in transit and at rest. Strict access controls limit who can view your data. We regularly review and update our security practices.',
      marks: []
    }],
    markDefs: [],
  },

  // Your Rights
  {
    _type: 'block',
    _key: getKey(),
    style: 'h2',
    children: [{ _type: 'span', _key: getKey(), text: 'Your Rights and Choices', marks: [] }],
    markDefs: [],
  },
  {
    _type: 'block',
    _key: getKey(),
    style: 'normal',
    children: [{
      _type: 'span',
      _key: getKey(),
      text: 'You have the right to access, correct, or delete your personal information. You can enable/disable location sharing at any time and manage your family group members.',
      marks: []
    }],
    markDefs: [],
  },

  // Children's Privacy
  {
    _type: 'block',
    _key: getKey(),
    style: 'h2',
    children: [{ _type: 'span', _key: getKey(), text: "Children's Privacy", marks: [] }],
    markDefs: [],
  },
  {
    _type: 'block',
    _key: getKey(),
    style: 'normal',
    children: [{
      _type: 'span',
      _key: getKey(),
      text: 'Located is designed for family safety. If you are under 13, you must have parental consent to use this app. We do not knowingly collect personal information from children under 13 without parental consent.',
      marks: []
    }],
    markDefs: [],
  },

  // Third-Party Services
  {
    _type: 'block',
    _key: getKey(),
    style: 'h2',
    children: [{ _type: 'span', _key: getKey(), text: 'Third-Party Services', marks: [] }],
    markDefs: [],
  },
  {
    _type: 'block',
    _key: getKey(),
    style: 'normal',
    children: [{
      _type: 'span',
      _key: getKey(),
      text: 'Our app uses Firebase for data storage, authentication, and push notifications, and Google Maps for location services. These services have their own privacy policies.',
      marks: []
    }],
    markDefs: [],
  },

  // Contact Us
  {
    _type: 'block',
    _key: getKey(),
    style: 'h2',
    children: [{ _type: 'span', _key: getKey(), text: 'Contact Us', marks: [] }],
    markDefs: [],
  },
  {
    _type: 'block',
    _key: getKey(),
    style: 'normal',
    children: [{
      _type: 'span',
      _key: getKey(),
      text: 'If you have any questions about this Privacy Policy, please contact us at:',
      marks: []
    }],
    markDefs: [],
  },
  {
    _type: 'block',
    _key: getKey(),
    style: 'normal',
    children: [
      { _type: 'span', _key: getKey(), text: 'Email: chadley78@gmail.com', marks: [] }
    ],
    markDefs: [],
  },
  {
    _type: 'block',
    _key: getKey(),
    style: 'normal',
    children: [
      { _type: 'span', _key: getKey(), text: 'Address: 1 Butterfield Grove, Rathfarnham, Dublin, D14NY16, Ireland', marks: [] }
    ],
    markDefs: [],
  },

  // Compliance
  {
    _type: 'block',
    _key: getKey(),
    style: 'h2',
    children: [{ _type: 'span', _key: getKey(), text: 'Compliance', marks: [] }],
    markDefs: [],
  },
  {
    _type: 'block',
    _key: getKey(),
    style: 'normal',
    children: [{
      _type: 'span',
      _key: getKey(),
      text: 'This Privacy Policy complies with applicable privacy laws including GDPR, CCPA, and COPPA.',
      marks: []
    }],
    markDefs: [],
  },
];

const mutations = {
  mutations: [
    {
      createOrReplace: {
        _id: 'privacyPolicy',
        _type: 'privacyPolicy',
        title: 'Privacy Policy',
        lastUpdated: new Date().toISOString().split('T')[0],
        content: content,
      }
    }
  ]
};

console.log('🔒 Updating Privacy Policy in Sanity...\n');

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
      console.log('✅ Privacy Policy updated successfully!\n');
      console.log('📱 Visit http://localhost:3000/privacy-policy to see it');
      console.log('🎨 Edit in Sanity Studio at http://localhost:3000/studio');
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

