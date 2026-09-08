import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { ARRIVAL_INDEX, KEYFRAMES, type Box } from "../data/keyframes"
import { ORBIT_END, ORBIT_START } from "../data/orbit"
import { STAGE_H, STAGE_W } from "../lib/stage"
import { CloudWorld } from "./CloudWorld"
import { ForestPortal } from "./ForestPortal"
import { ScrollCue } from "./ScrollCue"
import { SiteNav } from "./SiteNav"
import { StatCards } from "./StatCards"
import { WonderHeadline } from "./WonderHeadline"

gsap.registerPlugin(ScrollTrigger)

/** Layers whose box is interpolated straight from the Figma keyframes. */
const BOX_LAYERS = ["clouds", "fill", "bg1", "leftFull", "rightFull"] as const
type BoxLayer = (typeof BOX_LAYERS)[number]

const boxProps = (b: Box) => ({ x: b.x, y: b.y, width: b.w, height: b.h })

/** "Object" is centred on the stage; see the note in keyframes.ts. */
const OBJECT_CENTER_X = 757.5
function objectProps(o: NonNullable<(typeof KEYFRAMES)[number]["object"]>) {
  return {
    x: OBJECT_CENTER_X + o.dx - o.w / 2,
    y: o.y,
    width: o.w,
    height: o.h,
  }
}

/**
 * The inner headline is authored small inside the portal (node 19001:551) and
 * full size once through it (node 19001:885). Both text and orbit scale by the
 * same 2.238x factor between those states.
 */
const ACT1_TITLE = { size: 34.464, top: 7.16 }
const ACT2_TITLE = { size: 77.114, top: 146 }
const ACT1_SUB = { size: 10.726, top: 47.81, width: 335.196 }
const ACT2_SUB = { size: 24, top: 237, width: 750 }

/** Group 49's box per frame, used to carry the Act 1 UI through the flight. */
const STAT_BOXES: (Box | null)[] = [
  { x: 891, y: -236.5, w: 573.6, h: 733.5 },
  { x: 891, y: 273.5, w: 573.6, h: 223.5 },
  { x: 891, y: 273.5, w: 573.6, h: 223.5 },
  { x: 871, y: 273.5, w: 573.6, h: 223.5 },
  { x: 891, y: 273.5, w: 573.6, h: 223.5 },
  { x: 1590.5, y: -425.2, w: 3677.7, h: 1449.2 },
  null,
  null,
  null,
]

