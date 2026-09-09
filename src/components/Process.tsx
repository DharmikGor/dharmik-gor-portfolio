import { processSteps } from '../data/skills';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Process() {
  return (
    <section className="section-padding border-t border-stone-200">
      <div className="container-content">
        <SectionHeading eyebrow="How I Work" title="A practical, transparent process." />

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.06}>
              <div className="flex gap-5">
                <span className="font-display text-2xl font-bold text-stone-300">{step.number}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm sm:text-base leading-relaxed text-stone-600">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
