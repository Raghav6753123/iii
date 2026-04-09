'use client';

import { useEffect, useRef, useState } from 'react';
import { Trophy, Medal, Award, Star } from 'lucide-react';

const prizes = [
  {
    rank: '1st Place',
    amount: '₹25,000',
    icon: Trophy,
    color: '#d8b4fe', // purple-300
    glow: 'rgba(216,180,254,0.3)',
    border: 'rgba(216,180,254,0.2)',
    bg: 'rgba(216,180,254,0.05)',
    size: 'large',
  },
  {
    rank: '2nd Place',
    amount: '₹15,000',
    icon: Medal,
    color: '#c084fc', // purple-400
    glow: 'rgba(192,132,252,0.2)',
    border: 'rgba(192,132,252,0.2)',
    bg: 'rgba(192,132,252,0.04)',
    size: 'medium',
  },
  {
    rank: '3rd Place',
    amount: '₹10,000',
    icon: Award,
    color: '#a855f7', // purple-500
    glow: 'rgba(168,85,247,0.2)',
    border: 'rgba(168,85,247,0.2)',
    bg: 'rgba(168,85,247,0.04)',
    size: 'medium',
  },
  {
    rank: 'Best 1st Year',
    amount: '₹10,000',
    icon: Star,
    color: '#9333ea', // purple-600
    glow: 'rgba(147,51,234,0.2)',
    border: 'rgba(147,51,234,0.2)',
    bg: 'rgba(147,51,234,0.04)',
    size: 'medium',
  },
];

export default function PrizesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="prizes" ref={ref} className="relative z-10 py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20 blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.15), transparent 70%)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <span className="text-purple-400 text-sm tracking-[0.4em] uppercase font-bold drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">Prize Pool</span>
          <h2 className="mt-4 text-5xl md:text-7xl font-black text-white tracking-tight">
            Win{' '}
            <span
              className="text-transparent bg-clip-text animate-pulse"
              style={{ backgroundImage: 'linear-gradient(135deg, #c084fc, #e9d5ff, #c084fc)', backgroundSize: '200% auto' }}
            >
              ₹60,000+
            </span>
          </h2>
          <p className="mt-6 text-white/50 text-lg md:text-xl font-light tracking-wide">Total prize pool up for grabs</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-end justify-center perspective-1000">
          {prizes.map((prize, i) => {
            const Icon = prize.icon;
            const isFirst = prize.size === 'large';
            return (
              <div
                key={prize.rank}
                className={`group relative flex flex-col items-center justify-center p-10 rounded-3xl text-center cursor-default backdrop-blur-md overflow-hidden ${
                  isFirst ? 'w-full md:w-80 h-96 z-10 shadow-2xl md:-translate-y-6' : 'w-full md:w-64 h-80'
                }`}
                style={{
                  transition: 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
                  transitionDelay: `${i * 150}ms`,
                  opacity: visible ? 1 : 0,
                  transform: visible
                    ? `translateY(${isFirst ? '-1.5rem' : '0'}) scale(1) translateZ(0)`
                    : 'translateY(4rem) scale(0.9) translateZ(-50px)',
                  background: `linear-gradient(135deg, rgba(255,255,255,0.03), ${prize.bg})`,
                  border: `1px solid rgba(255,255,255,0.05)`,
                  boxShadow: visible ? `0 20px 40px -10px ${prize.glow}, inset 0 1px 1px rgba(255,255,255,0.1)` : 'none',
                }}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: `radial-gradient(circle at center, ${prize.glow}, transparent 70%)` }}
                />
                
                <div
                  className={`relative flex items-center justify-center rounded-2xl mb-6 shadow-inner ${isFirst ? 'w-24 h-24' : 'w-20 h-20'}`}
                  style={{ 
                    background: `linear-gradient(135deg, rgba(255,255,255,0.1), ${prize.bg})`, 
                    border: `1px solid ${prize.border}`,
                    boxShadow: `0 8px 32px ${prize.glow}, inset 0 2px 2px rgba(255,255,255,0.2)`
                  }}
                >
                  <Icon 
                    className={`${isFirst ? 'w-12 h-12' : 'w-10 h-10'} transition-transform duration-500 group-hover:scale-110`} 
                    style={{ color: prize.color, filter: `drop-shadow(0 0 12px ${prize.color})` }} 
                  />
                </div>
                
                <div className="relative z-10 mt-auto">
                  <p className="text-white/70 text-xs md:text-sm tracking-[0.2em] uppercase font-bold mb-2 group-hover:text-white transition-colors duration-500">{prize.rank}</p>
                  <p
                    className={`font-black tracking-tight ${isFirst ? 'text-5xl md:text-6xl' : 'text-4xl md:text-5xl'}`}
                    style={{ 
                      color: prize.color, 
                      filter: `drop-shadow(0 4px 12px ${prize.glow})`,
                      WebkitTextStroke: '1px rgba(255,255,255,0.1)',
                    }}
                  >
                    {prize.amount}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className={`mt-16 text-center transition-all duration-1000 delay-[800ms] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-white/30 text-sm">
            All prizes will be awarded during the closing ceremony of Aproksha&apos;26
          </p>
        </div>
      </div>
    </section>
  );
}
