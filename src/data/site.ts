// Configuração central do site — edita aqui os dados principais.
export const site = {
  name: "Improólicos Anónimos",
  tagline: "Teatro de Improviso",
  // Frase curta de impacto para o hero.
  hook: "Comédia 100% improvisada. Nada é preparado, tudo pode acontecer.",
  instagram: "improolicosanonimos",
  email: "improolicosanonimos@gmail.com", // TODO: confirmar o email real
  // Vídeos do YouTube. O "id" é a parte a seguir a "watch?v=" (ou a seguir a youtu.be/).
  // O "title" é opcional — se preenchido, aparece como legenda por baixo do vídeo.
  videos: [
    { id: "rNe6mfGKCxw", title: "" },
    { id: "A4JLXmtASu4", title: "Sala de Confissões ou Assassino" },
  ] as { id: string; title?: string }[],
};

export const instagramUrl = `https://instagram.com/${site.instagram}`;
