---
name: "EVHIL Tattoo Studio"
description: "Dark Graffiti Editorial system for a premium, street-rooted tattoo studio."
colors:
  canvas: "#050505"
  canvas-soft: "#0b0b0b"
  surface: "#111111"
  surface-raised: "#171717"
  ink: "#f4f2ed"
  ink-bright: "#ffffff"
  ink-muted: "#a8a7a3"
  accent: "#7a35ff"
  accent-bright: "#925bff"
  border: "rgb(244 242 237 / 18%)"
  border-strong: "rgb(244 242 237 / 42%)"
  focus: "#b997ff"
typography:
  primary-graffiti:
    fontFamily: "EVHIL Graffiti"
    source: "assets/fonts/graffiti-primary/DonGraffiti.otf"
    fontSize: "clamp(5.25rem, 16vw, 14rem)"
    fontWeight: 400
    lineHeight: 0.73
    letterSpacing: "-0.04em"
  secondary-graffiti:
    fontFamily: "EVHIL Handstyle"
    source: "assets/fonts/graffiti-secondary/SedgwickAve-Regular.ttf"
    fontWeight: 400
  structural-display:
    fontFamily: "Barlow Condensed"
    sources:
      400: "assets/fonts/display/BarlowCondensed-Regular.ttf"
      600: "assets/fonts/display/BarlowCondensed-SemiBold.ttf"
      700: "assets/fonts/display/BarlowCondensed-Bold.ttf"
      900: "assets/fonts/display/BarlowCondensed-Black.ttf"
    fontSize: "clamp(3.8rem, 10vw, 9rem)"
    fontWeight: 900
    lineHeight: 0.76
    letterSpacing: "-0.04em"
  body-ui:
    fontFamily: "Instrument Sans"
    source: "assets/fonts/body/InstrumentSans-VariableFont_wdth,wght.ttf"
    fontWeight: "400 700"
    fontStretch: "75% 100%"
    fontSize: "clamp(1rem, 0.94rem + 0.18vw, 1.125rem)"
    lineHeight: 1.55
rounded:
  sharp: "0"
  detail: "0.2rem"
  control: "999px"
spacing:
  2xs: "clamp(0.35rem, 0.3rem + 0.16vw, 0.5rem)"
  xs: "clamp(0.55rem, 0.47rem + 0.22vw, 0.75rem)"
  sm: "clamp(0.85rem, 0.72rem + 0.4vw, 1.25rem)"
  md: "clamp(1.25rem, 1.02rem + 0.72vw, 2rem)"
  lg: "clamp(2rem, 1.45rem + 1.7vw, 3.75rem)"
  xl: "clamp(3.25rem, 2.2rem + 3.2vw, 6.5rem)"
  2xl: "clamp(5rem, 3.2rem + 5.6vw, 10.5rem)"
components:
  cta-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.sharp}"
    padding: "0.95rem 1.1rem"
    height: "3.25rem"
  cta-text:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sharp}"
    padding: "0.35rem 0"
  cta-editorial:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink-bright}"
    rounded: "{rounded.sharp}"
    padding: "{spacing.md} {spacing.lg}"
    width: "100%"
---

# Design System: EVHIL Tattoo Studio

## Overview

**Creative North Star: "The Dark Street Press."**

EVHIL is a premium tattoo-studio system rooted in contemporary graffiti, streetwear editorial composition, rap and urban visual culture, and the raw reality of a working atelier. It must feel dark, confident, artistic, visually rich, and carefully executed—never dirty, amateur, excessively commercial, or like a generic dark SaaS or tattoo template.

The approved directional balance remains 50% Graffiti / Street Culture, 30% Editorial Premium Structure, and 20% Tattoo / Raw Atelier. Graffiti is visible in the first viewport through selected handstyle tension and graphic marks; it is not a decorative skin over a generic layout. Photography and tattoo work are proof, so typography, graphic treatment, and motion frame the work rather than compete with it.

**Key Characteristics:**

- Dark material fields, warm ink, sharp editorial rules, and restrained violet.
- Asymmetric composition, mixed-scale photography, intentional overlap, and strong vertical rhythm.
- Graffiti is expressive and scarce; functional UI stays clean, readable, and direct.
- Premium restraint is as important as street credibility; raw never means careless.

## Colors

The palette is materially near-black rather than generic dark mode: tonal surface changes, photography, whitespace, and rules create depth while violet remains a rare signal.

### Primary

- **EVHIL Violet:** the controlled accent for active states, interaction feedback, small highlights, selected handstyle emphasis, and atmospheric light motivated by imagery.

### Neutral

- **Ink Canvas:** the dominant near-black field for page grounds and dark editorial contrast.
- **Soft Canvas and Surfaces:** closely related black layers that separate regions without floating-card treatment.
- **Warm Ink and Bright Ink:** primary editorial text and selective high-contrast details.
- **Muted Ink:** supporting copy and metadata, never low-contrast decoration.
- **Structural Rules and Focus Violet:** borders clarify hierarchy; focus remains unmistakable for keyboard users.

