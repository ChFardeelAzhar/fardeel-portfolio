import React from "react";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail, ShoppingBag } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-24 pb-16 overflow-hidden bg-white border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Animated Verb Cycler Heading */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">
            04 — Work With Me
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 leading-[1.1]">
            Let&apos;s{" "}
            <span className="relative inline-block h-[1.15em] overflow-hidden align-top text-slate-950 font-bold min-w-[200px] sm:min-w-[260px]">
              <span className="absolute inset-0 flex items-center animate-word-cycle-1 text-emerald-600">
                build
              </span>
              <span className="absolute inset-0 flex items-center animate-word-cycle-2 text-indigo-600">
                engineer
              </span>
              <span className="absolute inset-0 flex items-center animate-word-cycle-3 text-cyan-600">
                automate
              </span>
              <span className="absolute inset-0 flex items-center animate-word-cycle-4 text-orange-600">
                scale
              </span>
            </span>
            <br />
            incredible software together.
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-4 max-w-xl leading-relaxed">
            Whether you need a high-performance Android application, clean architecture migration,
            or an autonomous AI engineering workflow, my inbox is open.
          </p>

          {/* Contact Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <Link
              href="/contact"
              className="bubble-hover-cta px-6 py-3 text-sm font-medium text-white flex items-center gap-2 shadow-button"
            >
              <span className="relative z-10">Start a Conversation</span>
              <ArrowUpRight className="relative z-10 h-4 w-4" />
            </Link>

            <a
              href="mailto:fardeelazhar82@gmail.com"
              className="bubble-hover px-5 py-3 rounded-full border border-slate-200 bg-white text-sm font-medium text-slate-700 hover:text-slate-950 flex items-center gap-2"
            >
              <Mail className="h-4 w-4 text-slate-800" />
              <span className="relative z-10">fardeelazhar82@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Navigation & Social Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-12 border-t border-slate-100">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <Link href="/projects" className="hover:text-slate-950 transition-colors">
                  All Projects (16)
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-slate-950 transition-colors">
                  Career Experience
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-slate-950 transition-colors">
                  About &amp; Philosophy
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-slate-950 transition-colors">
                  Resume / CV
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              Core Categories
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <Link href="/projects?category=android" className="hover:text-slate-950 transition-colors">
                  Android Engineering
                </Link>
              </li>
              <li>
                <Link href="/projects?category=open-source" className="hover:text-slate-950 transition-colors">
                  Open-Source Libraries
                </Link>
              </li>
              <li>
                <Link href="/projects?category=agentic-ai" className="hover:text-slate-950 transition-colors">
                  Agentic AI &amp; Dev Tools
                </Link>
              </li>
              <li>
                <Link href="/projects?category=desktop-pos" className="hover:text-slate-950 transition-colors">
                  Desktop Software &amp; POS
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              Connect
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <a
                  href="https://github.com/ChFardeelAzhar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-slate-950 transition-colors"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/fardeel-azhar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-slate-950 transition-colors"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://fardeel.gumroad.com/l/duvlgm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-slate-950 transition-colors"
                >
                  <ShoppingBag className="h-3.5 w-3.5" />
                  <span>Gumroad</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:fardeelazhar82@gmail.com"
                  className="flex items-center gap-1.5 hover:text-slate-950 transition-colors"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Direct Email</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              Status
            </h4>
            <div className="space-y-2 text-xs text-slate-600">
              <p className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-medium text-slate-800">Available for hire</span>
              </p>
              <p className="text-slate-500">
                Lahore, Pakistan (UTC+5)
                <br />
                International Remote
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-100 text-xs text-slate-400">
          <p>© {currentYear} Fardeel Azhar. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Designed with reference benchmark fidelity. Built with Next.js 15, React 19 &amp; Tailwind.
          </p>
        </div>
      </div>

      {/* Massive Brand Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none text-center pt-8 overflow-hidden"
      >
        <span className="text-[12vw] font-black tracking-tighter text-slate-100/80 leading-none block uppercase">
          BEYOND LIMITS
        </span>
      </div>
    </footer>
  );
}
