import React, { useState } from 'react';
import { addGuest } from '../data/db';

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    status: 'CONFIRMADO',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const newGuest = {
        id: Date.now().toString(),
        ...formData,
        date: new Date().toISOString(),
        companions: '0' // El diseño ya no tiene el campo, se setea por defecto
      };
      
      await addGuest(newGuest);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError("Hubo un error al enviar tu respuesta. Por favor intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-center text-3xl md:text-4xl text-glow mb-4 text-cyan-400">¿TE SUMÁS A LA AVENTURA?</h2>
        <h3 className="text-center text-xl text-blue-200 mb-12 uppercase tracking-widest">CONFIRMÁ TU ASISTENCIA</h3>
        
        <div 
          className="glass-panel p-8 md:p-12 box-glow animate-fade-in-up"
        >
          {submitted ? (
            <div 
              className="text-center py-10 animate-fade-in"
            >
              <div className="w-20 h-20 mx-auto rounded-full border-4 border-cyan-400 flex items-center justify-center mb-6 animate-pulse-slow">
                <span className="text-4xl">✓</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 text-glow">TRANSMISIÓN RECIBIDA</h3>
              <p className="text-cyan-300">¡Tu asistencia fue confirmada en la base de datos!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
              <div>
                <label className="block text-cyan-400 text-sm font-bold mb-2 uppercase tracking-wider">Nombre y Apellido</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black bg-opacity-50 border border-cyan-800 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(0,240,255,0.5)] transition-all"
                  placeholder="Ej: Luke Skywalker"
                />
              </div>
              
              <div>
                <label className="block text-cyan-400 text-sm font-bold mb-2 uppercase tracking-wider">¿Vas a asistir?</label>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="status" 
                      value="CONFIRMADO" 
                      checked={formData.status === 'CONFIRMADO'}
                      onChange={handleChange}
                      className="text-cyan-500 bg-gray-800 border-gray-600 focus:ring-cyan-500 focus:ring-2"
                    />
                    <span className="text-white">Sí, ahí estaré</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="status" 
                      value="NO ASISTE" 
                      checked={formData.status === 'NO ASISTE'}
                      onChange={handleChange}
                      className="text-cyan-500 bg-gray-800 border-gray-600 focus:ring-cyan-500 focus:ring-2"
                    />
                    <span className="text-white">No podré asistir</span>
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block text-cyan-400 text-sm font-bold mb-2 uppercase tracking-wider">Mensaje (Opcional)</label>
                <textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black bg-opacity-50 border border-cyan-800 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(0,240,255,0.5)] transition-all h-24"
                  placeholder="Mensaje para Benicio..."
                ></textarea>
              </div>
              
              <div className="text-center pt-4">
                {error && <p className="text-red-400 mb-4 text-sm">{error}</p>}
                <button type="submit" disabled={loading} className="btn-sci-fi w-full md:w-auto disabled:opacity-50">
                  {loading ? 'ENVIANDO...' : 'CONFIRMAR ASISTENCIA'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default RSVP;
