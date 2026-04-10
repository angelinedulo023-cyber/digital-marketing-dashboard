# Digital Marketing Dashboard

A Next.js 16 full-stack marketing analytics dashboard scaffolded with TypeScript, Tailwind CSS, and ESLint.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser. You will be redirected to `/login` if you are not signed in.

### Demo credentials

- Email: `admin@example.com`
- Password: `Marketing123`

## Build

Build the production app:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Environment

Copy `.env.example` to `.env` and update `DATABASE_URL` and `NEXTAUTH_SECRET` before connecting a real database.

## Deploy to GitHub

1. Install Git if you don’t already have it.
2. Create a new repository on GitHub.
3. In your local project folder, run:
   ```bash
git init
git add .
git commit -m "Initial dashboard commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```
4. Replace `YOUR_USERNAME` and `YOUR_REPO` with your GitHub details.

## Deploy to Vercel

1. Sign in to https://vercel.com with your GitHub account.
2. Click **New Project** and import your GitHub repository.
3. Use the default settings for a Next.js app.
4. In Vercel project settings, add environment variables:
   - `NEXTAUTH_URL` = `https://YOUR_VERCEL_URL`
   - `NEXTAUTH_SECRET` = a secure random string
   - `DATABASE_URL` = your production database URL (if used)
5. Deploy the project and copy the public URL Vercel gives you.

## Notes

- The project is configured for Windows.
- The build uses `next build --webpack` for compatibility with local platform bindings.
- Basic dashboard analytics and authentication are implemented.
