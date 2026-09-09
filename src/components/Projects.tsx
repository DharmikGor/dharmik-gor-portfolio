import { projects } from '../data/projects';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Projects() {
  return (
    <section id="work" className="section-padding border-t border-stone-200 bg-stone-50/60">
      <div className="container-content">
        <SectionHeading
          eyebrow="Selected Work"
          title="Recent Shopify & WordPress builds."
          supporting="Case studies below are demo placeholders and will be replaced with real client work as projects are confirmed for publication."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.06}>
              <article className="group h-full overflow-hidden rounded-2xl border border-stone-200 bg-white transition-all duration-300 ease-premium hover:border-accent-300 hover:shadow-[0_24px_48px_-20px_rgba(20,19,15,0.16)]">
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                  <img
                    src={project.image}
                    alt={`${project.title} — placeholder preview`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 ease-premium group-hover:scale-[1.04]"
                  />
                  {project.isPlaceholder && (
                    <span className="absolute left-4 top-4 rounded-full bg-ink/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-paper">
                      Placeholder Project
                    </span>
                  )}
                </div>

                <div className="p-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-display text-xs font-semibold text-stone-400">
                      {project.number}
                    </span>
                    <span className="tag-chip !py-1">{project.category}</span>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-semibold text-ink">{project.title}</h3>
                  <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-stone-600">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs font-medium text-stone-500">
                        {tech}
                        <span className="text-stone-300 last:hidden"> · </span>
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-5">
                    <span
                      className="text-sm font-semibold text-stone-400 cursor-not-allowed"
                      title="Project URL not yet available"
                    >
                      View Project
                    </span>
                    <span
                      className="text-sm font-semibold text-stone-400 cursor-not-allowed"
                      title="Case study not yet published"
                    >
                      Case Study
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
