import { useState, useEffect } from 'react';
import { consultarFeriados } from '../assets/services/api';

function Feriados() {
  const [feriados, setFeriados] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const buscarDados = async () => {
      try {
        setCarregando(true);
        const dadosFeriados = await consultarFeriados(2026);
        setFeriados(dadosFeriados);
      } catch (err) {
        setErro('Não foi possível carregar os feriados.');
      } finally {
        setCarregando(false);
      }
    };

    buscarDados();
  }, []);

  if (carregando) return <p>Carregando feriados...</p>;
  if (erro) return <p style={{ color: 'red' }}>{erro}</p>;

  return (
    <div>
      <h2>Feriados Nacionais</h2>
      <ul>
        {feriados.map((feriado, index) => (
          <li key={index}>
            <strong>{feriado.data}</strong> - {feriado.nome} ({feriado.tipo})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Feriados;