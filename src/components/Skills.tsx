import { skillGroups } from '../data/skills';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Skills() {
  return (
    <section id="expertise" className="section-padding border-t border-stone-200">
      <div className="container-content">
        <SectionHeading
          eyebrow="Technical Expertise"
          title="A focused, Shopify-first toolkit."
          supporting="WordPress, React and PHP round out a stack built primarily for serious e-commerce work."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.08}>
              <div className="card-premium h-full">
                <h3 className="font-display text-lg font-semibold text-ink mb-5">{group.category}</h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span key={skill} className="tag-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
