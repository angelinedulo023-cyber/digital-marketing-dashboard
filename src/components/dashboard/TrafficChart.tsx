"use client";

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { label: "Mon", visits: 980 },
  { label: "Tue", visits: 1120 },
  { label: "Wed", visits: 1340 },
  { label: "Thu", visits: 1420 },
  { label: "Fri", visits: 1580 },
  { label: "Sat", visits: 1720 },
  { label: "Sun", visits: 1890 },
];

export function TrafficChart() {
  return (
    <div className="h-80 rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm shadow-slate-200/20">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Traffic</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-950">Weekly visitors</h2>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">+18.4%</span>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="visitsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="label" axisLine={false} tickLine={false} tick={{ fill: "#64748b" }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: "#64748b" }} />
          <Tooltip wrapperStyle={{ borderRadius: 16, borderColor: "#e2e8f0" }} />
          <Area type="monotone" dataKey="visits" stroke="#0ea5e9" fill="url(#visitsGradient)" strokeWidth={3} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
