import React from "react";
import Link from "next/link";
import { Profile, Project } from "@/lib/data";
import { HeroCardStack } from "./HeroCardStack";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ShoppingBag,
  ExternalLink,
  MapPin,
  Sparkles,
} from "lucide-react";

interface HeroProps {
  profile: Profile;
  featuredProjects: Project[];
}

export function Hero({ profile, featuredProjects }: HeroProps) {
  return (
    <section className="relative pt-24 sm:pt-32 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio & Identity */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status / Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/80 mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-slate-700">
                {profile.personal.location.workPreference}
              </span>
            </div>

            {/* Display Headings */}
            <h1 className="text-4xl xs:text-5xl sm:text-6xl font-medium tracking-tight text-slate-900 leading-[1.08] mb-2">
              {profile.personal.name}
            </h1>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl font-medium tracking-tight text-slate-600 leading-[1.1] mb-6">
              Android Engineer &amp; AI Automation
            </h2>

            {/* Intro Narrative */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              Specializing in <strong className="font-semibold text-slate-900">Kotlin</strong>,{" "}
              <strong className="font-semibold text-slate-900">Jetpack Compose</strong>, and{" "}
              <strong className="font-semibold text-slate-900">Clean Architecture</strong> with production
              experience on multi-module applications serving millions of users. Actively engineering practical{" "}
              <strong className="font-semibold text-slate-900">Agentic AI</strong> systems and developer workflows.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-10 w-full sm:w-auto">
              <Link
                href="/projects"
                className="bubble-hover-cta px-6 py-3 text-sm font-medium text-white flex items-center justify-center gap-2 shadow-button w-full sm:w-auto"
              >
                <span className="relative z-10">Explore Projects</span>
                <ArrowRight className="relative z-10 h-4 w-4 animate-wiggle-right" />
              </Link>

              <a
                href={profile.personal.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bubble-hover px-4 py-2.5 rounded-full border border-slate-300/80 bg-white text-xs sm:text-sm font-medium text-slate-700 hover:text-slate-950 flex items-center gap-2 transition-all w-full sm:w-auto justify-center"
              >
                <Github className="h-4 w-4 text-slate-800" />
                <span className="relative z-10">GitHub Profile</span>
              </a>

              <Link
                href="/contact"
                className="bubble-hover px-4 py-2.5 rounded-full border border-slate-300/80 bg-white text-xs sm:text-sm font-medium text-slate-700 hover:text-slate-950 flex items-center gap-2 transition-all w-full sm:w-auto justify-center"
              >
                <Mail className="h-4 w-4 text-slate-800" />
                <span className="relative z-10">Get in Touch</span>
              </Link>
            </div>

            {/* Social Links Row & Location */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200/80 w-full text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-slate-400" />
                <span>Lahore, Pakistan (UTC+5)</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={profile.personal.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-950 hover:text-white text-slate-700 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-3.5 w-3.5" />
                </a>

                <a
                  href={profile.personal.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full bg-slate-100 hover:bg-[#0a66c2] hover:text-white text-slate-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                </a>

                <a
                  href={profile.personal.contact.gumroad}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full bg-slate-100 hover:bg-[#ff90e8] hover:text-slate-950 text-slate-700 transition-colors"
                  aria-label="Gumroad Products"
                >
                  <ShoppingBag className="h-3.5 w-3.5" />
                </a>

                <a
                  href={`mailto:${profile.personal.contact.email}`}
                  className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-950 hover:text-white text-slate-700 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Card Stack */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center pt-4 lg:pt-0">
            <HeroCardStack projects={featuredProjects} />
          </div>
        </div>
      </div>
    </section>
  );
}
