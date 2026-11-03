# Prompts das imagens — Verde Boutique

Textos exatos enviados ao gerador de imagens do ChatGPT. Para testar no Gemini Nano Banana, use um prompt por vez e anexe as referências na ordem indicada. Confira os resultados entre modelos; as perspectivas são interpretações ilustradas, e não levantamentos arquitetônicos. As fotografias reais das modelos e do acervo não foram geradas.

## Arquivos ativos — revisão 6

Hero: **13, 14, 15, 16** (externa, dentro dos portões, porta, interior). Memórias: **09, 10, 11, 12** (fachada antiga, desfile, interior antigo, outdoor). O cenário 06 permanece na transição para o presente. As gerações 01–08 registram o processo anterior.

Os prompts abaixo são o histórico **exato**, inclusive instruções superadas de fundo branco/controles. A decisão final é cru `#E2DEC5` + verde `#033625`, quatro vistas, sem CTA ou controles locais. No site, o filtro SVG `IllustrationPalette.jsx` harmoniza paredes e colunas com o mesmo cru; os PNGs originais não incluem esse pós-tratamento. Para reproduzir o resultado em outro gerador, acrescente: “Todas as superfícies claras devem ser transparentes ou cru #E2DEC5; nenhuma parede branca; tinta apenas verde #033625, com hachuras e bordas abertas. Sem interface.”

## Referências por geração

| Geração | Imagens anexadas, em ordem |
|---|---|
| 01 | `fontes/illus_casa-01.png`; fotografia de fachada `fontes/Captura de tela 2026-11-03 113934.png`; `fontes/referencia-cucinelli-percurso.jpg` |
| 02 | `geradas/01-casa-panorama.png`; `fontes/01-a-casa-se-revela.png`; `fontes/03-o-tempo-e-os-encontros.png`; `curadoria-visual.jpg`; `fontes/identidade-e-percurso.jpg` |
| 03 | `geradas/02-direcao-unificada.png` |
| 04 | `geradas/03-cenario-sem-interface.png`; `fontes/illus_casa-01.png`; fotografia de fachada citada acima |
| 05 | Mesmas três referências de 04, seguidas por `geradas/04-casa-perspectiva-obliqua.png` |
| 06 | Fotografia do interior de 1600×900 anexada pelo usuário na conversa; `geradas/03-cenario-sem-interface.png` |
| 07 | `fontes/IMG_2784.JPG`; `geradas/06-interior-da-verde.png` |
| 08 | `geradas/03-cenario-sem-interface.png` |

A foto da fachada permanece somente como fonte arquitetônica e foi retirada da interface. A foto do interior da geração 06 está na conversa, sem caminho local informado. Use o original anexado ao reproduzir o prompt.

## 01-casa-panorama

```text
Use case: illustration-story
Asset type: cenário panorâmico para um site institucional imersivo da Verde Boutique, sem interface sobreposta.
Target dimensions: 2400 x 1350, landscape 16:9. Uma única imagem, sem quadros, sem montagem.

Referências anexadas, em ordem:
Imagem 1: illus_casa-01.png, ilustração oficial da casa; é a referência principal para arquitetura e linguagem de desenho.
Imagem 2: fotografia real frontal da mesma casa; usar somente para preservar proporções, cobertura, colunas, porta central, gradil e mureta.
Imagem 3: prancha com quatro capturas do site Brunello Cucinelli, fornecidas pelo usuário; referência apenas para profundidade de cenário e espaço de aproximação de câmera. Não reproduzir os edifícios, árvores europeias, esculturas, logos, textos ou layout desse site.

Pedido: criar um cenário ilustrado autoral que amplie horizontalmente o universo da casa da Verde. Manter a casa reconhecível e fiel à ilustração oficial, em vista frontal levemente elevada e sem distorção de grande angular. Casa térrea clara, telhas curvas, frontões ornamentais nos extremos, varanda com colunas, porta central, vegetação tropical junto à fachada, mureta de pedra e portão central. Não acrescentar cômodos ou andares.

Composição: a casa ocupa aproximadamente 62% da largura e está no terço central inferior. Reservar área de céu creme quase vazia no terço superior para aplicação posterior de texto em HTML. Estender organicamente o chão de calçada e vegetação lateral já presentes na referência. Folhagens brasileiras nas bordas inferiores, em camadas de primeiro plano, sem esconder a casa. O centro inferior deve sugerir uma aproximação visual até o portão. As margens precisam permitir um deslocamento suave de câmera. Evitar novos prédios ou uma rua geograficamente identificável: o entorno expandido é uma interpretação artística.

Estilo: desenho fino à mão em tinta verde escura #033625, pequenas irregularidades humanas, hachuras controladas e sombras leves. Fundo opaco creme quente #E2DEC5, textura de papel quase imperceptível. Apenas esses dois tons, sem branco puro, sem preto, sem 3D, sem efeito de maquete, sem aspecto fotorrealista. Sofisticado, acolhedor, brasileiro, com maturidade e memória. Usar a densidade de traços da ilustração oficial, mais arejada no céu. Não estilizar a casa como um palácio italiano.

Restrições: não gerar pessoas, roupas, produtos, letras, letreiros, marcas, números, logotipo, legendas, botão, campo de busca, borda ou marca d'água. A identidade visual e o texto serão aplicados separadamente. Não alterar elementos arquitetônicos comprovados. O resultado é uma ilustração de atmosfera, não uma reconstituição documental da vizinhança.

```

## 02-direcao-unificada

