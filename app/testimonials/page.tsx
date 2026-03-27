import type { Metadata } from 'next';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Client Testimonials & Success Stories',
  description:
    'See what Chennai businesses say about DigiBoomi — real results, real clients, real growth through AI-powered digital marketing.',
  alternates: { canonical: 'https://www.digiboomi.com/testimonials' },
  openGraph: {
    url: 'https://www.digiboomi.com/testimonials',
    title: 'Client Testimonials & Success Stories | DigiBoomi',
    description:
      'Real results from real clients — hear how DigiBoomi helped Chennai businesses grow with AI-powered digital marketing.',
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <Testimonials />
      <ContactForm />
    </>
  );
}
