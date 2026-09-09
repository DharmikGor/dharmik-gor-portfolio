import { services } from '../data/services';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Services() {
  return (
    <section id="services" className="section-padding border-t border-stone-200 bg-stone-50/60">
      <div className="container-content">
        <SectionHeading
          eyebrow="How I Can Help"
          title="Development support built around your e-commerce needs."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.number} delay={i * 0.07}>
              <div className="card-premium h-full flex flex-col">
                <span className="font-display text-sm font-semibold text-accent-600">{service.number}</span>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink">{service.title}</h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
