"use client";

import Link from "next/link";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { label: "Dashboard", href: "/" },
  { label: "Scheduling", href: "/scheduling" },
  { label: "CRM", href: "/crm" },
  { label: "Analytics", href: "#analytics" },
  { label: "Reports", href: "#reports" },
];

export function TopNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-4 sm:px-6">
        <div className="flex items-center gap-2 min-w-0 sm:gap-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-500 text-white font-bold text-sm shadow-md shadow-sky-200/40 sm:h-12 sm:w-12">
            DM
          </div>
          <div className="hidden min-w-0 sm:block">
            <p className="text-xs uppercase tracking-wider text-sky-500 sm:text-sm sm:tracking-[0.28em]">Digital marketing</p>
            <h1 className="text-base font-semibold text-slate-950 sm:text-lg">Dashboard</h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-3 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 active:bg-slate-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions & Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="hidden rounded-lg bg-sky-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-sky-600 active:bg-sky-700 md:inline-flex h-touch items-center justify-center">
            Create report
          </button>
          <div className="flex h-touch w-touch items-center justify-center flex-shrink-0 rounded-full bg-slate-900 text-xs font-semibold text-white sm:h-11 sm:w-11 sm:text-sm">
            AJ
          </div>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