```text
Create realistic, production-quality UI designs with clear hierarchy, strong typography, intentional imagery, and purposeful spacing.

Use case: ui-mockup. Uma única direção revisada para o site institucional da Verde Boutique: "Uma casa, muitas histórias". Esta é a combinação das duas direções que o usuário escolheu, não uma nova rodada de opções.
Target dimensions: 1440 x 1024, desktop website viewport. Render only the website, no browser chrome or device bezel. Data anchor: 3 de novembro de 2026; a única data editorial visível deve ser 1973.

Cinco referências anexadas, em ordem:
1. Cenário panorâmico ilustrado da casa da Verde recém-gerado: usar como grande cenário de fundo, preservando casa, tinta verde e papel creme.
2. Proposta "A casa se revela": preservar a elegância do creme, verde escuro e o cuidado editorial.
3. Proposta "O tempo e os encontros": preservar o protagonismo da marca e a monumentalidade da tipografia; o verde profundo será usado nos capítulos seguintes.
4. Curadoria real de dez fotos: fachada antiga, desfile, interior, pessoas e modelos. São conteúdo dos próximos capítulos da mesma jornada; não colocar todas na abertura, não gerar novas roupas ou pessoas.
5. Prancha de identidade oficial e capturas de Brunello Cucinelli: logo Verde e cores são fontes da marca; as capturas de Cucinelli explicam somente uma navegação que percorre um cenário, aproxima a câmera e revela fotografias em sequência. Não copiar símbolos, textos, o campo de conversa, arquitetura italiana ou elementos culturais da outra marca.

Tela principal no início do percurso: o visitante entra em um universo ilustrado que ocupa toda a tela. A casa desenhada fica grande no centro inferior, com vegetação orgânica nas laterais e área superior arejada. Não usar uma imagem num cartão retangular ou um hero em duas colunas; o cenário é o próprio espaço do site. Não usar grade de produtos, preço, sacola, checkout, promoções ou botões de compra.

Header fixo delicado, transparente, altura cerca de 110px, margens laterais de 64px. Logo oficial VERDE centralizado, cerca de 145px de largura; não redesenhar sua personalidade. À esquerda, links discretos "A casa" e "Memórias". À direita, "Moda" e "Curadoria". Tudo em verde profundo. Pequena linha editorial "DESDE 1973" sob o logo se não estiver no arquivo da marca.

No centro da área superior, título em serifada editorial elegante, aproximadamente 72px, duas linhas: "Uma casa." / "Muitas histórias." Sem itálico pesado. Entre o título e a casa, pequeno texto de no máximo duas linhas: "Moda, cultura e encontros." / "Desde 1973, acompanhando histórias." O texto precisa ficar em área sem desenho para leitura clara. Tipografia de interface Montserrat, aproximadamente 14 a 16px; apenas uma serifada além da sans, fora do logotipo existente.

Parte inferior em área calma do desenho: ação sutil "Entre no universo Verde", com um pequeno ícone de seta para baixo. Esta ação conduz ao percurso imersivo; não usar botão comercial preenchido. Rodapé fixo fino e muito discreto: "Ler sem movimento" à esquerda, "01 — A casa" ao centro, "01 / 05" à direita. Não mostrar barra de chat, busca, chatbot ou formulário. Os outros capítulos devem existir fora de quadro, não acrescentar mosaicos ou cards para anunciar funcionalidades.

Paleta: #E2DEC5 creme quente e #033625 verde profundo; apenas um detalhe pequeno de terracota #C64B20 para indicar capítulo ativo. Sem gradiente, sem sombras de aplicativo, sem cantos arredondados, sem elementos genéricos de e-commerce. Arquitetura do layout refinada, estável, espaçosa; imagem à mão, acolhedora e brasileira. O resultado deve comunicar um cenário navegável com profundidade e aproximação, e não uma landing page feita de blocos.

Constraints: no extraneous features. No copied Cucinelli logos, statues, scenes, or interface. Do not invent founder names, addresses or historical dates. Preserve supplied Verde branding and real content. Keep letters legible and all content inside the intended viewport.

```

## 03-cenario-sem-interface

```text
Use case: precise-object-edit.
Asset type: fundo ilustrado final de um site institucional, derivado da direção visual aprovada.
Imagem anexada: alvo da edição; preservar sua ilustração de casa, plantas, calçada e papel.

Target dimensions: preservar exatamente a proporção 1487 x 1058 da imagem anexada, sem esticar, achatar, ampliar ou reposicionar o cenário.

Pedido: remover absolutamente toda a interface e todos os textos da imagem. Remover o logotipo VERDE no topo, a linha DESDE 1973, os quatro links do cabeçalho, o título Uma casa. Muitas histórias., os dois textos de apoio, o convite Entre no universo Verde, a seta inferior, o texto Ler sem movimento, os números 01 / 05, o rótulo de capítulo e todas as linhas horizontais de progresso no rodapé. Preencher os locais removidos com a continuidade natural do papel creme e dos traços ilustrados que passam por trás. Não deixar letras, sombras de letras, símbolos, marcas, números ou interface.

Invariantes: manter a casa exatamente no mesmo lugar e tamanho, incluindo portão, muro de pedra, colunas, telhado e folhagem. Manter a faixa de papel livre abaixo da calçada para aplicação posterior dos controles reais em HTML. Não adicionar pessoas, veículos, novas edificações, novos detalhes arquitetônicos ou vegetação cobrindo a casa. Manter o papel creme quente, tinta verde profunda, qualidade do desenho e composição integral. Não é um redesenho nem uma nova perspectiva: somente a remoção precisa de textos e interface.

Resultado: uma única imagem de cenário sem textos ou interface, pronta para receber tipografia e controles programados separadamente. Fundo opaco. Sem borda ou marca d'água.

```

## 04-casa-perspectiva-obliqua

```text
Use case: illustration-story.
Asset type: segundo de três quadros de aproximação da casa da Verde Boutique, para uma rolagem cinematográfica institucional.
Target dimensions: 1488 x 1056, landscape, proporção aproximada 1.409:1. Uma única vista, sem montagem e sem interface.

Imagens de referência anexadas em ordem:
1. Cenário frontal ilustrado já utilizado no protótipo. É o padrão de linguagem gráfica, tinta verde profunda sobre papel creme quente, densidade de traço, arquitetura e atmosfera.
2. Ilustração oficial da casa. Fonte primária para a identidade arquitetônica: casa térrea, telhas curvas, dois frontões ornamentais, colunas da varanda, muro de pedras, portão central e vegetação.
3. Fotografia frontal real da casa, usada exclusivamente para reconhecer arquitetura e proporções. Não produzir uma fotografia nem reproduzir o céu azul.

Pedido: desenhar uma NOVA perspectiva da mesma casa, como se a câmera tivesse avançado até o portão e se deslocado para a direita, olhando diagonalmente para a porta da varanda num ângulo de aproximadamente 30 graus. Não fazer um recorte ampliado da vista frontal. A perspectiva deve ser inequivocamente oblíqua: o portão e a mureta de pedra aparecem próximos no primeiro plano inferior esquerdo, a sequência de colunas recua diagonalmente da direita para o centro-esquerda e a porta principal fica ao fundo ligeiramente à esquerda do centro. Mostrar a casa a partir do lado direito visível da referência, sem inventar uma fachada lateral inteira ou ambientes desconhecidos. Manter a mesma quantidade e o mesmo caráter de colunas, telhas e ornamentos, dentro do enquadramento.

Composição: avanço de uma etapa no percurso, nem muito distante nem um close extremo. Casa e varanda ocupam cerca de 70% da imagem. Algumas folhas tropicais nas bordas próximas dão profundidade e saem parcialmente do quadro. Calçada, pedras e piso guiam o olhar à entrada; o desenho deve convidar a entrar. Área superior deve continuar calma, suficiente para o cabeçalho em HTML. Faixa inferior relativamente calma para controles discretos. Usar projeção natural, sem lente olho de peixe, linhas verticais razoavelmente retas. Uma pequena leitura do telhado e das colunas comprova a mudança de ponto de vista.

Estilo invariável: ilustração manual refinada em tinta verde escura #033625, hachuras leves, papel creme quente com textura muito sutil, igual à imagem 1. Não usar cinza, preto, aquarela colorida, 3D, fotografia, render de maquete ou iluminação artificial. A casa é brasileira; não inserir ciprestes, montanhas toscanas, estátuas ou referências italianas.

Restrições: nenhum texto, número, letreiro, logo, botão, seta, borda, marca d'água, pessoa, modelo, roupa, veículo ou objeto novo. Não inventar a história da casa nem uma reconstrução factual. É uma interpretação ilustrada de um novo ponto de vista da arquitetura fornecida. O resultado precisa ser uma vista espacial diferente, coerente com a casa, e não a mesma imagem apenas ampliada.

```

