import React, { useState } from 'react';
import Sparkles from './components/Sparkles';
import Ticket from './components/Ticket';
import Envelope from './components/Envelope';
import Hedwig from './components/Hedwig';
import { EventDetails } from './types';
import { Wand2 } from 'lucide-react';

// Data extracted from the user's PDF
const ticketData: EventDetails = {
  eventName: "Curso de Cocina Mágica y Pociones de Harry Potter",
  organizer: "Umami Gijon",
  date: "Viernes, 30 Ene, 2026",
  time: "20:00",
  location: "Av. Rufo Garcia Rendueles 8 bajo, Gijón, Asturias",
  ticketNumber: "0269202543926921",
  recipientName: "Piupiulino"
};

const App: React.FC = () => {
  const [deliveryState, setDeliveryState] = useState<'pending' | 'delivered'>('pending');
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleDeliveryComplete = () => {
    setDeliveryState('delivered');
  };

  const handleOpen = () => {
    setIsAnimating(true);
    // Simple delay to allow for a transition effect before showing the ticket
    setTimeout(() => {
      setIsOpen(true);
      setIsAnimating(false);
    }, 800);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 overflow-hidden selection:bg-amber-900 selection:text-amber-100">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#1a1120] to-slate-950 z-[-1]"></div>
      <Sparkles />
      
      {/* Hedwig Animation Overlay */}
      <Hedwig onDeliveryComplete={handleDeliveryComplete} />

      {/* Content */}
      <main className={`transition-all duration-1000 ease-in-out z-10 w-full max-w-2xl flex flex-col items-center 
        ${isAnimating ? 'scale-110 opacity-0 blur-sm' : 'scale-100 opacity-100'}
        ${deliveryState === 'pending' ? 'opacity-0 translate-y-20' : 'opacity-100 translate-y-0'}
      `}>
        
        {!isOpen ? (
          <Envelope 
            onClick={handleOpen} 
            sender="Molang" 
            recipient="Piupiulino" 
          />
        ) : (
          <div className="animate-in fade-in zoom-in duration-1000 slide-in-from-bottom-10 w-full">
             {/* Header above ticket */}
            <div className="text-center mb-6">
                <Wand2 className="w-10 h-10 text-amber-400 mx-auto mb-2 animate-pulse" />
                <h1 className="font-magical text-3xl text-amber-100 tracking-[0.2em] text-shadow-glow">
                    Felis Navidas
                </h1>
            </div>
            
            <Ticket details={ticketData} />
            
            {/* Reset/Close Interaction (Optional) */}
            <button 
              onClick={() => setIsOpen(false)}
              className="mt-12 text-slate-500 text-xs font-magical tracking-widest hover:text-amber-200 transition-colors uppercase"
            >
              Cerrar el regalo
            </button>
          </div>
        )}
      </main>

      {/* Audio Visualizer Hint (Optional purely visual) */}
      <div className="fixed bottom-4 right-4 opacity-30">
        <Wand2 className="w-6 h-6 text-amber-100" />
      </div>

    </div>
  );
};

export default App;