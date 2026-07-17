import { site, instagramUrl } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__logo">
          {site.name}<span>.</span>
        </div>
        <p>
          {site.tagline} ·{" "}
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
            @{site.instagram}
          </a>
        </p>
        <p>© {year} {site.name}. Feito no improviso.</p>
      </div>
    </footer>
  );
}
