import Hero from '@/components/Hero';
import Services from '@/components/Services';
import AIAdvantage from '@/components/AIAdvantage';
import About from '@/components/About';
import ChennaiSEO from '@/components/ChennaiSEO';
import Results from '@/components/Results';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <AIAdvantage />
      <About />
      <ChennaiSEO />
      <Results />
      <Testimonials />
      <ContactForm />
    </>
  );
}
