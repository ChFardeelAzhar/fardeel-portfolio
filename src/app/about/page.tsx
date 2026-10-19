import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getProfile } from "@/lib/data";
import {
  Sparkles,
  CheckCircle2,
  Cpu,
  Layers,
  Bot,
  Gauge,
  ArrowRight,
  GraduationCap,
  Globe,
  Languages,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About & Engineering Philosophy | Fardeel Azhar",
  description:
    "Learn about Fardeel Azhar's background in Android engineering, Clean Architecture on multi-module applications, and practical Agentic AI developer pipelines.",
};

const PRINCIPLES = [
  {
    title: "Production-First Composability",
    description:
      "UI code should be declarative, resilient, and adaptive. I build systems like compose-auto-shimmer that derive loading skeletons directly from live layouts, eliminating drift across foldables, tablets, and varying Android form factors.",
    icon: Layers,
  },
  {
    title: "Clean Modular Isolation",
    description:
      "Scalable codebases require strict domain boundaries. On applications with 25+ Gradle modules, clean separation of data, domain, and presentation layers prevents circular dependencies, optimizes build times, and enables frictionless team velocity.",
    icon: Cpu,
  },
  {
    title: "Autonomous Agentic Automation",
    description:
      "I don't treat AI as a glorified autocomplete. I build multi-agent software engineering pipelines that ingest crash logs, plan refactors, execute terminal commands via Antigravity CLI, run ADB tests on live Android hardware, and submit PRs.",
    icon: Bot,
  },
  {
    title: "Telemetry & Zero Guesswork",
    description:
      "Production stability is measured in numbers. From Apollo GraphQL query payload caching to Room DB offline indexing and RudderStack event telemetry, engineering decisions must be backed by quantifiable data.",
    icon: Gauge,
  },
];

export default function AboutPage() {
  const profile = getProfile();

  return (
    <div className="pt-28 sm:pt-36 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">
            <Sparkles className="h-3.5 w-3.5 text-emerald-500" />
            <span>03 — Profile &amp; Philosophy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-slate-900 leading-tight mb-4">
            About Fardeel Azhar
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Android Engineer specializing in Kotlin, Jetpack Compose, and Clean Architecture for
            production applications, with emerging expertise in autonomous Agentic AI developer workflows.
          </p>
        </div>

        {/* Biography Story */}
        <div className="space-y-6 text-base text-slate-700 leading-relaxed mb-16">
          <p>
            I am a Software Engineer based in Lahore, Pakistan, focused on building robust, performant
            Android applications. My professional engineering work includes contributing to a flagship
            production e-commerce platform with over{" "}
            <strong className="text-slate-900 font-semibold">5 million downloads on the Google Play Store</strong>.
            In this environment, I engineer features across 25+ independent Gradle modules using Jetpack Compose,
            Dagger Hilt, Apollo GraphQL, and RudderStack analytics.
          </p>
          <p>
            My engineering philosophy centers on high agency and craftsmanship. Whether writing an open-source
            Compose library with custom canvas shaders or designing high-density point-of-sale software for
            desktop environments, I aim to eliminate boilerplate, respect architectural separation of concerns,
            and build software that users love using.
          </p>
          <p>
            In addition to mobile engineering, I am actively pioneering{" "}
            <strong className="text-slate-900 font-semibold">Agentic AI and automated software development</strong>.
            I orchestrate autonomous multi-agent teams using CrewAI, Python, and the Antigravity CLI to automate
            complex engineering workflows—such as analyzing Android stack traces, proposing architectural code repairs,
            and verifying build integrity on real connected hardware.
          </p>
        </div>

        {/* Engineering Principles */}
        <div className="mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
            Core Engineering Principles
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PRINCIPLES.map((principle, idx) => {
              const Icon = principle.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200/90 p-6 shadow-sm hover:border-slate-300 transition-colors"
                >
                  <div className="h-10 w-10 rounded-xl bg-slate-950 text-emerald-400 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skills & Competencies Breakdown */}
        <div className="mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
            Technical Competencies Matrix
          </div>
          <div className="rounded-3xl bg-slate-50 border border-slate-200/90 p-6 sm:p-8 space-y-6">
            {Object.entries(profile.skills).map(([category, skills]) => (
              <div key={category} className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 capitalize">
                  {category.replace(/([A-Z])/g, " $1")}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-800 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Spoken Languages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-slate-200/80">
          <div className="rounded-2xl bg-white border border-slate-200/90 p-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              <GraduationCap className="h-4 w-4 text-slate-500" />
              <span>Education</span>
            </div>
            <h3 className="text-base font-bold text-slate-900">
              BS Software Engineering
            </h3>
            <p className="text-xs text-slate-600 mt-1">Virtual University of Pakistan (VU)</p>
            <p className="text-xs font-mono text-slate-400 mt-1">2025 – 2029 (In Progress)</p>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200/90 p-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              <Languages className="h-4 w-4 text-slate-500" />
              <span>Spoken Languages</span>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex justify-between">
                <span className="font-medium">English</span>
                <span className="text-slate-400">Professional Working Proficiency</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Urdu</span>
                <span className="text-slate-400">Native</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Punjabi</span>
                <span className="text-slate-400">Native</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="bubble-hover-cta px-6 py-3 text-sm font-medium text-white inline-flex items-center gap-2"
          >
            <span className="relative z-10">Get in Touch with Fardeel</span>
            <ArrowRight className="relative z-10 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
