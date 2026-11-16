import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="page narrow-page">
      <p className="eyebrow">SOBRE</p>
      <h1>Sobre o <span>projeto</span></h1>
      <p className="lead">Uma aplicação didática criada para praticar navegação em aplicações de página única (SPA) com React Router.</p>
      <div className="content-card">
        <h2>O que você encontra aqui?</h2>
        <ul className="check-list">
          <li>Configuração do BrowserRouter na aplicação.</li>
          <li>Navegação entre páginas com Link e NavLink.</li>
          <li>Layout compartilhado com Header, Sidebar e Footer.</li>
          <li>Carregamento sob demanda com React.lazy e Suspense.</li>
          <li>Parâmetros de URL e tratamento de rotas inexistentes.</li>
        </ul>
      </div>
      <Link className="text-link" to="/">← Voltar para Home</Link>
    </section>
  );
}