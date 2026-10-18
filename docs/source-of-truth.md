# Portfolio Source of Truth & Evidence Audit

This document is the verified baseline for Fardeel Azhar's portfolio. It aggregates evidence from local documents, GitHub repositories, Google Play Store records, and LinkedIn data, recording all verified facts alongside identified discrepancies between sources.

---

## 1. Inventory of Accessed Sources

| Source Identifier | Type | Origin | Date / Version | Status & Reliability |
| :--- | :--- | :--- | :--- | :--- |
| `DOC-CV-ANDROID` | PDF Document | `private-input/Android_Fardeel_Lahore.pdf` | Current (Oct 2026) | **High** — Tailored for Android engineering roles; contains concrete technical details. |
| `DOC-CV-AUTO` | PDF Document | `private-input/Automation_CV_Fardeel.pdf` | Current (Oct 2026) | **High** — Tailored for AI & Process Automation roles; details multi-agent workflows. |
| `DOC-LINKEDIN-PDF` | PDF Export | `private-input/linkedIn_profile.pdf` | Current Export | **Medium-High** — Official export from LinkedIn profile `fardeel-azhar`. |
| `API-GITHUB` | GitHub API | `user:ChFardeelAzhar` via GitHub MCP | Real-time Live API | **Verified Primary Fact** — 36 repositories inspected; READMEs and trees validated. |
| `WEB-PLAYSTORE` | Public Store | `play.google.com/store/apps/details?id=com.fardeel.cricscore` | Live Store Listing | **Verified Primary Fact** — HTTP 200, author linked directly to Fardeel's GitHub. |
| `LOCAL-AGENTIC` | Local Filesystem | `/Users/retailopakistan/Documents/FardeelAgenticProjects/` | Local Workspace | **Verified Supplementary** — Confirms hands-on codebases for CrewAI, LangGraph, AutoGen, and MCP. |

---

## 2. Core Profile Facts

| Attribute | Verified Fact | Source(s) | Confidence Level |
| :--- | :--- | :--- | :--- |
| **Full Name** | Fardeel Azhar | All sources | **100% (High)** |
| **Primary Specialization** | Android Engineer (Kotlin, Jetpack Compose, Clean Architecture) | `DOC-CV-ANDROID`, `DOC-LINKEDIN-PDF`, `API-GITHUB` | **100% (High)** |
| **Secondary Specialization** | Agentic AI & AI Automation (CrewAI, LangGraph, Multi-Agent Systems) | `DOC-CV-AUTO`, `LOCAL-AGENTIC`, `API-GITHUB` | **100% (High)** |
| **Target Market** | International Remote Opportunities | User Prompt, `DOC-LINKEDIN-PDF` | **100% (High)** |
| **Email Address** | `fardeelazhar82@gmail.com` | All sources | **100% (High)** |
| **GitHub Handle** | `https://github.com/ChFardeelAzhar` | All sources | **100% (High)** |
| **LinkedIn URL** | `https://linkedin.com/in/fardeel-azhar` | `DOC-LINKEDIN-PDF`, `DOC-CV-AUTO` | **100% (High)** |
| **Education** | BS in Software Engineering, Virtual University of Pakistan (VU), 2025–2029 | All sources | **100% (High)** |

---

## 3. Discrepancy & Conflict Ledger

The following discrepancies exist between the older/targeted CVs and the LinkedIn profile. In accordance with Phase 2 rules, these are recorded transparently rather than silently resolved:

