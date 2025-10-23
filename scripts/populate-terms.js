require('dotenv').config()
const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: '2023-05-03',
})

const termsContent = [
  {
    _type: 'block',
    style: 'h1',
    children: [
      {
        _type: 'span',
        text: 'Terms of Service',
        marks: ['strong']
      }
    ]
  },
  {
    _type: 'block',
    style: 'normal',
    children: [
      {
        _type: 'span',
        text: 'Last updated: October 22, 2025',
        marks: ['strong']
      }
    ]
  },
  {
    _type: 'block',
    style: 'h2',
    children: [
      {
        _type: 'span',
        text: '1. Acceptance of Terms'
      }
    ]
  },
  {
    _type: 'block',
    style: 'normal',
    children: [
      {
        _type: 'span',
        text: 'By downloading, installing, or using the Located app ("App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.'
      }
    ]
  },
  {
    _type: 'block',
    style: 'h2',
    children: [
      {
        _type: 'span',
        text: '2. Description of Service'
      }
    ]
  },
  {
    _type: 'block',
    style: 'normal',
    children: [
      {
        _type: 'span',
        text: 'Located is a family location sharing app that allows parents to track their children\'s locations and receive geofence alerts. The App provides:'
      }
    ]
  },
  {
    _type: 'block',
    style: 'normal',
    listItem: 'bullet',
    children: [
      {
        _type: 'span',
        text: 'Real-time location tracking'
      }
    ]
  },
  {
    _type: 'block',
    style: 'normal',
    listItem: 'bullet',
    children: [
      {
        _type: 'span',
        text: 'Geofence alerts and notifications'
      }
    ]
  },
  {
    _type: 'block',
    style: 'normal',
    listItem: 'bullet',
    children: [
      {
        _type: 'span',
        text: 'Location history'
      }
    ]
  },
  {
    _type: 'block',
    style: 'normal',
    listItem: 'bullet',
    children: [
      {
        _type: 'span',
        text: 'Family member management'
      }
    ]
  },
  {
    _type: 'block',
    style: 'h2',
    children: [
      {
        _type: 'span',
        text: '3. Subscription Terms'
      }
    ]
  },
  {
    _type: 'block',
    style: 'h3',
    children: [
      {
        _type: 'span',
        text: 'Auto-Renewable Subscription'
      }
    ]
  },
  {
    _type: 'block',
    style: 'normal',
    children: [
      {
        _type: 'span',
        text: 'Located offers an auto-renewable annual subscription ("Subscription") that provides access to premium features.'
      }
    ]
  },
  {
    _type: 'block',
    style: 'normal',
    listItem: 'bullet',
    children: [
      {
        _type: 'span',
        text: 'Subscription Length: 1 Year'
      }
    ]
  },
  {
    _type: 'block',
    style: 'normal',
    listItem: 'bullet',
    children: [
      {
        _type: 'span',
        text: 'Auto-Renewal: Your subscription will automatically renew unless cancelled at least 24 hours before the end of the current period'
      }
    ]
  },
  {
    _type: 'block',
    style: 'normal',
    listItem: 'bullet',
    children: [
      {
        _type: 'span',
        text: 'Payment: You will be charged through your Apple ID account'
      }
    ]
  },
  {
    _type: 'block',
    style: 'normal',
    listItem: 'bullet',
    children: [
      {
        _type: 'span',
        text: 'Cancellation: You can cancel your subscription at any time through your Apple ID account settings'
      }
    ]
  },
  {
    _type: 'block',
    style: 'h3',
    children: [
      {
        _type: 'span',
        text: 'Free Trial'
      }
    ]
  },
  {
    _type: 'block',
    style: 'normal',
    children: [
      {
        _type: 'span',
        text: 'New users may be eligible for a 7-day free trial. After the trial period, you will be charged the full subscription price unless cancelled.'
      }
    ]
  },
  {
    _type: 'block',
    style: 'h2',
    children: [
      {
        _type: 'span',
        text: '4. User Responsibilities'
      }
    ]
  },
  {
    _type: 'block',
    style: 'h3',
    children: [
      {
        _type: 'span',
        text: 'Parents'
      }
    ]
  },
  {
    _type: 'block',
    style: 'normal',
    listItem: 'bullet',
    children: [
      {
        _type: 'span',
        text: 'You are responsible for obtaining consent from all family members before tracking their locations'
      }
    ]
  },
  {
    _type: 'block',
    style: 'normal',
    listItem: 'bullet',
    children: [
      {
        _type: 'span',
        text: 'You must comply with all applicable laws regarding location tracking'
      }
    ]
  },
  {
    _type: 'block',
    style: 'normal',
    listItem: 'bullet',
    children: [
      {
        _type: 'span',
        text: 'You are responsible for the safety and privacy of your family members'
      }
    ]
  },
  {
    _type: 'block',
    style: 'h3',
    children: [
      {
        _type: 'span',
        text: 'Children'
      }
    ]
  },
  {
    _type: 'block',
    style: 'normal',
    listItem: 'bullet',
    children: [
      {
        _type: 'span',
        text: 'Location sharing requires parental consent'
      }
    ]
  },
  {
    _type: 'block',
    style: 'normal',
    listItem: 'bullet',
    children: [
      {
        _type: 'span',
        text: 'Children should only share location with trusted family members'
      }
    ]
  },
  {
    _type: 'block',
    style: 'h2',
    children: [
      {
        _type: 'span',
        text: '5. Privacy and Data Collection'
      }
    ]
  },
  {
    _type: 'block',
    style: 'normal',
    children: [
      {
        _type: 'span',
        text: 'We collect and process location data as described in our Privacy Policy. By using the App, you consent to our data practices.'
      }
    ]
  },
  {
    _type: 'block',
    style: 'h2',
    children: [
      {
        _type: 'span',
        text: '6. Prohibited Uses'
      }
    ]
  },
  {
    _type: 'block',
    style: 'normal',
    children: [
      {
        _type: 'span',
        text: 'You may not:'
      }
    ]
  },
  {
    _type: 'block',
    style: 'normal',
    listItem: 'bullet',
    children: [
      {
        _type: 'span',
        text: 'Use the App for illegal purposes'
      }
    ]
  },
  {
    _type: 'block',
    style: 'normal',
    listItem: 'bullet',
    children: [
      {
        _type: 'span',
        text: 'Track individuals without their consent'
      }
    ]
  },
  {
    _type: 'block',
    style: 'normal',
    listItem: 'bullet',
    children: [
      {
        _type: 'span',
        text: 'Attempt to reverse engineer or modify the App'
      }
    ]
  },
  {
    _type: 'block',
    style: 'normal',
    listItem: 'bullet',
    children: [
      {
        _type: 'span',
        text: 'Share your account with others'
      }
    ]
  },
  {
    _type: 'block',
    style: 'h2',
    children: [
      {
        _type: 'span',
        text: '7. Limitation of Liability'
      }
    ]
  },
  {
    _type: 'block',
    style: 'normal',
    children: [
      {
        _type: 'span',
        text: 'The App is provided "as is" without warranties. We are not liable for any damages arising from your use of the App.'
      }
    ]
  },
  {
    _type: 'block',
    style: 'h2',
    children: [
      {
        _type: 'span',
        text: '8. Changes to Terms'
      }
    ]
  },
  {
    _type: 'block',
    style: 'normal',
    children: [
      {
        _type: 'span',
        text: 'We may update these Terms at any time. Continued use of the App constitutes acceptance of updated Terms.'
      }
    ]
  },
  {
    _type: 'block',
    style: 'h2',
    children: [
      {
        _type: 'span',
        text: '9. Contact Information'
      }
    ]
  },
  {
    _type: 'block',
    style: 'normal',
    children: [
      {
        _type: 'span',
        text: 'For questions about these Terms, contact us at:'
      }
    ]
  },
  {
    _type: 'block',
    style: 'normal',
    listItem: 'bullet',
    children: [
      {
        _type: 'span',
        text: 'Email: chadley78@gmail.com'
      }
    ]
  },
  {
    _type: 'block',
    style: 'normal',
    listItem: 'bullet',
    children: [
      {
        _type: 'span',
        text: 'Website: https://locatedapp.info'
      }
    ]
  },
  {
    _type: 'block',
    style: 'h2',
    children: [
      {
        _type: 'span',
        text: '10. Governing Law'
      }
    ]
  },
  {
    _type: 'block',
    style: 'normal',
    children: [
      {
        _type: 'span',
        text: 'These Terms are governed by the laws of Ireland.'
      }
    ]
  },
  {
    _type: 'block',
    style: 'normal',
    children: [
      {
        _type: 'span',
        text: '---'
      }
    ]
  },
  {
    _type: 'block',
    style: 'normal',
    children: [
      {
        _type: 'span',
        text: 'Apple Terms: By using this App, you also agree to Apple\'s Licensed Application End User License Agreement (EULA).',
        marks: ['strong']
      }
    ]
  }
]

async function createTermsOfService() {
  try {
    console.log('Creating Terms of Service document...')
    
    const doc = {
      _type: 'termsOfService',
      title: 'Terms of Service',
      lastUpdated: '2025-10-22',
      content: termsContent,
    }

    const result = await client.create(doc)
    console.log('✅ Terms of Service created successfully!')
    console.log('Document ID:', result._id)
    
  } catch (error) {
    console.error('❌ Error creating Terms of Service:', error)
  }
}

createTermsOfService()
