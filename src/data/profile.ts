// Centralized profile data. Update this file to change personal info,
// hero copy, about copy, stats, contact details and social links
// without touching any component code.

export interface StatCard {
  value: string;
  label: string;
}

export const profile = {
  name: 'Dharmik Gor',
  initials: 'DG',
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
  headline: 'Building scalable e-commerce experiences with Shopify, Shopify Plus & WordPress.',
  supporting:
    '5+ years of experience helping brands, merchants and agencies build, customize and scale high-performing e-commerce websites.',
  ctaPrimary: { label: "Let's Work Together", href: '#contact' },
  ctaSecondary: { label: 'View My Work', href: '#work' },
  ctaTertiary: { label: 'Download Resume', href: '/resume.pdf' },
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
    "I'm particularly interested in working with international Shopify agencies and businesses that need a reliable developer for ongoing or project-based work.",
  ],
  stats: [
    { value: '5+ Years', label: 'Experience' },
    { value: 'Shopify Specialist', label: 'E-commerce Development' },
    { value: 'Shopify Plus', label: 'Advanced Commerce' },
    { value: 'Remote', label: 'International Collaboration' },
  ] as StatCard[],
  portraitPlaceholderNote: 'PROFESSIONAL PORTRAIT — REPLACE WITH FINAL PHOTO',
};

export const highlights: StatCard[] = [
  { value: '5+ Years', label: 'Professional Development' },
  { value: 'Shopify Specialist', label: 'E-commerce Focus' },
  { value: 'Shopify Plus', label: 'Advanced Commerce' },
  { value: 'B2B', label: 'E-commerce Solutions' },
  { value: 'Remote', label: 'Global Collaboration' },
  { value: 'Complex Builds', label: 'Custom Functionality' },
];

export const resumeCTA = {
  headline: 'Want to know more about my experience?',
  supporting:
    'Download my resume for a detailed overview of my experience, technical skills and professional background.',
  buttonLabel: 'Download Resume',
  href: '/resume.pdf',
};

export const contactSection = {
  headline: "Let's build something great.",
  supporting: "Have a Shopify project, e-commerce challenge or development requirement? Let's talk.",
};

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Story', href: '#story' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
];

export const footer = {
  techLine: 'Shopify · Shopify Plus · WordPress · React · E-commerce',
  copyright: '© 2026 Dharmik Gor. Built with intention.',
};
