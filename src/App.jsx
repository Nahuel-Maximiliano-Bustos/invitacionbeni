import React, { useState, useEffect } from 'react';
import { invitationConfig } from './data/invitation';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import EventDetails from './components/EventDetails';
import Location from './components/Location';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import MusicPlayer from './components/MusicPlayer';
import Dashboard from './admin/Dashboard';
import { initDb } from './data/db';

const InvitationApp = () => {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
  };

  if (!opened) {
    return (
      <div className="flex items-center justify-center min-h-screen relative overflow-hidden" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>
        <ParticleBackground />
        <div className="z-10 text-center p-4">
          <h2 className="text-lg sm:text-xl md:text-3xl text-glow mb-4 text-cyan-400 px-4">UNA NUEVA AVENTURA ESTÁ POR COMENZAR</h2>
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-black text-white text-glow mb-2">{invitationConfig.childName}</h1>
          <h3 className="text-xl sm:text-2xl md:text-4xl text-blue-400 mb-8">{invitationConfig.age} AÑOS</h3>
          <button onClick={handleOpen} className="btn-sci-fi">
            ABRIR INVITACIÓN
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <ParticleBackground />
      <MusicPlayer autoPlay={true} />
      
      <main className="relative z-10">
        <Hero />
        <Countdown targetDate={`${invitationConfig.eventDate}T${invitationConfig.eventTime.split(' ')[0]}:00`} />
        <EventDetails />
        <Gallery />
        <Location />
        <RSVP />
        
        <footer className="py-8 text-center text-sm opacity-50">
          <p>Una invitación creada por DN Invitaciones Digitales</p>
        </footer>
      </main>
    </div>
  );
};

function App() {
  useEffect(() => {
    initDb().catch(console.error);
  }, []);

  const path = window.location.pathname;
  
  if (path === '/admin') {
    return <Dashboard />;
  }
  
  return <InvitationApp />;
}

export default App;
