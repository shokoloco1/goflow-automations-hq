
Plan: 3 targeted updates to align landing with new 4-service positioning.

**Change 1 — `src/pages/Index.tsx`**
- Remove imports: `ServicePricingSection`, `ServicesSection`
- Remove their `<div className="lazy-section">` render blocks
- Keep `ServicesPricingSection` (the 6-card Stripe section) untouched

**Change 2 — `src/i18n.ts`**
Update hero keys in both EN and ES blocks:
- `hero.badge`, `hero.title_1/2/3`, `hero.subtitle`
- `hero.stat_1_val/label` → $100 / consulting entry
- `hero.stat_2_val/label` → 72h / guaranteed delivery
- `hero.stat_3_val/label` → 4 / services scaled to need

**Change 3 — `index.html`**
- `<title>` → "GoFlow AI — Consultoría + Automatización AI para PyMEs | Ecuador y Australia"
- `<meta name="description">` → new agency-positioning copy
- Update `og:title`, `og:description`, `twitter:title`, `twitter:description`
- In JSON-LD: update `description` and add `offers` array with 6 services ($100, $399, $599, $999, $800, $300)

No other files touched. Note: ServicePricingSection.tsx file remains in the repo but unused (orphaned) — safe since instruction says targeted changes only.
