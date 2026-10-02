---
name: MQC Project Management
description: A precise, sober blueprint-room system for construction project monitoring and control, paper and white surfaces ruled in navy with a single amber marker.
colors:
  site-navy: "#0f2236"
  blueprint: "#1d3a5c"
  safety-amber: "#f2a900"
  amber-ink: "#8a5a00"
  amber-tint: "#fdf1d6"
  concrete: "#ebe9e3"
  steel: "#4a5866"
  paper: "#f5f4f0"
  white: "#ffffff"
  ink-muted: "#55606b"
  line: "#d6d3ca"
  line-strong: "#7d8389"
  brand-tint: "#e3eaf2"
  success: "#1e6b45"
  success-tint: "#e2f1e8"
  danger: "#b42318"
  danger-tint: "#fbe7e4"
  focus: "#1f6fd1"
typography:
  display:
    fontFamily: "Archivo, sans-serif"
    fontSize: "48px"
    fontWeight: 800
    lineHeight: "52px"
    letterSpacing: "-0.015em"
  heading-1:
    fontFamily: "Archivo, sans-serif"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: "42px"
    letterSpacing: "-0.01em"
  heading-2:
    fontFamily: "Archivo, sans-serif"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: "34px"
  heading-3:
    fontFamily: "Archivo, sans-serif"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: "28px"
  body:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "28px"
  body-s:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "20px"
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: "16px"
    letterSpacing: "0.12em"
rounded:
  none: "0px"
  sm: "2px"
  md: "4px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
  4xl: "80px"
  5xl: "112px"
components:
  button-primary:
    backgroundColor: "{colors.safety-amber}"
    textColor: "{colors.site-navy}"
    rounded: "{rounded.md}"
    height: "44px"
    padding: "0 24px"
  button-primary-hover:
    backgroundColor: "{colors.amber-ink}"
    textColor: "{colors.white}"
  button-primary-large:
    backgroundColor: "{colors.safety-amber}"
    textColor: "{colors.site-navy}"
    rounded: "{rounded.md}"
    height: "48px"
    padding: "0 28px"
  button-secondary:
    backgroundColor: "{colors.blueprint}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    height: "44px"
    padding: "0 24px"
  button-secondary-hover:
    backgroundColor: "{colors.site-navy}"
    textColor: "{colors.white}"
  button-disabled:
    backgroundColor: "{colors.concrete}"
    textColor: "{colors.ink-muted}"
  field-control:
    backgroundColor: "{colors.white}"
    textColor: "{colors.site-navy}"
    rounded: "{rounded.md}"
    height: "44px"
    padding: "0 12px"
  badge-off-track:
    backgroundColor: "{colors.danger-tint}"
    textColor: "{colors.danger}"
    rounded: "{rounded.sm}"
    padding: "4px 8px"
---

# Design System: MQC Project Management

## Overview

**Creative North Star: "The Blueprint Room"**

The site reads like a drawing table in a project office: warm paper and white sheets ruled in navy, numbered steps, mono annotations, square-capped line drawings, and one amber marker to say "this is the thing". The mood is precise, sober and accountable. It reassures an owner weighing a major capital commitment that cost and schedule are being measured against a baseline, so every element looks drawn to a line.

Density is moderate and structured. Content sits on a 1200px container with generous section padding, and information is organised by rules and numbering rather than boxes and shadows. Real site photography carries the human side; diagrams, charts and line drawings carry the rigour. Expression is spent in three places: the heavy Archivo headlines, the amber beam that closes every headline, and the navy blocks that mark the moments that matter (the self-test panel, the principle band, the MQC node, the footer).

The product is light-only. There is no dark theme, and the site ignores the system color scheme. The navy blueprint grid appears once, behind the principle statement, and is not a page-wide texture.

**Key Characteristics:**
- Paper ground, white raised sheets, navy used for emphasis blocks and the footer, not for the header or hero.
- One accent. Amber marks the primary action, the beam, the "actual" line and one highlighted drawing.
- Square geometry: 2px and 4px corners, hairline borders, 2px structural rules.
- Numbered, ruled lists (`01`, `02`) instead of icon cards for process content.
- Mono uppercase eyebrow labels as the technical-drawing voice.
- 2px, square-capped, mitered line icons and illustrations; no filled or rounded icon sets.

## Colors

A restrained navy and concrete palette with a single safety-amber accent. Neutrals are slightly warm so the paper surface reads as drawing stock rather than screen white.

