# EVHIL Homepage Vertical Slice Design

## Scope

Replace the current foundation preview with the first complete homepage only. The page remains static-first Astro and inherits the approved Dark Graffiti Editorial system. Internal routes, booking, pricing, opening hours, and unverified client claims remain out of scope.

## Visitor journey

The visitor first sees tattoo work, the EVHIL identity, a stronger graffiti intervention, and WhatsApp. The page then moves through studio values, selected reference work, future artist architecture, provisional events and reviews, the contact process, confirmed location, and a final EVHIL footer.

## Composition

- Hero: asymmetric campaign composition with a dominant tattoo crop, structural `TATTOO STUDIO`, a blockier graffiti `EVHIL`, concise positioning copy, WhatsApp, and a selected-work anchor.
- Studio: editorial manifesto paired with documentary process photography and concise language about custom work, care, and designing for the person and body.
- Selected works: irregular, mixed-ratio reference-image archive. Every image is explicitly labelled non-EVHIL preview material.
- Artists: two replaceable artist slots showing the future name, specialty, portrait, work, and profile-link structure without invented identities.
- Events: compact poster-like placeholder for flash days, guest artists, or studio programming without names or dates.
- Reviews: editorial trust structure with no fabricated quotation, attribution, rating, or count.
- Conversion: oversized WhatsApp action with the confirmed customer journey: idea/reference, consultation, quote, deposit, appointment.
- Contact: confirmed studio name, address, phone, WhatsApp, and an explicitly unlinked Instagram placeholder.
- Footer: oversized EVHIL closing mark, local contact, in-page navigation, and direct conversion.

## Art direction

The expressive layer moves away from elegant script. A new graffiti-word primitive uses heavy marker-like letterforms, irregular rotation, hard underpaint, offset violet shadow, and restrained stroke artifacts. It remains readable, does not morph the logo, and does not introduce a font dependency.

Purple remains a signal. Photography is the largest visual material. Section layouts vary deliberately so the page does not become repeated title-copy-card rows.

## Responsive behavior

- 390px: full-bleed hero image with readable layered title, visible primary CTA, offset media archive, two artist slots with alternating alignment, compact event/review structures, and a clear contact finish.
- 820px: intentional two-column intermediates where space permits; navigation uses the designed mobile dialog.
- 1024px: action lanes and headings are bounded by both viewport width and height.
- 1440px and 1920px: compositions retain capped widths, large negative space, and controlled overlap.

## Motion

Use the existing Motion vanilla initializer. `inView()` handles selected section and stagger-group reveals. `scroll()` provides only low-amplitude image parallax. Hero graffiti receives one layered entrance through `inView()`/`animate()`. Reduced-motion users receive the complete static composition.

## Content integrity

Confirmed business information is centralized in TypeScript. Reference photography, artist slots, event architecture, and review architecture are labelled as temporary. No invented names, biographies, work claims, reviews, ratings, dates, prices, opening hours, statistics, or awards appear.

## Validation

Playwright must verify the nine homepage regions, confirmed contact data, visible WhatsApp conversion, placeholder labelling, mobile dialog behavior, reduced-motion behavior, semantic headings, and absence of horizontal overflow at all five configured viewports.
