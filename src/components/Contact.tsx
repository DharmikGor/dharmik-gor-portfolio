import { contact, contactSection, profile } from '../data/profile';
import ContactForm from './ContactForm';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Contact() {
  return (
    <section id="contact" className="section-padding border-t border-stone-200 bg-stone-50/60">
      <div className="container-content">
        <SectionHeading eyebrow="Contact" title={contactSection.headline} supporting={contactSection.supporting} />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <dl className="space-y-6">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">Email</dt>
                <dd className="mt-1.5">
                  <a
                    href={`mailto:${contact.email}`}
                    className="font-display text-lg sm:text-xl font-semibold text-ink hover:text-accent-600 transition-colors"
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
                  Phone / WhatsApp
                </dt>
                <dd className="mt-1.5">
                  <a
                    href={`tel:${contact.phoneHref}`}
                    className="font-display text-lg sm:text-xl font-semibold text-ink hover:text-accent-600 transition-colors"
                  >
                    {contact.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">LinkedIn</dt>
                <dd className="mt-1.5">
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-display text-lg sm:text-xl font-semibold text-ink hover:text-accent-600 transition-colors"
                  >
                    linkedin.com/in/dharmikgor
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">Location</dt>
                <dd className="mt-1.5 font-display text-lg sm:text-xl font-semibold text-ink">
                  {contact.location}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
                  Availability
                </dt>
                <dd className="mt-1.5 text-base text-stone-600">{profile.workType}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card-premium">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
