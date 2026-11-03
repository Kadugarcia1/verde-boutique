# Verde Boutique

Site institucional da Verde Boutique: uma entrada ilustrada em quatro perspectivas, percurso de memórias, acervo real, moda, detalhes e marcas. React + Vite. Sem backend ou variáveis de ambiente.

## Executar

Node.js 22 ou superior.

```sh
npm ci
npm run dev -- --host 127.0.0.1 --port 4173
```

## Verificar e compilar

```sh
npm run test:sites
npm run build
npm run preview -- --port 4173
```

Saída estática: **dist/client**. Os arquivos adicionais em dist/server e dist/.openai preservam a compatibilidade do template original e não são necessários na Vercel.

## Vercel

Importar `Kadugarcia1/verde-boutique` na conta/equipe autorizada. Como o repositório contém o site diretamente na raiz, deixar **Root Directory vazio**. Framework Vite, instalação `npm ci`, build `npm run build`, saída `dist/client`, conforme vercel.json. Sem variáveis de ambiente. A branch main corresponde à versão enviada; verificar o resultado do build e a URL antes de promover uma publicação futura.

## Conteúdo e identidade

Decisões e fontes em DESIGN.md; validação em design-qa.md; prompts exatos e referências em docs/PROMPTS.md. Fotografias, filmes, logos e música foram fornecidos pelo responsável pelo projeto. As ilustrações geradas são interpretações artísticas. Os ativos de marca e de terceiros não têm licença aberta implícita. Arquivos brutos, brandbook e mídias originais ficam no acervo local, fora do repositório do site.

Áudio começa somente por ação do visitante. Vídeos não têm trilha de áudio. Modo de leitura e preferência de redução de movimento mantêm todo o conteúdo acessível.

Instagram: https://www.instagram.com/verdeboutique/

Telefone: +55 19 99700-1777 · E-mail: verdeboutique1973@gmail.com
