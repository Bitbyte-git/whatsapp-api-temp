import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar" role="banner">
      <div className="container navbar__inner">
        {/* Logo */}
        <a href="#" className="navbar__logo" aria-label="Bit Byte Technologies Home">
          <div className="logo-mark" aria-hidden="true">
            <img src="assets/Bb-Logo.png" alt="Bit Byte Technologies Logo" className="logo-img" />
          </div>
          <div className="logo-text">
            <span className="logo-name">Bit Byte Technologies</span>
            <span className="logo-tagline">COMMUNICATE • AUTOMATE • GROW</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="navbar__nav" role="navigation" aria-label="Main navigation">
          <a href="#" className="nav-link nav-link--active" aria-current="page">
            Home
          </a>
          <a href="#features" className="nav-link">
            Features
          </a>
          <a href="#solutions" className="nav-link">
            Solutions
          </a>
          <a href="#pricing" className="nav-link">
            Pricing
          </a>

          {/* Resources Dropdown */}
          <div
            className={`nav-dropdown ${resourcesOpen ? 'open' : ''}`}
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button
              className="nav-link nav-link--dropdown"
              onClick={() => setResourcesOpen((prev) => !prev)}
              aria-haspopup="true"
              aria-expanded={resourcesOpen}
            >
              Resources
              <svg className="chevron" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="dropdown-menu" role="menu">
              <a href="#" className="dropdown-item" role="menuitem">Blog</a>
              <a href="#" className="dropdown-item" role="menuitem">Guides</a>
              <a href="#" className="dropdown-item" role="menuitem">Help Center</a>
              <a href="#" className="dropdown-item" role="menuitem">API Documentation</a>
              <a href="#" className="dropdown-item" role="menuitem">Status</a>
            </div>
          </div>

          {/* Company Dropdown */}
          <div
            className={`nav-dropdown ${companyOpen ? 'open' : ''}`}
            onMouseEnter={() => setCompanyOpen(true)}
            onMouseLeave={() => setCompanyOpen(false)}
          >
            <button
              className="nav-link nav-link--dropdown"
              onClick={() => setCompanyOpen((prev) => !prev)}
              aria-haspopup="true"
              aria-expanded={companyOpen}
            >
              Company
              <svg className="chevron" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="dropdown-menu" role="menu">
              <a href="#" className="dropdown-item" role="menuitem">About Us</a>
              <a href="#" className="dropdown-item" role="menuitem">Careers</a>
              <a href="#" className="dropdown-item" role="menuitem">Partnerships</a>
              <a href="#" className="dropdown-item" role="menuitem">Contact Us</a>
              <a href="#" className="dropdown-item" role="menuitem">Press</a>
            </div>
          </div>
        </nav>

        {/* Right Controls */}
        <div className="navbar__actions">
          <a href="#notify" className="btn btn--primary" id="navbar-cta">
            Get Notified
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <button
            className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`} role="dialog" aria-label="Mobile navigation">
        <nav className="mobile-nav">
          <a href="#" className="mobile-nav__link mobile-nav__link--active" onClick={closeMobileMenu}>
            Home
          </a>
          <a href="#features" className="mobile-nav__link" onClick={closeMobileMenu}>
            Features
          </a>
          <a href="#solutions" className="mobile-nav__link" onClick={closeMobileMenu}>
            Solutions
          </a>
          <a href="#pricing" className="mobile-nav__link" onClick={closeMobileMenu}>
            Pricing
          </a>
          <a href="#" className="mobile-nav__link" onClick={closeMobileMenu}>
            Resources
          </a>
          <a href="#" className="mobile-nav__link" onClick={closeMobileMenu}>
            Company
          </a>
          <a href="#notify" className="btn btn--primary mobile-cta" onClick={closeMobileMenu}>
            Get Notified →
          </a>
        </nav>
      </div>
    </header>
  );
}
