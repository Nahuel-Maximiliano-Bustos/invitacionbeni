import React from 'react';

const Gallery = () => {
  return (
    <section className="py-20 relative z-10 overflow-hidden min-h-[400px] flex items-center justify-center">
      {/* Central Text Panel */}
      <div className="relative z-10 text-center glass-panel p-6 sm:p-8 md:p-12 box-glow max-w-sm sm:max-w-md md:max-w-xl mx-auto animate-fade-in mx-4">
        <h2 className="text-2xl sm:text-3xl md:text-5xl text-glow mb-4 text-cyan-400" style={{ letterSpacing: '2px' }}>ESTE ES EL CAMINO</h2>
        <p className="text-sm sm:text-base md:text-lg text-white font-body tracking-wider uppercase font-bold">El clan te espera para una aventura intergaláctica inolvidable.</p>
      </div>
    </section>
  );
};

export default Gallery;