export function HomeSequence() {
  const root = useRef<HTMLDivElement>(null)
  const stage = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const q = (sel: string) => self.selector!(sel)[0] as HTMLElement

      // Scale the fixed 1440x810 stage to cover the viewport, as the design does.
      const fit = () => {
        const el = stage.current
        if (!el) return
        const scale = Math.max(window.innerWidth / STAGE_W, window.innerHeight / STAGE_H)
        el.style.transform = `translate(-50%, -50%) scale(${scale})`
      }
      fit()
      window.addEventListener("resize", fit)

      const layers = Object.fromEntries(
        BOX_LAYERS.map((name) => [name, q(`[data-layer="${name}"]`)]),
      ) as Record<BoxLayer, HTMLElement>
      const objectEl = q('[data-layer="object"]')
      const orbitEl = q('[data-layer="orbit-vars"]')
      const forestEl = q('[data-layer="forest"]')
      const act1El = q('[data-layer="act1"]')
      const arrivalEl = q('[data-layer="arrival"]')
      const titleEl = q('[data-layer="act2-title"]')
      const subEl = q('[data-layer="act2-sub"]')
      const statsEl = q('[data-layer="stats"]')

      const first = KEYFRAMES[0]

      // Initial state — keyframe 0.
      for (const name of BOX_LAYERS) {
        const b = first[name]
        if (b) gsap.set(layers[name], boxProps(b))
      }
      if (first.object) gsap.set(objectEl, objectProps(first.object))
      // Set the custom properties on the element directly; GSAP otherwise reads
      // an empty computed value and tweens the radius up from 0.
      orbitEl.style.setProperty("--orbit-rotation", `${ORBIT_START.rotation}deg`)
      orbitEl.style.setProperty("--orbit-radius", `${ORBIT_START.radius}px`)
      gsap.set(act1El, { opacity: 0 })
      // The cloud world is visible through the portal from the first frame; only
      // the orbit is withheld, matching the source where the Act 1 wheel sits far
      // above the frame rather than travelling into place.
      gsap.set(arrivalEl, { opacity: 0 })
      gsap.set(titleEl, { fontSize: ACT1_TITLE.size, top: ACT1_TITLE.top })
      gsap.set(subEl, { fontSize: ACT1_SUB.size, top: ACT1_SUB.top, width: ACT1_SUB.width })
      gsap.set(statsEl, { x: STAT_BOXES[0]!.x, y: STAT_BOXES[0]!.y, opacity: 0 })

      const steps = KEYFRAMES.length - 1
      const tl = gsap.timeline({
        defaults: { ease: "none", duration: 1 },
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: `+=${steps * 100}%`,
          scrub: 0.6,
          pin: stage.current,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      for (let i = 1; i < KEYFRAMES.length; i++) {
        const kf = KEYFRAMES[i]
        const prev = KEYFRAMES[i - 1]
        const at = i - 1

        for (const name of BOX_LAYERS) {
          const b = kf[name] ?? prev[name]
          if (b) tl.to(layers[name], boxProps(b), at)
        }

        const obj = kf.object ?? prev.object
        if (obj) tl.to(objectEl, objectProps(obj), at)

        const stat = STAT_BOXES[i] ?? STAT_BOXES[i - 1]
        if (stat) {
          tl.to(
            statsEl,
            { x: stat.x, y: stat.y, scale: stat.w / STAT_BOXES[1]!.w, opacity: i === 1 ? 1 : undefined },
            at,
          )
        }
      }

      // Act 1 chrome rises with the portal, then leaves with the forest.
      tl.to(act1El, { opacity: 1 }, 0)
      tl.to([act1El, forestEl, statsEl], { opacity: 0 }, ARRIVAL_INDEX - 1)
      // Act 2 arrives as the camera comes through.
      tl.to(arrivalEl, { opacity: 1 }, ARRIVAL_INDEX - 1)
      // The inner headline grows from its through-the-portal size to full size.
      tl.to(titleEl, { fontSize: ACT2_TITLE.size, top: ACT2_TITLE.top, duration: ARRIVAL_INDEX }, 0)
      tl.to(
        subEl,
        { fontSize: ACT2_SUB.size, top: ACT2_SUB.top, width: ACT2_SUB.width, duration: ARRIVAL_INDEX },
        0,
      )

      // The wheel opens and turns across the Act 2 frames.
      tl.fromTo(
        orbitEl,
        {
          "--orbit-rotation": `${ORBIT_START.rotation}deg`,
          "--orbit-radius": `${ORBIT_START.radius}px`,
        },
        {
          "--orbit-rotation": `${ORBIT_END.rotation}deg`,
          "--orbit-radius": `${ORBIT_END.radius}px`,
          duration: steps - ARRIVAL_INDEX,
        },
        ARRIVAL_INDEX,
      )

      return () => window.removeEventListener("resize", fit)
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={root} style={{ height: `${KEYFRAMES.length * 100}vh` }}>
      <div className="fixed inset-0 overflow-hidden">
        <div
          ref={stage}
          className="absolute left-1/2 top-1/2 origin-center"
          style={{ width: STAGE_W, height: STAGE_H }}
        >
          <div data-layer="orbit-vars" className="absolute inset-0">
            <CloudWorld />
          </div>

          <ForestPortal />

          <div data-layer="stats" className="absolute inset-0 origin-top-left">
            <StatCards />
          </div>

          <div data-layer="act1" className="absolute inset-0">
            <WonderHeadline />
            <ScrollCue />
          </div>

          <SiteNav />
        </div>
      </div>
    </div>
  )
}
