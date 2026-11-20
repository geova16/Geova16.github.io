// Funções que buscam o conteúdo (projetos, artigos, páginas) de uma língua.
// As páginas em src/pages/ chamam estas funções em vez de repetir a lógica.
import { getCollection, type CollectionEntry } from 'astro:content';
import { langCodes, type Lang } from '../site.config';
import { href } from './paths';

// Rascunhos (draft: true) aparecem em "npm run dev", mas nunca no site publicado.
const visible = ({ data }: { data: { draft?: boolean } }) =>
  import.meta.env.PROD ? data.draft !== true : true;

// O id de cada arquivo é "língua/nome-do-arquivo", ex.: "pt/farmbot".
export function splitId(id: string): { lang: Lang; slug: string } {
  const [lang, ...rest] = id.split('/');
  return { lang: lang as Lang, slug: rest.join('/') };
}

const newestFirst = (a: { data: { date: Date } }, b: { data: { date: Date } }) =>
  b.data.date.valueOf() - a.data.date.valueOf();

export async function getProjects(lang: Lang): Promise<CollectionEntry<'projects'>[]> {
  const all = await getCollection('projects', visible);
  return all.filter((entry) => splitId(entry.id).lang === lang).sort(newestFirst);
}

export async function getPosts(lang: Lang): Promise<CollectionEntry<'blog'>[]> {
  const all = await getCollection('blog', visible);
  return all.filter((entry) => splitId(entry.id).lang === lang).sort(newestFirst);
}

export async function getPage(lang: Lang, name: 'home' | 'hobbies' | 'cv') {
  const all = await getCollection('pages');
  const page = all.find((entry) => entry.id === `${lang}/${name}`);
  if (!page) throw new Error(`Falta o arquivo src/content/pages/${lang}/${name}.md`);
  return page;
}

// Para o seletor de língua nas páginas de projeto e de artigo:
// se existir um arquivo com o MESMO NOME na outra língua, aponta para ele;
// se não existir, aponta para a lista (ex.: /fr/projects/).
export async function findTranslations(kind: 'projects' | 'blog', slug: string) {
  const result: Partial<Record<Lang, string>> = {};
  for (const lang of langCodes) {
    const entries = kind === 'projects' ? await getProjects(lang) : await getPosts(lang);
    const exists = entries.some((entry) => splitId(entry.id).slug === slug);
    result[lang] = href(`/${lang}/${kind}/${exists ? `${slug}/` : ''}`);
  }
  return result;
}

// Formata uma data na língua da página. Ex.: "12 de novembro de 2026".
export function formatDate(date: Date, lang: Lang): string {
  const locale = { pt: 'pt-BR', fr: 'fr-FR', en: 'en-GB' }[lang];
  return date.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}
