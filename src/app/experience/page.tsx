import React from "react";
import type { Metadata } from "next";
import { getExperience, getProfile } from "@/lib/data";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Experience & Career History | Fardeel Azhar",
  description:
    "Professional work history of Fardeel Azhar: Software Engineer at Dev Entity on 5M+ download Android e-commerce applications, and independent open-source engineering.",
};

export default function ExperiencePage() {
  const experiences = getExperience();
  const profile = getProfile();

  return (
    <div className="pt-28 sm:pt-36 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">
            <Sparkles className="h-3.5 w-3.5 text-emerald-500" />
            <span>02 — Career Timeline</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-slate-900 leading-tight mb-4">
            Experience &amp; Track Record
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Verified production software engineering impact on applications serving millions of users,
            combined with independent open-source libraries and automation pipelines.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm hover:border-slate-300 transition-colors"
            >
              {/* Top Meta Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold tracking-wider uppercase text-emerald-600">
                      {exp.company}
                    </span>
                    {exp.isCurrent && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-semibold">
                        Present Role
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-1">
                    {exp.role}
                  </h2>
                </div>

                <div className="flex flex-col sm:items-end text-xs text-slate-500 gap-1 font-mono">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-slate-400" />
                    <span>
                      {exp.startDate} — {exp.endDate}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-slate-400" />
                    <span>
                      {exp.location.city}, {exp.location.country} ({exp.location.workMode})
                    </span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                {exp.summary}
              </p>

              {/* Verified Achievements */}
              <div className="mb-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Verified Responsibilities &amp; Impact
                </h3>
                <ul className="space-y-2.5">
                  {exp.keyAchievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-mono text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education Card */}
        <div className="mt-16 pt-12 border-t border-slate-200/80">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
            <GraduationCap className="h-4 w-4 text-slate-500" />
            <span>Formal Education</span>
          </div>

          <div className="rounded-2xl bg-slate-50 border border-slate-200/90 p-6">
            {profile.education.map((edu, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-slate-600">{edu.institution}</p>
                  <p className="text-xs text-slate-400 mt-1">{edu.notes}</p>
                </div>
                <div className="text-xs font-mono text-slate-500 sm:text-right">
                  <span>{edu.period}</span>
                  <div className="text-[11px] text-emerald-600 font-semibold">{edu.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
