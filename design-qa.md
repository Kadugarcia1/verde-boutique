# Verde Boutique — QA da revisão 6

Status: **passed**, com ressalva tipográfica documentada. Conferência local concluída em 3 de novembro de 2026. A revisão adversarial independente está em docs/REVIEW-ADVERSO.md na cópia de entrega.

## Escopo final conferido

- Hero com quatro vistas distintas: externa, dentro dos portões, porta e interior. Copy “Uma loja. Muitas Histórias”, título reduzido, subtítulo separado e sem CTA. Zero botões/indicadores locais no hero e em memórias.
- Percurso de quatro memórias horizontal, seguido de quatro fotos reais. Transições com cru contínuo, sem introduzir branco. Grades 4/6/8 e seis parceiros, sem figcaption ou legendas visíveis.
- Header e footer com background computado rgba(0,0,0,0), sem blend. Verde RGB(3,54,37) no cru; cru RGB(226,222,197) no verde. Posições de cabeçalho/rodapé avaliadas independentemente para a troca de tinta. Logo preserva o alfa/proporção do arquivo oficial.
- Filtro duotone somente nas ilustrações. Fotos e marcas sem esse filtro. Quatro memórias sem src na abertura; carregamento conjunto antecipado quando a seção se aproxima. Não há medida de LCP de campo nesta rodada.
- Desktop 1280×720 e celular 390×844 sem overflow horizontal; título móvel de 44px, com respiro e sem sobreposição à casa. Modo estático mostra quatro entradas e quatro memórias em fluxo, sem sticky/transform no percurso e sem reprodução automática dos vídeos.
- Três MP4 verticais simultâneos no desktop; fonte única no mobile com Giro de exatamente 20s. Todos muted e com **zero trilhas de áudio** confirmadas por ffprobe. Controle de pausa/reprodução, pausa fora de vista e aba oculta conferidos.
- Música AAC extraída de IMG_9804.MP4, 125,728 s, sem vídeo, preload none e sem autoplay. Ativação e pausa pelo visitante conferidas; volume inicial 28%. Prévia deixada com som desligado.
- Instagram, telefone e e-mail correspondem aos dados fornecidos. Favicon PNG/ICO e Apple presentes. Logos PNG com alfa real. O usuário confirmou o monograma da Individual em 3/11/2026.
- Galeria: abertura, seta por teclado, Escape e retorno de foco conferidos na rodada. Menu móvel e navegação por capítulos mantidos. Redução de movimento testada por emulação no navegador e modo de leitura; nenhuma alegação de certificação WCAG completa.

## Verificação técnica

`npm ci --offline --no-audit --no-fund` executado na pasta definitiva Site. `npm run build` passou; `npm run test:sites` passou com 4/4 testes. Saída Vercel: dist/client. Os arquivos de compatibilidade do template foram preservados.

## Fonte comparada ao resultado

`v6-final-fonte-render.jpg` reúne a arte gerada e a captura real final no mesmo quadro. Comparação visual: arquitetura e perspectiva preservadas; título e identidade aplicados em HTML; zonas de respiro mantidas. A remapagem de superfícies brancas para cru é intencional. Não se alega equivalência pixel a pixel entre fonte e tela.

Evidências no pacote de criação em prototipo/evidencias: v6-final-13-hero-final.png, 02-porta.png, 03-interior.png, 04-respiro.png, 05-memorias-sem-controles.png, 07-detalhes-paleta-oficial.png, 08-filmes-desktop.png, 09-contatos.png, 10-mobile-hero.png, 11-giro-mobile.png e 12-leitura-mobile.png. As capturas 02–05 são anteriores à correção da cor do logo; documentam os desenhos/transições. Para a paleta final, usar 07 e 13.

## Limites e ressalvas

Cormorant Garamond permanece como substituta livre dos títulos: Beachwalk/Leona do brandbook dependem dos arquivos/licenças web ou ratificação dessa escolha. Montserrat é oficial. Não houve ensaio em Safari/iPhone físico, leitor de tela real, rede móvel limitada ou métricas de campo. Texto fixo sobre fotografias exige conferência adicional de contraste nas várias passagens. Este QA não atesta publicação; registrar o resultado do GitHub/Vercel em docs/ENTREGA.md após confirmação das ferramentas.

## Atualização — Giro 53 no mobile

