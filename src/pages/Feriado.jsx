import { useState } from 'react';
import { consultarFeriados } from '../assets/services/api';

export default function Feriados() {
    const [ano, setAno] = useState('2026');
    const [feriados, setFeriados] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleBuscarFeriados = async () => {
        if (!ano) return;
        setLoading(true);
        setError(null);
        try {
            const resultado = await consultarFeriados(ano);
            setFeriados(resultado);
        } catch (error) {
            console.error(error);
            setError('Feriados não encontrados para o ano informado.');
            setFeriados([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full">
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <input
                    type="number"
                    value={ano}
                    onChange={(e) => setAno(e.target.value)}
                    placeholder="Digite o ano (Ex: 2026)"
                    className="input-field flex-1"
                />
                <button 
                  onClick={handleBuscarFeriados}
                  disabled={loading}
                  className="btn-cta whitespace-nowrap"
                >
                  {loading ? 'Buscando...' : 'Consultar Feriados'}
                </button>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-lg mb-6 text-sm">
                {error}
              </div>
            )}

            {feriados.length > 0 && (
                <div className="glass-panel p-6 animate-fade-in-up">
                    <div className="mb-4 flex justify-between items-center border-b border-[#A8DADC]/10 pb-4">
                        <h3 className="text-xl font-bold text-white">Feriados Nacionais em {ano}</h3>
                        <span className="text-sm font-data text-[#FFEE8C]">{feriados.length} registros</span>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                        {feriados.map((feriado, index) => (
                            <div key={`${feriado.date}-${index}`} className="bg-[#1e202e]/60 p-4 rounded-lg border border-[#A8DADC]/10 flex flex-col justify-center">
                                <p className="font-bold text-white text-sm mb-1">{feriado.name}</p>
                                <p className="text-[#A8DADC] text-xs font-data">
                                    {feriado.date.split("-").reverse().join("/")} 
                                    {feriado.type && <span className="ml-2 opacity-60">({feriado.type})</span>}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}