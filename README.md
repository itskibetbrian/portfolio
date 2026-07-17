# Kibet Brian | Full-Stack Software Engineer Portfolio

A high-performance, SEO-optimized, neo-brutalism themed developer portfolio built with **Next.js 15**, **React**, and **Tailwind CSS**. 

Designed to showcase technical expertise, recent project impact, and a comprehensive suite of services.

---

## 🚀 Features

- **Neo-Brutalism Design:** Distinctive, bold aesthetics with thick borders, hard shadows, and vibrant accent colors.
- **Performance First:** Optimized for maximum Lighthouse scores, utilizing Next.js Image component and minimal footprint assets.
- **Technical SEO:** Built-in rich metadata, Open Graph (OG) tags, Twitter cards, and GoogleBot directives to ensure excellent search visibility.
- **Responsive Architecture:** Fully optimized for all screen sizes, including custom mobile-specific UI behaviors (e.g., adaptive floating buttons).
- **Dynamic Animations:** Smooth hover transitions, scaling effects, and an infinite-scrolling logo marquee.
- **Component-Driven:** Clean, modular React architecture making it extremely easy to add new sections or update content.

---

## 🛠 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** Geist Mono & Onest (via `next/font/google`)

---

## 💻 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18.x or newer) installed.

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/itskibetbrian/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in Browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the site.

---

## 📂 Project Structure

- `app/`: Contains the Next.js App Router core files (`layout.tsx`, `page.tsx`, `globals.css`).
- `components/`: Contains all modular UI sections (`hero-section.tsx`, `portfolio-section.tsx`, `navigation.tsx`, etc.).
- `public/`: Static assets including `favicon.ico`, `icon.svg`, and the `images/` directory.

---

## 🎨 Customization Guide

### Updating Personal Information
Most personal details (bio, results, tags) are hardcoded into the component files for maximum performance.
- **Hero & General Bio:** Edit `components/hero-section.tsx`
- **Tech Stack:** Edit the `toolboxItems` array in `components/about-section.tsx`
- **Projects:** Edit the `portfolioProjects` array in `components/portfolio-section.tsx`
- **Social Links:** Edit the `href` attributes in `components/footer.tsx` and `components/navigation.tsx`

### Updating Images & Assets
To replace placeholder illustrations or avatars:
1. Place your new images into the `public/images/` directory.
2. Ensure they are optimized (WebP or compressed PNG/JPG).
3. Update the corresponding `<Image src="..." />` paths in the components.
   - *Example:* The hero avatar can be changed in `components/hero-section.tsx` by replacing `/images/avatar-illustration.png`.

### Updating SEO
Global SEO settings (Title, Description, Keywords, Open Graph URLs) can be modified inside `app/layout.tsx` in the exported `metadata` object.

---

## 📜 License & Credits

Built by [Kibet Brian](https://github.com/itskibetbrian).
*Original layout inspired by the Paperfolio template design by Brix Templates.*
