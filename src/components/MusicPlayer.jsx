import React, { useState, useRef, useEffect } from 'react';
import { invitationConfig } from '../data/invitation';

const MusicPlayer = ({ autoPlay }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (autoPlay && audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.log("Autoplay prevented by browser or missing file");
      });
    }
  }, [autoPlay]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => alert('El archivo de música no se encontró. Coloca un archivo MP3 en public/audio/starwars.mp3'));
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 glass-panel p-3 flex items-center space-x-3 box-glow border-cyan-500/50 animate-fade-in-up">
      <audio ref={audioRef} src={invitationConfig.musicUrl} loop preload="auto" />
      <div className="flex flex-col">
        <span className="text-[9px] text-cyan-400 tracking-widest font-bold uppercase mb-1">
          TRANSMISIÓN DE AUDIO
        </span>
        <div className="flex items-center space-x-2">
          {isPlaying ? (
            <div className="flex space-x-1 h-3 items-end">
              <div className="w-1 bg-cyan-400 animate-pulse-fast h-3"></div>
              <div className="w-1 bg-cyan-400 animate-pulse-fast h-2" style={{animationDelay: '0.1s'}}></div>
              <div className="w-1 bg-cyan-400 animate-pulse-fast h-3" style={{animationDelay: '0.2s'}}></div>
              <div className="w-1 bg-cyan-400 animate-pulse-fast h-1" style={{animationDelay: '0.3s'}}></div>
            </div>
          ) : (
            <div className="flex space-x-1 h-3 items-end">
              <div className="w-1 h-1 bg-gray-500"></div>
              <div className="w-1 h-1 bg-gray-500"></div>
              <div className="w-1 h-1 bg-gray-500"></div>
              <div className="w-1 h-1 bg-gray-500"></div>
            </div>
          )}
        </div>
      </div>
      
      <button onClick={togglePlay} className="w-10 h-10 rounded-full bg-cyan-900 border border-cyan-400 flex items-center justify-center text-white hover:bg-cyan-700 transition-colors">
        {isPlaying ? (
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"></path></svg>
        ) : (
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-sm ml-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
        )}
      </button>
      <button onClick={toggleMute} className="text-cyan-400 hover:text-white transition-colors p-2">
        {isMuted ? (
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"></path></svg>
        ) : (
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.56-26.18-4.62-33.74 6.53-7.56 11.17-4.62 26.18 6.53 33.74 76.54 51.81 122.86 137.6 122.86 235.76 0 98.15-46.32 183.94-122.86 235.76-11.15 7.56-14.09 22.57-6.53 33.74 7.56 11.17 22.57 14.09 33.74 6.53 92.42-62.54 148.8-164.29 148.8-276.03 0-111.75-56.39-213.5-148.8-276.03zM349.52 165.7c-11.66-7.05-26.65-3.32-33.7 8.35-7.05 11.66-3.32 26.65 8.35 33.7 32.55 19.68 51.84 53.64 51.84 92.25 0 38.61-19.29 72.58-51.84 92.25-11.67 7.05-15.4 22.04-8.35 33.7 7.05 11.66 22.04 15.4 33.7 8.35 48.97-29.62 77.84-80.45 77.84-134.3s-28.87-104.68-77.84-134.3z"></path></svg>
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;
