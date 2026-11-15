import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, type MouseEvent } from 'react';
import { createPortal } from 'react-dom';

interface FullPageLightboxProps {
  open: boolean;
  onClose: () => void;
  src: string;
  title: string;
  url?: string;
  host?: string;
  /** Phone-width window for mobile captures. */
  narrow?: boolean;
}

/** Modal that shows a full-page screenshot in a scrollable browser window. */
export default function FullPageLightbox({ open, onClose, src, title, url, host, narrow = false }: FullPageLightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/80 p-3 backdrop-blur-sm sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} — full-page screenshot`}
        >
          <motion.div
            className={`flex h-full max-h-[92vh] w-full flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ${narrow ? 'max-w-sm' : 'max-w-5xl'}`}
            initial={{ y: 24, scale: 0.98 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e: MouseEvent) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-stone-200 bg-stone-100 px-4 py-3">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
              </div>
              <p className="min-w-0 flex-1 truncate text-sm font-semibold text-ink">
                {title}
                {host && <span className="ml-2 font-normal text-stone-500">{host}</span>}
              </p>
              {url && (
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hidden text-sm font-semibold text-accent-700 transition-colors hover:text-accent-600 sm:inline"
                >
                  Visit site ↗
                </a>
              )}
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-full text-stone-600 transition-colors hover:bg-stone-200 hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
                aria-label="Close"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto overscroll-contain bg-stone-100">
              <img src={src} alt={`${title} — full homepage`} className="block h-auto w-full" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