Por solicitação do usuário, o vídeo móvel foi substituído por Giro 53.mov, recorte de 00:06 a 00:26, mantendo 20 s. Exportação H.264, 720×1280, 30 fps, 600 frames, faststart e zero trilhas de áudio, verificados por ffprobe. Poster extraído do primeiro frame do recorte. Nome de arquivo novo evita reutilização do vídeo antigo em cache. Os três filmes desktop e a música ambiente independente permanecem como antes.

Verificação desta atualização: build e 4/4 testes passaram; em 390×844 o navegador carregou apenas o novo Giro 53, com duração 20 s, muted, reprodução e pausa funcionando e sem overflow horizontal.

## Revisão 7 — entrada contínua ilustrada a partir do vídeo

Solicitação posterior do usuário: manter a linguagem 2D verde/cru, compor a tela inteira e chegar ao interior em quatro a cinco rolagens, somente com o ambiente. Foram geradas 12 ilustrações a partir dos frames do mesmo vídeo, usando o quadro 09 como referência comum de traço. Pessoa do balcão e cachorro da varanda retirados; conferência visual de todos os quadros em tamanho integral e prancha. O primeiro quadro foi refinado para manter o plano mais distante e evitar recuo entre posições. Geração pelo `image_gen` integrado; originais e prompts exatos em `docs/entrada-continua/2026-11-03/`.

Ativos locais vigentes: `arrival-v7-01.webp` a `arrival-v7-12.webp`, 1672×941. A seção tem 500svh incluindo o viewport fixado, com quatro alturas de tela de deslocamento nativo. O último quadro está completo em 84% desse deslocamento, seguido de permanência e saída para cru em 95–100%. Não há zoom artificial distinto por quadro nem controles locais. Apenas as duas posições vizinhas são visíveis durante cada dissolução. Um véu cru leve mantém a leitura da identidade e navegação; cabeçalho/rodapé permanecem transparentes.

Verificação em Chrome headless isolado: desktop 1280×800 e celular 390×844, 12 imagens decodificadas, sem overflow horizontal, sem botões locais e sem exceções JavaScript observadas. **Quatro Page Downs nativos chegaram ao quadro 12**, com opacidade 1. Medido deslocamento total de quatro alturas de viewport. Redução de movimento ativa o fluxo estático com as 12 imagens e remove o palco fixado. Capturas de início, porta e interior foram inspecionadas após o refinamento da composição e da leitura sobre o desenho.

Evidência: `docs/entrada-continua/2026-11-03/evidencias/verificacao-interface-v7.json`, capturas `v7-desktop-*` e `v7-mobile-*`, logs de build e testes na mesma pasta. `npm run build`, `npm run test:sites` (4/4) e `git diff --check` aprovados nesta revisão. A checagem numérica de progressão confirmou ordem monotônica e chegada ao interior em 84%. Os PNGs originais, vídeo e frames reais ficam fora de `public/`.

Limites: esta é uma sequência de desenhos com dissoluções, não uma reconstrução 3D ou animação temporal validada por optical flow. Em celular, o cenário usa recorte central para preencher a tela. Não houve teste em aparelho físico, Safari, rede móvel limitada ou métrica de campo. A afirmação de quatro Page Downs descreve o teste executado; a distância de cada gesto de roda/toque depende do dispositivo. Alteração preparada e conferida localmente, sem publicação automática.

## Revisão 8 — correção de consistência visual, 4/11/2026

O usuário identificou falhas que a revisão visual anterior deixou passar: ausência das flores do piso nas primeiras imagens, quadrados e outros desenhos substituindo a mesma flor, cadeiras com modelos diferentes e ausência do letreiro físico VERDE 1973. O PASS técnico da revisão 7 não comprovava a identidade visual desses objetos.

Correções localizadas pelo gerador integrado nos quadros 01–07, guiadas pelas fotografias do vídeo e pelas referências corrigidas 03 e 05: mosaico contínuo de cacos cerâmicos na varanda; flor de quatro lóbulos com a mesma linguagem e material; duas cadeiras com concha oval de fios radiais e pernas finas nas posições da varanda; letreiro VERDE 1973 nas vistas 01–03. O quadro 07 teve uma segunda edição restrita à pequena porção da cadeira à direita para retirar a trama diagonal de palhinha e manter os fios radiais. Nas aproximações seguintes, piso externo, cadeiras e letreiro saem pelo recorte. Quadros 08–12 preservados, com hashes dos PNGs e WebPs idênticos aos da revisão 7.

