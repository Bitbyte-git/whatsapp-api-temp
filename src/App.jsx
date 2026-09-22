import React from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import TrustStrip from './components/TrustStrip.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <TrustStrip />
      </main>
      <Footer />
    </div>
  );
}
