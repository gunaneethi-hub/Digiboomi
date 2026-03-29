'use client';
import { useState, FormEvent } from 'react';

const FORM_ACTION =
  'https://script.google.com/macros/s/AKfycbyUw0dy0rUF5feSS-X2bpvA6kP9yhpVZJqWf4tmJ40ywEClfNXag6mhVKFbixjWeNxV/exec';

const SERVICES = [
  'SEO Optimization',
  'Social Media Marketing',
  'Google Ads / PPC',
  'Website Design',
  'Branding & Identity',
  'Not Sure / General Enquiry',
];

function ThankYou() {
  return (
    <div className="thankyou">
      <svg className="thankyou__svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle className="thankyou__circle" cx="50" cy="50" r="45" stroke="#FF4000" strokeWidth="4" strokeLinecap="round" />
        <polyline className="thankyou__tick" points="28,52 43,67 72,34" stroke="#FF4000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <h3 className="thankyou__heading">Thank You!</h3>
      <p className="thankyou__msg">We&apos;ve received your message and will get back to you within 24 hours.</p>
    </div>
  );
}

export default function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<{ type: 'error' | ''; message: string }>({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleReset() {
    setSubmitted(false);
    setErrors({});
    setStatus({ type: '', message: '' });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const getValue = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement).value;

    const data = {
      name: getValue('name'),
      email: getValue('email'),
      phone: getValue('phone'),
      service: (form.elements.namedItem('service') as HTMLSelectElement).value,
      message: getValue('message'),
    };

    const newErrors: Record<string, string> = {};
    if (!data.name.trim()) newErrors.name = 'Please enter your name.';
    if (!data.phone.trim()) newErrors.phone = 'Please enter your phone number.';
    if (data.email.trim()) {
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRe.test(data.email.trim())) newErrors.email = 'Please enter a valid email address.';
    }
    if (!data.service) newErrors.service = 'Please select a service.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([k, v]) => formData.append(k, v));
      await fetch(FORM_ACTION, { method: 'POST', mode: 'no-cors', body: formData });
      form.reset();
      setSubmitted(true);
    } catch {
      setStatus({ type: 'error', message: 'Oops! Something went wrong. Please try again or email us directly at hello@digiboomi.com' });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="container contact__inner">
        <div className="contact__info">
          <span className="section-label section-label--light">Get In Touch</span>
          <h2>Ready to Grow Your Business?</h2>
          <p>Let&apos;s discuss how we can help you achieve your digital marketing goals. Get in touch for a free consultation.</p>

          <ul className="contact__details">
            <li>
              <div className="contact__detail-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <strong>Email Us</strong>
                <a href="mailto:hello@digiboomi.com">hello@digiboomi.com</a>
              </div>
            </li>
            <li>
              <div className="contact__detail-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.58 5.1 2 2 0 0 1 3.56 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 18.36z"/>
                </svg>
              </div>
              <div>
                <strong>Call Us</strong>
                <a href="tel:+918248421284">+91 8248421284</a>
              </div>
            </li>
            <li>
              <div className="contact__detail-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <strong>Visit Us</strong>
                <address>No 19, MG Nagar St, Urappakam,<br />Tamil Nadu 603211, India</address>
              </div>
            </li>
          </ul>
        </div>

        <div className="contact__form-wrap">
          {submitted ? (
            <ThankYou />
          ) : (
            <>
              <h3>Get a Free Consultation</h3>
              <p>Fill out the form below and our team will get back to you within 24 hours.</p>

              <form className="contact__form" id="contactForm" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name">Your Name <span aria-hidden="true">*</span></label>
                  <input type="text" id="name" name="name" placeholder="Your Name" required autoComplete="name" className={errors.name ? 'error' : ''} />
                  {errors.name && <span className="form-error visible" id="nameError">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number <span aria-hidden="true">*</span></label>
                  <input type="tel" id="phone" name="phone" placeholder="+91 98765 43210" required autoComplete="tel" className={errors.phone ? 'error' : ''} />
                  {errors.phone && <span className="form-error visible" id="phoneError">{errors.phone}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address <span className="optional-label">(optional)</span></label>
                  <input type="email" id="email" name="email" placeholder="your@email.com" autoComplete="email" className={errors.email ? 'error' : ''} />
                  {errors.email && <span className="form-error visible" id="emailError">{errors.email}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Interested In <span aria-hidden="true">*</span></label>
                  <select id="service" name="service" defaultValue="" className={errors.service ? 'error' : ''}>
                    <option value="" disabled>Select a service…</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.service && <span className="form-error visible" id="serviceError">{errors.service}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message <span className="optional-label">(optional)</span></label>
                  <textarea id="message" name="message" placeholder="Tell us about your project..." rows={4} className={errors.message ? 'error' : ''} />
                </div>

                {status.message && (
                  <div className={`form-status ${status.type}`} aria-live="polite">{status.message}</div>
                )}

                <button type="submit" className="btn btn--primary btn--full" id="submitBtn" disabled={submitting}>
                  {submitting ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
