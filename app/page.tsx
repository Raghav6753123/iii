'use client';

import { useState } from 'react';
import LoadingScreen from './components/loading';
import StarField from './components/starField';
import { Navigation } from './components/navigation';
import HeroSection from './components/hero';
import AboutSection from './components/about';
import TimelineSection from './components/timeline';
import DetailsSection from './components/details';
import CTASection from './components/cta';

export default function IIIPage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      <main className={`bg-background overflow-x-hidden pt-10 min-h-screen transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>

        <div className="relative z-10">
          <Navigation />
          <HeroSection />

          <div
            className="h-px w-full"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.2), transparent)' }}
          />

          <AboutSection />
       <StarField />
          <div
            className="h-px w-full"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.12), transparent)' }}
          />

          <DetailsSection />

          <div
            className="h-px w-full"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.12), transparent)' }}
          />

          <TimelineSection />

          <div
            className="h-px w-full"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.2), transparent)' }}
          />

          <CTASection />

          <footer className="relative z-10 py-10 px-6 text-center border-t border-white/5">
            <p className="text-white/25 text-xs tracking-widest">
              &copy; 2026 Gravity Technical Society · IIIT Allahabad · III 5.0
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
