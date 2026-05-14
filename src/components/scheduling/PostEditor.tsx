"use client";

import { useState } from "react";

interface PostEditorProps {
  onSave: (post: any, activity: any) => void;
}

export function PostEditor({ onSave }: PostEditorProps) {
  const [content, setContent] = useState("");
  const [scheduledDate, setScheduledDate] = useState("");
  const [scheduledTime, setScheduledTime] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearForm = () => {
    setContent("");
    setScheduledDate("");
    setScheduledTime("");
    setImageFile(null);
    setImagePreview(null);
  };

  const createPost = (status: string) => {
    return {
      id: `post-${Date.now()}`,
      content,
      scheduledDate: scheduledDate || new Date().toISOString().slice(0, 10),
      scheduledTime: scheduledTime || new Date().toLocaleTimeString("en-US", { hour12: false }).slice(0, 5),
      channel: status === "Published" ? "General" : "Scheduled",
      status,
    };
  };

  const createActivity = (action: string) => ({
    id: `activity-${Date.now()}`,
    message: `${action} post: ${content.slice(0, 50)}${content.length > 50 ? "..." : ""}`,
    time: "Just now",
  });

  const handleSchedule = () => {
    if (!content.trim()) {
      alert("Please enter post content");
      return;
    }
    if (!scheduledDate || !scheduledTime) {
      alert("Please select a date and time");
      return;
    }

    const post = createPost("Scheduled");
    const activity = createActivity("Scheduled");
    onSave(post, activity);
    alert(`Post scheduled for ${scheduledDate} at ${scheduledTime}`);
    clearForm();
  };

  const handlePublishNow = () => {
    if (!content.trim()) {
      alert("Please enter post content");
      return;
    }

    const post = createPost("Published");
    const activity = createActivity("Published");
    onSave(post, activity);
    alert("Post published immediately");
    clearForm();
  };

  return (
    <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm shadow-slate-200/20">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-950">Create post</h2>
        <p className="mt-2 text-sm text-slate-600">Write and schedule your marketing content</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Post content
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your post content here..."
            className="mt-3 w-full rounded-2xl border border-slate-200/80 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
            rows={5}
          />
          <p className="mt-2 text-xs text-slate-500">{content.length} characters</p>
        </div>

        <div>
          <label className="block text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Attach image
          </label>
          <div className="mt-3 flex gap-4">
            <div className="flex-1">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="block w-full text-sm text-slate-600 file:mr-4 file:rounded-2xl file:border-0 file:bg-sky-100 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-sky-700"
              />
            </div>
          </div>
          {imagePreview && (
            <div className="mt-4">
              <p className="mb-2 text-sm font-semibold text-slate-600">Preview</p>
              <img
                src={imagePreview}
                alt="Preview"
                className="h-40 w-40 rounded-2xl border border-slate-200/80 object-cover"
              />
            </div>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Schedule date
            </label>
            <input
              type="date"
              value={scheduledDate}
              onChange={(e) => setScheduledDate(e.target.value)}
              className="mt-3 w-full rounded-2xl border border-slate-200/80 px-4 py-2 text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Schedule time
            </label>
            <input
              type="time"
              value={scheduledTime}
              onChange={(e) => setScheduledTime(e.target.value)}
              className="mt-3 w-full rounded-2xl border border-slate-200/80 px-4 py-2 text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
            />
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <button
            onClick={handlePublishNow}
            className="flex-1 rounded-2xl bg-sky-500 px-6 py-3 text-center font-semibold text-white transition hover:bg-sky-600"
          >
            Publish now
          </button>
          <button
            onClick={handleSchedule}
            className="flex-1 rounded-2xl border border-sky-200 bg-sky-50 px-6 py-3 text-center font-semibold text-sky-700 transition hover:bg-sky-100"
          >
            Schedule post
          </button>
        </div>
      </div>
    </div>
  );
}
