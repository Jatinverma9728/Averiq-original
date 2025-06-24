import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { SmoothCursor } from "./components/ui/smooth-cursor";

function App() {
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    // Dynamically load SmoothScroll script from components folder
    const script = document.createElement('script');
    script.src = '/src/components/SmoothScroll.js';
    script.async = true;
    document.body.appendChild(script);

    // Show SmoothCursor only on desktop (lg: 1024px+)
    const handleResize = () => {
      setShowCursor(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      document.body.removeChild(script);
      // Optionally destroy SmoothScroll if needed
      if (window.SmoothScroll && typeof window.SmoothScroll.destroy === 'function') {
        window.SmoothScroll.destroy();
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Process />
      {showCursor && <SmoothCursor />}
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;