**The Rare Violet Rule.** Violet is an accent, not a dominant background. Do not create large purple gradients, neon-purple themes, unrelated accents, or random glow.

## Typography

The system has four intentionally differentiated production roles. All four families are loaded locally with `font-display: swap`; no downloaded or generated font assets are part of the implementation. Only normal styles are declared, so the browser does not synthesize an unsupported italic voice.

### Hierarchy

- **Primary Graffiti — Don Graffiti / `EVHIL Graffiti`:** the principal expressive voice for hero identity, `FLASH` / `CREW`-scale statements, selected brand signatures, and major footer moments. It remains scarce and is never normal body copy, navigation, metadata, or functional UI. The local face is regular 400; visual authority comes from its drawn forms, scale, treatment, and placement rather than synthesized weight.
- **Secondary Graffiti — Sedgwick Ave / `EVHIL Handstyle`:** the subordinate raw handstyle for annotations, small labels, secondary notes, and occasional overlays. It may support a composition but cannot compete with Don Graffiti or replace structural headings. The local face is regular 400.
- **Structural Display — Barlow Condensed:** the condensed editorial voice for oversized statements, page and section titles, artist placeholder names, indexes, and structural words such as Studio, Artisti, Portfolio, and Piercing. Use only the supplied 400, 600, 700, and 900 files; 900 is the default high-authority display weight.
- **Body / UI — Instrument Sans:** the clean grotesk for paragraphs, navigation, CTA labels, captions, metadata, address and contact information, and functional labels. The supplied variable font supports `wght` 400–700 and `wdth` 75–100. Keep reading measures purposeful; the reusable narrow reading width is 68ch.

Compact uppercase labels remain a body/UI sub-role, not a fifth family. They may identify real metadata, indexes, locations, availability, or section markers through size, weight, spacing, and case.

### Production delivery

The semantic CSS tokens are `--font-graffiti-primary`, `--font-graffiti-secondary`, `--font-display`, and `--font-body`. Components consume these role tokens instead of declaring font stacks directly. Fallback stacks exist only for resilient rendering during `swap`; the approved local face remains first in every stack.

**The Two-Voice Rule.** A composition may use a handstyle accent and structural display together, but body and conversion UI remain in the clean grotesk. Do not use blackletter, gothic, distressed type, or graffiti fonts as the default tattoo shorthand.

## Layout

Use an underlying grid to enable asymmetry, not to make every section visibly identical. The implementation provides contained default, wide, and narrow containers plus full-bleed sections; use the right spatial mode for the content instead of wrapping everything in one max-width.

The spacing scale is fluid and ranges from dense 2xs clusters through 2xl editorial pauses. Use contrast between compact information, large pauses, full-bleed media, and offset elements. The standard container uses responsive gutters and caps broad content; wide content is limited to 112rem, default to 90rem, and narrow to 52rem.

Responsive composition is deliberate. Mobile preserves image dominance, typographic tension, clear WhatsApp access, and asymmetry; it is not compressed desktop. Tablet is an intentional intermediate state. At small screens, split sections may become a re-composed stack, media crops may shift, unnecessary annotations may disappear, and actions receive their own lane. Large screens keep useful negative space rather than stretching indefinitely. Horizontal scrolling is permitted only where selected work, artist sequences, or campaigns gain clear value; it must never become the site-wide navigation model.

## Elevation & Depth

The system is flat by default. Depth comes from photography, tonal surface layers, scale, overlap, contrast, clipped media, and restrained motion—not floating cards or default soft shadows. Borders are editorial rules and structural separators; they may also clarify interaction state.

Subtle grain, paper, xerox, ink, spray, wall, film, or print texture is permitted only when it feels physically sourced and preserves readability. Direct flash, controlled grading, black-and-white treatment, aggressive crops, and slight blur or movement are valid photographic tools. Do not apply the same treatment to every image or use generic grunge, scratches, blur blobs, glassmorphism, gradient mesh, or decorative dirt.

**The Work-First Rule.** No depth effect, texture, motion, or overlay may reduce tattoo inspection or compete with the work.

## Shapes

Sharp or nearly sharp geometry is the default: editorial edges, physical-print rules, square CTA silhouettes, and restrained borders. The actual primitive radii are sharp, detail, and control; the control radius exists for functional exceptions, not as a license to turn cards, images, CTAs, or containers into pills.

Known EVHIL motifs—the wordmark, eye, and drop/tear—are brand devices. Preserve their artwork. Use them selectively as navigation, transition, framing, divider, masked-media, or atmospheric details; never repeat them as meaningless decoration or redesign them into cartoon graffiti.

## Components

### CTAs

