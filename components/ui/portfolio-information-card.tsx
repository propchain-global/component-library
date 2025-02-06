import * as React from "react"

import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import { Avatar } from "./avatar"
import { ArrowUpRight, ArrowDownLeft, LockIcon, WalletIcon, GiftIcon, AlarmClock, ChevronRight } from "lucide-react"
import { Badge } from "./badge"
import { Button } from "./button"
import Image from "next/image";

const containerVariant = cva("flex items-center rounded-Button-xl border-Button-xl ", {
   variants: {
         size: {
            l: "flex h-Button-l-height  px-3x gap-Button-xl-label-horizontal min-w-Button-l",
            xl: "flex h-Button-xl-height  px-3x gap-Button-xl-label-horizontal border-Button-xl rounded-Button-xl min-w-Button-xl  "
         }
      
   }
})


interface PortfolioInformationWrapperProps extends React.ComponentProps<"div">, VariantProps<typeof containerVariant> {
   welfTokenAmount: number,
}

const PortfolioInformationWrapper = React.forwardRef<HTMLDivElement, PortfolioInformationWrapperProps>(({
   className, welfTokenAmount,  ...props
}, ref) => {
  
  return (
    <div ref={ref} className={cn(className, "relative w-full shrink-0 min-w-[312px] md:w-[680px] flex flex-col gap-4x")} {...props}>

      <div className="md:p-6x p-4x md:bg-[url('/banner-bg.png')] bg-[url('/banner-bg-mobile.png')] bg-cover bg-right rounded-xl">
         <div className='text-body-m-medium md:text-body-m-strong text-foreground-weakest md:mb-16x mb-4x'>My WELF</div>
         <div className="text-number-s md:text-number-xm text-foreground-weak mb-3x">
            {welfTokenAmount} <span className="text-body-xl-medium text-foreground-weakest">WELF</span>
         </div>
         <div className="flex items-center gap-1.5x">
            <div className="text-body-m-medium text-foreground-weak">$125.2k</div>
            <Badge 
               variant="secondary-info"
            >
               <ArrowUpRight className="w-3x" />
               2.45%
            </Badge>
         </div>
      </div>

      <div className="relative flex md:flex-row flex-col gap-3x">
         <div className="md:p-6x p-4x bg-weaker md:h-[324px] w-[332px] border border-default rounded-xl backdrop-blur-md flex flex-col justify-between">
            <div>
               <div className="flex justify-between items-center gap-2x mb-3x">
                  <div className="text-body-m-medium text-foreground-weakest">
                     Total Staked WELF
                  </div>
                  <div className="h-8x w-8x bg-gradinet-surface-linear rounded-full flex justify-center items-center text-foreground-weaker">
                     <LockIcon className="h-4x w-4x" />
                  </div>
               </div>
               <div className="text-number-s text-foreground-weak mb-2x">
                  16,313
                  <span className="text-body-l-strong text-foreground-weakest"> WELF</span>
               </div>
               
               <div className="flex items-center gap-1.5x">
                  <div className="text-body-s-medium text-foreground-weak">$56,606</div>
                  <Badge 
                     variant="secondary-info"
                  >
                     <ArrowUpRight className="w-3x" />
                     2.45%
                  </Badge>
               </div>
            </div>

            <Button 
               variant="primary"
               size="xl"
               className="mt-12x md:mt-0"
            >
               Explore staking
            </Button>
         </div>

         <div className="flex flex-col gap-4x grow w-[332px] relative overflow-hidden">
            <div className="md:h-[154px] gap-5px p-5x flex justify-between border border-default rounded-xl bg-weaker backdrop-filter-m border flex flex-col justify-between">
               <div className="flex justify-between items-center gap-2x mb-3x">
                  <div className="text-body-m-medium text-foreground-weakest">
                     Staking Reward
                  </div>
                  <div className="h-8x w-8x bg-gradinet-surface-linear rounded-full flex justify-center items-center text-foreground-weaker">
                     <GiftIcon className="h-4x w-4x" />
                  </div>
               </div>

               <div>
                  <div className="text-body-3xl-strong text-foreground-weak">4,350</div>
                  <div className="text-body-s-medium text-foreground-weakest mt-1x">WELF</div>
               </div>
            </div>
            <div className="md:h-[154px] gap-5px p-5x flex justify-between border border-default rounded-xl bg-weaker backdrop-filter-m border flex flex-col justify-between">
               <div className="flex justify-between items-center gap-2x mb-3x">
                  <div className="text-body-m-medium text-foreground-weakest">
                     Next Claim
                  </div>
                  <div className="h-8x w-8x bg-gradinet-surface-linear rounded-full flex justify-center items-center text-foreground-weaker">
                     <AlarmClock className="h-4x w-4x" />
                  </div>
               </div>

               <div>
                  <div className="text-body-3xl-strong text-foreground-weak">142 : 32 : 03</div>
                  <div className="text-body-s-medium text-foreground-weakest mt-1x">31 Days</div>
               </div>
            </div>

            {/* staked/locked token */}
            {/* <div className="absolute left-0 h-full w-full p-6x flex justify-end flex-col gap-6x bg-portfolio-info-blur-bg backdrop-blur-md rounded-xl">
               <Image src="welf-token.svg" width={128} height={126} alt="WELF token" />

               <div className="text-body-xl-medium text-foreground-weak">
                  Your <span className="text-accent-strong">$WELF</span> are securely locked, and earning rewards.
               </div>
            </div> */}
         </div>

         {/* no tokens (option to buy) */}
         {/* <div className="absolute left-0 h-full w-full p-6x flex justify-end flex-col gap-6x bg-portfolio-info-blur-bg backdrop-blur-md rounded-xl">
            <Image src="welf-token.svg" width={128} height={126} alt="WELF token" />

            <div className="md:text-body-xl-medium text-body-l-medium text-foreground-weak">
               Own <span className="text-accent-strong">$WELF</span> to unlock staking rewards, governance rights, and exclusive benefits.
            </div>
            
            <div className="flex md:flex-row flex-col items-center gap-6x">
               <Button
                  size="xl"
                  variant="primary"
                  className="w-full md:w-fit"
               >
                  Buy $WELF
               </Button>

               <Button
                  size="xl"
                  variant="link"
                  IconRight={ChevronRight}
               >
                  Learn how to buy $WELF
               </Button>
            </div>
         </div> */}

         {/* stake now */}
         {/* <div className="absolute left-0 h-full w-full p-6x flex justify-end flex-col gap-6x bg-portfolio-info-blur-bg backdrop-blur-md rounded-xl">
            <Image src="welf-token.svg" width={128} height={126} alt="WELF token" />

            <div className="md:text-body-xl-medium text-body-l-medium text-foreground-weak">
               You’ve got <span className="text-accent-strong">$WELF</span> in your wallet. Stake them now to start earning rewards!
            </div>
            
            <div className="flex md:flex-row flex-col items-center gap-6x">
               <Button
                  size="xl"
                  variant="primary"
                  className="w-full md:w-fit"
               >
                  Stake now
               </Button>

               <Button
                  size="xl"
                  variant="link"
                  IconRight={ChevronRight}
               >
                  Learn how to stake
               </Button>
            </div>
         </div> */}
      </div>

      {/* wallet not connected */}
      {/* <div className="absolute left-0 h-full w-full p-6x flex justify-end flex-col gap-6x bg-portfolio-info-blur-bg backdrop-blur-md border rounded-xl border-default">
         <Image src="welf-token.svg" width={128} height={126} alt="WELF token" />

         <div className="flex md:flex-row flex-col justify-between items-center md:gap-8x gap-6x">
            <div className="md:text-body-xl-medium text-body-l-medium">Personalized Wealth Management with Community and Lifestyle at its Core</div>
            <Button
               IconLeft={WalletIcon}
               variant="primary"
               size="xl"
               className="w-full md:w-fit"
            >
               Connect wallet
            </Button>
         </div>
      </div> */}
    </div>
  )
})

PortfolioInformationWrapper.displayName = "PortfolioInformationWrapper"

export { PortfolioInformationWrapper }