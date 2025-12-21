import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Results } from './components/Results';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { SEO } from './components/SEO';
import { useState } from 'react';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <SEO />
      <Navbar onGetStartedClick={() => setIsContactModalOpen(true)} />
      <Hero onGetStartedClick={() => setIsContactModalOpen(true)} />
      <Services />
      <About />
      <Results />
      <Testimonials />
      <Contact />
      <Footer />
      <ContactModal 
        isOpen={isContactModalOpen} 
        onOpenChange={setIsContactModalOpen}
        source="Get Started Button"
      />
    </div>
  );
}