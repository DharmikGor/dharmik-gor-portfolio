import { highlights } from '../data/profile';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Highlights() {
  return (
    <section className="section-padding border-t border-stone-200 bg-stone-50/60">
      <div className="container-content">
        <SectionHeading eyebrow="Highlights" title="A quick snapshot." align="center" />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {highlights.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.06}>
              <div className="card-premium h-full text-center">
                <p className="font-display text-base sm:text-lg font-bold text-ink">{item.value}</p>
                <p className="mt-1.5 text-xs text-stone-500">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
