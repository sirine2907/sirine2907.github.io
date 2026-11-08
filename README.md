# Sirine Ayadi · Portfolio

My portfolio website, with a page and real screenshots for each project.

Live at **https://sirine2907.github.io**

Built with Next.js (static export), TypeScript and plain CSS.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Add a project

1. Add an entry to `src/data/projects.ts`.
2. Put its screenshots in `public/work/<slug>/` as `.webp` files: a full-size version (`name.webp`) and a small one for the card (`name-sm.webp`).

## Deploy

Every push to `main` builds the site and publishes it to GitHub Pages with `.github/workflows/deploy.yml`.
