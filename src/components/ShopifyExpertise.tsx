import { shopifyCapabilities } from '../data/skills';
import Reveal from './Reveal';

export default function ShopifyExpertise() {
  return (
    <section className="section-padding border-t border-stone-200 bg-charcoal text-paper">
      <div className="container-content">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow mb-4 text-accent-400">Shopify Specialization</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-display-md font-display font-semibold text-paper">Deep Shopify Expertise</h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-base sm:text-lg text-stone-400 leading-relaxed">
              I focus on solving the parts of Shopify development that go beyond standard theme
              configuration — custom functionality, integrations, business logic, performance and
              scalable e-commerce experiences.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {shopifyCapabilities.map((capability, i) => (
            <Reveal key={capability} delay={i * 0.04}>
              <div className="group h-full rounded-xl border border-stone-700 bg-stone-900/60 p-5 transition-all duration-300 ease-premium hover:border-accent-500 hover:bg-stone-900">
                <p className="text-sm font-semibold text-stone-200 group-hover:text-paper">
                  {capability}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