### Primary
- **Site Navy** (#0f2236): Primary ink on light surfaces and the inverse ground for emphasis blocks, the principle band and the footer.
- **Blueprint** (#1d3a5c): The brand blue. Secondary buttons, the "planned" series in charts and progress bars, photo placeholder ground, link hover.

### Secondary
- **Safety Amber** (#f2a900): The only accent. Primary buttons, the 8px beam, the "actual" progress bar, the earned-value line, the emphasis rule under the self-test panel, selection color. Never a large background fill.
- **Amber Ink** (#8a5a00): Amber made readable on light surfaces: primary button hover fill, corrective-action arrow. Amber tint (#fdf1d6) is its quiet background, currently unused.

### Neutral
- **Paper** (#f5f4f0): Default page surface and alternating section ground.
- **White** (#ffffff): Raised surfaces: header, hero, cards, inputs, alternate sections.
- **Concrete** (#ebe9e3): Sunken surfaces, progress tracks, disabled fills.
- **Steel** (#4a5866) and **Ink Muted** (#55606b): Secondary text. Ink Muted is the working text token for lead copy, captions and descriptions.
- **Line** (#d6d3ca) and **Line Strong** (#7d8389): Hairline dividers, and control and nav-hover borders where contrast must meet 3:1.
- **Brand Tint** (#e3eaf2): Accent surface and outline-button hover wash.

### Status
- **Success** (#1e6b45, tint #e2f1e8), **Danger** (#b42318, tint #fbe7e4), **Focus** (#1f6fd1). Danger marks off-track state, the actual-cost line and form errors; Success marks the form confirmation. Status colors are reserved for state and data, never decoration.

### Named Rules
**The One Marker Rule.** Amber is the single accent and appears in small, deliberate quantities: a button, a beam, a bar, a line, a rule. If amber covers more than a thin strip or a button, it has stopped being a marker.

**The Ink-on-Amber Rule.** Text on amber is always Site Navy. White on amber fails contrast; amber-colored text on light surfaces uses Amber Ink. On navy, amber text is allowed for eyebrows and short labels.

## Typography

**Display Font:** Archivo (weights 600, 700, 800)
**Body Font:** IBM Plex Sans (400, 500, 600, with italic)
**Label/Mono Font:** IBM Plex Mono (400, 500)

**Character:** Archivo is wide, heavy and engineered; Plex Sans is neutral and highly legible; Plex Mono supplies the drawing-annotation voice. Together they feel like a technical document, not a brochure.

### Hierarchy
- **Display** (800, 48px, 52px line-height, -0.015em): Hero headline only. Drops to 36/40px below `lg`.
- **Heading 1** (700, 36px, 42px, -0.01em): Section titles via `SectionHeading`, and the principle statement. Drops to 30/36px on mobile.
- **Heading 2** (700, 28px, 34px): Secondary section titles and the closing prevention line. 36/42 from `md` for the drift title.
- **Heading 3** (600 or 700, 22px, 28px): Step titles, panel and figure titles.
- **Body** (400, 16px, 28px): Default and lead copy, held to a 720px measure (540–640px in tighter blocks). Lead copy and captions use Ink Muted.
- **Body S** (400, 14px, 20px): Reassurance lines, field messages, footer, chart notes.
- **Label** (Plex Mono 500, 12px, 16px, 0.12em, uppercase): Eyebrows, step numbers, chart axes and figures.

### Named Rules
**The Annotation Rule.** Mono uppercase is for labels, numbers and data only (eyebrows, `01`, chart annotations, figures). Never set sentences or headings in mono.

**The Heavy Headline Rule.** Archivo runs at 700 or 800 for headings (600 only for step and list titles). Light weights lose the engineered feel.

## Layout

A single 1200px container with 16px side padding (24px from `sm`). Prose is capped at a 720px measure. Vertical rhythm uses a 4px base scale. Sections pad 80px top and bottom, 112px from `lg`, and are separated by a 1px line and alternating Paper and White grounds. Pages follow one rhythm: white hero, paper problem section, white drift band, navy principle band, white process section, paper FAQ, white contact, navy footer.

The hero is a 12-column grid, 6/6, with the photograph bleeding past the container to the right viewport edge at `lg`. Two-column sections use 5/7 splits (copy and figure, or heading and list) and collapse to one column below `lg`. The header is sticky, 72px (64px mobile), white at 95% with a light backdrop blur, and below 768px the nav collapses into a `details` menu panel. Anchored sections offset for the header with `scroll-margin`. It is a single-page site: nav items are in-page anchors.

## Elevation & Depth

Flat by default. Depth comes from tonal layering (paper, white, concrete), hairline borders and ruled lines, not from shadows.

### Shadow Vocabulary
- **Panel** (`box-shadow: 0 8px 24px rgba(15, 34, 54, 0.14)`): The two floating layers only: the mobile menu panel and the "Progress this period" card overlapping the hero photo.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. A shadow marks a floating layer, never ambient decoration.

**The Rule-Not-Box Rule.** Separate content with a 2px ink rule or a 1px line before reaching for a bordered container.

## Shapes

Square and exact. Corners are 4px on buttons, fields, cards and diagram nodes, 2px on badges, chips and progress tracks, and 0 on photos, rules and the beam. There are no pills or large radii. Strokes come in three weights: 1px hairline for borders, 2px rule for structural dividers, icons and focus outlines, and 8px beam for the amber signature. The 48px by 8px beam is the recurring silhouette. Icons and illustrations are 2px line drawings with square caps and mitered joins; one element per drawing may take amber.

## Components

All components are flat, rectangular and state-clear. The base is shadcn on Base UI, re-skinned through the tokens in `src/app/tokens.css`.

### Buttons
- **Shape:** 4px corners, 44px high, 24px side padding, 600 weight Plex Sans. The hero, process and contact CTAs use a large size (48px high, 28px padding) with a trailing square-cap arrow.
- **Primary (default):** Amber fill, Site Navy text. Hover fills Amber Ink with white text. Used for every "Request a consultation" action except the desktop nav.
- **Secondary:** Blueprint fill, white text; hover to Site Navy. Used for the CTA in the desktop nav.
- **Outline, ghost, link:** Available from the base; not used on the page yet.
- **Disabled:** Concrete fill with muted text and a not-allowed cursor on the submit button; the base style uses 50% opacity. Transitions are 120ms on color only.

### Inputs / Fields
- **Style:** White fill, 1px Line Strong border, 4px corners, 44px high, 12px side padding. Textarea minimum 112px, vertically resizable.
- **Focus:** 2px Focus-blue outline with 2px offset, applied globally to links, buttons, summaries and controls.
- **Error:** 2px Danger border and a 14px Danger message below in 500 weight, linked with `aria-describedby`. Label is 14px 600 above the control, with an optional muted hint.
- **Form container:** White sheet, 1px Line border, 24px (32px from `sm`) padding, two-column grid with the message and submit row spanning both.
- **Success:** In-place confirmation on the same sheet with a Success-tint square check mark.

### Navigation
- **Style:** White header with a 1px bottom line. 15px Plex Sans 500 anchor links with a 2px transparent bottom border; hover shows a Line Strong underline. CTA button sits at the right.
- **Mobile:** Below 768px, a bordered `Menu` summary opens a full-width white panel with the Panel shadow, ruled link rows and a full-width primary button.

### Section heading (signature)
Mono eyebrow (Ink Muted on light, amber on navy), Heading 1 title, the 48px by 8px amber beam, then a muted lead, left aligned within a 720px measure. Closes with the beam in every hero and principle statement as well.

### Numbered steps (signature)
A ruled, numbered list. Each item has a 2px Site Navy top rule, a mono `01` to `03` number in a 56px gutter, a Heading 3 title and a muted body. This is the model for any sequential content.

### Figures and diagrams
Framed on a white sheet with a 1px Line border and a caption under a 2px ink rule. The S-curve chart draws planned value (Blueprint, dotted), actual cost (Danger, dashed) and earned value (Amber, solid, heaviest), with Site Navy and Danger variance chips in mono and an animated left-to-right plot on scroll when motion is allowed. The monitoring flow diagram uses four bordered nodes (the MQC node inverts to navy with an amber title) under a ruled baseline strip, with an Amber Ink return arrow. The drift grid is eight ruled cells of square-capped line drawings, ending on a navy cell with an amber ground line.

### Progress card and bars
8px tracks in Concrete with 2px corners; planned fills Blueprint, actual fills Amber. A mono caption marks sample data as "Sample".

### Status badge
2px corners, 12px 600 text on a tint with a 6px square marker; "Off track" uses Danger on Danger tint. Other states (Success, Amber Ink on Amber tint, Blueprint on Brand tint) follow the same pattern when needed.

### Emphasis panel
Navy block, white text, a 2px ink rule between each numbered question, closing with a 2px amber rule and a bold line. Used once for the self-test, not for general callouts.

### FAQ disclosure
Native `details`, ruled rows with a 1px top line, 600 weight question, a square-cap chevron that rotates open, hover to Blueprint.

## Do's and Don'ts

### Do:
- **Do** close every major headline with the 48px by 8px amber beam.
- **Do** use ink rules (2px, Site Navy) and numbering to structure process content.
- **Do** put Site Navy text on amber, and Amber Ink for amber-colored text on light surfaces.
- **Do** use mono uppercase for eyebrows, numbers and figures only.
- **Do** keep corners at 4px or less and use hairline borders.
- **Do** use the real brand logo files in `public/brand/` (full logo on light, reversed on navy).
- **Do** draw icons and diagrams as 2px, square-capped, mitered line work, and keep real site photography uncropped by effects.
- **Do** keep a visible 2px focus outline and 44px minimum control height.
- **Do** label illustrative data as a sample.

### Don't:
- **Don't** use amber as a large fill, a gradient, or on more than one or two marks per view.
- **Don't** add pills, large radii, glassmorphism or ambient drop shadows.
- **Don't** use status colors (green, red) as decoration.
- **Don't** replace ruled lists with identical bordered icon cards.
- **Don't** set body copy or headings in the mono face.
- **Don't** invent testimonials, client logos or project figures; use real evidence only.
- **Don't** spread the blueprint grid across other sections; it belongs to the principle band.
