import React from 'react';
import { invitationConfig } from '../data/invitation';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>
      
      <div className="z-10 w-full max-w-7xl px-2 flex flex-col items-center justify-center animate-fade-in-up mt-16 md:mt-0">
        
        {/* Container for Characters and Title */}
        <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto mb-16 sm:mb-24">
          
          <div className="relative inline-block z-20">
            
            {/* Mandalorian Image (Sostiene debajo de la B) */}
            <div className="absolute -left-2 sm:-left-4 md:-left-8 top-[35%] sm:top-[40%] w-36 sm:w-52 md:w-72 animate-bounce-slow z-0 pointer-events-none" style={{ animationDuration: '4s' }}>
              <img 
                src="/images/mando.png" 
                alt="The Mandalorian" 
                className="w-full h-auto drop-shadow-[0_0_15px_rgba(255,232,31,0.4)] opacity-100"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>

            {/* Grogu Image (Desde donde finaliza la O, pies en el renglón, separado) */}
            <div className="absolute left-full bottom-0 pl-2 sm:pl-4 md:pl-6 w-24 sm:w-32 md:w-48 animate-bounce-slow z-0 pointer-events-none" style={{ animationDuration: '6s', animationDelay: '1s' }}>
              <img 
                src="/images/grogu.png" 
                alt="Grogu" 
                className="w-full h-auto drop-shadow-[0_0_20px_rgba(255,232,31,0.6)] opacity-100"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white text-glow animate-pulse-slow tracking-tight">
              {invitationConfig.childName}
            </h1>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl text-cyan-400 font-bold mt-4 tracking-widest text-center relative z-20">
            {invitationConfig.age} AÑOS
          </h2>
        </div>

        {/* Message */}
        <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto uppercase tracking-wider text-center relative z-10">
          {invitationConfig.message}
        </p>
      </div>
      
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow"
      >
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center pt-2 opacity-60">
          <div className="w-1 h-2 bg-cyan-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
