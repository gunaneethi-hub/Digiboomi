import type { Metadata } from 'next';
import About from '@/components/About';
import ChennaiSEO from '@/components/ChennaiSEO';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'About DigiBoomi – Chennai\'s AI-Powered Digital Marketing Agency',
  description:
    'Learn about DigiBoomi — a results-driven, AI-powered digital marketing agency based in Chennai, Tamil Nadu. Expert team, proven strategies, fast execution.',
  alternates: { canonical: 'https://www.digiboomi.com/about' },
  openGraph: {
    url: 'https://www.digiboomi.com/about',
    title: "About DigiBoomi – Chennai's AI-Powered Digital Marketing Agency",
    description:
      "DigiBoomi is Chennai's most trusted AI-powered digital marketing agency. Strategic approach, expert team, proven results.",
  },
};

export default function AboutPage() {
  return (
    <>
      <About />
      <ChennaiSEO />
      <ContactForm />
    </>
  );
}
