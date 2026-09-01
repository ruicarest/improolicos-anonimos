export interface ActorSocials {
  instagram?: string;
  tiktok?: string;
  youtube?: string;
}

export interface Actor {
  name: string;
  /** Ex.: "Ator & Fundador", "Improvisador" */
  role: string;
  bio: string;
  /** Caminho para a foto em /public/actors, ex.: "/actors/sergio.jpg".
   *  Se ficar vazio, mostra um placeholder com as iniciais. */
  photo?: string;
  socials: ActorSocials;
}

// TODO: substituir bios e fotos pelas reais.
// Para adicionar a foto: coloca o ficheiro em public/actors/ (ex.: sergio.jpg)
// e preenche o campo "photo" com "/actors/sergio.jpg".
export const actors: Actor[] = [
  {
    name: "Sérgio",
    role: "Improvisador",
    bio: "O mais sensual do grupo — e faz questão de que ninguém se esqueça.",
    photo: "/actors/sergio.jpg",
    socials: { instagram: "sergio_sa89" },
  },
  {
    name: "Diogo",
    role: "Improvisador",
    bio: "É um macaco. É essa a bio, é essa a energia.",
    photo: "/actors/diogo.jpg",
    socials: { instagram: "josediogobpinto" },
  },
  {
    name: "Luís",
    role: "Improvisador",
    bio: "Um experiencialista nato — se ainda não fez, já está a pensar como. Atira o «bora lá» antes de perguntar como é que aquilo se faz. No improviso encontrou o sítio perfeito para arriscar, confiar nos outros e, sobretudo, divertir-se.",
    photo: "/actors/luis.jpg",
    socials: { instagram: "luis_onearth" },
  },
  {
    name: "Rui",
    role: "Improvisador",
    bio: "Vem do stand-up e não larga o humor por nada. Curioso por natureza, gosta de experimentar de tudo um pouco — e em palco entrega-se de cabeça à próxima gargalhada.",
    photo: "/actors/rui.jpg",
    socials: { instagram: "ruicardosoesteves" },
  },
];
