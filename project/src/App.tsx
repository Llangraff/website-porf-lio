import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Timeline } from './components/Timeline';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { Cursor } from './components/Cursor';
import { LoadingScreen } from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      
      <div className="relative min-h-screen bg-white text-gray-900 overflow-hidden">
        <Cursor />
        <AnimatedBackground />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Timeline />
          <Testimonials />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;