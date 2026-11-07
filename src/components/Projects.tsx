import { projects } from '../data/projects';
import { Link } from '../router';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

interface ProjectsProps {
  /** Show only the first N projects (used for the home page preview). */
  limit?: number;
}

export default function Projects({ limit }: ProjectsProps) {
  const list = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="work" className="section-padding border-t border-stone-200 bg-stone-50/60">
      <div className="container-content">
        <SectionHeading
          eyebrow="Selected Work"
          title="Recent Shopify & WordPress builds."
          supporting="Shopify development delivered through an agency development partnership — public case study credit sits with the partner agency — alongside custom WordPress builds."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {list.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.06}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-stone-200 bg-white transition-all duration-300 ease-premium hover:border-accent-300 hover:shadow-[0_24px_48px_-20px_rgba(20,19,15,0.16)]">
                <Link href={`/work/${project.id}`} className="block" aria-label={`${project.title} case study`}>
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                    <img
                      src={project.screenshots[0]?.src ?? project.image}
                      alt={`${project.title} storefront`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-500 ease-premium group-hover:scale-[1.04]"
                    />
                    {project.isPlaceholder && (
                      <span className="absolute left-4 top-4 rounded-full bg-ink/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-paper">
                        Placeholder Project
                      </span>
                    )}
                  </div>
                </Link>

                <div className="p-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-display text-xs font-semibold text-stone-400">
                      {project.number}
                    </span>
                    <span className="tag-chip !py-1">{project.category}</span>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                    <Link href={`/work/${project.id}`} className="transition-colors hover:text-accent-600">
                      {project.title}
                    </Link>
                  </h3>
                  <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-stone-600">
                    {project.description}
                  </p>

                  {project.results && project.results.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.results.map((result) => (
                        <span
                          key={result}
                          className="inline-flex items-center rounded-full border border-accent-200 bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-700"
                        >
                          {result}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs font-medium text-stone-500">
                        {tech}
                        <span className="text-stone-300 last:hidden"> · </span>
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-6">
                    <Link
                      href={`/work/${project.id}`}
                      className="text-sm font-semibold text-ink transition-colors hover:text-accent-600"
                    >
                      Case Study →
                    </Link>
                    {project.viewProjectUrl && (
                      <a
                        href={project.viewProjectUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-sm font-semibold text-stone-500 transition-colors hover:text-accent-600"
                      >
                        Live Site ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {limit && projects.length > limit && (
          <div className="mt-12 flex justify-center">
            <Link href="/work" className="btn-secondary">
              View All Work →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
