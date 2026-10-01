---
name: MQC Project Management
description: A precise, sober blueprint-room system for construction project management, navy ground with a single amber marker.
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
  display-xl:
    fontFamily: "Archivo, sans-serif"
    fontSize: "64px"
    fontWeight: 800
    lineHeight: "68px"
    letterSpacing: "-0.02em"
  display-l:
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
  body-l:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "28px"
  body:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "24px"
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
  4xl: "96px"
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
  button-secondary:
    backgroundColor: "{colors.blueprint}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    height: "44px"
    padding: "0 24px"
  button-secondary-hover:
    backgroundColor: "{colors.site-navy}"
  button-inverse:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    height: "44px"
    padding: "0 24px"
  button-inverse-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.site-navy}"
  field-control:
    backgroundColor: "{colors.white}"
    textColor: "{colors.site-navy}"
    rounded: "{rounded.md}"
    height: "44px"
    padding: "0 12px"
---

# Design System: MQC Project Management

## Overview

**Creative North Star: "The Blueprint Room"**

The site reads like a drawing table in a project office: a deep navy ground, a faint construction grid, ruled lines, numbered phases and mono labels, with one amber marker to say "this is the thing". The mood is precise, sober and accountable. It is meant to reassure a developer weighing a major capital commitment that cost and schedule are under control, so every element looks measured against a line.

Density is moderate and structured. Content sits on a 1200px container with generous section padding, and information is organised by rules and numbering rather than boxes and shadows. Expression is spent in two places only: the heavy Archivo display type, and the amber beam that closes every headline.

The product is light-first for content pages and navy-first for the hero, header, call-to-action band and footer. There is no dark theme: the site is light-only and ignores the system color scheme.

**Key Characteristics:**
- Navy ground with a blueprint grid overlay in the hero (32px cells, 6% white lines).
- One accent. Amber marks the primary action, the beam, the current phase and the active nav item.
- Square geometry: 2px and 4px corners, hairline borders, 2px structural rules.
- Numbered, ruled lists (`01`, `02`) instead of cards for process content.
- Mono uppercase eyebrow labels as the technical-drawing voice.

## Colors

A restrained navy and concrete palette with a single safety-amber accent. Neutrals are slightly warm, so the paper surface feels like drawing stock rather than screen white.

