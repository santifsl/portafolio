import clouds from "../assets/original/clouds 1.png"
import fill from "../assets/original/Preenchimento generativo 1.png"
import objectBand from "../assets/original/Object.png"
import { CardOrbit } from "./CardOrbit"

/**
 * STAGE2 (node 19001:546) — the world seen through the portal, and the whole
 * view once the camera is through it.
 */
export function CloudWorld() {
  return (
    <div className="bg-stage absolute inset-0 overflow-hidden">
      <img data-layer="clouds" src={clouds} alt="" className="absolute max-w-none object-cover" />
      <img data-layer="fill" src={fill} alt="" className="absolute max-w-none object-cover" />

      {/* Rectangle 6 (node 19001:550): a vertically flipped gradient scrim. */}
      <div
        className="absolute left-0 top-0 h-[497px] w-[1440px] opacity-60"
        style={{
          background: "linear-gradient(to top, rgba(12,10,31,0.01), #0c0a1f)",
        }}
      />

      <p
        data-layer="act2-title"
        className="font-display absolute left-1/2 top-[146px] -translate-x-1/2 whitespace-nowrap text-center text-[77.114px] uppercase leading-[0.94] text-white"
      >
        Create Beyond Reality
      </p>
      <p
        data-layer="act2-sub"
        className="absolute left-1/2 top-[237px] w-[750px] -translate-x-1/2 text-center text-[24px] leading-[1.2] text-white"
      >
        Exclusive journeys to breathtaking destinations curated for travelers seeking rare and
        unforgettable experiences.
      </p>

      <CardOrbit />

      {/* "Object" / Component 4: the foreground cloud band, mirrored horizontally. */}
      <img
        data-layer="object"
        src={objectBand}
        alt=""
        className="absolute max-w-none"
        style={{ transform: "scaleX(-1)", transformOrigin: "center" }}
      />
    </div>
  )
}
