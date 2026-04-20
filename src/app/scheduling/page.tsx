import { PostEditor } from "@/components/scheduling/PostEditor";
import { ScheduledPostsList } from "@/components/scheduling/ScheduledPostsList";
import { TopNav } from "@/components/navigation/TopNav";
import { Sidebar } from "@/components/navigation/Sidebar";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function SchedulingPage() {
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
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-sky-500">Content management</p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-950">
                Content scheduling
              </h1>
              <p className="mt-3 max-w-2xl text-slate-600">
                Create, customize, and schedule your marketing posts across multiple channels.
              </p>
            </div>
          </div>

          <div
            className="flex-1 overflow-y-auto px-4 pb-6 sm:px-6 lg:px-8"
            style={{ maxHeight: "calc(100vh - 10.5rem)" }}
          >
            <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
              <PostEditor />

              <div className="space-y-6">
                <ScheduledPostsList />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
