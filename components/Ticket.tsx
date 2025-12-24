import React from 'react';
import { MapPin, Calendar, Clock, QrCode } from 'lucide-react';
import { EventDetails } from '../types';

interface TicketProps {
  details: EventDetails;
}

const Ticket: React.FC<TicketProps> = ({ details }) => {
  return (
    <div className="relative w-full max-w-md mx-auto perspective-1000 animate-fade-in-up">
      {/* Ticket Container */}
      <div className="bg-[#eaddcf] text-slate-900 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(251,191,36,0.2)] border-4 border-double border-slate-800 relative">
        
        {/* Decorative Watermark/Background texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]"></div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500 rounded-full blur-3xl opacity-20"></div>

        {/* Header - Hogwarts/Magic Style */}
        <div className="bg-slate-900 text-amber-100 p-6 text-center border-b-4 border-amber-600 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-50"></div>
          <h2 className="font-magical text-2xl md:text-3xl font-bold tracking-widest uppercase mb-2 text-amber-400">
            Admit One
          </h2>
          <p className="font-elegant text-sm italic text-amber-200/80">Curso Oficial de Magia Culinaria</p>
        </div>

        {/* Ticket Body */}
        <div className="p-6 relative">
          
          {/* Recipient Special Header */}
          <div className="text-center mb-8">
            <h3 className="font-magical text-xl font-bold text-slate-800 border-b-2 border-slate-800 inline-block pb-1">
              {details.recipientName}
            </h3>
            <p className="font-elegant text-xs mt-1 text-slate-600 uppercase tracking-widest">Aspirante a Chef de Pociones</p>
          </div>

          {/* Event Title */}
          <div className="mb-6 text-center">
            <h1 className="font-magical text-xl md:text-2xl font-bold text-amber-900 leading-tight">
              {details.eventName}
            </h1>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex flex-col items-center p-3 bg-amber-100/50 rounded border border-amber-200/50">
              <Calendar className="w-6 h-6 text-amber-800 mb-1" />
              <span className="font-magical text-xs text-slate-500 uppercase">Fecha</span>
              <span className="font-bold text-slate-800">{details.date}</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-amber-100/50 rounded border border-amber-200/50">
              <Clock className="w-6 h-6 text-amber-800 mb-1" />
              <span className="font-magical text-xs text-slate-500 uppercase">Hora</span>
              <span className="font-bold text-slate-800">{details.time}</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-3 p-3 bg-slate-100 rounded border border-slate-200 mb-6">
            <MapPin className="w-5 h-5 text-amber-800 flex-shrink-0 mt-1" />
            <div>
              <span className="font-magical text-xs text-slate-500 uppercase block">Ubicación</span>
              <span className="font-elegant font-bold text-slate-800 leading-tight block">
                {details.location}
              </span>
              <span className="text-xs text-slate-500 mt-1 block">Organizado por {details.organizer}</span>
            </div>
          </div>

          {/* Footer / QR */}
          <div className="flex items-center justify-between border-t border-dashed border-slate-400 pt-4 mt-2">
            <div className="text-left">
              <p className="font-magical text-xs text-slate-500">Nº de Ticket</p>
              <p className="font-mono text-xs text-slate-800 tracking-tighter">{details.ticketNumber}</p>
            </div>
            
            {/* Simulated QR Code for visual authenticity */}
            <div className="bg-white p-1 rounded shadow-sm">
               <QrCode className="w-12 h-12 text-slate-900" />
            </div>
          </div>

        </div>

        {/* Stub/Tear-off section visual */}
        <div className="absolute bottom-0 left-0 w-full h-4 bg-[radial-gradient(circle,transparent_60%,#eaddcf_60%)] bg-[length:20px_20px] -mb-2 rotate-180"></div>
      </div>
      
      {/* Personal Message */}
      <div className="text-center mt-8 animate-pulse-slow">
        <p className="font-elegant italic text-2xl text-amber-200 text-shadow-glow">
          Te amo moito
        </p>
      </div>
    </div>
  );
};

export default Ticket;