import React, { useState } from 'react';

export default function Footer() {
  const [footerEmail, setFooterEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState('idle');

  const handleSubscribe = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!footerEmail || !emailRegex.test(footerEmail.trim())) {
      setSubscribeStatus('error');
      return;
    }

    setSubscribeStatus('success');
    setFooterEmail('');
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        {/* Brand Column */}
        <div className="footer__brand">
          <a href="#" className="footer__logo" aria-label="Infisq Innovations Home">
            <div className="footer__logo-mark" aria-hidden="true">
              <img src="assets/BitByte-Logo.png" alt="Infisq Innovations Logo" className="footer__logo-img" />
            </div>
            <div className="footer__logo-text">
              <span className="footer__logo-name">Infisq Innovations</span>
              <span className="footer__logo-tagline">COMMUNICATE • AUTOMATE • GROW</span>
            </div>
          </a>
          <p className="footer__desc">
            Empowering businesses with smarter conversations, seamless automation, and limitless growth.
          </p>
          <div className="footer__socials" aria-label="Social media links">
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M3.5 5.5V13M3.5 3.5C3.5 4.05228 3.05228 4.5 2.5 4.5C1.94772 4.5 1.5 4.05228 1.5 3.5C1.5 2.94772 1.94772 2.5 2.5 2.5C3.05228 2.5 3.5 2.94772 3.5 3.5Z"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
                <path
                  d="M7 13V8.5C7 7.11929 8.11929 6 9.5 6C10.8807 6 12 7.11929 12 8.5V13"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
                <path d="M1.5 5.5H3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <rect x="1.5" y="1.5" width="13" height="13" rx="4" stroke="currentColor" strokeWidth="1.3" />
                <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.3" />
                <circle cx="11.5" cy="4.5" r="0.8" fill="currentColor" />
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="YouTube">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <rect x="1" y="3" width="14" height="10" rx="3" stroke="currentColor" strokeWidth="1.3" />
                <path d="M6.5 6L10.5 8L6.5 10V6Z" fill="currentColor" />
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="X (Twitter)">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Product Column */}
        <div className="footer__col">
          <h3 className="footer__col-title">PRODUCT</h3>
          <ul className="footer__links" role="list">
            <li>
              <a href="#features" className="footer__link">
                Features
              </a>
            </li>
            <li>
              <a href="#solutions" className="footer__link">
                Solutions
              </a>
            </li>
            <li>
              <a href="#pricing" className="footer__link">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Integrations
              </a>
            </li>
            <li>
              <a href="#" className="footer__link footer__link--badge">
                Coming Soon <span className="badge">NEW</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Resources Column */}
        <div className="footer__col">
          <h3 className="footer__col-title">RESOURCES</h3>
          <ul className="footer__links" role="list">
            <li>
              <a href="#" className="footer__link">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Guides
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                API Documentation
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Status
              </a>
            </li>
          </ul>
        </div>

        {/* Company Column */}
        <div className="footer__col">
          <h3 className="footer__col-title">COMPANY</h3>
          <ul className="footer__links" role="list">
            <li>
              <a href="#" className="footer__link">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Partnerships
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Press
              </a>
            </li>
          </ul>
        </div>

        {/* Subscribe Column */}
        <div className="footer__subscribe">
          <h3 className="footer__col-title">SUBSCRIBE FOR UPDATES</h3>
          <p className="footer__subscribe-desc">Be the first to know when we launch.</p>
          <form className="footer__form" onSubmit={handleSubscribe} noValidate>
            <label htmlFor="footer-email" className="sr-only">
              Your email address
            </label>
            <div className="footer__input-wrap">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="#9BA8A3" strokeWidth="1.2" />
                <path d="M1.5 6L8 9.5L14.5 6" stroke="#9BA8A3" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <input
                type="email"
                id="footer-email"
                className="footer__input"
                placeholder="Your email address"
                value={footerEmail}
                onChange={(e) => {
                  setFooterEmail(e.target.value);
                  if (subscribeStatus === 'error') setSubscribeStatus('idle');
                }}
                autoComplete="email"
                required
              />
              <button type="submit" className="footer__submit-btn" aria-label="Subscribe">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </form>

          {subscribeStatus === 'success' ? (
            <p className="footer__hint" style={{ color: '#19A974' }}>
              ✓ Subscribed! Thank you.
            </p>
          ) : subscribeStatus === 'error' ? (
            <p className="footer__hint" style={{ color: '#ff6b6b' }}>
              Please enter a valid email address.
            </p>
          ) : (
            <p className="footer__hint">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <rect x="0.5" y="0.5" width="11" height="11" rx="5.5" stroke="#9BA8A3" strokeWidth="0.8" />
                <path d="M3.5 6L5.3 8L8.5 4" stroke="#9BA8A3" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              No spam. Just important updates.
            </p>
          )}
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">© 2026 BitByte Technologies. All rights reserved.</p>
          <nav className="footer__legal" aria-label="Legal">
            <a href="#" className="footer__legal-link">
              Privacy
            </a>
            <a href="#" className="footer__legal-link">
              Terms
            </a>
            <a href="#" className="footer__legal-link">
              Cookies
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
