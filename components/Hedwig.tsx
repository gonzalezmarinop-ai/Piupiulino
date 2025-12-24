import React, { useEffect, useState } from 'react';

interface HedwigProps {
  onDeliveryComplete: () => void;
}

const Hedwig: React.FC<HedwigProps> = ({ onDeliveryComplete }) => {
  const [phase, setPhase] = useState<'flying-in' | 'dropping' | 'flying-away'>('flying-in');

  useEffect(() => {
    // Sequence timing
    const flyInTime = 3000;
    const dropTime = 500;
    
    const dropTimer = setTimeout(() => {
        setPhase('dropping');
        onDeliveryComplete();
        
        setTimeout(() => {
            setPhase('flying-away');
        }, dropTime);

    }, flyInTime);

    return () => clearTimeout(dropTimer);
  }, [onDeliveryComplete]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <div className={`
        absolute transition-all duration-[3000ms] ease-out
        ${phase === 'flying-in' ? 'top-[-20%] right-[-20%] scale-50 opacity-0' : ''}
        ${phase === 'dropping' || phase === 'flying-away' ? 'top-[30%] right-[50%] translate-x-[50%] scale-100 opacity-100' : ''}
        ${phase === 'flying-in' && 'animate-fly-in'}
      `}>
         {/* Owl Visual Container */}
         <div className={`
            relative w-48 h-48
            ${phase === 'flying-away' ? 'animate-fly-away' : ''}
         `}>
            {/* SVG Snowy Owl */}
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
                <g className="animate-hover">
                   {/* Body */}
                   <path d="M60,100 Q50,70 80,60 Q120,50 140,100 Q150,140 100,160 Q60,150 60,100" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
                   {/* Wings (animated via CSS in style tag below) */}
                   <path className="wing-left" d="M60,90 Q20,50 10,100 Q40,130 65,110" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
                   <path className="wing-right" d="M140,90 Q180,50 190,100 Q160,130 135,110" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
                   {/* Head */}
                   <circle cx="100" cy="70" r="35" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
                   {/* Eyes */}
                   <circle cx="90" cy="65" r="5" fill="#fbbf24" />
                   <circle cx="110" cy="65" r="5" fill="#fbbf24" />
                   <circle cx="90" cy="65" r="2" fill="#000" />
                   <circle cx="110" cy="65" r="2" fill="#000" />
                   {/* Beak */}
                   <path d="M100,75 L95,85 L105,85 Z" fill="#1e293b" />
                   {/* Feet holding letter (visible only when not dropping) */}
                   {phase === 'flying-in' && (
                     <g transform="translate(90, 150)">
                        <path d="M0,0 L10,10 L20,0" stroke="#fcd34d" fill="none" strokeWidth="3" />
                        {/* The Letter being carried */}
                        <rect x="-20" y="10" width="60" height="40" fill="#f5e6c8" stroke="#78350f" rx="2" />
                        <circle cx="10" cy="30" r="5" fill="#991b1b" />
                     </g>
                   )}
                </g>
            </svg>
         </div>
      </div>
      
      <style>{`
        @keyframes hover {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        .animate-hover {
            animation: hover 2s ease-in-out infinite;
        }
        @keyframes flap {
            0%, 100% { transform: rotate(0deg); transform-origin: 60px 90px; }
            50% { transform: rotate(-20deg); transform-origin: 60px 90px; }
        }
        .wing-left {
            animation: flap 0.8s ease-in-out infinite;
        }
        @keyframes flap-right {
             0%, 100% { transform: rotate(0deg); transform-origin: 140px 90px; }
            50% { transform: rotate(20deg); transform-origin: 140px 90px; }
        }
        .wing-right {
             animation: flap-right 0.8s ease-in-out infinite;
        }
        @keyframes flyIn {
            0% { top: -20%; right: -20%; transform: scale(0.2); }
            100% { top: 30%; right: 50%; transform: translate(50%, 0) scale(1); }
        }
        .animate-fly-in {
            animation: flyIn 3s ease-out forwards;
        }
        @keyframes flyAway {
            0% { transform: translate(0, 0) scale(1) rotate(0); }
            100% { transform: translate(-200vw, -50vh) scale(0.5) rotate(-10deg); }
        }
        .animate-fly-away {
            animation: flyAway 2s ease-in forwards;
        }
      `}</style>
    </div>
  );
};

export default Hedwig;