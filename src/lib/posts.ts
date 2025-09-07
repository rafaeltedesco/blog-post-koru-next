// lib/posts.ts
export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
}

export const posts: Post[] = [
  {
    slug: "primeiro-post",
    title: "Meu Primeiro Post no Blog",
    excerpt: "Este é o primeiro post do meu blog pessoal. Aqui vou compartilhar minhas experiências com desenvolvimento web.",
    content: `# Bem-vindos ao meu blog!

Este é o meu primeiro post aqui no blog. Decidi criar este espaço para compartilhar:

- Minhas experiências com desenvolvimento web
- Tutoriais e dicas técnicas
- Projetos interessantes que estou trabalhando
- Reflexões sobre tecnologia

Espero que gostem do conteúdo e fiquem à vontade para comentar e dar sugestões!

## Próximos posts

Nos próximos posts vou falar sobre:
- React e Next.js
- TypeScript na prática
- Design de interfaces
- Performance web

Até a próxima! 👋`,
    date: "2024-01-15",
    author: "Seu Nome",
    readTime: "3 min"
  },
  {
    slug: "aprendendo-nextjs",
    title: "Aprendendo Next.js na Prática",
    excerpt: "Minhas impressões sobre o Next.js depois de criar este blog. Uma framework poderosa para React.",
    content: `# Aprendendo Next.js na Prática

Depois de criar este blog com Next.js, quero compartilhar minhas primeiras impressões sobre esta framework incrível.

## Por que Next.js?

Next.js resolve muitos problemas do React "puro":

- **Roteamento automático** - Sem configuração complexa
- **Server Components** - Performance superior
- **Developer Experience** - Hot reload instantâneo

## App Router vs Pages Router

O novo App Router é uma revolução:
- Roteamento baseado em pastas
- Layouts aninhados
- Server e Client Components co-existindo

## Conclusão

Next.js tornou o desenvolvimento React muito mais produtivo. Recomendo para todos os projetos!`,
    date: "2024-01-22",
    author: "Seu Nome",
    readTime: "5 min"
  },
  {
    slug: "typescript-essencial",
    title: "TypeScript: Por que Todo Dev Deveria Usar",
    excerpt: "TypeScript não é só 'JavaScript com tipos'. É uma ferramenta que revoluciona a forma como desenvolvemos.",
    content: `# TypeScript: Por que Todo Dev Deveria Usar

TypeScript se tornou essencial no desenvolvimento moderno. Aqui está o porquê.

## Benefícios do TypeScript

### 1. Catch de Erros em Desenvolvimento
- Erros detectados antes da execução
- IntelliSense poderoso
- Refactoring seguro

### 2. Documentação Viva
\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}
\`\`\`

### 3. Melhor DX (Developer Experience)
- Autocomplete inteligente
- Navegação de código
- Detecção de código não utilizado

## Quando Usar TypeScript?

**Sempre!** Especialmente em:
- Projetos grandes
- Equipes múltiplas
- Aplicações críticas
- Bibliotecas públicas

## Conclusão

TypeScript não adiciona complexidade, remove incerteza. Uma vez que você se acostuma, não consegue mais viver sem!`,
    date: "2024-01-29",
    author: "Seu Nome",
    readTime: "4 min"
  }
];

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug);
}
