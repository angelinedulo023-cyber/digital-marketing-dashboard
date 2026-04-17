"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { revenueChartData } from "@/lib/analytics";

export function RevenueChart() {
  return (
    <div className="h-80 rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm shadow-slate-200/20">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Revenue</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-950">Weekly revenue vs spend</h2>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">Revenue growth +12.8%</span>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={revenueChartData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="spendGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f97316" stopOpacity={0.25} />
              <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
          <XAxis dataKey="label" axisLine={false} tickLine={false} tick={{ fill: "#64748b" }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: "#64748b" }} />
          <Tooltip wrapperStyle={{ borderRadius: 16, borderColor: "#e2e8f0" }} formatter={(value: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value)} />
          <Area type="monotone" dataKey="revenue" stroke="#0ea5e9" fill="url(#revenueGradient)" strokeWidth={3} />
          <Area type="monotone" dataKey="spend" stroke="#f97316" fill="url(#spendGradient)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
