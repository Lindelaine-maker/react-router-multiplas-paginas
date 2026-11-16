import { Link, useParams } from "react-router-dom";

export default function User() {
  const { id } = useParams();

  return (
    <section className="page narrow-page">
      <p className="eyebrow">ROTA DINÂMICA</p>
      <h1>Perfil do <span>usuário</span></h1>
      <div className="profile-card">
        <div className="avatar">{id?.slice(0, 1).toUpperCase() || "U"}</div>
        <div>
          <p className="profile-caption">IDENTIFICADOR DA URL</p>
          <h2>Usuário #{id}</h2>
          <p>O valor acima foi obtido dinamicamente com o hook <code>useParams()</code>.</p>
        </div>
      </div>
      <p className="hint">Experimente alterar o número no endereço: <code>/user/123</code>.</p>
      <Link className="text-link" to="/">← Voltar para Home</Link>
    </section>
  );
}