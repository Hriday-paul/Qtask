# QuickHire — Frontend

> A modern job finding platform. Browse, filter, and apply for jobs instantly. Built with Next.js App Router with full Server-Side Rendering.

---

## 📌 Project Overview

**QuickHire** is a full-stack job portal built for the Online job market. The frontend is built entirely with **Next.js App Router** using **Server-Side Rendering (SSR)** for all pages — ensuring fast load times, great SEO, and dynamic real-time data on every visit.

The platform has two sides:
- **Public side** — Job seekers can browse all jobs, filter by category/type/location, view job details, and apply
- **Admin side** — Employers/admins can log in, post jobs, edit/delete listings, feature jobs, and view all applications

All pages are **fully dynamic** — no static data. Every section fetches live data from the backend on each request.

---

## ✨ Features

### 🏠 Home Page
- **Featured Jobs** — Dynamically shows admin-featured job listings
- **New Jobs** — Latest job postings in real time
- **Jobs by Category** — Shows job count per category, dynamically fetched
- Everything updates automatically as admin adds/removes jobs

### 💼 Jobs Page
- Browse all active job listings
- **Filter jobs** by:
  - Category
  - Job Type (Full-time, Part-time, Remote, Freelance)
  - Experience level
  - Salary range
- All filters work server-side for SEO and performance

### 📄 Job Details Page
- Full job description, requirements, salary, deadline
- Dynamic OG metadata for social sharing (per job)
- Apply directly from the page

### 🔐 Admin Panel (`/admin`)
- **Login** — Secure admin authentication with JWT cookie
- **Post a Job** — Create new job listings
- **Edit a Job** — Update existing job details
- **Delete a Job** — Remove job listings
- **Feature a Job** — Mark jobs to appear in the homepage featured section
- **View Applications** — See all applicants for each job listing
- All routes protected by middleware — redirects to login if unauthenticated

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | Framework (App Router, SSR) |
| [React 19](https://react.dev/) | UI Library |
| [Redux Toolkit](https://redux-toolkit.js.org/) | Client-side state (post job, get companies) |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |

---

## 📁 Project Structure

```
quickhire-frontend/
├── app/
│   ├── (public)/                   # Public routes
│   │   ├── page.tsx                # Home — featured jobs, new jobs, category counts (SSR)
│   │   ├── jobs/
│   │   │   ├── page.tsx            # All jobs + filters (SSR)
│   │   │   └── [id]/
│   │   │       └── page.tsx        # Job details + apply (SSR)
│   │   └── layout.tsx
│   ├── admin/                      # Admin dashboard (protected)
│   │   ├── auth/
│   │   │   └── login/
│   │   │       └── page.tsx        # Admin login
│   │   ├── jobs/
│   │   │   ├── page.tsx            # All jobs list (SSR)
│   │   │   ├── create/
│   │   │   │   └── page.tsx        # Post a job (SSR + Redux)
│   │   │   └── [id]/
│   │   │       └── edit/
│   │   │           └── page.tsx    # Edit job (SSR + Redux)
│   │   └── applications/
│   │       └── page.tsx            # View all applications (SSR)
│   ├── layout.tsx                  # Root layout (metadata, Redux provider)
│   └── not-found.tsx
├── components/                     # Reusable UI components
│   ├── home/                       # FeaturedJobs, NewJobs, CategoryCount
│   ├── jobs/                       # JobCard, JobFilter, JobList
│   └── admin/                      # AdminJobForm, ApplicationTable
├── lib/                            # Helpers, TextTruncate, fetchers
├── redux/                          # Redux store & slices
│   ├── store.ts
│   ├── provider.tsx
│   └── features/
│       └── jobs/
│           └── jobSlice.ts         # Post job + get companies (client-side only)
├── types/                          # TypeScript interfaces (Job, Application etc.)
├── middleware.ts                   # Protects /admin/* routes
├── .env                    # Environment variables
└── next.config.ts
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) `v18+`
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)
- Backend server running — see [QuickHire Backend](https://github.com/Hriday-paul/QBackend)

---

### 1. Clone the Repository

```bash
git clone https://github.com/Hriday-paul/Qtask.git
cd Qtask
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

```bash
.env #create a .env file to root
```

Then fill in the values (see [Environment Variables](#-environment-variables) below).

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Environment Variables

Create a `.env` file in the root of the project:

```dotenv
# -----------------------------------------------
# API
# -----------------------------------------------

# Used for Redux client-side requests (exposed to browser)
NEXT_PUBLIC_BASE_API=http://localhost:5100/api

# Used for SSR server-side fetch (not exposed to browser)
SERVER_BASE_API=http://localhost:5100/api


# -----------------------------------------------
# Image
# -----------------------------------------------

# Base URL for remote images served from backend
NEXT_PUBLIC_REMOTE_IMG_BASE=http://localhost:5100


# -----------------------------------------------
# Environment
# -----------------------------------------------

# Current environment — "dev" or "production"
NEXT_PUBLIC_production=dev
```

---

## 📜 Available Scripts

```bash
npm run dev        # Start development server (http://localhost:3000)
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```

---

## 🔄 Data Fetching Strategy

### ✅ Server-Side — Next.js `fetch` (used everywhere)

Every page fetches data on the server for SEO, performance, and real-time accuracy.

### ⚡ Client-Side — Redux Toolkit

---

## 🛡️ Route Protection

`middleware.ts` protects all `/admin/*` routes using the `accessToken` cookie:

```
/admin/*          →  requires accessToken cookie
/admin/auth/login →  public (redirects to /admin/jobs if already logged in)
/admin            →  redirects to /admin/jobs
```

Unauthenticated users are redirected to:
```
/admin/auth/login?next=/admin/the-page-they-tried-to-visit
```

---

## 🌐 SEO & Metadata

| Page | Type | Details |
|---|---|---|
| Home | Static metadata | `export const metadata` |
| Jobs listing | Static metadata | `export const metadata` |
| Job details | Dynamic metadata | `generateMetadata()` with live job data |
| Admin pages | Minimal metadata | No indexing needed |

- OG image size: **1200×630px**
- Robots: `index: true, follow: true` on public pages