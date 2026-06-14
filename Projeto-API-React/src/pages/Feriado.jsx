import { useState } from 'react';
import { consultarFeriados } from '../assets/services/api';
import { Link } from 'react-router-dom';

export default function Feriados() {
    const [ano, setAno] = useState('2026');
    const [feriados, setFeriados] = useState([]);

    const handleBuscarFeriados = async () => {
        const resultado = await consultarFeriados(ano);
        setFeriados(resultado);
    };

    return (
        <div>
            <input
                type="number"
                value={ano}
                onChange={(e) => setAno(e.target.value)}
                placeholder="Digite o ano"
            />

            <button onClick={handleBuscarFeriados}>
                Buscar
            </button>

            {feriados.map((feriado) => (
                <div key={feriado.date}>
                    <Link to={`/feriado/${feriado.date}`}>
                        {feriado.name}
                    </Link>
                </div>
            ))}
        </div>
    );
}