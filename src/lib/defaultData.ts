export const defaultCustomers = [
  {
    id: "cust-001",
    name: "Amina Mwangi",
    phone: "+254712345678",
    email: "amina@example.com",
    purchaseHistory: ["Promo pack", "Seasonal menu"],
    feedback: "Loves the new discount campaign",
  },
  {
    id: "cust-002",
    name: "James Otieno",
    phone: "+254712345679",
    email: "james@example.com",
    purchaseHistory: ["Event booking", "Weekly offer"],
    feedback: "Wants more social media posts",
  },
  {
    id: "cust-003",
    name: "Mercy Karanja",
    phone: "+254712345680",
    email: "mercy@example.com",
    purchaseHistory: ["Discount voucher", "Referral reward"],
    feedback: "Happy with response times",
  },
];

export const defaultScheduledPosts = [
  {
    id: "post-001",
    content: "Happy weekend! Enjoy 20% off all meals booked today.",
    scheduledDate: "2026-05-21",
    scheduledTime: "10:00",
    channel: "Facebook",
    status: "Scheduled",
  },
  {
    id: "post-002",
    content: "New menu alert! Try our chef's special this week.",
    scheduledDate: "2026-05-23",
    scheduledTime: "09:30",
    channel: "Instagram",
    status: "Scheduled",
  },
];

export const defaultCampaigns = [
  { name: "Weekend discount", status: "Active" },
  { name: "Courier offer", status: "Paused" },
  { name: "New menu launch", status: "Active" },
];

export const defaultActivities = [
  { id: "act-001", message: "Created a new marketing post for Facebook", time: "2 hours ago" },
  { id: "act-002", message: "Scheduled an Instagram campaign for next week", time: "5 hours ago" },
  { id: "act-003", message: "Customer feedback received from Amina Mwangi", time: "Yesterday" },
];

export const defaultEngagement = {
  reach: "78%",
  engagement: "1.4k",
  conversion: "5.8%",
};
