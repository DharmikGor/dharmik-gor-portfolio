import type { ReactNode } from 'react';
import { usePageMeta, type PageMeta } from '../seo';

interface PageShellProps extends PageMeta {
  children: ReactNode;
  /** Home page hero already clears the fixed navbar, so it skips the top offset. */
  flush?: boolean;
}

export default function PageShell({ children, flush = false, ...meta }: PageShellProps) {
  usePageMeta(meta);
  return <div className={flush ? undefined : 'pt-20'}>{children}</div>;
}
