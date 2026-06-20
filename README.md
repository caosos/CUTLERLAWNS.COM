# Cutler Lawns self-hosted full-stack app

Cutler Lawns / **Cutler Property Preservation & Landscape Services** is now structured as a self-hosted Next.js application for `cutlerlawns.com`.

## Purpose

Commercial-first landscaping, property preservation, winter response, residential division, product/project cart, estimate calculators, gallery/story/pamphlet content, review-source trust content, and an AI Yard Builder.

## Self-hosted deployment

This app is designed for a normal Node server you control. It does not depend on GitHub Pages or Vercel.

```bash
npm install
npm run build
PORT=3000 npm run start
```

`next.config.mjs` uses `output: 'standalone'` for server deployment packaging.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment variables

Copy `.env.example` to `.env.local`. Keep all secrets server-side.

- `AI_PROVIDER=mock` by default for placeholder concepts.
- Add future provider keys such as `OPENAI_API_KEY` only on the server.
- Review credentials can be connected later for Birdeye/Google Business Profile.

## Uploads

The upload API stores local files in `/public/uploads/` through `app/api/uploads/route.ts` and `lib/storage.ts`. The storage helper is intentionally small so it can later be replaced with S3-compatible storage.

## Data/content structure

Editable MVP data lives in `lib/data.ts`:
- products and plant items
- categories through product `category`
- gallery items
- pamphlets
- review sources

## AI design flow

The UI at `/design` supports:
1. property image upload
2. area selection
3. products/plants selection
4. style and budget selection
5. server-side prompt building
6. mock concept gallery
7. save/request estimate/add-to-cart buttons

`lib/ai.ts` builds prompts that preserve the uploaded property scene and improve only the selected landscape zone. Real image generation can be connected in `generateDesignConcept()` with server-side API keys.

## Implemented vs scaffolded

Implemented:
- Next.js self-hosted app
- commercial-first homepage
- AI studio UI and API routes
- local upload handling
- product/plant catalog
- project cart quote form UI
- estimate calculators
- gallery/story/video/pamphlet placeholders
- review-source pages
- asset documentation

Scaffolded for production connection:
- real AI provider image generation
- email/CRM submission for quote forms
- live review feeds
- authenticated admin editing

## Assets

See `public/images/README.md` for image, video thumbnail, upload, and pamphlet filenames/locations.
