# Duas imagens e aproximação por escala

Direção solicitada em 4/11/2026: uma arte ampla de fora da loja e uma arte do interior real. As imagens ficam fixas em uma composição sobreposta. A fachada tem um recorte na abertura da porta, pelo qual aparece o interior. A rolagem altera somente a escala em um ponto fixo; não há sequência de novas perspectivas ou dissolução entre cenas.

## Artes ativas

- `originais/fachada-ampla.png`: expansão da variação gerada da fachada V8.02, com a casa inteira e respiro cru acima, seguindo a referência de enquadramento fornecida pelo usuário. Portão e porta permanecem abertos; mosaico floral, cadeiras de fios e letreiro VERDE 1973 preservados.
- `originais/interior-real.png`: gerada diretamente do frame real `../2026-11-03/selecionados/12-interior-revelado-f0464.png`. A fotografia é a autoridade de enquadramento, perspectiva e disposição dos móveis. A fachada foi anexada apenas como referência de traço e paleta. Pessoa retirada; ambiente real convertido em tinta verde sobre cru.

A comparação da foto real com a ilustração foi feita lado a lado e permanece no acervo local de criação. O vídeo, os frames reais e esse comparativo não são versionados; as referências de fonte no manifesto e nos prompts identificam os arquivos locais usados no trabalho.

Uma tentativa anterior de reconstruir um interior mais aberto mudou indevidamente o ponto de vista. Foi rejeitada pelo usuário e arquivada em `estudos/`, fora dos ativos publicados. O estudo de detalhe intermediário também foi descartado. A composição ativa usa **somente duas imagens**.

Os dois PNGs foram gerados pelo `image_gen` integrado e têm **1672×941 pixels nativos**. O gerador não entregou o tamanho 4K mencionado como alvo em um dos prompts. As versões WebP preservam a composição; nenhuma reconstrução ou recorte do desenho foi feito nos arquivos por código. O recorte da porta é feito na composição do navegador. A nitidez de ampliações extremas da fachada continua limitada pela resolução do bitmap; não se declara detalhe novo onde a fonte não o contém.

## Composição e eixo

`src/arrival-portal.js` define o recorte da passagem entre os painéis da porta, medido no desenho amplo: x=779…857, y=544…716. O ponto de escala fica em **50% da largura e 66% da altura do palco**, constante ao longo da rolagem. Os dois elementos usam esse mesmo ponto na tela, com transformações `scale(...)`, sem rotação, troca de enquadramento ou pan entre imagens.

A imagem interna é recortada pela abertura projetada da fachada. A escala dela garante o preenchimento dessa janela; ao ampliar, a fachada sai do quadro e o interior ocupa a tela. Trata-se de composição 2D, conforme a técnica descrita pelo usuário, não de uma reconstrução arquitetônica 3D.

Para corrigir os fragmentos relatados na volta do scroll, `arrival-renderer.js` redesenha integralmente um único canvas limitado ao viewport. A cada quadro, o buffer é limpo, recebe o cru `#E2DEC5` e compõe as duas artes no recorte. Somente a região visível das imagens ampliadas é amostrada, evitando superfícies de renderização gigantes. O ponto de escala e os cálculos de aproximação foram preservados.

O papel claro dos bitmaps é convertido em transparência na preparação em memória; a tinta permanece verde `#033625`, com suas intensidades de traço. Uma margem externa estreita suaviza o fim dos traços no fundo cru. Assim, não há retângulo opaco de papel em torno da arte. A preparação ocorre uma vez por fonte e também alimenta o modo sem movimento. Os arquivos originais não foram modificados.

A seção continua com 500svh, ou quatro alturas de tela de deslocamento nativo. O interior fica completamente revelado até 86% do percurso. O modo sem movimento mostra as duas artes em fluxo estático. Título, marca, navegação e contatos permanecem aplicados em HTML.

## Verificação

Os testes `tests/arrival-portal.test.mjs` verificam ponto de escala compartilhado, ausência de rotação/pan, ampliação monotônica, preenchimento contínuo da abertura, chegada ao interior, existência das duas imagens e transparência do papel. O build e oito testes passaram após a correção. A composição foi inspecionada no navegador integrado no plano inicial, durante a aproximação, no interior e ao voltar.

Em viewport largo 1860×842, a impressão digital amostrada do canvas foi igual na ida e na volta tanto na abertura quanto no trecho intermediário. Em 390×844 com DPR 2, o retorno à abertura também produziu a mesma impressão digital. O modo sem movimento mostrou duas artes, com cantos transparentes. A inspeção usa pixels da cena, leitura de estado e comparação visual; não é uma certificação de todos os navegadores/dispositivos. A comparação de fidelidade usa o próprio frame real, não a ilustração interna rejeitada.

O servidor de desenvolvimento já aberto nesta sessão continua na porta 4380 para revisão local. Não houve publicação.

## Ativos publicados

O hero usa apenas `arrival-portal-wide.webp` e `arrival-portal-real-interior.webp`. As 28 versões antigas do hero e um favicon sem referência foram movidos para o acervo local em `estudos/public-orfaos/`, com hashes preservados. O histórico não deve ficar em `public`, mesmo que ignorado pelo Git, pois o Vite copia esse diretório para o build.

As quatro ilustrações de memórias e a arte 06 da transição posterior continuam em uso nas outras seções. Após a limpeza há 47 arquivos ativos no diretório público. O build audita referências no JavaScript/HTML/CSS compilados, arquivos públicos copiados e mídias restantes no artefato, falhando se encontrar órfãos, faltantes ou divergências. A verificação independente também pode ser executada com `npm run audit:assets` após um build recente.
