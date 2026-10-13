# Naruda site

Built on the ai-product-portfolio template (Next 16, React 19, Tailwind 4). Assets and copy came from `../original-site`.

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build
```

## Where things live
- `lib/products.ts`: product catalogue: copy, pack sizes, prices, and each product's hero colours (`palette.orb` sets the orb gradient, `palette.accent` the text accent)
- `lib/site.ts`: contact details, socials, WhatsApp link, Naruda green tokens
- `lib/legal.ts`: privacy, terms, delivery and returns copy (served at `/privacy`, `/terms`, `/delivery`, `/returns`)
- `components/brand/naruda-mark.tsx` and `app/icon.svg`: the hexagon mark (the favicon/apple icon are generated from the same paths)
- `components/sections/hero.tsx`: the colour-cycling hero. The orb, the "anywhere." accent, the product photo and the details all follow `activeIndex` (5s per product; pauses on hover; static for users who turn off animations)

Ordering is via WhatsApp for now. Online checkout is marked "coming soon" across the site.
