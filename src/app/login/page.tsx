"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsLoading(true);

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setIsLoading(false);

    if (result?.error) {
      setError("Invalid credentials. Use admin@example.com / Marketing123");
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-950 text-slate-100 flex items-center justify-center px-4 py-4 sm:px-6">
      <div className="w-full max-w-md">
        {/* Logo/Header */}
        <div className="mb-8 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-sky-600 text-white shadow-lg shadow-sky-500/50 mx-auto mb-4">
            <span className="text-2xl font-bold">DM</span>
          </div>
          <h1 className="text-3xl font-bold sm:text-4xl">Digital Marketing</h1>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">Dashboard Login</p>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl bg-slate-800/95 p-6 sm:p-8 shadow-xl shadow-slate-950/50 backdrop-blur border border-slate-700/50">
          <h2 className="text-xl font-semibold mb-6">Sign in to your account</h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-300">Email address</span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="admin@example.com"
                className="w-full rounded-lg border border-slate-600 bg-slate-900/50 px-4 py-3 text-base text-slate-100 placeholder-slate-500 outline-none transition focus:border-sky-500 focus:ring-1 focus:ring-sky-500/50 min-h-touch"
                required
              />
            </label>

            {/* Password Field */}
            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-300">Password</span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
                className="w-full rounded-lg border border-slate-600 bg-slate-900/50 px-4 py-3 text-base text-slate-100 placeholder-slate-500 outline-none transition focus:border-sky-500 focus:ring-1 focus:ring-sky-500/50 min-h-touch"
                required
              />
            </label>

            {/* Error Message */}
            {error && (
              <div className="rounded-lg bg-rose-500/10 border border-rose-500/20 p-4">
                <p className="text-sm text-rose-300">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-lg bg-gradient-to-r from-sky-500 to-sky-600 px-5 py-3 text-base font-semibold text-white transition hover:from-sky-600 hover:to-sky-700 active:from-sky-700 active:to-sky-800 disabled:opacity-50 disabled:cursor-not-allowed min-h-touch-lg"
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          {/* Demo Credentials Info */}
          <div className="mt-6 rounded-lg bg-slate-700/30 border border-slate-600/30 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Demo Credentials</p>
            <p className="text-sm text-slate-300">Email: <span className="font-mono text-sky-300">admin@example.com</span></p>
            <p className="text-sm text-slate-300">Password: <span className="font-mono text-sky-300">Marketing123</span></p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-slate-500 mt-6">
          Mobile & desktop optimized dashboard
        </p>
      </div>
    </div>
  );
}
