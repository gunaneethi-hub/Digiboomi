export default function Results() {
  return (
    <section className="results" id="results">
      <div className="container">
        <div className="section-header section-header--light">
          <h2>Results That Speak</h2>
          <p>Our track record of success across hundreds of client campaigns</p>
        </div>

        <div className="results__grid">
          <div className="result-stat">
            <div className="result-stat__icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                <polyline points="17 6 23 6 23 12"/>
              </svg>
            </div>
            <strong className="result-stat__value">300%</strong>
            <span className="result-stat__label">Average Traffic Increase</span>
          </div>

          <div className="result-stat">
            <div className="result-stat__icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <strong className="result-stat__value">50K+</strong>
            <span className="result-stat__label">Leads Generated</span>
          </div>

          <div className="result-stat">
            <div className="result-stat__icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"/>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <strong className="result-stat__value">$10M+</strong>
            <span className="result-stat__label">Revenue Generated</span>
          </div>

          <div className="result-stat">
            <div className="result-stat__icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="7"/>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
              </svg>
            </div>
            <strong className="result-stat__value">50+</strong>
            <span className="result-stat__label">Industry Awards</span>
          </div>
        </div>
      </div>
    </section>
  );
}
