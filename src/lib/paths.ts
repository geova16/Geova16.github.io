// Monta endereços internos do site.
// Use sempre href('/pt/blog/') em vez de escrever '/pt/blog/' direto:
// assim os links continuam certos se o site for publicado numa subpasta.
import { langCodes, type Lang } from '../site.config';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function href(path: string): string {
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

// Caminho atual sem a base e sem a língua. Ex.: '/pt/blog/' → '/blog/'
export function pathWithoutLang(pathname: string): string {
  const withoutBase = base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  const parts = withoutBase.split('/').filter(Boolean);
  if (langCodes.includes(parts[0] as Lang)) parts.shift();
  return parts.length ? `/${parts.join('/')}/` : '/';
}
