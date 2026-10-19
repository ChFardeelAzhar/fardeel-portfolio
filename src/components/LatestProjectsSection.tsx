import React from "react";
import Link from "next/link";
import { Project } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";
import { ArrowRight, Sparkles } from "lucide-react";

interface LatestProjectsSectionProps {
  projects: Project[];
}

export function LatestProjectsSection({ projects }: LatestProjectsSectionProps) {
  const topProjects = projects.slice(0, 4);

  return (
    <section id="latest-projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">
              <Sparkles className="h-3.5 w-3.5 text-emerald-500" />
              <span>01 — Selected Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-slate-900 leading-tight">
              Latest Projects
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl leading-relaxed">
              Featured selection of production Android applications, open-source developer libraries,
              autonomous AI agents, and workflow systems.
            </p>
          </div>

          <Link
            href="/projects"
            className="group hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-emerald-600 transition-colors"
          >
            <span>View All 16 Projects</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {topProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} priority={idx < 2} />
          ))}
        </div>

        {/* Mobile View All CTA */}
        <div className="mt-10 sm:hidden flex justify-center">
          <Link
            href="/projects"
            className="bubble-hover-cta w-full px-6 py-3 text-sm font-medium text-white flex items-center justify-center gap-2 shadow-button"
          >
            <span className="relative z-10">View All 16 Projects</span>
            <ArrowRight className="relative z-10 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
