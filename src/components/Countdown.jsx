import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(
      <div key={interval} className="flex flex-col items-center mx-2 md:mx-6 glass-panel p-4 md:p-6 min-w-[80px] md:min-w-[120px] animate-fade-in">
        <span 
          className="text-4xl md:text-6xl font-bold text-glow text-cyan-300 font-numbers"
        >
          {timeLeft[interval] < 10 ? `0${timeLeft[interval]}` : timeLeft[interval]}
        </span>
        <span className="text-xs md:text-sm text-blue-300 uppercase tracking-widest mt-2">
          {interval}
        </span>
      </div>
    );
  });

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-4xl text-cyan-500 mb-12 text-glow">SISTEMA DE LANZAMIENTO</h2>
        <div className="flex justify-center flex-wrap gap-4">
          {timerComponents.length ? timerComponents : <span className="text-3xl text-glow">¡DESPEGUE!</span>}
        </div>
      </div>
    </section>
  );
};

export default Countdown;
