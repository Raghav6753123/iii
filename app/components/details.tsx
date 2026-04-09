'use client';

import { useEffect, useRef, useState } from 'react';
import { CircleCheck as CheckCircle2, Circle as XCircle } from 'lucide-react';

const dos = [
  'Teams of 1 to 4 members',
  'All college students eligible',
  'Both online and offline participation',
  'Open source tools and frameworks allowed',
  'Mentor sessions available throughout',
  'Projects must be built during the event',
];

const donts = [
  'No pre-built projects or templates',
  'No plagiarism or reusing past work',
  'No more than 4 members per team',
  'Code must be original — no copied repos',
];

const faqs = [
  { q: 'Who can participate?', a: 'Any college student from any institution. Open to all branches and years.' },
  { q: 'Can I participate solo?', a: 'Yes! Teams can range from 1 to 4 members.' },
  { q: 'Is it online or offline?', a: 'Hybrid — offline at IIITA campus or online. Your choice.' },
  { q: 'What should I bring?', a: 'Your laptop, charger, and ideas. Food and refreshments will be provided.' },
  { q: 'How will judging work?', a: 'Teams will demo their projects to a panel of expert judges at the end.' },
];

export default function DetailsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="details" ref={ref} className="relative z-10 py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        <div
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-10">
            <span className="text-purple-300 text-xs tracking-[0.3em] uppercase font-medium">Rules & Guidelines</span>
            <h2 className="mt-3 text-4xl font-bold text-white">What You Need to Know</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div
              className="p-6 rounded-2xl"
              style={{ background: 'rgba(167,139,250,0.08)', border: '1px solid rgba(167,139,250,0.24)' }}
            >
              <h3 className="text-violet-300 font-semibold text-sm tracking-widest uppercase mb-5">Guidelines</h3>
              <ul className="space-y-3">
                {dos.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-violet-300 mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="p-6 rounded-2xl"
              style={{ background: 'rgba(236,72,153,0.06)', border: '1px solid rgba(236,72,153,0.2)' }}
            >
              <h3 className="text-fuchsia-300 font-semibold text-sm tracking-widest uppercase mb-5">Not Allowed</h3>
              <ul className="space-y-3">
                {donts.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-fuchsia-300 mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-white">
              Frequently Asked{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #c4b5fd, #a78bfa)' }}
              >
                Questions
              </span>
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden transition-all duration-200"
                style={{
                  background: openFaq === i ? 'rgba(168,85,247,0.08)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${openFaq === i ? 'rgba(168,85,247,0.28)' : 'rgba(255,255,255,0.06)'}`,
                }}
              >
                <button
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-white text-sm font-medium">{faq.q}</span>
                  <span
                    className="text-purple-300 text-lg transition-transform duration-200 flex-shrink-0"
                    style={{ transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)' }}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
