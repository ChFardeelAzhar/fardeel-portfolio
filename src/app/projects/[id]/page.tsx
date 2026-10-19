import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectById } from "@/lib/data";
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  Play,
  ShoppingBag,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Star,
} from "lucide-react";

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({
    id: p.id,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = getProjectById(resolvedParams.id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.name} | Fardeel Azhar`,
    description: project.tagline,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const resolvedParams = await params;
  const project = getProjectById(resolvedParams.id);

  if (!project) {
    notFound();
  }

  const allProjects = getAllProjects();
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextProject =
    allProjects[(currentIndex + 1) % allProjects.length];
  const prevProject =
    allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];

  return (
    <article className="pt-28 sm:pt-36 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Back Navigation */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Hero Section of Detail */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-800 border border-slate-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {project.category}
            </span>

            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-50 text-xs font-mono text-slate-600 border border-slate-200/80">
              <ShieldCheck className="h-3 w-3 text-slate-400" />
              {project.confidentiality}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-slate-900 leading-tight mb-3">
            {project.name}
          </h1>
          <p className="text-base sm:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl">
            {project.tagline}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 mt-6">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bubble-hover-cta px-5 py-2.5 text-xs sm:text-sm font-medium text-white flex items-center gap-2"
              >
                <Github className="relative z-10 h-4 w-4" />
                <span className="relative z-10">View Repository</span>
                <ArrowUpRight className="relative z-10 h-3.5 w-3.5 text-slate-300" />
              </a>
            )}

            {project.links.playStore && (
              <a
                href={project.links.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="bubble-hover px-5 py-2.5 rounded-full border border-slate-300 bg-white text-xs sm:text-sm font-medium text-slate-800 hover:text-slate-950 flex items-center gap-2"
              >
                <Play className="h-4 w-4 text-emerald-600 fill-emerald-600" />
                <span className="relative z-10">Google Play Store</span>
              </a>
            )}

            {project.links.gumroad && (
              <a
                href={project.links.gumroad}
                target="_blank"
                rel="noopener noreferrer"
                className="bubble-hover px-5 py-2.5 rounded-full border border-slate-300 bg-white text-xs sm:text-sm font-medium text-slate-800 hover:text-slate-950 flex items-center gap-2"
              >
                <ShoppingBag className="h-4 w-4 text-pink-600" />
                <span className="relative z-10">Gumroad Release</span>
              </a>
            )}

            {project.links.liveDemo && (
              <a
                href={project.links.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="bubble-hover px-5 py-2.5 rounded-full border border-slate-300 bg-white text-xs sm:text-sm font-medium text-slate-800 hover:text-slate-950 flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4 text-slate-600" />
                <span className="relative z-10">Live Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Big High-Fidelity Preview (12:10 Aspect Ratio) */}
        <div className="relative w-full aspect-[12/10] rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] mb-12">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-contain p-4 sm:p-8"
            priority
            sizes="(max-width: 1024px) 100vw, 1000px"
          />
        </div>

        {/* Content Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
                Overview &amp; Architecture
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {project.description}
              </p>
            </section>

            {/* Verified Implementation Details */}
            {project.verifiedDetails && project.verifiedDetails.length > 0 && (
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
                  Verified Technical Highlights
                </h2>
                <ul className="space-y-3">
                  {project.verifiedDetails.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-slate-700 bg-slate-50/80 border border-slate-200/80 p-3.5 rounded-xl"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sidebar Column */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Metrics Widget */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200/90 p-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <Cpu className="h-3.5 w-3.5 text-slate-500" />
                <span>Key Metrics</span>
              </h3>
              <div className="space-y-3">
                {Object.entries(project.metrics).map(([key, val]) => (
                  <div
                    key={key}
                    className="flex items-center justify-between py-1.5 border-b border-slate-200/60 last:border-0"
                  >
                    <span className="text-xs text-slate-500 capitalize">
                      {key.replace(/([A-Z])/g, " $1")}
                    </span>
                    <span className="text-xs font-semibold text-slate-900 font-mono">
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Widget */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200/90 p-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <Layers className="h-3.5 w-3.5 text-slate-500" />
                <span>Technologies</span>
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-mono text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Prev / Next Project Navigation Footer */}
        <div className="mt-16 pt-8 border-t border-slate-200/80 flex items-center justify-between">
          <Link
            href={`/projects/${prevProject.id}`}
            className="group flex flex-col items-start"
          >
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <ArrowLeft className="h-3 w-3 group-hover:-translate-x-1 transition-transform" />
              Previous Project
            </span>
            <span className="text-sm font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors">
              {prevProject.name}
            </span>
          </Link>

          <Link
            href={`/projects/${nextProject.id}`}
            className="group flex flex-col items-end text-right"
          >
            <span className="text-xs text-slate-400 flex items-center gap-1">
              Next Project
              <ArrowUpRight className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
            <span className="text-sm font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors">
              {nextProject.name}
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
