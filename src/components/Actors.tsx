import { actors, type Actor } from "../data/actors";
import { InstagramIcon, TikTokIcon, YouTubeIcon } from "./Icons";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

function ActorCard({ actor }: { actor: Actor }) {
  const { socials } = actor;
  return (
    <article className="actor">
      {actor.photo ? (
        <img className="actor__photo" src={actor.photo} alt={actor.name} loading="lazy" />
      ) : (
        <div className="actor__placeholder" aria-hidden="true">
          {initials(actor.name)}
        </div>
      )}

      <div className="actor__body">
        <h3 className="actor__name">{actor.name}</h3>
        <p className="actor__role">{actor.role}</p>
        <p className="actor__bio">{actor.bio}</p>

        <div className="actor__socials">
          {socials.instagram && (
            <a
              href={`https://instagram.com/${socials.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram de ${actor.name}`}
            >
              <InstagramIcon />
            </a>
          )}
          {socials.tiktok && (
            <a
              href={`https://tiktok.com/@${socials.tiktok}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`TikTok de ${actor.name}`}
            >
              <TikTokIcon />
            </a>
          )}
          {socials.youtube && (
            <a
              href={`https://youtube.com/@${socials.youtube}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`YouTube de ${actor.name}`}
            >
              <YouTubeIcon />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Actors() {
  return (
    <section className="section actors" id="atores">
      <div className="container">
        <span className="section__label">O ELENCO</span>
        <h2 className="section__title">
          Os <em>improólicos</em>
        </h2>
        <p className="section__intro">
          Quatro cabeças, zero guião. Conhece quem sobe ao palco sem fazer ideia
          do que vai dizer a seguir.
        </p>

        <div className="actors__grid">
          {actors.map((actor) => (
            <ActorCard key={actor.name} actor={actor} />
          ))}
        </div>
      </div>
    </section>
  );
}
