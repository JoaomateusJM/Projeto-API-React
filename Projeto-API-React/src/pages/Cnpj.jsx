import { useState } from 'react';
import { consultarCNPJ } from '../assets/services/api';

export default function BuscaCnpj() {
  const [cnpj, setCnpj] = useState('');
  const [dados, setDados] = useState(null);

  async function handleBuscarCnpj() {
    try {
      const resultado = await consultarCNPJ(cnpj);
      setDados(resultado);
    } catch (error) {
      console.error(error);
      alert('CNPJ não encontrado.');
      setDados(null);
    }
  }

  return (
    <div>
      <input
        type="text"
        value={cnpj}
        onChange={(e) => setCnpj(e.target.value)}
        placeholder="Digite o CNPJ"
      />

      <button onClick={handleBuscarCnpj}>
        Buscar
      </button>

      {dados && (
        <div>
          <h3>Resultado da Consulta</h3>

          <p>
            <strong>Nome Fantasia:</strong> {dados.nome_fantasia}
          </p>

          <p>
            <strong>UF:</strong> {dados.uf}
          </p>

          <p>
            <strong>CEP:</strong> {dados.cep}
          </p>
        </div>
      )}
    </div>
  );
}