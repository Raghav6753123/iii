'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'py-3 backdrop-blur-md border-b border-white/5' : 'py-5'
      }`}
      style={{ background: scrolled ? 'rgba(5,5,16,0.85)' : 'transparent' }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-28 h-10 relative overflow-visible">
            <Image
              src="/gravity-logo.png"
              alt="Gravity"
              width={180}
              height={56}
              className="w-full h-full object-contain scale-[2] origin-left"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          </div>
          <span className="text-white/20 text-xs">|</span>
          <span className="text-blue-400 font-bold text-sm tracking-wider">III 5.0</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'About', id: 'about' },
            { label: 'Details', id: 'details' },
            { label: 'Prizes', id: 'prizes' },
            { label: 'Timeline', id: 'timeline' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-white/60 hover:text-white text-sm transition-colors duration-200 hover:text-blue-300"
            >
              {item.label}
            </button>
          ))}
        </div>

        <a
          href="https://innovateiterateinterrupt-iii-5.devfolio.co/overview"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #3b82f6, #38bdf8)',
            boxShadow: '0 0 20px rgba(56,189,248,0.3)',
          }}
        >
          Register
        </a>
      </div>
    </nav>
  );
}
