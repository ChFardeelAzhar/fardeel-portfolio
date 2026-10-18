# Reference Limitations, Uncertainties & Verification Ledger

A transparent breakdown of direct observations, inferred behaviors, limitations of static/runtime inspection, and faithful reproduction vs. approximation boundaries for [https://sohaibhussain.dev/](https://sohaibhussain.dev/).

---

## 1. Directly Observed Facts vs. Inferred Behaviors

| Feature / Behavior | Classification | Direct Evidence | Notes / Verification Status |
| :--- | :--- | :--- | :--- |
| **Framework & Engine** | **Direct Fact** | Server headers: `server: Vercel`, `x-nextjs-prerender: 1`; JS chunk: `turbopack-0jij~0yxsmsar.js` | Built with Next.js (App Router) and Turbopack. |
| **Typography & Fonts** | **Direct Fact** | Stylesheet `main.css`: `@font-face` referencing `Switzer_Variable-s.p.0rb.ypz49h_sv.woff2` and fallback metrics for `Arial` | Switzer Variable font with weights 300–700. |
| **Noise Texture** | **Direct Fact** | Downloaded asset `/assets/framer-noise.png`: 256x256 monochrome 1-bit PNG | Verified via curl and file inspection. |
| **Project Stack Delta Math** | **Direct Fact** | Extracted from `0y6guz2amp4_5.js`: `getBoundingClientRect()` delta computation between `[data-grid-id]` and `[data-stack-target-id]` | Injected via inline styles `--tx`, `--ty`, `--rot`, `--sc`. |
| **View Transitions API** | **Direct Fact** | Extracted from `0-foizd~nf0fz.js`: `document.startViewTransition` intercepting `<a>` clicks with `data-vt="true"` | Native View Transitions wrapped around Next.js router. |
| **Bubble Hover Gradients** | **Direct Fact** | Extracted from `main.css`: `.bubble-hover:before` using `--gradient: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)` with `fill-from-left` | Full CSS keyframes and transitions extracted. |
| **Bottom Viewport Blur** | **Direct Fact** | Extracted from DOM: 12-layer progressive `backdrop-filter: blur(...)` with mask gradients | Reversible exact formula. |
| **Backend Form Processing** | **Limitation / Inferred** | No live form `action` endpoint found on `/contact`; contact channels link directly to `mailto:`, LinkedIn, GitHub, Upwork | The contact page is link-based rather than a form submission backend. |
| **Dev Notes Markdown Engine** | **Inferred** | Stylesheet `app.css` includes KaTeX font definitions; blog/notes contain markdown-rendered articles | Built with MDX / Contentlayer / remark-rehype with KaTeX math plugin. |
| **Mobile Menu Toggle Interaction** | **Direct Fact** | Screenshot verified via REA scenario (`mobile-menu-open.png`) | Modifies `data-mobile-menu="open"` on body and applies index-based delays. |
| **Desktop Nav Scroll Trigger** | **Direct Fact** | Extracted from `0-foizd~nf0fz.js`: `scrollY.on("change")` comparing `currentY - prevY` | Expands on downward scroll, collapses on upward scroll or at top. |

---

## 2. Reproduction Boundary: Faithful Reproduction vs. Approximation

### 2.1 Elements That Can Be 100% Faithfully Reproduced
1. **Container & Layout Architecture**:
   - `max-w-6xl` (`1152px`) layout with dual vertical gutter border lines (`border-gray-200`).
   - Responsive breakpoints (`xxs: 384px`, `xs: 480px`, `sm: 640px`, `md: 768px`, `lg: 1024px`, `custom: 1208px`).
   - Atmospheric 1-bit noise texture (`framer-noise.png`) at 6% opacity.
2. **Typography System**:
   - Switzer Variable font stack and fallback metrics.
   - Exact heading sizes, tight line-heights (`leading-[1.05]`), and negative trackings (`tracking-tight`, `tracking-tighter`).
3. **Adaptive Floating Pill Navbar**:
   - Compact pill at top (logo + name + 3 dots).
   - Downward scroll expansion to full link menu (`duration-300 max-w-[600px]`).
   - Mobile dropdown expansion with staggered item transitions.
4. **All Keyframe Animations**:
   - `bubble-hover` and `bubble-hover-cta` 4-color animated gradient fill.
   - `wordCycle` 4-verb cycling animation in footer.
   - Live location pulsing beacon (`animate-ping`).
   - Hover lifts (`hover:-translate-y-1`), card tilts (`group-hover:rotate-3`), and wiggle arrows (`animate-wiggle-right`).
5. **Atmospheric 12-Layer Viewport Blur**:
   - Exact 12-div progressive backdrop-blur with linear-gradient masks and top highlight border.
6. **Hero Stack to 2x2 Grid Transition**:
   - Exact delta math calculation using `getBoundingClientRect()` and `useScroll`.

### 2.2 Elements Requiring Adaptation / Approximation for Fardeel Azhar
1. **Mockup Assets**:
   - *Reference*: iOS phone mockup cutouts featuring Quran and telecom apps.
   - *Adaptation for Fardeel Azhar*: Android phone mockups (Google Pixel 8/9 Pro, Samsung Galaxy S24) running production Jetpack Compose applications, plus architectural diagrams / terminal interfaces representing Agentic AI and Automation pipelines.
2. **Project Content & Identity**:
   - *Reference*: React Native engineer from Okara, Pakistan.
   - *Fardeel Azhar*: Android Engineer specializing in Kotlin, Jetpack Compose, Coroutines/Flow, Clean Architecture, and developing expertise in Agentic AI and AI Automation.
3. **Primary Expertise Badges**:
   - Replace React Native / Expo pills with: `Kotlin`, `Jetpack Compose`, `Android SDK`, `Coroutines & Flow`, `Clean Architecture`, `Koin / Hilt`, `Agentic AI`, `LangChain / LangGraph`, `Python`, `MCP`.
4. **Contact Channels & Upwork**:
   - Replace personal links with Fardeel's actual GitHub, LinkedIn, Email, and resume.

---

## 3. Tool Capabilities Used & Execution Transparency

1. **REA MCP Tools Used**:
   - `capture_browser_scenario`: Used for deterministic scenario execution, viewport configuration, and DOM/screenshot capture.
   - *Observed limitation*: Direct CDP loopback tools (`inspect_web_page`, `list_browser_targets`) require a pre-existing loopback debugging daemon on port 9222. When port 9222 was inactive, REA's Playwright-based `capture_browser_scenario` launched the local Chromium browser directly (`/Applications/Google Chrome.app`) and completed end-to-end page and viewport capture.
2. **Headless Chrome CLI**:
   - Used for rapid batch capturing of desktop subpages (`/projects`, `/experience`, `/about`, `/resume`, `/contact`, `/projects/easyquran-ai`) with deterministic window sizing.
3. **Reverse-Engineering Deobfuscation**:
   - Extracted, unpacked, and analyzed CSS bundles (`main.css`, `app.css`) and Turbopack JS chunks (`0y6guz2amp4_5.js`, `0-foizd~nf0fz.js`, `059tynyvjatd1.js`) using Python AST regex searchers.
   - Directly isolated Framer Motion scroll delta math, `useUI` body attribute setters, and keyframe definitions.

---

## 4. Unknowns & Items for Manual Verification

1. **Analytics & Performance Tracking**:
   - Google Tag Manager (`G-S1Y5EG3VV1`) was observed in HTML head. Should Fardeel's portfolio include Google Analytics, Vercel Analytics, or PostHog?
2. **Dev Notes / Blog Data Source**:
   - Is it preferred to use local MDX files in the repository (e.g. `content/notes/*.mdx`), or a headless CMS, or a lightweight JSON structure?
3. **One-Page Resume File**:
   - The reference links to a downloadable PDF (`/resume/Sohaib-Hussain-Shah-Resume.pdf`). A PDF asset for Fardeel Azhar will be needed for Phase 2.
