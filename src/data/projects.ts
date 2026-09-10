// Real client work delivered via The CodeWhiz Solution's white-label
// development partnership with Arctic Grey, a Shopify Plus agency.
// Arctic Grey holds the public client relationship and case study
// credit; these entries describe the Shopify development work done
// on each store.

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  results?: string[];
  viewProjectUrl?: string;
  caseStudyUrl?: string;
  externalUrl?: string;
  isPlaceholder: boolean;
}

export const projects: Project[] = [
  {
    id: 'iceman',
    number: '01',
    title: 'Iceman',
    category: 'Shopify',
    description:
      'Redesigned the storefront for this Atlanta/Nashville ice-and-snow delivery service, with real-time ordering and last-mile delivery logistics.',
    technologies: ['Shopify', 'Shopify Bundles', 'Onfleet', 'Google Calendar'],
    image: '/images/projects/case-study-iceman.svg',
    viewProjectUrl: 'https://myiceman.com/',
    isPlaceholder: false,
  },
  {
    id: 'wipstitch',
    number: '02',
    title: 'Wipstitch',
    category: 'Shopify',
    description:
      'Complete store redesign with a mobile-first theme, optimized checkout flow and upsell functionality.',
    technologies: ['Shopify', 'Shopify Apps', 'Liquid', 'JavaScript'],
    image: '/images/projects/case-study-wipstitch.svg',
    viewProjectUrl: 'https://wipstitch.com/',
    isPlaceholder: false,
  },
  {
    id: 'lira-clinical',
    number: '03',
    title: 'Lira Clinical',
    category: 'Shopify B2B',
    description:
      'Mobile-first D2C and international B2B store with enhanced account structures, NetSuite ERP integration and CRO tooling.',
    technologies: ['Shopify', 'NetSuite', 'Recharge', 'Okendo', 'Rebuy', 'Shopify Flow', 'Klaviyo'],
    image: '/images/projects/case-study-lira-clinical.svg',
    viewProjectUrl: 'https://liraclinical.com/',
    isPlaceholder: false,
  },
  {
    id: 'dazzle-dry',
    number: '04',
    title: 'Dazzle Dry',
    category: 'Shopify Plus',
    description:
      'Redesigned and optimized D2C and B2B storefronts on Shopify Plus with strategic upsells and product bundles.',
    technologies: ['Shopify Plus', 'Yotpo', 'Recharge', 'Klaviyo', 'Rebuy', 'Matrixify'],
    image: '/images/projects/case-study-dazzle-dry.svg',
    viewProjectUrl: 'https://dazzledry.com/',
    isPlaceholder: false,
  },
  {
    id: 'albee-baby',
    number: '05',
    title: 'Albee Baby',
    category: 'Shopify',
    description:
      'Migrated this 90-year-old family-owned baby-gear retailer from a legacy Yahoo platform to Shopify, building a custom theme with a rewards/registry program, advanced discounting and mobile-first mega-menu navigation.',
    technologies: ['Shopify Custom Theme', 'Registry & Loyalty Program', 'Advanced Discounting', 'Mega Menu', 'Sliding Cart Drawer'],
    image: '/images/projects/case-study-albee-baby.svg',
    results: ['159% increase in conversion rate', '49% sales increase within a month', '97% traffic increase'],
    isPlaceholder: false,
  },
  {
    id: 'nourish-food-club',
    number: '06',
    title: 'Nourish Food Club',
    category: 'Shopify Plus',
    description:
      'Consolidated three separate farm-to-table businesses and a 100,000+ member subscriber base into one unified multi-department Shopify Plus store, with ZIP-code-based dynamic zone pricing and a Recharge-powered subscription model.',
    technologies: ['Shopify Plus', 'Recharge Subscriptions', 'Dynamic Zone Pricing', 'Membership Flow', 'Accessibility Tooling'],
    image: '/images/projects/case-study-nourish-food-club.svg',
    results: ['144% sales increase within 90 days', '34% increase in sessions', '22% AOV increase', '53% increase in total orders'],
    isPlaceholder: false,
  },
];
