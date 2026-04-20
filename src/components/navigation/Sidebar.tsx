import Link from "next/link";

const navItems = [
  { label: "Dashboard", href: "/" },
  { label: "Scheduling", href: "/scheduling" },
  { label: "Campaigns", href: "#campaigns" },
  { label: "Analytics", href: "#analytics" },
  { label: "Reports", href: "#reports" },
];

export function Sidebar() {
  return (
    <aside className="sticky top-6 space-y-6">
      <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm shadow-slate-200/20">
        <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Navigation</p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-950">Dashboard menu</h2>
      </div>

      <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm shadow-slate-200/20">
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block rounded-3xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="rounded-3xl border border-slate-200/70 bg-slate-50 p-6 shadow-sm shadow-slate-200/20">
        <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Campaign health</p>
        <div className="mt-4 space-y-3 text-sm text-slate-700">
          <p className="rounded-2xl bg-white p-3">Active campaigns: 4</p>
          <p className="rounded-2xl bg-white p-3">Page load: 98.6%</p>
          <p className="rounded-2xl bg-white p-3">Goal status: On track</p>
        </div>
      </div>
    </aside>
  );
}
