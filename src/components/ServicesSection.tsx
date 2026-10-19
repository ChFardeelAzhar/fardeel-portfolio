import React from "react";
import {
  Smartphone,
  Layers,
  Bot,
  Monitor,
  Check,
  Code2,
  Cpu,
  Workflow,
  Sparkles,
} from "lucide-react";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  points: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: "android-compose",
    number: "01",
    title: "Modern Android UI & Jetpack Compose",
    description:
      "Engineering responsive, declarative Android user interfaces with fluid animations, custom canvas shaders, and Material 3 design systems.",
    icon: Smartphone,
    points: [
      "Custom Compose Shimmer & skeleton animations",
      "Edge-to-edge layouts & predictive back gestures",
      "Strict state hoisting & unidirectional data flow (UDF)",
      "Zero layout drift across foldables, tablets, and phones",
    ],
  },
  {
    id: "clean-architecture",
    number: "02",
    title: "Multi-Module Architecture & Scale",
    description:
      "Structuring resilient production codebases across 25+ independent Gradle modules adhering to Clean Architecture principles.",
    icon: Layers,
    points: [
      "Dagger Hilt dependency injection graphs",
      "Apollo GraphQL caching & payload optimization",
      "Room DB offline-first persistence & migrations",
      "Feature flags, A/B rollout & RudderStack observability",
    ],
  },
  {
    id: "agentic-ai",
    number: "03",
    title: "Agentic AI & Engineering Automation",
    description:
      "Architecting autonomous multi-agent systems and software developer workflows that debug code, verify builds, and open pull requests.",
    icon: Bot,
    points: [
      "CrewAI multi-agent software engineering pipelines",
      "Autonomous ticket-to-PR code repair via Antigravity CLI",
      "n8n & Python workflow orchestration and scraping bots",
      "Automated verification on live Android devices via ADB",
    ],
  },
  {
    id: "systems-software",
    number: "04",
    title: "Desktop Systems & Embedded Android",
    description:
      "Developing high-reliability desktop management software and specialized hardware-integrated Android applications.",
    icon: Monitor,
    points: [
      "High-density desktop Point-of-Sale (POS) software",
      "Bluetooth & USB thermal receipt printer protocols",
      "Real-time sports and IoT telemetry processing",
      "Strict memory profiling and battery footprint minimization",
    ],
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 relative bg-slate-50/60 border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">
            <Sparkles className="h-3.5 w-3.5 text-emerald-500" />
            <span>02 — What I Do</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-slate-900 leading-tight">
            Services &amp; Specializations
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl leading-relaxed">
            Core engineering capabilities developed through production application development,
            open-source library authoring, and practical AI orchestration.
          </p>
        </div>

        {/* 2x2 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] hover:border-slate-300 hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Top Row: Icon + Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-12 w-12 rounded-2xl bg-slate-950 flex items-center justify-center text-white shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-emerald-400" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {service.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Checklist Points */}
                <ul className="space-y-2.5 pt-4 border-t border-slate-100">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600">
                      <div className="mt-0.5 h-4 w-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                        <Check className="h-2.5 w-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
