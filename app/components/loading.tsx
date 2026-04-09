'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let completeTimer: ReturnType<typeof setTimeout> | undefined;

    const showTimer = setTimeout(() => {
      setFadeOut(true);
      completeTimer = setTimeout(onComplete, 450);
    }, 3000);

    return () => {
      clearTimeout(showTimer);
      if (completeTimer) clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-700 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
      style={{ background: 'radial-gradient(ellipse at center, #0d1224 0%, #050510 70%)' }}
    >
      <div className="relative z-10">
        <div className="loader-logo" aria-hidden="true">
          <Image
            src="/gravity-logo.ico"
            alt="Gravity Logo"
            width={124}
            height={124}
            className="object-contain"
            priority
          />
        </div>
      </div>

      <style jsx>{`
        .loader-logo {
          width: 124px;
          height: 124px;
          animation: spin-pause 2.4s ease-in-out infinite;
        }

        @keyframes spin-pause {
          from { transform: rotate(0deg); }
          60% { transform: rotate(360deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
