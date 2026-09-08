/**
 * Per-keyframe layer geometry, in stage units (1440x810), read straight out of
 * the Figma "Animation" page. The nine visible "home" frames are, in scroll
 * order:
 *
 *   0  19001:347   forest close-up, no UI
 *   1  19001:544   portal established, headline + stat cards
 *   2  19001:1266  portal drift
 *   3  19001:1202  portal drift
 *   4  19001:743   approach; inner world scales up
 *   5  19001:811   flight through the portal — forest layers blow past camera
 *   6  19001:879   arrival: pure cloud world
 *   7  19001:900   orbit turned
 *   8  19001:1051  orbit turned further
 *
 * 19001:1465 sits between frames 1 and 2 on the canvas but is hidden in the
 * source file, so it is excluded from the sequence.
 *
 * A `null` layer means that layer is absent from the source frame; the timeline
 * holds the previous box and fades the layer out.
 */
export type Box = { x: number; y: number; w: number; h: number }

export type Keyframe = {
  node: string
  clouds: Box
  fill: Box
  bg1: Box | null
  leftFull: Box | null
  rightFull: Box | null
  /**
   * The cloud band. Figma reports its x inside Component 2's local space rather
   * than the stage, so only `w`/`h` and the horizontal drift are transferable;
   * the band is centred on the stage and offset by `dx` (0 at frame 5, where the
   * placement is known exactly: centre x 757.5, top 397.31).
   */
  object: { w: number; h: number; y: number; dx: number } | null
}

export const KEYFRAMES: Keyframe[] = [
  {
    node: "19001:347",
    clouds: { x: -5.44, y: -17.7, w: 1228.88, h: 741.8 },
    fill: { x: -5.44, y: 480.6, w: 1228.88, h: 302.72 },
    bg1: { x: -729.68, y: -457.52, w: 2899.36, h: 1725.04 },
    leftFull: { x: -783.31, y: 0, w: 1890.46, h: 810 },
    rightFull: { x: 141, y: 0, w: 1890.46, h: 809.08 },
    object: { w: 2075.05, h: 457.08, y: 493.38, dx: -16.81 },
  },
  {
    node: "19001:544",
    clouds: { x: -6.43, y: -20.92, w: 1452.86, h: 877.01 },
    fill: { x: -6.43, y: 568.2, w: 1452.86, h: 357.89 },
    bg1: { x: -38.17, y: -46.09, w: 1516.34, h: 902.18 },
    leftFull: { x: -1410.46, y: 0, w: 1890.46, h: 810 },
    rightFull: { x: 987, y: 0, w: 1890.46, h: 809.08 },
    object: { w: 2453.26, h: 540.39, y: 583.31, dx: 289.16 },
  },
  {
    node: "19001:1266",
    clouds: { x: -6.43, y: -20.92, w: 1452.86, h: 877.01 },
    fill: { x: -6.43, y: 568.2, w: 1452.86, h: 357.89 },
    bg1: { x: -58.17, y: -46.09, w: 1516.34, h: 902.18 },
    leftFull: { x: -1470.46, y: 0, w: 1890.46, h: 810 },
    rightFull: { x: 927, y: 0, w: 1890.46, h: 809.08 },
    object: { w: 2453.26, h: 540.39, y: 583.31, dx: 289.16 },
  },
  {
    node: "19001:1202",
    clouds: { x: -6.43, y: -20.92, w: 1452.86, h: 877.01 },
    fill: { x: -6.43, y: 568.2, w: 1452.86, h: 357.89 },
    bg1: { x: -58.17, y: -46.09, w: 1516.34, h: 902.18 },
    leftFull: { x: -1510.46, y: 30, w: 1890.46, h: 810 },
    rightFull: { x: 887, y: 30, w: 1890.46, h: 809.08 },
    object: null,
  },
  {
    node: "19001:743",
    clouds: { x: 133, y: 3.24, w: 1174, h: 708.68 },
    fill: { x: -271.75, y: 482.83, w: 1983.51, h: 488.61 },
    bg1: { x: -38.17, y: -46.09, w: 1516.34, h: 902.18 },
    leftFull: { x: -1410.46, y: 0, w: 1890.46, h: 810 },
    rightFull: { x: 987, y: 0, w: 1890.46, h: 809.08 },
    object: { w: 3945.76, h: 869.15, y: 328.92, dx: 1035.41 },
  },
  {
    node: "19001:811",
    clouds: { x: -6.43, y: -20.92, w: 1452.86, h: 877.01 },
    fill: { x: -6.43, y: 568.2, w: 1452.86, h: 357.89 },
    bg1: { x: -4095.58, y: -2305.84, w: 9405.17, h: 5595.8 },
    leftFull: { x: -16257.75, y: -2756.34, w: 14982.23, h: 6419.39 },
    rightFull: { x: 2742.53, y: -2756.34, w: 14982.23, h: 6412.07 },
    object: { w: 1874.93, h: 413, y: 397, dx: 0 },
  },
  {
    node: "19001:879",
    clouds: { x: -6.43, y: -20.92, w: 1452.86, h: 877.01 },
    fill: { x: -6.43, y: 568.2, w: 1452.86, h: 357.89 },
    bg1: null,
    leftFull: null,
    rightFull: null,
    object: { w: 1874.93, h: 413, y: 397, dx: 0 },
  },
  {
    node: "19001:900",
    clouds: { x: -6.43, y: -20.92, w: 1452.86, h: 877.01 },
    fill: { x: -26.43, y: 568.19, w: 1452.86, h: 357.89 },
    bg1: null,
    leftFull: null,
    rightFull: null,
    object: { w: 1874.93, h: 413, y: 397, dx: -70 },
  },
  {
    node: "19001:1051",
    clouds: { x: -6.43, y: -20.92, w: 1452.86, h: 877.01 },
    fill: { x: -46.43, y: 568.19, w: 1452.86, h: 357.89 },
    bg1: null,
    leftFull: null,
    rightFull: null,
    object: { w: 1874.93, h: 413, y: 397, dx: -140 },
  },
]

/** Index of the frame where the camera arrives in the cloud world. */
export const ARRIVAL_INDEX = 5
