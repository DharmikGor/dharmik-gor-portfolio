import BrowserFrame from '../components/BrowserFrame';
import Reveal from '../components/Reveal';
import { projects, type Project } from '../data/projects';
import { Link } from '../router';
import CtaBand from './CtaBand';
import NotFoundPage from './NotFoundPage';
import PageShell from './PageShell';

interface ProjectDetailPageProps {
  projectId: string;
}

/** Splits "41% sales increase" into { value: "41%", label: "sales increase" }. */
function splitResult(result: string) {
  const match = result.match(/^(\S+)\s+(.*)$/);
  if (!match || !/\d/.test(match[1])) return { value: '', label: result };
  return { value: match[1], label: match[2] };
}

function relatedProjects(current: Project, count: number): Project[] {
  const index = projects.findIndex((p) => p.id === current.id);
  const others = [...projects.slice(index + 1), ...projects.slice(0, index)];
  return others.slice(0, count);
}

export default function ProjectDetailPage({ projectId }: ProjectDetailPageProps) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return <NotFoundPage />;

  const [heroShot, ...moreShots] = project.screenshots;
  const isShopify = project.category.toLowerCase().includes('shopify');
  const related = relatedProjects(project, 3);

  return (
    <PageShell title={`${project.title} — ${project.category} Case Study | Dharmik Gor`}>
      {/* Hero */}
      <section className="pt-12 pb-16 sm:pt-16 sm:pb-20">
        <div className="container-content">
          <Reveal>
            <Link href="/work" className="text-sm font-semibold text-stone-500 transition-colors hover:text-accent-600">
              ← All Work
            </Link>
          </Reveal>

          <div className="mt-8 max-w-3xl">
            <Reveal delay={0.05}>
              <p className="eyebrow">Case Study · {project.category}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-4 text-display-lg font-display font-semibold text-ink">{project.title}</h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 text-lg sm:text-xl leading-relaxed text-stone-600">{project.tagline}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="mt-7 flex flex-wrap gap-2" aria-label="Services delivered">
                {project.services.map((service) => (
                  <li key={service} className="tag-chip">
                    {service}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-9 flex flex-wrap gap-4">
                {project.viewProjectUrl && (
                  <a href={project.viewProjectUrl} target="_blank" rel="noreferrer noopener" className="btn-primary">
                    Visit Live Site ↗
                  </a>
                )}
                <Link href="/work" className="btn-secondary">
                  More Case Studies
                </Link>
              </div>
            </Reveal>
          </div>

          {heroShot && (
            <Reveal delay={0.1} className="mt-14">
              <BrowserFrame
                src={heroShot.src}
                alt={`${project.title} — ${heroShot.caption}`}
                url={project.viewProjectUrl}
                priority
              />
            </Reveal>
          )}

          {project.results && project.results.length > 0 && (
            <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-stone-200 bg-stone-200 lg:grid-cols-4">
              {project.results.map((result, i) => {
                const { value, label } = splitResult(result);
                return (
                  <Reveal key={result} delay={i * 0.06} className="bg-white p-6 sm:p-8">
                    {value && (
                      <p className="font-display text-3xl sm:text-4xl font-semibold text-accent-600">{value}</p>
                    )}
                    <p className="mt-2 text-sm font-medium capitalize text-stone-600">{label}</p>
                  </Reveal>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Overview + Challenge */}
      <section className="section-padding border-t border-stone-200 bg-stone-50/60">
        <div className="container-content grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="eyebrow">Overview</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 text-display-md font-display font-semibold text-ink">The project</h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-stone-600">{project.description}</p>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <p className="eyebrow">The Challenge</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 text-display-md font-display font-semibold text-ink">What needed fixing</h2>
            </Reveal>
            <Reveal delay={0.12}>
              <ul className="mt-6 space-y-4">
                {project.challenge.map((item, i) => (
                  <li key={item} className="flex gap-4 text-base leading-relaxed text-stone-600">
                    <span
                      className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent-300 text-[11px] font-semibold text-accent-600"
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="section-padding border-t border-stone-200">
        <div className="container-content">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow">The Solution</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 text-display-md font-display font-semibold text-ink">What was built</h2>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {project.solution.map((point, i) => (
              <Reveal key={point.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-stone-200 bg-white p-7 transition-colors hover:border-accent-300">
                  <span className="font-display text-xs font-semibold text-stone-400">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-ink">{point.title}</h3>
                  <p className="mt-2 text-sm sm:text-base leading-relaxed text-stone-600">{point.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {moreShots.map((shot) => (
            <Reveal key={shot.src} className="mt-16">
              <BrowserFrame
                src={shot.src}
                alt={`${project.title} — ${shot.caption}`}
                url={project.viewProjectUrl}
                caption={shot.caption}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Results + integrations */}
      <section className="section-padding border-t border-stone-200 bg-charcoal text-paper">
        <div className="container-content grid grid-cols-1 gap-14 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Reveal>
              <p className="eyebrow !text-accent-300">The Results</p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-5 font-display text-2xl sm:text-3xl font-semibold leading-snug text-paper">
                {project.outcome}
              </p>
            </Reveal>
            {project.results && project.results.length > 0 && (
              <Reveal delay={0.14}>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {project.results.map((result) => (
                    <li
                      key={result}
                      className="rounded-full border border-stone-700 px-4 py-1.5 text-sm font-medium text-stone-300"
                    >
                      {result}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </div>

          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">Apps &amp; Integrations</p>
            </Reveal>
            <Reveal delay={0.08}>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-lg border border-stone-700 bg-stone-800/60 px-3.5 py-2 text-sm font-medium text-paper"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </Reveal>
            {isShopify && (
              <p className="mt-8 text-xs leading-relaxed text-stone-500">
                Delivered through an agency development partnership — public case study credit sits with the partner
                agency.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Related case studies */}
      <section className="section-padding border-t border-stone-200">
        <div className="container-content">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Reveal>
                <p className="eyebrow">Keep Exploring</p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-4 text-display-md font-display font-semibold text-ink">More case studies</h2>
              </Reveal>
            </div>
            <Link href="/work" className="text-sm font-semibold text-ink transition-colors hover:text-accent-600">
              View all work →
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {related.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.06}>
                <Link
                  href={`/work/${item.id}`}
                  className="group block h-full overflow-hidden rounded-2xl border border-stone-200 bg-white transition-all duration-300 ease-premium hover:border-accent-300 hover:shadow-[0_24px_48px_-20px_rgba(20,19,15,0.16)]"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-stone-200">
                    <img
                      src={item.image}
                      alt={`${item.title} case study cover`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 ease-premium group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-6">
                    <span className="tag-chip !py-1">{item.category}</span>
                    <h3 className="mt-4 font-display text-lg font-semibold text-ink group-hover:text-accent-600">
                      {item.title}
                    </h3>
                    {item.results && item.results[0] && (
                      <p className="mt-2 text-sm font-semibold text-accent-700">{item.results[0]}</p>
                    )}
                    <p className="mt-4 text-sm font-semibold text-ink">Read Case Study →</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
}
