import { about, profile } from '../data/profile';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="section-padding border-t border-stone-200">
      <div className="container-content">
        <SectionHeading eyebrow={about.sectionTitle} title={about.headline} />

        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <Reveal>
            <div className="relative">
              <div className="aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-stone-300 bg-gradient-to-br from-stone-800 via-stone-900 to-charcoal">
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-8 text-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-stone-500/50 text-3xl font-display font-bold text-stone-300">
                    {profile.initials}
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
                    {about.portraitPlaceholderNote}
                  </p>
                  <p className="text-xs text-stone-500 max-w-[220px]">
                    Replace this placeholder with a studio-style head-and-shoulders portrait
                    (dark charcoal background, smart casual attire).
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:block rounded-xl border border-stone-300 bg-paper px-5 py-4 shadow-lg">
                <p className="text-2xl font-display font-bold text-ink">{profile.experienceYears}</p>
                <p className="text-xs text-stone-500">Building e-commerce</p>
              </div>
            </div>
          </Reveal>

          <div>
            {about.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className="mb-5 text-base sm:text-lg leading-relaxed text-stone-700 last:mb-0">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {about.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="card-premium h-full text-center sm:text-left">
                <p className="font-display text-lg sm:text-xl font-bold text-ink">{stat.value}</p>
                <p className="mt-1.5 text-xs sm:text-sm text-stone-500">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
