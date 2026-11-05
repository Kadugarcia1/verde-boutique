# Verde Boutique — direção vigente

## Objetivo e fontes

Site institucional da Verde Boutique, multimarcas desde 1973: moda, cultura, encontros e memória. Sem catálogo comercial, preços, carrinho ou checkout. Fonte de identidade: `C:/Projects/carloseduardogarcia/verde-boutique/BrandBook VERDE.pdf`, logo, aplicações, ilustração oficial da casa e acervo fornecido. Não inventar datas de fotos, pessoas, endereço ou fundadores.

Brunello Cucinelli AI orienta o ritmo espacial e os respiros; Nicholson, Sézane e Kinfolk orientam clareza, proximidade e edição. A referência Cucinelli foi percorrida em 38 capturas e revisitada em cinco capturas. Nenhum ativo ou elemento cultural dessa marca integra o site.

## Decisões mais recentes do usuário — prevalecem sobre versões anteriores

- Fundo contínuo **cru `#E2DEC5`**, com traço verde `#033625`. Não acrescentar branco aos cenários. A seção final de detalhes em verde permanece conforme o usuário aprovou as últimas seções.
- Entrada ativa: **somente duas imagens grandes**, uma de fora e outra de dentro da loja. A externa mostra a casa inteira, com a variação gerada preservada e amplo respiro cru superior. A interna parte diretamente do frame real do vídeo, preservando o ambiente fotografado, sem reconstruir uma sala nova. Desenho 2D em verde sobre cru, somente o ambiente, **sem pessoas ou animais**. Esta direção substitui tanto a seleção 02 → 04 → 09 → 11 quanto a proposta de trocar entre 12 perspectivas; a biblioteca anterior permanece como histórico.
- Correção de continuidade de 4/11/2026: piso da varanda em mosaico contínuo de cacos cerâmicos, flores de **quatro lóbulos** com o mesmo desenho, duas cadeiras de fios com concha oval e pernas finas nas mesmas posições. Não alternar flores com quadrados, círculos ou outras rosetas, nem trocar cadeiras de fios por palhinha, couro ou madeira. A cadeira de palhinha do salão é um objeto distinto. O letreiro físico **VERDE 1973** permanece na faixa acima do arco nas vistas 01–03 e sai naturalmente pelo recorte superior nas aproximações seguintes. Essa inscrição arquitetônica é uma exceção à restrição de texto novo nas ilustrações.
- A composição é sobreposta: fachada na frente, com recorte na abertura da porta, e interior atrás. A rolagem apenas amplia as duas imagens em torno de um ponto fixo na tela, sem mudança de eixo, rotação ou troca de vistas. A chegada ao salão ocorre dentro de quatro a cinco rolagens de tela: seção de **500svh** incluindo o viewport fixado; **quatro alturas de tela de deslocamento**. O interior está totalmente revelado até 86% desse deslocamento.
- Copy: **“Uma loja. Muitas Histórias”**. Título menor, subtítulo com respiro. Retirado “Entre no universo Verde”.
- Aproximação por rolagem nativa e escala da composição fixa de duas imagens, sem dissolução de uma perspectiva em outra. Sem setas, bolinhas, contador ou controles locais de slides no hero e no percurso de memórias. A navegação global dos cinco capítulos é independente e permanece.
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

Hero: 500svh no desktop e no mobile. `src/arrival-portal.js` define as duas artes, o recorte da porta e o ponto de escala constante em 50% da largura/66% da altura do palco. A fachada cresce em primeiro plano, revelando a imagem interna através do recorte; não há troca de perspectivas. O interior está revelado até 86% do percurso e a saída para cru ocorre de 95% a 100%. Um véu cru suave mantém a leitura do texto inicial e dos controles globais; cabeçalho e rodapé continuam transparentes. Memórias: 340svh no desktop / 320svh no mobile, com deslocamento horizontal vinculado à rolagem vertical. Nenhum evento bloqueia roda ou toque. Modo de leitura e `prefers-reduced-motion` mostram as duas artes em fluxo estático.

Correção de retorno do scroll e integração ao fundo: a entrada é recomposta integralmente em um canvas 2D do tamanho do viewport a cada posição, usando as mesmas duas imagens e a mesma geometria. `src/arrival-renderer.js` prepara as artes como tinta verde com alfa, retirando o papel claro e suavizando somente os limites externos. O canvas é limpo e preenchido com o cru exato antes de cada composição. Não usar filtro SVG de grupo, superfícies CSS gigantes ampliadas ou alternância de visibilidade para pintar a fachada da entrada; essa combinação apresentou fragmentos na volta. O modo estático usa as mesmas artes com papel transparente. Os PNGs/WebPs originais permanecem intactos.

