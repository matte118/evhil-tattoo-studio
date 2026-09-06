# Evhil Tattoo Studio — Design Brief

## 1. Creative Direction

### Approved Direction

**Dark Graffiti Editorial**

The website should immediately communicate a graffiti-influenced identity combined with contemporary tattoo culture, streetwear editorial design, rap / urban visual culture, and premium studio presentation.

Graffiti should be perceived from the very first screen, not as a minor accent introduced later in the scroll.

The objective is not to create a stereotypical “graffiti website”, but a premium tattoo-studio website whose identity is visibly rooted in graffiti and street culture.

### Creative Mix

Use this balance as a directional reference:

- **50% Graffiti / Street Culture**
- **30% Editorial Premium Structure**
- **20% Tattoo / Raw Atelier**

This is not a visual formula. It describes the intended balance between:

- street credibility;
- artistic seriousness;
- premium presentation;
- controlled digital experimentation.

---

## 2. Desired Brand Perception

The website should communicate:

- professional;
- contemporary;
- street-rooted;
- artistic;
- raw;
- premium;
- confident;
- dark;
- visually rich;
- carefully executed.

The website must not feel:

- dirty;
- amateur;
- excessively commercial;
- gothic for the sake of being gothic;
- cyberpunk by default;
- like a generic tattoo template;
- like a SaaS landing page with a dark theme;
- overdesigned.

### Core Emotional Response

A visitor should feel:

> "This studio understands tattoo culture, takes the work seriously, and has a strong identity of its own."

The website should create both:

- desire;
- trust.

It should not sacrifice professionalism in order to appear underground.

---

## 3. Visual Hierarchy

The design should prioritize, in order:

1. tattoo work / photography;
2. brand identity;
3. artists;
4. editorial typography;
5. studio atmosphere;
6. conversion actions;
7. supporting information.

Photography and tattoo work are proof.

Typography and graphic treatment should frame the work rather than compete with it.

Avoid turning the website into a showcase of web effects.

---

## 4. Color Direction

### Base Palette

The interface should be predominantly dark.

Recommended starting tokens:

```css
--color-black: #050505;
--color-black-soft: #0B0B0B;
--color-surface: #111111;
--color-surface-raised: #171717;

--color-white: #F4F2ED;
--color-white-bright: #FFFFFF;
--color-muted: #9D9D9A;

--color-violet: #7A35FF;
--color-violet-bright: #925BFF;
```

These values are a starting system, not untouchable brand standards.

### Black

Avoid a flat generic `#000` experience everywhere.

Use subtle separation through:

- slightly different black surfaces;
- photography;
- texture;
- lighting;
- whitespace;
- typography.

The site should feel materially dark rather than merely "dark mode".

### White

Use slightly warm / off-white text for large editorial surfaces where appropriate.

Pure white can be reserved for high-contrast details.

### Violet

Violet is an **accent**, not a dominant background color.

Use it selectively for:

- active states;
- key micro-details;
- small highlights;
- occasional typography emphasis;
- interaction feedback;
- atmospheric lighting that comes from real imagery.

Do not cover large areas with purple gradients.

Do not turn the website into a neon-purple theme.

---

## 5. Typography Direction

Typography is one of the primary visual tools.

### Overall Character

The typography should combine:

- bold editorial presence;
- contemporary street culture;
- high legibility;
- controlled aggression.

Avoid obvious tattoo clichés such as:

- blackletter as the default interface font;
- gothic fonts across large amounts of text;
- distressed fonts used everywhere;
- graffiti fonts for functional UI.

### Display Type

Use a strong display face with qualities such as:

- condensed or tightly proportioned;
- heavy weight;
- assertive forms;
- strong uppercase presence;
- editorial / fashion potential.

The display type should work well at very large sizes.

Do not select a font simply because it looks "urban".

### Body Type

Use a neutral contemporary sans serif for:

