import React from 'react';

export default function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Trusted by visionary businesses">
      <div className="container trust-strip__inner">
        <div className="trust-strip__label">
          <span>TRUSTED BY VISIONARY BUSINESSES</span>
        </div>

        <div className="trust-strip__divider" aria-hidden="true"></div>

        <div className="trust-strip__logos" role="list">
          {/* Google */}
          <div className="trust-logo" role="listitem" aria-label="Google">
            <svg height="20" viewBox="0 0 75 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <text y="20" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700" fill="#B5BDB9" letterSpacing="-0.5">
                Google
              </text>
            </svg>
          </div>

          {/* Meta */}
          <div className="trust-logo" role="listitem" aria-label="Meta">
            <svg height="20" viewBox="0 0 52 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <text y="20" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700" fill="#B5BDB9" letterSpacing="-0.5">
                Meta
              </text>
            </svg>
          </div>

          {/* Microsoft */}
          <div className="trust-logo" role="listitem" aria-label="Microsoft">
            <svg height="20" viewBox="0 0 115 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <text y="20" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700" fill="#B5BDB9" letterSpacing="-0.5">
                Microsoft
              </text>
            </svg>
          </div>

          {/* AWS */}
          <div className="trust-logo" role="listitem" aria-label="Amazon Web Services">
            <svg height="20" viewBox="0 0 48 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <text y="20" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700" fill="#B5BDB9" letterSpacing="-0.5">
                AWS
              </text>
            </svg>
          </div>

          {/* Stripe */}
          <div className="trust-logo" role="listitem" aria-label="Stripe">
            <svg height="20" viewBox="0 0 60 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <text y="20" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700" fill="#B5BDB9" letterSpacing="-0.5">
                Stripe
              </text>
            </svg>
          </div>
        </div>

        <div className="trust-strip__divider" aria-hidden="true"></div>

        <div className="trust-strip__right">
          <span>SAME PLATFORM. BIGGER POSSIBILITIES.</span>
        </div>
      </div>
    </section>
  );
}
