import { site, instagramUrl } from "../data/site";
import { InstagramIcon } from "./Icons";

// Fotos "posts": qualquer imagem em src/assets/instagram/ aparece aqui.
// (Para o feed real do Instagram a atualizar sozinho, ver nota no README —
//  precisa de conta profissional + widget tipo Behold.)
const modules = import.meta.glob(
  "../assets/instagram/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
  { eager: true, query: "?url", import: "default" }
) as Record<string, string>;

const posts: string[] = Object.keys(modules)
  .sort()
  .map((k) => modules[k]);

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
          {posts.map((src, i) => (
            <a
              key={src}
              className="ig__tile"
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver no Instagram"
            >
              <img src={src} alt={`Improólicos Anónimos no Instagram ${i + 1}`} loading="lazy" />
              <span className="ig__overlay">
                <InstagramIcon />
              </span>
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