- descriptions;
- navigation;
- supporting information;
- metadata;
- functional UI.

The body type should create contrast with the display type.

### Typography Hierarchy

Prefer a limited number of clearly differentiated levels.

Possible roles:

- oversized editorial statement;
- page title;
- section title;
- body copy;
- eyebrow / label;
- metadata.

Do not create ten small variations of the same heading style.

### Editorial Labels

Small uppercase labels may be used for:

- artist category;
- location;
- project metadata;
- index numbers;
- availability;
- section markers.

They should feel intentional, not like fake technical decoration.

### Exact Font Selection

Final font families remain a design decision.

Do not lock the project to a generic font before visual testing.

When selecting fonts:

1. test them against the Evhil logo;
2. test tattoo photography and large headings together;
3. verify Italian characters;
4. verify mobile readability;
5. verify licensing before production.

---

## 6. Logo and Symbol System

Existing known assets include:

- the EVHIL wordmark;
- the eye symbol;
- drop / tear motifs.

### Logo

Treat the logo as a brand asset, not as the only source of visual identity.

Do not enlarge it unnecessarily in every section.

The logo should have intentional appearances in:

- navigation / header;
- hero or opening sequence when appropriate;
- footer;
- selected brand moments.

### Eye Symbol

The eye can become a recurring graphic device.

Possible uses:

- loading / transition moment;
- section marker;
- framing device;
- masked photography;
- oversized background crop;
- hover / interaction detail;
- graphic divider.

Do not repeat it everywhere.

### Drop / Tear Motif

The drop can work as a secondary recurring detail.

Use sparingly.

It may function as:

- accent;
- cursor-related detail if justified;
- motion element;
- visual separator;
- atmospheric graphic.

Avoid decorative repetition that turns it into a pattern without meaning.

---

## 7. Photography Direction

Photography should be one of the strongest parts of the final website.

### Desired Character

Preferred direction:

- raw;
- flash-driven;
- high contrast;
- close;
- tactile;
- contemporary;
- slightly imperfect;
- editorial rather than corporate.

Photography may feel spontaneous but must remain high quality.

### Tattoo Work

Tattoo portfolio images should:

- dominate when shown;
- preserve detail;
- use intentional crops;
- avoid excessive overlays;
- avoid reducing work to tiny thumbnails.

The website should make viewers want to inspect the work.

### Artist Photography

Artist portraits should feel connected to:

- the physical studio;
- street culture;
- real working environments;
- personal identity.

Avoid corporate profile photography.

### Studio Photography

Prioritize:

- graffiti;
- neon;
- materials;
- tools;
- wall details;
- mirrors;
- furniture;
- working moments;
- tattoo process;
- atmosphere.

Avoid empty generic interior photography if it communicates nothing about Evhil.

### Image Treatment

Allowed when appropriate:

- grain;
- strong contrast;
- black-and-white;
- controlled color grading;
- direct flash;
- aggressive crop;
- subtle blur / movement;
- layered editorial compositions.

Do not apply identical effects to every image.

---

## 8. Mock Asset Policy

During prototyping, images and artists may be mocked.

Mock assets exist to validate:

- composition;
- proportion;
- responsive behavior;
- visual rhythm.

They must not dictate false business facts.

Production assets will later replace mock assets.

The design should remain robust when real photography is introduced.

Do not build a layout that works only because a specific generated mock image has empty space in exactly the right location.

---

## 9. Layout and Composition

### General Principle

The composition should feel editorial, intentional, and slightly irregular.

Do not make every section use the same centered container and grid.

### Preferred Characteristics

Use when appropriate:

- asymmetric composition;
- large image fields;
- controlled overlaps;
- offset typography;
- changing content density;
- occasional full-bleed media;
- oversized text;
- unexpected but usable alignment;
- strong vertical rhythm;
- varying section proportions.

### Grid

Use an underlying grid for consistency, but do not make the grid visually obvious everywhere.