## 05-casa-chegada-varanda

```text
Use case: illustration-story.
Asset type: terceiro e último quadro de aproximação da casa da Verde Boutique, continuando uma rolagem imersiva de apenas três vistas.
Target dimensions: 1488 x 1056, landscape, proporção aproximada 1.409:1. Uma única imagem, sem montagem, sem interface.

Referências anexadas em ordem:
1. Cenário frontal ilustrado do protótipo: linguagem visual e arquitetura da casa.
2. Ilustração oficial da casa: identidade arquitetônica.
3. Fotografia frontal real da casa: somente evidência de arquitetura e proporções; não reproduzir fotografia, céu azul ou textos.
4. Segundo quadro recém-gerado: perspectiva oblíqua da varanda vista da direita, com portão e muro de pedra no primeiro plano. Continuar a mesma casa e a mesma tinta sobre papel.

Pedido: criar uma nova perspectiva mais próxima, como se a câmera tivesse atravessado a região do portão e chegado ao piso da varanda, agora ligeiramente à esquerda do eixo da porta, olhando diagonalmente para a entrada. Não ampliar nem recortar a imagem 4. A mudança deve ser espacialmente visível: uma coluna próxima enquadra a borda esquerda com parte de seu capitel; o piso da varanda conduz em diagonal à porta principal de madeira verde, posicionada à direita do centro; uma segunda coluna pode aparecer na borda direita, menor e mais distante. Mostrar só o trecho de fachada comprovado pelas referências, sem inventar o interior da loja, corredor, mobiliário, mercadorias ou outro cômodo.

Elementos da casa: porta dupla verde escura com painéis e ferragens discretas, parede clara com desenhos de folhas, colunas clássicas simples, piso de varanda e uma pequena porção da cobertura. Preservar o caráter e a proporção dos elementos da mesma casa. A câmera está voltada para a casa, não olhando para a rua. O portão não deve dominar este quadro porque ficou para trás. Deixar as linhas do piso e a diferença de tamanho entre as colunas evidenciarem a nova perspectiva. Sem distorção olho de peixe.

Composição: intimidade de chegada, porta como ponto focal. Manter área superior calma para o logotipo e os controles reais aplicados depois. Não desenhar a porta tão grande a ponto de cortar sua parte superior; mostrar o limiar completo, um trecho do piso e o espaço entre colunas. Algumas folhas junto à borda inferior direita podem relacionar o desenho à vegetação da casa, sem cobrir a porta.

Estilo invariável: ilustração manual em tinta verde profunda #033625 sobre papel creme quente, densidade de traço e hachuras iguais às imagens 1 e 4. Sofisticada, acolhedora, brasileira e madura. Sem foto, render 3D, maquete, aquarela colorida, preto ou cinza. Não adicionar atmosfera italiana, estátuas ou paisagem toscana.

Restrições: absolutamente sem texto, letras, números, logo, placa, legenda, botão, seta, borda, marca d'água, pessoas, modelos, roupas, produtos ou animais. Não criar uma reconstrução documental: é um cenário ilustrado interpretativo a partir da arquitetura fornecida. O enquadramento deve ser claramente diferente dos dois anteriores, concluindo a sequência: casa inteira, vista oblíqua pelo portão, chegada à varanda.

```

## 06-interior-da-verde

```text
Use case: style-transfer.
Asset type: terceira ilustração da sequência de entrada no site institucional da Verde Boutique, substituindo o quadro da varanda fechada.
Target dimensions: 1488 x 1056, landscape, proporção aproximada 1.409:1. Uma única vista, sem montagem e sem interface.

Duas imagens anexadas, em ordem:
1. Fotografia real do interior da Verde Boutique fornecida pelo usuário nesta conversa. É o ALVO a transformar: preservar a organização do espaço e o ponto de vista de quem acabou de entrar na loja.
2. Ilustração exterior da casa já utilizada no site. Referência de estilo, cores, traço manual e textura de papel. Não inserir a fachada externa dentro da loja.

Pedido: transformar o interior fotografado em uma ilustração autoral da mesma família visual do exterior. A experiência deve parecer a chegada DENTRO da Verde, completando a sequência: casa inteira vista de fora; aproximação oblíqua pelo portão; interior acolhedor visto da entrada. Não desenhar outra porta fechada, varanda ou parede externa. O ambiente interno precisa ser inequívoco e reconhecível como o da fotografia.

Preservar a composição real: parede de tijolo aparente e longa arara de madeira com roupas à esquerda; prateleiras de peças dobradas abaixo; poltrona/cadeira de palhinha no primeiro plano central inferior; vaso com planta de folhas largas ao centro-esquerda; pequeno conjunto de cadeiras, tapete e mesa baixa à direita do centro; balcão ao fundo com computador discreto; emblema triangular da Verde na parede de fundo; arara metálica de peças claras no primeiro plano à direita; iluminação de trilhos no teto. As linhas do piso, do tapete, do balcão e das araras devem guiar o olhar para dentro. Reinterpretar detalhes com desenho, sem adicionar novos cômodos, corredores, janelas ou mobiliário que a foto não mostra.

Composição de câmera: olho humano na entrada, plano amplo com profundidade, alinhamento do ponto de fuga para o fundo da loja. Enquadramento aberto o bastante para reconhecer as áreas da loja. Não usar olho de peixe nem distorcer colunas e móveis. Distribuir os planos do primeiro plano até o balcão para criar sensação de percurso. Reservar uma pequena faixa superior mais calma para o cabeçalho real do site; não desenhar qualquer cabeçalho.

Estilo invariável: desenho fino e expressivo à mão, tinta verde profunda #033625 sobre papel creme quente, hachuras delicadas e áreas de respiro, textura de papel quase imperceptível. Mesmo desenho editorial brasileiro e acolhedor da referência exterior, sem cinza, preto, azul, dourado, aquarela colorida, fotografia ou render 3D. Roupas desenhadas apenas como parte do cenário, sem sugerir produtos específicos.

Emblema da parede: preservar a forma triangular e a folha central reconhecíveis na foto. Pode manter somente o número 1973, se legível; não criar palavras, frases, marcas, promoções ou caracteres inventados. Não inventar novas marcas em embalagens e roupas.

Restrições: não incluir pessoas, modelos, preços, etiquetas legíveis, carrinho, botões, navegação, legenda, seta, borda ou marca d'água. Evitar enfeites sazonais de Natal para o cenário poder funcionar o ano inteiro; manter a vegetação natural e a disposição do espaço. O resultado é uma interpretação ilustrada do interior fornecido, não uma fotografia nem uma nova loja genérica.

```

## 07-memorias-do-interior

