export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>AI-powered digital marketing solutions for Chennai businesses — from local startups to established brands</p>
        </div>

        <div className="services__grid">
          <article className="service-card">
            <div className="service-card__icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </div>
            <h3>SEO Optimisation</h3>
            <p>Rank higher on Google for Chennai and pan-India searches. Our AI-driven SEO strategies deliver sustained organic traffic growth.</p>
          </article>

          <article className="service-card">
            <div className="service-card__icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </div>
            <h3>Social Media Marketing</h3>
            <p>Build your brand and engage Chennai audiences on Instagram, Facebook, and LinkedIn with AI-optimised creative campaigns.</p>
          </article>

          <article className="service-card">
            <div className="service-card__icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <h3>Email Marketing</h3>
            <p>Create targeted campaigns that convert subscribers into loyal customers with measurable results.</p>
          </article>

          <article className="service-card">
            <div className="service-card__icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"/>
                <line x1="12" y1="20" x2="12" y2="4"/>
                <line x1="6" y1="20" x2="6" y2="14"/>
              </svg>
            </div>
            <h3>Analytics &amp; Reporting</h3>
            <p>Make data-driven decisions with comprehensive analytics, dashboards and actionable insights.</p>
          </article>

          <article className="service-card">
            <div className="service-card__icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9"/>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
              </svg>
            </div>
            <h3>Content Creation</h3>
            <p>Compelling content that resonates with your audience, builds authority and drives sustained engagement.</p>
          </article>

          <article className="service-card">
            <div className="service-card__icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
            </div>
            <h3>PPC Advertising</h3>
            <p>Maximise ROI with AI-optimised Google Ads and social media campaigns — precision targeting for Chennai and beyond.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
