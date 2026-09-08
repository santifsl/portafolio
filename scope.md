# Scope

## Phase 1 — Exact recreation (CURRENT)
Goal: rebuild the Figma "home" frame sequence pixel-for-pixel, using the
ORIGINAL template images and content, before any of our own ideas go in.

- [ ] Export all original image assets from Figma (clouds, bg1, left-full,
      right-full, Preenchimento generativo, card images) and save to
      /src/assets/original/
- [ ] Recreate the scroll-driven card orbit exactly as it behaves across the
      ~11 keyframe "home" frames + Component 1/2 rotation range
- [ ] Use the original nav labels, headline ("Step Into Wonder" /
      "Create Beyond Reality"), and original 6 travel-destination cards
- [ ] Match fonts (Viaoda Libre, Imprima), colors, spacing exactly via Dev Mode
- Do NOT swap in our cave/snow concept or our own projects yet — that's Phase 2

## Phase 2 — Swap to our content (NOT STARTED)
Goal: once Phase 1 is visually/behaviorally confirmed working, swap only the
content — background images, card content, copy — without touching the
animation/structure that Phase 1 built.

- [ ] Replace background image layers with our cave→snow-mountain-range images
      (3-layer: foreground rock texture / mid mist / background vista —
      see docs/images.md for prompts)
- [ ] Replace 6 travel-destination cards with our 6 projects: AV, Along,
      Volunt-App, Kueski Smart Widget, Canchas, Arcane Kitchen
- [ ] Replace headline/subhead copy for a software engineering portfolio
- [ ] Replace nav labels if needed

## Explicitly out of scope for now
- New sections beyond the hero (footer, about, contact) — revisit after
  Phase 2 is done
