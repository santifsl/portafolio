import globalPartners from "../assets/original/image-33-global-partners.png"
import watchDemoA from "../assets/original/image-33-watch-demo-a.png"
import watchDemoB from "../assets/original/image-33-watch-demo-b.png"
import { PlayGlyph } from "./icons"

/**
 * "Group 49" (node 19001:704) — the three photo cards and their progress pills.
 *
 * All three photo layers are named "image 33" in Figma but are three different
 * images; each card's `img` inset reproduces that layer's own crop.
 */
type StatCard = {
  src: string
  label: string
  /** Left edge in stage units, from the source frame. */
  left: number
  /** The photo layer's box inside the 184x193 card. */
  img: { left: number; top: number; width: number; height: number }
  stat?: string
}

const CARDS: StatCard[] = [
  {
    src: watchDemoA,
    label: "Watch Demo",
    left: 891,
    img: { left: -0.31, top: 0, width: 184.612, height: 310.009 },
  },
  {
    src: globalPartners,
    label: "Global Partners",
    left: 1085.79,
    img: { left: -9.61, top: 193 - 36.13 - 341.244, width: 203.213, height: 341.244 },
    stat: "32",
  },
  {
    src: watchDemoB,
    label: "Watch Demo",
    left: 1280.59,
    img: { left: -18.97, top: -91.34, width: 221.941, height: 372.693 },
  },
]

/** Progress pills under the cards (node 19001:725). */
const PILL_OPACITY = [1, 0.4, 0.3, 0.2]

export function StatCards() {
  return (
    <div className="absolute inset-0">
      {CARDS.map((card, i) => (
        <div
          key={i}
          className="bg-card-shell absolute top-[273.5px] h-[193px] w-[184px] overflow-hidden rounded-[40px]"
          style={{ left: card.left }}
        >
          <img
            src={card.src}
            alt=""
            className="pointer-events-none absolute max-w-none object-cover"
            style={{
              left: card.img.left,
              top: card.img.top,
              width: card.img.width,
              height: card.img.height,
            }}
          />
          <div
            className="absolute left-0 top-[103px] h-[90px] w-[184px] backdrop-blur-[15px]"
            style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.36))" }}
          >
            <p className="absolute left-[calc(50%-17.68px)] top-[34.69px] w-[88.225px] text-[19px] leading-[1.2] text-white">
              {card.label}
            </p>
            {card.stat ? (
              <p className="font-display absolute left-[21.35px] top-[38.69px] whitespace-nowrap text-[40px] leading-[0.94] text-white">
                {card.stat}
              </p>
            ) : (
              <div className="absolute bottom-[12px] left-[12px] size-[45.442px]">
                <PlayGlyph />
              </div>
            )}
          </div>
        </div>
      ))}

      {PILL_OPACITY.map((opacity, i) => (
        <div
          key={i}
          className="absolute top-[489px] h-[8px] w-[17.508px] rounded-[99px] bg-white"
          style={{ left: 920 + i * 30.02, opacity }}
        />
      ))}
    </div>
  )
}
