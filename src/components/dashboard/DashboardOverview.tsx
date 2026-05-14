"use client";

import { useEffect, useState } from "react";
import { defaultActivities, defaultCampaigns, defaultCustomers, defaultEngagement } from "@/lib/defaultData";

const storageKeys = {
  customers: "dm-customers",
  campaigns: "dm-campaigns",
  activities: "dm-activities",
  engagement: "dm-engagement",
};

export function DashboardOverview() {
  const [customers, setCustomers] = useState(defaultCustomers);
  const [campaigns, setCampaigns] = useState(defaultCampaigns);
  const [activities, setActivities] = useState(defaultActivities);
  const [engagement, setEngagement] = useState(defaultEngagement);

  useEffect(() => {
    try {
      const savedCustomers = localStorage.getItem(storageKeys.customers);
      const savedCampaigns = localStorage.getItem(storageKeys.campaigns);
      const savedActivities = localStorage.getItem(storageKeys.activities);
      const savedEngagement = localStorage.getItem(storageKeys.engagement);

      if (savedCustomers) setCustomers(JSON.parse(savedCustomers));
      if (savedCampaigns) setCampaigns(JSON.parse(savedCampaigns));
      if (savedActivities) setActivities(JSON.parse(savedActivities));
      if (savedEngagement) setEngagement(JSON.parse(savedEngagement));
    } catch (error) {
      console.error("Failed to load dashboard data", error);
    }
  }, []);

  const cards = [
    {
      title: "Customers",
      value: String(customers.length),
      description: "Track total customers registered in the system.",
    },
    {
      title: "Campaigns",
      value: String(campaigns.length),
      description: "See how many marketing campaigns are currently active.",
    },
    {
      title: "Engagement",
      value: engagement.engagement,
      description: "Measure interactions from your recent marketing posts.",
    },
    {
      title: "Conversion rate",
      value: engagement.conversion,
      description: "Monitor conversion effectiveness on scheduled campaigns.",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-[repeat(4,minmax(0,1fr))]">
        {cards.map((card) => (
          <div key={card.title} className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm shadow-slate-200/20">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{card.title}</h3>
            <p className="mt-3 text-3xl font-semibold text-slate-950">{card.value}</p>
            <p className="mt-4 text-sm text-slate-600">{card.description}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
        <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm shadow-slate-200/20">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-950">Recent activity</h2>
              <p className="mt-2 text-sm text-slate-600">Latest system events and marketing actions.</p>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="rounded-3xl bg-slate-50 p-4">
                <p className="text-sm text-slate-900">{activity.message}</p>
                <p className="mt-2 text-xs text-slate-500">{activity.time}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm shadow-slate-200/20">
          <h2 className="text-xl font-semibold text-slate-950">Customer summary</h2>
          <p className="mt-2 text-sm text-slate-600">Quick view of your customer base and buying behavior.</p>
          <div className="mt-6 space-y-4 text-sm text-slate-600">
            <div className="rounded-3xl bg-slate-50 p-4">
              <p className="font-semibold text-slate-950">Customers</p>
              <p className="mt-2">{customers.length} total registered customers</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-4">
              <p className="font-semibold text-slate-950">Campaigns</p>
              <p className="mt-2">{campaigns.length} campaigns created</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
