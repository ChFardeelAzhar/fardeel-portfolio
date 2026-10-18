# Design Tokens Specification

Reverse-engineered design tokens extracted directly from computed styles, stylesheets (`main.css`, `app.css`), HTML attributes, and runtime inspection of [https://sohaibhussain.dev/](https://sohaibhussain.dev/).

---

## 1. Typography System

### 1.1 Font Family
- **Primary Typeface**: `Switzer` (Variable Font)
  - Asset: `Switzer_Variable-s.p.0rb.ypz49h_sv.woff2`
  - Font-display: `swap`
  - Weights supported: `300`, `400`, `500`, `600`, `700`
  - CSS Declaration:
    ```css
    @font-face {
      font-family: 'switzer';
      src: url('../media/Switzer_Variable-s.p.0rb.ypz49h_sv.woff2') format('woff2');
      font-display: swap;
      font-weight: 300 700;
      font-style: normal;
    }
    ```
  - **Fallback font metric overrides** (prevents Layout Shift / CLS):
    ```css
    @font-face {
      font-family: 'switzer Fallback';
      src: local(Arial);
      ascent-override: 96.67%;
      descent-override: 24.66%;
      line-gap-override: 8.88%;
      size-adjust: 101.38%;
    }
    ```
- **Monospace / Code / KaTeX**:
  - `KaTeX_Main`, `KaTeX_Math`, `KaTeX_AMS` for math/formulas in Dev Notes.
  - Standard monospace font stack: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`.

### 1.2 Font Hierarchy & Scale

| Semantic Role | Classes / Size | Line Height | Tracking | Weight | Color | Observed Usage |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display H1** | `text-3xl xs:text-4xl sm:text-5xl lg:text-6xl` (30px → 36px → 48px → 60px) | `leading-[1.05]` (31.5px - 63px) | `tracking-tight` (-0.025em) | `font-medium` (500) | `text-slate-900` | Hero name |
| **Hero Sub-Headline** | `text-3xl xs:text-4xl sm:text-5xl lg:text-6xl` | `leading-[1.05]` | `tracking-tight` | `font-medium` (500) | `text-slate-700` | Hero title ("Software Engineer") |
| **Section H2 (Major)** | `text-3xl sm:text-4xl md:text-5xl lg:text-6xl` | `leading-9 md:leading-12 lg:leading-15` | `tracking-tighter` (-0.05em) | `font-medium` to `font-bold` | `text-slate-900` / `text-white` (mix-blend) | "Latest Projects", "Services & Specializations" |
| **Section H3** | `text-2xl sm:text-3xl font-bold` | `leading-tight` | `tracking-tight` | `font-bold` (700) | `text-slate-900` | "About Sohaib Hussain Shah", "Work History" |
| **Card H4 / Service Title** | `text-base md:text-xl` (16px / 20px) | `leading-snug` | normal | `font-bold` (700) | `text-slate-900` | Service card headings |
| **Section Kicker / Overline** | `text-xs` (12px) | `leading-none` | `tracking-[0.2em]` / `tracking-[0.15em]` | `font-bold` (700), `uppercase` | `text-slate-400` | "01 — WHAT I DO", "CAREER TIMELINE", "PRIMARY EXPERTISE" |
| **Lead Paragraph** | `text-[13px] md:text-base` (13px / 16px) | `leading-snug md:leading-relaxed` | `tracking-tight` | `font-normal` (400) / bold highlights (600) | `text-slate-700` | Hero intro bio |
| **Body Paragraph** | `text-sm sm:text-base` (14px / 16px) | `leading-relaxed` (1.625) | normal | `font-normal` (400) | `text-slate-500` to `text-slate-600` | Descriptions, About text, Experience bodies |
| **Feature / Checklist Item** | `text-xs` (12px) | `leading-relaxed` | normal | `font-normal` (400) | `text-slate-500` | Service bullets, card features |
| **Pill / Button Label** | `text-[10px] sm:text-xs md:text-sm` (10px - 14px) | `leading-none` | `tracking-tight` | `font-medium` (500) / `font-semibold` (600) | `text-white` or `text-slate-900` | CTAs, navbar links, badges |
| **Footer Brand Watermark** | `text-5xl sm:text-7xl md:text-9xl` (96px - 144px) | `leading-none` | `tracking-tight` | `font-black` (900) | `text-slate-100` / `text-slate-200/50` | "BEYOND LIMITS" watermark |

---

## 2. Color Palette & Semantic Color System

### 2.1 Core Neutral (Tailwind Slate / Zinc)

```css
:root {
  /* Backgrounds */
  --bg-page: #ffffff;
  --bg-page-alt: #f8fafc;        /* slate-50 */
  --bg-surface: #ffffff;
  --bg-surface-elevated: rgba(255, 255, 255, 0.80); /* 80% opacity for frosted glass */
  --bg-surface-subtle: #f1f5f9;   /* slate-100 */
  --bg-dark-pill: #020617;        /* slate-950 / black */

  /* Text & Foreground */
  --text-primary: #0f172a;        /* slate-900 */
  --text-secondary: #334155;      /* slate-700 */
  --text-body: #64748b;           /* slate-500 */
  --text-muted: #94a3b8;          /* slate-400 */
  --text-inverse: #ffffff;

  /* Borders & Dividers */
  --border-subtle: #f1f5f9;       /* slate-100 */
  --border-default: #e2e8f0;      /* slate-200 / gray-200 */
  --border-gutter: #e5e7eb;       /* gray-200 (vertical container bounds) */
}
```

### 2.2 Semantic & Accent Colors

```css
:root {
  /* Status / Live */
  --status-online: #22c55e;        /* green-500 (pulsing beacon) */
  --status-online-ring: #4ade80;   /* green-400 */
  --status-check: #10b981;         /* emerald-500 */

  /* Gradient Hover System */
  --gradient: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  --gradient-alt: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);

  /* Brand Accents for Social / Project Badges */
  --brand-linkedin: #0a66c2;
  --brand-instagram: #e1306c;
  --brand-facebook: #1877f2;
  --brand-email: #ea4335;
  --brand-github: #000000;
  --brand-upwork: #14a800;

  /* Project Theme Backgrounds (Behind Mockups) */
  --project-teal: radial-gradient(circle at center, #0d9488 0%, #042f2e 100%);
  --project-green: radial-gradient(circle at center, #16a34a 0%, #052e16 100%);
  --project-orange: radial-gradient(circle at center, #ea580c 0%, #431407 100%);
  --project-blue: radial-gradient(circle at center, #2563eb 0%, #172554 100%);
}
```

---

## 3. Spacing & Container Geometry

### 3.1 Container System
- **Main Max Width**: `max-w-6xl` = `72rem` = `1152px`.
- **Gutter Boundaries**: The page has two fixed vertical grid border lines running down both sides of `max-w-6xl`:
  ```html
  <div class="custom:mx-auto xxs:border-x pointer-events-none absolute inset-0 z-0 mx-3.5 max-w-6xl border-gray-200 md:mx-5 lg:mx-8"></div>
  ```
  - Mobile margin: `mx-3.5` (14px)
  - Tablet margin: `md:mx-5` (20px)
  - Desktop margin: `lg:mx-8` (32px)
  - Wide screen margin: `custom:mx-auto` (centered at ≥ `1208px` / `75.5rem`)

### 3.2 Responsive Breakpoints
- `xxs`: `24rem` (384px)
- `xs`: `30rem` (480px)
- `sm`: `40rem` (640px)
- `md`: `48rem` (768px)
- `lg`: `64rem` (1024px)
- `custom`: `75.5rem` (1208px)
- `xl`: `80rem` (1280px)
- `2xl`: `96rem` (1536px)

### 3.3 Vertical Rhythm & Spacing Tokens
- **Hero Top Padding**: `pt-20 sm:pt-28 md:pt-32` (80px → 112px → 128px)
- **Hero Bottom Padding**: `pb-12 md:pb-24` (48px → 96px)
- **Section Padding**: `py-12` (48px) for compact sections, `py-20` (80px) for standard sections.
- **Card Padding**: `p-6 md:p-8` (24px → 32px)
- **Grid Gaps**:
  - `gap-1` (4px): Navigation links
  - `gap-2` (8px): Badges, social icons
  - `gap-3` (12px): CTA buttons, card subheadings
  - `gap-4` (16px): Project card grid, form inputs
  - `gap-6` (24px): Hero headline stacks, service cards
  - `gap-8` (32px): Desktop column spacing
  - `gap-12` (48px): Major section internal separations

---

## 4. Radii & Border Specifications

- **`rounded-full`**: `9999px` (CSS renders as `border-radius: 3.40282e38px`). Used for:
  - Navigation floating pill
  - Location tag
  - CTA buttons ("See My GitHub", "Download Resume")
  - Social media icon circles
  - Expertise pills (`px-3.5 py-1.5`)
  - Floating resume button (`fixed right-5 bottom-20`)
- **`rounded-3xl`**: `24px` (`1.5rem`). Used for:
  - Service & Specialization cards
  - Timeline cards
  - Navigation container wrap
- **`rounded-2xl`**: `16px` (`1rem`). Used for:
  - Project cards (12/10 aspect ratio preview containers)
  - Service card icon containers (`h-10 w-10 md:h-12 md:w-12 rounded-2xl bg-slate-950`)
- **`rounded-xl`**: `12px` (`0.75rem`).
- **`rounded-lg`**: `8px` (`0.5rem`). Used for hover pills inside navigation.

---

## 5. Shadows & Elevation Tokens

```css
:root {
  /* Standard Tailwind Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  /* Service Card Hover Elevation */
  --shadow-card-hover: 0 20px 40px -15px rgba(0, 0, 0, 0.05);

  /* Complex Layered Button Shadow */
  --button-shadow: 
    0px 2px 2px -1.5px rgba(0, 0, 0, 0.32),
    0px 4.4px 4.4px -2.25px rgba(0, 0, 0, 0.30),
    0px 9.8px 9.8px -3px rgba(0, 0, 0, 0.25),
    0px 25px 25px -3.75px rgba(0, 0, 0, 0.11),
    0px -5px 5px -3.75px rgba(0, 0, 0, 0.11);
}
```

---

## 6. Glassmorphism & Atmospheric Overlays

### 6.1 Noise Texture Overlay
- **Asset**: `/assets/framer-noise.png` (256x256 monochrome 1-bit PNG).
- **Global Container Layer**:
  ```css
  .noise-overlay {
    background-image: url('/assets/framer-noise.png');
    background-size: 128px;
    background-repeat: repeat;
    opacity: 0.06; /* 6% subtle analog warmth */
    pointer-events: none;
  }
  ```
- **Button Inner Noise**:
  - `background-size: 164px; opacity: 0.12;` inside `.bubble-hover-cta`.

### 6.2 12-Layer Progressive Backdrop Blur
Observed at the bottom viewport boundary (`.blur-overlay`, height 60px):
- Consists of 12 stacked absolute divs with increasing blur radii:
  - Level 1: `blur(0.04px) saturate(140%)` with mask gradient `0% -> 100%`
  - Level 4: `blur(0.32px) saturate(140%)`
  - Level 8: `blur(4px) saturate(140%)`
  - Level 12: `blur(12px) saturate(140%)`
- Bottom accent highlight line:
  ```css
  height: 1.5px;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 -1px 10px rgba(255, 255, 255, 0.2);
  ```
- Result: Perfectly smooth diffusion of scrolled content under the browser chrome without harsh clipping.

---

## 7. Iconography System
- **Implementation**: Inline SVG `<use xlink:href="/custom-icons.svg#<name>">` referencing an optimized SVG sprite.
- **Sizes**:
  - Standard navigation / service icons: `24x24` or `20x20`
  - Social pill icons: `16x16` (mobile) → `18x18` (desktop)
  - Small action arrows: `13x13` or `15x15`
  - Status beacon: `8x8` (`h-2 w-2`)
