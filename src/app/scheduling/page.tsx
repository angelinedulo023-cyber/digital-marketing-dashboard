import { SchedulingApp } from "@/components/scheduling/SchedulingApp";
import { TopNav } from "@/components/navigation/TopNav";
import { Sidebar } from "@/components/navigation/Sidebar";
import { MobileSidebar } from "@/components/navigation/MobileSidebar";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function SchedulingPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 text-slate-900">
      <TopNav />
      <MobileSidebar />
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 pb-6 pt-4 lg:gap-6 lg:px-6 lg:pt-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          {/* Desktop Sidebar - hidden on mobile */}
          <aside className="hidden lg:block">
            <Sidebar />
          </aside>

          {/* Main Content */}
          <main className="flex flex-col rounded-2xl border border-slate-200/70 bg-white shadow-sm shadow-slate-200/30 lg:rounded-[2rem]">
            <div className="rounded-2xl bg-slate-50 p-4 sm:p-6 lg:rounded-[2rem] lg:p-8 flex-shrink-0">
              <div>
                <p className="text-xs uppercase tracking-wider text-sky-500 sm:text-sm sm:tracking-[0.28em]">Content management</p>
                <h1 className="mt-2 text-2xl font-semibold leading-tight text-slate-950 sm:text-3xl lg:text-4xl">Content scheduling</h1>
                <p className="mt-2 max-w-2xl text-xs text-slate-600 sm:text-sm">Create, customize, and schedule your marketing posts across multiple channels.</p>
              </div>
            </div>

            <div className="flex-1 px-4 pb-6 sm:px-6 lg:px-8">
              <SchedulingApp />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
