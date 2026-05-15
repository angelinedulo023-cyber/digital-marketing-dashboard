import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

// Validate required environment variables
if (!process.env.NEXTAUTH_SECRET) {
  throw new Error("NEXTAUTH_SECRET is not set. Please set it in your Vercel environment variables.");
}

// Ensure NEXTAUTH_SECRET doesn't contain instructional text
if (process.env.NEXTAUTH_SECRET.includes("Use this string") || 
    process.env.NEXTAUTH_SECRET.includes("NEXTAUTH_SECRET") ||
    process.env.NEXTAUTH_SECRET.startsWith("`")) {
  throw new Error(
    "NEXTAUTH_SECRET contains invalid text. It should only contain the secret value itself, not instructions or backticks. " +
    "Please fix it in Vercel → Settings → Environment Variables"
  );
}

// Validate NEXTAUTH_URL on production
if (process.env.NODE_ENV === "production") {
  if (!process.env.NEXTAUTH_URL) {
    throw new Error("NEXTAUTH_URL is not set in production. Please set it in Vercel environment variables to your deployment URL (e.g., https://your-project.vercel.app)");
  }
  
  // Check if NEXTAUTH_URL is valid
  if (process.env.NEXTAUTH_URL.includes("NEXTAUTH") || 
      !process.env.NEXTAUTH_URL.startsWith("http")) {
    throw new Error(
      `NEXTAUTH_URL is invalid: "${process.env.NEXTAUTH_URL}". ` +
      "It should be your full deployment URL like https://your-project.vercel.app"
    );
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "admin@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const { email, password } = credentials;

        if (email === "admin@example.com" && password === "Marketing123") {
          return {
            id: "admin-user",
            name: "Marketing Admin",
            email,
          };
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  debug: process.env.NODE_ENV !== "production",
  ...(process.env.NEXTAUTH_URL && { url: process.env.NEXTAUTH_URL }),
};
