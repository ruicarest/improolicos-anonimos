import { site, instagramUrl } from "../data/site";
import { InstagramIcon } from "./Icons";

// NOTA sobre integração real do feed:
// Um site estático não consegue ler o Instagram diretamente (a API precisa de
// servidor/token). As opções mais simples para pôr os posts reais aqui são:
//   1) Um widget gratuito de terceiros (ex.: Behold.so, EmbedSocial, LightWidget)
//      — copias um <script>/embed e colas no lugar da grelha abaixo.
//   2) O embed oficial de um post: no Instagram, "..." > "Incorporar" > copiar código.
// Por agora fica uma grelha de placeholders que liga ao perfil.
const PLACEHOLDER_TILES = 6;

export default function InstagramSection() {
  return (
    <section className="section" id="instagram">
      <div className="container">
        <span className="section__label">@{site.instagram}</span>
        <h2 className="section__title">
          Segue o <em>caos</em>
        </h2>
        <p className="section__intro">
          Datas, bastidores e os melhores momentos dos espetáculos. É por aqui
          que anunciamos tudo primeiro.
        </p>

        <div className="ig__grid">
          {Array.from({ length: PLACEHOLDER_TILES }).map((_, i) => (
            <a
              key={i}
              className="ig__tile"
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver no Instagram"
            >
              <InstagramIcon />
            </a>
          ))}
        </div>

        <div className="ig__cta">
          <a
            className="btn btn--yellow"
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Seguir @{site.instagram}
          </a>
        </div>
      </div>
    </section>
  );
}
