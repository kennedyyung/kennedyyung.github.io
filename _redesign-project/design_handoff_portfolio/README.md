# Handoff: Kennedy Yung — Portfolio Redesign

## Overview
A single-page personal portfolio for Kennedy Yung — a fourth-year UBC mathematics student and software developer based in Vancouver. The page introduces Kennedy, showcases selected projects, walks through her work history, highlights her education, and gives visitors a way to contact her.

## About the Design Files
The file in this bundle (`Kennedy Portfolio.dc.html`) is a **design reference created in HTML** — a prototype showing the intended look, layout, and copy. It is not production code to copy directly.

The task is to **recreate this design in the target codebase's existing environment** (React, Next.js, Vue, plain HTML/CSS, etc.), using that project's established patterns and libraries. If no environment exists yet, pick a stack that suits a single-page personal site (Next.js + TypeScript + Tailwind is a strong default) and build there.

## Fidelity
**High-fidelity.** Colors, typography, spacing, and structure are final. Recreate the UI pixel-close using the codebase's existing libraries. The only placeholder is the portrait image (currently a striped diagonal-pattern block labeled `[portrait]`) — swap in the real headshot Kennedy already uses on her current site.

## Screens / Views

### Single scrolling page
One long page with these sections in order. All sections live inside a **rounded content card** (`border-radius: 24px`, soft shadow) on a light cool-gray page background (`#eef1f5`).

#### 1. Top bar (nav)
- Height: ~64px. Padding: `20px 40px`. Bottom border: `1px solid rgba(15,26,43,0.08)`.
- Left: 10×10 cobalt dot (`#2d5aa8`) + "Kennedy Yung" (uppercase, mono, 12px, weight 600) + subtle tagline "— math & software, UBC '26" in muted blue-gray (`#97a4b8`).
- Right: nav links (uppercase mono 12px, color `#5a6a80`): Work · Experience · About · Contact ↗. 24px gap.

#### 2. Hero
- Full-width panel with a vertical gradient: `linear-gradient(180deg, #b8d0ea 0%, #92b5da 100%)`.
- Padding: `80px 60px 64px`. Contains two decorative circles: a solid cobalt (`#2d5aa8`, 180×180) top-right, and a dark navy (`#0f1a2b` at 12% opacity, 260×260) bleeding off bottom-left.
- Two-column grid `1.5fr / 1fr`, `gap: 48px`, aligned to the bottom.
  - **Left column:**
    - Eyebrow: mono 11px uppercase letter-spacing 0.15em, color `#2a4670` — "— Portfolio · Vol. 04 · Spring 2026".
    - Headline: Fraunces 500, 96px, line-height 0.95, tracking -0.035em, color `#0f1a2b`: **"Hi, I'm _Kennedy_."** — "Kennedy" is italic Fraunces in cobalt `#2d5aa8`.
    - Sub-copy: Fraunces 24px, line-height 1.45, color `#2a3a56`, max-width 520px: "Fourth-year mathematics student at UBC, building thoughtful software from Vancouver."
    - Two chips (mono 12px):
      - Primary: `#0f1a2b` bg, `#b8d0ea` text, "↗ See recent work".
      - Ghost: translucent white bg, `#0f1a2b` text, "Download resume".
  - **Right column:** 4:5 aspect placeholder for the portrait, `border-radius: 12px`.

#### 3. Tech marquee strip
- Navy bar (`#0f1a2b`) with soft-blue text (`#b8d0ea`), padding `22px 60px`, mono 13px.
- Horizontal list separated by cobalt (`#6a9ad4`) ✦ glyphs: React · Swift · Python · Next.js · Node · SQL · TailwindCSS · SwiftUI · C++ · Figma.

#### 4. Selected work (§ 01)
- Padding `72px 60px 40px`. Header row: section label "§ 01" (mono 11px `#97a4b8`) above the h2 **"Selected _work_"** (Fraunces 44px, "work" italic cobalt). Right side: year range mono 12px.
- Project list — one row per project, 5-column grid `60px 1fr auto auto auto`, gap 24px, `padding: 26px 0`, top border between rows:
  - Index (`01`, `02`…) mono 12px muted.
  - Title (Fraunces 28px 500) + one-line description (14px, `#5a6a80`).
  - Primary tag chip — pill mono 11px, white text, colored bg (see per-project).
  - Date, mono 12px muted.
  - `↗` arrow (Fraunces 24px) in the project's accent color.
