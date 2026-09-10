// Centralized profile data. Update this file to change personal info,
// hero copy, about copy, stats, contact details and social links
// without touching any component code.

export interface StatCard {
  value: string;
  label: string;
}

export const profile = {
  name: 'Dharmik Gor',
  title: 'Senior Shopify & WordPress Developer',
  specialization: 'Shopify Developer · Shopify Plus · E-commerce · WordPress · React',
  experienceYears: '5+ Years',
  currentRole: 'Senior Shopify / WordPress Developer',
  company: 'The CodeWhiz Solution',
  employmentPeriod: 'May 2022 – Present',
  location: 'Ahmedabad, Gujarat, India',
  workType: 'Freelance · Part-time · Remote · Agency Collaboration',
  availability: 'Available for freelance & part-time projects',
};

export const contact = {
  email: 'Dharmikgor0501@gmail.com',
  phone: '+91 8866502170',
  phoneHref: '+918866502170',
  whatsappHref: 'https://wa.me/918866502170',
  linkedin: 'https://www.linkedin.com/in/dharmikgor',
  location: 'Ahmedabad, Gujarat, India',
};

export const socialLinks = {
  linkedin: { label: 'LinkedIn', url: contact.linkedin, available: true },
  email: { label: 'Email', url: `mailto:${contact.email}`, available: true },
  whatsapp: { label: 'WhatsApp', url: contact.whatsappHref, available: true },
  github: { label: 'GitHub', url: '', available: false, placeholder: '[ADD GITHUB URL]' },
  behance: { label: 'Behance', url: '', available: false, placeholder: '[ADD BEHANCE URL]' },
  dribbble: { label: 'Dribbble', url: '', available: false, placeholder: '[ADD DRIBBBLE URL]' },
  instagram: { label: 'Instagram', url: '', available: false, placeholder: '[ADD INSTAGRAM URL]' },
  twitter: { label: 'X / Twitter', url: '', available: false, placeholder: '[ADD X/TWITTER URL]' },
};

export const hero = {
  eyebrow: profile.name,
  title: profile.title,
  headline: 'Helping brands & agencies build Shopify stores that sell.',
  supporting:
    "5+ years partnering with brands, merchants and agencies worldwide to build, customize and scale e-commerce websites — with clear communication and dependable delivery on every project.",
  ctaPrimary: { label: "Let's Work Together", href: '#contact' },
  ctaSecondary: { label: 'View My Work', href: '#work' },
  availability: profile.availability,
  techLabels: ['SHOPIFY', 'SHOPIFY PLUS', 'LIQUID', 'WORDPRESS', 'REACT', 'E-COMMERCE'] as string[],
};

export const about = {
  sectionTitle: 'About Me',
  headline: 'Where e-commerce meets clean code.',
  paragraphs: [
    "I'm a Senior Shopify & WordPress Developer based in Ahmedabad, India, with 5+ years of experience working on e-commerce websites, custom themes, integrations and complex business requirements.",
    'My core expertise is Shopify development, including Shopify 2.0, Liquid, custom themes, metafields, third-party integrations, Shopify Plus, B2B solutions, custom functionality and performance optimization.',
    'Alongside Shopify, I work with WordPress, PHP, React, JavaScript, HTML, CSS, jQuery, AJAX and Git.',
    "I've worked with agencies, merchants and distributed teams, helping turn designs, business requirements and technical challenges into reliable production-ready websites.",
    "If you're an agency or business looking for a Shopify developer who communicates clearly, meets deadlines and treats your store like their own — whether it's a one-off project or ongoing support — I'd love to hear about it.",
  ],
  stats: [
    { value: '5+ Years', label: 'Experience' },
    { value: 'Shopify Specialist', label: 'E-commerce Development' },
    { value: 'Shopify Plus', label: 'Advanced Commerce' },
    { value: 'Remote', label: 'International Collaboration' },
  ] as StatCard[],
};

export const highlights: StatCard[] = [
  { value: '5+ Years', label: 'Professional Development' },
  { value: 'Shopify Specialist', label: 'E-commerce Focus' },
  { value: 'Shopify Plus', label: 'Advanced Commerce' },
  { value: 'B2B', label: 'E-commerce Solutions' },
  { value: 'Remote', label: 'Global Collaboration' },
  { value: 'Complex Builds', label: 'Custom Functionality' },
];

export const contactSection = {
  headline: "Let's build something great, together.",
  supporting:
    "Have a Shopify project, a tricky integration or an e-commerce challenge that needs a reliable pair of hands? Tell me about it — I typically reply within 24 hours.",
};

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
];

export const footer = {
  techLine: 'Shopify · Shopify Plus · WordPress · React · E-commerce',
  copyright: '© 2026 Dharmik Gor. Built with intention.',
};
