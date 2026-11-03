# Instruções do site Verde

Leia DESIGN.md antes de alterar o site. As instruções recentes do usuário prevalecem sobre versões anteriores do protótipo.

- Site institucional, sem e-commerce. Preservar acervo real e não inventar fatos.
- Fundo cru #E2DEC5 e ilustrações verde #033625; quatro vistas de entrada (externa, dentro dos portões, porta, interior).
- Copy “Uma loja. Muitas Histórias”; sem CTA de entrada, setas, indicadores ou contadores locais nos percursos.
- Memórias ilustradas: fachada antiga, desfile, interior antigo, outdoor; depois quatro fotos reais. Grades 4/6/8 e seis logos PNG transparentes, sem legendas.
- Cabeçalho e rodapé transparentes; manter teclado, galeria, contatos, áudio ativável e modo sem movimento.
- Três filmes mudos no desktop; somente Giro de 20 s no celular. Respeitar redução de movimento e pausa.
- Prompts exatos em docs/PROMPTS.md e docs/prompts/ (ou ../PROMPTS.md e ../prompts/ no pacote de criação).
- Validar no navegador, executar npm run build e npm run test:sites, atualizar design-qa.md.
- Preservar .openai/hosting.json, worker/index.js, scripts/prepare-sites-build.mjs e tests/sites-worker.test.mjs.
- Publicação somente dentro do destino e da conta/equipe autorizados na sessão.
