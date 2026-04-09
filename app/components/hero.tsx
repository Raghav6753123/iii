'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useMemo } from 'react';
import Image from 'next/image';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import gravityLogo from '../gravity-logo.png';

const Galaxy = dynamic(() => import('./Galaxy'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 z-0" />,
});

// Mobile detection hook
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

export default function HeroSection() {
  const isMobile = useIsMobile();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const mobileStars = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        top: `${(i * 37) % 100}%`,
        left: `${(i * 61 + 13) % 100}%`,
        animationDelay: `${(i % 6) * 0.45}s`,
        animationDuration: `${2 + (i % 4) * 0.5}s`,
        opacity: 0.35 + (i % 5) * 0.08,
      })),
    []
  );
  const stats = [
    { icon: Calendar, label: 'Date', value: 'Apr 11–12, 2026' },
    { icon: Clock, label: 'Duration', value: '24 Hours' },
    { icon: MapPin, label: 'Venue', value: 'IIITA (Hybrid)' },
    { icon: Users, label: 'Team Size', value: '1 – 4 Members' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Galaxy background covering the whole hero - disabled on mobile for performance */}
      {!isMobile && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Galaxy />
        </div>
      )}

      {/* Mobile-optimized animated background */}
      {isMobile && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-purple-900/30 via-purple-800/10 to-black animate-gradient" />
          <div
            className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '0s' }}
          />
          <div
            className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '2s' }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500/15 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '4s' }}
          />
          {/* Lightweight particle stars */}
          {mobileStars.map((star, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={star}
            />
          ))}
        </div>
      )}

      <div
        className={`relative z-10 flex flex-col items-center text-center gap-6 transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-400" />
          <span className="text-purple-300 text-xs tracking-[0.3em] uppercase font-medium">
            Aproksha&apos;26 × Gravity
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-400" />
        </div>

        <div className="w-full flex flex-col items-center gap-0">
          <div className="relative w-[340px] sm:w-[440px] md:w-[560px] lg:w-[680px] aspect-[10/3] opacity-95 -mb-2">
            <Image
              src={gravityLogo}
              alt="Gravity"
              fill
              className="object-contain"
              priority
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>

          <h1
            className="-mt-14 text-7xl md:text-[10rem] font-medium leading-[0.9] tracking-wide"
            style={{
              fontFamily: '"Playfair Display", "Bodoni MT", "Didot", "Times New Roman", serif',
              color: '#b49bff', // Matches the solid light purple from the image
              filter: 'drop-shadow(0 4px 20px rgba(168,85,247,0.4))',
            }}
          >
            III 5.0?
          </h1>

          <p
            className="mt-3 text-purple-300/90 text-sm sm:text-base md:text-2xl tracking-[0.35em] uppercase"
            style={{
              fontFamily: '"Playfair Display", "Bodoni MT", "Didot", "Times New Roman", serif',
              textShadow: '0 0 20px rgba(168,85,247,0.28)',
            }}
          >
            Innovate · Iterate · Interrupt
          </p>

        </div>

        <p
          className="text-white/50 text-base md:text-lg max-w-3xl leading-relaxed mt-1"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          The flagship hackathon of Aproksha&apos;26 — build something insane in 24 hours.
          Think fast. Build faster.
        </p>

        <div className="flex flex-wrap gap-4 mt-4 justify-center">
          <a
            href="https://innovateiterateinterrupt-iii-5.devfolio.co/overview"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full font-semibold text-white text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
              boxShadow: '0 0 30px rgba(168,85,247,0.35)',
            }}
          >
            Register Now
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105"
            style={{
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'rgba(255,255,255,0.8)',
              background: 'rgba(255,255,255,0.04)',
            }}
          >
            Learn More
          </a>
        </div>
      </div>

      <div
        className={`relative z-10 mt-16 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-1000 delay-300 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {stats.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-2 p-5 rounded-2xl transition-all duration-200 hover:scale-105"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <Icon className="w-5 h-5 text-purple-300" />
            <span className="text-white/40 text-xs tracking-widest uppercase">{label}</span>
            <span className="text-white font-semibold text-sm text-center">{value}</span>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 animate-bounce">
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/40 rounded-full" style={{ animation: 'scrollDot 1.5s ease-in-out infinite' }} />
        </div>
      </div>

      <style jsx>{`
        @keyframes slowSpin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes scrollDot {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(8px); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