```text
Use case: style-transfer.
Asset type: cenário ilustrado do capítulo de memórias da Verde Boutique, para alternar uma passagem de linha do tempo com quatro fotografias reais do acervo.
Target dimensions: 1920 x 1080, landscape 16:9. Uma única vista, sem montagem e sem interface.

Referências anexadas em ordem:
1. Fotografia antiga do interior da Verde, arquivo IMG_2784.JPG, fornecido pelo usuário. É o alvo da transformação e a fonte da organização do espaço.
2. Ilustração atual do interior da Verde criada para o site. Usar somente como referência de linguagem de traço, papel creme e tinta verde.

Pedido: transformar a fotografia antiga em um cenário ilustrado, reconhecível como aquele registro de outro momento da loja. Este quadro apresenta as memórias, e será seguido por fotografias reais. Não modernizar o ambiente nem copiar a organização do interior atual da imagem 2. Preservar a disposição da imagem 1: araras de roupas dos dois lados, coluna central com referências gráficas, janela ou grade atrás da coluna, cadeiras de cores diferentes reunidas no espaço central, mesas de madeira e estruturas metálicas verdes à direita, prateleiras e pilhas de peças, piso e objetos do registro.

Composição: ponto de vista de quem percorre o espaço e observa o conjunto de cadeiras, mesas e araras, com profundidade entre os planos. Abrir levemente as margens para uma composição 16:9 sem inventar novos cômodos. Deixar a área central superior relativamente calma para um título em HTML aplicado depois. A memória deve ser reconhecida pelos objetos e pela organização espacial, e não por filtros de envelhecimento.

Estilo: ilustração fina à mão em tinta verde escura #033625 sobre papel creme quente, com hachuras delicadas, a mesma densidade editorial e textura sutil da ilustração atual. Sem cores adicionais, cinza, preto, sépia, 3D ou aparência de fotografia. Respeitar a atmosfera brasileira e afetiva da Verde.

Restrições: não acrescentar pessoas, roupas específicas inexistentes, mobiliário ou equipamentos modernos. Textos e marcas pequenas da foto devem virar marcas gráficas abstratas não legíveis; não inventar logotipos, slogans, datas ou palavras. Não colocar nenhum texto novo, número de ano, interface, botão, borda ou marca d'água. Não atribuir uma data específica à cena. Trata-se de interpretação ilustrada de um registro do acervo, sem pretensão de reconstrução arquitetônica exata.

```


## 08-casa-frente-panoramica

Variante responsiva da primeira vista para telas largas; não acrescenta uma quarta etapa.

```text
Use case: precise-object-edit.
Asset type: variante panorâmica responsiva da PRIMEIRA perspectiva do site da Verde Boutique. Não é um quadro adicional do percurso.
Target dimensions: 1920 x 1080, landscape 16:9. Uma imagem sem interface.

Imagem anexada: cenário frontal da casa da Verde. Preservar a arquitetura, o estilo de tinta verde sobre papel creme e o reconhecimento da mesma casa. Reorganizar a composição para tela mais larga, sem distorcer a imagem nem esticar arquitetura.

Pedido: criar uma versão mais arejada desse mesmo cenário frontal. A casa inteira, incluindo telhado, varanda, muro e portão, deve ocupar aproximadamente 65% da largura. O topo do telhado deve começar por volta de 46% da altura da imagem; a base do portão deve terminar até 79% da altura. Estender naturalmente o espaço de papel e o entorno para uma tela 16:9. Manter a casa em posição frontal no centro inferior, sem mudar o ângulo.

Zonas calmas importantes para a interface que será programada separadamente:
- Os primeiros 15% de altura devem conter somente papel creme e poucos traços discretos de céu; nada de folhas, galhos ou telhados nessa faixa, principalmente nos cantos superiores.
- Entre 15% e 42% da altura, manter o centro praticamente vazio para título e texto em HTML. Não desenhar objetos ou ramos atravessando essa área.
- A faixa entre 82% e 100% da altura deve ter papel e apenas vestígios muito leves de calçada; não colocar portão, pedras ou desenho denso. É onde entram o convite de entrada e a navegação real.
- Árvores e folhagens podem enquadrar as bordas laterais, começando abaixo de 25% da altura, sem tapar a casa ou invadir as zonas calmas.

Manter a mesma casa brasileira térrea: telhado de telhas curvas, frontões ornamentais nas extremidades, colunas na varanda, porta central, folhagens junto à parede, muro de pedra e portão central. Não mudar esses elementos para outra casa. A menor escala estabelece uma vista inicial mais distante, que será seguida pela perspectiva oblíqua e pelo interior já produzidos.

Estilo: ilustração manual com hachuras delicadas, tinta verde profunda #033625, papel creme quente com textura sutil. Mesma densidade de traços da imagem fornecida na região da casa. Sem branco puro, preto, cinza, outras cores, fotografia, 3D ou vinheta escura. Não desenhar margens artificiais: a ilustração é um único cenário contínuo até as bordas.

Restrições: absolutamente sem texto, letras, números, logo, marca, botão, seta, interface, borda, marca d'água, pessoas, roupas ou veículos. Não criar uma imagem de site; criar somente o fundo ilustrado, pronto para receber texto e controles reais.
```

## Logos transparentes — revisão 5

Quatro extrações feitas com o gerador de imagens do ChatGPT, com transparência real. As cinco imagens de referência foram anexadas em ordem: `marca-cantao.png`, `marca-aramis.png`, `marca-individual.png`, `marca-insider.webp`, `marca-shoulder.jpg`, todas preservadas em `prototipo/public/assets/`. Cada chamada devolveu somente o logo indicado. Levi’s foi exportado do SVG para PNG com Resvg, e Aramis já era PNG transparente; esses dois não têm prompt generativo.

### cantao — PNG sem fundo

```text
Use case: background-extraction.
Asset type: transparent PNG of an existing supplied partner logo for the Verde Boutique website.
Five reference images are attached. The edit target is Image 1: red CANTÃO wordmark on a white square. Keep the red wordmark exactly, including the tilde/accent.
Ignore all other attached logos; return ONLY the specified logo.
Primary request: extract the existing logo from its flat background. Do not redesign, retype, stylize, embellish, trace into different lettering or add anything. Preserve the original identity faithfully. Remove the flat backdrop completely, including negative spaces inside letters, and preserve clean anti-aliased edges. The output must have a real transparent alpha background, not white, cream, gray or a checkerboard printed into the image.
Composition: one isolated logo centered, tightly framed with approximately 6% transparent margin. No huge blank square, no mockup, no labels or multiple logos. Original aspect ratio of the visible logo.
Constraints: no shadows, no glow, no outline added, no border, no new symbols, no watermark. This is technical background extraction, not a new logo design.
```

### individual — PNG sem fundo

```text
Use case: background-extraction.
Asset type: transparent PNG of an existing supplied partner logo for the Verde Boutique website.
Five reference images are attached. The edit target is Image 3: black shield outline with a black letter I on a white square. Keep the exact shield silhouette, the I and their spacing.
Ignore all other attached logos; return ONLY the specified logo.
Primary request: extract the existing logo from its flat background. Do not redesign, retype, stylize, embellish, trace into different lettering or add anything. Preserve the original identity faithfully. Remove the flat backdrop completely, including negative spaces inside letters, and preserve clean anti-aliased edges. The output must have a real transparent alpha background, not white, cream, gray or a checkerboard printed into the image.
Composition: one isolated logo centered, tightly framed with approximately 6% transparent margin. No huge blank square, no mockup, no labels or multiple logos. Original aspect ratio of the visible logo.
Constraints: no shadows, no glow, no outline added, no border, no new symbols, no watermark. This is technical background extraction, not a new logo design.
```