Direct and architectural rather than SaaS-like. WhatsApp is the primary conversion and Instagram is the approved secondary conversion for future surfaces. Primary CTA uses warm ink on the dark canvas with a narrow violet leading rule, uppercase label, square arrow, and sharp corners. Text CTA is a low-chrome underlined action. Editorial CTA is an oversized full-width structural-display conversion moment; use it selectively, never after every section.

All external CTAs announce that they open a new tab. Hover motion is progressive enhancement only; focus remains visible without hover. Use direct Italian language and avoid generic invitations such as “Scopri di più,” “Inizia il tuo viaggio,” or broad premium claims without proof.

### Navigation

The header preserves the authentic EVHIL mark, clean structural navigation, a visible WhatsApp action, and a deliberate mobile dialog rather than a collapsed desktop list. Desktop navigation is compact uppercase; unavailable routes are labelled as in preparation rather than looking like active dead links. Mobile navigation is a full-viewport editorial menu with large touch targets, a close control, numbered entries, optional reference visual, and conversion anchored in its footer.

Navigation is semantic, keyboard accessible, has a visible focus state, locks background scroll while the dialog is open, restores focus when closed, and closes with Escape. No essential navigation behavior depends on hover.

### Photography and Portfolio Frames

Photography is treated as an editorial archive, visual exhibition, and proof of work—not ecommerce cards, an Instagram clone, or tiny catalog thumbnails. The reusable frame accepts intentional aspect ratios, `object-fit: cover`, optional monochrome treatment, caption and metadata, clear temporary/reference status, and optional subtle parallax. Captions remain available outside hover.

Portfolio layouts should use mixed ratios, large/small contrast, staggered rhythm, occasional full-width work, and minimal overlays. Future real tattoo work must dominate, preserve detail, include truthful artist attribution and metadata where available, and remain easy to inspect without animation gates.

### Graffiti Labels and Brand Decoration

Graffiti labels are handstyle annotations with a restrained underline-like ink stroke. They mark selected expressive or editorial moments; they are not standard headings, body text, or recurring filler. Oversized cropped structural words and the EVHIL symbol system may create compositional tension behind content only when legibility and photography remain protected.

### Future Surface Patterns

Artist listings should preserve individual identity through real portraits, specialties, selected work, and asymmetrical presentation—not identical profile cards. Artist detail pages are mini-portfolios within the EVHIL system. Piercing belongs to the same visual world but stays secondary to tattoo work and must not default to a service-price catalogue.

Events and promotions may lean into gig posters, rap flyers, street posters, xerox, stickers, and print culture, but cannot redefine the global system. Reviews should use selected verified editorial quotes and restrained attribution, never generic five-star card rows or testimonial carousels.

### Motion Principles

Motion target intensity is approximately 6.5/10: it adds hierarchy, editorial rhythm, and navigation clarity without becoming the attraction. The implemented foundation uses Motion vanilla `inView()` for viewport reveals and `scroll()` for subtle image parallax; the native dialog uses controlled CSS transitions. Motion tokens provide fast, base, and slow durations with the approved easing curves.

Use typography or masked-image reveal, controlled image movement, selected logo/symbol treatment, scroll-linked editorial movement, and hover responses only when they advance hierarchy or story. Avoid scroll hijacking, constant looping, random floating objects, cursor gimmicks, animation on every text block, long intros, and any animation that delays portfolio access. Respect `prefers-reduced-motion`: core content and navigation must remain complete, static, and understandable.

## Do's and Don'ts

### Do:

- **Do** make tattoo work and photography the strongest visual proof, with brand identity immediately visible.
- **Do** use asymmetry, changing density, mixed image scales, full-bleed moments, and editorial whitespace intentionally.
- **Do** use the clean grotesk for functional UI and reserve graffiti/handstyle for controlled brand expression.
- **Do** keep violet scarce, contrast high, focus states clear, controls semantic, and motion optional.
- **Do** use real visual hierarchy, direct Italian CTA copy, and truthful content or explicitly marked temporary material.
- **Do** verify real photography, final type licensing, responsive crop behavior, accessibility, and the creative brief before production release.

### Don't:

- **Don't** default to a centered SaaS hero, badge-over-headline pattern, repeated three-column cards, bento layouts, generic dark-mode UI, or mechanically alternating sections.
- **Don't** use rounded cards, glassmorphism, gradient meshes, random neon glow, icon circles, decorative pills, fake technical labels, or arbitrary purple backgrounds as defaults.
- **Don't** use blackletter, skulls, flames, roses, gothic motifs, cyberpunk effects, or stock tattoo clichés merely because the product is a tattoo studio.
- **Don't** invent artists, biographies, reviews, ratings, awards, prices, statistics, events, availability, or tattoo portfolio claims.
- **Don't** present AI-generated or reference tattoo images as EVHIL work, hide work behind interaction, or sacrifice readability and accessibility for novelty.
- **Don't** let events, promotions, or texture systems replace the approved Dark Graffiti Editorial world.
