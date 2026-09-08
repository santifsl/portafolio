import { CARD_H, CARD_W } from "../data/cards"
import { ORBIT_CENTER, ORBIT_SLOTS } from "../data/orbit"
import { DestinationCard } from "./DestinationCard"

/**
 * The card wheel from Component 2 (node 19001:1673).
 *
 * Each card sits tangent to a circle: it is pushed `radius` up from the centre
 * and rotated by its own slot angle. Scroll drives `--orbit-rotation` and
 * `--orbit-radius` on the wrapper, so the whole wheel turns and opens without
 * re-rendering any card.
 */
export function CardOrbit() {
  return (
    <div
      className="absolute"
      style={{
        left: ORBIT_CENTER.x,
        top: ORBIT_CENTER.y,
        width: 0,
        height: 0,
        transform: "rotate(var(--orbit-rotation, 0deg))",
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
            transform: `rotate(${slot.angle}deg) translateY(calc(-1 * var(--orbit-radius, 893px)))`,
          }}
        >
          <DestinationCard card={slot.card} />
        </div>
      ))}
    </div>
  )
}
