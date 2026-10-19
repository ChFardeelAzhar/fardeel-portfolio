"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FileText, ArrowUpRight } from "lucide-react";

export function FloatingResumeButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 250px
      if (window.scrollY > 250) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed right-5 sm:right-8 bottom-6 sm:bottom-8 z-40 transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <Link
        href="/resume"
        className="bubble-hover-cta group flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium tracking-tight text-white shadow-button hover:shadow-xl transition-all"
        aria-label="View or download resume"
      >
        <FileText className="h-4 w-4 text-emerald-400 group-hover:scale-110 transition-transform" />
        <span className="relative z-10">Resume</span>
        <ArrowUpRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
      </Link>
    </div>
  );
}
