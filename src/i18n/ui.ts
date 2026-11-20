// ─────────────────────────────────────────────────────────────
// TEXTOS CURTOS DA INTERFACE (menu, botões, títulos de seção)
// nas três línguas. Os textos longos (apresentação, projetos,
// artigos, CV) ficam em arquivos Markdown na pasta src/content/.
//
// Para mudar um texto: edite a mesma chave nas três línguas.
// ─────────────────────────────────────────────────────────────
import type { Lang } from '../site.config';

export const ui = {
  pt: {
    'nav.projects': 'Projetos',
    'nav.blog': 'Blog',
    'nav.cv': 'CV',
    'nav.hobbies': 'Hobbies',
    'nav.label': 'Menu principal',
    'lang.label': 'Mudar de língua',
    'skip': 'Pular para o conteúdo',

    'home.featured': 'Projetos em destaque',
    'home.allProjects': 'Ver todos os projetos',
    'home.cv': 'Ver o CV',

    'projects.title': 'Projetos',
    'projects.description': 'Projetos técnicos de eletrônica, sistemas embarcados e energia.',
    'project.period': 'Período',
    'project.context': 'Contexto',
    'project.role': 'Meu papel',
    'project.tech': 'Tecnologias',
    'project.links': 'Links',
    'project.back': 'Todos os projetos',

    'blog.title': 'Blog',
    'blog.description': 'Artigos sobre o que estou estudando e construindo.',
    'blog.empty': 'Ainda não há artigos publicados.',
    'blog.back': 'Todos os artigos',

    'cv.download': 'Baixar o CV em PDF',

    'footer.source': 'Código deste site',
    'notfound.title': 'Página não encontrada',
    'notfound.text': 'Este endereço não existe. Volte para a página inicial:',
  },

  fr: {
    'nav.projects': 'Projets',
    'nav.blog': 'Blog',
    'nav.cv': 'CV',
    'nav.hobbies': 'Loisirs',
    'nav.label': 'Menu principal',
    'lang.label': 'Changer de langue',
    'skip': 'Aller au contenu',

    'home.featured': 'Projets à la une',
    'home.allProjects': 'Voir tous les projets',
    'home.cv': 'Voir le CV',

    'projects.title': 'Projets',
    'projects.description': "Projets techniques en électronique, systèmes embarqués et énergie.",
    'project.period': 'Période',
    'project.context': 'Contexte',
    'project.role': 'Mon rôle',
    'project.tech': 'Technologies',
    'project.links': 'Liens',
    'project.back': 'Tous les projets',

    'blog.title': 'Blog',
    'blog.description': "Articles sur ce que j’étudie et ce que je construis.",
    'blog.empty': "Aucun article publié pour l’instant.",
    'blog.back': 'Tous les articles',

    'cv.download': 'Télécharger le CV en PDF',

    'footer.source': 'Code de ce site',
    'notfound.title': 'Page introuvable',
    'notfound.text': "Cette adresse n’existe pas. Retournez à la page d’accueil :",
  },

  en: {
    'nav.projects': 'Projects',
    'nav.blog': 'Blog',
    'nav.cv': 'CV',
    'nav.hobbies': 'Hobbies',
    'nav.label': 'Main menu',
    'lang.label': 'Change language',
    'skip': 'Skip to content',

    'home.featured': 'Featured projects',
    'home.allProjects': 'See all projects',
    'home.cv': 'View CV',

    'projects.title': 'Projects',
    'projects.description': 'Technical projects in electronics, embedded systems and energy.',
    'project.period': 'Period',
    'project.context': 'Context',
    'project.role': 'My role',
    'project.tech': 'Technologies',
    'project.links': 'Links',
    'project.back': 'All projects',

    'blog.title': 'Blog',
    'blog.description': "Articles about what I’m studying and building.",
    'blog.empty': 'No articles published yet.',
    'blog.back': 'All articles',

    'cv.download': 'Download CV as PDF',

    'footer.source': 'Source code of this site',
    'notfound.title': 'Page not found',
    'notfound.text': 'This address does not exist. Go back to the home page:',
  },
} as const;

export type UiKey = keyof (typeof ui)['pt'];

// Uso nas páginas:  const t = useTranslations(lang);  t('nav.blog')
export function useTranslations(lang: Lang) {
  return (key: UiKey): string => ui[lang][key];
}
