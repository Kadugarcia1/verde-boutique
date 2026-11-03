# Verde Boutique — direção vigente

## Objetivo e fontes

Site institucional da Verde Boutique, multimarcas desde 1973: moda, cultura, encontros e memória. Sem catálogo comercial, preços, carrinho ou checkout. Fonte de identidade: `C:/Projects/carloseduardogarcia/verde-boutique/BrandBook VERDE.pdf`, logo, aplicações, ilustração oficial da casa e acervo fornecido. Não inventar datas de fotos, pessoas, endereço ou fundadores.

Brunello Cucinelli AI orienta o ritmo espacial e os respiros; Nicholson, Sézane e Kinfolk orientam clareza, proximidade e edição. A referência Cucinelli foi percorrida em 38 capturas e revisitada em cinco capturas. Nenhum ativo ou elemento cultural dessa marca integra o site.

## Decisões mais recentes do usuário — prevalecem sobre versões anteriores

- Fundo contínuo **cru `#E2DEC5`**, com traço verde `#033625`. Não acrescentar branco aos cenários. A seção final de detalhes em verde permanece conforme o usuário aprovou as últimas seções.
- **Quatro** perspectivas no hero: plano amplo externo → dentro dos portões → porta entre as colunas → interior atual. Esta orientação substitui o limite anterior de três perspectivas.
- Copy: **“Uma loja. Muitas Histórias”**. Título menor, subtítulo com respiro. Retirado “Entre no universo Verde”.
- Aproximação por rolagem nativa, com imagens distintas e dissolução. Sem setas, bolinhas, contador ou controles locais de slides no hero e no percurso de memórias. A navegação global dos cinco capítulos é independente e permanece.
- Cabeçalho e rodapé transparentes em todos os estados. A interface flutua sem faixas opacas; cores reais verde/cru conforme a superfície.
- Respiro cru com “Os lugares guardam o tempo. As pessoas levam as histórias.” entre entrada e memórias.
- Percurso horizontal ilustrado com as quatro fotos confirmadas: fachada antiga, desfile, interior antigo e outdoor. As vinhetas se sobrepõem pelas margens abertas, sem cartões. Depois aparecem as **quatro fotografias reais** correspondentes.
- Transição suave para o interior atual, seguida de **6 looks**, **8 detalhes**, filmes e **6 marcas**. Grades simétricas; arquivos distintos em cada grade.
- Sem legendas nas imagens, nos logos ou na galeria. Removidos os parágrafos descritivos dos títulos “Um jeito de vestir. Muitas formas de ser.” e “A beleza está em cada detalhe.”. Os pequenos indicadores editoriais acima dos títulos permanecem.

## Identidade e tratamento técnico

| Papel | Definição |
|---|---|
| Verde | `#033625` |
| Cru | `#E2DEC5` |
| Títulos | Cormorant Garamond 600 / itálico |
| Corpo e interface | Montserrat 400 / 500 |
| Logo | Arte fornecida, sem redesenho |

Beachwalk e Leona constam do brandbook; arquivos licenciados para web não foram fornecidos. Montserrat é a família de apoio oficial do brandbook. Cormorant Garamond é a substituta livre provisória para títulos, ainda sujeita à escolha final da marca. Os HEX impressos na página de paleta divergem dos preenchimentos vetoriais; seguimos as cores efetivas e aplicações do PDF.

`IllustrationPalette.jsx` remapeia exclusivamente os desenhos para os extremos verde/cru, mantendo hachuras e alfa. Isso corrige o branco residual das paredes/colunas geradas e iguala porta e interior. Antialiasing produz tons intermediários da mesma tinta, sem uma terceira cor de superfície. Fotografias, vídeos e logos não recebem esse filtro. PNGs originais e prompts exatos permanecem no pacote de criação; o navegador aplica o ajuste final de paleta.

