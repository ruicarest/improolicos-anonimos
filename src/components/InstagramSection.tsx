import { useState } from "react";
import { site, instagramUrl } from "../data/site";

// Todas as fotos em src/assets/instagram/ aparecem aqui (palco, plateia, bastidores).
// Para adicionar mais, basta largar ficheiros (.jpg/.png) nessa pasta.
const modules = import.meta.glob(
  "../assets/instagram/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
  { eager: true, query: "?url", import: "default" }
) as Record<string, string>;

const photos: string[] = Object.keys(modules)
  .sort()
  .map((k) => modules[k]);

export default function InstagramSection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="section" id="instagram">
      <div className="container">
        <span className="section__label">@{site.instagram}</span>
        <h2 className="section__title">
          Segue o <em>caos</em>
        </h2>
        <p className="section__intro">
          Palco, plateia, bastidores e os melhores momentos das nossas noites. É
          por aqui que anunciamos as próximas datas.
        </p>

        <div className="ig__grid">
          {photos.map((src, i) => (
            <button
              key={src}
              className="ig__tile"
              onClick={() => setActive(src)}
              aria-label={`Ver foto ${i + 1}`}
            >
              <img src={src} alt={`Improólicos Anónimos — momento ${i + 1}`} loading="lazy" />
            </button>
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

      {active && (
        <div className="lightbox" onClick={() => setActive(null)} role="dialog" aria-modal="true">
          <button className="lightbox__close" aria-label="Fechar">
            ✕
          </button>
          <img className="lightbox__img" src={active} alt="Improólicos Anónimos" />
        </div>
      )}
    </section>
  );
}
