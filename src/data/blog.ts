export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  url?: string;
}

// Placeholder editorial content — replace excerpts with real article
// summaries once articles are published. Lorem ipsum used per brief.
export const blogPosts: BlogPost[] = [
  {
    id: 'shopify-2-0-better-ecommerce',
    title: 'Shopify 2.0: Building Better E-commerce Experiences',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sections, blocks and metafields have changed how flexible a Shopify theme can be — here is how that flexibility translates into better storefronts.',
    category: 'Shopify',
    readTime: '6 min read',
  },
  {
    id: 'shopify-b2b-what-merchants-need',
    title: 'Shopify B2B: What Merchants Need to Consider',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Customer-specific pricing, catalogs and purchasing workflows all change the shape of a B2B implementation.',
    category: 'Shopify B2B',
    readTime: '7 min read',
  },
  {
    id: 'custom-development-vs-apps',
    title: 'Choosing Between Custom Shopify Development and Apps',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Not every requirement needs a custom build — but knowing when it does is the difference between a fast fix and long-term technical debt.',
    category: 'Shopify',
    readTime: '5 min read',
  },
  {
    id: 'scalable-shopify-architecture',
    title: 'Building Scalable Shopify Stores With Better Architecture',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Product architecture, collection structure and metafields decisions made early on pay off as a catalog grows.',
    category: 'Shopify',
    readTime: '8 min read',
  },
];
