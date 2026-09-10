# Dharmik Gor — Portfolio Website

A premium, editorial-style personal portfolio for **Dharmik Gor**, Senior Shopify & WordPress
Developer. Built with React, TypeScript, Vite, Tailwind CSS and Framer Motion, and ready to deploy
to Netlify out of the box.

## Project Overview

The site positions Dharmik as an experienced Shopify/e-commerce developer available for freelance,
part-time and agency-collaboration work (not full-time employment). All content is data-driven —
personal info, projects, skills, services and blog posts live in `src/data/` so the site can be
updated without touching component code.

## Technology Stack

- **React 18** + **TypeScript**
- **Vite** — build tool and dev server
- **Tailwind CSS** — utility-first styling, custom editorial design tokens
- **Framer Motion** — subtle scroll reveals, hero text animation, mobile menu transitions
- Netlify Forms — contact form, no custom backend required

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Opens the site locally (default: http://localhost:5173) with hot reload.

## Production Build

```bash
npm run build
```

Type-checks the project and outputs a production build to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Netlify Deployment

This project is Netlify-ready:

- `netlify.toml` sets the build command (`npm run build`) and publish directory (`dist`)
- `public/_redirects` contains the SPA fallback rule (`/* /index.html 200`)
- The contact form is pre-wired for **Netlify Forms** (see below)

To deploy: push this repository to GitHub/GitLab/Bitbucket and connect it in the Netlify dashboard,
or run `netlify deploy` from the Netlify CLI. No environment variables are required for a basic
deployment.

## Netlify Forms Configuration

The contact form (`src/components/ContactForm.tsx`) submits to Netlify Forms using the standard
React + Netlify pattern:

- A **static, hidden** snapshot of the form exists in `index.html` so Netlify's build-time HTML
  scanner can detect the `contact` form and its fields.
- The live React form posts to `/` with `form-name=contact` on submit via `fetch`.
- A honeypot field (`bot-field`) provides basic spam protection.
- Success and error states are handled in the component (`"Thanks! Your message has been sent."` /
  inline error message).

After deploying, form submissions appear under **Site settings → Forms** in the Netlify dashboard.
No backend server is required.

## Logo & Brand Assets

A "DG" monogram logo lives in `public/images/icons/`:

- `favicon.svg` — vector mark used for the browser tab icon (dark badge, paper letters, accent dot)
- `favicon-16.png` / `favicon-32.png` / `favicon-48.png` / `favicon-192.png` / `favicon-512.png` —
  raster favicon sizes, already wired up in `index.html`
- `apple-touch-icon.png` (180×180) — iOS home-screen icon, already linked in `index.html`
- `logo-mark-dark.png` / `logo-mark-light.png` — standalone 1024×1024 square mark in both color
  ways (dark badge for light backgrounds, light badge for dark backgrounds)
- `logo-horizontal-dark.png` / `logo-horizontal-light.png` — full lockup (mark + "Dharmik Gor" +
  title) for use outside the site — LinkedIn banner, resume header, email signature, business card

The in-site navbar/footer badge is a shared `Logo.tsx` component (an inline SVG, so it scales
crisply at any size) rather than a loaded image — `Navbar.tsx` and `Footer.tsx` each render it with
colors matching their background. Update `Logo.tsx` if the monogram ever changes.

## Replacing the Profile Photo

The real headshot is already wired in at `public/images/profile/profile.webp`, rendered by an
`<img>` tag in `src/components/About.tsx`. To swap it for a new photo later, overwrite that file
(keeping the `profile.webp` filename, or updating the `src` in `About.tsx` if you use a different
name/format).

## Replacing Project Images

Project images live in `public/images/projects/` (`project-01.jpg` … `project-06.jpg`). The current
files are generated placeholders clearly marked "Placeholder Preview." To replace:

1. Export/screenshot the real project at a similar aspect ratio (16:10 works best).
2. Save it over the matching file name, or update the `image` path in `src/data/projects.ts`.

## Updating Projects

Edit `src/data/projects.ts`. Each project object supports:

```ts
{
  id, number, title, category, description, technologies: string[],
  image, viewProjectUrl?, caseStudyUrl?, externalUrl?, isPlaceholder
}
```

Set `isPlaceholder: false` once a project is real, and add `viewProjectUrl` / `caseStudyUrl` to
enable the "View Project" / "Case Study" links in `src/components/Projects.tsx`.

## Updating Experience / Timeline

Edit `timeline` in `src/data/skills.ts`. The current entry (The CodeWhiz Solution, May 2022–Present)
is real; the second entry is a clearly marked placeholder for earlier career history — replace
`[ADD PREVIOUS ROLE]` / `[ADD PREVIOUS COMPANY]` and the description once available, and remove
`isPlaceholder: true`.

## Updating Skills / Services / Blog

- Skills: `src/data/skills.ts` (`skillGroups`, `shopifyCapabilities`, `complexCommerceItems`,
  `processSteps`)
- Services: `src/data/services.ts`
- Blog / Insights: `src/data/blog.ts` — replace placeholder Lorem Ipsum excerpts with real article
  summaries, and add a `url` once articles are published live.

## Updating Contact Information

Edit `contact` and `socialLinks` in `src/data/profile.ts`. Unavailable social profiles (GitHub,
Behance, Dribbble, Instagram, X/Twitter) are intentionally hidden from the UI until a real URL is
added — set `available: true` and fill in `url` once ready.

## Adding a Resume

Add your resume PDF at `public/resume.pdf`. The "Download Resume" buttons in the hero and the
Resume CTA section already point to `/resume.pdf` — no code changes needed once the file exists.

## Adding Blog Posts

Add new entries to the `blogPosts` array in `src/data/blog.ts` following the existing `BlogPost`
shape (`id`, `title`, `excerpt`, `category`, `readTime`, optional `url`).

## Testimonials & Certifications

Both sections ship in a ready, placeholder state until real content exists:

- Testimonials: `src/components/Testimonials.tsx` (copy in `src/data/services.ts`)
- Certifications: add entries to the `certifications` array in `src/data/services.ts` — the section
  automatically switches from the "coming soon" placeholder to rendered certification cards once
  the array is non-empty.

## Accessibility & Performance

- Semantic HTML, skip-to-content link, visible focus states, accessible form labels
- `prefers-reduced-motion` respected globally (see `src/index.css` and `usePrefersReducedMotion`)
- Images are lazy-loaded; layout avoids fixed heights that cause shift
- No horizontal scrolling at any breakpoint (360px–1440px+ tested)

## Folder Structure

```
src/
  components/   Reusable section + UI components
  data/         Centralized content (profile, projects, skills, services, blog)
  hooks/        useActiveSection, useScrollProgress, usePrefersReducedMotion
public/
  images/       profile/, projects/, blog/, icons/
  resume.pdf    (add your own)
  _redirects    Netlify SPA fallback
netlify.toml    Netlify build configuration
```
