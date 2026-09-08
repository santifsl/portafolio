import { DESTINATIONS, type Destination } from "./cards"

const D = DESTINATIONS

/**
 * The 21 orbit slots, transcribed from Component 2 / Property 1=Frame 1597882313
 * (node 19001:1674). `angle` is the card's own rotation in Figma, which is also
 * its angular position on the wheel — cards sit tangent to the circle.
 *
 * The spacing is a uniform 15 degrees across the front arc, then steps by 22.06
 * into the back arc. That irregularity is authored, not a rounding artefact, so
 * the angles are listed verbatim rather than generated.
 */
export type OrbitSlot = { angle: number; card: Destination }

export const ORBIT_SLOTS: OrbitSlot[] = [
  { angle: -157.06, card: D.privateRetreatsViolet },
  { angle: -142.06, card: D.exclusiveAccess },
  { angle: -127.06, card: D.natureEscapes },
  { angle: -112.06, card: D.privateRetreatsBlue },
  { angle: -97.06, card: D.curatedAdventures },
  { angle: -82.06, card: D.luxuryConcierge },
  { angle: -67.06, card: D.privateRetreatsBlue },
  { angle: -45, card: D.privateRetreatsViolet },
  { angle: -30, card: D.exclusiveAccess },
  { angle: -15, card: D.natureEscapes },
  { angle: 0, card: D.privateRetreatsBlue },
  { angle: 15, card: D.curatedAdventures },
  { angle: 30, card: D.luxuryConcierge },
  { angle: 45, card: D.privateRetreatsBlue },
  { angle: 67.06, card: D.privateRetreatsViolet },
  { angle: 82.06, card: D.exclusiveAccess },
  { angle: 97.06, card: D.natureEscapes },
  { angle: 112.06, card: D.privateRetreatsBlue },
  { angle: 127.06, card: D.curatedAdventures },
  { angle: 142.06, card: D.luxuryConcierge },
  { angle: 157.06, card: D.privateRetreatsBlue },
]

/**
 * Wheel geometry per Act 2 keyframe, in stage units, from a least-squares
 * circle fit over all 21 card centres in each source frame:
 *
 *   frames 19001:811 / 19001:879  Component 2 variant 1 (19001:1674)
 *                                 instance origin (-537.995, 345) + local
 *                                 centre (1257.7, 1019.8) -> (719.7, 1364.8), R 893
 *   frame  19001:900              centre (840.1, 1521.8), R 1020.0
 *   frame  19001:1051             centre (815.7, 1547.2), R 1019.8
 *
 * Component 2's five variants step the wheel by -15 degrees each, so the
 * authored range is 0 to -60. The keyframes do not sample it evenly: frames
 * 19001:811 and 19001:879 both instance variant 1, so the wheel holds at 0
 * through arrival and then turns -30 per frame.
 *
 * The centre descends as the radius opens, which keeps the top of the card band
 * roughly stationary (measured at y 347 / 347 / 363 / 375 in the source renders)
 * rather than letting it climb.
 *
 * The last two centres are nudged up 20px and 32px from the raw fit. The cards
 * are hand-placed and not perfectly concentric, so the fit sits slightly low;
 * these offsets land the rendered card band on the measured source rows.
 */
export type OrbitState = { cx: number; cy: number; radius: number; rotation: number }

/** Indexed by keyframe; null before the wheel is revealed. */
export const ORBIT_STATES: (OrbitState | null)[] = [
  null,
  null,
  null,
  null,
  null,
  { cx: 719.7, cy: 1364.8, radius: 893, rotation: 0 },
  { cx: 719.7, cy: 1364.8, radius: 893, rotation: 0 },
  { cx: 840.1, cy: 1501.8, radius: 1020.0, rotation: -30 },
  { cx: 815.7, cy: 1515.2, radius: 1019.8, rotation: -60 },
]

export const ORBIT_START = ORBIT_STATES[5]!
