import Reveal from '../components/Reveal';
import { Link } from '../router';

export default function CtaBand() {
  return (
    <section className="section-padding border-t border-stone-200">
      <div className="container-content">
        <Reveal>
          <div className="rounded-3xl bg-charcoal px-8 py-14 text-center sm:px-14">
            <p className="eyebrow !text-accent-300">Available for freelance &amp; agency work</p>
            <h2 className="mt-4 text-display-md font-display font-semibold text-paper">
              Have a Shopify or WordPress project in mind?
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary !bg-paper !text-ink hover:!bg-accent-500 hover:!text-paper">
                Let&apos;s Work Together
              </Link>
              <Link href="/services" className="btn-secondary !border-stone-600 !text-paper hover:!border-paper">
                See Services
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
