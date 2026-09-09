import { resumeCTA } from '../data/profile';
import Reveal from './Reveal';

export default function ResumeCTA() {
  return (
    <section className="section-padding border-t border-stone-200">
      <div className="container-content">
        <Reveal>
          <div className="rounded-3xl border border-stone-200 bg-stone-50/80 px-8 py-16 text-center sm:px-16">
            <h2 className="text-display-sm font-display font-semibold text-ink max-w-2xl mx-auto">
              {resumeCTA.headline}
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-base text-stone-600 leading-relaxed">
              {resumeCTA.supporting}
            </p>
            <a href={resumeCTA.href} download className="btn-primary mt-8">
              {resumeCTA.buttonLabel}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
