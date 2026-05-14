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
    <div className="space-y-4 sm:space-y-6">
      {/* Metrics Cards - Mobile First */}
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 lg:gap-6">
        {cards.map((card) => (
          <div key={card.title} className="rounded-lg sm:rounded-2xl border border-slate-200/70 bg-white p-4 sm:p-6 shadow-sm shadow-slate-200/20 touch-none hover:shadow-md transition">
            <h3 className="text-xs font-semibold uppercase tracking-wider sm:tracking-[0.18em] text-slate-500 sm:text-sm">{card.title}</h3>
            <p className="mt-2 text-2xl font-semibold text-slate-950 sm:text-3xl">{card.value}</p>
            <p className="mt-3 text-xs text-slate-600 sm:text-sm leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Activity and Summary - Stacked on mobile */}
      <div className="grid gap-3 lg:gap-6 lg:grid-cols-[2fr_1fr] sm:gap-4">
        {/* Recent Activity */}
        <div className="rounded-lg sm:rounded-2xl border border-slate-200/70 bg-white p-4 sm:p-6 shadow-sm shadow-slate-200/20">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div className="min-w-0">
              <h2 className="text-lg font-semibold text-slate-950 sm:text-xl">Recent activity</h2>
              <p className="mt-1 text-xs text-slate-600 sm:text-sm">Latest system events and marketing actions.</p>
            </div>
          </div>
          <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="rounded-lg bg-slate-50 p-3 sm:p-4">
                <p className="text-xs text-slate-900 sm:text-sm">{activity.message}</p>
                <p className="mt-1 text-xs text-slate-500 sm:text-xs">{activity.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Summary */}
        <div className="rounded-lg sm:rounded-2xl border border-slate-200/70 bg-white p-4 sm:p-6 shadow-sm shadow-slate-200/20">
          <h2 className="text-lg font-semibold text-slate-950 sm:text-xl">Customer summary</h2>
          <p className="mt-1 text-xs text-slate-600 sm:text-sm">Quick view of your customer base and buying behavior.</p>
          <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-sm text-slate-600">
            <div className="rounded-lg bg-slate-50 p-3 sm:p-4">
              <p className="font-semibold text-slate-950 text-xs sm:text-sm">Customers</p>
              <p className="mt-2 text-xs text-slate-600 sm:text-sm">{customers.length} total registered customers</p>
            </div>
            <div className="rounded-lg bg-slate-50 p-3 sm:p-4">
              <p className="font-semibold text-slate-950 text-xs sm:text-sm">Campaigns</p>
              <p className="mt-2 text-xs text-slate-600 sm:text-sm">{campaigns.length} campaigns created</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
