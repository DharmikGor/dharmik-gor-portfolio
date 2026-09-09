export interface Service {
  number: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    number: '01',
    title: 'Shopify Development',
    description: 'Custom Shopify stores built on Shopify 2.0 — fast, scalable and easy for your team to manage after launch.',
  },
  {
    number: '02',
    title: 'Shopify Plus Development',
    description: 'Enterprise-grade Shopify Plus builds — B2B workflows, custom checkout logic and solutions that scale with high-volume stores.',
  },
  {
    number: '03',
    title: 'Shopify Theme Customization',
    description: 'Pixel-perfect builds from your Figma, Sketch or PSD designs — responsive, on-brand and built to last.',
  },
  {
    number: '04',
    title: 'E-commerce Development',
    description: 'Product architecture, collections, metafields, cart logic and integrations tailored to how your business actually sells.',
  },
  {
    number: '05',
    title: 'WordPress Development',
    description: 'Custom WordPress and WooCommerce sites, built with clean PHP and integrations that keep running smoothly.',
  },
  {
    number: '06',
    title: 'Ongoing Development',
    description: 'Dependable, long-term development support for agencies, merchants and e-commerce businesses who need a developer they can count on.',
  },
];

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export const certifications: Certification[] = [];
export const certificationsPlaceholder = 'Certification information coming soon.';
export const testimonialsPlaceholder = 'Client testimonials will be added here.';
