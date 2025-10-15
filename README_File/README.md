## 🧠 Next.js kya hai?

Next.js ek React framework hai —
yaani React ke upar bana hua ek powerful tool hai jo React app ko aur fast, SEO-friendly aur production-ready banata hai.

React sirf frontend UI library hai,
lekin Next.js uske upar kuch extra superpowers deta hai 🔥

## 🚀 Next.js kyu use karte hain?
1. SEO (Search Engine Optimization) Friendly
React apps by default client-side render hoti hain (browser me content load hota hai).
Search engines ko blank page milta hai.
Next.js server-side rendering (SSR) deta hai — jisse Google ko ready HTML milta hai ✅
👉 Isse SEO improve hota hai aur ranking better hoti hai.

2. Faster Performance
Next.js automatically pages ko pre-render karta hai.
Yaani har page pehle se server se HTML ke form me aata hai → app bahut fast load hoti hai ⚡

3. Routing Built-in Hoti Hai
React me react-router-dom install karna padta hai.
Next.js me folder structure se hi routes bante hain.
Bas file banao, route mil gaya ✅

 4. API Routes (Backend bhi bana sakte ho)
Next.js me aap chhote backend API endpoints bhi likh sakte ho.
Matlab ek hi project me frontend + backend dono bana sakte ho 💪

5. Image Optimization
Next.js me built-in <Image /> component milta hai
jo images ko automatically compress, resize aur lazy-load karta hai.
Isse website faster aur responsive banti hai.

6. Static aur Dynamic dono tarah ke pages
Static Generation (SSG): pehle se build hone wale pages (fastest)
Server-side Rendering (SSR): har request pe fresh data wala page
Client-side Rendering (CSR): jaise React me hota hai
Aap use-case ke hisaab se inme se koi bhi rendering method choose kar sakte ho ⚙️

7. Deployment Bahut Easy Hai
Next.js ko banaya hai Vercel ne
→ aur Vercel platform pe ek click me deploy ho jata hai 🔥
(Free hosting bhi milti hai)


## Setup Next App
bun create next-app@latest my-next-app

✔ What is your project named? … my-next-app
✔ Would you like to use TypeScript? … Yes
✔ Would you like to use Tailwind CSS? … Yes
✔ Would you like to use the App Router? (recommended) … Yes
✔ Would you like to customize the default import alias (@/*)? … Yes
✔ What import alias would you like configured? … @/*

Run 
cd my-next-app
bun dev

# Folder Structur -----------------------------------------------------------------------------------------------------

 // TODO:

 # 📂 Next.js 2025 Folder Structure (App Router Based)

> 🧠 This guide explains the **latest Next.js folder structure (v13–v15)** using the **App Router** system — the recommended approach for 2025 and beyond.

---

## ⚙️ Overview

Next.js App Router allows you to:
- Build **fullstack React apps** (frontend + backend)
- Use **Server Components** for fast performance
- Implement **SEO-optimized** pages automatically
- Create **file-based routing** (no need for React Router)
- Deploy instantly with **Vercel**

---

## 🏗️ Recommended Folder Structure

my-nextjs-app/
├── .next/ # Auto-generated build files (don't edit)
├── node_modules/ # Dependencies
├── public/ # Public assets (images, icons, etc.)
│ └── favicon.ico
├── src/ # Source folder (recommended)
│ ├── app/ # ⚡ Core App Router folder
│ │ ├── layout.tsx # Root layout (Navbar, Footer, etc.)
│ │ ├── page.tsx # Home page (/)
│ │ ├── about/ # Static route (/about)
│ │ │ └── page.tsx
│ │ ├── blog/
│ │ │ ├── page.tsx # /blog route
│ │ │ └── [id]/page.tsx # Dynamic route (/blog/1)
│ │ ├── api/ # ✅ API routes (Backend endpoints)
│ │ │ └── users/route.ts # Example API route (/api/users)
│ │ ├── loading.tsx # Global loading state
│ │ ├── error.tsx # Custom error UI
│ │ └── not-found.tsx # Custom 404 page
│ │
│ ├── components/ # Reusable UI components
│ │ ├── Navbar.tsx
│ │ └── Footer.tsx
│ │
│ ├── lib/ # Helper functions, configs, utilities
│ │ └── db.ts
│ │
│ ├── styles/ # Global & Tailwind CSS setup
│ │ └── globals.css
│ │
│ ├── hooks/ # Custom React hooks
│ │ └── useTheme.ts
│ │
│ ├── types/ # TypeScript types & interfaces
│ │ └── user.ts
│ │
│ └── middleware.ts # Route protection, redirects, etc.
│
├── .env.local # Environment variables
├── .gitignore
├── next.config.ts # Next.js configuration file
├── package.json
├── tailwind.config.ts # Tailwind CSS configuration
├── tsconfig.json # TypeScript configuration
└── README.md

markdown
Copy code

---

## 📘 Folder-by-Folder Explanation

| Folder/File | Description |
|--------------|-------------|
| **app/** | Core folder for all routes, layouts, pages, and API endpoints |
| **layout.tsx** | Shared layout (e.g. navbar/footer) used across routes |
| **page.tsx** | Defines a page (like `/index.html`) for that route |
| **loading.tsx** | Displays while server data is loading |
| **error.tsx** | Error handling for the route |
| **not-found.tsx** | Custom 404 page |
| **api/** | Create backend endpoints directly inside Next.js |
| **components/** | Reusable UI elements (Buttons, Navbar, Cards, etc.) |
| **lib/** | Utilities like API helpers, DB config, constants |
| **styles/** | Global CSS and Tailwind setup |
| **hooks/** | Custom React hooks |
| **types/** | TypeScript interfaces and types |
| **middleware.ts** | Logic for authentication, redirects, etc. |
| **public/** | Publicly accessible static files (images, icons, etc.) |

---

## 🌐 Routing System Example

| Folder Path | Generated URL | Type |
|--------------|---------------|------|
| `app/page.tsx` | `/` | Home Page |
| `app/about/page.tsx` | `/about` | Static Route |
| `app/blog/page.tsx` | `/blog` | Blog Listing Page |
| `app/blog/[id]/page.tsx` | `/blog/123` | Dynamic Route |
| `app/api/users/route.ts` | `/api/users` | API Endpoint |

---

## 🚀 Latest Features Included (Next.js 15)

✅ **App Router** (no more `pages/` folder)  
✅ **Server Components** (fetch data directly in components)  
✅ **Dynamic Metadata** via `generateMetadata()`  
✅ **Loading & Error States** (`loading.js`, `error.js`)  
✅ **Incremental Static Regeneration (ISR)**  
✅ **Server Actions** (form handling without API routes)  
✅ **Edge & Serverless Functions**  
✅ **Middleware-based Auth & Redirects**  
✅ **`next/image` & `next/font` optimization**  
✅ **Vercel Edge Deployment Support**