import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="page">
      <p className="eyebrow">BEM-VINDA(O) AO PROJETO</p>
      <h1>Navegação simples.<br /><span>Experiência organizada.</span></h1>
      <p className="lead">Este website demonstra como criar múltiplas páginas em React usando React Router, componentes reutilizáveis e carregamento otimizado.</p>
      <div className="action-row">
        <Link className="button primary" to="/about">Conheça o projeto <span>→</span></Link>
        <Link className="button secondary" to="/user/42">Ver perfil de exemplo</Link>
      </div>
      <div className="feature-grid">
        <article className="feature-card"><span className="feature-icon">↗</span><h2>Rotas claras</h2><p>URLs organizadas com BrowserRouter, Routes e Route.</p></article>
        <article className="feature-card"><span className="feature-icon">▣</span><h2>Layout reutilizável</h2><p>Cabeçalho, menu lateral e rodapé compartilhados.</p></article>
        <article className="feature-card"><span className="feature-icon">⚡</span><h2>Mais performance</h2><p>As páginas são carregadas sob demanda com lazy e Suspense.</p></article>
      </div>
    </section>
  );
}