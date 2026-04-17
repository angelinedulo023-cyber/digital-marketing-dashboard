import Link from "next/link";

const navLinks = [
  { label: "Overview", href: "#" },
  { label: "Analytics", href: "#analytics" },
  { label: "Campaigns", href: "#campaigns" },
  { label: "Reports", href: "#reports" },
];

export function TopNav() {
  return (
    <header className="border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-sky-500 text-white shadow-md shadow-sky-200/40">
            DM
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-sky-500">Digital marketing</p>
            <h1 className="text-lg font-semibold text-slate-950">Dashboard</h1>
          </div>
        </div>

        <nav className="hidden items-center gap-3 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-2xl px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden rounded-2xl bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200 md:inline-flex">
            Create report
          </button>
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
            AJ
          </div>
        </div>
      </div>
    </header>
  );
}
