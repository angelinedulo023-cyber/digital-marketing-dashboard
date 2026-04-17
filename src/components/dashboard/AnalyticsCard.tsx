import { ReactNode } from "react";

interface AnalyticsCardProps {
  title: string;
  value: string;
  delta: string;
  children?: ReactNode;
}

export function AnalyticsCard({ title, value, delta, children }: AnalyticsCardProps) {
  const isPositive = !delta.trim().startsWith("-");
  const deltaClasses = isPositive
    ? "rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700"
    : "rounded-full bg-rose-100 px-3 py-1 text-sm font-medium text-rose-700";

  return (
    <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm shadow-slate-200/20">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{title}</h3>
          <p className="mt-3 text-3xl font-semibold text-slate-950">{value}</p>
        </div>
        <span className={deltaClasses}>{delta}</span>
      </div>
      {children ? <div className="mt-5 text-sm text-slate-600">{children}</div> : null}
    </div>
  );
}
