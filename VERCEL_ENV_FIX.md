# Fix Vercel Environment Variables - Build Error Resolution

## ❌ Problem
Your Vercel deployment is failing with:
```
TypeError: Invalid URL
code: 'ERR_INVALID_URL',
input: 'https://Use this string as `NEXTAUTH_SECRET`:\n\n`Lz7r8Qw9xP!sV2mN#yT6bK4uRf3hZ1cG`'
```

**Cause:** The Vercel environment variables were set with instructional text instead of actual values.

---

## ✅ Solution: Update Vercel Environment Variables

### Step 1: Go to Vercel Dashboard
1. Visit https://vercel.com
2. Sign in with your GitHub account
3. Select your **digital-marketing-dashboard** project

### Step 2: Access Settings
1. Click **Settings** (at the top right of the project page)
2. Go to **Environment Variables** (left sidebar)

### Step 3: Fix Each Environment Variable

#### **Delete the Wrong Variables**
- If you see any variable with values containing "Use this string as", delete it
- Delete any variable with instructional text

#### **Set the Correct Variables**

| Variable | Value (Exact - no extra text) | Example |
|----------|------|---------|
| `NEXTAUTH_URL` | Your Vercel deployment URL | `https://digital-marketing-dashboard.vercel.app` |
| `NEXTAUTH_SECRET` | A secure random string (just the secret) | `Lz7r8Qw9xP!sV2mN#yT6bK4uRf3hZ1cG` |
| `DATABASE_URL` | Your PostgreSQL connection string (if using database) | `postgresql://user:pass@host:5432/db_name` |

### Step 4: Add Each Variable

For each variable:
1. Click **Add New** (or the + button)
2. Enter the **Name** (e.g., `NEXTAUTH_URL`)
3. Enter the **Value** (e.g., `https://your-project.vercel.app`)
4. Click **Add**

**IMPORTANT:** Only paste the actual value, NOT any instructions or explanatory text.

---

## 📋 Environment Variables Reference

### NEXTAUTH_URL
- **Purpose:** The canonical URL of your application
- **Local Development:** `http://localhost:3000`
- **Production (Vercel):** `https://your-project-name.vercel.app`
- **Find your Vercel URL:**
  1. Go to Vercel dashboard
  2. Select your project
  3. Look for "Domains" section - this is your URL
  4. It usually looks like: `https://project-name.vercel.app`

### NEXTAUTH_SECRET
- **Purpose:** Secret key for NextAuth.js to sign session tokens
- **Value:** Any random secure string (use the one provided to you)
- **Example:** `Lz7r8Qw9xP!sV2mN#yT6bK4uRf3hZ1cG`
- **DO NOT INCLUDE:** Any text like "Use this string as..." or backticks
- **Just use:** The actual secret value only

### DATABASE_URL
- **Purpose:** PostgreSQL connection string (if using database)
- **Format:** `postgresql://username:password@hostname:5432/database_name`
- **Only needed:** If you're using a real database instead of local storage
- **Leave empty:** For now, since we're using browser local storage

---

## ⚠️ What NOT to Do

❌ **Wrong:**
```
NEXTAUTH_URL=https://Use this string as `NEXTAUTH_SECRET`:\n\n`Lz7r8Qw9xP!sV2mN#yT6bK4uRf3hZ1cG`
```

❌ **Wrong:**
```
NEXTAUTH_SECRET=Use this string as `NEXTAUTH_SECRET`:\n\n`Lz7r8Qw9xP!sV2mN#yT6bK4uRf3hZ1cG`
```

❌ **Wrong:**
```
NEXTAUTH_SECRET=`Lz7r8Qw9xP!sV2mN#yT6bK4uRf3hZ1cG`  (with backticks)
```

---

## ✅ What TO Do

✅ **Correct:**
```
NEXTAUTH_URL=https://digital-marketing-dashboard.vercel.app
NEXTAUTH_SECRET=Lz7r8Qw9xP!sV2mN#yT6bK4uRf3hZ1cG
```

---

## Step 5: Redeploy

After updating environment variables:

### Option A: Automatic (Recommended)
1. In Vercel dashboard, go to **Deployments**
2. Find the failed deployment (marked with red X)
3. Click the three dots menu (...)
4. Select **Redeploy**

### Option B: Manual
1. Push a new commit to GitHub:
   ```bash
   git add .
   git commit -m "Update environment variables on Vercel"
   git push origin main
   ```
2. Vercel will automatically redeploy

---

## Verification Steps

After redeploying:

1. **Check Build Status**
   - In Vercel dashboard, watch the build progress
   - It should complete without errors
   - No "Invalid URL" or "ERR_INVALID_URL" errors

2. **Test the Live Site**
   - Click the deployment URL
   - You should see the login page
   - Try logging in with:
     - Email: `admin@example.com`
     - Password: `Marketing123`
   - You should be redirected to the dashboard

3. **Check Console** (If there are issues)
   - Open DevTools (F12)
   - Check the Console tab for errors
   - Report any errors you see

---

## Still Having Issues?

### Issue 1: "Invalid URL" error persists
- **Solution:** Check the exact value in Vercel environment variables
  - Go to Settings → Environment Variables
  - Click each variable to edit it
  - Make sure there's no extra text, backticks, or newlines
  - The value should be a single line, no quotes

### Issue 2: Build still fails
- **Solution:** Clear build cache and redeploy
  1. Go to Settings → Deployments
  2. Look for "Build and Output Settings"
  3. Click "Clear cache"
  4. Try redeploying

### Issue 3: Login doesn't work
- **Solution:** Verify NEXTAUTH_SECRET is correct
  - Make sure the secret is set correctly (no backticks)
  - If you deleted it by accident, set it again with a new random secret

### Issue 4: Site loads but gives error
- **Solution:** Check NEXTAUTH_URL matches your Vercel domain
  - Go to your project → Domains
  - Make sure NEXTAUTH_URL exactly matches your Vercel domain
  - Example: If Vercel shows `my-app.vercel.app`, then NEXTAUTH_URL should be `https://my-app.vercel.app`

---

## Quick Checklist

- [ ] Logged into Vercel.com
- [ ] Selected the digital-marketing-dashboard project
- [ ] Went to Settings → Environment Variables
- [ ] Deleted any variables with instructional text
- [ ] Set NEXTAUTH_URL to your Vercel domain (https://...)
- [ ] Set NEXTAUTH_SECRET to just the secret value (no text around it)
- [ ] Clicked Save
- [ ] Redeployed the project
- [ ] Checked the build completed successfully
- [ ] Tested login on the live site

---

**Note:** Your local development continues to work with `.env` file values:
- NEXTAUTH_URL=http://localhost:3000
- NEXTAUTH_SECRET=dev-secret-12345

Only Vercel needs the production values.
