# Improólicos Anónimos — Website

Site de uma página (React + TypeScript + Vite + Sass) para divulgação do grupo
de teatro de improviso.

## Como correr

```bash
npm install
npm run dev      # servidor local (http://localhost:5180)
npm run build    # gera a versão de produção na pasta dist/
npm run preview  # pré-visualiza a build de produção
```

## Onde editar o quê

Quase tudo o que vais querer mudar está em **`src/data/`**:

| Ficheiro | O que contém |
| --- | --- |
| `src/data/site.ts` | Nome, tagline, **email**, **@ do Instagram** e o **ID do vídeo do YouTube** |
| `src/data/actors.ts` | Os 4 atores: nome, descrição, foto e redes sociais |

### Trocar o vídeo do YouTube
Em `src/data/site.ts`, muda o campo `youtubeId`.
Se o link do vídeo for `https://www.youtube.com/watch?v=ABC123`, o ID é `ABC123`.

### Adicionar as fotos dos atores
1. Põe a foto em `public/actors/` (ex.: `public/actors/sergio.jpg`).
2. Em `src/data/actors.ts`, preenche o campo `photo` desse ator com
   `"/actors/sergio.jpg"`.
Enquanto o campo estiver vazio, aparece um placeholder com as iniciais.

### Posts reais do Instagram
Um site estático não lê o Instagram diretamente. Para mostrar os posts reais,
a forma mais simples é um widget gratuito (ex.: **Behold.so**, **LightWidget**
ou **EmbedSocial**): copias o código de incorporação e colas na grelha em
`src/components/InstagramSection.tsx`. As instruções estão em comentário no topo
desse ficheiro.

## Estrutura

```
src/
  data/         → conteúdos editáveis (site.ts, actors.ts)
  components/   → secções (Navbar, Hero, VideoSection, Actors, ...)
  styles.scss   → estilos e tema (cores vermelho/amarelo no topo do ficheiro)
```

## Publicar online (grátis)
A pasta `dist/` (gerada por `npm run build`) é um site estático. Podes publicá-la
em **Netlify**, **Vercel** ou **GitHub Pages** arrastando a pasta ou ligando o
repositório. Se quiseres, peço ajuda para este passo.
