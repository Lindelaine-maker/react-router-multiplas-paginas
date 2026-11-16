import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="page not-found">
      <p className="error-code">404</p>
      <h1>Página não <span>encontrada</span></h1>
      <p className="lead">O endereço acessado não corresponde a nenhuma rota disponível.</p>
      <Link className="button primary" to="/">Voltar para a página inicial <span>→</span></Link>
    </section>
  );
}