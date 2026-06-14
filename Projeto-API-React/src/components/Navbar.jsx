import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/cep">CEP</NavLink>
            <NavLink to="/cnpj">CNPJ</NavLink>
            <NavLink to="/feriados">Feriados</NavLink>
        </nav>
    );
}