| Item | Source A (LinkedIn PDF) | Source B (Android CV) | Source C (Automation CV) | Recommended Truth / Action Needed |
| :--- | :--- | :--- | :--- | :--- |
| **Dev Entity Title** | `Junior Android Developer` | `Android Developer` | `Software Engineer (Android & AI Workflows)` | **Recommended**: `"Software Engineer — Android & AI Workflows"` or `"Android Engineer"`. The title in the automation CV reflects the dual focus of the portfolio. User must confirm preferred public title. |
| **Dev Entity Start Date** | `April 2025` | `March 2025` | `March 2025` | **Recommended**: `March 2025`. Both CVs agree on March 2025. |
| **Freelance / Self-Employed Period** | `Dec 2022 – Apr 2025` (2 yrs 5 mos) | `Sept 2023 – Feb 2025` (1 yr 6 mos) | *Omitted from CV* | **Analysis**: LinkedIn counts early learning/foundational practice from late 2022, while the Android CV formalizes the intensive project building phase starting Sept 2023. User should confirm whether to show "Sept 2023 – Feb 2025" or "2023 – 2025". |
| **Total Experience Claim** | `"2+ years of expertise"` | `"3+ years of overall experience, including 2 years professional contribution"` | `"Software Engineer with production experience..."` | **Recommended**: Use `"2+ years of production Android & software engineering experience"`. Avoid inflating or conflicting claims. |
| **Primary Location** | `Okāra, Punjab, Pakistan` | `Lahore` | `Lahore, Pakistan` (with Dev Entity in Okara) | **Recommended**: `"Lahore, Pakistan"` on profile header, with `"Okara / Lahore, Pakistan"` noted for Dev Entity role. |
| **LinkedIn Slug** | `in/fardeel-azhar` | `in/fardeel-azhar-540a7033b` | `in/fardeel-azhar` | **Recommended**: `https://linkedin.com/in/fardeel-azhar` is the clean, custom vanity URL. The slug with hash was the older auto-generated link. |
| **KinHealth Repo** | *Not listed* | Listed as `github.com/ChFardeelAzhar/KinHealth` | *Listed as personal app, no link* | **Finding**: GitHub API returns 404 for this repository. It is either private or unpushed. Must not be linked publicly until user provides public repo. |

---

## 4. Professional Experience Verification

### 4.1 Dev Entity (Current Full-Time Employer)
- **Period**: March 2025 – Present
- **Company**: Dev Entity (Okara / Lahore, Pakistan)
- **Verified Facts**:
  - Contribution to live flagship e-commerce application on Google Play Store with **5,000,000+ downloads** and **4.4★ rating**.
  - Multi-module architecture with **25+ feature modules** using Clean Architecture and MVVM patterns.
  - Multi-domain coverage: Grocery/Retail, Food Delivery, Beauty, and Pharmacy verticals.
  - Reusable UI component engineering using Jetpack Compose.
  - Integration of Apollo Client for GraphQL querying and client-side caching.
  - Feature flagging system used for gradual feature rollouts and A/B testing.
  - Dagger Hilt dependency injection configuration across modular boundaries.
  - Telemetry and crash monitoring via RudderStack.
- **Confidentiality Boundary**:
  - The internal application code resides locally in the user's workspace under proprietary client repositories (`Ninja-Android-App`).
  - **Rule applied**: We will present this work exclusively as professional experience and architectural leadership without publishing internal proprietary code, client naming, or private repository links.

### 4.2 Independent / Self-Employed Engineering
- **Period**: September 2023 – February 2025
- **Verified Facts**:
  - Mentorship under a senior Android developer.
  - Built 8+ applications across multiple domains (chat, news, expense tracker, medicine calculator, weather).
  - Open-source release of `compose-auto-shimmer` on GitHub (46 stars).
  - Independent end-to-end production launch of `CricScore: Live Match Scorer` on Google Play Store.

---

## 5. Summary of Confidence Levels

- **Personal Details & Links**: High (100% verified).
- **Core Android Skills**: High (100% verified via codebases and live apps).
- **Agentic AI & Automation Skills**: High (100% verified via GitHub repos and local Python codebases).
- **Project Provenance**: High (all selected projects have public repos, live URLs, or verified local code).
- **Exact Date/Title Alignment**: Medium (requires user sign-off on preferred public title and freelance start date).
