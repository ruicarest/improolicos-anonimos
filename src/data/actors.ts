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
    name: "Sérgio Sá",
    role: "Improvisador",
    bio: "Especialista em criar o caos e depois fingir que era tudo planeado. Se há uma cena a descarrilar, ele está a conduzir o comboio.",
    photo: "",
    socials: { instagram: "sergio_sa89" },
  },
  {
    name: "José Diogo Pinto",
    role: "Improvisador",
    bio: "O mestre das personagens improváveis. Consegue transformar uma sugestão do público num universo inteiro em três segundos.",
    photo: "",
    socials: { instagram: "josediogobpinto" },
  },
  {
    name: "Luís",
    role: "Improvisador",
    bio: "Timing cirúrgico e uma cara de pau que aguenta qualquer disparate. O público nunca sabe o que aí vem — e ele também não.",
    photo: "",
    socials: { instagram: "luis_onearth" },
  },
  {
    name: "Rui Cardoso Esteves",
    role: "Improvisador & Fundador",
    bio: "Junta a comédia ao improviso e ainda arranja tempo para tratar da logística. Em palco, garante que ninguém fica de fora da piada.",
    photo: "",
    socials: { instagram: "ruicardosoesteves" },
  },
];
