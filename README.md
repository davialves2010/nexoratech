# Nexora Technology — site institucional

Site estático (HTML, CSS e JavaScript puro). Sem build e sem dependências.

## Estrutura
- `index.html` — páginas e seções
- `css/style.css` — estilos
- `js/main.js` — componentes (cards de serviços, projetos e diferenciais), menu, animações e formulário
- `vercel.json` — configuração da Vercel

## Publicar no GitHub
```bash
git init && git add . && git commit -m "Nexora Technology: site institucional"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/nexora.git
git push -u origin main
```

## Publicar na Vercel
Add New → Project → importe o repositório → Framework Preset: **Other** → Deploy.
(Deixe Build Command e Output Directory em branco.)

## Observações
- O botão "Ver projeto" aponta para https://spinlavtest.vercel.app/ (edite em `js/main.js`, constante `PROJ`).
- O formulário de contato é demonstrativo e não envia e-mail.
