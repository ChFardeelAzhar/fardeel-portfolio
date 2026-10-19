import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/data";
import { ArrowUpRight, Github, ExternalLink, Star } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  // Extract primary metric display
  const primaryMetric =
    project.metrics.githubStars !== undefined
      ? `${project.metrics.githubStars} Stars`
      : project.metrics.downloads !== undefined
      ? project.metrics.downloads
      : project.metrics.architecture !== undefined
      ? project.metrics.architecture
      : project.metrics.workflowSpeed !== undefined
      ? project.metrics.workflowSpeed
      : project.metrics.status !== undefined
      ? project.metrics.status
      : null;

  return (
    <article className="group relative rounded-[22px] bg-slate-900 border border-slate-800/90 p-4 sm:p-5 flex flex-col justify-between overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.15)] hover:border-slate-700 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4)] transition-all duration-300">
      {/* Top Header Row */}
      <div className="flex items-center justify-between gap-2 z-10">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800/90 border border-slate-700/80 text-[11px] font-medium text-slate-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          {project.category}
        </span>

        {primaryMetric && (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-800/60 text-[10px] font-mono text-slate-400 border border-slate-700/40">
            {project.metrics.githubStars !== undefined && (
              <Star className="h-2.5 w-2.5 text-amber-400 fill-amber-400" />
            )}
            {primaryMetric}
          </span>
        )}
      </div>

      {/* Main Image Viewport (12:10 Aspect Ratio) */}
      <Link
        href={`/projects/${project.id}`}
        className="relative block w-full aspect-[12/10] my-3 rounded-xl overflow-hidden bg-slate-950 border border-slate-800/80 focus:outline-none focus:ring-2 focus:ring-slate-400"
        tabIndex={-1}
      >
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-contain p-2 group-hover:scale-105 transition-transform duration-500 ease-out"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
      </Link>

      {/* Bottom Content Area */}
      <div className="flex flex-col gap-2 z-10 pt-1">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <Link
              href={`/projects/${project.id}`}
              className="group-hover:text-emerald-400 transition-colors"
            >
              <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight leading-snug">
                {project.name}
              </h3>
            </Link>
            <p className="text-xs text-slate-400 mt-0.5 line-clamp-2 leading-relaxed">
              {project.tagline}
            </p>
          </div>

          <Link
            href={`/projects/${project.id}`}
            className="p-2 rounded-full bg-slate-800 hover:bg-white text-slate-300 hover:text-slate-950 transition-colors flex-shrink-0"
            aria-label={`View details for ${project.name}`}
          >
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md bg-slate-800/60 text-[10px] font-mono text-slate-300 border border-slate-700/50"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-500">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
