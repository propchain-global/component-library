import * as React from "react";
import { cn } from "@/lib/utils"
import { Badge } from "../badge";
import { ArrowUpRight, ArrowDownLeft, Wallet } from "lucide-react";
import Image from "next/image";
import { Button } from "../button";

interface stakingProps {
  stakedWelf: number,
  welfAmountInUSD: number,
  growthPercentage: number,
  stakingRewardWelf: number,
  rewardGrowthPercentage: number,
  stakingRewardUSD: number,
  vestingToClaimWelf: number,
  vestingClaimUSD: number,
  vestingGrowthPercentage: number,
}
interface StakingCardProps extends React.ComponentProps<"div"> {
  stakingDetails: stakingProps,
}



const StakingCard = React.forwardRef<HTMLDivElement, StakingCardProps>(
  ({ className, stakingDetails,  ...props }, ref) => {

    const {
      stakedWelf,
      welfAmountInUSD,
      growthPercentage,
      stakingRewardWelf,
      rewardGrowthPercentage,
      stakingRewardUSD,
      vestingToClaimWelf,
      vestingClaimUSD,
      vestingGrowthPercentage,
    } = stakingDetails

    return (
      <div
        ref={ref}
        {...props}
        className={cn("md:w-[620px] lg:w-[1080px] min-w-[320px] relative flex flex-col md:p-6x p-4x gap-4x bg-weaker border rounded-xl border-default overflow-hidden",className)}
      >
        <div className="relative broder rounded-xl bg-weakest gap-6x p-4x flex flex-col">
          <Image src="lock-icon.svg" width={112} height={112} alt="" className="absolute right-0 bottom-0" />
          <div className="text-body-s-medium text-foreground-weakest">Total Staked WELF</div>

          <div>
            <div className="text-body-2xl-strong text-foreground-weak">
              {stakedWelf}
              <span className="text-body-l-strong text-foreground-weakest"> WELF </span>
            </div>

            <div className="flex items-center mt-2x gap-2x">
              <div className="text-body-s-medium text-foreground-weakest">${welfAmountInUSD}</div>
              <Badge 
                variant={growthPercentage > 0 ? "secondary-info" : "secondary-error"}
              >
                {growthPercentage > 0 ? <ArrowUpRight className="w-3x" /> : <ArrowDownLeft className="w-3x" />}
                {growthPercentage}%
              </Badge>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4x">
          <div className="relative broder rounded-xl bg-weakest gap-6x p-4x flex flex-col md:w-6/12">
            <Image src="gift-icon.svg" width={112} height={112} alt="" className="absolute right-0 bottom-0" />
            <div className="text-body-s-medium text-foreground-weakest">Total Staking Reward</div>

            <div>
              <div className="text-body-2xl-strong text-foreground-weak">
                {stakingRewardWelf}
                <span className="text-body-l-strong text-foreground-weakest"> WELF </span>
              </div>

              <div className="flex items-center mt-2x gap-2x">
                <div className="text-body-s-medium text-foreground-weakest">${stakingRewardUSD}</div>
                <Badge 
                  variant={rewardGrowthPercentage > 0 ? "secondary-info" : "secondary-error"}
                >
                  {rewardGrowthPercentage > 0 ? <ArrowUpRight className="w-3x" /> : <ArrowDownLeft className="w-3x" />}
                  {rewardGrowthPercentage}%
                </Badge>
              </div>
            </div>
          </div>

          <div className="relative broder rounded-xl bg-weakest gap-6x p-4x flex flex-col md:w-6/12">
            <Image src="gift-icon.svg" width={112} height={112} alt="" className="absolute right-0 bottom-0" />
            <div className="text-body-s-medium text-foreground-weakest">Vesting to Claim</div>

            <div>
              <div className="text-body-2xl-strong text-foreground-weak">
                {vestingToClaimWelf}
                <span className="text-body-l-strong text-foreground-weakest"> WELF </span>
              </div>

              <div className="flex items-center mt-2x gap-2x">
                <div className="text-body-s-medium text-foreground-weakest">${vestingClaimUSD}</div>
                <Badge 
                  variant={vestingGrowthPercentage > 0 ? "secondary-info" : "secondary-error"}
                >
                  {vestingGrowthPercentage > 0 ? <ArrowUpRight className="w-3x" /> : <ArrowDownLeft className="w-3x" />}
                  {vestingGrowthPercentage}%
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* wallet not connected */}
        {/* <div className="absolute left-0 top-0 bg-portfolio-info-blur-bg backdrop-blur-md p-6x flex md:flex-row flex-col md:items-end md:justify-between justify-end h-full w-full rounded-xl">
          <div>
            <Image src="welf-token.svg" width={128} height={126} alt="WELF token" />

            <div className="md:text-body-xl-medium text-body-l-medium text-foreground-weak mt-6x max-w-[500px] mb-6x md:mb-0">
              Personalized Wealth Management with Community and Lifestyle at its Core
            </div>
          </div>

          <Button
            variant="primary"
            size="xl"
            IconLeft={Wallet}
          >
            Connect wallet
          </Button>
        </div>   */}
      </div>
    )
  }
)
StakingCard.displayName = "StakingCard"

export { StakingCard };
