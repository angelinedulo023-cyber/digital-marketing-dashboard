import { AnalyticsCard } from "@/components/dashboard/AnalyticsCard";
import { CampaignTable } from "@/components/dashboard/CampaignTable";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { Sidebar } from "@/components/navigation/Sidebar";
import { TopNav } from "@/components/navigation/TopNav";
import { TrafficChart } from "@/components/dashboard/TrafficChart";
import { analyticsCards, performanceHighlights } from "@/lib/analytics";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <TopNav />
      <div className="mx-auto grid max-w-7xl gap-6 px-4 pb-6 pt-6 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <Sidebar />
        </aside>

        <main className="flex min-h-[calc(100vh-5.5rem)] flex-col overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white shadow-sm shadow-slate-200/30">
          <div className="rounded-[2rem] bg-slate-50 p-6 sm:p-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-sky-500">Digital marketing dashboard</p>
                <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-950">Marketing analytics and campaign reporting</h1>
                <p className="mt-3 max-w-2xl text-slate-600">Monitor campaign performance, traffic, revenue, and growth from a single responsive dashboard.</p>
              </div>
              <div className="rounded-3xl bg-white p-5 shadow-sm shadow-slate-200/40">
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Account</p>
                <p className="mt-1 text-lg font-semibold text-slate-950">Marketing Admin</p>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 pb-6 sm:px-6 lg:px-8" style={{ maxHeight: "calc(100vh - 10.5rem)" }}>
            <section className="grid gap-6 xl:grid-cols-[repeat(4,minmax(0,1fr))]">
              {analyticsCards.map((card) => (
                <AnalyticsCard key={card.title} title={card.title} value={card.value} delta={card.delta}>
                  {card.description}
                </AnalyticsCard>
              ))}
            </section>

            <section id="analytics" className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
              <TrafficChart />
              <RevenueChart />
            </section>

            <section className="grid gap-6 xl:grid-cols-[2fr_1fr]">
              <div>
                <div className="mb-6 rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm shadow-slate-200/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Summary</p>
                      <h2 className="mt-2 text-2xl font-semibold text-slate-950">Performance overview</h2>
                    </div>
                    <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700">Updated 5 min ago</span>
                  </div>
                  <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
                    <p>Top source: Organic search. Recommended next action: increase ad spend on high-performing social campaigns.</p>
                    <p>Customer satisfaction remains strong, but feedback requests remain a priority for next quarter.</p>
                  </div>
                </div>
                <CampaignTable />
              </div>

              <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm shadow-slate-200/20">
                <div className="border-b border-slate-200/80 pb-4">
                  <h3 className="text-lg font-semibold text-slate-950">Highlights</h3>
                  <p className="mt-2 text-sm text-slate-600">Quick campaign and traffic insights for the week.</p>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {performanceHighlights.map((item) => (
                    <div key={item.label} className="rounded-3xl bg-slate-50 p-4">
                      <p className="text-sm uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                      <p className="mt-3 text-2xl font-semibold text-slate-950">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
