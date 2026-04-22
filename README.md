# Sujai Portfolio

Personal portfolio site built with React, TypeScript, Vite, and Tailwind CSS.

This repository showcases a personal brand experience focused on immersive visuals, polished front-end execution, and a portfolio structure that is easy to maintain, review, and deploy. It combines production-ready React code, reusable content modules, curated static assets, and supporting design references so collaborators can quickly understand both the final site and the creative process behind it.

## What Is In This Repo

- `src/`: application source code, routes, UI components, and content data.
- `public/`: static assets served directly by Vite.
- `assets/`: a curated archive of the site images and icon files used in the current build.
- `docs/deployment.md`: deployment notes for Vercel and other static hosts.
- `docs/reference-html/`: older HTML reference pages kept for comparison and inspiration.
- `docs/design-previews/`: desktop and mobile design screenshots for review.

## Getting Started

```bash
npm install
npm run dev
```

## Available Scripts

- `npm run dev`: start the local Vite development server.
- `npm run build`: create a production build in `dist/`.
- `npm run lint`: run ESLint across the project.
- `npm run preview`: preview the production build locally.

## Project Structure

- `src/pages/`: top-level route screens.
- `src/components/`: layout, UI, and section components.
- `src/content/`: reusable portfolio text and structured content.
- `src/lib/`: form helpers and shared utilities.
- `scripts/generate-icons.mjs`: local generator for the SVG icon archive and sprite.

## Environment

Copy `.env.example` to `.env` and set `VITE_CONTACT_API_URL` if you want the contact form to post to a backend or form service.

## Deployment

Follow the instructions in `docs/deployment.md` to deploy the site to Vercel, Netlify, Cloudflare Pages, or another static host.

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.
