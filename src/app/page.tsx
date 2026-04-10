import { AnalyticsCard } from "@/components/dashboard/AnalyticsCard";
import { CampaignTable } from "@/components/dashboard/CampaignTable";
import { TrafficChart } from "@/components/dashboard/TrafficChart";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <header className="rounded-[2rem] border border-slate-200/70 bg-white p-8 shadow-sm shadow-slate-200/30">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-sky-500">Digital marketing dashboard</p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-950">Marketing analytics and campaign reporting</h1>
              <p className="mt-3 max-w-2xl text-slate-600">Monitor campaign performance, visitor trends, and customer feedback in one place.</p>
            </div>
            <div className="rounded-3xl bg-slate-100 px-5 py-4 text-slate-700 shadow-sm shadow-slate-200/80">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Account</p>
              <p className="mt-1 text-lg font-semibold">Marketing Admin</p>
            </div>
          </div>
        </header>

        <section className="grid gap-6 xl:grid-cols-[repeat(3,minmax(0,1fr))]">
          <AnalyticsCard title="Revenue" value="$415.2k" delta="+14.8%">
            Revenue is up from last month and exceeding budget expectations.
          </AnalyticsCard>
          <AnalyticsCard title="Leads" value="3,840" delta="+9.2%">
            Lead volume is improving with high conversion from paid campaigns.
          </AnalyticsCard>
          <AnalyticsCard title="Campaign ROI" value="+26.4%" delta="+3.2%">
            ROI reflects stronger performance in email and social channels.
          </AnalyticsCard>
        </section>

        <section className="grid gap-6 xl:grid-cols-[2fr_1fr]">
          <TrafficChart />
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm shadow-slate-200/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Summary</p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-950">Performance overview</h2>
                </div>
                <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700">Updated 5 min ago</span>
              </div>
              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
                <p>Top source: Organic search
Recommended next action: increase ad spend on high-performing social campaigns.</p>
                <p>Customer satisfaction remains strong, but feedback requests remain a priority for next quarter.</p>
              </div>
            </div>
            <CampaignTable />
          </div>
        </section>
      </div>
    </div>
  );
}
