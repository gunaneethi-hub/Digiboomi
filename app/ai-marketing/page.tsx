import type { Metadata } from 'next';
import AIAdvantage from '@/components/AIAdvantage';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'AI-Powered Marketing & Generative Engine Optimisation (GEO) in Chennai',
  description:
    'DigiBoomi uses cutting-edge AI tools — keyword research, predictive targeting, automated ad optimisation, and GEO — to give Chennai businesses a competitive edge.',
  alternates: { canonical: 'https://www.digiboomi.com/ai-marketing' },
  openGraph: {
    url: 'https://www.digiboomi.com/ai-marketing',
    title: 'AI-Powered Marketing & GEO in Chennai | DigiBoomi',
    description:
      'Smarter marketing powered by AI — keyword research, audience targeting, GEO, and automated optimisation for Chennai businesses.',
  },
};

export default function AIMarketingPage() {
  return (
    <>
      <AIAdvantage />
      <ContactForm />
    </>
  );
}
