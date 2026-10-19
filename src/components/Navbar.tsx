"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
        document.body.setAttribute("data-scrolled", "down");
      } else {
        setScrolled(false);
        document.body.setAttribute("data-scrolled", "up");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    document.body.setAttribute("data-mobile-menu", "closed");
  }, [pathname]);

  const toggleMobileMenu = () => {
    const nextState = !mobileMenuOpen;
    setMobileMenuOpen(nextState);
    document.body.setAttribute(
      "data-mobile-menu",
      nextState ? "open" : "closed"
    );
  };

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-50 flex flex-col items-center px-4 pointer-events-none">
      {/* Floating Pill Nav */}
      <nav
        aria-label="Main Navigation"
        className="pointer-events-auto flex items-center justify-between gap-1 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] transition-all duration-300 hover:border-slate-300"
      >
        {/* Brand / Monogram */}
        <Link
          href="/"
          className="flex items-center gap-2 group pr-1 sm:pr-2"
          aria-label="Fardeel Azhar Home"
        >
          <div className="h-7 w-7 rounded-full bg-slate-950 text-white font-semibold text-xs flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            FA
          </div>
          <span className="text-xs sm:text-sm font-medium text-slate-900 tracking-tight group-hover:text-slate-700 transition-colors">
            Fardeel Azhar
          </span>
        </Link>

        {/* Separator */}
        <div className="h-4 w-[1px] bg-slate-200 mx-1 hidden md:block" />

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`bubble-hover px-3 py-1.5 text-xs font-medium tracking-tight transition-colors ${
                    isActive
                      ? "text-slate-950 font-semibold active"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-1">
                    {item.label}
                    {isActive && (
                      <span className="h-1 w-1 rounded-full bg-slate-950 inline-block" />
                    )}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right CTA on Desktop */}
        <div className="hidden md:flex items-center pl-1">
          <Link
            href="/contact"
            className="bubble-hover-cta px-3.5 py-1.5 text-xs font-medium text-white flex items-center gap-1.5"
          >
            <span className="relative z-10">Hire Me</span>
            <ArrowUpRight className="relative z-10 h-3 w-3 text-slate-300" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMobileMenu}
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          className="pointer-events-auto md:hidden p-1.5 rounded-full text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors focus:outline-none"
        >
          {mobileMenuOpen ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </button>
      </nav>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden mt-2 w-full max-w-xs rounded-2xl bg-white/95 backdrop-blur-lg border border-slate-200/90 shadow-xl p-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-2 text-sm rounded-xl transition-colors ${
                      isActive
                        ? "bg-slate-100 text-slate-950 font-semibold"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-950" />
                    )}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2 border-t border-slate-100 mt-1">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bubble-hover-cta px-4 py-2 text-xs font-medium text-white flex items-center justify-center gap-1.5"
              >
                <span className="relative z-10">Get in Touch</span>
                <ArrowUpRight className="relative z-10 h-3.5 w-3.5 text-slate-300" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
