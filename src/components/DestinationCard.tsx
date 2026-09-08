import { CARD_H, CARD_RADIUS, CARD_W, type Destination } from "../data/cards"
import { CardGlyph } from "./icons"

/**
 * One destination card, transcribed from Component 2's card frames.
 * Flat fill plus text — the source uses no photography on these.
 */
export function DestinationCard({ card }: { card: Destination }) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: CARD_W,
        height: CARD_H,
        borderRadius: CARD_RADIUS,
        background: card.bg,
        color: card.fg,
      }}
    >
      <p
        className="font-display absolute left-[16.76px] top-[88.72px] w-[161.751px] text-[32px] leading-[0.94]"
        style={{ color: card.fg }}
      >
        {card.title}
      </p>
      <p
        className="absolute left-[16.76px] top-[165.22px] w-[183.26px] text-[16px] leading-[1.2] opacity-60"
        style={{ color: card.fg }}
      >
        {card.body}
      </p>
      <div className="absolute right-[12px] top-[12px] size-[45.442px]">
        <CardGlyph bg={card.bg} fg={card.fg} />
      </div>
    </div>
  )
}
