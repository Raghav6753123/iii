'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(onComplete, 700);
          }, 300);
          return 100;
        }
        return prev + Math.random() * 4 + 1;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-700 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
      style={{ background: 'radial-gradient(ellipse at center, #0d1224 0%, #050510 70%)' }}
    >
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 2 + 0.5}px`,
              height: `${Math.random() * 2 + 0.5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.1,
              animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative flex flex-col items-center gap-8 z-10">
        <div
          className="relative"
          style={{ animation: 'spin 3s linear infinite' }}
        >
          <div className="w-28 h-28 rounded-full border border-blue-500/30 flex items-center justify-center"
            style={{ boxShadow: '0 0 40px rgba(99,179,255,0.2), 0 0 80px rgba(99,179,255,0.1)' }}>
            <div className="w-24 h-24 rounded-full border border-blue-400/20 flex items-center justify-center bg-gradient-to-br from-blue-900/30 to-slate-900/50">
              <Image
                src="/gravity-logo.png"
                alt="Gravity Logo"
                width={72}
                height={72}
                className="object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = '<span class="text-white font-bold text-2xl tracking-widest">G</span>';
                  }
                }}
              />
            </div>
          </div>
          <div className="absolute inset-0 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, transparent 70%, rgba(99,179,255,0.6) 100%)',
              animation: 'spin 1.5s linear infinite',
            }}
          />
        </div>

        <div className="text-center space-y-1">
          <p className="text-blue-300 text-xs tracking-[0.4em] uppercase font-light">Gravity Technical Society</p>
          <p className="text-white/60 text-xs tracking-widest">presents</p>
        </div>

        <div className="text-center">
          <h1 className="text-5xl font-black tracking-tight text-white" style={{ fontFamily: 'monospace' }}>
            III{' '}
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #60a5fa, #38bdf8, #818cf8)' }}>
              5.0
            </span>
          </h1>
          <p className="text-blue-300/70 text-sm tracking-widest mt-1">INNOVATE · ITERATE · INTERRUPT</p>
        </div>

        <div className="w-64 space-y-2">
          <div className="h-px w-full bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-100"
              style={{
                width: `${Math.min(progress, 100)}%`,
                background: 'linear-gradient(90deg, #3b82f6, #38bdf8)',
                boxShadow: '0 0 8px rgba(56,189,248,0.8)',
              }}
            />
          </div>
          <p className="text-center text-white/40 text-xs tracking-widest">{Math.min(Math.floor(progress), 100)}%</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.9; }
        }
      `}</style>
    </div>
  );
}