Conferência visual dos PNGs e das pranchas antes/depois: mesmo tipo de piso e desenho floral, cadeiras de fios distintas da cadeira de palhinha do salão, letreiro presente nas três vistas da faixa superior e ausência de pessoas/animais. A inspeção verifica identidade visual e oclusões plausíveis; não atesta coincidência métrica dos desenhos ou reconstrução arquitetônica.

Arquivos da revisão: `docs/entrada-continua/2026-11-04-consistencia/`. O contrato visual, prompts exatos, originais, comparação V7/V8 e manifesto ficam nessa pasta. Os PNGs editados têm 1671×941; o ajuste adicional do quadro 07 resultou em 1670×941; os cinco preservados mantêm 1672×941. Não houve recorte ou retoque dos originais por código. A codificação WebP e as pranchas usam esses originais.

Integração: somente os 12 nomes de ativos foram atualizados para V8 em `arrival-sequence.js`; cálculo de rolagem, CSS e demais componentes preservados. `npm run build`, `npm run test:sites` (4/4) e `git diff --check` aprovados. No build final, Chrome isolado carregou as 12 imagens V8 em desktop 1280×800 e mobile 390×844, sem overflow horizontal ou exceções JavaScript. Quatro Page Downs chegaram ao quadro 12. Redução de movimento mostrou as 12 imagens em fluxo estático. O servidor estático de verificação foi encerrado ao término; o dev server não foi iniciado.

Evidências funcionais e de encerramento em `evidencias/verificacao-interface-v8.json` e `evidencias/servidor-temporario.json`. Os ativos são locais, sem publicação.

## Seleção 02 → 04 → 09 → 11 e demonstração de aproximação

A seleção posterior do usuário foi aplicada ao hero e ao modo de leitura: quatro vistas V8, mantendo a biblioteca completa de 12 entradas. Build e quatro testes do site passaram novamente. No navegador integrado, o build carregou exatamente `arrival-v8-02.webp`, `arrival-v8-04.webp`, `arrival-v8-09.webp` e `arrival-v8-11.webp`, todas decodificadas. O cálculo de rolagem foi preservado.

A demonstração na conversa compara as quatro vistas com o uso de todas as imagens em uma câmera simulada. Régua de posição, reprodução com chegada ao interior e alternância entre as duas opções foram conferidas no navegador integrado, sem erros JavaScript observados. Esta demonstração serve à escolha de movimento; não foi aplicada como substituição da seleção ativa nem atesta alinhamento geométrico final entre todos os desenhos.

## Composição de duas imagens — plano amplo e interior real

Direção posterior do usuário: duas imagens grandes, uma externa e uma interna, sobrepostas com recorte na entrada; a rolagem somente amplia as imagens em um ponto fixo. A abordagem anterior de trocar entre vistas foi abandonada. A arte externa ampla foi gerada preservando a variação V8 e conferida com a referência fornecida, mostrando a casa inteira. Uma primeira tentativa de ampliar/reconstruir o interior alterou indevidamente o ponto de vista e foi rejeitada pelo usuário. Esse candidato e o estudo intermediário foram arquivados fora de `public/` e não integram a composição.

A imagem interna ativa foi refeita com o frame real `12-interior-revelado-f0464.png` como alvo principal da edição. A externa serviu apenas para traço e paleta. Conferência lado a lado da foto e da ilustração: disposição reconhecível de arara esquerda, prateleiras, cadeira de madeira, vaso, cadeira de palhinha recortada em primeiro plano, cadeira de couro ao fundo, mesas, árvore, balcão e arara direita; pessoa removida. A comparação documenta uma interpretação desenhada da fonte, não igualdade pixel a pixel ou medição arquitetônica.

Ativos usados: `arrival-portal-wide.webp` e `arrival-portal-real-interior.webp`, com PNGs nativos de 1672×941. `ArrivalJourney.jsx` monta somente essas duas imagens. A fachada recebe o recorte da abertura entre os painéis da porta; a interna é revelada por essa abertura. Ambas usam apenas `scale(...)`, com ponto de escala compartilhado em 50% da largura e 66% da altura. Não há sequência de novas imagens, pan ou rotação. A paleta é aplicada ao conjunto depois do posicionamento das camadas.