- Projects & accents:
  1. **EcoChef** — Sept 2024 — chip `#2d5aa8` — "Recipe app that suggests meals from what's already in your fridge."
  2. **Arc'Quest** — Apr 2024 — chip `#1e3a6b` — "Companion app for the Grouse Grand Traverse — track trails, log climbs."
  3. **Budget.** — Jan 2024 — chip `#6a9ad4` — "Personal finance tracker with clean monthly rollups and gentle nudges."
  4. **Lens** — Nov 2023 — chip `#4a7ab8` — "A photo-journaling companion for slow weekend days."

Kennedy will likely replace these with her real project list — keep the row shape and only vary the accent color across rows.

#### 5. Experience + Education (§ 02 / § 03)
- Padding `40px 60px`, two-column grid `1.3fr / 1fr`, gap 48px.
- **Left — Where I've _been_** (§ 02, "been" italic cobalt):
  - Rows: 140px date column + role/company column. Top border between rows.
  - Current role date is bold cobalt (`#2d5aa8`, weight 600); past dates are muted (`#97a4b8`).
  - Roles: Jr. Software Developer · Boon Movement (2026 — Now); Information Systems Intern · Engineers & Geoscientists BC (2025); Co-lead · Muscle to Movement (2024 — 2026); Front-end Developer Intern · UBC Faculty of Applied Science (2024); Software Engineer · UBC BEST Design Team (M2M) (2023 — 2024).
- **Right column** — two stacked cards:
  - **Education card**: cobalt (`#2d5aa8`) background, `border-radius: 20px`, padding 32px, cream text (`#eaf1fb`). Decorative translucent white circle top-right. "§ 03 — Education" eyebrow, then "B.Sc. Mathematics" (Fraunces 28px), "University of British Columbia" subtitle, and a bottom mono footer with "Class of 2026" / "Vancouver, BC".
  - **Off-screen card**: light blue (`#eaf1fb`) background, `border-radius: 20px`, padding 28px, 1px inner border. Copy (Fraunces 19px): "When I'm not shipping, I'm on a basketball court, in the gym, or elbow-deep in a batch of cookies."

#### 6. Contact footer (§ 04)
- Navy (`#0f1a2b`), cream text (`#eaf1fb`), padding `56px 60px`, two-column grid `1.5fr / 1fr`.
- Left: eyebrow "§ 04 — Contact" in `#6a9ad4`, then "Say _hi_." (Fraunces 56px, "hi" italic in `#6a9ad4`), then a Fraunces 20px line: "Open to summer 2026 roles and cool side projects. Fastest reply is email."
- Right: stacked link rows, each `padding: 12px 16px`, `background: rgba(255,255,255,0.06)`, `border-radius: 8px`, mono 13px. Links: `kennedy@example.com`, LinkedIn, GitHub, Devpost · Resume. Each has an ↗ in `#6a9ad4` on the right.

## Interactions & Behavior
- **Navigation:** anchor links from the top bar scroll to `#work`, `#experience`, `#about`, `#contact`. Smooth-scroll, ~500ms.
- **Project rows:** entire row is a link to the project (external repo, live demo, or case study). On hover: row background lightens (`rgba(15,26,43,0.03)`), the `↗` arrow translates 4px up-right (transform, 150ms ease).
- **Contact rows:** hover raises background to `rgba(255,255,255,0.1)`.
- **Buttons ("See recent work" / "Download resume"):** hover — slight scale (1.02) and shadow lift, 150ms.
- **Loading / error states:** none needed; static content.
- **Responsive:**
  - ≥ 1024px: layout as designed.
  - 768–1023px: hero grid collapses to a single column (portrait moves below headline); experience/education grid collapses to one column; project rows drop the description on very narrow widths but keep the tag chip.
  - < 768px: reduce hero headline to ~56px; padding drops to `32px 24px`; top-bar nav collapses into a hamburger.

## State Management
Static content site — no runtime state required. If contact info or the project list will be edited often, pull them from a small JSON/MDX file rather than hardcoding in the component tree.

## Design Tokens

