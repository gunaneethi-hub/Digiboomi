export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>What Our Clients Say</h2>
          <p>Don&apos;t just take our word for it — hear from businesses we&apos;ve helped grow</p>
        </div>

        <div className="testimonials__grid">
          <article className="testimonial-card">
            <div className="testimonial-card__stars" aria-label="5 out of 5 stars">★★★★★</div>
            <blockquote>
              <p>&ldquo;DigiBoomi transformed our online presence. We saw a 250% increase in qualified leads within just 3 months!&rdquo;</p>
            </blockquote>
            <footer className="testimonial-card__author">
              <div className="testimonial-card__avatar" aria-hidden="true">SJ</div>
              <div>
                <cite className="testimonial-card__name">Sarah Johnson</cite>
                <span className="testimonial-card__role">CEO, TechStart</span>
              </div>
            </footer>
          </article>

          <article className="testimonial-card">
            <div className="testimonial-card__stars" aria-label="5 out of 5 stars">★★★★★</div>
            <blockquote>
              <p>&ldquo;The team is incredibly professional and data-driven. Their strategies have consistently delivered exceptional ROI.&rdquo;</p>
            </blockquote>
            <footer className="testimonial-card__author">
              <div className="testimonial-card__avatar" aria-hidden="true">MC</div>
              <div>
                <cite className="testimonial-card__name">Michael Chen</cite>
                <span className="testimonial-card__role">Marketing Director, GrowthCo</span>
              </div>
            </footer>
          </article>

          <article className="testimonial-card">
            <div className="testimonial-card__stars" aria-label="5 out of 5 stars">★★★★★</div>
            <blockquote>
              <p>&ldquo;Best decision we made was partnering with DigiBoomi. Their social media expertise took our brand to the next level.&rdquo;</p>
            </blockquote>
            <footer className="testimonial-card__author">
              <div className="testimonial-card__avatar" aria-hidden="true">ER</div>
              <div>
                <cite className="testimonial-card__name">Emily Rodriguez</cite>
                <span className="testimonial-card__role">Founder, StyleHub</span>
              </div>
            </footer>
          </article>
        </div>
      </div>
    </section>
  );
}
