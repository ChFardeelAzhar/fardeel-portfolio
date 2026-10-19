"use client";

import React, { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  ShoppingBag,
  ArrowUpRight,
  Copy,
  Check,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const email = "fardeelazhar82@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">
            <Sparkles className="h-3.5 w-3.5 text-emerald-500" />
            <span>05 — Get In Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-slate-900 leading-tight mb-4">
            Contact &amp; Collaboration
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Interested in discussing full-time Android engineering opportunities, Jetpack Compose
            consulting, or autonomous AI agent developer workflows? Reach out directly.
          </p>
        </div>

        {/* Primary Contact Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {/* Email Card */}
          <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-slate-300 transition-colors">
            <div>
              <div className="h-12 w-12 rounded-2xl bg-slate-950 text-white flex items-center justify-center mb-6">
                <Mail className="h-6 w-6 text-emerald-400" />
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-1">Direct Email</h2>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Direct channel for job offers, consulting, and contract inquiries.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-xs font-mono text-slate-800 truncate mr-2">
                  {email}
                </span>
                <button
                  onClick={copyEmail}
                  type="button"
                  className="p-1.5 rounded-lg hover:bg-white text-slate-500 hover:text-slate-900 transition-colors flex-shrink-0"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-emerald-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              <a
                href={`mailto:${email}`}
                className="w-full bubble-hover-cta px-4 py-2.5 text-xs font-medium text-white flex items-center justify-center gap-2"
              >
                <span className="relative z-10">Open Mail Client</span>
                <ArrowUpRight className="relative z-10 h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-slate-300 transition-colors">
            <div>
              <div className="h-12 w-12 rounded-2xl bg-[#0a66c2] text-white flex items-center justify-center mb-6">
                <Linkedin className="h-6 w-6" />
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-1">LinkedIn Network</h2>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Connect professionally, review endorsements, and discuss team openings.
              </p>
            </div>

            <a
              href="https://linkedin.com/in/fardeel-azhar/"
              target="_blank"
              rel="noopener noreferrer"
              className="bubble-hover w-full px-4 py-2.5 rounded-full border border-slate-300 bg-white text-xs font-semibold text-slate-800 hover:text-slate-950 flex items-center justify-center gap-2"
            >
              <span className="relative z-10">linkedin.com/in/fardeel-azhar</span>
              <ArrowUpRight className="relative z-10 h-3.5 w-3.5" />
            </a>
          </div>

          {/* GitHub Card */}
          <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-slate-300 transition-colors">
            <div>
              <div className="h-12 w-12 rounded-2xl bg-slate-950 text-white flex items-center justify-center mb-6">
                <Github className="h-6 w-6" />
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-1">GitHub Repositories</h2>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Audit open-source Compose libraries, sample repos, and code commits.
              </p>
            </div>

            <a
              href="https://github.com/ChFardeelAzhar"
              target="_blank"
              rel="noopener noreferrer"
              className="bubble-hover w-full px-4 py-2.5 rounded-full border border-slate-300 bg-white text-xs font-semibold text-slate-800 hover:text-slate-950 flex items-center justify-center gap-2"
            >
              <span className="relative z-10">github.com/ChFardeelAzhar</span>
              <ArrowUpRight className="relative z-10 h-3.5 w-3.5" />
            </a>
          </div>

          {/* Gumroad Products Card */}
          <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-slate-300 transition-colors">
            <div>
              <div className="h-12 w-12 rounded-2xl bg-[#ff90e8] text-slate-950 flex items-center justify-center mb-6">
                <ShoppingBag className="h-6 w-6" />
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-1">Developer Products</h2>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Explore published developer kits, guides, and commercial software releases.
              </p>
            </div>

            <a
              href="https://fardeel.gumroad.com/l/duvlgm"
              target="_blank"
              rel="noopener noreferrer"
              className="bubble-hover w-full px-4 py-2.5 rounded-full border border-slate-300 bg-white text-xs font-semibold text-slate-800 hover:text-slate-950 flex items-center justify-center gap-2"
            >
              <span className="relative z-10">fardeel.gumroad.com</span>
              <ArrowUpRight className="relative z-10 h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Status / Working Hours Banner */}
        <div className="rounded-3xl bg-slate-50 border border-slate-200/90 p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700">
              <MapPin className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Location</h3>
              <p className="text-sm font-semibold text-slate-900 mt-0.5">Lahore, Pakistan</p>
              <p className="text-xs text-slate-500">UTC+5 Timezone</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700">
              <Clock className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Response SLA</h3>
              <p className="text-sm font-semibold text-slate-900 mt-0.5">Within 24 Hours</p>
              <p className="text-xs text-slate-500">Monday through Saturday</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-white border border-slate-200 text-emerald-600">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Preference</h3>
              <p className="text-sm font-semibold text-slate-900 mt-0.5">Global Remote Roles</p>
              <p className="text-xs text-emerald-600 font-medium">Actively interviewing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
