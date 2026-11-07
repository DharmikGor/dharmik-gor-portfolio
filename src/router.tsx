import { useEffect, useSyncExternalStore, type AnchorHTMLAttributes, type MouseEvent } from 'react';

/**
 * Tiny History-API router (no external dependency).
 * Netlify's `/* /index.html 200` rewrite serves the SPA for every path,
 * so deep links like /work/iceman load directly.
 */

const NAV_EVENT = 'app:navigate';

function subscribe(callback: () => void) {
  window.addEventListener('popstate', callback);
  window.addEventListener(NAV_EVENT, callback);
  return () => {
    window.removeEventListener('popstate', callback);
    window.removeEventListener(NAV_EVENT, callback);
  };
}

function normalize(path: string): string {
  if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1);
  return path || '/';
}

export function usePathname(): string {
  return useSyncExternalStore(
    subscribe,
    () => normalize(window.location.pathname),
    () => '/'
  );
}

export function navigate(to: string) {
  const url = new URL(to, window.location.origin);
  const current = window.location.pathname + window.location.search + window.location.hash;
  const next = url.pathname + url.search + url.hash;
  if (next !== current) {
    window.history.pushState({}, '', next);
    window.dispatchEvent(new Event(NAV_EVENT));
  }

  if (url.hash) {
    // Wait for the new page to render before scrolling to the anchor.
    requestAnimationFrame(() => {
      document.querySelector(url.hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  } else {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

/** Internal link: client-side navigation for same-origin paths, normal anchor otherwise. */
export function Link({ href, onClick, target, children, ...rest }: LinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    const isInternal = href.startsWith('/');
    const isModified = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0;
    if (!isInternal || isModified || (target && target !== '_self')) return;
    e.preventDefault();
    navigate(href);
  };

  return (
    <a href={href} target={target} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}

/** Sets the document title for the current page. */
export function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
