import React, { useState } from 'react';
import { getGuests, deleteGuest as deleteGuestDb } from '../data/db';

const Dashboard = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'benicio2026') {
      setAuthenticated(true);
      loadData();
    } else {
      setError('Contraseña incorrecta');
    }
  };

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await getGuests();
      setGuests(data);
    } catch (err) {
      console.error(err);
      setError('Error al conectar con la base de datos');
    } finally {
      setLoading(false);
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-[#050508] flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>
        <form onSubmit={handleLogin} className="glass-panel p-8 max-w-sm w-full text-center z-10 animate-fade-in-up">
          <h2 className="text-2xl font-title text-cyan-400 mb-6 text-glow">ACCESO RESTRINGIDO</h2>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-black bg-opacity-50 border border-cyan-800 rounded py-3 px-4 text-white mb-4 text-center focus:border-cyan-400 focus:outline-none focus:shadow-[0_0_10px_rgba(0,240,255,0.5)] transition-all"
            placeholder="Ingresa la contraseña"
          />
          {error && <p className="text-red-400 mb-4 text-sm">{error}</p>}
          <button type="submit" className="btn-sci-fi w-full py-3">INGRESAR AL PANEL</button>
        </form>
      </div>
    );
  }

  const totalGuests = guests.length;
  const confirmed = guests.filter(g => g.status === 'CONFIRMADO').length;
  const notAttending = guests.filter(g => g.status === 'NO ASISTE').length;
  const pending = guests.filter(g => g.status === 'PENDIENTE').length;

  const exportExcel = () => {
    const BOM = "\uFEFF"; // Obliga a Excel a leer UTF-8 correctamente
    const header = "Nombre;Estado;Mensaje;Fecha\n";
    const rows = guests.map(g => {
        const name = `"${(g.name||'').replace(/"/g, '""')}"`;
        const msg = g.message ? `"${g.message.replace(/"/g, '""')}"` : "";
        const date = g.date ? new Date(g.date).toLocaleDateString() : "";
        return `${name};${g.status||''};${msg};${date}`;
    }).join("\n");
    
    const csv = BOM + header + rows;
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "invitados_benicio.csv"); // Formato CSV delimitado compatible con Excel Español
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDelete = async (id) => {
    if(window.confirm('¿Seguro que deseas eliminar este invitado?')) {
      try {
        await deleteGuestDb(id);
        setGuests(guests.filter(g => g.id !== id));
      } catch(err) {
        alert("Error al eliminar de la base de datos.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#050508] text-white p-4 md:p-8 font-body relative">
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <header className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-cyan-800 pb-6">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h1 className="text-3xl font-title text-cyan-400 text-glow">PANEL DE CONTROL</h1>
            <p className="text-blue-300 mt-2">Misión: Benicio 9 Años</p>
          </div>
          <div className="flex gap-4">
            <button onClick={loadData} disabled={loading} className="btn-sci-fi text-sm py-2 px-4 opacity-80 hover:opacity-100">
              {loading ? 'ACTUALIZANDO...' : 'REFRESCAR'}
            </button>
            <button onClick={exportExcel} className="btn-sci-fi text-sm py-2 px-4 bg-cyan-900 border-cyan-400 text-white">
              DESCARGAR EXCEL
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard title="TOTAL REGISTROS" value={totalGuests} />
          <StatCard title="CONFIRMADOS" value={confirmed} color="text-green-400" />
          <StatCard title="NO ASISTEN" value={notAttending} color="text-red-400" />
          <StatCard title="PENDIENTES" value={pending} color="text-yellow-400" />
        </div>

        <div className="glass-panel overflow-hidden">
          <div className="p-6 border-b border-cyan-800">
            <h2 className="text-xl font-title text-cyan-300">REGISTRO DE ASISTENCIA (NUBE)</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-black bg-opacity-40 text-blue-300 uppercase text-sm tracking-wider">
                  <th className="p-4 border-b border-cyan-900">Nombre</th>
                  <th className="p-4 border-b border-cyan-900">Estado</th>
                  <th className="p-4 border-b border-cyan-900 hidden md:table-cell">Fecha</th>
                  <th className="p-4 border-b border-cyan-900 hidden lg:table-cell">Mensaje</th>
                  <th className="p-4 border-b border-cyan-900">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {loading && guests.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="p-8 text-center text-cyan-400 animate-pulse">
                      Cargando datos de la nube...
                    </td>
                  </tr>
                ) : guests.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="p-8 text-center text-gray-500">
                      No hay registros en la base de datos Turso.
                    </td>
                  </tr>
                ) : (
                  guests.map(guest => (
                    <tr key={guest.id} className="hover:bg-cyan-900 hover:bg-opacity-20 transition-colors border-b border-gray-800">
                      <td className="p-4 font-semibold">{guest.name}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          guest.status === 'CONFIRMADO' ? 'bg-green-900 text-green-300' : 
                          guest.status === 'NO ASISTE' ? 'bg-red-900 text-red-300' : 
                          'bg-yellow-900 text-yellow-300'
                        }`}>
                          {guest.status}
                        </span>
                      </td>
                      <td className="p-4 hidden md:table-cell text-sm text-gray-400">{new Date(guest.date).toLocaleDateString()}</td>
                      <td className="p-4 hidden lg:table-cell text-sm text-gray-400 max-w-xs truncate">{guest.message || '-'}</td>
                      <td className="p-4">
                        <button onClick={() => handleDelete(guest.id)} className="text-red-400 hover:text-red-300 transition-colors">
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, color = "text-white" }) => (
  <div className="glass-panel p-6 border-t-2 border-t-cyan-500 flex flex-col justify-center items-center">
    <h3 className="text-sm uppercase tracking-widest text-blue-300 mb-2 text-center">{title}</h3>
    <span className={`text-4xl font-title font-bold ${color} text-glow`}>{value}</span>
  </div>
);

export default Dashboard;
