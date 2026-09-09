import { timeline } from '../data/skills';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Timeline() {
  return (
    <section id="story" className="section-padding border-t border-stone-200 bg-stone-50/60">
      <div className="container-content">
        <SectionHeading eyebrow="My Journey" title="A track record built on real Shopify projects." />

        <div className="mt-16 relative max-w-3xl">
          <div
            className="absolute left-[9px] top-2 bottom-2 w-px bg-stone-300 sm:left-[13px]"
            aria-hidden="true"
          />

          <ol className="space-y-12">
            {timeline.map((entry, i) => (
              <Reveal key={entry.period} delay={i * 0.1}>
                <li className="relative pl-10 sm:pl-14">
                  <span
                    className={`absolute left-0 top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 sm:h-7 sm:w-7 ${
                      entry.isPlaceholder
                        ? 'border-stone-300 bg-stone-100'
                        : 'border-accent-500 bg-accent-500'
                    }`}
                    aria-hidden="true"
                  >
                    {!entry.isPlaceholder && <span className="h-2 w-2 rounded-full bg-paper" />}
                  </span>

                  <p className="eyebrow mb-2">{entry.period}</p>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink">{entry.role}</h3>
                  <p className="mt-1 text-sm font-medium text-stone-500">{entry.company}</p>
                  <p className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed text-stone-600">
                    {entry.description}
                  </p>
                  {entry.isPlaceholder && (
                    <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-stone-400">
                      Placeholder — timeline expands as history is added
                    </p>
                  )}
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
