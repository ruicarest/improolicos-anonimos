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
    bio: "O improviso foi a sua primeira experiência artística em palco — tirando o ocasional karaoke, que ficará para outra biografia. No improviso, descobriu que gosta de não saber o que vai acontecer a seguir. Nos jogos, também é sempre escolhido para ser o assassino. Começa a haver um padrão.",
    photo: "/actors/sergio.jpg",
    socials: { instagram: "sergio_sa89" },
  },
  {
    name: "Diogo",
    role: "Improvisador",
    bio: "É incapaz de deixar um trocadilho por fazer. Se uma palavra tiver dois sentidos, ele vai encontrar o pior deles — e insistir. Em palco, uma frase pode começar perfeitamente normal e acabar num sítio onde ninguém estava à espera. Incluindo ele.",
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
