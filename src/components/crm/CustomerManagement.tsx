"use client";

import { useEffect, useState } from "react";
import { defaultCustomers } from "@/lib/defaultData";

export function CustomerManagement() {
  const [customers, setCustomers] = useState(defaultCustomers);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("dm-customers");
      if (stored) {
        setCustomers(JSON.parse(stored));
      }
    } catch (error) {
      console.error("Unable to load customers", error);
    }
  }, []);

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm shadow-slate-200/20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-slate-950">Customer management</h1>
            <p className="mt-2 text-sm text-slate-600">View customer records, interactions, purchases, and feedback.</p>
          </div>
          <div className="rounded-3xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
            Total customers: {customers.length}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm shadow-slate-200/20">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-950">Customer list</h2>
            <p className="mt-2 text-sm text-slate-600">Quickly access contact details and recent feedback.</p>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] border-collapse text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-6 py-4 font-semibold">Name</th>
                <th className="px-6 py-4 font-semibold">Contact</th>
                <th className="px-6 py-4 font-semibold">Purchase history</th>
                <th className="px-6 py-4 font-semibold">Feedback</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="border-t border-slate-200/80 hover:bg-slate-50">
                  <td className="px-6 py-4 text-slate-900">{customer.name}</td>
                  <td className="px-6 py-4 text-slate-600">
                    <div>{customer.email}</div>
                    <div className="mt-1 text-sm text-slate-500">{customer.phone}</div>
                  </td>
                  <td className="px-6 py-4 text-slate-900">{customer.purchaseHistory.join(", ")}</td>
                  <td className="px-6 py-4 text-slate-600">{customer.feedback}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
