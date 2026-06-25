# 💡 IdeaVault — Startup Idea Sharing Platform

IdeaVault is a community platform where founders and enthusiasts share innovative startup ideas, explore trending concepts, and validate them through discussion. Instead of booking or scheduling, IdeaVault focuses on **idea validation and engagement**.

🔗 **Live site:** _add your deployed URL here (e.g. https://ideavault.vercel.app)_

## ✨ Features

- 🔐 **Secure auth your way** — email/password (JWT in an httpOnly cookie) *and* Google sign-in, with server-side route protection so private pages survive a reload.
- 📝 **Full idea lifecycle** — create, edit, and delete startup ideas with rich details (problem, solution, target audience, budget, tags, image).
- 💬 **Discussion system** — comment on any idea and edit or delete your own comments, with live counts.
- 🔎 **Powerful discovery** — case-insensitive title search, category filters, trending sort, and a "Trending Ideas" showcase on the home page.
- 🌗 **Dark / light theme** + fully responsive design (mobile, tablet, desktop) with toast notifications for every action.

## 🛠 Tech Stack

- **Next.js 16** (App Router, full-stack) · **React 19** · **Tailwind CSS v4**
- **MongoDB** (official driver) for data
- **jose** (JWT) + **bcryptjs** for custom authentication
- **next-themes**, **react-hot-toast**, **swiper**, **react-icons**

## 🚀 Getting Started

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run seed                 # optional: add sample ideas
npm run dev                  # http://localhost:3000
```

### Environment variables

| Variable | Description |
| --- | --- |
| `MONGO_URI` / `MONGO_DB` | MongoDB connection string and database name |
| `JWT_SECRET` | Secret used to sign the auth cookie |
| `NEXT_PUBLIC_BASE_URL` | Public base URL (e.g. `http://localhost:3000`) |
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | Google OAuth credentials (optional) |

For Google login, set the authorized redirect URI to `<NEXT_PUBLIC_BASE_URL>/api/auth/google/callback`.

## 📦 Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run seed` | Seed the database with sample ideas |

## 🌍 Deployment

Deploy to **Vercel**: import the repo, add the environment variables above, and update `NEXT_PUBLIC_BASE_URL` (and the Google redirect URI) to the production domain.
