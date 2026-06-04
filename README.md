# BahiTech Solutions

Portfolio site for **BahiTech.sa** — Midnight Sand theme, bilingual (EN/AR).

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (default: **http://localhost:3005**).

- English: `/` or `/en`
- Arabic: `/ar`

## Edit content

**`/data/content.ts`** — company info, stats, services, projects, NFC product, contact.

**`/lib/i18n/en.json`** and **`ar.json`** — nav labels, buttons, form UI.

## Images

Drop files in `/public/images/` and set `usePlaceholder: false` in `content.ts`. See `/public/images/README.md`.

## Theme

Midnight Sand palette — defined in `/styles/globals.css`. No blue accents.

## Stack

Next.js 14 · Tailwind · TypeScript · next-intl · Framer Motion · shadcn/ui