### insider — PNG sem fundo

```text
Use case: background-extraction.
Asset type: transparent PNG of an existing supplied partner logo for the Verde Boutique website.
Five reference images are attached. The edit target is Image 4: white INSIDER wordmark on a black rectangle. Remove the black rectangle. Render the identical wordmark in solid black so it remains visible on a cream webpage. Do not change its lettering or spacing.
Ignore all other attached logos; return ONLY the specified logo.
Primary request: extract the existing logo from its flat background. Do not redesign, retype, stylize, embellish, trace into different lettering or add anything. Preserve the original identity faithfully. Remove the flat backdrop completely, including negative spaces inside letters, and preserve clean anti-aliased edges. The output must have a real transparent alpha background, not white, cream, gray or a checkerboard printed into the image.
Composition: one isolated logo centered, tightly framed with approximately 6% transparent margin. No huge blank square, no mockup, no labels or multiple logos. Original aspect ratio of the visible logo.
Constraints: no shadows, no glow, no outline added, no border, no new symbols, no watermark. This is technical background extraction, not a new logo design.
```

### shoulder — PNG sem fundo

```text
Use case: background-extraction.
Asset type: transparent PNG of an existing supplied partner logo for the Verde Boutique website.
Five reference images are attached. The edit target is Image 5: gold lowercase shoulder wordmark on a white square. Preserve the same gold color, letterforms and kerning.
Ignore all other attached logos; return ONLY the specified logo.
Primary request: extract the existing logo from its flat background. Do not redesign, retype, stylize, embellish, trace into different lettering or add anything. Preserve the original identity faithfully. Remove the flat backdrop completely, including negative spaces inside letters, and preserve clean anti-aliased edges. The output must have a real transparent alpha background, not white, cream, gray or a checkerboard printed into the image.
Composition: one isolated logo centered, tightly framed with approximately 6% transparent margin. No huge blank square, no mockup, no labels or multiple logos. Original aspect ratio of the visible logo.
Constraints: no shadows, no glow, no outline added, no border, no new symbols, no watermark. This is technical background extraction, not a new logo design.
```

## Referências das gerações 09–16

09–12: fotos `IMG_2773`, `IMG_2771`, `IMG_2784`, `IMG_2805`, nessa ordem, seguidas da ilustração 06 como linguagem. O alvo de cada chamada é especificado no prompt. 13–16: foto aproximada da porta, fachada atual inteira, interior atual e ilustração 11 como referência de traço. As fotografias atuais foram anexadas pelo usuário; as históricas estão no acervo local/Drive. Não usar fachadas antigas como arquitetura da casa atual.

## 09-memoria-fachada

```text
Use case: illustration-story.
Asset type: uma das quatro cenas de um percurso ilustrado horizontal para o site institucional da Verde Boutique. Uma única imagem, não uma montagem de quadros.
Target dimensions: 1920 x 1080, landscape 16:9. Fundo realmente transparente (canal alfa), sem papel, sem retângulo opaco.
Referências anexadas: imagens 1 a 4 são fotografias históricas do acervo. A imagem 5 é SOMENTE referência de linguagem gráfica de ilustração já aprovada. O alvo desta chamada é a imagem 1; ignorar o conteúdo das outras fotos.
Cena a interpretar: Fachada antiga: a loja de dois pavimentos, três vãos arqueados no térreo, janelas superiores arredondadas, marquise curva e o letreiro histórico. Preservar o automóvel e as pessoas discretas da foto como pequenos traços no primeiro plano. Não transformar esta fachada na casa atual.

Pedido: converter a fotografia alvo em uma vinheta de memória em traço manual refinado, tinta verde profunda #033625, linhas humanas delicadas e hachuras leves, coerentes com a imagem 5. Mostrar a mesma cena histórica de forma reconhecível, preservando as relações entre os elementos comprovados. Não produzir uma fotografia restaurada nem um render 3D. É uma interpretação artística visivelmente desenhada.

Composição para conexão entre ambientes: a cena deve ocupar cerca de 78% da largura, centrada e inteira, com bastante ar transparente à esquerda e à direita e margem transparente no topo. O solo/piso da cena fica por volta de 80% da altura; alguns traços finos de chão se estendem suavemente em direção às bordas laterais, mas desaparecem antes de tocar nelas. A parte inferior termina em traços progressivamente mais leves, sem um recorte retangular. As bordas superior e laterais precisam ficar abertas e sem parede opaca até os limites: a cena será percorrida da direita para a esquerda, junto a outras vinhetas sobre um único fundo branco no site. Não desenhar moldura, cartão, borda ou faixa.

Estilo: somente tinta verde escura, com variações de densidade por hachura. Os vazios, inclusive paredes, céu e intervalos, são transparentes de verdade. Sem fundo creme, sem branco chapado, sem textura de papel, sem preto, sépia, cinza, vermelho, aquarela colorida ou luz de cinema. Qualidade editorial madura, acolhedora e brasileira. Não copiar arquitetura, esculturas, símbolos ou interface de Brunello Cucinelli.

Restrições: não adicionar datas de fotografia, nomes de pessoas, fatos históricos, novas roupas ou novo evento. Só preservar textos históricos essenciais da marca quando existirem no alvo; as demais placas podem ser tratadas como formas/hachuras sem pseudoletras. Nenhuma legenda, título de seção, botão, interface, marca d'água ou repetição de outra cena. Evitar detalhes falsos e excesso de densidade nas bordas. Não mudar a identidade arquitetônica ou os objetos centrais. PNG com alfa real.
```

## 10-memoria-desfile

```text
Use case: illustration-story.
Asset type: uma das quatro cenas de um percurso ilustrado horizontal para o site institucional da Verde Boutique. Uma única imagem, não uma montagem de quadros.
Target dimensions: 1920 x 1080, landscape 16:9. Fundo realmente transparente (canal alfa), sem papel, sem retângulo opaco.
Referências anexadas: imagens 1 a 4 são fotografias históricas do acervo. A imagem 5 é SOMENTE referência de linguagem gráfica de ilustração já aprovada. O alvo desta chamada é a imagem 2; ignorar o conteúdo das outras fotos.
Cena a interpretar: Desfile/encontro antigo: três participantes centrais de braços abertos em um corredor entre fileiras de público sentado. Preservar poses, atmosfera e composição espacial da foto, com rostos simplificados em desenho fino; não inventar identidades. Manter o piso e o corredor guiando o olhar.

Pedido: converter a fotografia alvo em uma vinheta de memória em traço manual refinado, tinta verde profunda #033625, linhas humanas delicadas e hachuras leves, coerentes com a imagem 5. Mostrar a mesma cena histórica de forma reconhecível, preservando as relações entre os elementos comprovados. Não produzir uma fotografia restaurada nem um render 3D. É uma interpretação artística visivelmente desenhada.

Composição para conexão entre ambientes: a cena deve ocupar cerca de 78% da largura, centrada e inteira, com bastante ar transparente à esquerda e à direita e margem transparente no topo. O solo/piso da cena fica por volta de 80% da altura; alguns traços finos de chão se estendem suavemente em direção às bordas laterais, mas desaparecem antes de tocar nelas. A parte inferior termina em traços progressivamente mais leves, sem um recorte retangular. As bordas superior e laterais precisam ficar abertas e sem parede opaca até os limites: a cena será percorrida da direita para a esquerda, junto a outras vinhetas sobre um único fundo branco no site. Não desenhar moldura, cartão, borda ou faixa.

Estilo: somente tinta verde escura, com variações de densidade por hachura. Os vazios, inclusive paredes, céu e intervalos, são transparentes de verdade. Sem fundo creme, sem branco chapado, sem textura de papel, sem preto, sépia, cinza, vermelho, aquarela colorida ou luz de cinema. Qualidade editorial madura, acolhedora e brasileira. Não copiar arquitetura, esculturas, símbolos ou interface de Brunello Cucinelli.

Restrições: não adicionar datas de fotografia, nomes de pessoas, fatos históricos, novas roupas ou novo evento. Só preservar textos históricos essenciais da marca quando existirem no alvo; as demais placas podem ser tratadas como formas/hachuras sem pseudoletras. Nenhuma legenda, título de seção, botão, interface, marca d'água ou repetição de outra cena. Evitar detalhes falsos e excesso de densidade nas bordas. Não mudar a identidade arquitetônica ou os objetos centrais. PNG com alfa real.
```

