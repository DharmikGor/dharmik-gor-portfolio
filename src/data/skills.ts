// Technical expertise, grouped by category. No fabricated percentages —
// presented as clean tag groups per the brand brief.

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Shopify',
    skills: [
      'Shopify',
      'Shopify 2.0',
      'Liquid',
      'Shopify Plus',
      'Shopify B2B',
      'Shopify CLI',
      'Custom Themes',
      'Metafields',
      'Product Architecture',
      'Collection Architecture',
      'Checkout Customization',
      'Shopify Flow',
      'Third-party Integrations',
      'Payment Gateway Integrations',
      'POS',
      'Wholesale',
      'Custom Cart Functionality',
    ],
  },
  {
    category: 'WordPress',
    skills: [
      'WordPress',
      'Custom Themes',
      'PHP',
      'WooCommerce',
      'Divi',
      'Theme Customization',
      'Plugin Integration',
      'Custom Functionality',
      'Performance Optimization',
    ],
  },
  {
    category: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'ES6+', 'React', 'jQuery', 'AJAX', 'Responsive Design'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'Figma', 'Sketch', 'PSD Conversion', 'Shopify CLI', 'VS Code'],
  },
];

export const shopifyCapabilities: string[] = [
  'Shopify 2.0',
  'Liquid Development',
  'Shopify Plus',
  'Shopify B2B',
  'Custom Themes',
  'Metafields',
  'Shopify Flow',
  'Custom Integrations',
  'Payment Gateways',
  'POS',
  'Wholesale',
  'Performance Optimization',
  'Large Product Catalogs',
  'Custom Cart Experiences',
  'Third-party Apps',
];

export interface ComplexCommerceItem {
  title: string;
  description: string;
}

export const complexCommerceItems: ComplexCommerceItem[] = [
  {
    title: 'Large Product Catalogs',
    description: 'Custom Shopify experiences for stores with large product and variant counts.',
  },
  {
    title: 'B2B Commerce',
    description: 'Customer-specific experiences, pricing, catalogs and purchasing workflows.',
  },
  {
    title: 'Custom Cart Logic',
    description: "Complex cart requirements and business rules that go beyond Shopify's standard behavior.",
  },
  {
    title: 'Integrations',
    description: 'Third-party applications, APIs, payment systems and marketing tools.',
  },
  {
    title: 'Performance',
    description: 'Responsive, optimized storefront experiences focused on speed and usability.',
  },
  {
    title: 'Automation',
    description: 'Shopify Flow and other automation workflows.',
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  { number: '01', title: 'Understand', description: 'Understand the business requirement, existing store and technical constraints.' },
  { number: '02', title: 'Plan', description: 'Break the requirement into a practical implementation plan.' },
  { number: '03', title: 'Build', description: 'Develop clean, maintainable and responsive functionality.' },
  { number: '04', title: 'Test', description: 'Test across devices, browsers and relevant e-commerce scenarios.' },
  { number: '05', title: 'Optimize', description: 'Improve performance, usability and maintainability.' },
  { number: '06', title: 'Deliver', description: 'Deploy the solution and provide ongoing support when required.' },
];

export interface TimelineEntry {
  period: string;
  role: string;
  company: string;
  description: string;
  isPlaceholder?: boolean;
}

export const timeline: TimelineEntry[] = [
  {
    period: '2022 – Present',
    role: 'Senior Shopify / WordPress Developer',
    company: 'The CodeWhiz Solution',
    description:
      'Working on Shopify and WordPress projects including custom theme development, Shopify 2.0, Liquid customizations, third-party integrations, complex e-commerce functionality and ongoing website improvements.',
  },
  {
    period: 'Previous Experience',
    role: '[ADD PREVIOUS ROLE]',
    company: '[ADD PREVIOUS COMPANY]',
    description: 'Career experience and earlier roles will be added here.',
    isPlaceholder: true,
  },
];
