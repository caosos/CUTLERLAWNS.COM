# Cutler Lawns website

High-end commercial-first website for **Cutler Lawns** / **Cutler Property Preservation & Landscape Services** at `cutlerlawns.com`.

The site positions Cutler as a professional Central Arkansas exterior property maintenance company serving commercial properties first, with a residential lawn and landscape division also available.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Images and logo

Drop client-owned or explicitly licensed images into `public/images/` with these filenames:

- `cutler-logo.png` or `cutler-logo.svg`
- `commercial-lawn-care.jpg`
- `parking-lot-cleaning.jpg`
- `pressure-washing.jpg`
- `landscape-maintenance.jpg`
- `snow-ice-response.jpg`
- `residential-lawn-care.jpg`
- `before-after-cleanup.jpg`

The homepage already references `/images/commercial-lawn-care.jpg` for the hero visual. If the image is missing, the CSS gradient and placeholder text still keep the page presentable.

See `public/assets/source-assets.md` for the public source/asset research manifest and permission notes.

## Review integrations

The `ReviewSources` section is designed to avoid fake testimonials. Without live credentials, it shows source-linked review cards only and labels them as review sources.

To enable live reviews later, connect one of these options:

1. **Birdeye widget/embed**: add an approved Birdeye embed snippet through the site code or a server-rendered config value.
2. **Google Business Profile API**: implement a server-side loader using environment variables only. Do not expose private credentials in client JavaScript.

Expected environment placeholders are listed in `.env.example`.

## Contact form note

The contact form is front-end only. Before production, connect it to Formspree, Netlify Forms, Resend, or a custom API route so submissions are delivered.

## Assumptions

- No client-owned image files or logo were present in the repository, so the design uses CSS-based visual placeholders.
- Public Cutler pages and public review/profile pages were used only as source-linked references; no images were scraped or hotlinked.
- Optional city chips are service-area examples for Central Arkansas, not a guarantee of coverage for every property.
