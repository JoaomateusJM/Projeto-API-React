import { useState } from "react"
import { consultarCEP } from "../assets/services/api";
import { mapCep } from "../utils/mapCep";

export default function BuscaCep() {
  const [cep, setCep] = useState("");
  const [dados, setDados] = useState(null);

  async function handleBuscarCep() {
    try {
      const resultado = await consultarCEP(cep);

      const cepMapeado = mapCep(resultado);

      setDados(cepMapeado);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <input
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />

      <button onClick={handleBuscarCep}>
        Buscar
      </button>

      {dados && (
        <div>
          <p>Cidade: {dados.cidade}</p>
          <p>Estado: {dados.estado}</p>
        </div>
      )}
    </div>
  );
}