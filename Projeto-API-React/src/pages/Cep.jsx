import { useState } from "react"
import { consultarCEP } from "../assets/services/api";
import { mapCep } from "../utils/mapCep";

export default function BuscaCep() {
  const [cep, setCep] = useState("");
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleBuscarCep() {
    if (!cep) return;
    setLoading(true);
    setError(null);
    try {
      const resultado = await consultarCEP(cep);
      const cepMapeado = mapCep(resultado);
      setDados(cepMapeado);
    } catch (error) {
      console.error(error);
      setError('CEP não encontrado ou erro na consulta.');
      setDados(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          placeholder="Digite o CEP (apenas números ou com traço)"
          className="input-field flex-1"
        />
        <button 
          onClick={handleBuscarCep}
          disabled={loading}
          className="btn-cta whitespace-nowrap"
        >
          {loading ? 'Buscando...' : 'Consultar CEP'}
        </button>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-lg mb-6 text-sm">
          {error}
        </div>
      )}

      {dados && (
        <div className="glass-panel p-6 animate-fade-in-up">
          <div className="flex justify-between items-start mb-6 border-b border-[#A8DADC]/10 pb-4">
            <div>
              <h3 className="text-xl font-bold text-white">{dados.city} - {dados.state}</h3>
              <p className="text-sm text-[#A8DADC] mt-1 font-data">CEP: {dados.cep}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#A8DADC]/20 flex items-center justify-center text-[#A8DADC]">
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
               </svg>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="data-row">
              <span className="data-label">Logradouro / Rua</span>
              <span className="data-value">{dados.street || '-'}</span>
            </div>
            <div className="data-row">
              <span className="data-label">Bairro</span>
              <span className="data-value">{dados.neighborhood || '-'}</span>
            </div>
            <div className="data-row">
              <span className="data-label">Cidade</span>
              <span className="data-value">{dados.city}</span>
            </div>
            <div className="data-row">
              <span className="data-label">Estado</span>
              <span className="data-value">{dados.state}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}