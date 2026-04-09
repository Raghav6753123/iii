'use client';

import { useEffect, useRef, useState } from 'react';
import { ClipboardList, Rocket, Code, Coffee, Presentation, Trophy } from 'lucide-react';

const timeline = [
  { time: 'Apr 11 · 6:00 PM', label: 'Registration & Check-in', desc: 'Arrive at IIITA, complete on-site registration', icon: ClipboardList },
  { time: 'Apr 11 · 7:00 PM', label: 'Hackathon Kickoff', desc: 'Opening ceremony, problem statements revealed, teams set', icon: Rocket },
  { time: 'Apr 11 · 9:00 PM', label: 'Hacking Begins', desc: '24 hours of non-stop building, mentors available', icon: Code },
  { time: 'Apr 12 · 3:00 AM', label: 'Midnight Snacks', desc: 'Fuel up — snacks and refreshments provided', icon: Coffee },
  { time: 'Apr 12 · 5:00 PM', label: 'Submission Deadline', desc: 'Final code freeze — submit your project', icon: ClipboardList },
  { time: 'Apr 12 · 6:00 PM', label: 'Presentations & Judging', desc: 'Demo your hack to the judges panel', icon: Presentation },
  { time: 'Apr 12 · 7:00 PM', label: 'Closing Ceremony & Results', desc: 'Winners announced, prizes awarded', icon: Trophy },
];

export default function TimelineSection() {
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
    <section id="timeline" ref={ref} className="relative z-10 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="text-purple-300 text-xs tracking-[0.3em] uppercase font-medium">Schedule</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Event{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #ddd6fe, #a78bfa)' }}
            >
              Timeline
            </span>
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-gradient-to-b from-purple-300/60 via-purple-500/35 to-transparent" />
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-300/60 via-purple-500/35 to-transparent" />

          <div className="space-y-7 md:space-y-10">
            {timeline.map((item, i) => {
              const Icon = item.icon;
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className="relative"
                  style={{
                    transitionDelay: `${i * 100}ms`,
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(20px)',
                  }}
                >
                  <div className="md:hidden flex gap-4 transition-all duration-500">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center z-10 flex-shrink-0"
                      style={{
                        background: 'rgba(168,85,247,0.14)',
                        border: '1px solid rgba(168,85,247,0.34)',
                        boxShadow: '0 0 18px rgba(168,85,247,0.25)',
                      }}
                    >
                      <Icon className="w-5 h-5 text-purple-300" />
                    </div>
                    <div
                      className="flex-1 p-5 rounded-2xl transition-all duration-300 hover:scale-[1.01]"
                      style={{
                        background: 'linear-gradient(135deg, rgba(168,85,247,0.12), rgba(139,92,246,0.05))',
                        border: '1px solid rgba(167,139,250,0.24)',
                        boxShadow: '0 10px 30px rgba(88,28,135,0.15)',
                      }}
                    >
                      <p className="text-purple-300/90 text-xs tracking-widest font-medium uppercase mb-1">{item.time}</p>
                      <p className="text-white font-semibold text-sm">{item.label}</p>
                      <p className="text-white/60 text-xs mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8 transition-all duration-500">
                    <div className={`${isLeft ? 'block' : 'invisible'} flex justify-end`}>
                      <div
                        className="w-full max-w-md p-5 rounded-2xl transition-all duration-300 hover:scale-[1.01]"
                        style={{
                          background: 'linear-gradient(135deg, rgba(168,85,247,0.12), rgba(139,92,246,0.05))',
                          border: '1px solid rgba(167,139,250,0.24)',
                          boxShadow: '0 10px 30px rgba(88,28,135,0.15)',
                        }}
                      >
                        <p className="text-purple-300/90 text-xs tracking-widest font-medium uppercase mb-1">{item.time}</p>
                        <p className="text-white font-semibold text-sm">{item.label}</p>
                        <p className="text-white/60 text-xs mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>

                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center z-10"
                      style={{
                        background: 'rgba(168,85,247,0.14)',
                        border: '1px solid rgba(168,85,247,0.34)',
                        boxShadow: '0 0 18px rgba(168,85,247,0.25)',
                      }}
                    >
                      <Icon className="w-5 h-5 text-purple-300" />
                    </div>

                    <div className={`${!isLeft ? 'block' : 'invisible'} flex justify-start`}>
                      <div
                        className="w-full max-w-md p-5 rounded-2xl transition-all duration-300 hover:scale-[1.01]"
                        style={{
                          background: 'linear-gradient(135deg, rgba(168,85,247,0.12), rgba(139,92,246,0.05))',
                          border: '1px solid rgba(167,139,250,0.24)',
                          boxShadow: '0 10px 30px rgba(88,28,135,0.15)',
                        }}
                      >
                        <p className="text-purple-300/90 text-xs tracking-widest font-medium uppercase mb-1">{item.time}</p>
                        <p className="text-white font-semibold text-sm">{item.label}</p>
                        <p className="text-white/60 text-xs mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
