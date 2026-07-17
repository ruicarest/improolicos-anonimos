import { site, instagramUrl } from "../data/site";
import { MailIcon, InstagramIcon } from "./Icons";

export default function Contact() {
  return (
    <section className="section contact" id="contacto">
      <div className="container">
        <span className="section__label">FALA CONNOSCO</span>
        <h2 className="section__title">
          Vamos <em>fazer rir</em> juntos
        </h2>
        <p className="section__intro">
          Queres marcar um espetáculo, colaborar ou só dizer olá? Estamos a um
          clique de distância.
        </p>

        <div className="contact__grid">
          <div className="contact__card">
            <h3>Contactos</h3>
            <p>Respondemos mais depressa por Instagram, mas o email também dá.</p>
            <ul className="contact__list">
              <li>
                <MailIcon />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <InstagramIcon />
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                  @{site.instagram}
                </a>
              </li>
            </ul>
          </div>

          <div className="contact__card">
            <h3>Empresas & eventos</h3>
            <p>
              Festas de Natal, team buildings, aniversários de empresa ou
              eventos privados.
            </p>
            <div className="contact__biz">
              <h4>Improviso à medida</h4>
              <p>
                Levamos a comédia improvisada ao vosso evento — e podemos até
                incluir workshops de improviso para a equipa. Diz-nos a data e a
                ideia e montamos uma proposta.
              </p>
            </div>
            <br />
            <a className="btn" href={`mailto:${site.email}?subject=Pedido%20de%20proposta%20-%20evento`}>
              Pedir proposta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
