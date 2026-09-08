# Scope

## Phase 1 — Exact recreation (CURRENT)
Goal: rebuild the Figma "home" frame sequence pixel-for-pixel, using the
ORIGINAL template images and content, before any of our own ideas go in.

- [x] Export all original image assets from Figma (clouds, bg1, left-full,
      right-full, Preenchimento generativo, card images) and save to
      /src/assets/original/
      Note: the 6 destination cards use no images (flat colour + text). The
      three photos belong to the Group 49 cluster (Global Partners / 2x Watch
      Demo); all three layers are named "image 33" in Figma but are three
      different images. Object re-exported at native width (1875x413).
- [x] Recreate the scroll-driven card orbit exactly as it behaves across the
      ~11 keyframe "home" frames + Component 1/2 rotation range
      9 visible frames (hidden 19001:1465 excluded). Rotation range is
      0 to -60 deg in -15 deg steps across Component 2's five variants; the
      keyframes hold 0 through arrival then step -30. Card band verified
      within 4px of the source rows.
- [x] Use the original nav labels, headline ("Step Into Wonder" /
      "Create Beyond Reality"), and original 6 travel-destination cards
      Duplicate "Private Retreats" reproduced verbatim, as agreed.
- [x] Match fonts (Viaoda Libre, Imprima), colors, spacing exactly via Dev Mode
      Viaoda Libre is self-hosted: the Google Fonts subset strips every
      stylistic set, and the design needs ss02 for the decorated O.
- Do NOT swap in our cave/snow concept or our own projects yet — that's Phase 2

### Open discrepancy
- Frame 1 (19001:347) renders as an open portal in the build but as a dark
  foliage close-up in Figma. Every layer is verified at its exact source box
  (bg1 -730..2169, left-full -783..1107, right-full 141..2031), and bg1's
  transparent hole (x 0.40-0.66 of the image) falls inside frame 1's visible
  window, so an open portal is what the layer data produces. The source's
  darkness is not explained by the geometry, alpha or CSS available through
  Dev Mode. Frames 2-9 match closely.

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
