# 🌐 Dark SaaS Blockchain Site

A modern, content-rich website for a blockchain SaaS company, built with **Astro**, **Tailwind CSS**, and **TypeScript**. Includes a blog (Markdown posts), careers page (job positions), contact page, and dynamic sections.

![Site Preview](./public/assets/images/preview.png)
> *Add a screenshot named `preview.png` inside `public/assets/images/` to display it.*

---

## 🚀 Features

- ⚡ **Astro 4** – static site generator with partial hydration
- 🎨 **Tailwind CSS** – fully responsive, dark-themed design
- 📝 **Content Collections** – blog posts (`.md`) and job positions (`.md`)
- 🧩 **Reusable components** – Card, Circle, CutCornerButton, Hexagon, Tag, TextButton
- 📄 **Pages** – Home, Blog (index & individual posts), Careers, Contact
- 🧠 **TypeScript** – type-safe content & components
- 🗂️ **Modular sections** – Hero, FeaturesGrid, FeaturesCards, Testimonials, LatestPosts, CallToAction, Footer

---

## 🛠️ Tech Stack

| Category          | Tools                                      |
|-------------------|--------------------------------------------|
| Framework         | Astro 4                                    |
| Language          | TypeScript                                 |
| Styling           | Tailwind CSS, CSS (global.css)             |
| Content           | Markdown, Astro Content Collections        |
| Icons & Assets    | SVG, PNG (in public/assets)                |
| Deployment        | Vercel / Netlify (Astro adapter)           |

---

## 📁 Folder Structure (Expanded Tree)

```plaintext
project-root/
├── public/
│   └── assets/
│       └── images/
│           ├── avatar-*.jpg
│           ├── cone.png
│           ├── cube.png
│           ├── cuboid.png
│           ├── cut-corner.svg
│           ├── cylinder.png
│           ├── hemisphere.png
│           ├── hexagon.svg
│           ├── icosahedron.png
│           ├── logo.svg
│           ├── pill.png
│           ├── torus-knot.png
│           └── torus.png
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Card.tsx
│   │   ├── Circle.tsx
│   │   ├── CutCornerButton.tsx
│   │   ├── Hexagon.tsx
│   │   ├── Input.astro
│   │   ├── InteriorContent.astro
│   │   ├── InteriorHero.astro
│   │   ├── Tag.tsx
│   │   ├── TextButton.tsx
│   │   ├── Textarea.astro
│   │   └── .gitkeep
│   ├── content/
│   │   ├── blog/
│   │   │   ├── blockchain-in-healthcare-new-frontier.md
│   │   │   ├── blockchain-interoperability-connecting-networks.md
│   │   │   ├── blockchain-role-decentralized-finance-defi.md
│   │   │   ├── blockchain-scalability-challenges-solutions.md
│   │   │   ├── blockchain-security-protecting-digital-assets.md
│   │   │   ├── environmental-impact-of-blockchain.md
│   │   │   ├── how-nfts-changing-digital-ownership.md
│   │   │   ├── regulatory-challenges-facing-blockchain.md
│   │   │   ├── smart-contracts-future-legal-agreements.md
│   │   │   └── tokenomics-understanding-blockchain-economics.md
│   │   └── positions/
│   │       ├── frontend-developer.md
│   │       ├── marketing-specialist.md
│   │       ├── product-manager.md
│   │       └── ux-designer.md
│   │   └── config.ts                (content collection schema)
│   ├── layouts/
│   │   └── DefaultLayout.astro
│   ├── pages/
│   │   ├── blog/
│   │   │   ├── [...slug].astro      (dynamic blog post route)
│   │   │   └── index.astro          (blog listing)
│   │   ├── careers.astro
│   │   ├── contact.astro
│   │   └── index.astro              (homepage)
│   ├── sections/
│   │   ├── CallToAction.tsx
│   │   ├── FeaturesCards.tsx
│   │   ├── FeaturesGrid.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── LatestPosts.tsx
│   │   └── Testimonials.tsx
│   ├── styles/
│   │   └── global.css
│   ├── utils/
│   │   └── postUtils.ts
│   └── env.d.ts
├── .gitignore
├── .hintrc
├── README.md
├── astro.config.mjs
├── package-lock.json
├── package.json
├── tailwind.config.mjs
└── tsconfig.json

## 🧪 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm**, **yarn**, or **pnpm**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/AhmedSaadRF/dark-saas-blockchain-site.git
   cd dark-saas-blockchain-site
Install dependencies

bash
npm install
Run the development server

bash
npm run dev
Open http://localhost:4321 – default Astro port.

📦 Build for Production
bash
npm run build
The output will be in the dist/ folder. Deploy to Vercel, Netlify, or any static host.

✍️ Content Management
Blog Posts
Location: src/content/blog/

Format: Markdown (.md)

Add a new post by creating a .md file with the required frontmatter.

Job Positions
Location: src/content/positions/

Format: Markdown (.md)

Each file represents a job opening (e.g., frontend-developer.md).

The content collections are defined in src/content/config.ts using Astro’s built‑in collection schemas.

🧩 Key Components
Component	Purpose
Card.tsx	Reusable card for features / posts
Circle.tsx	Animated circle graphic
CutCornerButton.tsx	Button with cut‑corner design
Hexagon.tsx	Hexagon shape for visual accents
Tag.tsx	Label / tag for categories
TextButton.tsx	Text‑only button with hover effect
🐞 Common Issues
Tailwind classes not applying
Make sure tailwind.config.mjs includes:

js
content: ['./src/**/*.{astro,js,ts,jsx,tsx}']
Then restart the dev server.

Content collection errors
Verify that every Markdown file includes the required frontmatter fields defined in config.ts.

Images not loading
Check that image paths are correct (e.g., /assets/images/cone.png).
Public assets are served from the root – do not add public/ to the path.

📌 Future Improvements
Add search functionality for blog posts

Implement RSS feed

Add dark/light mode toggle (currently dark‑only)

Integrate a form handler for the contact page

Add pagination for blog listing

👨‍💻 Author
Ahmed Saad Alrefaey (RFRF)

GitHub: @AhmedSaadRF

Portfolio: ahmed-alrefaey.vercel.app

⭐️ If you like this project, give it a star on GitHub!
