import { site, instagramUrl } from "../data/site";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__grain" />
      <div className="container hero__content">
        <span className="hero__kicker">{site.tagline}</span>
        <h1 className="hero__title">{site.name}</h1>
        <p className="hero__sub">{site.hook}</p>
        <div className="hero__actions">
          <a
            className="btn btn--yellow"
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Próximas datas no Instagram
          </a>
          <a className="btn btn--ghost" href="#video">
            Ver-nos em ação
          </a>
        </div>
      </div>
    </header>
  );
}
