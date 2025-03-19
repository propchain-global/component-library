import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "../button"
import { LucideChevronRight } from "lucide-react"
import Image from "next/image";


interface InsufficientStakingBannerProps extends React.ComponentProps<"div"> {

}

const InsufficientStakingBanner = React.forwardRef<HTMLDivElement, InsufficientStakingBannerProps>(
  ({ className,  ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn("flex items-center justify-between gap-4x w-full md:w-[480px] min-w-[300px] p-4x md:bg-[url('/insufficient-staking-banner.png')] bg-[url('/insufficient-staking-banner-mobile.png')] bg-cover bg-center rounded-xl",className)}
      >
        <div>
          <div className="text-body-l-medium text-foreground-white">
            Buy <span className="text-accent-strong">$WELF</span> to start staking, and earning rewards.
          </div>

          <div className="flex items-center gap-3x mt-6x">
            <Button
              variant="primary"
              size="l"
            >
              Buy $WELF
            </Button>

            <Button
              variant="link"
              size="l"
              IconRight={LucideChevronRight}
            >
              Learn more
            </Button>
          </div>

        </div>
        <Image src="welf-token.svg" width={122} height={120} alt="WELF token" className="hidden md:block" />
      </div>
    )
  }
)
InsufficientStakingBanner.displayName = "InsufficientStakingBanner"

export { InsufficientStakingBanner }
