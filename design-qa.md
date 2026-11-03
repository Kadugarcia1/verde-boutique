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
