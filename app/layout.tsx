import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactModal from '@/components/ContactModal';
import { ModalProvider } from '@/context/ModalContext';
import '../styles.css';

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.digiboomi.com/#organization',
      name: 'DigiBoomi',
      url: 'https://www.digiboomi.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.digiboomi.com/digiboomi-logo.png',
        width: 250,
        height: 60,
      },
      description:
        "DigiBoomi is Chennai's leading AI-powered digital marketing agency specialising in SEO, social media marketing, PPC advertising, email marketing, and AI-driven growth strategies.",
      email: 'hello@digiboomi.com',
      telephone: '+91-8248421284',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'No 19, MG Nagar St',
        addressLocality: 'Urappakam',
        addressRegion: 'Tamil Nadu',
        postalCode: '603211',
        addressCountry: 'IN',
      },
      sameAs: [
        'https://www.instagram.com/digiboomi',
        'https://www.linkedin.com/company/digiboomi',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        email: 'hello@digiboomi.com',
        telephone: '+91-8248421284',
        availableLanguage: ['English'],
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.digiboomi.com/#localbusiness',
      name: 'DigiBoomi',
      image: 'https://www.digiboomi.com/og-image.svg',
      url: 'https://www.digiboomi.com',
      telephone: '+91-8248421284',
      email: 'hello@digiboomi.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'No 19, MG Nagar St',
        addressLocality: 'Urappakam',
        addressRegion: 'Tamil Nadu',
        postalCode: '603211',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 12.9046,
        longitude: 80.0524,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      priceRange: '$$',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.digiboomi.com/#website',
      url: 'https://www.digiboomi.com',
      name: 'DigiBoomi',
      description: 'Transform your business with innovative digital marketing strategies',
      publisher: { '@id': 'https://www.digiboomi.com/#organization' },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'ProfessionalService',
      name: 'DigiBoomi – Digital Marketing Services',
      provider: { '@id': 'https://www.digiboomi.com/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Chennai', containedInPlace: { '@type': 'State', name: 'Tamil Nadu' } },
        { '@type': 'Country', name: 'India' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Marketing Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Optimization', description: 'Comprehensive SEO services to improve your search engine rankings and drive organic traffic.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Marketing', description: 'Strategic social media campaigns to engage your audience and grow brand awareness.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Email Marketing', description: 'Targeted email campaigns to nurture leads and drive conversions.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'PPC Advertising', description: 'Data-driven paid advertising campaigns on Google and social media for maximum ROI.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Content Creation', description: 'Compelling content that resonates with your audience and drives engagement.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Analytics & Reporting', description: 'Comprehensive analytics and reporting to support data-driven business decisions.' } },
        ],
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.digiboomi.com'),
  title: {
    default: 'DigiBoomi – AI-Powered Digital Marketing, SEO & GEO Agency in Chennai',
    template: '%s | DigiBoomi',
  },
  description:
    "Chennai's leading AI-powered digital marketing agency specialising in SEO, GEO, Google Ads, Social Media, Website Design and Branding. Get found on Google and AI search engines.",
  keywords: [
    'digital marketing agency Chennai',
    'AI powered digital marketing Chennai',
    'SEO agency Chennai',
    'GEO agency Chennai',
    'generative engine optimisation Chennai',
    'SEO services Chennai',
    'social media marketing Chennai',
    'PPC advertising Chennai',
    'Google Ads Chennai',
    'website design Chennai',
    'branding agency Chennai',
    'DigiBoomi',
  ],
  authors: [{ name: 'DigiBoomi' }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  alternates: { canonical: 'https://www.digiboomi.com' },
  openGraph: {
    type: 'website',
    url: 'https://www.digiboomi.com',
    siteName: 'DigiBoomi',
    title: 'DigiBoomi – AI-Powered Digital Marketing, SEO & GEO Agency in Chennai',
    description: "Chennai's leading AI-powered digital marketing agency — SEO, GEO, social media, website design and branding for faster business growth.",
    images: [{ url: '/og-image.svg', width: 1200, height: 630 }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@digiboomi',
    title: 'DigiBoomi – AI-Powered Digital Marketing Agency in Chennai',
    description: "Chennai's leading AI-powered digital marketing agency — SEO, social media, PPC and web design for faster business growth.",
    images: ['/og-image.svg'],
  },
  icons: {
    icon: '/fav-icon.svg',
    apple: '/fav-icon.svg',
  },
  other: {
    'theme-color': '#FF4000',
    'msapplication-TileColor': '#FF4000',
    'geo.region': 'IN-TN',
    'geo.placename': 'Chennai, Tamil Nadu, India',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-93W7SS59D2" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-93W7SS59D2');
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300;12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>
        <ModalProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <ContactModal />
        </ModalProvider>
      </body>
    </html>
  );
}
