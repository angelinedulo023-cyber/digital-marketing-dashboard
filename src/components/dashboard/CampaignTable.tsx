const campaigns = [
  { name: "Spring Launch", channel: "Email", budget: "$18.4k", leads: 320, status: "Active" },
  { name: "SEO Refresh", channel: "Organic", budget: "$9.2k", leads: 140, status: "Active" },
  { name: "Paid Search", channel: "PPC", budget: "$13.8k", leads: 220, status: "Paused" },
  { name: "Social Promo", channel: "Social", budget: "$7.1k", leads: 110, status: "Active" },
];

export function CampaignTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-sm shadow-slate-200/20">
      <div className="border-b border-slate-200/80 p-6">
        <h3 className="text-lg font-semibold text-slate-950">Campaign performance</h3>
        <p className="mt-2 text-sm text-slate-600">Track ROI, lead quality, and campaign status.</p>
      </div>
      <div className="min-w-full overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-6 py-4 font-semibold">Campaign</th>
              <th className="px-6 py-4 font-semibold">Channel</th>
              <th className="px-6 py-4 font-semibold">Budget</th>
              <th className="px-6 py-4 font-semibold">Leads</th>
              <th className="px-6 py-4 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign.name} className="border-t border-slate-200/80 hover:bg-slate-50">
                <td className="px-6 py-4 text-slate-900">{campaign.name}</td>
                <td className="px-6 py-4 text-slate-600">{campaign.channel}</td>
                <td className="px-6 py-4 text-slate-900">{campaign.budget}</td>
                <td className="px-6 py-4 text-slate-900">{campaign.leads}</td>
                <td className={`px-6 py-4 font-semibold ${campaign.status === "Active" ? "text-emerald-700" : "text-amber-600"}`}>
                  {campaign.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
