"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/data";
import { ArrowUpRight, Sparkles, Layers } from "lucide-react";

interface HeroCardStackProps {
  projects: Project[];
}

export function HeroCardStack({ projects }: HeroCardStackProps) {
  const topProjects = projects.slice(0, 4);
  const [activeIndex, setActiveIndex] = useState(0);

  const cycleCard = () => {
    setActiveIndex((prev) => (prev + 1) % topProjects.length);
  };

  return (
    <div className="relative w-full max-w-md lg:max-w-lg mx-auto aspect-[12/10] flex items-center justify-center select-none py-4">
      {topProjects.map((project, idx) => {
        // Calculate offset position relative to active index
        const position = (idx - activeIndex + topProjects.length) % topProjects.length;
        const isFront = position === 0;

        // Custom stack transform values matching the reference's natural card pile
        let transformStyles = "";
        let zIndex = 10;
        let opacity = 1;

        if (position === 0) {
          transformStyles = "rotate-[-2deg] translate-x-0 translate-y-0 scale-100";
          zIndex = 40;
          opacity = 1;
        } else if (position === 1) {
          transformStyles = "rotate-[4deg] translate-x-3 translate-y-2 scale-[0.96]";
          zIndex = 30;
          opacity = 0.9;
        } else if (position === 2) {
          transformStyles = "rotate-[-5deg] -translate-x-3 translate-y-4 scale-[0.92]";
          zIndex = 20;
          opacity = 0.75;
        } else {
          transformStyles = "rotate-[7deg] translate-x-4 translate-y-6 scale-[0.88]";
          zIndex = 10;
          opacity = 0.6;
        }

        return (
          <div
            key={project.id}
            onClick={cycleCard}
            style={{ zIndex }}
            className={`absolute inset-0 cursor-pointer transition-all duration-500 ease-out transform ${transformStyles}`}
            title="Click to shuffle card stack"
          >
            <div className="group relative w-full h-full rounded-[22px] bg-slate-900 border border-slate-700/60 p-3 sm:p-4 flex flex-col justify-between overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.35)] hover:border-slate-500/80 transition-colors">
              {/* Top Bar inside card */}
              <div className="relative z-10 flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800/80 backdrop-blur-md border border-slate-700/60 text-[10px] sm:text-xs font-medium text-slate-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {project.category}
                </span>

                <div className="flex items-center gap-1 text-[11px] text-slate-400 font-mono">
                  <span>
                    0{idx + 1}/0{topProjects.length}
                  </span>
                </div>
              </div>

              {/* Center Image preview */}
              <div className="relative flex-1 w-full my-2 rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center border border-slate-800/80">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 90vw, 450px"
                  priority={idx === 0}
                />
              </div>

              {/* Bottom Card Info */}
              <div className="relative z-10 flex items-center justify-between gap-2 pt-1 border-t border-slate-800/80">
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-sm font-semibold text-white tracking-tight truncate">
                    {project.name}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-slate-400 truncate">
                    {project.tagline}
                  </p>
                </div>

                <Link
                  href={`/projects/${project.id}`}
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-slate-950 transition-colors flex-shrink-0"
                  aria-label={`View details for ${project.name}`}
                >
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        );
      })}

      {/* Floating shuffle badge indicator */}
      <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 text-[10px] font-medium text-slate-600 shadow-sm pointer-events-none">
        <Layers className="h-3 w-3 text-slate-500" />
        <span>Click cards to shuffle stack</span>
      </div>
    </div>
  );
}