### Primary
- **Site Navy** (#0f2236): Primary ink on light surfaces and the inverse ground for the header, hero, CTA band and footer.
- **Blueprint** (#1d3a5c): The brand blue. Secondary buttons, planned and completed phase bars, and the placeholder media ground.

### Secondary
- **Safety Amber** (#f2a900): The only accent. Primary buttons, the 8px beam, the current phase, active nav underline, eyebrow on dark. Never used as large background fill.
- **Amber Ink** (#8a5a00): Amber made readable on light surfaces: button hover fill, at-risk text, accent text. Amber tint (#fdf1d6) is its quiet background.

### Neutral
- **Paper** (#f5f4f0): Default page surface.
- **White** (#ffffff): Raised surfaces, inputs and cards.
- **Concrete** (#ebe9e3): Sunken surfaces, track backgrounds, disabled fills.
- **Steel** (#4a5866) and **Ink Muted** (#55606b): Secondary text. Ink Muted is the text token; keep it for lead copy and summaries.
- **Line** (#d6d3ca) and **Line Strong** (#7d8389): Hairline dividers, and control borders where contrast must meet 3:1.
- **Brand Tint** (#e3eaf2): Hover wash for outline buttons and the planned badge.

### Status
- **Success** (#1e6b45, tint #e2f1e8), **Danger** (#b42318, tint #fbe7e4), **Focus** (#1f6fd1). Status colors are reserved for state (on-track, delayed, errors, focus ring), never decoration.

### Named Rules
**The One Marker Rule.** Amber is the single accent and appears in small, deliberate quantities: a button, a beam, a bar, an underline. If amber covers more than a thin strip or a button, it has stopped being a marker.

**The Ink-on-Amber Rule.** Text on amber is always Site Navy. White on amber fails contrast; amber text on light surfaces uses Amber Ink.

## Typography

**Display Font:** Archivo (weights 600, 700, 800)
**Body Font:** IBM Plex Sans (400, 500, 600, with italic)
**Label/Mono Font:** IBM Plex Mono (400, 500)

**Character:** Archivo is wide, heavy and engineered; Plex Sans is neutral and highly legible; Plex Mono supplies the drawing-annotation voice. Together they feel like a technical document, not a brochure.

### Hierarchy
- **Display XL** (800, 64px, 68px line-height, -0.02em): Hero headline only. Drops to 40/44px on mobile.
- **Display L** (800, 48px, 52px, -0.015em): Section titles via `SectionHeading`. Drops to 36/40px below 760px.
- **Heading 1/2/3** (700/700/600, 36/28/22px): Sub-structure and phase names. Heading 1 drops to 30/36px on mobile.
- **Body L** (400, 18px, 28px): Lead paragraphs under headings.
- **Body** (400, 16px, 24px): Default copy. Hold line length to the 720px text measure.
- **Body S** (400, 14px, 20px): Footer, field messages, nav-adjacent text.
- **Label** (Plex Mono 500, 12px, 16px, 0.12em, uppercase): Eyebrows and phase numbers.

### Named Rules
**The Annotation Rule.** Mono uppercase is for labels, numbers and data only (eyebrows, `01`, figures). Never set sentences or headings in mono.

**The Heavy Headline Rule.** Archivo runs at 700 or 800 for headings. Light weights lose the engineered feel.

## Layout

A single 1200px container (`--container-max`) with 24px side padding (16px on mobile). Prose is capped at a 720px text measure. Vertical rhythm uses a 4px base scale: 4, 8, 12, 16, 24, 32, 48, 64, 96. Sections pad 48px top and bottom on mobile and 64px from 761px up; the hero pads 96px.

The hero is a 7/5 split grid aligned to the bottom edge, collapsing to one column at 760px. Process content (the six phases) is a ruled grid: one column, two from `sm`, three from `lg`, with 24px column and 40px row gaps. The header is 72px (64px mobile), and below 760px the nav collapses into a `details` menu panel.

Pages follow one rhythm: navy hero or heading block, light content section, navy CTA band, navy footer.

## Elevation & Depth

Flat by default. Depth is conveyed by tonal layering (paper, white, concrete) and by rules, not by shadows.

### Shadow Vocabulary
- **Hairline lift** (`box-shadow: 0 1px 2px rgba(15, 34, 54, 0.08)`): Card hover only.
- **Panel** (`box-shadow: 0 8px 24px rgba(15, 34, 54, 0.14)`): The mobile menu panel, the only floating surface.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. A shadow is a response to state or a floating layer, never ambient decoration.

**The Rule-Not-Box Rule.** Separate content with a 2px ink rule or a 1px line before reaching for a bordered, shadowed container.

## Shapes

Square and exact. Corners are 4px on buttons, fields and cards, 2px on badges and progress tracks, and 0 elsewhere. There are no pills or large radii. Strokes come in three weights: 1px hairline for borders, 2px rule for structural dividers and focus outlines, and 8px beam for the amber signature and phase bars. The 48px by 8px beam is the recurring silhouette.

## Components

All components are flat, rectangular and state-clear.

### Buttons
- **Shape:** 4px corners, 44px high (52px at `lg`), 24px side padding (32px at `lg`), 600 weight Plex Sans.
- **Primary:** Amber fill, Site Navy text. Hover fills Amber Ink with white text.
- **Secondary:** Blueprint fill, white text. Hover to Site Navy.
- **Outline:** Transparent, Blueprint text and Line Strong border; hover adds Brand Tint and a Blueprint border.
- **Inverse:** Transparent with white text and border on navy; hover inverts to white fill and navy text.
- **Disabled:** Concrete fill, muted text, not-allowed cursor. Transitions are 120ms on color only.

### Inputs / Fields
- **Style:** White fill, 1px Line Strong border, 4px corners, 44px high, 12px side padding. Textarea minimum 112px, vertically resizable.
- **Focus:** 2px Focus-blue outline with 2px offset, applied globally to links, buttons and controls.
- **Error:** 2px Danger border and a Danger message below in 500 weight, linked with `aria-describedby`. Label is 14px 600 above the control.

### Navigation
- **Style:** On a navy header, 15px Plex Sans 500 links with a 2px transparent bottom border. Hover shows a Line Strong underline. Active page shows an Amber underline and 600 weight. The primary CTA button sits at the right.
- **Mobile:** Below 760px links and CTA collapse into a `Menu` summary that opens a full-width navy panel with the Panel shadow.

### Phase list (signature)
A ruled, numbered list. Each item has a 2px Site Navy top rule, a mono `01` to `06` eyebrow, a Heading 3 name and a muted summary. This is the system's main way of showing process and rigour. It is also the model for other sequential content.

### Section heading (signature)
Mono eyebrow, Display L title, the 48px by 8px amber beam, then a Body L muted lead, left aligned within a 720px measure. A centered variant exists but is unused.

### Phase tracker and progress
Phase tracker: 8px bars, Line when planned, Blueprint when done, Amber when current. Progress bars use a 8px Concrete track with an Amber fill. These are defined in CSS and not yet used on a page.

### Status badges
2px corners, 12px 600 text on a tint: on-track and complete in Success, at-risk in Amber, delayed in Danger, planned in Blueprint. Defined, not yet used.

### Project card
White surface, 1px Line border, 4px corners, 16:9 media on a Blueprint grid placeholder, 24px body padding, hairline lift on hover. Defined, not yet used.

## Do's and Don'ts

### Do:
- **Do** close every major headline with the 48px by 8px amber beam.
- **Do** use ink rules (2px, Site Navy) and numbering to structure process content.
- **Do** put Site Navy text on amber, and Amber Ink for amber-colored text on light surfaces.
- **Do** use mono uppercase for eyebrows, numbers and figures only.
- **Do** keep corners at 4px or less and use hairline borders.
- **Do** use the real brand logo (`public/brand/logo-reversed.svg`) on navy grounds.
- **Do** keep a visible 2px focus outline and 44px minimum control height.

### Don't:
- **Don't** use amber as a large fill, a gradient, or on more than one or two marks per view.
- **Don't** add pills, large radii, glassmorphism or ambient drop shadows.
- **Don't** use status colors (green, red) as decoration.
- **Don't** replace ruled lists with identical bordered icon cards.
- **Don't** set body copy or headings in the mono face.
- **Don't** invent testimonials, client logos or project figures in this system's components; use real evidence only.
