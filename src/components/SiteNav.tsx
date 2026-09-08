import { NavMark } from "./icons"

/** Nav labels and their exact x offsets, from node 19001:732. */
const LEFT = [
  { label: "Home", x: 0, active: true },
  { label: "Studio", x: 188.79, active: false },
  { label: "Experiences", x: 380.58, active: false },
]

const RIGHT = [
  { label: "Technologies", x: 804.56 },
  { label: "Journal", x: 1032.35 },
  { label: "Contact", x: 1230.14 },
]

export function SiteNav() {
  return (
    <nav className="absolute left-[82px] top-[14.68px] h-[48.409px] w-[1274.136px] text-[13px] leading-[1.2] text-white">
      {[...LEFT, ...RIGHT].map((item) => (
        <a
          key={item.label}
          href="#"
          className="absolute top-[16.2px] whitespace-nowrap"
          style={{
            left: `${item.x}px`,
            opacity: "active" in item && item.active ? 1 : 0.6,
          }}
        >
          {item.label}
        </a>
      ))}
      <div className="absolute bottom-[4.65px] left-1/2 h-[40.699px] w-[42.482px] -translate-x-1/2">
        <NavMark />
      </div>
    </nav>
  )
}
