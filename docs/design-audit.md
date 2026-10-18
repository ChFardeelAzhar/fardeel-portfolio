# Comprehensive Design & Behavior Audit

Section-by-section reverse-engineering analysis of the reference benchmark: [https://sohaibhussain.dev/](https://sohaibhussain.dev/).

---

## 1. Executive Summary & Stack Foundation

The reference portfolio is a modern, high-craft developer portfolio built using:
- **Framework**: **Next.js (App Router)** with **Turbopack** build tooling.
- **Styling**: **Tailwind CSS** with custom data-attribute variants (`md:scrolled-down:*`, `md:scrolled-up:*`, `reveal-false:*`), CSS custom properties, and `@keyframes`.
- **Motion & Physics**: **Framer Motion** (`motion/react`) for scroll-linked animations (`useScroll`, `scrollYProgress`) and velocity springs, combined with GPU-accelerated CSS transforms.
- **Page Transitions**: Native browser **View Transitions API** (`document.startViewTransition`) mapped to router navigation.
- **Typography**: **Switzer** Variable Font (`300-700`) paired with Arial metric-override fallbacks to eliminate Cumulative Layout Shift (CLS).
- **Textures & Atmospherics**: Subtle 1-bit analog noise grain overlay (`/assets/framer-noise.png`) at 6% opacity, paired with a 12-layer progressive backdrop blur at the bottom viewport edge.
- **Design Lineage**: Inspired by the minimalist layout patterns of award-winning designer Austin Serb (`austinserb.com`), adapted for mobile engineers.

---

## 2. Global Canvas & Frame Geometry

### 2.1 The Framing Grid
Unlike conventional full-bleed websites, the reference uses a constrained luxury framing grid:
- **Container**: `max-w-6xl` (`1152px` / `72rem`), horizontally centered on screens ≥ 1208px (`custom:mx-auto`).
- **Gutter Lines**: Two fixed vertical 1px border lines (`border-gray-200`) run continuously down the left and right margins of the `max-w-6xl` boundary:
  ```html
  <div class="custom:mx-auto xxs:border-x pointer-events-none absolute inset-0 z-0 mx-3.5 max-w-6xl border-gray-200 md:mx-5 lg:mx-8"></div>
  ```
  This creates an architectural blueprint structure that anchors every section cleanly.

### 2.2 Texture Overlay
- An absolute, pointer-events-none layer covers the entire viewport:
  ```html
  <div class="custom:mx-auto xxs:mx-3.5 pointer-events-none absolute inset-0 z-1 max-w-6xl [background-image:url('/assets/framer-noise.png')] bg-size-[128px] bg-repeat opacity-6 md:mx-5 lg:mx-8"></div>
  ```
- Screenshot reference: [framer-noise.png](file:///Users/retailopakistan/Documents/FardeelAgenticProjects/fardeel-portfolio/docs/screenshots/framer-noise.png)

---

## 3. Section-by-Section Design & Behavior Audit

### 3.1 Adaptive Floating Navbar
- **Visuals**:
  - Centered floating glass pill: `fixed top-1 left-1/2 -translate-x-1/2 z-10`.
  - Background: `bg-white/80 backdrop-blur-md border border-gray-200 shadow-md rounded-3xl`.
  - Inner padding: `px-4 py-3 md:gap-6 md:py-2.5`.
- **Desktop Behavior (`≥ 768px`)**:
  - **At Top (`data-scrolled="up"`)**: Compact pill displaying only the logo mark, the engineer's name, and an animated 3-dot bouncy icon (`.dot-menu-icon`).
  - **On Scroll Down (`data-scrolled="down"`)**: The 3 dots fade away, and the pill smoothly expands horizontally (`duration-300 ease-in-out max-w-[600px]`) to reveal 7 navigation links: *Projects, Experience, About, Resume, Dev Notes, Blog, Contact*.
  - **Links Hover State**: Rounded pills with `.bubble-hover` class that trigger liquid multi-color gradient slide-in.
- **Mobile Behavior (`< 768px`)**:
  - The name is truncated to the first name only (`<span class="sm:hidden">Sohaib</span>`).
  - Clicking the 3-dot toggle button expands the pill vertically into a full navigation card (`data-mobile-menu="open"`).
  - The 3-dot icon morphs into an "X" close icon.
  - Links slide and fade in with staggered index delays (`calc(var(--index) * 0.1s + 0.2s)`).
- **Screenshot References**:
  - [Desktop Hero Navbar (Compact)](file:///Users/retailopakistan/Documents/FardeelAgenticProjects/fardeel-portfolio/docs/screenshots/desktop-hero.png)
  - [Desktop Scrolled Navbar (Expanded)](file:///Users/retailopakistan/Documents/FardeelAgenticProjects/fardeel-portfolio/docs/screenshots/desktop-scrolled-navbar.png)
  - [Mobile Navbar (Compact)](file:///Users/retailopakistan/Documents/FardeelAgenticProjects/fardeel-portfolio/docs/screenshots/mobile-hero.png)
  - [Mobile Menu Open (Expanded)](file:///Users/retailopakistan/Documents/FardeelAgenticProjects/fardeel-portfolio/docs/screenshots/mobile-menu-open.png)

---

### 3.2 Hero Section

- **Layout Structure**:
  - Two-column grid / flex split: Left column (content, max-w-lg) vs Right column (project card stack).
  - Container padding: `pt-20 sm:pt-28 md:pt-32 pb-12 md:pb-24 px-5.5 md:px-11`.
- **Left Column Components**:
  1. **Location Beacon Tag**:
     - Pill: `rounded-full border border-gray-100 bg-white px-2.5 py-1.5 shadow-lg`.
     - Live indicator: Green pulsating beacon (`animate-ping bg-green-500` behind solid `bg-green-500` dot) + text `"Okara, Pakistan"` (or target location).
  2. **Display Headline**:
     - `H1`: `text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05]`.
     - Name in `text-slate-900`, Role in `text-slate-700`.
  3. **Introduction Bio**:
     - Text: `max-w-xs md:max-w-sm text-[13px] md:text-base leading-snug md:leading-relaxed text-slate-700`.
     - Key keywords emphasized in `font-semibold text-slate-900`.
  4. **Primary CTA Buttons**:
     - Primary Button: Pill with `bg-black text-white shadow-md`, containing circular profile avatar ringed in white (`ring-2 ring-white/75`), noise background, and text `"See My GitHub"`.
     - Secondary Button: Pill with `border border-zinc-200 bg-white text-zinc-900 shadow-sm`, containing a file download icon inside a circular gray badge + `"Download Resume"`.
  5. **Social Icon Buttons Row**:
     - 4 circular pill buttons: `h-9 w-9 md:h-11 md:w-11 rounded-full border border-gray-200 bg-white text-slate-600 shadow-sm`.
     - On hover: lifts `hover:-translate-y-1 hover:shadow-md`, background transitions into official brand color (LinkedIn `#0a66c2`, Instagram `#e1306c`, Facebook `#1877f2`, Email `#ea4335`), and SVG icon fills white.
- **Right Column (Hero Project Stack)**:
  - 4 cards visually fanned out in a physical stack at angles (`-2deg`, `9deg`, `5deg`, `12deg`).
  - Target anchor: `<span data-stack-target-id="true">` tells the scroll animation where the cards originate.
  - Subtle radial glow behind the cards: `bg-radial from-indigo-100 via-transparent to-transparent blur-3xl`.

---

### 3.3 Latest Projects Section

- **Headline with Exclusion Blend**:
  - `H2` styled with `mix-blend-exclusion text-white tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl`.
  - Letters entrance: Letter-by-letter staggered slide-up from `translateY(20px)` and `opacity: 0`.
- **2x2 Projects Grid**:
  - Grid: `grid-cols-1 md:grid-cols-2 gap-4`.
  - Cards: `aspect-[12/10] overflow-hidden rounded-2xl relative`.
  - Graphic Style: 3 high-resolution phone mockup cutouts on colored gradient backdrops (teal, green, orange, blue).
  - Hover Interaction: Image smoothly scales up `group-hover:scale-105 duration-400`.
  - Action Badge: Bottom-right glass pill with text `"View Project"`.
- **Section Footer Link**:
  - Center-aligned link: `"View More Projects"`.
  - Right arrow icon wiggles on hover (`group-hover:animate-wiggle-right`).
- **Screenshot References**:
  - [Desktop Projects Grid](file:///Users/retailopakistan/Documents/FardeelAgenticProjects/fardeel-portfolio/docs/screenshots/desktop-scrolled-navbar.png)

---

### 3.4 Services & Specializations Section

- **Header**:
  - Section Kicker: `01 — What I Do` (`text-xs font-bold uppercase tracking-[0.2em] text-slate-400`).
  - `H2`: `Services & Specializations` (`text-4xl md:text-5xl lg:text-6xl tracking-tighter text-slate-900`).
  - Subtitle: `Crafting premium mobile architectures, high-performance web systems, and scaling engineering execution.` (`text-slate-500 text-base md:text-lg`).
- **4-Column Card Grid**:
  - Responsive layout: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`.
  - Card Styling: `rounded-3xl border border-slate-100 bg-white p-6 md:p-8 shadow-sm transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]`.
  - Card Icon: `h-10 w-10 md:h-12 md:w-12 rounded-2xl bg-slate-950 p-2 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`.
  - Content: Title (`font-bold text-slate-900 md:text-xl`), subtitle summary, divider line (`border-t border-slate-50 pt-4`).
  - Checklist: 5 detailed capability items per card, each prefixed with an emerald checkmark: `<span class="font-semibold text-emerald-500">✓</span>`.

---

### 3.5 Who I Am / Expertise Teaser

- **Header**: `02 — Who I Am` / `About Sohaib Hussain Shah`.
- **Layout**: 2 columns (`grid grid-cols-1 lg:grid-cols-2 gap-12`).
  - Left column: Narrative about early-stage ownership, lead responsibility, and architectural discipline. Followed by link: `"Learn More About My Story & Education ↗"`.
  - Right column: `Primary Expertise` overline + flex-wrap pill cloud (`rounded-full border border-slate-200/60 bg-slate-50 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-slate-700`).

---

### 3.6 Career Timeline / Experience Page (`/experience`)

- **Structure**:
  - Left column (`Work History` split headline): `Work` in bold dark slate (`text-slate-900`), `History` in muted slate (`text-slate-400`).
  - Central timeline axis: Subtle vertical line with node markers.
  - Right column: Rich experience cards (`rounded-3xl border border-slate-100 bg-white p-6 md:p-8`).
  - Meta header: Company logo square, Role title, Company name, employment mode, location.
  - Date Pill: Right-aligned `JAN 2026 — PRESENT (7 mos)` in uppercase small caps.
  - Description: Narrative paragraph + `KEY RESPONSIBILITIES` uppercase overline + bulleted impact list.
- **Screenshot Reference**: [Desktop Experience Page](file:///Users/retailopakistan/Documents/FardeelAgenticProjects/fardeel-portfolio/docs/screenshots/desktop-experience.png)

---

### 3.7 Project Detail Case Study (`/projects/[slug]`)

- **Header**:
  - Breadcrumb tags: `FAITH · EDUCATION · REACT NATIVE · LIVE` in small uppercase bold.
  - Large display title: `EasyQuran AI`.
  - Comprehensive problem/solution summary.
  - Platform Badges Row: App Store, Google Play, AppGallery, and `"Visit site ↗"`.
- **Media Gallery**:
  - Section overline: `SCREENSHOTS (5)`.
  - 2-column grid of device mockup frames on dark ambient gradient backdrops.
- **Screenshot Reference**: [Project Detail Page](file:///Users/retailopakistan/Documents/FardeelAgenticProjects/fardeel-portfolio/docs/screenshots/desktop-projects_easyquran-ai.png)

---

### 3.8 Contact Page (`/contact`)

- **Layout**: Split 2-column grid:
  - Left column:
    - Split headline: `Let's` (bold dark slate) `Talk` (medium muted slate).
    - Subtitle: Response time SLA (`"I typically respond within 24 hours. Email is fastest for project inquiries."`).
    - Availability Badge: Pulsing green beacon + `"Available for new projects"`.
  - Right column:
    - Clean stacked list with thin dividers:
      1. Email row: Mail icon square, uppercase label `EMAIL`, email address, right-side pill button `"Send email ↗"`.
      2. LinkedIn row: LinkedIn icon square, `LINKEDIN`, profile handle, pill button `"Connect ↗"`.
      3. GitHub row: GitHub icon square, `GITHUB`, handle, pill button `"Follow ↗"`.
      4. Upwork row: Upwork icon square, `UPWORK`, `"Hire via Upwork"`, pill button `"View profile ↗"`.
- **Screenshot Reference**: [Desktop Contact Page](file:///Users/retailopakistan/Documents/FardeelAgenticProjects/fardeel-portfolio/docs/screenshots/desktop-contact.png)

---

### 3.9 Footer & Watermark

- **Action Verb Cycler**:
  - Text: `"Let's [build / create / design / make] incredible work together."`
  - Rotates dynamically via `@keyframes wordCycle`.
- **Links & Attribution**:
  - Email link and social channels.
  - Site map links.
  - Attribution: `"Inspired by Austin Serb | © 2026 Sohaib Hussain Shah"`.
- **Massive Watermark**:
  - Giant watermark at bottom: `"BEYOND LIMITS"` in `text-slate-100` / `text-slate-200/50` extra-bold tracking-tight text across the container width.

---

### 3.10 Atmospheric Overlays (Bottom Blur & Floating Resume)

1. **Floating Resume Pill**:
   - `fixed right-5 bottom-20 z-[110] rounded-full border border-gray-200 bg-slate-900 px-4 py-3 text-xs font-semibold text-white shadow-lg`.
   - Contains a document icon, `"View one-page resume"`, and an arrow that translates on hover (`group-hover:translate-x-0.5`).
2. **12-Layer Progressive Glassmorphic Blur**:
   - Fixed at bottom: `fixed inset-x-0 bottom-0 z-[100] h-[60px] pointer-events-none`.
   - 12 sequential backdrop-blur divs (`0.04px` to `12px`) with mask gradients to create an optical falloff.
