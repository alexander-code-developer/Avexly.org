import React, { useEffect, useState } from 'react';

const SplashScreen = ({ onFinished }) => {
  const [text, setText] = useState('');
  const [fadeOut, setFadeOut] = useState(false);
  
  const fullText = "Avexly — Alexander Rivera | Portfolio 2026";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => setFadeOut(true), 1200);
        setTimeout(() => onFinished(), 2000);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [onFinished]);

  return (
    <div className="fixed inset-0 bg-[#020617] text-slate-50 flex flex-col justify-center items-center z-[9999] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] opacity-100 scale-100"
      style={{
        opacity: fadeOut ? 0 : 1,
        filter: fadeOut ? 'blur(10px)' : 'none',
        transform: fadeOut ? 'scale(1.05)' : 'scale(1)',
      }}
    >
      <style>
        {`
          @keyframes blink {
            50% { border-color: transparent }
          }
          .splash-cursor {
            animation: blink 0.8s step-end infinite;
          }
        `}
      </style>
      
      <div className="flex items-center gap-3 md:gap-4">
        <h1 className="font-['Inter',_'Segoe_UI',_sans-serif] text-base sm:text-lg md:text-2xl lg:text-3xl font-light tracking-[0.1em] border-r-2 border-blue-500 pr-2 md:pr-3 splash-cursor m-0">
          {text}
        </h1>
      </div>
    </div>
  );
};

export default SplashScreen;