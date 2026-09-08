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
 * Wheel geometry per Act 2 keyframe, in stage units. Radius and rotation come
 * from a least-squares circle fit over all 21 card centres in each source frame:
 *
 *   variant 1 (19001:1674, used by frames 19001:811 / 19001:879)  R 893.0
 *   variant 2 (19001:1805)                                        R 1022.8
 *   frame 19001:900                                               R 1020.0
 *   frame 19001:1051                                              R 1019.8, -29.8 deg vs 19001:900
 *
 * The five Component 2 variants step the wheel by -15 degrees each, so the
 * authored rotation range is 0 to -60 degrees while the radius opens from 893
 * to ~1020 and then holds.
 *
 * The centre is taken from variant 1's instance placement inside STAGE2
 * (instance origin -537.995, 345 plus the fitted local centre 1257.7, 1019.8)
 * and held constant. Figma reports the detached frames' children in a different
 * coordinate space, so their fitted centres are not comparable; radius and
 * rotation are coordinate-invariant and are what drive the motion.
 */
export const ORBIT_CENTER = { x: 719.7, y: 1364.8 }
export const ORBIT_START = { radius: 893, rotation: 0 }
export const ORBIT_END = { radius: 1020, rotation: -60 }
