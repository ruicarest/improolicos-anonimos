import { site } from "../data/site";

export default function VideoSection() {
  return (
    <section className="section" id="video">
      <div className="container">
        <span className="section__label">EM PALCO</span>
        <h2 className="section__title">
          Vê-nos <em>ao vivo</em>
        </h2>
        <p className="section__intro">
          Um cheirinho do que acontece quando ninguém sabe o que vai acontecer.
          {/* TODO: gerir os vídeos em src/data/site.ts (lista "videos"). */}
        </p>

        <div className="video__grid">
          {site.videos.map((v) => (
            <figure className="video__item" key={v.id}>
              <div className="video__frame">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title || `${site.name} — vídeo`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              {v.title && <figcaption className="video__caption">{v.title}</figcaption>}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