The grid should enable asymmetry rather than eliminate it.

### Containers

Do not wrap every section in an identical `max-width` container.

Some sections may be:

- full viewport width;
- editorially narrow;
- offset;
- split;
- media-led.

### Spacing

Use meaningful contrast between:

- dense clusters;
- large pauses;
- full-bleed sections.

Avoid mechanically repeating the same vertical spacing value between every block.

---

## 10. Homepage Direction

The homepage should balance brand storytelling with early proof of work.

### Opening / Hero

Do **not** use the generic pattern:

> centered headline + centered paragraph + two CTA buttons + background image.

Preferred hero direction:

- image- or motion-led;
- asymmetrical;
- editorial typography integrated with the visual;
- unmistakably branded;
- capable of introducing Evhil before explaining everything.

The hero should communicate:

- brand attitude;
- tattoo culture;
- professional quality.

The primary CTA does not need to dominate the first visual moment, but it must remain easy to find.

### Early Portfolio Presence

Tattoo work should appear relatively early.

The visitor should not need to scroll through multiple marketing sections before seeing real work.

### Homepage Rhythm

The exact sequence is flexible, but the experience should alternate:

- brand;
- work;
- people;
- atmosphere;
- trust;
- conversion.

Avoid a repetitive sequence of independent marketing cards.

---

## 11. Portfolio Direction

The portfolio is a major product surface.

### Desired Experience

The portfolio should feel closer to:

- an editorial image archive;
- an artist portfolio;
- a visual exhibition;

than to:

- an ecommerce catalog;
- a card gallery;
- an Instagram clone.

### Grid

Use a flexible visual grid.

Possible behaviors include:

- mixed aspect ratios;
- large / small image contrast;
- controlled masonry-like rhythm;
- occasional full-width work;
- staggered composition.

Do not randomize layout purely for novelty.

### Interaction

Useful interaction may include:

- image enlargement;
- detail view;
- artist attribution;
- work metadata;
- subtle transition.

Do not hide portfolio work behind unnecessary animation.

---

## 12. Artists Direction

The artists page should communicate that Evhil is a studio composed of individual creative voices.

### Artist Listing

Each artist preview should have enough identity to feel distinct.

Avoid identical profile cards.

Possible presentation elements:

- portrait;
- name;
- specialty;
- selected work;
- short statement;
- asymmetric image treatment.

### Artist Detail Page

Each artist page should feel like a mini portfolio inside the Evhil system.

It may include:

1. artist identity;
2. short biography;
3. specialties;
4. selected tattoo work;
5. flash availability;
6. social / contact CTA.

The Evhil brand remains present, but the artist's work becomes the visual protagonist.

---

## 13. Piercing Direction

Piercing should belong to the same visual universe but remain secondary.

Do not create a completely separate aesthetic.

The page should still feel premium and editorial.

Avoid making it look like a service price list unless real requirements later demand that.

---

## 14. Events and Promotions

Events, flash days, and promotions may use a slightly more poster-like visual language.

Possible inspiration:

- gig posters;
- rap flyers;
- street posters;
- xerox graphics;
- sticker culture.

This is one of the best areas for controlled experimentation.

Do not allow event graphics to redefine the global website style.

---

## 15. Reviews Direction

Reviews should provide trust without becoming a generic testimonial carousel.

Avoid:

- five-star cards repeated in a row;
- quotation-mark icons everywhere;
- SaaS testimonial layouts.

Prefer approaches such as:

- strong typographic quotes;
- editorial text treatment;
- selected real reviews;
- restrained Google attribution where appropriate;
- one or a few strong statements rather than visual clutter.

---

## 16. CTA and Conversion Design

Primary conversion:

**WhatsApp**

Secondary:

**Instagram**

CTA treatment should be:

- visible;
- confident;
- simple;
- consistent.

Do not place large CTA blocks after every section.

Use conversion moments deliberately.

Recommended moments:

