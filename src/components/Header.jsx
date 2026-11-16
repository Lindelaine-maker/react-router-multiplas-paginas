import { NavLink } from "react-router-dom";

const navClass = ({ isActive }) => isActive ? "nav-link active" : "nav-link";

export default function Header() {
  return (
    <header className="site-header">
      <NavLink className="brand" to="/" aria-label="Rotas em React - página inicial">
        <span className="brand-mark">R</span>
        <span>Rotas em React</span>
      </NavLink>
      <nav className="top-nav" aria-label="Navegação principal">
        <NavLink end className={navClass} to="/">Home</NavLink>
        <NavLink className={navClass} to="/about">Sobre</NavLink>
        <NavLink className={navClass} to="/contact">Contato</NavLink>
      </nav>
    </header>
  );
}