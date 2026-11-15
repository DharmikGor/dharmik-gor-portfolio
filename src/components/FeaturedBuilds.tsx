import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { projects } from '../data/projects';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { Link } from '../router';
import Reveal from './Reveal';
import ScrollShot from './ScrollShot';

/**
 * Home page showcase: one featured build at a time with a hover-to-scroll
 * full-page preview, prev/next controls and a thumbnail strip.
 */
export default function FeaturedBuilds() {
  const [index, setIndex] = useState(0);
  const reduced = usePrefersReducedMotion();
  const stripRef = useRef<HTMLDivElement>(null);
  const total = projects.length;
  const project = projects[index];

  const go = (next: number) => {
    const i = (next + total) % total;
    setIndex(i);
    // Keep the active thumbnail visible in the strip on small screens.
    const thumb = stripRef.current?.querySelector<HTMLElement>(`[data-index="${i}"]`);
    thumb?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', inline: 'center', block: 'nearest' });
  };

  return (
    <section id="featured" className="section-padding border-t border-stone-200" aria-labelledby="featured-heading">
      <div className="container-content">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Showcase</p>
              <h2 id="featured-heading" className="mt-4 flex items-baseline gap-3 text-display-md font-display font-semibold text-ink">
                Featured builds
                <span className="font-mono text-sm font-medium text-stone-400">{total}</span>
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <p className="font-mono text-sm text-stone-500" aria-live="polite">
                {index + 1} / {total}
              </p>
              <button
                type="button"
                onClick={() => go(index - 1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-ink transition-colors hover:border-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
                aria-label="Previous project"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-ink transition-colors hover:border-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
                aria-label="Next project"
              >
                →
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="mt-10">
          <div className="rounded-3xl border border-stone-200 bg-white p-5 sm:p-8">
            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: reduced ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduced ? 0 : -8 }}
                transition={{ duration: reduced ? 0.01 : 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 gap-8 lg:grid-cols-[1.55fr_1fr] lg:gap-10"
              >
                <ScrollShot src={project.fullPage} title={project.title} url={project.viewProjectUrl} />

                <div className="flex flex-col">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-xs font-semibold text-stone-400">{project.number}</span>
                    <span className="tag-chip !py-1">{project.category}</span>
                  </div>

                  <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink">{project.title}</h3>
                    {project.viewProjectUrl && (
                      <a
                        href={project.viewProjectUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-sm font-semibold text-accent-700 transition-colors hover:text-accent-600"
                      >
                        Visit site ↗
                      </a>
                    )}
                  </div>

                  <p className="mt-2 font-mono text-xs text-stone-500">{project.services.slice(0, 3).join(' / ')}</p>

                  <p className="mt-5 text-sm sm:text-base leading-relaxed text-stone-600">{project.tagline}</p>

                  {project.results && project.results.length > 0 && (
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.results.slice(0, 3).map((result) => (
                        <li
                          key={result}
                          className="inline-flex items-center rounded-full border border-accent-200 bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-700"
                        >
                          {result}
                        </li>
                      ))}
                    </ul>
                  )}

                  <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-1 text-xs font-medium text-stone-500">
                    {project.technologies.slice(0, 5).map((tech, i) => (
                      <li key={tech}>
                        {i > 0 && <span className="mr-2 text-stone-300">·</span>}
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap items-center gap-4 pt-8">
                    <Link href={`/work/${project.id}`} className="btn-primary">
                      Read Case Study →
                    </Link>
                    <Link href="/work" className="text-sm font-semibold text-ink transition-colors hover:text-accent-600">
                      All work
                    </Link>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </Reveal>

        <div
          ref={stripRef}
          className="mt-6 flex snap-x gap-3 overflow-x-auto pb-2 [scrollbar-width:thin]"
          role="tablist"
          aria-label="Choose a featured project"
        >
          {projects.map((p, i) => {
            const active = i === index;
            return (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={active}
                data-index={i}
                onClick={() => go(i)}
                className="group w-32 shrink-0 snap-start text-left focus:outline-none sm:w-36"
              >
                <span
                  className={`block overflow-hidden rounded-lg border-2 transition-colors ${
                    active ? 'border-accent-500' : 'border-transparent group-hover:border-stone-300'
                  } group-focus-visible:border-accent-500`}
                >
                  <img
                    src={p.thumb}
                    alt=""
                    loading="lazy"
                    width={480}
                    height={300}
                    className={`block aspect-[16/10] w-full object-cover transition-opacity ${
                      active ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'
                    }`}
                  />
                </span>
                <span className={`mt-2 block truncate text-xs font-semibold ${active ? 'text-ink' : 'text-stone-500'}`}>
                  {p.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
