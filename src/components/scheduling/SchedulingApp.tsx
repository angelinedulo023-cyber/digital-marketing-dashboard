"use client";

import { useEffect, useState } from "react";
import { PostEditor } from "@/components/scheduling/PostEditor";
import { ScheduledPostsList } from "@/components/scheduling/ScheduledPostsList";
import { defaultScheduledPosts, defaultActivities } from "@/lib/defaultData";

const storageKeys = {
  scheduledPosts: "dm-scheduled-posts",
  activities: "dm-activities",
};

export function SchedulingApp() {
  const [posts, setPosts] = useState(defaultScheduledPosts);
  const [activities, setActivities] = useState(defaultActivities);

  useEffect(() => {
    try {
      const savedPosts = localStorage.getItem(storageKeys.scheduledPosts);
      const savedActivities = localStorage.getItem(storageKeys.activities);

      if (savedPosts) setPosts(JSON.parse(savedPosts));
      if (savedActivities) setActivities(JSON.parse(savedActivities));
    } catch (error) {
      console.error("Unable to load scheduled posts", error);
    }
  }, []);

  const saveData = (nextPosts: typeof posts, nextActivities: typeof activities) => {
    setPosts(nextPosts);
    setActivities(nextActivities);
    localStorage.setItem(storageKeys.scheduledPosts, JSON.stringify(nextPosts));
    localStorage.setItem(storageKeys.activities, JSON.stringify(nextActivities));
  };

  const handlePostSave = (post: any, activity: any) => {
    const nextPosts = [post, ...posts];
    const nextActivities = [activity, ...activities].slice(0, 6);
    saveData(nextPosts, nextActivities);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
      <PostEditor onSave={handlePostSave} />
      <div className="space-y-6">
        <ScheduledPostsList posts={posts} />
      </div>
    </div>
  );
}
