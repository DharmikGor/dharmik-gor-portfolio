import { complexCommerceItems } from '../data/skills';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function ComplexCommerce() {
  return (
    <section className="section-padding border-t border-stone-200">
      <div className="container-content">
        <SectionHeading eyebrow="Complex E-commerce Experience" title="Beyond the Theme Editor." />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {complexCommerceItems.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07}>
              <div className="card-premium h-full">
                <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
