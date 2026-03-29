'use client';
import { useEffect, useRef, useState, FormEvent } from 'react';
import { useModal } from '@/context/ModalContext';

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

const LEFT_POINTS = [
  { icon: '🤖', text: 'AI-powered strategies that outperform traditional marketing' },
  { icon: '📈', text: '300% average traffic increase for our clients' },
  { icon: '⚡', text: '3x faster results vs conventional agencies' },
  { icon: '🔒', text: 'No long-term contracts — results speak for themselves' },
];

const STATS = [
  { value: '300%', label: 'Avg. Traffic\nIncrease' },
  { value: '3x', label: 'Faster\nResults' },
  { value: '100+', label: 'Satisfied\nClients' },
];

function ThankYou({ onClose }: { onClose: () => void }) {
  return (
    <div className="thankyou">
      <svg className="thankyou__svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle className="thankyou__circle" cx="50" cy="50" r="45" stroke="#FF4000" strokeWidth="4" strokeLinecap="round" />
        <polyline className="thankyou__tick" points="28,52 43,67 72,34" stroke="#FF4000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <h3 className="thankyou__heading">Thank You!</h3>
      <p className="thankyou__msg">We&apos;ve received your message and will get back to you within 24 hours.</p>
      <button className="btn btn--outline btn--sm" onClick={onClose} style={{ marginTop: '8px' }}>Close</button>
    </div>
  );
}

export default function ContactModal() {
  const { open, closeModal } = useModal();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<{ type: 'error' | ''; message: string }>({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') closeModal();
    }
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, closeModal]);

  useEffect(() => {
    if (!open) {
      formRef.current?.reset();
      setErrors({});
      setStatus({ type: '', message: '' });
      setSubmitted(false);
    }
  }, [open]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const getValue = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement).value;

    const data = {
      name: getValue('name'),
      email: getValue('email'),
      phone: getValue('phone'),
      service: getValue('service'),
      message: getValue('message'),
    };

    const newErrors: Record<string, string> = {};
    if (!data.name.trim()) newErrors.name = 'Please enter your name.';
    if (data.email.trim()) {
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRe.test(data.email.trim())) newErrors.email = 'Please enter a valid email address.';
    }
    if (!data.phone.trim()) newErrors.phone = 'Please enter your phone number.';
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
      setStatus({ type: 'error', message: 'Oops! Something went wrong. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  }

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={closeModal} role="dialog" aria-modal="true" aria-label="Contact form">
      <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal} aria-label="Close modal">✕</button>

          <div className="modal-box">
            {/* Left Panel — always visible */}
            <div className="modal-left">
              <div className="modal-left__content">
                <h3>Let's<br />Grow Your<br />Business</h3>
                <p>Partner with Chennai's leading AI-powered digital marketing agency and start seeing real results — faster.</p>
                <ul className="modal-points">
                  {LEFT_POINTS.map((pt) => (
                    <li key={pt.text}>
                      <span className="modal-point-icon">{pt.icon}</span>
                      <span>{pt.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="modal-stats">
                {STATS.map((s) => (
                  <div key={s.label} className="modal-stat">
                    <strong>{s.value}</strong>
                    <span style={{ whiteSpace: 'pre-line' }}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel — form or thank you */}
            <div className="modal-right">
              {submitted ? (
                <ThankYou onClose={closeModal} />
              ) : (
                <>
                  <h4>Get a Free Consultation</h4>
                  <p className="modal-subtitle">Fill out the form and we'll get back to you within 24 hours.</p>

                  <form ref={formRef} className="contact__form" onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                      <label htmlFor="modal-name">Your Name <span aria-hidden="true">*</span></label>
                      <input type="text" id="modal-name" name="name" placeholder="Your Name" required autoComplete="name" className={errors.name ? 'error' : ''} />
                      {errors.name && <span className="form-error visible">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="modal-phone">Phone Number <span aria-hidden="true">*</span></label>
                      <input type="tel" id="modal-phone" name="phone" placeholder="+91 98765 43210" required autoComplete="tel" className={errors.phone ? 'error' : ''} />
                      {errors.phone && <span className="form-error visible">{errors.phone}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="modal-email">Email Address <span className="optional-label">(optional)</span></label>
                      <input type="email" id="modal-email" name="email" placeholder="your@email.com" autoComplete="email" className={errors.email ? 'error' : ''} />
                      {errors.email && <span className="form-error visible">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="modal-service">Service Interested In <span aria-hidden="true">*</span></label>
                      <select id="modal-service" name="service" className={errors.service ? 'error' : ''} defaultValue="">
                        <option value="" disabled>Select a service…</option>
                        {SERVICES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      {errors.service && <span className="form-error visible">{errors.service}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="modal-message">Message <span className="optional-label">(optional)</span></label>
                      <textarea id="modal-message" name="message" placeholder="Tell us about your project..." rows={3} className={errors.message ? 'error' : ''} />
                    </div>
                    {status.message && (
                      <div className={`form-status ${status.type}`} aria-live="polite">{status.message}</div>
                    )}
                    <button type="submit" className="btn btn--primary btn--full" disabled={submitting}>
                      {submitting ? 'Sending…' : 'Send Message'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
      </div>
    </div>
  );
}
