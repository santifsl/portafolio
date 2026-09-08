import { CARD_H, CARD_W } from "../data/cards"
import { ORBIT_SLOTS } from "../data/orbit"
import { DestinationCard } from "./DestinationCard"

/**
 * The card wheel from Component 2 (node 19001:1673).
 *
 * Each card sits tangent to a circle: it is pushed `--orbit-radius` up from the
 * centre and rotated by its own slot angle. Scroll drives the wheel's centre,
 * radius and rotation as custom properties, so the whole thing moves without
 * re-rendering a card.
 */
export function CardOrbit() {
  return (
    <div
      className="absolute h-0 w-0"
      style={{
        left: "var(--orbit-cx)",
        top: "var(--orbit-cy)",
        transform: "rotate(var(--orbit-rotation))",
      }}
    >
      {ORBIT_SLOTS.map((slot, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: -CARD_W / 2,
            top: -CARD_H / 2,
            width: CARD_W,
            height: CARD_H,
            transform: `rotate(${slot.angle}deg) translateY(calc(-1 * var(--orbit-radius)))`,
          }}
        >
          <DestinationCard card={slot.card} />
        </div>
      ))}
    </div>
  )
}
