/**
 * The Figma "home" frames are all authored at a fixed 1440x810 stage.
 * Every measurement in this project is expressed in those design units and
 * scaled to the viewport at render time, so values can be transcribed from
 * Dev Mode verbatim.
 */
export const STAGE_W = 1440
export const STAGE_H = 810

/** Scale that makes the 1440x810 stage cover the viewport, as the design does. */
export function coverScale(vw: number, vh: number) {
  return Math.max(vw / STAGE_W, vh / STAGE_H)
}
