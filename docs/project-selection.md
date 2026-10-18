# Portfolio Project Selection & Curation Strategy

This document ranks and evaluates project candidates for Fardeel Azhar's portfolio, aligning technical proof with his strategic positioning: **Android Engineer (Kotlin, Jetpack Compose, Clean Architecture) + Agentic AI & AI Automation**.

---

## 1. Selection Criteria & Strategy

To recreate the visual impact and technical credibility of the design reference ([https://sohaibhussain.dev/](https://sohaibhussain.dev/)), the portfolio requires:
1. **The Hero Stack (Top 4 Featured Projects)**: In the reference, 4 cards live in the Hero section and unpack into the 2x2 "Latest Projects" grid upon scroll.
2. **Balanced Narrative**: 2 flagship Android engineering projects + 2 advanced Agentic AI/Automation projects to tangibly prove both sides of Fardeel's dual positioning.
3. **Evidence-Backed**: Every project must have either a live public repository, verified Play Store release, or demonstrable architectural artifact.
4. **Zero Confidentiality Breaches**: Proprietary company code from Dev Entity must be abstracted into high-level case study narratives without exposing client source code or private repositories.

---

## 2. Recommended Top 4 Hero Stack Candidates

```
┌────────────────────────────────────────────────────────────────────────┐
│                      HERO CARD 1 (Top / Front)                         │
│               Compose Auto Shimmer (Open Source Library)               │
│        46+ Stars · Jetpack Compose · Zero-Boilerplate Skeletons        │
├────────────────────────────────────────────────────────────────────────┤
│                      HERO CARD 2 (AI Flagship)                         │
│            Android Crash-Fix Agent (Ticket-to-PR Pipeline)             │
│   CrewAI · Antigravity CLI · ADB Device Reproduction · Multi-Agent     │
├────────────────────────────────────────────────────────────────────────┤
│                    HERO CARD 3 (Production Mobile)                     │
│               CricScore: Live Match Scorer (Play Store)                │
│     Live App · Kotlin · Jetpack Compose · Offline-First Room DB        │
├────────────────────────────────────────────────────────────────────────┤
│                   HERO CARD 4 (Developer Tooling)                      │
│                  AutoLocale (Android Gradle Plugin)                    │
│   Gradle Plugin API · Kotlin AST Code Rewriting · Auto-Translation     │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Deep-Dive Evaluation of Selected Candidates

### Candidate 1: `compose-auto-shimmer` ⭐ (Primary Android Project)
- **Role in Portfolio**: Hero Card 1 / Featured Android Showcase.
- **Category**: Android Open Source Library.
- **Why It Deserves Inclusion**:
  - Highest-starred public repository (46+ stars on GitHub).
  - Solves a ubiquitous pain point for Android developers: hand-coding fragile skeleton loading screens.
  - Demonstrates deep Jetpack Compose mastery (measuring live UI trees, custom modifier drawing, dynamic shader sweeps).
  - Published and distributed via JitPack with clean documentation, GIFs, and sample app.
- **Supporting Evidence**:
  - Repo: `https://github.com/ChFardeelAzhar/compose-auto-shimmer`
  - Demo GIFs and README verified via GitHub API.
- **Confidentiality Risk**: None (100% public open source under MIT License).

---

### Candidate 2: `android_crash_fix_agent` 🤖 (Primary AI Project)
- **Role in Portfolio**: Hero Card 2 / Flagship Agentic AI Showcase.
- **Category**: Agentic AI & Engineering Automation.
- **Why It Deserves Inclusion**:
  - Directly bridges **Android Engineering** with **Agentic AI** — the core theme of Fardeel's positioning.
  - Not a toy wrapper: 7-agent CrewAI orchestration with Antigravity CLI code modification and physical device QA via ADB.
  - Shows end-to-end autonomous engineering: from raw Crashlytics log intake → fix planning → unit test verification → emulator reproduction → review-ready PR generation.
- **Supporting Evidence**:
  - Repo: `https://github.com/ChFardeelAzhar/android_crash_fix_agent`
  - Verified agent configs (`agents/`), custom tools (`tools/antigravity_bridge_tool.py`, `tools/adb_tool.py`), and sample output reports.
- **Confidentiality Risk**: None (Public repository; uses mock crash traces and public sandboxed tools).

---

### Candidate 3: `CricScore: Live Match Scorer` 🏏 (Production App)
- **Role in Portfolio**: Hero Card 3 / Production Mobile App Showcase.
- **Category**: Production Android Application.
- **Why It Deserves Inclusion**:
  - Proves the ability to ship a complete, standalone product to Google Play Store.
  - Demonstrates modern Android stack: Jetpack Compose, MVVM, Room DB for offline-first state persistence, and Material Design 3.
  - Authenticated by Google Play Store with package ID `com.fardeel.cricscore` under developer name `Fardeel Develops`.
- **Supporting Evidence**:
  - Live Store URL: `https://play.google.com/store/apps/details?id=com.fardeel.cricscore`
  - Schema JSON-LD verified via HTTP 200 inspection.
- **Confidentiality Risk**: None (Public Play Store listing).

---

### Candidate 4: `autolocale-android` 🌍 (Developer Tooling)
- **Role in Portfolio**: Hero Card 4 / Developer Tooling & Infrastructure.
- **Category**: Android Developer Tooling & Automation.
- **Why It Deserves Inclusion**:
  - Demonstrates advanced Android engineering beyond standard UI apps: Gradle plugin architecture and AST source code rewriting.
  - Dual-module design (`autolocale-plugin` for compile-time string extraction and translation + `autolocale-runtime` for dynamic locale switching).
  - Shows engineering empathy by automating the tedious task of maintaining multi-lingual `strings.xml`.
- **Supporting Evidence**:
  - Repo: `https://github.com/ChFardeelAzhar/autolocale-android`
  - Complete 512-line README and multi-module source tree verified.
- **Confidentiality Risk**: None (Public open source).

---

## 4. Secondary & Supplemental Project Candidates

These projects provide rich depth for the dedicated `/projects` index and specialized sections:

| Project | Category | Why It Matters | Status / Repository |
| :--- | :--- | :--- | :--- |
| **Enterprise E-Commerce Platform (Dev Entity)** | Enterprise Architecture | Demonstrates commercial scale: 5M+ downloads, 4.4★ rating, 25+ feature modules, Apollo GraphQL, RudderStack, and multi-vertical e-commerce architecture. | Featured as a verified professional case study in Experience & Architecture sections without linking private code. |
| **`vu-quiz-assistant-agent`** | Hybrid Agentic & Web App | Shows full-stack orchestration: LangGraph state machine + Playwright browser automation + Next.js 16/Supabase web portal. | Public repo: `github.com/ChFardeelAzhar/vu-quiz-assistant-agent`. |
| **`android-job-hunting-agent-n8n`** | Practical Automation | Shows no-code / low-code workflow automation using n8n, OpenRouter LLMs, SerpAPI, and Gmail. | Public repo: `github.com/ChFardeelAzhar/android-job-hunting-agent-n8n`. |
| **`insight-sparks-channel-automation`** | LangGraph Pipeline | Shows stateful content generation with SQLite checkpoints and multi-agent pipeline architecture. | Public repo: `github.com/ChFardeelAzhar/insight-sparks-channel-automation`. |
| **`100-Logic-Problems`** | Algorithmic Problem Solving | Demonstrates disciplined problem-solving and algorithmic Kotlin foundations across 6 structured domains. | Public repo: `github.com/ChFardeelAzhar/100-Logic-Problems`. |

---

## 5. Visual Asset Preparation Plan (Phase 3 Readiness)

To match the high visual fidelity of the reference site's phone mockups:
1. **Android Device Mockups**:
   - High-resolution frames of Google Pixel 9 Pro and Samsung Galaxy S24 running:
     - `compose-auto-shimmer` side-by-side skeleton-to-content comparisons.
     - `CricScore` live match scorecard and tournament leaderboard views.
     - `AutoLocale` in-app dynamic language switching.
2. **Agentic AI & Architecture Visuals**:
   - Terminal & pipeline diagrams for `android_crash_fix_agent` showing the 7-agent DAG execution and ADB verification screenshots.
   - Flow diagrams for `vu-quiz-assistant-agent` showing LangGraph nodes and checkpoints.
