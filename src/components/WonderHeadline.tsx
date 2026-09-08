import { StepChevron } from "./icons"

/**
 * Act 1 headline (node 19001:687): "STEP > INTO" on one line at 60px with
 * "WONDER" beneath at 77.114px, plus the supporting paragraph.
 */
export function WonderHeadline() {
  return (
    <div className="absolute left-[171px] top-[196.12px]">
      <div className="relative h-[56px] w-[329px]">
        <p className="font-display absolute left-0 top-0 whitespace-nowrap text-[60px] uppercase leading-[0.94] text-white">
          Step
        </p>
        <div className="absolute left-[136.47px] top-[19.4px] h-[25.147px] w-[16.934px] -translate-x-1/2 -rotate-90">
          <StepChevron />
        </div>
        <p className="font-display absolute left-[164px] top-0 whitespace-nowrap text-[60px] uppercase leading-[0.94] text-white">
          Into
        </p>
      </div>
      <p className="font-display mt-[11.14px] whitespace-nowrap text-[77.114px] uppercase leading-[0.94] text-white">
        Wonder
      </p>
      <p className="mt-[38px] w-[196.383px] text-[16px] leading-[1.2] text-white">
        Designing immersive digital experiences that blur the line between imagination, AI, and reality.
      </p>
    </div>
  )
}
