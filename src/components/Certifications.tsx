import { certifications, certificationsPlaceholder } from '../data/services';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Certifications() {
  return (
    <section className="section-padding border-t border-stone-200">
      <div className="container-content">
        <SectionHeading eyebrow="Certifications" title="Professional credentials." />

        <div className="mt-10">
          {certifications.length === 0 ? (
            <Reveal>
              <div className="rounded-2xl border border-dashed border-stone-300 bg-stone-50/60 p-10 text-center">
                <p className="text-stone-500">{certificationsPlaceholder}</p>
              </div>
            </Reveal>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {certifications.map((cert) => (
                <div key={cert.name} className="card-premium">
                  <h3 className="font-display text-lg font-semibold text-ink">{cert.name}</h3>
                  <p className="mt-1 text-sm text-stone-500">
                    {cert.issuer} · {cert.date}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
