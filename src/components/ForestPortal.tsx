import bg1 from "../assets/original/bg1 1.png"
import leftFull from "../assets/original/left-full 1.png"
import rightFull from "../assets/original/right-full 1.png"

/**
 * The forest that frames the portal. `bg1 1` carries the hole the cloud world
 * shows through; `left-full 1` / `right-full 1` are the foreground trees that
 * sweep past the camera on the way in.
 */
export function ForestPortal() {
  return (
    <div data-layer="forest" className="pointer-events-none absolute inset-0">
      <img data-layer="bg1" src={bg1} alt="" className="absolute max-w-none object-cover" />

      {/* Node 19001:686 — scrim under the headline. */}
      <div
        className="absolute left-0 top-[497px] h-[313px] w-[1440px] opacity-60"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0), #000)" }}
      />

      <img data-layer="leftFull" src={leftFull} alt="" className="absolute max-w-none object-cover" />
      <img data-layer="rightFull" src={rightFull} alt="" className="absolute max-w-none object-cover" />
    </div>
  )
}
