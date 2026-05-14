"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Dashboard", href: "/" },
  { label: "Scheduling", href: "/scheduling" },
  { label: "CRM", href: "/crm" },
  { label: "Analytics", href: "#analytics" },
  { label: "Reports", href: "#reports" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Mobile Menu Button - visible only on mobile */}
      <button
        onClick={toggleMenu}
        className="md:hidden inline-flex h-touch w-touch items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 transition"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 top-16 bg-black/50 md:hidden z-30"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Panel */}
      <nav
        className={`absolute top-16 left-0 right-0 bg-white border-b border-slate-200/80 shadow-lg md:hidden z-40 transition-all duration-300 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 p-4">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-950 transition active:bg-slate-200"
            >
              {item.label}
            </Link>
          ))}
          <button className="w-full mt-2 rounded-lg bg-sky-500 px-4 py-3 text-sm font-medium text-white hover:bg-sky-600 transition active:bg-sky-700">
            Create report
          </button>
        </div>
      </nav>
    </>
  );
}
