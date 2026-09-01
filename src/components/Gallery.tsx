import { useState } from "react";

// Galeria automática: apanha TODAS as imagens em src/assets/gallery/.
// Para adicionar fotos, basta largar os ficheiros (.jpg/.jpeg/.png) nessa pasta —
// aparecem aqui sozinhas, por ordem alfabética do nome do ficheiro.
const modules = import.meta.glob(
  "../assets/gallery/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
  { eager: true, query: "?url", import: "default" }
) as Record<string, string>;

const images: string[] = Object.keys(modules)
  .sort()
  .map((k) => modules[k]);

export default function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  // Se ainda não houver fotos, não mostra a secção.
  if (images.length === 0) return null;

  return (
    <section className="section gallery" id="galeria">
      <div className="container">
        <span className="section__label">MOMENTOS</span>
        <h2 className="section__title">
          Nós, <em>em ação</em>
        </h2>
        <p className="section__intro">
          Palco, plateia e o caos no meio. Uma amostra das nossas noites.
        </p>

        <div className="gallery__grid">
          {images.map((src, i) => (
            <button
              key={src}
              className="gallery__tile"
              onClick={() => setActive(src)}
              aria-label={`Ver foto ${i + 1}`}
            >
              <img src={src} alt={`Improólicos Anónimos — momento ${i + 1}`} loading="lazy" />
            </button>
          ))}
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
