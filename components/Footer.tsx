import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link href="/" className="navbar__logo" aria-label="DigiBoomi Home">
            <span className="logo-text">Digi<span className="logo-accent">Boomi</span></span>
          </Link>
          <p>Transforming businesses through innovative digital marketing strategies.</p>
        </div>

        <div className="footer__col">
          <h4>Services</h4>
          <ul>
            <li><Link href="/services">SEO &amp; GEO Optimisation</Link></li>
            <li><Link href="/services">Website Design</Link></li>
            <li><Link href="/services">Branding &amp; Identity</Link></li>
            <li><Link href="/services">Social Media</Link></li>
            <li><Link href="/services">Email Marketing</Link></li>
            <li><Link href="/services">PPC Advertising</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Company</h4>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/results">Our Results</Link></li>
            <li><Link href="/#testimonials">Testimonials</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Stay Connected</h4>
          <p>Follow us for tips and updates on digital marketing.</p>
          <div className="footer__socials">
            <a href="https://www.instagram.com/digiboomi" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/digiboomi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="mailto:hello@digiboomi.com" aria-label="Email us" className="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>&copy; {year} DigiBoomi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
