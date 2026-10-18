# Animation Inventory & Interaction Catalog

Reverse-engineered from source JavaScript bundles (`0y6guz2amp4_5.js`, `0-foizd~nf0fz.js`, `059tynyvjatd1.js`) and stylesheet animations (`main.css`) on [https://sohaibhussain.dev/](https://sohaibhussain.dev/).

---

## 1. Hero Card Stack → Projects Grid Transition

### 1.1 Observed Mechanism
In the Hero section on desktop, project preview cards are visibly stacked and rotated in the right column. As the user scrolls past the Hero into the "Latest Projects" section, these stacked cards smoothly unpack, un-rotate, scale up to 100%, and land precisely into a 2x2 grid layout.

### 1.2 Mathematical & Technical Implementation
- **Driver**: Framer Motion `useScroll({ offset: ["start start", "8% start"] })`.
- **Target calculation**:
  ```javascript
  // Extracted from 0y6guz2amp4_5.js:
  let n = () => {
    let deltaMap = {};
    for (let id of ["easyquran-ai", "callmins", "syzng", "doctorhunt"]) {
      let cardEl = document.querySelector(`[data-grid-id="${id}"]`);
      let stackTarget = document.querySelector("[data-stack-target-id]");
      if (!cardEl || !stackTarget) continue;
      let cardRect = cardEl.getBoundingClientRect();
      let targetRect = stackTarget.getBoundingClientRect();
      deltaMap[id] = {
        x: targetRect.left - cardRect.left,
        y: targetRect.top - cardRect.top,
      };
    }
  };
  ```
- **CSS Variables Injected into Grid Items**:
  - `easyquran-ai`: `--tx: 414.3px; --ty: -1040.3px; --rot: 9deg; --sc: 0.65; z-index: 1;`
  - `callmins`: `--tx: 43.8px; --ty: -1040.3px; --rot: -2deg; --sc: 0.65; z-index: 99999;` (Front card)
  - `syzng`: `--tx: 399.3px; --ty: -793.0px; --rot: 5deg; --sc: 0.65; z-index: 3;`
  - `doctorhunt`: `--tx: 53.8px; --ty: -778.0px; --rot: 12deg; --sc: 0.65; z-index: 2;`
- **Animation Interpolation**:
  - `x`: `scrollYProgress` interpolates from `var(--tx)` to `0px`.
  - `y`: `scrollYProgress` interpolates from `var(--ty)` to `0px`.
  - `rotate`: `scrollYProgress` interpolates from `var(--rot)` to `0deg`.
  - `scale`: `scrollYProgress` interpolates from `var(--sc)` (`0.65`) to `1.0`.
- **Performance Optimizations**:
  - `will-change: transform, opacity;`
  - `transform-gpu; contain-content; backface-hidden;`
  - Updates triggered inside `v.frame.preRender` and monitored by `ResizeObserver`.

---

## 2. Dynamic Expanding Floating Navbar

### 2.1 Trigger & State Flow
- Controlled by custom hook `useUI("scrolled", "up")` and `useScroll()` tracking `scrollY`.
- Threshold logic in `0-foizd~nf0fz.js`:
  ```javascript
  let { scrollY } = useScroll();
  let isDesktop = !useIsMobile(768);
  scrollY.on("change", (currentY) => {
    if (!isDesktop) return;
    let prevY = scrollY.getPrevious() ?? currentY;
    setScrolled(currentY - prevY > 0 ? "up" : "down");
  });
  ```
- Sets `data-scrolled="up"` or `data-scrolled="down"` on `document.body`.

### 2.2 Visual Transition
- **At Top (`data-scrolled="up"`)**:
  - Desktop nav links `<ul>` have classes: `md:scrolled-up:opacity-0 md:scrolled-up:max-w-0 overflow-hidden`.
  - 3-dot bouncy menu button is visible in right side of the pill.
  - Navbar is a compact pill displaying only the logo mark + name + 3 dots.
- **On Scroll Down (`data-scrolled="down"`)**:
  - 3-dot button: `md:scrolled-down:opacity-0 md:scrolled-down:pointer-events-none`.
  - Desktop nav links `<ul>`: `md:scrolled-down:opacity-100 md:scrolled-down:max-w-[600px] transition-all duration-300 ease-in-out`.
  - Expands smoothly horizontally to reveal: Projects, Experience, About, Resume, Dev Notes, Blog, Contact.

---

## 3. Mobile Navigation Drawer & Dot-to-X Morph

### 3.1 Trigger
- Clicking `<button aria-label="Toggle navigation">` on screens `< 768px`.
- Toggles `data-mobile-menu="open"` vs `"closed"` on `document.body`.

### 3.2 Keyframe & Transition Details
- **Container**:
  ```css
  .mobile-menu-container {
    pointer-events: none;
    opacity: 0;
    max-height: 0;
    transition: all 0.3s ease-in-out;
  }
  [data-mobile-menu="open"] .mobile-menu-container {
    pointer-events: auto;
    opacity: 1;
    max-height: 300px;
    padding-bottom: 1rem;
  }
  ```
- **Staggered Item Slide-in**:
  ```css
  .mobile-menu-item {
    opacity: 1;
    transform: translate(0);
    transition: all 0.3s ease-in-out;
    transition-delay: calc(var(--index) * 0.1s + 0.2s);
  }
  [data-mobile-menu="closed"] .mobile-menu-item {
    opacity: 0;
    transform: translate(-1.25rem);
    transition-delay: 0s;
  }
  ```
- **Dot-Menu Morphing**:
  - Dots span elements rotate and morph into an "X" close icon when `data-mobile-menu="open"`.

---

## 4. Multi-Stop Gradient Bubble Hover (`bubble-hover`)

### 4.1 Observed Appearance
Buttons and navigation items display an animated, liquid-like multi-color pastel gradient on hover that slides in smoothly from the left and subtly ripples indefinitely.

### 4.2 Exact CSS Extraction
```css
.bubble-hover {
  text-wrap: nowrap;
  border-radius: 9999px;
  display: inline-block;
  position: relative;
  overflow: hidden;
}

.bubble-hover:before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  border-radius: 9999px;
  background-image: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 200% 200%;
  background-position: 100% 100%;
  translate: -100% 0;
  opacity: 0;
  filter: blur(1px);
  will-change: transform;
  transition: all 0.3s ease;
}

.bubble-hover:hover:before {
  translate: 0 0;
  opacity: 0.3 !important;
  animation: 5s ease-out infinite fill-from-left;
}

.bubble-hover.active:before {
  translate: 0 0;
  opacity: 0.7;
  animation: 5s ease-out infinite fill-from-left;
}

@keyframes fill-from-left {
  0%, 100% {
    background-position: 100% 100%;
  }
  50% {
    background-position: 0 0;
  }
}
```

---

## 5. Exclusion Blend Heading Reveal

### 5.1 Observed Behavior
The "Latest Projects" headline uses `mix-blend-mode: exclusion;` with white text color against the underlying light background and dark preview cards. This inverts the characters dynamically as the user scrolls content beneath them.

### 5.2 Implementation
- CSS: `mix-blend-exclusion text-white`
- Letter-by-letter staggered entrance:
  - Each letter is wrapped in `<span aria-hidden="true" style="opacity: 0; transform: translateY(20px)">`.
  - On viewport intersection (`IntersectionObserver`), opacity transitions to `1` and transform to `translateY(0)` with a 30ms stagger per character.

---

## 6. Infinite Footer Verb Cycler (`wordCycle`)

### 6.1 Observed Behavior
In the footer phrase "Let's build / create / design / make incredible work together", the action verb smoothly cycles continuously through the four verbs with a subtle vertical slide and blur.

### 6.2 Keyframe Definition
```css
@keyframes wordCycle {
  0%, 10% {
    filter: blur(5px);
    opacity: 0;
    transform: translateY(var(--word-height, 40px));
  }
  11% {
    filter: blur(1px);
    opacity: 0.5;
  }
  13% {
    filter: blur(2px);
    opacity: 0.7;
  }
  15%, 35% {
    filter: blur(0px);
    opacity: 1;
    transform: translateY(0);
  }
  38%, 100% {
    filter: blur(5px);
    opacity: 0;
    transform: translateY(calc(var(--word-height, 40px) * -1));
  }
}
```

---

## 7. Micro-Interactions Catalog

| Component | Trigger | Animation / Effect | Timing / Curve |
| :--- | :--- | :--- | :--- |
| **Location Badge** | Continuous | Outer green beacon ping (`animate-ping`) | 1s cubic-bezier |
| **Social Media Circles** | Hover | Lift `hover:-translate-y-1`, background fills with brand color, icon turns white | 200ms ease-out |
| **Service Cards** | Hover | Card lifts `hover:translate-y-[-4px]`, shadow increases to `[0_20px_40px_-15px_rgba(0,0,0,0.05)]` | 300ms ease-in-out |
| **Service Icon Square** | Card Hover | Icon container scales and tilts: `group-hover:scale-110 group-hover:rotate-3` | 300ms ease |
| **Arrow Right Link** | Hover | Arrow performs horizontal wiggle: `group-hover:animate-wiggle-right` | 600ms ease-in-out |
| **Project Card Zoom** | Hover | Preview image scales slightly: `group-hover:scale-105` inside `overflow-hidden` | 400ms ease |

---

## 8. View Transitions API Integration

### 8.1 Observed Behavior
Page transitions between `/`, `/projects`, `/experience`, `/about`, `/resume`, `/contact` happen without abrupt white flashes or full DOM unmounts.

### 8.2 Code Implementation
Extracted from `0-foizd~nf0fz.js`:
- Links marked with `data-vt="true"` intercept standard click events.
- If `document.startViewTransition` is supported by the browser, it wraps Next.js router navigation:
  ```javascript
  const navigate = () => {
    isReplace ? router.replace(href, { scroll: true }) : router.push(href, { scroll: true });
  };

  if (document.startViewTransition) {
    document.startViewTransition(navigate);
  } else {
    navigate();
  }
  ```
- CSS defines cross-fade and smooth container persistence for `<nav>` and `.blur-overlay`.
