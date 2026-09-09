// Placeholder / demo project data. Replace with real client work once
// available. Each project supports an image, category, description,
// technologies, and optional view / case-study / external links.

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  viewProjectUrl?: string;
  caseStudyUrl?: string;
  externalUrl?: string;
  isPlaceholder: boolean;
}

export const projects: Project[] = [
  {
    id: 'luxury-fashion-store',
    number: '01',
    title: 'Luxury Fashion Store',
    category: 'Shopify Plus',
    description:
      'Custom Shopify Plus storefront focused on premium product presentation, performance and conversion.',
    technologies: ['Shopify Plus', 'Liquid', 'JavaScript', 'Metafields'],
    image: '/images/projects/project-01.jpg',
    isPlaceholder: true,
  },
  {
    id: 'b2b-ecommerce-platform',
    number: '02',
    title: 'B2B E-commerce Platform',
    category: 'Shopify B2B',
    description:
      'Custom B2B storefront featuring customer-specific pricing, product organization and business-focused purchasing workflows.',
    technologies: ['Shopify', 'B2B', 'Liquid', 'Shopify Flow'],
    image: '/images/projects/project-02.jpg',
    isPlaceholder: true,
  },
  {
    id: 'high-volume-product-store',
    number: '03',
    title: 'High-Volume Product Store',
    category: 'Shopify',
    description:
      'Optimized Shopify storefront designed to handle large product and variant catalogs with a smooth customer experience.',
    technologies: ['Shopify', 'JavaScript', 'JSON', 'Liquid'],
    image: '/images/projects/project-03.jpg',
    isPlaceholder: true,
  },
  {
    id: 'wordpress-business-website',
    number: '04',
    title: 'WordPress Business Website',
    category: 'WordPress',
    description:
      "Responsive business website built with WordPress and customized to match the client's branding and content requirements.",
    technologies: ['WordPress', 'PHP', 'HTML', 'CSS'],
    image: '/images/projects/project-04.jpg',
    isPlaceholder: true,
  },
  {
    id: 'custom-ecommerce-experience',
    number: '05',
    title: 'Custom E-commerce Experience',
    category: 'Shopify',
    description:
      'Custom e-commerce experience combining third-party integrations, custom functionality and responsive UI.',
    technologies: ['Shopify', 'APIs', 'JavaScript', 'Liquid'],
    image: '/images/projects/project-05.jpg',
    isPlaceholder: true,
  },
  {
    id: 'agency-development-support',
    number: '06',
    title: 'Agency Development Support',
    category: 'Shopify / WordPress',
    description:
      'Development partnership supporting an international agency with ongoing e-commerce implementation and maintenance.',
    technologies: ['Shopify', 'WordPress', 'React', 'PHP'],
    image: '/images/projects/project-06.jpg',
    isPlaceholder: true,
  },
];
