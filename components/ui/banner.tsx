import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "./button"



interface BannerProps extends React.ComponentProps<"div"> {

}

const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  ({ className,  ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn("w-full md:w-[1080px] min-w-[320px] md:p-8x p-6x md:bg-[url('/banner-bg.png')] bg-[url('/banner-bg-mobile.png')] bg-cover bg-center rounded-xl",className)}
      >
        <div className="md:text-display-m-strong text-display-xs-strong text-foreground-white">
          Welcome to the <br />
          <span className="text-accent-strong">World of WELF</span>
        </div>
        <div className="mt-4x md:text-boy-m text-boy-s text-foreground-white max-w-[468px]">
          Welf Finance provides liquidity solutions, enabling borrowing and lending against Welf’s tokenized assets, facilitating seamless financial transactions within the ecosystem.
        </div>

        <div className="flex items-center gap-3x mt-8x">
          <Button
            variant="primary"
            size="xl"
          >
            Learn about WELF
          </Button>

          <Button
            variant="outline"
            size="xl"
          >
            Talk to an expert
          </Button>
        </div>
      </div>
    )
  }
)
Banner.displayName = "Banner"

export { Banner }