Acervo real: 4 cards; moda: 6; detalhes: 8. Desktop com 4/3/4 colunas respectivamente; mobile com duas. Galeria acessível com 20 fotos integrais, teclado, Escape e retorno de foco. As setas da galeria de fotos permanecem; não são controles dos percursos imersivos.

Acima de “Diferentes olhares. Um universo Verde.”: três vídeos verticais simultâneos no desktop (Ff.06/07/08). Mobile usa **20 segundos de Giro 53.mov, do segundo 6 ao 26**, sem áudio. Esta escolha substitui o Giro anterior. MP4 H.264 720×1280, sem trilha de áudio. Pausam fora de vista/aba oculta; controle de pausa disponível. Redução de movimento e modo leitura usam posters sem reprodução automática.

Áudio extraído de IMG_9804.MP4, preservado em AAC/M4A, duração 125,728 s. Começa **somente ao ativar música**, volume inicial 28%, com pausa e loop. Sem autoplay com áudio. Arquivos originais preservados fora do site publicado.

Contatos fornecidos: Instagram `https://www.instagram.com/verdeboutique/`, telefone `+55 19 99700-1777`, e-mail `verdeboutique1973@gmail.com`. Favicon derivado da folha oficial fornecida; variante legível em 16/32 px e ícone Apple.

Rodapé institucional: CNPJ **46.966.297/0001-45**, endereço **Rua 7 de Setembro, 136 — Centro, Pirassununga, São Paulo, CEP 13631-068**, fornecidos pelo usuário em 4/11/2026. O Google Maps aparece integrado, com carregamento tardio e link para abrir o endereço. Crédito exato **“Feito por Garcia Co”**, ligado a `https://garciaco.com.br`. O rodapé fica no fechamento da página, em cru/verde e com espaço para os controles fixos; o mapa usa sua cartografia original, sem o filtro das ilustrações. Dados apresentados conforme fornecidos, sem criação de razão social ou horários.

## Arquivos e entrega

Interface: `src/Journal.jsx`, `ArrivalJourney.jsx`, `MemoryJourney.jsx`, `BrandFilms.jsx`, `AmbientAudio.jsx`, `IllustrationPalette.jsx` e `BusinessFooter.jsx`. Tokens/layout: `src/journal.css`. Fotos/marcas: `src/content.js`.

Prompts: `docs/PROMPTS.md` preserva o histórico. Artes, fontes e prompts vigentes da entrada: `docs/entrada-continua/2026-11-04-portal/`. Os únicos ativos usados pelo hero são `arrival-portal-wide.webp` e `arrival-portal-real-interior.webp`. A tentativa de interior reconstruído e o estudo intermediário foram descartados, sem uso na interface. A biblioteca V8 e a seleção anterior ficam preservadas como histórico. Memórias: 09–12; interior da transição posterior: 06.

Publicação do código: os dois PNGs aprovados, seus WebPs, prompts e manifesto são versionados. Vídeo de origem, frames reais, comparativos com pessoas e gerações substituídas permanecem no acervo local de criação, ignorado pelo Git. Os nomes históricos nesses registros descrevem etapas anteriores, não ativos exigidos pelo build atual.

Limpeza de `public`: retirados 28 desenhos antigos do hero (13–16, V7 e V8) e o `favicon.png` sem referência, preservados no acervo local `docs/entrada-continua/2026-11-04-portal/estudos/public-orfaos/`. A primeira seção usa somente as duas artes definitivas. As quatro ilustrações de memórias e `06-interior-da-verde.webp` continuam porque pertencem às demais seções. Os ícones efetivamente ligados pelo HTML também permanecem. `npm run build` executa `scripts/audit-public-assets.mjs` sobre o artefato gerado; todos os 47 arquivos de `public` têm referência, e o build não admite mídia órfã ou cópia divergente.

Destino local solicitado: `C:/Projects/carloseduardogarcia/verde-boutique/Site`. Repositório: `https://github.com/Kadugarcia1/verde-boutique`. Vercel deve usar a conta/equipe indicada pelo usuário, nunca a equipe Vetra por inferência. `vercel.json` publica `dist/client` após `npm run build`; nenhum segredo ou variável de ambiente é necessário.

`design-qa.md` registra a conferência funcional/visual. A revisão adversarial contra o brandbook deve distinguir exigências documentadas, escolhas aprovadas pelo usuário e hipóteses de revisão. Ilustrações são interpretações, não registros documentais da história.

## Correção da revisão adversarial

Removido mix-blend-mode:difference, que produzia azul-marinho fora da paleta. Interface usa verde real sobre cru e cru sobre a seção verde. Cabeçalho e rodapé avaliam suas próprias posições para mudar a tinta na passagem de fundo. A silhueta oficial do logo é preservada e recolorida por filtro SVG para os HEX aprovados, mantendo alfa e proporção.

As quatro ilustrações de memórias são solicitadas juntas apenas quando a seção está a até 150% da altura de viewport, preservando a continuidade e aliviando a carga inicial.
