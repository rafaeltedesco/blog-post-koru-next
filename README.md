This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Projeto - Blog Pessoal Simples (Next.js App Router)

Vamos criar nosso **primeiro projeto Next.js** - um **blog pessoal simples** que demonstra os conceitos fundamentais de roteamento, Server Components e Client Components.

## ⚠️ Importante - Conceitos em Foco

**Esta aula introduz conceitos fundamentais do Next.js 15:**

- **App Router** - Nova estrutura de roteamento baseada em arquivos
- **Server Components** - Componentes que rodam no servidor
- **Client Components** - Componentes interativos no cliente
- **Roteamento Dinâmico** - URLs baseadas em parâmetros
- **Layouts Compartilhados** - Layout consistente entre páginas

**Foco desta aula:** Entender Next.js fundamentalmente e criar uma aplicação com múltiplas páginas!

<aside>
💡

Mesmo que alguns desses conceitos ainda não tenha sido explorado nas aulas teóricas, já podem ser apresentados aos alunos de forma simplificada.

</aside>

## Conceito da Aplicação

Um blog pessoal minimalista com as funcionalidades essenciais:

1. **Página inicial** - Lista de posts do blog (Server Component)
2. **Posts individuais** - Páginas dinâmicas para cada post
3. **Página sobre** - Página estática com informações pessoais
4. **Navegação global** - Layout compartilhado entre todas as páginas
5. **Botão de curtir** - Interatividade com Client Component

## Conceitos Next.js que Aprenderemos

### 01 - App Router Structure

- Roteamento baseado em sistema de arquivos
- Páginas definidas por `page.tsx`
- Layouts com `layout.tsx`
- Rotas dinâmicas com `[slug]`

### 02 - Server Components (Padrão)

- Componentes que rodam no servidor
- Acesso direto a APIs e banco de dados
- Melhor performance
- Sem JavaScript enviado ao cliente

### 03 - Client Components

- Componentes interativos com estado
- Executam no navegador
- Necessários para useState, useEffect, eventos
- Marcados com `"use client"`

### 04 - Layouts e Templates

- Layout compartilhado entre páginas
- Navegação persistente
- Estrutura HTML consistente

### 05 - Roteamento Dinâmico

- Páginas baseadas em parâmetros
- Geração de URLs dinâmicas
- Acesso aos parâmetros da URL

## Estrutura da Aplicação

```
app/
├── layout.tsx          # Layout global com navegação
├── page.tsx            # Página inicial (lista de posts)
├── about/
│   └── page.tsx       # Página sobre
├── posts/
│   └── [slug]/
│       └── page.tsx   # Post individual dinâmico
└── components/
    ├── PostCard.tsx   # Card do post (Server Component)
    └── LikeButton.tsx # Botão curtir (Client Component)

```

## Requisitos Funcionais

### 01 - Layout Global

- Navegação com links para Home e Sobre
- Design consistente em todas as páginas
- Responsivo e moderno

### 02 - Página Inicial (Lista de Posts)

- Exibir lista de posts do blog
- Card para cada post com título, resumo e data
- Link para post completo
- Server Component para melhor performance

### 03 - Posts Individuais (Roteamento Dinâmico)

- URL do tipo `/posts/[slug]`
- Conteúdo completo do post
- Metadados (título, data, autor)
- Botão de curtir interativo

### 04 - Página Sobre

- Informações pessoais
- Página estática simples
- Contato e redes sociais

### 05 - Componente de Like (Client Component)

- Botão interativo para curtir posts
- Contador de likes com estado local
- Animações e feedback visual

### 06 - Design Responsivo

- Layout mobile-first
- Design limpo e legível
- Tipografia otimizada para leitura

## Recursos Extras

### Documentação

- [Next.js 15 Docs](https://nextjs.org/docs) - Documentação oficial
- [App Router](https://nextjs.org/docs/app) - Guia completo do App Router
- [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components) - Server vs Client Components

### Ferramentas

- [Next.js DevTools](https://chrome.google.com/webstore/detail/nextjs-devtools) - Extension do Chrome
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - Extension do VSCode

# Como o Deploy foi realizado

Este projeto foi publicado no GitHub Pages utilizando GitHub Actions. Abaixo estão os passos realizados:

1. Configuração do Next.js

No arquivo next.config.js foi configurado basePath e assetPrefix para que o site funcione corretamente no GitHub Pages:

import type { NextConfig } from "next";

const repoName = "blog-post-koru-next"; // nome do repositório no GitHub

const nextConfig: NextConfig = {
output: "export", // gera HTML estático
basePath: process.env.NODE_ENV === "production" ? `/${repoName}` : "",
assetPrefix: process.env.NODE_ENV === "production" ? `/${repoName}/` : "",
};

export default nextConfig;

✅ Isso garante que todos os links e assets funcionem no GitHub Pages.

2. Scripts do package.json

Foram utilizados os seguintes scripts:

"scripts": {
"dev": "next dev --turbopack",
"build": "next build --turbopack",
"start": "next start",
"lint": "eslint"
}

O script build gera a pasta out/ com os arquivos estáticos.

3. Rotas dinâmicas

Para páginas dinâmicas, como posts/[slug], foi adicionada a função generateStaticParams:

export async function generateStaticParams() {
const posts = getAllPosts();
return posts.map((post) => ({
slug: post.slug,
}));
}

✅ Isso garante que todas as páginas dinâmicas sejam geradas no build.

4. Workflow do GitHub Actions

Foi criado o arquivo .github/workflows/deploy.yml com as etapas:

- Instalar Node.js e dependências.

- Rodar o build (npm run build).

- Fazer upload da pasta out/.

- Publicar no GitHub Pages.

Conteúdo do workflow:

```yaml
name: Deploy Next.js to GitHub Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20.19"
          cache: "npm"

      - name: Install dependencies
        run: npm ci --legacy-peer-deps

      - name: Build Next.js
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: "./out"

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

5. Configuração do GitHub Pages

No GitHub, vá até Settings → Pages.

Em Build and Deployment, selecione:

Source: GitHub Actions.

Salve as configurações.

Obs: Caso o Pages não esteja ativado. O Pipeline de deploy irá falhar. Lembre-se de ativá-lo primeiro ou após a ativação rode novamente o pipeline.

6. Deploy final

Após o push na branch main, o workflow roda automaticamente.
O site fica disponível em:

https://seu-usuario.github.io/blog-post-koru-next/

✅ Agora, todas as alterações enviadas para main serão publicadas automaticamente no GitHub Pages.
