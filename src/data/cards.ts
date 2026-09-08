/**
 * The six destination cards, transcribed from Component 2 (node 19001:1673).
 *
 * The template repeats "Private Retreats" for the sixth card with its own
 * colour rather than naming a distinct destination. Phase 1 reproduces the
 * source verbatim, duplicate included.
 */
export type Destination = {
  title: string
  body: string
  /** Card fill */
  bg: string
  /** Title/body colour, and the tint behind the corner glyph */
  fg: string
}

export const DESTINATIONS = {
  privateRetreatsBlue: {
    title: "Private Retreats",
    body: "Discover secluded destinations far from crowded tourism.",
    bg: "#c7e9f5",
    fg: "#263237",
  },
  curatedAdventures: {
    title: "Curated Adventures",
    body: "Experiences tailored to your lifestyle and preferences.",
    bg: "#f5ebc7",
    fg: "#373326",
  },
  luxuryConcierge: {
    title: "Luxury Concierge",
    body: "Dedicated support for every stage of your trip.",
    bg: "#cac7f5",
    fg: "#262637",
  },
  natureEscapes: {
    title: "Nature Escapes",
    body: "Reconnect with untouched landscapes and silence.",
    bg: "#e2f5c7",
    fg: "#313726",
  },
  exclusiveAccess: {
    title: "Exclusive Access",
    body: "Unlock locations unavailable to the public.",
    bg: "#f5c7c7",
    fg: "#372626",
  },
  privateRetreatsViolet: {
    title: "Private Retreats",
    body: "Discover secluded destinations far from crowded tourism.",
    bg: "#dec7f5",
    fg: "#2c2637",
  },
} satisfies Record<string, Destination>

/** Card box, constant across every orbit state. */
export const CARD_W = 226
export const CARD_H = 244
export const CARD_RADIUS = 40
