import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact DigiBoomi – Free Digital Marketing Consultation in Chennai',
  description:
    'Get in touch with DigiBoomi for a free digital marketing consultation. Call +91 8248421284 or email hello@digiboomi.com. Based in Urappakam, Chennai.',
  alternates: { canonical: 'https://www.digiboomi.com/contact' },
  openGraph: {
    url: 'https://www.digiboomi.com/contact',
    title: 'Contact DigiBoomi – Free Digital Marketing Consultation in Chennai',
    description:
      'Ready to grow your business? Contact DigiBoomi for a free consultation. +91 8248421284 | hello@digiboomi.com',
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
