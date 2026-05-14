interface ScheduledPostsListProps {
  posts: Array<{
    id: string;
    content: string;
    channel: string;
    scheduledDate: string;
    scheduledTime: string;
    status: string;
  }>;
}

export function ScheduledPostsList({ posts }: ScheduledPostsListProps) {
  return (
    <div className="rounded-3xl border border-slate-200/70 bg-white shadow-sm shadow-slate-200/20">
      <div className="border-b border-slate-200/80 p-6">
        <h3 className="text-lg font-semibold text-slate-950">Scheduled posts</h3>
        <p className="mt-2 text-sm text-slate-600">Upcoming content scheduled for publication</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-6 py-4 font-semibold">Content preview</th>
              <th className="px-6 py-4 font-semibold">Channel</th>
              <th className="px-6 py-4 font-semibold">Date & time</th>
              <th className="px-6 py-4 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border-t border-slate-200/80 hover:bg-slate-50">
                <td className="px-6 py-4 text-slate-900 max-w-xs overflow-hidden text-ellipsis whitespace-nowrap">
                  {post.content}
                </td>
                <td className="px-6 py-4 text-slate-600">{post.channel}</td>
                <td className="px-6 py-4 text-slate-900">
                  <div>
                    <p className="font-medium">{post.scheduledDate}</p>
                    <p className="text-xs text-slate-500">{post.scheduledTime}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                    {post.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
