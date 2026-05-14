"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/" },
  { label: "Scheduling", href: "/scheduling" },
  { label: "CRM", href: "/crm" },
  { label: "Campaigns", href: "#campaigns" },
  { label: "Analytics", href: "#analytics" },
  { label: "Reports", href: "#reports" },
];

export function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Mobile Sidebar Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed bottom-6 right-6 z-40 flex h-touch-lg w-touch-lg items-center justify-center rounded-full bg-sky-500 text-white shadow-lg hover:bg-sky-600 transition active:bg-sky-700"
        aria-label="Toggle sidebar"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Mobile Sidebar Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-30"
          onClick={closeSidebar}
        />
      )}

      {/* Mobile Sidebar Panel */}
      <aside
        className={`fixed left-0 top-0 h-screen w-72 bg-white shadow-xl lg:hidden z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col overflow-y-auto`}
      >
        {/* Sidebar Header */}
        <div className="border-b border-slate-200/80 p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-white text-sm font-semibold">
              DM
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-sky-500">Digital</p>
              <p className="text-sm font-semibold text-slate-950">Marketing</p>
            </div>
          </div>
          <button
            onClick={closeSidebar}
            className="h-touch w-touch flex items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 p-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeSidebar}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-950 transition active:bg-slate-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Sidebar Footer Stats */}
        <div className="border-t border-slate-200/80 p-4 space-y-3">
          <div className="rounded-lg bg-slate-50 p-3">
            <p className="text-xs uppercase tracking-wider text-slate-500">Active campaigns</p>
            <p className="text-lg font-semibold text-slate-950 mt-1">4</p>
          </div>
          <div className="rounded-lg bg-slate-50 p-3">
            <p className="text-xs uppercase tracking-wider text-slate-500">Goal status</p>
            <p className="text-lg font-semibold text-slate-950 mt-1">On track</p>
          </div>
        </div>
      </aside>
    </>
  );
}
