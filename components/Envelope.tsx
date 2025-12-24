import React from 'react';

interface EnvelopeProps {
  onClick: () => void;
  sender: string;
  recipient: string;
}

const Envelope: React.FC<EnvelopeProps> = ({ onClick, sender, recipient }) => {
  return (
    <div 
      onClick={onClick}
      className="cursor-pointer group relative flex flex-col items-center transform transition-all duration-500 hover:scale-105"
    >
      {/* Envelope Container */}
      <div className="relative bg-[#f5e6c8] w-72 h-48 md:w-96 md:h-64 rounded-lg shadow-[0_0_30px_rgba(251,191,36,0.3)] flex flex-col items-center border-4 border-slate-900 overflow-visible">
        
        {/* Envelope Flap Lines (Visual Triangle) */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
             <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[144px] md:border-l-[192px] border-r-[144px] md:border-r-[192px] border-t-[100px] md:border-t-[130px] border-l-transparent border-r-transparent border-t-[#e6d5b8] filter drop-shadow-md"></div>
        </div>

        {/* Wax Seal - Positioned on the flap tip */}
        <div className="relative z-20 mt-[80px] md:mt-[110px]">
             <div className="bg-red-800 w-16 h-16 rounded-full shadow-lg border-4 border-red-900 flex items-center justify-center group-hover:bg-red-700 transition-colors">
                <span className="font-magical text-2xl text-amber-200 font-bold">M</span>
            </div>
        </div>

        {/* Text Area - Pushed to bottom to avoid seal overlap */}
        <div className="mt-auto mb-6 z-10 text-center space-y-1 relative w-full px-4">
            <p className="font-magical text-slate-800 text-[10px] md:text-xs tracking-widest uppercase opacity-70 mb-1">Entrega por Lechuza</p>
            <div className="font-elegant text-slate-900 text-xl md:text-2xl font-bold">
                Para <span className="text-red-900">{recipient}</span>
            </div>
            <div className="font-elegant text-slate-600 text-sm italic">
                De su {sender}
            </div>
        </div>
        
        {/* Old Paper texture overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] mix-blend-multiply"></div>
      </div>

      <div className="mt-8 text-amber-200/80 font-magical text-sm animate-bounce tracking-widest">
        Toca para abrir
      </div>
    </div>
  );
};

export default Envelope;