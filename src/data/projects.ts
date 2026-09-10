// COMPARISON BRANCH: images here are hotlinked directly from Arctic
// Grey's CDN (arcticgrey.com/cdn/shop/files/...) instead of the
// original cover art used on main. This is for side-by-side review
// only — do not merge without confirming rights to use their hosted
// photography on a third-party portfolio.
//
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
      'Built a Shopify storefront for this Atlanta/Nashville ice-and-snow delivery service, with real-time order tracking, product-specific delivery calendars and geo-location-based order routing.',
    technologies: ['Shopify', 'Onfleet', 'Shopify Bundles', 'Google Calendar Sync', 'Geo-location Order Routing'],
    image: 'https://arcticgrey.com/cdn/shop/files/im-hero-abs_2048x2048.png?v=1745386980',
    results: ['41% sales increase', '24% increase in fulfilled orders', '12% AOV lift'],
    viewProjectUrl: 'https://myiceman.com/',
    isPlaceholder: false,
  },
  {
    id: 'wipstitch',
    number: '02',
    title: 'Wipstitch',
    category: 'Shopify',
    description:
      "Executed a conversion-first Shopify rebuild ahead of BFCM, replacing an outdated theme and fixing a 1.52% conversion rate with a new trust-focused, mobile-first design and upsell strategy.",
    technologies: ['Shopify Custom Theme', 'Klaviyo Email/SMS', 'Cart Abandonment Recovery', 'Lazy Loading & Code Splitting'],
    image: 'https://arcticgrey.com/cdn/shop/files/ws-hero-abs_2048x2048.png?v=1745903692',
    results: ['187% sales growth', '127% conversion rate increase', '24% AOV increase', '381% increase in total orders'],
    viewProjectUrl: 'https://wipstitch.com/',
    isPlaceholder: false,
  },
  {
    id: 'lira-clinical',
    number: '03',
    title: 'Lira Clinical',
    category: 'Shopify Plus',
    description:
      "Rebuilt this professional skincare brand's B2B account structure and NetSuite/tax integrations while overhauling loyalty and conversion tooling across their D2C and pro storefronts.",
    technologies: [
      'Shopify Plus',
      'NetSuite (2-way sync)',
      'Avalara',
      'Shopify Flow',
      'Okendo',
      'Rebuy AI Upsells',
      'Klaviyo',
      'Multi-store Deployment (US/CA/UK)',
    ],
    image: 'https://arcticgrey.com/cdn/shop/files/Casestudy-lira-hero-desktop.png?v=1762150598',
    results: ['18% sales increase', '31% conversion rate increase', '22% AOV increase'],
    viewProjectUrl: 'https://liraclinical.com/',
    isPlaceholder: false,
  },
  {
    id: 'dazzle-dry',
    number: '04',
    title: 'Dazzle Dry',
    category: 'Shopify Plus',
    description:
      'Unified Dazzle Dry\'s fragmented D2C and professional storefronts, rebuilt their buggy "Build Your Bundle" product configurator, and restored their Yotpo reviews/referral integration.',
    technologies: ['Shopify Plus', 'Yotpo', 'Shopify Dynamic Payment Buttons', 'Custom Bundle Pricing Logic'],
    image: 'https://arcticgrey.com/cdn/shop/files/dd-desktop-hero.png?v=1765882519',
    results: ['44% sales increase', '11% AOV lift', '31% increase in number of orders'],
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
    image: 'https://arcticgrey.com/cdn/shop/files/abs_2048x2048.png',
    results: ['159% increase in conversion rate', '49% sales increase within a month', '97% traffic increase'],
    viewProjectUrl: 'https://www.albeebaby.com/',
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
    image: 'https://arcticgrey.com/cdn/shop/files/hero-aa-desktop.png',
    results: ['144% sales increase within 90 days', '34% increase in sessions', '22% AOV increase', '53% increase in total orders'],
    viewProjectUrl: 'https://nourishfoodclub.com/',
    isPlaceholder: false,
  },
];
