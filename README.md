# Yared Worku — Portfolio

A React + Vite + Tailwind CSS v4 portfolio site.

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

This outputs static files to `dist/`, which you can deploy anywhere (Vercel, Netlify, GitHub Pages, etc).

## Before you publish — things to personalize

Search the project for these placeholders and swap in your real info:

- `src/components/Contact.jsx` — replace `your.email@example.com`, GitHub, and LinkedIn URLs
- `src/components/Nav.jsx` — the `yared@portfolio` handle in the top-left if you want a different one
- `src/components/Projects.jsx` — replace `#` in each project's `links.code` and `links.demo` with real GitHub repo / live demo URLs
- Add a favicon of your own at `public/favicon.svg` if you'd like

## Structure

```
src/
  components/   — Nav, Hero, About, Skills, Projects, Experience, Education, Contact, Footer
  hooks/        — useReveal.js (scroll-triggered fade-in)
  index.css     — design tokens (colors, fonts) + global styles
  App.jsx       — page assembly
```
