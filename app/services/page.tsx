import type { Metadata } from 'next';
import Services from '@/components/Services';
import AIAdvantage from '@/components/AIAdvantage';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'SEO, Social Media & Digital Marketing Services in Chennai',
  description:
    'DigiBoomi offers AI-powered SEO, social media marketing, PPC advertising, email marketing, content creation, and analytics services for Chennai businesses.',
  alternates: { canonical: 'https://www.digiboomi.com/services' },
  openGraph: {
    url: 'https://www.digiboomi.com/services',
    title: 'SEO, Social Media & Digital Marketing Services in Chennai | DigiBoomi',
    description:
      'AI-powered digital marketing services in Chennai — SEO, social media, PPC, email marketing and content creation for local businesses.',
  },
};

export default function ServicesPage() {
  return (
    <>
      <Services />
      <AIAdvantage />
      <ContactForm />
    </>
  );
}
