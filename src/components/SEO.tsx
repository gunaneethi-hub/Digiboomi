import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

export function SEO({
  title = 'DigiBoomi - Digital Marketing Agency | SEO, Social Media & PPC',
  description = 'Transform your business with DigiBoomi\'s innovative digital marketing strategies. Specializing in SEO optimization, social media marketing, email campaigns, and PPC advertising.',
  canonical = 'https://www.digiboomi.com',
  ogImage = 'https://www.digiboomi.com/og-image.jpg'
}: SEOProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Helper function to set meta tag
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Helper function to set link tag
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (!element) {
        element = document.createElement('link');
        element.rel = rel;
        document.head.appendChild(element);
      }
      element.href = href;
    };

    // Basic meta tags
    setMetaTag('description', description);
    setMetaTag('keywords', 'digital marketing, SEO, social media marketing, PPC advertising, email marketing, content marketing, brand strategy, online marketing, DigiBoomi');
    setMetaTag('author', 'DigiBoomi');
    setMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('googlebot', 'index, follow');
    
    // Viewport (should be set but making sure)
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    
    // Language and region
    setMetaTag('language', 'English');
    setMetaTag('geo.region', 'IN');
    setMetaTag('geo.placename', 'India');
    
    // Open Graph tags
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:url', canonical, true);
    setMetaTag('og:image', ogImage, true);
    setMetaTag('og:image:width', '1200', true);
    setMetaTag('og:image:height', '630', true);
    setMetaTag('og:site_name', 'DigiBoomi', true);
    setMetaTag('og:locale', 'en_US', true);
    
    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);
    setMetaTag('twitter:site', '@digiboomi');
    setMetaTag('twitter:creator', '@digiboomi');
    
    // Canonical URL
    setLinkTag('canonical', canonical);
    
    // Theme color
    setMetaTag('theme-color', '#FF4000');
    setMetaTag('msapplication-TileColor', '#FF4000');
    
    // Apple mobile web app
    setMetaTag('apple-mobile-web-app-capable', 'yes');
    setMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');
    setMetaTag('apple-mobile-web-app-title', 'DigiBoomi');

  }, [title, description, canonical, ogImage]);

  // Structured Data (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.digiboomi.com/#organization",
        "name": "DigiBoomi",
        "url": "https://www.digiboomi.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.digiboomi.com/digiboomi-logo.png",
          "width": 250,
          "height": 60
        },
        "description": "DigiBoomi is a leading digital marketing agency specializing in SEO, social media marketing, PPC advertising, and email marketing campaigns.",
        "email": "hello@digiboomi.com",
        "telephone": "+91-8248421284",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "No 19, MG Nagar St",
          "addressLocality": "Urappakam",
          "addressRegion": "Tamil Nadu",
          "postalCode": "603211",
          "addressCountry": "IN"
        },
        "sameAs": [
          "https://www.instagram.com/digiboomi",
          "https://www.linkedin.com/company/digiboomi"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "email": "hello@digiboomi.com",
          "telephone": "+91-8248421284",
          "availableLanguage": ["English"]
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.digiboomi.com/#localbusiness",
        "name": "DigiBoomi",
        "image": "https://www.digiboomi.com/digiboomi-logo.png",
        "url": "https://www.digiboomi.com",
        "telephone": "+91-8248421284",
        "email": "hello@digiboomi.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "No 19, MG Nagar St",
          "addressLocality": "Urappakam",
          "addressRegion": "Tamil Nadu",
          "postalCode": "603211",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 12.9046,
          "longitude": 80.0524
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        },
        "priceRange": "$$"
      },
      {
        "@type": "WebSite",
        "@id": "https://www.digiboomi.com/#website",
        "url": "https://www.digiboomi.com",
        "name": "DigiBoomi",
        "description": "Transform your business with innovative digital marketing strategies",
        "publisher": {
          "@id": "https://www.digiboomi.com/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.digiboomi.com/#webpage",
        "url": "https://www.digiboomi.com",
        "name": title,
        "description": description,
        "isPartOf": {
          "@id": "https://www.digiboomi.com/#website"
        },
        "about": {
          "@id": "https://www.digiboomi.com/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Service",
        "@id": "https://www.digiboomi.com/#service",
        "serviceType": "Digital Marketing",
        "provider": {
          "@id": "https://www.digiboomi.com/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Digital Marketing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SEO Optimization",
                "description": "Comprehensive SEO services to improve search engine rankings"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Social Media Marketing",
                "description": "Strategic social media campaigns to engage your audience"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Email Marketing",
                "description": "Targeted email campaigns to nurture leads and drive conversions"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "PPC Advertising",
                "description": "Data-driven paid advertising campaigns for maximum ROI"
              }
            }
          ]
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}