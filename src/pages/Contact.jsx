import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section className="page narrow-page">
      <p className="eyebrow">CONTATO</p>
      <h1>Vamos <span>conversar?</span></h1>
      <p className="lead">Esta página representa uma rota de contato. O formulário abaixo é demonstrativo e não envia mensagens.</p>
      <div className="content-card contact-card">
        <div><span className="contact-symbol">✉</span><div><strong>Projeto acadêmico</strong><p>Exemplo de página de contato para a atividade de React Router.</p></div></div>
        <Link className="button primary" to="/">Voltar ao início <span>→</span></Link>
      </div>
    </section>
  );
}