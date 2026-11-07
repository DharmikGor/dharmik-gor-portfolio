// Shopify entries (01–06): real client work delivered via The CodeWhiz
// Solution's white-label development partnership with Arctic Grey, a
// Shopify Plus agency. Arctic Grey holds the public client relationship
// and case study credit; these entries describe the Shopify development
// work done on each store.
// WordPress entries (07+): WordPress/Divi builds.

export interface CaseStudyPoint {
  title: string;
  text: string;
}

export interface CaseStudyShot {
  src: string;
  caption: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  /** One-line summary shown under the title on the case study page. */
  tagline: string;
  description: string;
  /** Services delivered, shown as tags in the case study hero. */
  services: string[];
  challenge: string[];
  solution: CaseStudyPoint[];
  outcome: string;
  /** Live-site screenshots: first one is the hero shot. */
  screenshots: CaseStudyShot[];
  technologies: string[];
  /** Fallback cover art (SVG). */
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
    tagline:
      'Real-time ordering and last-mile delivery logistics for an ice & snow delivery service.',
    description:
      'Built a Shopify storefront for this Atlanta/Nashville ice-and-snow delivery service, with real-time order tracking, product-specific delivery calendars and geo-location-based order routing.',
    services: ['Custom Storefront', 'Delivery Integrations', 'Scheduling Logic', 'Geo-based Routing'],
    challenge: [
      'Scaling one storefront across several delivery locations was getting harder to manage.',
      'Residential and commercial customers needed real-time visibility into their orders.',
      'Different products needed their own scheduling flows instead of one shared checkout.',
      'Orders had to be segmented and routed by customer location.',
    ],
    solution: [
      { title: 'Tailored Shopify storefront', text: 'A custom storefront built around how Iceman actually takes and fulfils orders.' },
      { title: 'Onfleet last-mile integration', text: 'Orders flow into Onfleet for dispatch, with live tracking for customers.' },
      { title: 'Product-specific delivery calendars', text: 'Custom scheduling per product type, synced with Google Calendar.' },
      { title: 'Geo-location order routing', text: 'Dynamic product pages and location-based routing to the right market.' },
    ],
    outcome:
      'Ordering and fulfilment now run through one system across locations, with more orders completed and a higher average order value.',
    screenshots: [
      { src: '/images/projects/iceman-desktop.webp', caption: 'Homepage with "Order Ice Now" entry point' },
      { src: '/images/projects/iceman-section.webp', caption: 'Service lines: on-demand, events, industrial and film' },
    ],
    technologies: ['Shopify', 'Onfleet', 'Shopify Bundles', 'Google Calendar Sync', 'Geo-location Order Routing'],
    image: '/images/projects/case-study-iceman.svg',
    results: ['41% sales increase', '24% increase in fulfilled orders', '12% AOV lift'],
    viewProjectUrl: 'https://myiceman.com/',
    isPlaceholder: false,
  },
  {
    id: 'wipstitch',
    number: '02',
    title: 'Wipstitch',
    category: 'Shopify',
    tagline:
      'A conversion-first theme rebuild for a needlepoint brand, shipped ahead of BFCM.',
    description:
      "Executed a conversion-first Shopify rebuild ahead of BFCM, replacing an outdated theme and fixing a 1.52% conversion rate with a new trust-focused, mobile-first design and upsell strategy.",
    services: ['Theme Rebuild', 'CRO', 'Speed Optimisation', 'Email & SMS'],
    challenge: [
      'An outdated theme that did not inspire trust and frustrated shoppers, especially on mobile.',
      'Low conversion (around 1.52%) and high cart abandonment.',
      'Sales growth had stalled, and fixes had to land before Black Friday Cyber Monday.',
    ],
    solution: [
      { title: 'Mobile-first theme rebuild', text: 'A modern custom Shopify theme designed around trust and clarity.' },
      { title: 'Faster storefront', text: 'Lazy loading and code splitting to cut load times.' },
      { title: 'Streamlined path to checkout', text: 'Strategic upsells, trust signals and a cleaner checkout flow.' },
      { title: 'Cart recovery', text: 'Klaviyo email and SMS flows to bring abandoned carts back.' },
    ],
    outcome:
      'The rebuilt store went into BFCM converting far better, with strong gains in sales, orders and order value.',
    screenshots: [
      { src: '/images/projects/wipstitch-desktop.webp', caption: 'Homepage hero for the Stitch Club launch' },
      { src: '/images/projects/wipstitch-section.webp', caption: 'Collection page with filters and quick add-to-cart' },
    ],
    technologies: ['Shopify Custom Theme', 'Klaviyo Email/SMS', 'Cart Abandonment Recovery', 'Lazy Loading & Code Splitting'],
    image: '/images/projects/case-study-wipstitch.svg',
    results: ['187% sales growth', '127% conversion rate increase', '24% AOV increase', '381% increase in total orders'],
    viewProjectUrl: 'https://wipstitch.com/',
    isPlaceholder: false,
  },
  {
    id: 'lira-clinical',
    number: '03',
    title: 'Lira Clinical',
    category: 'Shopify Plus',
    tagline:
      'B2B accounts, NetSuite sync and loyalty for a professional skincare brand.',
    description:
      "Rebuilt this professional skincare brand's B2B account structure and NetSuite/tax integrations while overhauling loyalty and conversion tooling across their D2C and pro storefronts.",
    services: ['Shopify Plus', 'B2B Portal', 'ERP Integration', 'Loyalty & Upsells'],
    challenge: [
      'An outdated site that was not optimised for mobile shoppers.',
      'A cumbersome checkout that contributed to cart abandonment.',
      'Complex B2B account management and trade-show orders placed by hand.',
      'Shopify and NetSuite were not syncing reliably.',
    ],
    solution: [
      { title: 'Mobile-first redesign', text: 'Refreshed UX/UI with a cart drawer for a quicker checkout.' },
      { title: 'B2B portal', text: 'Automated professional account approvals and bulk ordering.' },
      { title: 'NetSuite 2-way sync', text: 'Inventory and orders kept in sync, with Avalara handling tax.' },
      { title: 'Loyalty & upsells', text: 'Revamped loyalty with Okendo, plus Rebuy AI upsells and Klaviyo flows.' },
    ],
    outcome:
      'Retail and professional customers now buy through one streamlined experience across the US, CA and UK stores.',
    screenshots: [
      { src: '/images/projects/lira-clinical-desktop.webp', caption: 'Homepage with separate Retail and Professional account entry' },
      { src: '/images/projects/lira-clinical-section.webp', caption: '"Shop By" navigation across product lines' },
    ],
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
    image: '/images/projects/case-study-lira-clinical.svg',
    results: ['18% sales increase', '31% conversion rate increase', '22% AOV increase'],
    viewProjectUrl: 'https://liraclinical.com/',
    isPlaceholder: false,
  },
  {
    id: 'dazzle-dry',
    number: '04',
    title: 'Dazzle Dry',
    category: 'Shopify Plus',
    tagline:
      'Unifying D2C and professional storefronts for a nail care brand.',
    description:
      'Unified Dazzle Dry\'s fragmented D2C and professional storefronts, rebuilt their buggy "Build Your Bundle" product configurator, and restored their Yotpo reviews/referral integration.',
    services: ['Shopify Plus', 'UX/UI Redesign', 'Bundle Builder', 'Reviews & Loyalty'],
    challenge: [
      'The brand experience felt inconsistent across D2C and professional storefronts.',
      'The "Build Your Bundle" configurator was buggy and losing sales.',
      'Site usability and performance needed work.',
    ],
    solution: [
      { title: 'Mobile-first redesign', text: 'Consistent merchandising and UI across the whole site.' },
      { title: 'Rebuilt bundle configurator', text: 'Custom bundle pricing logic for a reliable "Build Your System Kit".' },
      { title: 'Simpler pro sign-up', text: 'A streamlined registration flow for salon professionals.' },
      { title: 'Yotpo restored', text: 'Reviews and referral programme reintegrated and optimised.' },
    ],
    outcome:
      'One consistent brand experience with a dependable bundle builder, driving more orders and a higher order value.',
    screenshots: [
      { src: '/images/projects/dazzle-dry-desktop.webp', caption: 'Homepage hero carousel' },
      { src: '/images/projects/dazzle-dry-section.webp', caption: 'Fan-favourites with the rebuilt system kit' },
    ],
    technologies: ['Shopify Plus', 'Yotpo', 'Shopify Dynamic Payment Buttons', 'Custom Bundle Pricing Logic'],
    image: '/images/projects/case-study-dazzle-dry.svg',
    results: ['44% sales increase', '11% AOV lift', '31% increase in number of orders'],
    viewProjectUrl: 'https://dazzledry.com/',
    isPlaceholder: false,
  },
  {
    id: 'albee-baby',
    number: '05',
    title: 'Albee Baby',
    category: 'Shopify',
    tagline:
      'Moving a 90-year-old baby gear retailer from Yahoo to a custom Shopify theme.',
    description:
      'Migrated this 90-year-old family-owned baby-gear retailer from a legacy Yahoo platform to Shopify, building a custom theme with a rewards/registry program, advanced discounting and mobile-first mega-menu navigation.',
    services: ['Platform Migration', 'Custom Theme', 'Registry & Loyalty', 'Navigation'],
    challenge: [
      'The store ran on a legacy Yahoo platform with very little room for customisation.',
      'Merchandising and day-to-day operations were slow and manual.',
      'The platform was holding back online growth.',
    ],
    solution: [
      { title: 'Migration to Shopify', text: 'Catalog and store moved from Yahoo to Shopify.' },
      { title: 'Custom mobile-first theme', text: 'A new theme with a sliding cart drawer and clear merchandising.' },
      { title: 'Rewards & registry', text: 'A loyalty programme and gift registry built into the store.' },
      { title: 'Mega-menu navigation', text: 'Deep catalog made browsable on desktop and mobile.' },
    ],
    outcome:
      'A modern store the team can merchandise themselves, with far more shoppers reaching checkout and converting.',
    screenshots: [
      { src: '/images/projects/albee-baby-desktop.webp', caption: 'Homepage with rewards, registry and trending gear' },
      { src: '/images/projects/albee-baby-section.webp', caption: 'Mega menu for the stroller catalog' },
    ],
    technologies: ['Shopify Custom Theme', 'Registry & Loyalty Program', 'Advanced Discounting', 'Mega Menu', 'Sliding Cart Drawer'],
    image: '/images/projects/case-study-albee-baby.svg',
    results: ['159% increase in conversion rate', '49% sales increase within a month', '97% traffic increase'],
    viewProjectUrl: 'https://www.albeebaby.com/',
    isPlaceholder: false,
  },
  {
    id: 'nourish-food-club',
    number: '06',
    title: 'Nourish Food Club',
    category: 'Shopify Plus',
    tagline:
      'Three farm-to-table businesses and 100,000+ members merged into one Shopify Plus store.',
    description:
      'Consolidated three separate farm-to-table businesses and a 100,000+ member subscriber base into one unified multi-department Shopify Plus store, with ZIP-code-based dynamic zone pricing and a Recharge-powered subscription model.',
    services: ['Shopify Plus', 'Store Consolidation', 'Subscriptions', 'Zone Pricing'],
    challenge: [
      'Three separate stores had to become one without interrupting operations.',
      'Over 100,000 subscribers and their subscriptions needed to move safely.',
      'Existing SEO rankings had to be protected through the move.',
      'Pricing needed to change dynamically by customer ZIP code.',
    ],
    solution: [
      { title: 'Data & subscription migration', text: 'All customers and Recharge subscriptions moved into the new store.' },
      { title: 'Dynamic zone pricing', text: 'A custom ZIP-code-based pricing solution.' },
      { title: 'New theme & membership flow', text: 'Multi-department shopping with a streamlined join flow.' },
      { title: 'Subscriber dashboard & SEO', text: 'Account dashboard for subscriptions, plus an SEO plan to keep rankings.' },
    ],
    outcome:
      'One unified store for every department and member, with sales more than doubling in the first 90 days.',
    screenshots: [
      { src: '/images/projects/nourish-food-club-desktop.webp', caption: 'Homepage with "Join Nourish" membership entry' },
      { src: '/images/projects/nourish-food-club-section.webp', caption: 'Multi-department Food Club shops' },
    ],
    technologies: ['Shopify Plus', 'Recharge Subscriptions', 'Dynamic Zone Pricing', 'Membership Flow', 'Accessibility Tooling'],
    image: '/images/projects/case-study-nourish-food-club.svg',
    results: ['144% sales increase within 90 days', '34% increase in sessions', '22% AOV increase', '53% increase in total orders'],
    viewProjectUrl: 'https://nourishfoodclub.com/',
    isPlaceholder: false,
  },
  {
    id: 'intelligent-advisor',
    number: '07',
    title: 'Intelligent Advisor',
    category: 'WordPress',
    tagline:
      'A Divi landing site for an AI operating system built for independent advisory firms.',
    description:
      'Built a conversion-focused WordPress landing site with the Divi theme for an AI operating system for independent financial advisory firms, presenting its four product systems, onboarding steps, tiered pricing, cost comparison and FAQ with demo-booking calls to action throughout.',
    services: ['WordPress', 'Divi Build', 'Landing Page', 'Responsive Design'],
    challenge: [
      'The product has four separate AI systems that needed to be explained simply to advisory firm owners.',
      'Visitors had to understand tiered pricing and how it compares with hiring more staff.',
      'Every section needed to lead visitors towards booking a demo.',
    ],
    solution: [
      { title: 'Single-page story', text: 'Clear sections for the systems, how it works, pricing and FAQ with anchor navigation.' },
      { title: 'Pricing & cost comparison', text: 'Four plan cards plus enterprise, and a cost-versus-hiring comparison.' },
      { title: 'Demo-first CTAs', text: '"Book a demo" calls to action repeated at every key point.' },
      { title: 'Built in Divi', text: 'Divi Theme Builder with custom CSS, fully responsive.' },
    ],
    outcome:
      'A focused, easy-to-edit marketing site that walks advisory firms from the problem to a demo booking.',
    screenshots: [
      { src: '/images/projects/intelligent-advisor-desktop.webp', caption: 'Hero: "Grow Your Business. Not Your Payroll."' },
      { src: '/images/projects/intelligent-advisor-section.webp', caption: 'Pricing tiers with the Full OS plan highlighted' },
    ],
    technologies: ['WordPress', 'Divi Theme Builder', 'Custom CSS', 'Responsive Design', 'Pricing Tables', 'FAQ Accordion'],
    image: '/images/projects/case-study-intelligent-advisor.svg',
    viewProjectUrl: 'https://intelligentadvisor.com/',
    isPlaceholder: false,
  },
];
