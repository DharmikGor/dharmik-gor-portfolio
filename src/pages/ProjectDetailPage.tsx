import Reveal from '../components/Reveal';
import { projects } from '../data/projects';
import { Link } from '../router';
import CtaBand from './CtaBand';
import NotFoundPage from './NotFoundPage';
import PageShell from './PageShell';

interface ProjectDetailPageProps {
  projectId: string;
}

export default function ProjectDetailPage({ projectId }: ProjectDetailPageProps) {
  const index = projects.findIndex((p) => p.id === projectId);
  if (index === -1) return <NotFoundPage />;

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const isShopify = project.category.toLowerCase().includes('shopify');

  return (
    <PageShell title={`${project.title} — ${project.category} Case Study | Dharmik Gor`}>
      <article className="section-padding">
        <div className="container-content">
          <Reveal>
            <Link
              href="/work"
              className="text-sm font-semibold text-stone-500 transition-colors hover:text-accent-600"
            >
              ← All Work
            </Link>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <Reveal delay={0.05}>
                <div className="flex items-center gap-3">
                  <span className="font-display text-sm font-semibold text-stone-400">{project.number}</span>
                  <span className="tag-chip !py-1">{project.category}</span>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-5 text-display-md font-display font-semibold text-ink">{project.title}</h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 text-base sm:text-lg leading-relaxed text-stone-600">{project.description}</p>
              </Reveal>
            </div>

            {project.viewProjectUrl && (
              <Reveal delay={0.2} className="lg:justify-self-end">
                <a
                  href={project.viewProjectUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-primary"
                >
                  Visit Live Site ↗
                </a>
              </Reveal>
            )}
          </div>

          <Reveal delay={0.1} className="mt-14">
            <div className="overflow-hidden rounded-3xl border border-stone-200 bg-stone-200">
              <img
                src={project.image}
                alt={`${project.title} case study cover`}
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
            {project.results && project.results.length > 0 && (
              <Reveal>
                <div className="h-full rounded-2xl border border-stone-200 bg-white p-8">
                  <p className="eyebrow">Results</p>
                  <ul className="mt-5 space-y-3">
                    {project.results.map((result) => (
                      <li key={result} className="flex gap-3 font-display text-lg font-semibold text-ink">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}

            <Reveal delay={0.08}>
              <div className="h-full rounded-2xl border border-stone-200 bg-white p-8">
                <p className="eyebrow">Stack &amp; Integrations</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tag-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {isShopify && (
            <p className="mt-8 text-xs text-stone-500">
              Delivered through an agency development partnership — public case study credit sits with the partner
              agency.
            </p>
          )}

          {next.id !== project.id && (
            <Reveal className="mt-16">
              <Link
                href={`/work/${next.id}`}
                className="group flex items-center justify-between gap-6 rounded-2xl border border-stone-200 bg-stone-50/60 p-8 transition-colors hover:border-accent-300"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Next Project</p>
                  <p className="mt-2 font-display text-xl font-semibold text-ink group-hover:text-accent-600">
                    {next.title}
                  </p>
                </div>
                <span className="text-2xl text-stone-400 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </Reveal>
          )}
        </div>
      </article>
      <CtaBand />
    </PageShell>
  );
}
