# AGENTS.md

## Project

Evhil Tattoo Studio is a premium showcase website for a modern tattoo and piercing studio with strong street, tattoo-culture, and rap influences.

The website must prioritize tattoo work, artists, brand identity, and conversion through WhatsApp.

## Tech Stack

- Astro
- TypeScript
- Native Astro components
- Native scoped CSS
- CSS custom properties for design tokens
- Static-first architecture

Do not introduce React, Tailwind CSS, Sass, a component library, a CMS, or another production dependency unless it solves a concrete requirement and the user explicitly approves it.

## Language Conventions

- Source code: TypeScript / Astro.
- Component, file, function, variable, type, interface, collection, and data-property names: English.
- Technical documentation and agent instructions: English.
- User-facing website copy: Italian.
- Mock website content: Italian.
- Code comments: English, only when they explain non-obvious intent.

## Architecture

Prefer small, focused, reusable components with clear responsibilities.

Create reusable components when:
- the same visual or behavioral pattern appears more than once;
- a section has a clear independent responsibility;
- reuse improves consistency or maintainability.

Do not create abstractions for one-off markup merely to increase component count.

Prefer composition over highly configurable “god components”.

Keep page files focused on page composition. Move reusable UI, layout, content, and behavior into appropriately scoped modules.

Keep content/data separate from presentation when the content is expected to change.

## Design Source of Truth

Before implementing or materially changing visual UI, read:

- `docs/PROJECT_BRIEF.md`
- `docs/DESIGN_BRIEF.md`
- available files under `references/`

If one of these required sources is missing, do not invent project facts or silently replace the intended art direction with generic design conventions.

`docs/DESIGN_BRIEF.md` is the visual source of truth. Installed design skills are advisors, not a replacement for the approved design brief.

## Responsive Design

The website must be fully responsive across mobile, tablet, laptop, and large desktop viewports.

Responsive behavior must be intentionally designed rather than obtained only by stacking desktop layouts.

For every major section, consider:
- composition;
- content order;
- typography scaling;
- spacing;
- image crop and aspect ratio;
- navigation behavior;
- interaction patterns;
- horizontal scrolling;
- animation intensity;
- touch usability.

Do not assume that tablet should behave exactly like either desktop or mobile.

Use fluid layouts where possible instead of designing only around fixed breakpoint snapshots.

No meaningful content or interaction may depend on hover alone.

## Content Integrity

Never invent real:
- artist names or biographies;
- tattoo portfolio claims;
- reviews;
- ratings;
- awards;
- certifications;
- prices;
- business facts;
- events;
- opening hours.

Mock content is allowed only when clearly treated as placeholder content during development.

Never present AI-generated tattoo work as real work produced by Evhil or its artists.

## Dependencies

Prefer platform and Astro capabilities before adding packages.

Before adding a production dependency:
1. verify that the requirement cannot be solved cleanly with the existing stack;
2. explain the benefit and trade-off;
3. request user approval.

Do not add packages “just in case”.

## Accessibility and Semantics

Use semantic HTML by default.

Ensure:
- keyboard-accessible interactive controls;
- meaningful focus states;
- sufficient contrast;
- descriptive image alt text when appropriate;
- reduced-motion support for non-essential animation;
- correct heading hierarchy;
- links and buttons are used according to their semantic purpose.

Do not sacrifice usability or accessibility for visual effects.

## Performance

Keep client-side JavaScript minimal.

Use Astro's static-first model and hydrate only interactions that genuinely require client-side behavior.

Optimize images and avoid unnecessary layout shifts, heavy animation, and large third-party scripts.

## SEO

Preserve a technically sound baseline for:
- unique page titles and descriptions;
- canonical URLs;
- semantic heading structure;
- Open Graph metadata;
- sitemap and robots configuration;
- structured data where appropriate;
- a single source of truth for business/NAP information;
- crawlable internal navigation.

Do not create thin or duplicated Local SEO pages.

## Motion and Interaction

- Use the installed `motion` package for purposeful UI animation and scroll-linked interaction.
- Before implementing non-trivial animation, use the project Motion skill and Motion MCP to consult current Motion APIs, examples, and best practices.
- This is an Astro project: use Motion's vanilla JavaScript APIs. Do not introduce React, `motion/react`, `framer-motion`, or another framework solely for animation.
- Prefer `scroll()` for continuous scroll-linked effects such as parallax, progress, pinned storytelling, and horizontal galleries.
- Prefer `inView()` for viewport-triggered reveals and entrance/exit behavior.
- Prefer CSS transitions/animations when Motion would add unnecessary complexity.
- Use CSS `position: sticky` for pinned sections instead of simulating pinning with JavaScript when appropriate.
- Motion must support hierarchy, storytelling, navigation, or brand expression. Avoid decorative animation with no clear purpose.
- Keep movement controlled and consistent with the Dark Graffiti Editorial direction: raw and expressive, but never chaotic or gimmicky.
- Preserve the exact EVHIL logo and brand marks. Animate their reveal, masking, opacity, texture, or surrounding elements rather than morphing or redesigning the artwork.
- Avoid excessive parallax, scroll hijacking, cursor gimmicks, continuous looping effects, excessive scale animations, and animation that competes with tattoo photography.
- Never make an essential interaction depend only on hover.
- Respect `prefers-reduced-motion` and provide a reduced or static equivalent for meaningful animation.
- Favor transform and opacity animation for performance. Avoid unnecessary layout-triggering animation.
- Clean up Motion observers/listeners where component or page lifecycle requires it.

## Quality Gate

Do not consider a task complete only because the code compiles.

For relevant changes:
1. run the project's type/check command;
2. run the production build;
3. inspect affected pages in a real browser;
4. verify mobile, tablet, desktop, and large-desktop layouts;
5. check for console/runtime errors;
6. perform visual review against the approved design brief;
7. fix issues discovered during review before declaring completion.

When Playwright or project QA skills are available, use them for browser verification.

## Git and Safety

Keep changes focused and reviewable.

Do not:
- push without user approval;
- merge branches without user approval;
- deploy to production without user approval;
- rewrite Git history unless explicitly requested;
- perform destructive repository operations without explicit approval.

Before large refactors, explain why they are necessary.

## Working Style

Inspect the existing codebase before changing architecture.

Prefer the smallest solution that fully satisfies the requirement.

Do not silently change approved design direction, architecture, dependencies, content model, or technology choices.

When requirements are ambiguous and the decision would materially affect art direction, architecture, dependencies, or user experience, ask before implementing.