## 11-memoria-interior

```text
Use case: illustration-story.
Asset type: uma das quatro cenas de um percurso ilustrado horizontal para o site institucional da Verde Boutique. Uma única imagem, não uma montagem de quadros.
Target dimensions: 1920 x 1080, landscape 16:9. Fundo realmente transparente (canal alfa), sem papel, sem retângulo opaco.
Referências anexadas: imagens 1 a 4 são fotografias históricas do acervo. A imagem 5 é SOMENTE referência de linguagem gráfica de ilustração já aprovada. O alvo desta chamada é a imagem 3; ignorar o conteúdo das outras fotos.
Cena a interpretar: Interior antigo: grande vão/janela com grade arredondada ao centro, mesa de madeira, cadeiras tubulares, prateleira de roupas dobradas à direita, araras e cabides. Preservar esses elementos e o ponto de vista real. A imagem de estilo 5 já mostra este interior; aperfeiçoar sua apresentação como vinheta aberta sem fundo.

Pedido: converter a fotografia alvo em uma vinheta de memória em traço manual refinado, tinta verde profunda #033625, linhas humanas delicadas e hachuras leves, coerentes com a imagem 5. Mostrar a mesma cena histórica de forma reconhecível, preservando as relações entre os elementos comprovados. Não produzir uma fotografia restaurada nem um render 3D. É uma interpretação artística visivelmente desenhada.

Composição para conexão entre ambientes: a cena deve ocupar cerca de 78% da largura, centrada e inteira, com bastante ar transparente à esquerda e à direita e margem transparente no topo. O solo/piso da cena fica por volta de 80% da altura; alguns traços finos de chão se estendem suavemente em direção às bordas laterais, mas desaparecem antes de tocar nelas. A parte inferior termina em traços progressivamente mais leves, sem um recorte retangular. As bordas superior e laterais precisam ficar abertas e sem parede opaca até os limites: a cena será percorrida da direita para a esquerda, junto a outras vinhetas sobre um único fundo branco no site. Não desenhar moldura, cartão, borda ou faixa.

Estilo: somente tinta verde escura, com variações de densidade por hachura. Os vazios, inclusive paredes, céu e intervalos, são transparentes de verdade. Sem fundo creme, sem branco chapado, sem textura de papel, sem preto, sépia, cinza, vermelho, aquarela colorida ou luz de cinema. Qualidade editorial madura, acolhedora e brasileira. Não copiar arquitetura, esculturas, símbolos ou interface de Brunello Cucinelli.

Restrições: não adicionar datas de fotografia, nomes de pessoas, fatos históricos, novas roupas ou novo evento. Só preservar textos históricos essenciais da marca quando existirem no alvo; as demais placas podem ser tratadas como formas/hachuras sem pseudoletras. Nenhuma legenda, título de seção, botão, interface, marca d'água ou repetição de outra cena. Evitar detalhes falsos e excesso de densidade nas bordas. Não mudar a identidade arquitetônica ou os objetos centrais. PNG com alfa real.
```

## 12-memoria-outdoor

```text
Use case: illustration-story.
Asset type: uma das quatro cenas de um percurso ilustrado horizontal para o site institucional da Verde Boutique. Uma única imagem, não uma montagem de quadros.
Target dimensions: 1920 x 1080, landscape 16:9. Fundo realmente transparente (canal alfa), sem papel, sem retângulo opaco.
Referências anexadas: imagens 1 a 4 são fotografias históricas do acervo. A imagem 5 é SOMENTE referência de linguagem gráfica de ilustração já aprovada. O alvo desta chamada é a imagem 4; ignorar o conteúdo das outras fotos.
Cena a interpretar: Outdoor histórico: placa retangular da Verde em perspectiva oblíqua, com pilares e travessas, sobre a área de grama da fotografia. Preservar a geometria reconhecível do outdoor e as palavras históricas VERDE e BOUTIQUE como desenho do próprio letreiro. O cartaz é o protagonista; não inventar cidade, montanhas ou nova arquitetura.

Pedido: converter a fotografia alvo em uma vinheta de memória em traço manual refinado, tinta verde profunda #033625, linhas humanas delicadas e hachuras leves, coerentes com a imagem 5. Mostrar a mesma cena histórica de forma reconhecível, preservando as relações entre os elementos comprovados. Não produzir uma fotografia restaurada nem um render 3D. É uma interpretação artística visivelmente desenhada.

Composição para conexão entre ambientes: a cena deve ocupar cerca de 78% da largura, centrada e inteira, com bastante ar transparente à esquerda e à direita e margem transparente no topo. O solo/piso da cena fica por volta de 80% da altura; alguns traços finos de chão se estendem suavemente em direção às bordas laterais, mas desaparecem antes de tocar nelas. A parte inferior termina em traços progressivamente mais leves, sem um recorte retangular. As bordas superior e laterais precisam ficar abertas e sem parede opaca até os limites: a cena será percorrida da direita para a esquerda, junto a outras vinhetas sobre um único fundo branco no site. Não desenhar moldura, cartão, borda ou faixa.

Estilo: somente tinta verde escura, com variações de densidade por hachura. Os vazios, inclusive paredes, céu e intervalos, são transparentes de verdade. Sem fundo creme, sem branco chapado, sem textura de papel, sem preto, sépia, cinza, vermelho, aquarela colorida ou luz de cinema. Qualidade editorial madura, acolhedora e brasileira. Não copiar arquitetura, esculturas, símbolos ou interface de Brunello Cucinelli.

Restrições: não adicionar datas de fotografia, nomes de pessoas, fatos históricos, novas roupas ou novo evento. Só preservar textos históricos essenciais da marca quando existirem no alvo; as demais placas podem ser tratadas como formas/hachuras sem pseudoletras. Nenhuma legenda, título de seção, botão, interface, marca d'água ou repetição de outra cena. Evitar detalhes falsos e excesso de densidade nas bordas. Não mudar a identidade arquitetônica ou os objetos centrais. PNG com alfa real.
```

