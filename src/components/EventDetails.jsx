import React from 'react';
import { invitationConfig } from '../data/invitation';

const EventDetails = () => {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <div 
          className="glass-panel p-8 md:p-16 text-center scanlines relative overflow-hidden box-glow animate-fade-in-up"
        >
          <h2 className="text-3xl md:text-5xl text-glow mb-8 text-cyan-400">MISIÓN: CELEBRACIÓN</h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-12">
            <div className="flex flex-col items-center">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-5xl text-blue-500 mb-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V160h352v298c0 3.3-2.7 6-6 6z"></path></svg>
              <h3 className="text-2xl font-bold text-white">FECHA ESTELAR</h3>
              <p className="text-xl text-cyan-300 mt-2">19 SEPTIEMBRE</p>
            </div>
            
            <div className="hidden md:block w-px h-32 bg-gradient-to-b from-transparent via-cyan-500 to-transparent"></div>
            <div className="md:hidden h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-4"></div>
            
            <div className="flex flex-col items-center">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-5xl text-blue-500 mb-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path></svg>
              <h3 className="text-2xl font-bold text-white">HORA LOCAL</h3>
              <p className="text-xl text-cyan-300 mt-2">{invitationConfig.eventTime}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
