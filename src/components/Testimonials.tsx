import { testimonials } from '../data/testimonials';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Testimonials() {
  return (
    <section className="section-padding border-t border-stone-200 bg-stone-50/60">
      <div className="container-content">
        <SectionHeading eyebrow="Client Feedback" title="What people say about working with me." align="center" />

        <div className="mt-14 flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.id} delay={i * 0.08} className="w-full max-w-xl">
              <figure className="card-premium h-full">
                <blockquote className="font-display text-lg sm:text-xl leading-relaxed text-ink">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4 border-t border-stone-200 pt-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    loading="lazy"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-display text-sm font-semibold text-ink">{testimonial.name}</p>
                    <p className="text-xs text-stone-500">{testimonial.title}</p>
                    <p className="mt-0.5 text-xs text-stone-400">{testimonial.context}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
