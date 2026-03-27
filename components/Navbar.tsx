'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/ai-marketing', label: 'AI Marketing' },
  { href: '/about', label: 'About' },
  { href: '/results', label: 'Results' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      const navbar = document.getElementById('navbar');
      if (navbar && !navbar.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  function isActive(href: string): boolean {
    if (href.includes('#')) return pathname === '/';
    if (href === '/') return pathname === '/';
    return pathname === href;
  }

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="container navbar__inner">
        <Link href="/" className="navbar__logo" aria-label="DigiBoomi Home">
          <span className="logo-text">Digi<span className="logo-accent">Boomi</span></span>
        </Link>

        <nav className="navbar__links" id="navLinks" aria-label="Main navigation">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className={isActive(href) ? 'active' : ''}>
              {label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn btn--primary navbar__cta">Get Started</Link>

        <button
          className={`navbar__hamburger${menuOpen ? ' active' : ''}`}
          id="hamburger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      <nav
        className={`navbar__mobile${menuOpen ? ' open' : ''}`}
        id="mobileMenu"
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map(({ href, label }) => (
          <Link key={href} href={href} className="mobile-link" onClick={() => setMenuOpen(false)}>
            {label}
          </Link>
        ))}
        <Link href="/contact" className="btn btn--primary mobile-cta" onClick={() => setMenuOpen(false)}>
          Get Started
        </Link>
      </nav>
    </header>
  );
}
