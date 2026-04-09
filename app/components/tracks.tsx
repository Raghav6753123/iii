'use client';

import { useEffect, useRef, useState } from 'react';
import { Brain, Globe, Link, Layers, Cpu, Rocket } from 'lucide-react';

const tracks = [
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    desc: 'ML models, LLMs, computer vision, NLP, and intelligent systems',
    color: '#c4b5fd',
    bg: 'rgba(196,181,253,0.08)',
    border: 'rgba(196,181,253,0.2)',
  },
  {
    icon: Globe,
    title: 'Web Development',
    desc: 'Full-stack apps, progressive web apps, real-time systems',
    color: '#34d399',
    bg: 'rgba(52,211,153,0.06)',
    border: 'rgba(52,211,153,0.2)',
  },
  {
    icon: Link,
    title: 'Blockchain',
    desc: 'Smart contracts, DeFi, NFTs, Web3 apps, decentralized protocols',
    color: '#fb923c',
    bg: 'rgba(251,146,60,0.06)',
    border: 'rgba(251,146,60,0.2)',
  },
  {
    icon: Layers,
    title: 'Open Innovation',
    desc: 'Any tech, any domain — AR/VR, IoT, DevTools, productivity',
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.06)',
    border: 'rgba(167,139,250,0.2)',
  },
  {
    icon: Cpu,
    title: 'Systems & DevOps',
    desc: 'OS tools, cloud infra, automation, developer experience',
    color: '#a78bfa',
    bg: 'rgba(168,85,247,0.08)',
    border: 'rgba(168,85,247,0.24)',
  },
  {
    icon: Rocket,
    title: 'Social Impact',
    desc: 'Tech for good — education, health, sustainability, accessibility',
    color: '#f472b6',
    bg: 'rgba(244,114,182,0.06)',
    border: 'rgba(244,114,182,0.2)',
  },
];

export default function TracksSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="tracks" ref={ref} className="relative z-10 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="text-purple-300 text-xs tracking-[0.3em] uppercase font-medium">Domains</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Choose Your{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #c4b5fd, #a78bfa)' }}
            >
              Track
            </span>
          </h2>
          <p className="mt-3 text-white/50 text-base max-w-xl mx-auto">
            Build across any domain — from AI and Blockchain to Social Impact and beyond.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tracks.map((track, i) => {
            const Icon = track.icon;
            return (
              <div
                key={track.title}
                className="p-6 rounded-2xl transition-all duration-500 hover:scale-[1.03] cursor-default group"
                style={{
                  transitionDelay: `${i * 80}ms`,
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(24px)',
                  background: track.bg,
                  border: `1px solid ${track.border}`,
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-110"
                  style={{ background: `${track.bg}`, border: `1px solid ${track.border}` }}
                >
                  <Icon className="w-5 h-5" style={{ color: track.color }} />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{track.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{track.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
