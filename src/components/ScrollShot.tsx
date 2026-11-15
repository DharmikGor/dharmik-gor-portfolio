import { useCallback, useRef, useState, type CSSProperties, type SyntheticEvent } from 'react';
import FullPageLightbox from './FullPageLightbox';

interface ScrollShotProps {
  /** Tall full-page screenshot. */
  src: string;
  /** Project / site name, used in alt text and the lightbox title. */
  title: string;
  /** Live site URL: shown (as a host) in the browser bar and linked from the lightbox. */
  url?: string;
  priority?: boolean;
  /** Show the "Hover to scroll · Click to expand" hint under the frame. */
  showHint?: boolean;
  className?: string;
}

function hostOf(url?: string) {
  if (!url) return '';
  try {
    return new URL(url).host.replace(/^www\./, '');
  } catch {
    return '';
  }
}

/**
 * Browser-framed full-page screenshot that scrolls from top to bottom on hover
 * (or keyboard focus) and opens a scrollable lightbox on click / tap.
 */
export default function ScrollShot({ src, title, url, priority = false, showHint = true, className = '' }: ScrollShotProps) {
  const [open, setOpen] = useState(false);
  const [duration, setDuration] = useState(8);
  const frameRef = useRef<HTMLButtonElement>(null);
  const host = hostOf(url);

  // Scroll speed follows page length so short and long pages move at a similar pace.
  const handleLoad = useCallback((e: SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    const frame = frameRef.current;
    if (!img.naturalWidth || !frame) return;
    const pageRatio = img.naturalHeight / img.naturalWidth;
    const frameRatio = frame.clientHeight / frame.clientWidth || 0.625;
    const screens = Math.max(pageRatio / frameRatio, 1);
    setDuration(Math.min(Math.max(screens * 1.4, 4), 12));
  }, []);

  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-[0_32px_64px_-32px_rgba(20,19,15,0.35)]">
        <div className="flex items-center gap-3 border-b border-stone-200 bg-stone-100 px-4 py-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
          </div>
          {host && (
            <div className="mx-auto max-w-xs flex-1 truncate rounded-md bg-white px-3 py-1 text-center text-[11px] font-medium text-stone-500">
              {host}
            </div>
          )}
          {host && <span className="w-[42px]" aria-hidden="true" />}
        </div>

        <button
          ref={frameRef}
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`Expand the full-page screenshot of ${title}`}
          className="scroll-shot group relative block aspect-[16/10] w-full overflow-hidden bg-stone-100 text-left focus:outline-none"
          style={{ '--scroll-duration': `${duration}s` } as CSSProperties}
        >
          <img
            src={src}
            alt={`${title} — full homepage`}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            onLoad={handleLoad}
            className="scroll-shot__img"
          />
          <span className="pointer-events-none absolute bottom-3 right-3 rounded-md bg-ink/80 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-paper backdrop-blur-sm">
            Full page
          </span>
          <span className="pointer-events-none absolute inset-0 rounded-[inherit] ring-inset ring-accent-500 group-focus-visible:ring-2" />
        </button>
      </div>

      {showHint && (
        <figcaption className="mt-3 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-stone-500">
          <span className="hover-hint">Hover to scroll · Click to expand</span>
          <span className="touch-hint">Tap to view the full page</span>
        </figcaption>
      )}

      <FullPageLightbox open={open} onClose={() => setOpen(false)} src={src} title={title} url={url} host={host} />
    </figure>
  );
}
