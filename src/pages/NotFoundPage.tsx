import { Link } from '../router';
import PageShell from './PageShell';

export default function NotFoundPage() {
  return (
    <PageShell title="Page not found | Dharmik Gor">
      <section className="section-padding">
        <div className="container-content text-center">
          <p className="eyebrow">404</p>
          <h1 className="mt-4 text-display-md font-display font-semibold text-ink">This page doesn&apos;t exist.</h1>
          <p className="mt-5 text-stone-600">The link may be outdated or mistyped.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary">Back to Home</Link>
            <Link href="/work" className="btn-secondary">View Work</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
