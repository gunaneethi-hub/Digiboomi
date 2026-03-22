/* =====================================================
   DigiBoomi – script.js
   - Navbar scroll effect + mobile menu
   - Smooth scroll for anchor links
   - Contact form validation + submission
   - Footer year
   ===================================================== */

(function () {
  'use strict';

  /* ---- Footer year ---- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Navbar: scroll class + active link ---- */
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.navbar__links a');
  const sections = Array.from(navLinks).map(function (a) {
    return document.getElementById(a.getAttribute('href').slice(1));
  });

  function setActiveLink() {
    const scrollY = window.scrollY + 100;
    let current = sections[0];
    sections.forEach(function (sec) {
      if (sec && sec.offsetTop <= scrollY) current = sec;
    });
    navLinks.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + (current && current.id));
    });
  }

  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
    setActiveLink();
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  setActiveLink();

  /* ---- Navbar: mobile hamburger ---- */
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  function closeMenu() {
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
  }

  hamburger.addEventListener('click', function () {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    mobileMenu.setAttribute('aria-hidden', String(!isOpen));
  });

  /* Close mobile menu when a link is clicked */
  document.querySelectorAll('.mobile-link, .mobile-cta').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  /* Close on outside click */
  document.addEventListener('click', function (e) {
    if (!navbar.contains(e.target)) closeMenu();
  });

  /* ---- Smooth scroll for all anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const navHeight = navbar.offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 8;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ---- Contact form validation & submission ---- */
  const form       = document.getElementById('contactForm');
  const submitBtn  = document.getElementById('submitBtn');
  const formStatus = document.getElementById('formStatus');

  if (!form) return;

  function showError(fieldId, msg) {
    const input = document.getElementById(fieldId);
    const errEl = document.getElementById(fieldId + 'Error');
    if (input)  input.classList.add('error');
    if (errEl)  { errEl.textContent = msg; errEl.classList.add('visible'); }
  }

  function clearErrors() {
    form.querySelectorAll('input, textarea').forEach(function (el) {
      el.classList.remove('error');
    });
    form.querySelectorAll('.form-error').forEach(function (el) {
      el.textContent = '';
      el.classList.remove('visible');
    });
    formStatus.className = 'form-status';
    formStatus.textContent = '';
  }

  function validateForm(data) {
    let valid = true;

    if (!data.name.trim()) {
      showError('name', 'Please enter your name.');
      valid = false;
    }

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
      showError('email', 'Please enter your email address.');
      valid = false;
    } else if (!emailRe.test(data.email.trim())) {
      showError('email', 'Please enter a valid email address.');
      valid = false;
    }

    if (!data.phone.trim()) {
      showError('phone', 'Please enter your phone number.');
      valid = false;
    }

    if (!data.message.trim()) {
      showError('message', 'Please tell us about your project.');
      valid = false;
    }

    return valid;
  }

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    clearErrors();

    const data = {
      name:    document.getElementById('name').value,
      email:   document.getElementById('email').value,
      phone:   document.getElementById('phone').value,
      message: document.getElementById('message').value,
    };

    if (!validateForm(data)) return;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    try {
      const formData = new FormData();
      formData.append('name',    data.name);
      formData.append('email',   data.email);
      formData.append('phone',   data.phone);
      formData.append('message', data.message);

      await fetch(form.action, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });

      formStatus.className = 'form-status success';
      formStatus.textContent = '✓ Thank you! Your message has been sent. We\'ll get back to you within 24 hours.';
      form.reset();
    } catch {
      formStatus.className = 'form-status error';
      formStatus.textContent = 'Oops! Something went wrong. Please try again or email us directly at hello@digiboomi.com';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }
  });

})();