### Colors
| Token | Hex | Use |
| --- | --- | --- |
| `bg/page` | `#eef1f5` | Outer page background |
| `bg/card` | `#f5f2ea` | Main content card (warm cream) |
| `bg/hero-top` | `#b8d0ea` | Hero gradient start |
| `bg/hero-bottom` | `#92b5da` | Hero gradient end |
| `bg/dark` | `#0f1a2b` | Navy — marquee, footer, primary button |
| `bg/education` | `#2d5aa8` | Education card, primary accent |
| `bg/soft-blue` | `#eaf1fb` | Off-screen card, footer text |
| `accent/cobalt` | `#2d5aa8` | Primary accent |
| `accent/navy` | `#1e3a6b` | Secondary accent |
| `accent/sky` | `#6a9ad4` | Tertiary accent, ✦, footer arrows |
| `accent/mid-blue` | `#4a7ab8` | Extra accent |
| `text/primary` | `#0f1a2b` | Headlines, dark text |
| `text/body` | `#2a3a56` | Body copy on hero |
| `text/muted` | `#5a6a80` | Descriptions |
| `text/subtle` | `#97a4b8` | Section labels, dates |
| `text/on-dark` | `#eaf1fb` | Text on navy |
| `text/on-dark-muted` | `#b8c5d8` | Muted text on navy |

### Typography
- **Serif display:** Fraunces, weights 400/500. Italic used for emphasized words.
- **Sans body/UI:** Inter, weights 400/500/600/700.
- **Mono / labels:** JetBrains Mono, weights 400/500/600. Section labels use uppercase + letter-spacing 0.15em, size 11px.

Type scale used:
- Hero headline: 96px / 0.95 / -0.035em
- Section h2: 44px / -0.025em (main), 40px (sub), 28px (cards)
- Body large: 24px / 1.45 (hero sub-copy)
- Body: 19–22px / 1.45 (Fraunces) or 13–14px (Inter descriptions)
- Labels: 11–13px mono

### Spacing
- Card outer padding: `60px` horizontal
- Section vertical rhythm: `72px` above major sections, `40px` between sub-sections
- Row padding: `26px 0` (project list), `18px 0` (experience list)

### Radius
- Card: 24px · Cards inside card: 20px · Chips/pills: 999px · Buttons/small chips: 6–8px · Portrait: 12px

### Shadow
- Card shadow: `0 40px 80px -30px rgba(15,26,43,0.25)`

## Assets
- **Portrait** — placeholder in the mock (diagonal-stripe block, aspect 4:5). Use Kennedy's existing headshot from her current site.
- **Social icons** — the current site uses LinkedIn, GitHub, and Devpost glyphs; in this redesign they are rendered as text with an ↗ arrow. Substituting SVG icons from a set like Lucide or Simple Icons is fine — keep them mono-weight and matched to the surrounding type size.
- No custom illustrations, no photography beyond the portrait.

## Project detail page

A second file, `Project Page.dc.html`, shows the layout used when someone clicks into a project from the home page. It uses the same top bar, cream card, and blue accents. Structure (kept intentionally minimal):

1. **Top bar** — same as home.
2. **Header** — "← All work" back link (mono 12px, cobalt), an eyebrow line (mono 11px uppercase) with date and stack ("Sept 2024 · React Native · Python · AWS"), the project title (Fraunces 84px, second word italic cobalt, e.g. **"Eco*Chef*."**), and a navy pill button aligned right ("GitHub ↗").
3. **Hero image** — 16:8 rounded rectangle with the same blue gradient + decorative circles as the home hero. Drop the project's marquee screenshot here.
4. **Overview** — one or two short Fraunces 22px paragraphs on cream, max-width ~780px. Keep it terse; italicize the one phrase worth emphasizing in cobalt.
5. **Next-project footer** — navy strip with "Next: <Project> →" (Fraunces 24px, project name italic sky-blue) on the left and a translucent "All work ↗" pill on the right.

Reuse this template for every project by swapping the title, date/stack eyebrow, hero image, and overview copy.

## Files
- `Kennedy Portfolio.dc.html` — the home/landing design.
- `Project Page.dc.html` — the project detail design (EcoChef as the example).

Open either file directly in a browser to inspect layout. All styling is inline; measurements, colors, and copy in the files are the source of truth.
