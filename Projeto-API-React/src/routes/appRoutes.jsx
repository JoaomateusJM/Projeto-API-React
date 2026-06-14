import { Routes, Route, NavLink } from 'react-router-dom';

import Home from '../pages/Home';
import Cep from '../pages/Cep';
import Cnpj from '../pages/Cnpj';
import Feriado from '../pages/Feriado';

export default function AppRoutes() {
    return (
        <>
            <nav>
                <NavLink to="/">Home</NavLink>
                {' | '}
                <NavLink to="/cep">CEP</NavLink>
                {' | '}
                <NavLink to="/cnpj">CNPJ</NavLink>
                {' | '}
                <NavLink to="/feriado">Feriados</NavLink>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cep" element={<Cep />} />
                <Route path="/cnpj" element={<Cnpj />} />
                <Route path="/feriado" element={<Feriado />} />
            </Routes>
        </>
    );
}