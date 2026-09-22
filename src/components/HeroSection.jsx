import React, { useState, useEffect } from 'react';

export default function HeroSection() {
  // Target launch date (30 days from launch setup)
  const [targetDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 28);
    d.setHours(14, 15, 1, 0);
    return d;
  });

  const [timeLeft, setTimeLeft] = useState({ days: '28', hours: '14', minutes: '15', seconds: '01' });
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'success' | 'error'

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference <= 0) {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0'),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      setStatus('error');
      return;
    }

    setStatus('success');
    setEmail('');
  };

  return (
    <section className="hero" id="hero">
      {/* Background layer */}
      <div className="hero__bg" aria-hidden="true">
        <img src="assets/Hero-Bg.png" alt="WhatsApp Business Platform Blueprint Background" className="hero__bg-img" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          {/* Eyebrow badge */}
          <div className="eyebrow">
            <span className="eyebrow__line" aria-hidden="true"></span>
            <span className="eyebrow__text">LAUNCHING VERY SOON</span>
          </div>

          {/* Headline */}
          <h1 className="hero__headline">
            <span className="headline-part">The Next Chapter in</span>
            <span className="headline-accent">WhatsApp Automation</span>
          </h1>

          {/* Subtitle */}
          <p className="hero__description">
            Empowering businesses with smarter conversations, seamless automation, and limitless growth on WhatsApp Business API.
          </p>

          {/* Countdown timer */}
          <div className="countdown" id="countdown" aria-label="Time remaining until launch">
            <div className="countdown__block">
              <span className="countdown__number">{timeLeft.days}</span>
              <span className="countdown__unit">DAYS</span>
            </div>
            <span className="countdown__sep" aria-hidden="true">:</span>
            <div className="countdown__block">
              <span className="countdown__number">{timeLeft.hours}</span>
              <span className="countdown__unit">HOURS</span>
            </div>
            <span className="countdown__sep" aria-hidden="true">:</span>
            <div className="countdown__block">
              <span className="countdown__number">{timeLeft.minutes}</span>
              <span className="countdown__unit">MINUTES</span>
            </div>
            <span className="countdown__sep" aria-hidden="true">:</span>
            <div className="countdown__block">
              <span className="countdown__number">{timeLeft.seconds}</span>
              <span className="countdown__unit">SECONDS</span>
            </div>
          </div>

          {/* Form block */}
          <div className="notify-form" id="notify">
            <form className="notify-form__control" onSubmit={handleSubmit} noValidate>
              <label htmlFor="email-input" className="sr-only">
                Your email address
              </label>
              <div className="notify-form__input-wrap">
                <svg className="notify-form__icon" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <rect x="1.5" y="4" width="15" height="10.5" rx="2" stroke="#66736D" strokeWidth="1.3" />
                  <path d="M1.5 6.5L9 11L16.5 6.5" stroke="#66736D" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
                <input
                  type="email"
                  id="email-input"
                  className="notify-form__input"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  autoComplete="email"
                  required
                />
              </div>
              <button type="submit" className="btn btn--primary notify-form__btn" id="notify-btn">
                Notify Me
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>

            <p className="notify-form__hint" id="email-hint">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <rect x="0.5" y="0.5" width="12" height="12" rx="6" stroke="#66736D" strokeWidth="1" />
                <path d="M4 6.5L5.8 8.5L9 4.5" stroke="#66736D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              No spam. Just important updates.
            </p>

            {status === 'error' && (
              <p className="notify-form__error" id="email-error" role="alert">
                Please enter a valid email address.
              </p>
            )}

            {status === 'success' && (
              <p className="notify-form__success" id="email-success" role="status">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle cx="8" cy="8" r="7" fill="#007A4D" />
                  <path d="M4.5 8L7 10.5L11.5 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                You're on the list! We'll notify you at launch.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
