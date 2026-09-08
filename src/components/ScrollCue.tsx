import { ScrollChevrons } from "./icons"

/**
 * The circular scroll cue (node 19001:698): a 122.934px ring with the
 * "Enter Experience" text on a circular path and a downward double chevron.
 */
export function ScrollCue() {
  return (
    <div className="absolute bottom-[29.07px] left-1/2 size-[122.934px] -translate-x-1/2 opacity-60">
      <svg viewBox="0 0 122.934 122.934" className="block size-full">
        <defs>
          <path
            id="cue-ring"
            d="M 61.467 61.467 m -48 0 a 48 48 0 1 1 96 0 a 48 48 0 1 1 -96 0"
          />
        </defs>
        <circle cx="61.467" cy="61.467" r="60.967" fill="none" stroke="white" strokeWidth="1" />
        <text className="fill-white text-[9px] tracking-[0.18em] uppercase">
          <textPath href="#cue-ring" startOffset="0">
            Enter Experience · Enter Experience ·
          </textPath>
        </text>
      </svg>
      <div className="absolute left-1/2 top-1/2 h-[39.737px] w-[25.147px] -translate-x-1/2 -translate-y-1/2 rotate-90">
        <ScrollChevrons />
      </div>
    </div>
  )
}
