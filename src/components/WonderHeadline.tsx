import { StepChevron } from "./icons"

/**
 * Act 1 headline (node 19001:687). The group origin is stage (171, 196.02);
 * every child below is offset from it, matching the source frame:
 *
 *   Step     171, 196.02   60px
 *   chevron  centre 336.47, top 207.92, 16.934 x 25.147, rotated -90
 *   Into     367, 196.02   60px, right aligned in a 136px box
 *   Wonder   171, 257.02   77.114px
 *   body     229, 355.01   16px, 196.383 wide
 */
export function WonderHeadline() {
  return (
    <div className="absolute left-[171px] top-[196.02px]">
      <p className="font-display absolute left-0 top-0 whitespace-nowrap text-[60px] uppercase leading-[0.94] text-white">
        Step
      </p>

      <div className="absolute left-[165.47px] top-[11.9px] h-[25.147px] w-[16.934px] -translate-x-1/2 -rotate-90">
        <StepChevron />
      </div>

      <p className="font-display absolute left-[196px] top-0 w-[136px] whitespace-nowrap text-right text-[60px] uppercase leading-[0.94] text-white">
        Into
      </p>

      <p className="font-display absolute left-0 top-[61px] whitespace-nowrap text-[77.114px] uppercase leading-[0.94] text-white">
        Wonder
      </p>

      <p className="absolute left-[58px] top-[158.99px] w-[196.383px] text-[16px] leading-[1.2] text-white">
        Designing immersive digital experiences that blur the line between imagination, AI, and reality.
      </p>
    </div>
  )
}
