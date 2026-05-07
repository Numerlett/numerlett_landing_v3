export default function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://numerlett.com/#organization',
        name: 'NumerLett',
        url: 'https://numerlett.com',
        logo: 'https://numerlett.com/logo.png',
        description:
          'NumerLett is a technology and marketing services company offering software products, AI solutions, digital marketing, and IT consulting.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bengaluru',
          addressRegion: 'Karnataka',
          addressCountry: 'IN',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'sales',
          email: 'hello@numerlett.com',
          availableLanguage: ['English', 'Hindi'],
        },
        sameAs: [
          'https://www.linkedin.com/company/numerlett',
          'https://twitter.com/numerlett',
          'https://github.com/numerlett',
        ],
        foundingDate: '2020',
        numberOfEmployees: { '@type': 'QuantitativeValue', value: '10' },
        areaServed: 'Worldwide',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Technology & Marketing Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Custom Software Development',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Digital Marketing Services',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'AI & Machine Learning Solutions',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Search Engine Optimization',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Web Development' },
            },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://numerlett.com/#website',
        url: 'https://numerlett.com',
        name: 'NumerLett',
        publisher: { '@id': 'https://numerlett.com/#organization' },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://numerlett.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://numerlett.com/products/seed#product',
        name: 'SEED – Inventory Management System',
        alternateName: 'Smart Enterprise Efficiency & Distribution',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, iOS, Android',
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
        },
        description:
          'SEED is an AI-powered inventory management system that helps businesses streamline stock control, procurement, and supply chain operations.',
        provider: { '@id': 'https://numerlett.com/#organization' },
        featureList: [
          'Real-time inventory tracking',
          'Automated reorder alerts',
          'Multi-warehouse support',
          'AI demand forecasting',
          'Analytics dashboard',
          'ERP integrations',
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What technology services does NumerLett offer?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'NumerLett offers custom software development, web development, mobile app development, AI & ML solutions, cloud computing, data analytics, cybersecurity, and IT consulting.',
            },
          },
          {
            '@type': 'Question',
            name: 'What marketing services does NumerLett provide?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'NumerLett provides SEO, PPC/SEM, content marketing, social media marketing, brand strategy, email marketing, market research, and digital analytics services.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is SEED by NumerLett?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "SEED (Smart Enterprise Efficiency & Distribution) is NumerLett's proprietary AI-powered inventory management system for businesses to track stock, manage procurement, and optimize supply chains.",
            },
          },
          {
            '@type': 'Question',
            name: 'Is NumerLett suitable for small businesses and startups?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Yes, NumerLett serves businesses of all sizes — from startups and SMEs to large enterprises — with scalable tech and marketing solutions tailored to each business's stage and goals.",
            },
          },
        ],
      },
    ],
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  )
}
