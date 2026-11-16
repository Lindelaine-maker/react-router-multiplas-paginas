import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <p className="sidebar-label">NAVEGAÇÃO</p>
      <nav aria-label="Navegação lateral">
        <NavLink end to="/" className={({ isActive }) => isActive ? "side-link active" : "side-link"}>⌂ <span>Início</span></NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "side-link active" : "side-link"}>◎ <span>Sobre o projeto</span></NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "side-link active" : "side-link"}>✉ <span>Contato</span></NavLink>
        <NavLink to="/user/42" className={({ isActive }) => isActive ? "side-link active" : "side-link"}>♙ <span>Perfil de exemplo</span></NavLink>
      </nav>
      <div className="sidebar-note">
        <strong>Aprendizado</strong>
        <p>Rotas, layouts e carregamento sob demanda com React Router.</p>
      </div>
    </aside>
  );
}