## 13-hero-plano-amplo

```text
Use case: illustration-story.
Asset type: uma das QUATRO ilustrações do hero de um site institucional da Verde Boutique. Caminho de câmera em profundidade: 1 casa inteira vista da rua; 2 dentro do portão; 3 porta da varanda; 4 interior atual.
Target dimensions: 1920 x 1080, landscape 16:9. UMA única vista, sem montagem de quatro quadros. PNG com transparência real.
Referências anexadas, em ordem:
1. Foto aproximada da porta da casa atual entre duas colunas.
2. Foto da fachada atual inteira, com portão, muro de pedra e varanda.
3. Foto do interior atual da Verde Boutique.
4. Ilustração histórica recém-gerada: SOMENTE referência de estilo de desenho, verde e bordas abertas. NÃO copiar sua loja antiga de dois pavimentos, automóvel, pessoas, letreiros ou outros elementos.

Cena específica desta chamada: PLANO 1 — plano amplo, de fora do portão. A casa atual inteira, térrea, com telhas curvas, varanda de colunas, porta central, dois remates ornamentais no telhado, muro de pedra, grade e portão central, plantas brasileiras. A câmera está na rua, frontal e ligeiramente elevada, olhando o conjunto inteiro. A casa ocupa aproximadamente 62% da largura, na metade inferior. Os 42% superiores são quase inteiramente transparentes para título e identidade em HTML. Uma calçada leve e folhas nas extremidades inferiores sugerem o caminho. Usar a foto 2 para arquitetura; não usar a fachada antiga de dois pavimentos da referência de estilo 4.

Linguagem comum às quatro vistas: traço fino manual em tinta verde profunda #033625, hachuras leves, maturidade editorial brasileira, mesmo tipo de desenho da referência 4. Converter as superfícies e detalhes da foto em linha e hachura, nunca em render, fotografia ou maquete. A arquitetura da casa atual tem um pavimento; respeitar a quantidade, a proporção e o caráter das colunas e da porta. Todas as vistas precisam parecer a MESMA casa, numa aproximação contínua e verossímil.

Fundo: transparente de verdade, sem papel opaco, céu branco, papel branco ou creme desenhado até as bordas. O site aplicará o mesmo fundo cru #E2DEC5 por trás. Deixar os vazios entre os traços transparentes. NÃO imprimir um quadriculado de transparência. As superfícies claras da própria arquitetura podem ser sugeridas com hachura muito leve e vazios. Preservar um espaço de respiro transparente no topo para o logotipo, de pelo menos 14% da altura, e uma faixa inferior mais calma para controles de navegação em HTML.

Composição: vinheta espacial ampla, com bordas abertas que desaparecem em traços leves e transparência; não criar cartão retangular, borda, moldura ou recorte duro. O piso conduz o olhar para a entrada/fundo em cada vista. Não cortar os principais elementos de reconhecimento. Não usar lente olho de peixe nem distorcer a casa. Desenho legível e detalhado na região central, mais leve nas bordas.

Invariantes: preservar os elementos comprovados pelas fotos; não adicionar pessoas, modelos, veículos, pisos ou móveis novos, nem cômodos desconhecidos. Não misturar a fachada antiga da ilustração 4 com a casa atual das fotos 1–3. Sem ciprestes, esculturas, símbolos ou edifícios da Brunello Cucinelli. Sem letras, legendas, botões, títulos, interface, marcas d'água ou texto novo. Apenas o emblema histórico da própria Verde/1973 pode permanecer se fizer parte visível da cena fotografada. Os títulos e a marca serão HTML separado.
```

## 14-hero-dentro-portoes

```text
Use case: illustration-story.
Asset type: uma das QUATRO ilustrações do hero de um site institucional da Verde Boutique. Caminho de câmera em profundidade: 1 casa inteira vista da rua; 2 dentro do portão; 3 porta da varanda; 4 interior atual.
Target dimensions: 1920 x 1080, landscape 16:9. UMA única vista, sem montagem de quatro quadros. PNG com transparência real.
Referências anexadas, em ordem:
1. Foto aproximada da porta da casa atual entre duas colunas.
2. Foto da fachada atual inteira, com portão, muro de pedra e varanda.
3. Foto do interior atual da Verde Boutique.
4. Ilustração histórica recém-gerada: SOMENTE referência de estilo de desenho, verde e bordas abertas. NÃO copiar sua loja antiga de dois pavimentos, automóvel, pessoas, letreiros ou outros elementos.

Cena específica desta chamada: PLANO 2 — já DENTRO DOS PORTÕES da casa atual. A câmera atravessou o portão e está no pequeno percurso/pátio diante da varanda, olhando para a porta principal. O portão e o muro ficaram atrás da câmera e NÃO devem bloquear a frente desta vista. Mostrar o piso conduzindo à varanda, as colunas e os desenhos de folhas na parede, parte do telhado e plantas nos lados, com a porta central ao fundo maior que no plano 1. Ponto de vista humano frontal, discretamente deslocado para a direita, com perspectiva espacial visivelmente diferente da foto frontal da rua. Não desenhar um cômodo ou uma ala lateral desconhecida. Usar a foto 2 para a casa e a foto 1 para a porta/varanda.

Linguagem comum às quatro vistas: traço fino manual em tinta verde profunda #033625, hachuras leves, maturidade editorial brasileira, mesmo tipo de desenho da referência 4. Converter as superfícies e detalhes da foto em linha e hachura, nunca em render, fotografia ou maquete. A arquitetura da casa atual tem um pavimento; respeitar a quantidade, a proporção e o caráter das colunas e da porta. Todas as vistas precisam parecer a MESMA casa, numa aproximação contínua e verossímil.

Fundo: transparente de verdade, sem papel opaco, céu branco, papel branco ou creme desenhado até as bordas. O site aplicará o mesmo fundo cru #E2DEC5 por trás. Deixar os vazios entre os traços transparentes. NÃO imprimir um quadriculado de transparência. As superfícies claras da própria arquitetura podem ser sugeridas com hachura muito leve e vazios. Preservar um espaço de respiro transparente no topo para o logotipo, de pelo menos 14% da altura, e uma faixa inferior mais calma para controles de navegação em HTML.

Composição: vinheta espacial ampla, com bordas abertas que desaparecem em traços leves e transparência; não criar cartão retangular, borda, moldura ou recorte duro. O piso conduz o olhar para a entrada/fundo em cada vista. Não cortar os principais elementos de reconhecimento. Não usar lente olho de peixe nem distorcer a casa. Desenho legível e detalhado na região central, mais leve nas bordas.

Invariantes: preservar os elementos comprovados pelas fotos; não adicionar pessoas, modelos, veículos, pisos ou móveis novos, nem cômodos desconhecidos. Não misturar a fachada antiga da ilustração 4 com a casa atual das fotos 1–3. Sem ciprestes, esculturas, símbolos ou edifícios da Brunello Cucinelli. Sem letras, legendas, botões, títulos, interface, marcas d'água ou texto novo. Apenas o emblema histórico da própria Verde/1973 pode permanecer se fizer parte visível da cena fotografada. Os títulos e a marca serão HTML separado.
```

