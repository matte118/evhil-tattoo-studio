# EVHIL Homepage Vertical Slice Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the first production-oriented EVHIL homepage from the existing Astro design foundation.

**Architecture:** Keep `src/pages/index.astro` focused on composition. Centralize confirmed business data and replaceable placeholder collections in `src/data/site.ts`; give each major homepage region one focused Astro component; reuse Header, CTA, MediaFrame, Section, BrandMark, and the existing Motion initializer.

**Tech Stack:** Astro, TypeScript, scoped CSS, CSS custom properties, Motion vanilla JavaScript, Playwright.

## Global Constraints

- `docs/DESIGN_BRIEF.md` remains the creative source of truth.
- No new production dependency, React, Tailwind, Sass, CMS, or component library.
- All visitor copy is Italian; technical names remain English.
- Unknown artists, work, reviews, ratings, events, dates, opening hours, and prices remain explicitly temporary and non-factual.
- No internal page implementation, commit, push, or deployment is authorized.

---

### Task 1: Homepage behavior contract

**Files:**
- Modify: `tests/visual-smoke.spec.ts`

**Interfaces:**
- Consumes: homepage at `/`.
- Produces: observable expectations for nine regions, confirmed NAP, placeholder integrity, conversion, accessibility, reduced motion, and overflow.

- [ ] Write Playwright assertions for the real homepage structure and remove preview-only assertions.
- [ ] Run the focused test in one project and confirm it fails because the preview lacks the new regions.

### Task 2: Content model and expressive primitive

**Files:**
- Create: `src/data/site.ts`
- Create: `src/components/GraffitiWord.astro`
- Modify: `src/styles/global.css`

**Interfaces:**
- Produces: `business`, `homepageArtists`, `homepageReviews`, `homepageEvents`, and a readable `GraffitiWord` component.

- [ ] Add confirmed business data and labelled placeholder collections.
- [ ] Add a blockier, irregular graffiti word primitive using the current token system.
- [ ] Add only semantic tokens needed by repeated homepage composition.

### Task 3: Core storytelling sections

**Files:**
- Create: `src/components/HomeHero.astro`
- Create: `src/components/StudioManifesto.astro`
- Create: `src/components/SelectedWorks.astro`

**Interfaces:**
- Consumes: CTA, MediaFrame, Section, GraffitiWord, reference images, and `business.whatsappUrl`.
- Produces: `#top`, `#studio`, and `#lavori` homepage regions.

- [ ] Implement the asymmetric campaign hero with primary WhatsApp conversion.
- [ ] Implement the concise studio manifesto with documentary reference photography.
- [ ] Implement the irregular selected-work archive with visible non-EVHIL labels.

### Task 4: People, programming, and trust sections

**Files:**
- Create: `src/components/ArtistsPreview.astro`
- Create: `src/components/EventsPreview.astro`
- Create: `src/components/ReviewsPreview.astro`

**Interfaces:**
- Consumes: labelled placeholder collections from `src/data/site.ts`.
- Produces: `#artisti`, `#eventi`, and `#recensioni` homepage regions.

- [ ] Implement artist slots with alternating media and future-data fields.
- [ ] Implement the compact poster-like event placeholder.
- [ ] Implement review architecture with no fabricated quote content.

### Task 5: Conversion, contact, and footer

**Files:**
- Create: `src/components/QuoteCTA.astro`
- Create: `src/components/ContactSection.astro`
- Create: `src/components/SiteFooter.astro`
- Modify: `src/components/Header.astro`

**Interfaces:**
- Consumes: confirmed business data, BrandMark, CTA, and in-page homepage anchors.
- Produces: `#preventivo`, `#contatti`, and footer navigation/contact.

- [ ] Implement the editorial WhatsApp action and five-step flow.
- [ ] Implement confirmed location and phone without opening hours.
- [ ] Implement the oversized EVHIL footer and update homepage navigation to valid in-page anchors.

### Task 6: Page composition and motion

**Files:**
- Modify: `src/pages/index.astro`
- Modify: `src/layouts/BaseLayout.astro`
- Modify: `src/scripts/foundation-motion.ts`

**Interfaces:**
- Consumes: all homepage section components.
- Produces: complete semantic homepage and preserved production-build design contract.

- [ ] Replace the foundation preview with the nine-section composition.
- [ ] Update title, description, design contract, and confirmed LocalBusiness structured data.
- [ ] Extend the Motion initializer for stagger groups and one hero graffiti reveal; preserve cleanup and reduced motion.
- [ ] Run the focused behavior tests and make them pass.

### Task 7: Verification and critique

**Files:**
- Modify only files implicated by verified defects.

**Interfaces:**
- Consumes: completed homepage.
- Produces: a build/test/browser/critique evidence set.

- [ ] Run `npm.cmd run build`.
- [ ] Run `npx.cmd playwright test`.
- [ ] Inspect 390×844, 820×1180, 1024×768, 1440×900, and 1920×1080 in a real browser.
- [ ] Run one Impeccable critique pass against the approved sources and fix the highest-impact issues in one batch.
- [ ] Recheck mobile, rerun build and Playwright, then audit `git status` and the focused diff.
