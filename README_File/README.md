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