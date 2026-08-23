import React from 'react';
import { invitationConfig } from '../data/invitation';

const Location = () => {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-center text-3xl md:text-5xl text-glow mb-12 text-cyan-400">DESTINO</h2>
        
        <div 
          className="glass-panel p-8 md:p-12 text-center hologram-effect relative animate-fade-in"
        >
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 rounded-full border-2 border-cyan-400 flex items-center justify-center box-glow animate-pulse-slow">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="text-4xl text-cyan-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-2">{invitationConfig.locationName}</h3>
          <p className="text-lg text-blue-200 mb-8">{invitationConfig.locationAddress}</p>
          
          <div className="font-mono text-cyan-500 mb-8 bg-black bg-opacity-50 inline-block p-4 rounded-md border border-cyan-800">
            <p className="text-sm">COORDENADAS DEL EVENTO</p>
            <p className="text-xs mt-2">[ 31.4298° S, 64.1318° W ]</p>
          </div>
          <br />
          <a 
            href={invitationConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sci-fi"
          >
            VER UBICACIÓN →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Location;
