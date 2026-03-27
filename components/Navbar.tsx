'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '/', label: 'Home',         sectionId: 'home' },
  { href: '/services', label: 'Services',       sectionId: 'services' },
  { href: '/ai-marketing', label: 'AI Marketing',   sectionId: 'ai-advantage' },
  { href: '/about', label: 'About',          sectionId: 'about' },
  { href: '/results', label: 'Results',        sectionId: 'results' },
  { href: '/testimonials', label: 'Testimonials',   sectionId: 'testimonials' },
  { href: '/contact', label: 'Contact',        sectionId: 'contact' },
];

const NAVBAR_HEIGHT = 70;

export default function Navbar() {
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Scroll: navbar shadow + active section tracking on homepage
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);

      if (isHomepage) {
        const scrollY = window.scrollY + 100;
        let current = 'home';
        for (const link of NAV_LINKS) {
          const el = document.getElementById(link.sectionId);
          if (el && el.offsetTop <= scrollY) current = link.sectionId;
        }
        setActiveSection(current);
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHomepage]);

  // Close mobile menu on outside click
  useEffect(() => {
    function onOutsideClick(e: MouseEvent) {
      const navbar = document.getElementById('navbar');
      if (navbar && !navbar.contains(e.target as Node)) setMenuOpen(false);
    }
    document.addEventListener('click', onOutsideClick);
    return () => document.removeEventListener('click', onOutsideClick);
  }, []);

  function smoothScrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  function handleClick(e: React.MouseEvent, sectionId: string) {
    setMenuOpen(false);
    if (isHomepage) {
      e.preventDefault();
      smoothScrollTo(sectionId);
    }
  }

  function isActive(link: typeof NAV_LINKS[number]): boolean {
    if (isHomepage) return activeSection === link.sectionId;
    return pathname === link.href;
  }

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="container navbar__inner">
        <Link
          href="/"
          className="navbar__logo"
          aria-label="DigiBoomi Home"
          onClick={(e) => { if (isHomepage) { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); } }}
        >
          <span className="logo-text">Digi<span className="logo-accent">Boomi</span></span>
        </Link>

        <nav className="navbar__links" id="navLinks" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link) ? 'active' : ''}
              onClick={(e) => handleClick(e, link.sectionId)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="btn btn--primary navbar__cta"
          onClick={(e) => { if (isHomepage) { e.preventDefault(); smoothScrollTo('contact'); } }}
        >
          Get Started
        </Link>

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
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="mobile-link"
            onClick={(e) => handleClick(e, link.sectionId)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="btn btn--primary mobile-cta"
          onClick={(e) => { if (isHomepage) { e.preventDefault(); smoothScrollTo('contact'); } setMenuOpen(false); }}
        >
          Get Started
        </Link>
      </nav>
    </header>
  );
}
