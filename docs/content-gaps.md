# Content Gaps, Missing Assets & Questions for Review

This document inventories missing assets, unresolved discrepancies, and decisions requiring Fardeel Azhar's confirmation before Phase 3 implementation.

---

## 1. High-Priority Assets Needed for Phase 3

| Asset Item | Purpose in Design Benchmark | Current Status | Action Required |
| :--- | :--- | :--- | :--- |
| **Professional Headshot / Portrait** | Displayed in Hero CTA button (`rounded-full ring-2 ring-white/75`) and on `/about` page | **Missing** — No raw portrait image file currently in workspace | Provide a high-resolution portrait photograph (PNG or JPG format) to place in `public/assets/profile.jpg`. |
| **Downloadable Resume PDF** | Linked from Hero `"Download Resume"` button and floating resume pill (`/resume/*.pdf`) | Three PDF files exist in `private-input/`, but no unified public portfolio resume | Decide whether to use a compiled 1-page PDF based on `Android_Fardeel_Lahore.pdf` or `Automation_CV_Fardeel.pdf` for public downloads. |
| **App Store Device Mockups** | Needed for the 4 Hero Stack Cards and case study pages (`/projects/[slug]`) | Public assets exist for `compose-auto-shimmer` (GIFs) and Play Store icon for `CricScore`; full device frames needed | We can generate clean Android device mockups (Google Pixel 9 Pro / Galaxy S24 frames) using the verified app screenshots, or Fardeel can provide preferred mockups. |
| **Brand Favicon & Logo Mark** | Custom SVG mark for floating navbar and browser tab | Currently using reference's `serbyte` icon in audit | Provide a personalized initial/logo mark SVG or monogram (e.g. "FA" stylized glyph) to replace the reference icon. |

---

## 2. Unresolved Discrepancies Requiring Confirmation

### Question 1: Preferred Public Title at Dev Entity
- **The Conflict**:
  - LinkedIn: `Junior Android Developer`
  - Android CV: `Android Developer`
  - Automation CV: `Software Engineer (Android & AI Workflows)`
- **Impact**: Sets the primary professional title in the Hero headline and Experience timeline.
- **Recommendation**: `"Software Engineer — Android & AI Workflows"` or `"Android Engineer"`. Which title should be published on the live site?

---

### Question 2: Freelance / Independent Career Dates
- **The Conflict**:
  - LinkedIn states: `December 2022 – April 2025` (2 years, 5 months).
  - Android CV states: `September 2023 – February 2025` (1 year, 6 months).
- **Recommendation**: Display `"September 2023 – February 2025"` (or clean yearly format `"2023 – 2025"`) representing the dedicated production and open-source building period. Please confirm preference.

---

### Question 3: Primary Location Display
- **The Conflict**:
  - LinkedIn: `Okāra, Punjab, Pakistan`
  - Android & Automation CVs: `Lahore, Pakistan` (with Dev Entity listed in Okara)
- **Recommendation**: Display `"Lahore, Pakistan"` in the Hero location beacon pill, with `"Okara / Lahore, Pakistan"` reflected in the Dev Entity role. Does this align with your current working base?

---

### Question 4: Status of `KinHealth` Repository
- **The Conflict**:
  - Android CV lists `KinHealth` at `https://github.com/ChFardeelAzhar/KinHealth`.
  - Live GitHub API returns `404 Not Found`.
- **Action Needed**: Is `KinHealth` currently in a private repository? If so, would you like to:
  1. Keep it private and showcase `AutoLocale` in its place for the top 4 hero stack? *(Recommended)*
  2. Make `KinHealth` public before Phase 3 so we can link to it?

---

### Question 5: Total Experience Headline
- **The Conflict**:
  - LinkedIn summary claims `"2+ years of expertise"`.
  - Android CV summary claims `"3+ years of overall experience, including 2 years of professional contribution"`.
- **Recommendation**: Standardize on `"2+ years of production Android & software engineering experience"`. This avoids any perception of overstatement while solidly reflecting your verified production track record. Please confirm.

---

## 3. Technical & Architectural Decisions for Phase 3

1. **Dev Notes / Blog Content System**:
   - Would you like the `/notes` and `/blog` routes to read from local MDX files in the repository (`content/notes/*.mdx`), or a simple JSON array to start?
2. **Contact Channel Integration**:
   - The reference site uses direct links (`mailto:fardeelazhar82@gmail.com`, LinkedIn, GitHub, Upwork) rather than an embedded backend form. Would you like to keep this clean direct-link pattern, or add an interactive form powered by Resend / Formspree?
3. **Analytics Integration**:
   - Do you want Google Analytics (`gtag`), Vercel Web Analytics, or privacy-friendly PostHog / no analytics?
