'use client';
import Link from 'next/link';
import { useRef } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(2) + '%';
    const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(2) + '%';
    heroRef.current.style.setProperty('--mx', x);
    heroRef.current.style.setProperty('--my', y);
  }

  return (
    <section className="hero" id="home" ref={heroRef} onMouseMove={handleMouseMove}>
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__badge hero-reveal hero-reveal--1">AI-Powered Digital Marketing · Chennai</span>

          <h1 className="hero__heading hero-reveal hero-reveal--2">
            <span className="hero__heading-line">Grow Smarter.</span><br />
            <span className="hero__heading-line">Grow Faster.</span><br />
            <span style={{ color: '#ffffff' }}>With DigiBoomi.</span>
          </h1>

          <p className="hero__subtext hero-reveal hero-reveal--4">
            Chennai's leading AI-powered digital marketing agency. We help businesses boost visibility, generate quality leads, and scale faster with smart SEO, targeted ads, and high-conversion designs.
          </p>

          <div className="hero__actions hero-reveal hero-reveal--5">
            <Link href="/contact" className="btn btn--primary btn--lg">Start Growing Today</Link>
            <Link href="/services" className="btn btn--outline-light btn--lg">See Our Services</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
