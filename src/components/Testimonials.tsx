import { testimonialsPlaceholder } from '../data/services';
import Reveal from './Reveal';

export default function Testimonials() {
  return (
    <section className="section-padding border-t border-stone-200 bg-stone-50/60">
      <div className="container-content">
        <Reveal>
          <div className="mx-auto max-w-2xl rounded-2xl border border-dashed border-stone-300 bg-white/60 p-12 text-center">
            <p className="eyebrow mb-3">Client Feedback</p>
            <p className="font-display text-xl sm:text-2xl text-stone-500">{testimonialsPlaceholder}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
