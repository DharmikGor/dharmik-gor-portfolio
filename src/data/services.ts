export interface Service {
  number: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    number: '01',
    title: 'Shopify Development',
    description: 'Custom Shopify stores, themes, sections, templates, Liquid development and Shopify 2.0 implementations.',
  },
  {
    number: '02',
    title: 'Shopify Plus Development',
    description: 'Advanced Shopify Plus development, B2B requirements, custom functionality and scalable e-commerce solutions.',
  },
  {
    number: '03',
    title: 'Shopify Theme Customization',
    description: 'Pixel-perfect implementation from Figma, Sketch or PSD designs with responsive and maintainable code.',
  },
  {
    number: '04',
    title: 'E-commerce Development',
    description: 'Custom e-commerce functionality, product architecture, collections, metafields, cart functionality and integrations.',
  },
  {
    number: '05',
    title: 'WordPress Development',
    description: 'Custom WordPress websites, PHP development, WooCommerce, theme customization and third-party integrations.',
  },
  {
    number: '06',
    title: 'Ongoing Development',
    description: 'Long-term freelance development support for agencies, merchants and e-commerce businesses.',
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
