import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getProfile, getExperience, getFeaturedProjects } from "@/lib/data";
import {
  Download,
  Printer,
  Sparkles,
  ExternalLink,
  MapPin,
  Mail,
  Github,
  Linkedin,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Resume & CV | Fardeel Azhar",
  description:
    "Curriculum Vitae of Fardeel Azhar — Android Engineer (Kotlin, Jetpack Compose, Clean Architecture) & AI Automation Specialist.",
};

export default function ResumePage() {
  const profile = getProfile();
  const experiences = getExperience();
  const featured = getFeaturedProjects().slice(0, 3);

  return (
    <div className="pt-28 sm:pt-36 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Top Actions Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-1">
              <Sparkles className="h-3.5 w-3.5 text-emerald-500" />
              <span>Curriculum Vitae</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Fardeel Azhar — Resume
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href="/assets/Fardeel_Azhar_Android_CV.pdf"
              download="Fardeel_Azhar_Android_CV.pdf"
              className="bubble-hover-cta px-4 py-2 text-xs font-medium text-white flex items-center gap-1.5 shadow-sm"
            >
              <Download className="relative z-10 h-3.5 w-3.5" />
              <span className="relative z-10">Android CV (PDF)</span>
            </a>

            <a
              href="/assets/Fardeel_Azhar_Automation_CV.pdf"
              download="Fardeel_Azhar_Automation_CV.pdf"
              className="bubble-hover px-4 py-2 rounded-full border border-slate-300 bg-white text-xs font-medium text-slate-800 hover:text-slate-950 flex items-center gap-1.5"
            >
              <Download className="relative z-10 h-3.5 w-3.5 text-slate-500" />
              <span className="relative z-10">Automation CV (PDF)</span>
            </a>
          </div>
        </div>

        {/* Paper-styled Resume Container */}
        <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-12 shadow-sm space-y-10">
          {/* Resume Header */}
          <div className="pb-8 border-b border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              {profile.personal.name}
            </h2>
            <p className="text-base font-semibold text-emerald-700 mt-1">
              {profile.positioning.primaryRole} &bull; {profile.positioning.emergingExpertise}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mt-4 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                {profile.personal.location.city}, {profile.personal.location.country}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="h-3.5 w-3.5" />
                {profile.personal.contact.email}
              </span>
              <a
                href={profile.personal.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-slate-900"
              >
                <Github className="h-3.5 w-3.5" />
                GitHub
              </a>
              <a
                href={profile.personal.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-slate-900"
              >
                <Linkedin className="h-3.5 w-3.5" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <section>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Professional Summary
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {profile.personal.shortBio}
            </p>
          </section>

          {/* Technical Skills */}
          <section>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Technical Core Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="font-bold text-slate-900 block mb-1">
                  Android &amp; Architecture:
                </span>
                <span className="text-slate-600 leading-relaxed">
                  Kotlin, Jetpack Compose, Clean Architecture, Multi-Module (25+ Modules), MVVM, Dagger Hilt, Coroutines, StateFlow, Room DB, Navigation Component.
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="font-bold text-slate-900 block mb-1">
                  Agentic AI &amp; Automation:
                </span>
                <span className="text-slate-600 leading-relaxed">
                  CrewAI Multi-Agent Teams, Antigravity CLI (agy), Ticket-to-PR Pipelines, ADB Device Automation, Python, n8n, Puppeteer, LLM Prompting.
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="font-bold text-slate-900 block mb-1">
                  APIs &amp; Observability:
                </span>
                <span className="text-slate-600 leading-relaxed">
                  Apollo GraphQL Client, RESTful APIs, Retrofit, OkHttp, RudderStack Analytics, Crash Reporting, Feature Flagging Infrastructure.
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="font-bold text-slate-900 block mb-1">
                  Tooling &amp; Practices:
                </span>
                <span className="text-slate-600 leading-relaxed">
                  Git, GitHub Actions CI/CD, Gradle Plugins &amp; Build Optimization, Android Studio, ADB, Linux, Material 3 Design Systems.
                </span>
              </div>
            </div>
          </section>

          {/* Professional Work Experience */}
          <section>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Work History
            </h3>
            <div className="space-y-8">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative pl-4 border-l-2 border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <div>
                      <h4 className="text-base font-bold text-slate-900">
                        {exp.role}
                      </h4>
                      <div className="text-xs font-semibold text-emerald-700">
                        {exp.company} &bull; {exp.location.city}, {exp.location.country} ({exp.location.workMode})
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-500">
                      {exp.startDate} — {exp.endDate}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 mb-3">{exp.summary}</p>

                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {exp.keyAchievements.slice(0, 5).map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-1.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Key Open-Source & Projects */}
          <section>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Selected Featured Projects
            </h3>
            <div className="space-y-4">
              {featured.map((p) => (
                <div key={p.id} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900">{p.name}</h4>
                    <span className="text-[11px] font-mono text-emerald-600 font-semibold">
                      {p.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">{p.tagline}</p>
                  <p className="text-xs text-slate-500 mt-1">{p.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Education
            </h3>
            {profile.education.map((edu, idx) => (
              <div key={idx} className="flex items-start justify-between text-xs">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{edu.degree}</h4>
                  <p className="text-slate-600">{edu.institution}</p>
                  <p className="text-slate-400 mt-0.5">{edu.notes}</p>
                </div>
                <div className="text-right font-mono text-slate-500">
                  <span>{edu.period}</span>
                  <div className="text-emerald-600 font-semibold">{edu.status}</div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