## 15-hero-porta

```text
Use case: illustration-story.
Asset type: uma das QUATRO ilustrações do hero de um site institucional da Verde Boutique. Caminho de câmera em profundidade: 1 casa inteira vista da rua; 2 dentro do portão; 3 porta da varanda; 4 interior atual.
Target dimensions: 1920 x 1080, landscape 16:9. UMA única vista, sem montagem de quatro quadros. PNG com transparência real.
Referências anexadas, em ordem:
1. Foto aproximada da porta da casa atual entre duas colunas.
2. Foto da fachada atual inteira, com portão, muro de pedra e varanda.
3. Foto do interior atual da Verde Boutique.
4. Ilustração histórica recém-gerada: SOMENTE referência de estilo de desenho, verde e bordas abertas. NÃO copiar sua loja antiga de dois pavimentos, automóvel, pessoas, letreiros ou outros elementos.

Cena específica desta chamada: PLANO 3 — aproximação da PORTA, conforme a foto 1. Câmera no piso da varanda, frontal à porta dupla verde escura, entre duas colunas brancas que enquadram a entrada. Porta central retangular de madeira verde com os painéis e proporções observados; parede da varanda decorada com folhas grandes, arco/marquise acima e piso com paginação guiando a aproximação. Mostrar as bases das colunas e uma pequena porção de teto para reconhecer o limiar inteiro. A porta está FECHADA, ainda não é o interior. A imagem deve ser inequivocamente uma nova câmera na varanda, não um recorte ampliado da fachada inteira. Não acrescentar maçanetas extravagantes, plantas novas cobrindo a porta ou arquitetura italiana.

Linguagem comum às quatro vistas: traço fino manual em tinta verde profunda #033625, hachuras leves, maturidade editorial brasileira, mesmo tipo de desenho da referência 4. Converter as superfícies e detalhes da foto em linha e hachura, nunca em render, fotografia ou maquete. A arquitetura da casa atual tem um pavimento; respeitar a quantidade, a proporção e o caráter das colunas e da porta. Todas as vistas precisam parecer a MESMA casa, numa aproximação contínua e verossímil.

Fundo: transparente de verdade, sem papel opaco, céu branco, papel branco ou creme desenhado até as bordas. O site aplicará o mesmo fundo cru #E2DEC5 por trás. Deixar os vazios entre os traços transparentes. NÃO imprimir um quadriculado de transparência. As superfícies claras da própria arquitetura podem ser sugeridas com hachura muito leve e vazios. Preservar um espaço de respiro transparente no topo para o logotipo, de pelo menos 14% da altura, e uma faixa inferior mais calma para controles de navegação em HTML.

Composição: vinheta espacial ampla, com bordas abertas que desaparecem em traços leves e transparência; não criar cartão retangular, borda, moldura ou recorte duro. O piso conduz o olhar para a entrada/fundo em cada vista. Não cortar os principais elementos de reconhecimento. Não usar lente olho de peixe nem distorcer a casa. Desenho legível e detalhado na região central, mais leve nas bordas.

Invariantes: preservar os elementos comprovados pelas fotos; não adicionar pessoas, modelos, veículos, pisos ou móveis novos, nem cômodos desconhecidos. Não misturar a fachada antiga da ilustração 4 com a casa atual das fotos 1–3. Sem ciprestes, esculturas, símbolos ou edifícios da Brunello Cucinelli. Sem letras, legendas, botões, títulos, interface, marcas d'água ou texto novo. Apenas o emblema histórico da própria Verde/1973 pode permanecer se fizer parte visível da cena fotografada. Os títulos e a marca serão HTML separado.
```

## 16-hero-interior

```text
Use case: illustration-story.
Asset type: uma das QUATRO ilustrações do hero de um site institucional da Verde Boutique. Caminho de câmera em profundidade: 1 casa inteira vista da rua; 2 dentro do portão; 3 porta da varanda; 4 interior atual.
Target dimensions: 1920 x 1080, landscape 16:9. UMA única vista, sem montagem de quatro quadros. PNG com transparência real.
Referências anexadas, em ordem:
1. Foto aproximada da porta da casa atual entre duas colunas.
2. Foto da fachada atual inteira, com portão, muro de pedra e varanda.
3. Foto do interior atual da Verde Boutique.
4. Ilustração histórica recém-gerada: SOMENTE referência de estilo de desenho, verde e bordas abertas. NÃO copiar sua loja antiga de dois pavimentos, automóvel, pessoas, letreiros ou outros elementos.

Cena específica desta chamada: PLANO 4 — DENTRO DA LOJA, conforme a foto 3. Câmera vista da entrada, mirando o balcão ao fundo. Preservar a parede de tijolo e arara longa à esquerda, prateleiras de peças dobradas, cadeira de palhinha no primeiro plano, vaso com folhagem ao centro-esquerda, tapete, cadeira de couro, mesinha baixa, balcão e computador ao fundo, emblema triangular da Verde/1973 na parede e a arara de peças claras à direita, com trilhos de iluminação. A profundidade entre araras e móveis deve convidar a percorrer o ambiente. Não transformar esse interior no interior antigo mostrado na referência de estilo 4; usar só a fotografia atual 3 como evidência do espaço.

Linguagem comum às quatro vistas: traço fino manual em tinta verde profunda #033625, hachuras leves, maturidade editorial brasileira, mesmo tipo de desenho da referência 4. Converter as superfícies e detalhes da foto em linha e hachura, nunca em render, fotografia ou maquete. A arquitetura da casa atual tem um pavimento; respeitar a quantidade, a proporção e o caráter das colunas e da porta. Todas as vistas precisam parecer a MESMA casa, numa aproximação contínua e verossímil.

Fundo: transparente de verdade, sem papel opaco, céu branco, papel branco ou creme desenhado até as bordas. O site aplicará o mesmo fundo cru #E2DEC5 por trás. Deixar os vazios entre os traços transparentes. NÃO imprimir um quadriculado de transparência. As superfícies claras da própria arquitetura podem ser sugeridas com hachura muito leve e vazios. Preservar um espaço de respiro transparente no topo para o logotipo, de pelo menos 14% da altura, e uma faixa inferior mais calma para controles de navegação em HTML.

Composição: vinheta espacial ampla, com bordas abertas que desaparecem em traços leves e transparência; não criar cartão retangular, borda, moldura ou recorte duro. O piso conduz o olhar para a entrada/fundo em cada vista. Não cortar os principais elementos de reconhecimento. Não usar lente olho de peixe nem distorcer a casa. Desenho legível e detalhado na região central, mais leve nas bordas.

Invariantes: preservar os elementos comprovados pelas fotos; não adicionar pessoas, modelos, veículos, pisos ou móveis novos, nem cômodos desconhecidos. Não misturar a fachada antiga da ilustração 4 com a casa atual das fotos 1–3. Sem ciprestes, esculturas, símbolos ou edifícios da Brunello Cucinelli. Sem letras, legendas, botões, títulos, interface, marcas d'água ou texto novo. Apenas o emblema histórico da própria Verde/1973 pode permanecer se fizer parte visível da cena fotografada. Os títulos e a marca serão HTML separado.
```
