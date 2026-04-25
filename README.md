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
