'use client';
import { useModal } from '@/context/ModalContext';

export default function AIAdvantage() {
  const { openModal } = useModal();
  return (
    <section className="ai-powered" id="ai-advantage">
      <div className="container">
        <div className="section-header section-header--light">
          <span className="section-label">AI-Powered Marketing</span>
          <h2>Smarter Marketing Powered by Artificial Intelligence</h2>
          <p>We combine human creativity with cutting-edge AI tools to deliver faster results, deeper insights, and higher ROI — giving your Chennai business a competitive edge that manual marketing simply can&apos;t match.</p>
        </div>

        <div className="ai-features-grid">
          <article className="ai-feature-card">
            <div className="ai-feature-card__icon" aria-hidden="true">🔍</div>
            <h3>AI Keyword Research</h3>
            <p>Discover high-intent search terms your Chennai competitors are missing.</p>
          </article>
          <article className="ai-feature-card">
            <div className="ai-feature-card__icon" aria-hidden="true">🎯</div>
            <h3>Predictive Audience Targeting</h3>
            <p>Reach the right people at the right time with AI-driven audience segmentation.</p>
          </article>
          <article className="ai-feature-card">
            <div className="ai-feature-card__icon" aria-hidden="true">⚡</div>
            <h3>Automated Ad Optimisation</h3>
            <p>AI continuously refines your ad bids and creatives for maximum performance.</p>
          </article>
          <article className="ai-feature-card">
            <div className="ai-feature-card__icon" aria-hidden="true">✍️</div>
            <h3>AI-Assisted Content Creation</h3>
            <p>Scale your content marketing with AI tools guided by expert human strategy.</p>
          </article>
          <article className="ai-feature-card">
            <div className="ai-feature-card__icon" aria-hidden="true">📊</div>
            <h3>Real-Time Analytics &amp; Insights</h3>
            <p>Live dashboards and AI-generated reports that tell you exactly what to do next.</p>
          </article>
          <article className="ai-feature-card">
            <div className="ai-feature-card__icon" aria-hidden="true">🤖</div>
            <h3>AI Chatbots &amp; Lead Nurturing</h3>
            <p>Capture and convert leads 24/7 with intelligent conversational automation.</p>
          </article>
          <article className="ai-feature-card">
            <div className="ai-feature-card__icon" aria-hidden="true">🌐</div>
            <h3>Generative Engine Optimisation (GEO)</h3>
            <p>Optimise your brand to appear in ChatGPT, Gemini, and Perplexity AI answers — the new frontier of search visibility beyond traditional Google search.</p>
          </article>

          <div className="ai-powered__bottom">
          <div className="ai-powered__stats">
            <div className="ai-stat">
              <strong>94<span>/100</span></strong>
              <span>Avg. AI Performance Score</span>
            </div>
            <div className="ai-stat-divider" aria-hidden="true"></div>
            <div className="ai-stat">
              <strong>3x</strong>
              <span>Faster results vs traditional</span>
            </div>
            <div className="ai-stat-divider" aria-hidden="true"></div>
            <div className="ai-stat">
              <strong>300%</strong>
              <span>Average traffic increase</span>
            </div>
          </div>
          <button className="btn btn--primary btn--lg" onClick={openModal}>Get AI-Powered Growth</button>
          </div>
        </div>
      </div>
    </section>
  );
}
