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
          {/* TODO: troca o vídeo pelo highlight de um espetáculo real em src/data/site.ts (youtubeId). */}
        </p>

        <div className="video__frame">
          <iframe
            src={`https://www.youtube.com/embed/${site.youtubeId}`}
            title={`${site.name} — vídeo`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
