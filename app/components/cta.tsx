'use client';

import { useEffect, useRef, useState } from 'react';
import { Mail, AtSign, ExternalLink, Rocket } from 'lucide-react';

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative z-10 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div>
            <div
              className="p-6 md:p-8 rounded-3xl relative overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, rgba(30,41,59,0.2) 0%, rgba(2,6,23,0.56) 100%)',
                border: '1px solid rgba(167,139,250,0.24)',
                boxShadow: '0 0 44px rgba(76,29,149,0.16)',
              }}
            >
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                <div
                  className="absolute -top-20 right-14 w-56 h-56 rounded-full opacity-20"
                  style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.35), transparent 70%)' }}
                />
                <div
                  className="absolute -bottom-20 -left-12 w-52 h-52 rounded-full opacity-20"
                  style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.3), transparent 70%)' }}
                />
              </div>

              <div className="relative z-10 grid md:grid-cols-[180px_1fr] gap-6 md:gap-8 items-center">
                <div className="flex justify-center md:justify-start">
                  <div className="relative w-36 h-36 md:w-40 md:h-40 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border border-purple-300/35 animate-spin" style={{ animationDuration: '16s' }} />
                    <div className="absolute inset-3 rounded-full border border-purple-300/30 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '12s' }} />
                    <div className="absolute inset-6 rounded-full border border-purple-300/25" />
                    <div
                      className="relative z-10 w-16 h-16 rounded-xl flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, rgba(124,58,237,0.35), rgba(168,85,247,0.2))',
                        border: '1px solid rgba(196,181,253,0.35)',
                      }}
                    >
                      <Rocket className="w-8 h-8 text-purple-100" />
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-purple-300 text-xs md:text-sm tracking-[0.2em] uppercase mb-2 font-semibold">Register Here</p>
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: '"Playfair Display", "Times New Roman", serif' }}>
                    Join III 5.0
                  </h2>
                  <p className="mt-3 text-white/60 text-base md:text-lg leading-relaxed max-w-2xl">
                    Whether you are a beginner or a seasoned builder, this is your stage to create,
                    collaborate, and compete in 24 intense hours of innovation.
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-3 md:gap-4">
                    <a
                      href="https://unstop.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-white text-lg md:text-xl transition-all duration-200 hover:scale-105"
                      style={{
                        background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                        boxShadow: '0 0 28px rgba(168,85,247,0.3)',
                      }}
                    >
                      Register
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    <a
                      href="mailto:team@aproksha.iiita.ac.in"
                      className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      team@aproksha.iiita.ac.in
                    </a>
                    <a
                      href="https://instagram.com/gravityiiita"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors"
                    >
                      <AtSign className="w-4 h-4" />
                      @gravityiiita
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
