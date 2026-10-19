# Portfolio Asset Manifest & Mockup Replacement Guide

This document catalogs every mockup asset in `public/images/projects/`, its current fidelity/status, visual representation, and step-by-step instructions for replacing them with production screenshots or Figma exports.

---

## 1. Asset Specifications & Design Standard

To maintain the exact visual harmony of the reference site (`sohaibhussain.dev`), all project preview cards adhere to:
- **Aspect Ratio**: `12:10` (1.2:1)
- **Standard Dimensions**: `1200 x 1000 px` (high-DPI 2x for Retina screens)
- **Container Styling**: Border radius `20px` (`rounded-[20px]`), border `1px solid rgba(255, 255, 255, 0.08)`, subtle inner top-border highlight (`rgba(255, 255, 255, 0.15)`).
- **Format**: High-resolution SVG (current placeholders) or optimized WebP / PNG / SVG for replacements.
- **Focal Rules**:
  - Android apps feature realistic mobile device chassis with Dynamic Island / camera punch-holes.
  - Desktop software (`coffee-shop-pos`) features a desktop monitor chassis with stand.
  - Multi-agent AI systems feature interactive workflow canvas node graphs.

---

## 2. Project Asset Catalog

| # | Project ID | Category | Current Asset Path | Status | Chassis Type |
|---|------------|----------|-------------------|--------|--------------|
| 1 | `compose-auto-shimmer` | Open-Source Libraries | `/images/projects/compose-auto-shimmer.svg` | Conceptual SVG | Dual Android Frame (Before/After Skeleton) |
| 2 | `android-crash-fix-agent` | Agentic AI | `/images/projects/android-crash-fix-agent.svg` | Conceptual SVG | Multi-Agent Flow / IDE Pipeline UI |
| 3 | `cricscore` | Android Engineering | `/images/projects/cricscore.svg` | Conceptual SVG | Dual Android Frame (Live Ball-by-ball & Card) |
| 4 | `autolocale-android` | Open-Source Libraries | `/images/projects/autolocale-android.svg` | Conceptual SVG | CLI Terminal + IDE strings.xml Diff UI |
| 5 | `flagship-ecommerce` | Android Engineering | `/images/projects/flagship-ecommerce.svg` | Conceptual SVG | Android Phone (Catalog & Bottom Sheet Cart) |
| 6 | `coffee-shop-pos` | Desktop Software & POS | `/images/projects/coffee-shop-pos.svg` | Conceptual SVG | **Desktop Ultrawide Monitor with Stand** |
| 7 | `kinhealth` | Android Engineering | `/images/projects/kinhealth.svg` | Conceptual SVG | Android Phone (Telemetry & Vitals Dashboard) |
| 8 | `vu-quiz-assistant` | Agentic AI | `/images/projects/vu-quiz-assistant.svg` | Conceptual SVG | Extension Floating Overlay on Quiz Canvas |
| 9 | `android-job-hunter-n8n` | AI Automation | `/images/projects/android-job-hunter-n8n.svg` | Conceptual SVG | n8n Automation Canvas Workflow |
| 10 | `insight-sparks` | AI Automation | `/images/projects/insight-sparks.svg` | Conceptual SVG | Automation Canvas (Perplexity + Supabase + Ghost) |
| 11 | `job-hunt-crew` | Agentic AI | `/images/projects/job-hunt-crew.svg` | Conceptual SVG | Agent Terminal & Resume LaTeX Diff UI |
| 12 | `expense-tracker` | Android Engineering | `/images/projects/expense-tracker.svg` | Conceptual SVG | Android Phone (Budget Charts & Category Badges) |
| 13 | `weather-app` | Android Engineering | `/images/projects/weather-app.svg` | Conceptual SVG | Android Phone (Dynamic Sky & 7-Day Forecast) |
| 14 | `todo-app` | Android Engineering | `/images/projects/todo-app.svg` | Conceptual SVG | Android Phone (Task Checklists & Tag Filters) |
| 15 | `medicine-taxculator` | Android Engineering | `/images/projects/medicine-taxculator.svg` | Conceptual SVG | Android Phone (B2B Pharma Tax Bracket Calculator) |
| 16 | `100-logic-problems` | Kotlin & Practice | `/images/projects/100-logic-problems.svg` | Conceptual SVG | IDE Editor (Kotlin 99 Problems & Passing Tests) |

---

## 3. How to Replace Placeholder Mockups

When real production screenshots or Figma-rendered mockups become available, follow these steps:

### Option A: Direct File Replacement (Easiest)
1. Export your mockup at `1200 x 1000 px` (aspect ratio `12:10`) in `.webp`, `.png`, or `.svg`.
2. Save the file into `public/images/projects/` using the exact filename:
   - For example, replace `public/images/projects/compose-auto-shimmer.svg` with your new file.
3. If using `.webp` or `.png`, update the `"image"` path in `data/projects.json` (e.g. `"/images/projects/compose-auto-shimmer.webp"`) and set `"assetStatus": "production-screenshot"`.

### Option B: Using the Inbox Directory
1. Drop raw screenshots into `private-input/project-assets-inbox/`.
2. Name the file with the project ID prefix (e.g., `compose-auto-shimmer-hero.png`).
3. Convert or crop to `12:10` aspect ratio and move to `public/images/projects/`.

### Design Guidelines for Real Replacements:
- **Dark Theme Background**: Match card background to `#090514` or `#0b0f19` with a subtle inner glow or gradient accent so the card edges blend gracefully.
- **Desktop POS**: Always show `coffee-shop-pos` on a desktop monitor frame, never on a mobile phone frame.
- **Padding**: Ensure at least `40px` of breathing room between the UI frame and the outer boundary of the `1200x1000` canvas.