- navigation;
- selected homepage point;
- artist page;
- request-a-quote page;
- footer.

CTA copy should be direct and Italian.

Avoid generic phrases such as:

- "Scopri di più";
- "Inizia il tuo viaggio";
- "Trasforma la tua idea in realtà";

unless context makes them genuinely appropriate.

---

## 17. Motion Direction

### Intensity

Target motion intensity:

**approximately 6.5 / 10**

Motion should add identity and rhythm without becoming the main experience.

### Preferred Motion

Use selectively:

- typography reveals;
- image reveal / clipping;
- controlled parallax;
- horizontal portfolio movement;
- marquee only if contextually justified;
- subtle logo / symbol motion;
- smooth section transitions;
- hover responses;
- scroll-linked editorial movement.

### Avoid

- constant movement;
- excessive cursor effects;
- random floating objects;
- animation on every text block;
- long intro sequences;
- interactions that delay access to portfolio content;
- motion added only to look "Awwwards".

### Performance

Prefer CSS and lightweight browser capabilities before adding animation libraries.

Do not add GSAP or another animation dependency without a concrete need and approval.

### Accessibility

Respect `prefers-reduced-motion`.

Core content and navigation must remain fully understandable without animation.

---

## 18. Horizontal Scrolling

Horizontal scrolling is approved as a possible pattern.

Use it only where it creates clear value.

Good candidates:

- selected works;
- artist preview sequence;
- campaign / event imagery.

Do not turn the entire website into horizontal scrolling.

On mobile, ensure the behavior remains intuitive and performant.

---

## 19. Texture and Material

The visual system may include subtle physical texture.

Possible sources:

- paper;
- xerox;
- ink;
- spray;
- wall texture;
- film grain;
- print imperfections;
- sticker residue;
- tattoo sketch material.

Textures should feel derived from real street / studio culture.

Avoid:

- generic grunge overlays;
- fake scratches everywhere;
- excessive noise;
- decorative dirt that harms readability.

Raw does not mean visually dirty.

---

## 20. Iconography

Avoid installing a large icon library by default.

Prefer:

- simple custom SVG;
- typographic labels;
- familiar symbols only where useful;
- the Evhil symbol system when appropriate.

Do not place every icon inside a circle.

Do not use icons as decoration when typography is clearer.

---

## 21. UI Shape Language

The website should not depend on rounded containers.

Default direction:

- sharp or nearly sharp geometry;
- restrained corner radius;
- edges influenced by editorial layouts and physical print.

Rounded controls may still be used where functionally appropriate.

Avoid turning every image, card, CTA, or container into a large rounded rectangle.

---

## 22. Responsive Design

Mobile is a primary design surface.

Do not simply stack desktop columns vertically.

For each major section, explicitly decide:

- what remains;
- what changes order;
- what becomes full bleed;
- what is simplified;
- how typography scales;
- how images crop;
- how motion changes;
- whether horizontal interactions remain appropriate.

### Mobile Character

Mobile should retain:

- strong typography;
- visual tension;
- image dominance;
- brand identity;
- deliberate spacing.

It should not become a generic single-column website.

---

## 23. Accessibility

Visual experimentation must remain usable.

Maintain:

- readable body text;
- adequate contrast;
- clear focus states;
- keyboard accessibility;
- semantic controls;
- logical heading hierarchy;
- reduced-motion support.

Do not use low-contrast grey text purely for aesthetic reasons.

---

## 24. Anti-AI-Slop Rules

The following patterns are **not prohibited absolutely**, but they must never appear as automatic defaults.

### Avoid by Default

