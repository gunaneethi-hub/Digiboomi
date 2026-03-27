import type { Metadata } from 'next';
import Results from '@/components/Results';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Proven Results & Client Success Stories',
  description:
    'DigiBoomi has delivered 300% average traffic increases, 50K+ leads generated, $10M+ revenue, and 50+ industry awards. See what we achieve for Chennai businesses.',
  alternates: { canonical: 'https://www.digiboomi.com/results' },
  openGraph: {
    url: 'https://www.digiboomi.com/results',
    title: 'Proven Results & Client Success Stories | DigiBoomi',
    description:
      '300% traffic increase, 50K+ leads, $10M+ revenue. See DigiBoomi\'s track record of digital marketing success.',
  },
};

export default function ResultsPage() {
  return (
    <>
      <Results />
      <Testimonials />
      <ContactForm />
    </>
  );
}
