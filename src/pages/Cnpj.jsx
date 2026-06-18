import { useState } from 'react';
import { consultarCNPJ } from '../assets/services/api';

export default function BuscaCnpj() {
  const [cnpj, setCnpj] = useState('');
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleBuscarCnpj() {
    if (!cnpj) return;
    setLoading(true);
    setError(null);
    try {
      const resultado = await consultarCNPJ(cnpj);
      setDados(resultado);
    } catch (error) {
      console.error(error);
      setError('CNPJ não encontrado ou erro na consulta.');
      setDados(null);
    } finally {
      setLoading(false);
    }
  }

  const isAtivo = dados?.descricao_situacao_cadastral?.toLowerCase() === 'ativa';

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          value={cnpj}
          onChange={(e) => setCnpj(e.target.value)}
          placeholder="Digite o CNPJ (apenas números ou com máscara)"
          className="input-field flex-1"
        />
        <button 
          onClick={handleBuscarCnpj}
          disabled={loading}
          className="btn-cta whitespace-nowrap"
        >
          {loading ? 'Buscando...' : 'Consultar CNPJ'}
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
              <h3 className="text-xl font-bold text-white">{dados.nome_fantasia || dados.razao_social}</h3>
              <p className="text-sm text-[#A8DADC] mt-1 font-data">{dados.cnpj}</p>
            </div>
            {dados.descricao_situacao_cadastral && (
               <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${isAtivo ? 'bg-[#D8F3DC]/20 text-[#D8F3DC] border border-[#D8F3DC]/30' : 'bg-red-500/20 text-red-300 border border-red-500/30'}`}>
                 {dados.descricao_situacao_cadastral}
               </span>
            )}
          </div>

          <div className="flex flex-col">
            <div className="data-row">
              <span className="data-label">Razão Social</span>
              <span className="data-value">{dados.razao_social}</span>
            </div>
            <div className="data-row">
              <span className="data-label">Natureza Jurídica</span>
              <span className="data-value">{dados.natureza_juridica}</span>
            </div>
            <div className="data-row">
              <span className="data-label">Endereço</span>
              <span className="data-value">
                {dados.logradouro}, {dados.numero} {dados.complemento ? ` - ${dados.complemento}` : ''}<br/>
                {dados.bairro} - {dados.municipio}/{dados.uf}
              </span>
            </div>
            <div className="data-row">
              <span className="data-label">CEP</span>
              <span className="data-value">{dados.cep}</span>
            </div>
            {dados.ddd_telefone_1 && (
              <div className="data-row">
                <span className="data-label">Telefone</span>
                <span className="data-value">{dados.ddd_telefone_1}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}