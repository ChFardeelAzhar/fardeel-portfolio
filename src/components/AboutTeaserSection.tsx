import React from "react";
import Link from "next/link";
import { ArrowRight, GraduationCap, MapPin, Sparkles, CheckCircle2 } from "lucide-react";

const SKILL_PILLS = [
  "Kotlin",
  "Jetpack Compose",
  "Clean Architecture",
  "Multi-Module (25+ Modules)",
  "Dagger Hilt",
  "Coroutines & StateFlow",
  "Apollo GraphQL",
  "Room DB",
  "CrewAI Multi-Agent Teams",
  "Antigravity CLI (agy)",
  "ADB Automation",
  "Python & n8n",
  "Gradle Plugins",
  "RudderStack Observability",
  "REST APIs",
  "Unit & UI Testing",
];

export function AboutTeaserSection() {
  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">
              <Sparkles className="h-3.5 w-3.5 text-emerald-500" />
              <span>03 — Engineering Profile</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 leading-tight mb-6">
              Engineering resilient Android apps at scale &amp; orchestrating autonomous AI.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                I am an Android Engineer focused on building robust, maintainable mobile applications
                with <strong className="text-slate-900 font-semibold">Kotlin</strong> and{" "}
                <strong className="text-slate-900 font-semibold">Jetpack Compose</strong>. My professional work
                spans multi-module production applications serving over{" "}
                <strong className="text-slate-900 font-semibold">5 million users</strong>, where I develop
                features across 25+ independent Gradle modules adhering to Clean Architecture.
              </p>
              <p>
                Alongside production Android development, I actively architect{" "}
                <strong className="text-slate-900 font-semibold">Agentic AI systems</strong>. Rather than
                treating AI as just another chat interface, I build autonomous multi-agent pipelines (such as
                my 7-agent ticket-to-PR crash debugger) that inspect codebases, execute terminal commands, run
                ADB test cycles, and generate verified pull requests.
              </p>
            </div>

            {/* Academic & Location details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-200/80">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-slate-100 text-slate-700 flex-shrink-0">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-900">BS Software Engineering</h4>
                  <p className="text-xs text-slate-500">Virtual University of Pakistan (VU)</p>
                  <p className="text-[11px] text-slate-400">2025 – 2029 (In Progress)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-slate-100 text-slate-700 flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-900">Location &amp; Availability</h4>
                  <p className="text-xs text-slate-500">Lahore, Pakistan (UTC+5)</p>
                  <p className="text-[11px] text-emerald-600 font-medium">Open to Global Remote Roles</p>
                </div>
              </div>
            </div>

            {/* Read More Link */}
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-emerald-600 transition-colors"
              >
                <span>Read Full Biography &amp; Philosophy</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Expertise Pills */}
          <div className="lg:col-span-5 rounded-3xl bg-slate-50 border border-slate-200/90 p-6 sm:p-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-4">
              Primary Technical Stack
            </h3>

            <div className="flex flex-wrap gap-2">
              {SKILL_PILLS.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs font-medium text-slate-700 shadow-sm hover:border-slate-400 hover:text-slate-950 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/80">
              <h4 className="text-xs font-semibold text-slate-900 mb-2">Verified Track Record</h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                  <span>5,000,000+ Google Play Downloads Contributed</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                  <span>46+ GitHub Stars on Compose Auto Shimmer</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                  <span>Published App on Google Play (CricScore)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
