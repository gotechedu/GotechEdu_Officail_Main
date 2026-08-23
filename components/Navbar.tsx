"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Solutions", href: "/solution" },
  { name: "Learning Hub", href: "/learninghub" },
  { name: "Career", href: "/career" },
  { name: "Blog", href: "/blog" },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md transition-all shadow-2xs">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Interactive & Professional Logo */}
        <Link
          href="/"
          className="group relative flex items-center gap-3 transition-all duration-300 active:scale-95"
          aria-label="GotechEdu Home"
        >
          {/* Logo Glow Aura on Hover */}
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-blue-500/30 via-cyan-400/30 to-indigo-500/30 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />

          {/* Logo Image Container with Soft Shadow & Border */}
          <div className="relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center overflow-hidden rounded-full border border-blue-100 bg-white p-1 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-blue-300 group-hover:shadow-md">
            <Image
              src="/icons.png"
              alt="GotechEdu Logo"
              width={140}
              height={140}
              className="h-full w-full object-contain rounded-full transition-transform duration-300 group-hover:rotate-6"
              priority
            />
          </div>

          {/* Logo Brand Typography */}
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-heading text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                GOTECH<span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">EDU</span>
              </span>
            </div>
            <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.16em] text-slate-400 transition-colors group-hover:text-slate-600">
              IT Solutions & EdTech
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:gap-2 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${isActive
                    ? "text-blue-600 bg-blue-50/80 font-extrabold shadow-2xs"
                    : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                  }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-blue-600" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 active:translate-y-0"
          >
            <span>Get Started</span>
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="rounded-xl p-2.5 text-slate-700 hover:bg-slate-100 md:hidden focus:outline-none"
        >
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-6 py-6 md:hidden shadow-lg animate-fadeIn">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-xl px-4 py-2.5 text-base font-bold transition-colors ${isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3 text-sm font-bold text-white shadow-md shadow-blue-500/20"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
