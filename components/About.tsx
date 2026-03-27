import Link from 'next/link';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Why Choose Us</span>
          <h2>Chennai&apos;s Most Trusted AI-Powered Digital Marketing Agency</h2>
          <p>DigiBoomi is a results-driven, AI-powered digital marketing agency based in Chennai, Tamil Nadu. We help local businesses, startups, and growing brands improve online visibility, generate quality leads, and scale through intelligent digital strategies.</p>
        </div>

        <div className="about__features-grid">
          <div className="about__feature-card">
            <div className="about__feature-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"/>
                <line x1="12" y1="20" x2="12" y2="4"/>
                <line x1="6" y1="20" x2="6" y2="14"/>
              </svg>
            </div>
            <h3>Strategic Approach</h3>
            <p>Data-driven strategies tailored to your specific business goals and target audience.</p>
          </div>

          <div className="about__feature-card">
            <div className="about__feature-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3>Expert Team</h3>
            <p>Seasoned professionals with years of industry experience across all digital channels.</p>
          </div>

          <div className="about__feature-card">
            <div className="about__feature-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                <polyline points="17 6 23 6 23 12"/>
              </svg>
            </div>
            <h3>Proven Results</h3>
            <p>Track record of delivering measurable ROI and tangible growth for our clients.</p>
          </div>

          <div className="about__feature-card">
            <div className="about__feature-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <h3>Fast Execution</h3>
            <p>Quick turnaround without ever compromising on quality or strategy.</p>
          </div>
        </div>

        <div className="about__cta">
          <Link href="/contact" className="btn btn--primary btn--lg">Work With Us</Link>
        </div>
      </div>
    </section>
  );
}
