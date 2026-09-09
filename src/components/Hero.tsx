import { motion } from 'framer-motion';
import { hero, profile } from '../data/profile';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

const wordVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.35 + i * 0.06, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function Hero() {
  const reduced = usePrefersReducedMotion();
  const words = hero.headline.split(' ');

  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32">
      {/* subtle background grid — decorative only */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(20,19,15,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(20,19,15,0.05) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
        aria-hidden="true"
      />

      <div className="container-content relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white/70 px-4 py-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
          <span className="text-xs font-semibold tracking-wide text-stone-700">{hero.availability}</span>
        </motion.div>

        <p className="eyebrow mb-4">{hero.eyebrow} — {profile.title}</p>

        <h1 className="max-w-5xl text-display-xl font-display font-bold text-ink">
          {reduced ? (
            hero.headline
          ) : (
            <span className="flex flex-wrap gap-x-[0.28em]">
              {words.map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  custom={i}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          )}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-xl text-base sm:text-lg text-stone-600 leading-relaxed"
        >
          {hero.supporting}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href={hero.ctaPrimary.href} className="btn-primary">
            {hero.ctaPrimary.label}
          </a>
          <a href={hero.ctaSecondary.href} className="btn-secondary">
            {hero.ctaSecondary.label}
          </a>
          <a href={hero.ctaTertiary.href} className="btn-ghost" download>
            {hero.ctaTertiary.label}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-16 flex flex-wrap gap-3"
          aria-label="Core technologies"
        >
          {hero.techLabels.map((label) => (
            <span key={label} className="tag-chip">
              {label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
