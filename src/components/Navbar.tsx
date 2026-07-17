import { useState } from "react";
import { site, instagramUrl } from "../data/site";

const links = [
  { href: "#video", label: "Vídeo" },
  { href: "#atores", label: "Atores" },
  { href: "#instagram", label: "Instagram" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="container nav__inner">
        <a href="#top" className="nav__logo">
          Improólicos<span>.</span>
        </a>

        <button
          className="nav__toggle"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>

        <div className={`nav__links ${open ? "nav__links--open" : ""}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
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
    </nav>
  );
}
