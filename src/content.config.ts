// ─────────────────────────────────────────────────────────────
// "COLEÇÕES" DE CONTEÚDO
// Aqui o site aprende quais pastas de Markdown existem e quais
// campos cada arquivo precisa ter no cabeçalho (o bloco entre ---).
// Pense nisso como a declaração de uma struct em C: se um arquivo
// esquecer um campo obrigatório, o build falha e avisa onde.
// ─────────────────────────────────────────────────────────────
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// src/content/projects/<língua>/<nome-do-projeto>.md
const projects = defineCollection({
  loader: glob({ pattern: '{pt,fr,en}/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(), // uma ou duas frases; aparece nas listas
      date: z.coerce.date(), // usada só para ordenar (mais recente primeiro)
      period: z.string(), // texto livre mostrado na página, ex.: "2024 – 2025"
      context: z.string().optional(), // onde foi feito, ex.: "Laboratório GPEC, UFC"
      role: z.string().optional(),
      tech: z.array(z.string()).default([]),
      links: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
      cover: image().optional(), // caminho da imagem de capa
      coverAlt: z.string().default(''), // descrição da imagem (acessibilidade)
      featured: z.boolean().default(false), // true = aparece na página inicial
      draft: z.boolean().default(false), // true = só aparece no seu computador
    }),
});

// src/content/blog/<língua>/<nome-do-artigo>.md
const blog = defineCollection({
  loader: glob({ pattern: '{pt,fr,en}/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

// src/content/pages/<língua>/{home,hobbies,cv}.md  (páginas fixas)
const pages = defineCollection({
  loader: glob({ pattern: '{pt,fr,en}/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { projects, blog, pages };
