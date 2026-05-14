import Link from "next/link";

const navItems = [
  { label: "Dashboard", href: "/" },
  { label: "Scheduling", href: "/scheduling" },
  { label: "CRM", href: "/crm" },
  { label: "Campaigns", href: "#campaigns" },
  { label: "Analytics", href: "#analytics" },
  { label: "Reports", href: "#reports" },
];

export function Sidebar() {
  return (
    <aside className="sticky top-6 space-y-4 lg:space-y-6">
      {/* Navigation Header */}
      <div className="rounded-2xl lg:rounded-3xl border border-slate-200/70 bg-white p-4 lg:p-6 shadow-sm shadow-slate-200/20">
        <p className="text-xs uppercase tracking-wider lg:text-sm lg:tracking-[0.18em] text-slate-500">Navigation</p>
        <h2 className="mt-2 text-xl font-semibold text-slate-950 lg:mt-3 lg:text-2xl">Dashboard menu</h2>
      </div>

      {/* Navigation Links */}
      <div className="rounded-2xl lg:rounded-3xl border border-slate-200/70 bg-white p-4 lg:p-6 shadow-sm shadow-slate-200/20">
        <nav className="space-y-1 lg:space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block rounded-lg lg:rounded-3xl px-3 py-2 lg:px-4 lg:py-3 text-xs font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 active:bg-slate-200 lg:text-sm min-h-touch lg:min-h-auto"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Campaign Health */}
      <div className="rounded-2xl lg:rounded-3xl border border-slate-200/70 bg-slate-50 p-4 lg:p-6 shadow-sm shadow-slate-200/20">
        <p className="text-xs uppercase tracking-wider lg:text-sm lg:tracking-[0.18em] text-slate-500">Campaign health</p>
        <div className="mt-3 lg:mt-4 space-y-2 lg:space-y-3 text-xs text-slate-700 lg:text-sm">
          <p className="rounded-lg lg:rounded-2xl bg-white p-2 lg:p-3">Active campaigns: 4</p>
          <p className="rounded-lg lg:rounded-2xl bg-white p-2 lg:p-3">Page load: 98.6%</p>
          <p className="rounded-lg lg:rounded-2xl bg-white p-2 lg:p-3">Goal status: On track</p>
        </div>
      </div>
    </aside>
  );
}
