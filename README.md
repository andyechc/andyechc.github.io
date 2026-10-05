# andyechc — Portfolio

Personal portfolio. Interactive editorial / digital magazine, not a generic dev template.

Live: https://andyechc.github.io
Custom domain (in progress): https://andyechc.is-a.dev

## Stack

- SvelteKit + Svelte 5 (runes) + TypeScript
- Tailwind CSS v4 (`@theme` tokens in `src/app.css`)
- `adapter-static` → prerendered site in `build/`
- Content as data: `src/lib/data/portfolio.json` is the single source of truth
- Deployed with GitHub Actions to GitHub Pages (user site, no base path)

## Structure

```
static/
  CNAME                  # custom domain (copied to build/)
  profile.webp, og-image.jpg, logo.svg
  projects/*/cover.png
src/
  app.html               # lang, fonts, theme-color, search verification
  app.css                # tokens, base, editorial styles
  routes/
    +layout.ts           # prerender = true
    +layout.svelte       # SEO from JSON (canonical, OG, Twitter)
    +page.svelte         # Hero / Work / Experience / About / Contact
    work/[slug]/+page.svelte  # project case study
  lib/
    data/portfolio.json
    components/
      layout/            # SiteNav, SiteFooter, MobileTabs, SectionHeading
      hero/              # Hero, Introduction, Typewriter
      work/              # FeaturedProject, WorkIndex, SecondaryProject
      experience/        # ExperienceList
      about/             # AboutSection
      contact/           # ContactClosing
      ui/                # CustomCursor, ReadingProgress
```

Page flow: Hero → Introduction → Selected Work → Experience → About → Contact → Footer.

## Content editing

Everything lives in `src/lib/data/portfolio.json`:

- `site`, `navigation`, `social`, `hero`, `introduction`
- `work.projects[]` (`id`, `number`, `title`, `subtitle`, `category`, `technologies[]`, `links`, `media.cover`, `featured`)
- `experience[]`, `about`, `contact`, `footer`
- `seo` (`title`, `description`, `url`, `keywords[]`, `image` — absolute URL for OG)

Components must not hardcode project copy. No invented clients, metrics, or outcomes.

## Local development

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

## Deploy / domain

Workflow `.github/workflows/deploy.yml` runs `npm ci && npm run build` on push to `main` and publishes `build/` via `actions/deploy-pages`.

Custom domain:

1. `static/CNAME` contains `andyechc.is-a.dev` (persists across deploys)
2. `is-a.dev` record: `domains/andyechc.json` in `is-a-dev/register` → `CNAME: andyechc.github.io` — PR: https://github.com/is-a-dev/register/pull/55229
3. After merge: repo `Settings > Pages > Custom domain = andyechc.is-a.dev` + `Enforce HTTPS`

## Design notes

- Dark editorial palette: ink `#0a0a0a`, paper `#f2f0ea`, muted `#9a9891`, accent `#346c6e`
- Display: Instrument Serif / UI: Inter / Strong: Space Grotesk
- Motion in layers (micro 100–250ms, interface 300–600ms, cinematic 700–1400ms), CSS + Svelte first, no GSAP by default
- Accessibility: semantic HTML, keyboard nav, visible focus, `prefers-reduced-motion` disables parallax / cursor / 3D pointer
- Performance targets: LCP < 2.5s, CLS < 0.1, INP < 200ms; transform/opacity animations, lazy non-critical images