- centered SaaS hero;
- badge above headline;
- two generic hero buttons;
- three-column feature cards;
- repeated card grids;
- bento layouts without content justification;
- excessive rounded corners;
- gradient mesh backgrounds;
- glassmorphism;
- floating decorative blobs;
- random neon glows;
- icon circles;
- fake statistics;
- generic social proof;
- excessive pills;
- repeated section title + paragraph + cards structure;
- meaningless micro-labels;
- identical section widths;
- predictable alternating left-image/right-text sections;
- default stock tattoo imagery;
- skull / flame / rose clichés used without brand relevance;
- blackletter simply because the business is tattoo-related;
- cyberpunk visual effects without conceptual reason.

### Copy Anti-Patterns

Avoid generic phrases such as:

- "Dove l'arte incontra la passione";
- "Esprimi te stesso";
- "Trasformiamo la tua idea in realtà";
- "Ogni tatuaggio racconta una storia";
- "Più di un tatuaggio, un'esperienza";
- generic premium claims with no proof.

Copy should sound specific to Evhil.

---

## 25. Design Critique Questions

Before considering a page visually complete, ask:

1. Could this page belong to another tattoo studio with only the logo changed?
2. Could it belong to a barber, creative agency, or crypto startup?
3. Is tattoo work visible and treated as proof?
4. Is the layout too symmetrical or predictable?
5. Are too many sections using the same composition?
6. Are there unnecessary cards?
7. Is the typography carrying enough identity?
8. Does the photography dominate where it should?
9. Is violet being overused?
10. Does anything look like a generic dark-mode UI?
11. Is the page premium without feeling sterile?
12. Is the page raw without feeling dirty or amateur?
13. Is the street / rap influence present without becoming costume?
14. Does mobile preserve the creative direction?
15. What is the memorable visual moment of this page?
16. What visual element could be removed without losing anything?
17. Is any effect competing with the tattoo work?
18. Does the composition feel intentional rather than merely unconventional?

If several answers reveal genericity, the design is not finished.

---

## 26. Reference Usage

Visual references are inspiration, not templates.

For every important reference, identify:

- what to take;
- what not to take;
- why it is relevant.

Examples of transferable qualities:

- image scale;
- editorial hierarchy;
- typography contrast;
- whitespace;
- rhythm;
- navigation behavior;
- portfolio treatment;
- motion restraint.

Do not clone:

- layouts;
- branding;
- exact interactions;
- typography systems;
- proprietary visual assets.

### Planned Reference Categories

```text
references/
  brand/
  composition/
  typography/
  photography/
  motion/
  details/
  avoid/
```

A future `references/README.md` should explain the purpose of selected references.

---

## 27. Design Skills and External Tools

Installed design skills may help with:

- critique;
- accessibility;
- typography;
- layout analysis;
- UI best practices;
- refinement.

However:

> `docs/DESIGN_BRIEF.md` is the visual source of truth.

If an external skill recommends a generic pattern that conflicts with this document, follow this document.

Do not redesign Evhil according to a tool's default industry preset.

---

## 28. Creative Autonomy

Codex may autonomously decide:

- small spacing refinements;
- responsive implementation details;
- semantic markup;
- local component composition;
- subtle interaction details that follow this brief.

Codex should present alternatives or ask before making major decisions about:

- hero concept;
- primary typeface;
- dominant portfolio composition;
- major motion concept;
- new visual motif;
- large palette change;
- new dependency;
- design direction changes.

---

## 29. Visual Definition of Done

A visual task is not complete when the code compiles.

For meaningful UI work:

1. render the page in a real browser;
2. inspect desktop;
3. inspect mobile;
4. capture screenshots when useful;
5. compare against this brief and approved references;
6. run a design critique;
7. identify the weakest visual area;
8. improve it;
9. verify again.

The first acceptable implementation should be treated as a draft, not automatically as the final design.

---

## 30. Final Creative Statement

Evhil should feel like a tattoo studio that belongs naturally in contemporary street culture without needing to imitate street culture.

The site should be dark but not a dark-mode template.

It should be raw but never careless.

It should feel premium without becoming polished to the point of sterility.

The tattoo work should remain the strongest visual proof.

The digital experience should support the studio's identity rather than overshadow it.
