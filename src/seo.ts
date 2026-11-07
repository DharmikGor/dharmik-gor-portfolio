import { useEffect } from 'react';

export const SITE_URL = 'https://dharmikgor.netlify.app';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/icons/og-cover.png`;

export interface PageMeta {
  title: string;
  description: string;
  /** Path of the page, e.g. "/work/iceman". */
  path: string;
  image?: string;
  noindex?: boolean;
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/** Updates title, description, canonical, Open Graph and Twitter tags for the current page. */
export function usePageMeta({ title, description, path, image = DEFAULT_OG_IMAGE, noindex = false }: PageMeta) {
  useEffect(() => {
    const url = `${SITE_URL}${path === '/' ? '/' : path}`;
    const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

    document.title = title;
    setMeta('name', 'description', description);
    setMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow');
    setCanonical(url);

    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', imageUrl);

    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', imageUrl);
  }, [title, description, path, image, noindex]);
}