Logos em PNG com transparência, sem cartões ou nomes abaixo: Levi’s, Insider, Cantão, Shoulder, Aramis e Individual, confirmados pelo usuário. Levi’s veio de SVG; Aramis já tinha alfa. Cantão, Shoulder, Individual e Insider receberam extração de fundo pelo gerador. O monograma em escudo de `images.png` foi confirmado como Individual pelo usuário em 3/11/2026. Não se atribui uma peça fotografada a uma marca sem evidência.

## Movimento, mídia e acesso

Hero: 380svh, quatro vistas com dissoluções e aproximação discreta. Memórias: 340svh no desktop / 320svh no mobile, com deslocamento horizontal vinculado à rolagem vertical. Nenhum evento bloqueia roda ou toque. A saída se dissolve no mesmo cru. Modo de leitura e `prefers-reduced-motion` mostram todos os desenhos em fluxo estático.

Acervo real: 4 cards; moda: 6; detalhes: 8. Desktop com 4/3/4 colunas respectivamente; mobile com duas. Galeria acessível com 20 fotos integrais, teclado, Escape e retorno de foco. As setas da galeria de fotos permanecem; não são controles dos percursos imersivos.

Acima de “Diferentes olhares. Um universo Verde.”: três vídeos verticais simultâneos no desktop (Ff.06/07/08). Mobile usa **20 segundos de Giro 53.mov, do segundo 6 ao 26**, sem áudio. Esta escolha substitui o Giro anterior. MP4 H.264 720×1280, sem trilha de áudio. Pausam fora de vista/aba oculta; controle de pausa disponível. Redução de movimento e modo leitura usam posters sem reprodução automática.

Áudio extraído de IMG_9804.MP4, preservado em AAC/M4A, duração 125,728 s. Começa **somente ao ativar música**, volume inicial 28%, com pausa e loop. Sem autoplay com áudio. Arquivos originais preservados fora do site publicado.

Contatos fornecidos: Instagram `https://www.instagram.com/verdeboutique/`, telefone `+55 19 99700-1777`, e-mail `verdeboutique1973@gmail.com`. Favicon derivado da folha oficial fornecida; variante legível em 16/32 px e ícone Apple.

## Arquivos e entrega

Interface: `src/Journal.jsx`, `ArrivalJourney.jsx`, `MemoryJourney.jsx`, `BrandFilms.jsx`, `AmbientAudio.jsx`, `IllustrationPalette.jsx`. Tokens/layout: `src/journal.css`. Fotos/marcas: `src/content.js`.

Prompts: `docs/PROMPTS.md` e `docs/prompts/` no site preparado; no pacote de criação estão em `../PROMPTS.md` e `../prompts/`. Ativos de entrada: 13–16; memórias: 09–12; interior de transição: 06. As gerações antigas ficam como histórico, não como sequência atual.

Destino local solicitado: `C:/Projects/carloseduardogarcia/verde-boutique/Site`. Repositório: `https://github.com/Kadugarcia1/verde-boutique`. Vercel deve usar a conta/equipe indicada pelo usuário, nunca a equipe Vetra por inferência. `vercel.json` publica `dist/client` após `npm run build`; nenhum segredo ou variável de ambiente é necessário.

`design-qa.md` registra a conferência funcional/visual. A revisão adversarial contra o brandbook deve distinguir exigências documentadas, escolhas aprovadas pelo usuário e hipóteses de revisão. Ilustrações são interpretações, não registros documentais da história.

## Correção da revisão adversarial

Removido mix-blend-mode:difference, que produzia azul-marinho fora da paleta. Interface usa verde real sobre cru e cru sobre a seção verde. Cabeçalho e rodapé avaliam suas próprias posições para mudar a tinta na passagem de fundo. A silhueta oficial do logo é preservada e recolorida por filtro SVG para os HEX aprovados, mantendo alfa e proporção.

As quatro ilustrações de memórias são solicitadas juntas apenas quando a seção está a até 150% da altura de viewport, preservando a continuidade e aliviando a carga inicial.
