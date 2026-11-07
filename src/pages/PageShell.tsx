import type { ReactNode } from 'react';
import { useDocumentTitle } from '../router';

interface PageShellProps {
  title: string;
  children: ReactNode;
  /** Home page hero already clears the fixed navbar, so it skips the top offset. */
  flush?: boolean;
}

export default function PageShell({ title, children, flush = false }: PageShellProps) {
  useDocumentTitle(title);
  return <div className={flush ? undefined : 'pt-20'}>{children}</div>;
}
