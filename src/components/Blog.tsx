import { blogPosts } from '../data/blog';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Blog() {
  return (
    <section id="insights" className="section-padding border-t border-stone-200">
      <div className="container-content">
        <SectionHeading eyebrow="Blog / Insights" title="Notes on Shopify & e-commerce development." />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {blogPosts.map((post, i) => (
            <Reveal key={post.id} delay={i * 0.07}>
              <article className="card-premium h-full flex flex-col">
                <span className="eyebrow">{post.category}</span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink leading-snug">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600 flex-1">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs font-medium text-stone-400">{post.readTime}</span>
                  <span className="text-sm font-semibold text-stone-400" title="Full article coming soon">
                    Read Article →
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
