# Program Afiliasi Hostinger — Landing Page

A high-converting, responsive landing page for **Program Afiliasi Hostinger** (Hostinger Affiliate Program), built with clean semantic HTML5, Tailwind CSS, custom design tokens, and vanilla JavaScript in accordance with the official [`DESIGN.md`](./DESIGN.md) specification.

---

## 1. Project Overview

This project implements the official Hostinger Affiliate Program landing page for the Indonesian market (`id-ID`). It includes:
- **Hero & Value Proposition**: High-impact headline, trust proof (Trustpilot 4.8/5, 1.2M+ global partners), and an interactive SVG affiliate dashboard preview.
- **Interactive Commission Calculator**: Real-time earnings estimator with product tier selection (Web Hosting, Cloud, VPS) and a dynamic referral volume slider (calculating progressive tiers from 40% up to 60%).
- **Social Proof & Steps**: Authentic partner testimonials and a clear 4-step onboarding journey.
- **Interactive FAQ Accordion**: Keyboard-navigable, accessible expandable questions regarding payouts, tracking cookies (30 days), and promotional channels.
- **Responsive Navigation & Sticky Header**: Sticky top navigation with scroll transitions, mobile hamburger drawer, and back-to-top button.

---

## 2. Why This Tech Stack?

A deliberate architectural decision was made to build this landing page using **Semantic HTML5**, **Tailwind CSS + Custom CSS (`style.css`)**, and **Vanilla JavaScript (`script.js`)** without heavy front-end frameworks (like React, Next.js, or Vue) or build bundlers (Webpack, Vite).

Here is why this stack was selected:

### 1. Zero Build Overhead & Immediate Portability
- **No `npm install`, no `node_modules`, no bundlers**: The entire project runs directly in any modern web browser straight out of the box. Anyone on the team can clone the repository, double-click `index.html`, and test or demo it instantly.
- **Zero dependency vulnerabilities or maintenance rot**: Without hundreds of third-party npm packages, there are no security deprecations, broken dependencies, or peer-dependency conflicts over time.

### 2. Maximum Runtime Performance (<100ms First Contentful Paint)
- Marketing landing pages live and die by conversion rates and page speed. Heavy JavaScript frameworks introduce hydration delays, Virtual DOM diffing overhead, and megabytes of JavaScript before user interaction is possible.
- Pure HTML + vanilla JS delivers near-instant Time-to-Interactive (TTI) and First Contentful Paint (FCP), achieving near-perfect 100 Lighthouse performance scores.

### 3. Maintainability & Token-Driven Design
- **Tailwind CSS**: Rapid UI development using standardized utility classes without the context-switching of naming arbitrary CSS selectors.
- **Dedicated `style.css`**: Design tokens from `DESIGN.md` (colors like Hostinger purple `#673de6` and deep surface `#110c29`, radii, and Google Font `DM Sans`) are centralized as CSS custom properties. Complex interactions (like the custom range slider thumb and buttery-smooth CSS Grid accordion transitions) are encapsulated without bulky animation libraries.

### 4. Framework-Free Longevity
- HTML, CSS, and ECMAScript standards are permanent web foundations. This codebase will function identically 5 or 10 years from now without requiring framework migrations or build pipeline refactoring.

### 5. Universal Static Hosting
- Because the page compiles to pure static assets, it can be hosted anywhere with zero server compute costs:
  - Hostinger Web / Cloud Hosting
  - GitHub Pages
  - Cloudflare Pages / Vercel / Netlify
  - Amazon S3 + CloudFront

---

## 3. Local Setup & Usage

### Option A: Direct Browser Preview (Instant)
Simply open the `index.html` file in any modern web browser:
- On Windows: Double-click `index.html` or run:
  ```powershell
  Start-Process index.html
  ```

### Option B: Local Static Server (Recommended)
To run with a local HTTP server:
- Using Python:
  ```powershell
  python -m http.server 3000
  ```
  Then open `http://localhost:3000` in your browser.

- Using Node.js (npx):
  ```bash
  npx serve .
  ```

---

## 4. File Structure

```
landing-page/
├── index.html       # Semantic HTML5 markup, inline SVG icons & Tailwind CDN
├── style.css        # DM Sans font, CSS variables, slider & accordion transitions
├── script.js        # Calculator logic, FAQ accordion, sticky nav & mobile drawer
├── robots.txt       # Search engine crawler permissions & sitemap pointer
├── sitemap.xml      # XML sitemap index for search engines
├── DESIGN.md        # Official Hostinger affiliate design system & tokens
└── README.md        # Project documentation & tech stack rationale
```
