interface BrowserFrameProps {
  src: string;
  alt: string;
  url?: string;
  caption?: string;
  priority?: boolean;
}

/** Screenshot wrapped in a minimal browser chrome, with an optional caption. */
export default function BrowserFrame({ src, alt, url, caption, priority = false }: BrowserFrameProps) {
  let host = '';
  if (url) {
    try {
      host = new URL(url).host.replace(/^www\./, '');
    } catch {
      host = '';
    }
  }

  return (
    <figure>
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
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          width={1556}
          height={784}
          className="block h-auto w-full"
        />
      </div>
      {caption && <figcaption className="mt-4 text-center text-sm text-stone-500">{caption}</figcaption>}
    </figure>
  );
}