Conferência no navegador integrado: duas imagens carregadas, plano externo inteiro, aproximação pelo recorte e chegada à interna corrigida. O eixo registrado permaneceu em (635, 475,2) px no palco observado de 1270×720; a fachada estava fora da tela ao final e o interior visível. Três testes focados verificam o mesmo ponto para as duas escalas, preenchimento da abertura e chegada até 86% em desktop largo, desktop comum e geometria mobile. `npm run build` e sete testes (três da composição e quatro existentes do site) passaram. O modo sem movimento renderiza as duas artes sem palco animado.

Fontes, prompts, PNGs, manifesto, comparação e evidências em `docs/entrada-continua/2026-11-04-portal/`. O dev server da sessão permanece ativo na porta 4380. Não houve publicação. A nitidez da fachada em ampliações extremas continua condicionada à resolução do bitmap; não se declara super-resolução ou reconstrução 3D.

## Correção — retorno do scroll e papel integrado ao fundo

O usuário relatou fragmentos retangulares na volta da aproximação e um retângulo de papel perceptível em torno da imagem. As capturas fornecidas são a evidência do defeito. A implementação usava filtro SVG sobre o grupo, recorte referenciado por SVG e imagens transformadas em superfícies grandes, alternando a visibilidade da fachada. Essa cadeia foi retirada da entrada, sem regenerar ou alterar os dois arquivos de arte.

A nova renderização compõe tudo em um único canvas 2D limitado ao viewport, limpa e pinta o cru antes de cada quadro e amostra somente a região visível de cada imagem. As fontes são preparadas uma vez como tinta verde com alfa; o papel claro torna-se transparente e os limites externos recebem suavização estreita. Não há camada CSS gigante ou filtro SVG sobre o grupo da entrada. Os mesmos cálculos mantêm o eixo, a abertura e a aproximação; o modo estático usa as mesmas fontes transparentes.

Conferência no navegador integrado com viewport 1860×842: abertura em scrollY=0, trecho intermediário em scrollY=1684, interior em scrollY=2947 e retorno nativo. Na versão final, fingerprints amostrados dos pixels do canvas coincidiram na abertura antes/depois (2478983237) e no meio antes/depois (732354355), com dimensões 1850×842 por conta do gutter. Em 390×844/DPR2, a abertura antes/depois também coincidiu (910391709), canvas de 780×1688. Não foram observados os blocos quebrados nessas voltas. O papel do palco foi medido como RGBA(226,222,197,255); no modo estático os cantos das duas artes são RGBA(0,0,0,0).

As comparações de pixels foram feitas após o contexto final com `willReadFrequently`; leituras exploratórias anteriores usaram outro backend de canvas e não integram essa comparação final. Fingerprint é uma amostra dos canais da cena, complementada pela inspeção visual, não um hash criptográfico de cada pixel. Redução de movimento mostrou duas artes estáticas. As emulações temporárias de viewport e mídia foram removidas.

O carregamento limpo final mostrou `canvas-2d`, arte pronta, um canvas sem filtro CSS e nenhum erro JavaScript capturado. Dois erros transitórios de HMR ocorreram enquanto os módulos ainda estavam sendo substituídos; não persistiram no carregamento limpo. Build, oito testes e `git diff --check` passaram. O servidor de desenvolvimento permanece ativo na porta 4380; sem publicação.

## Rodapé institucional — dados e mapa

Incluídos os dados fornecidos pelo usuário: CNPJ 46.966.297/0001-45, Rua 7 de Setembro, 136 — Centro, Pirassununga, São Paulo, CEP 13631-068. Crédito “Feito por Garcia Co” com link HTTPS para garciaco.com.br. Mapa Google integrado com carregamento `lazy`, título acessível e link de abertura no Maps usando o endereço completo. Nenhum horário ou razão social foi inventado.

Conferência no navegador integrado: o mapa carregou com o pin da Verde Boutique e a indicação de Rua 7 de Setembro, 136; link de crédito, `noopener noreferrer`, texto do CNPJ e endereço conferidos. Desktop e larguras 390 e 320 sem overflow horizontal; mapa de 343,2×280 em 390 e 281,6 px de largura em 320. Crédito com alvo de 44 px e respiro acima da navegação fixa. Emulação removida ao fim e nenhum erro JavaScript capturado. Build e oito testes passaram.
