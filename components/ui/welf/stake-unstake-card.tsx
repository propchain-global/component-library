import * as React from "react"
import { useState } from 'react';
import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import { LockIcon, UnlockIcon, GiftIcon, WalletIcon, HandCoins } from "lucide-react"
import { NavigationBar } from "./navigation-bar";
import { PoolCard } from "./pool-card";
import { Button } from "../button";
import Image from "next/image";

interface poolProps {
   name: string,
   apy: string,
   lock: string,
   tvl: number,
   stakedWelf: number
}

interface claimRewardProps {
   lockedWelf: number,
   stakingReward: number,
   nextclaim: string,
   vestingToClaim: number 
}

interface StakeUnstackCardProps extends React.ComponentProps<"div"> {
   stakePools?: poolProps[],
   unstakePools?: poolProps[],
   claimReward?: claimRewardProps
}

const Pools = [
   {
      name: 'Short term pool',
      apy: '7%',
      lock: '1y',
      tvl: 500000.00,
      stakedWelf: 0.00
   },
   {
      name: 'Mid term pool',
      apy: '7%',
      lock: '1y',
      tvl: 500000.00,
      stakedWelf: 0.00
   },
   {
      name: 'Long term pool',
      apy: '7%',
      lock: '1y',
      tvl: 500000.00,
      stakedWelf: 0.00
   }
] as poolProps[];

const claimRewardDetails = {
   lockedWelf: 54000,
   stakingReward: 4350,
   nextclaim: '31 days',
   vestingToClaim: 100 
}

const StakeUnstackCard = React.forwardRef<HTMLDivElement, StakeUnstackCardProps>(({className, stakePools, unstakePools, claimReward, ...props}, ref) => {

   const [activeTab, setActiveTab] = useState<'Stake' | 'Unstake' | 'Claim reward'>('Stake');

  return(
   <div ref={ref} className={cn(className, "flex gap-2x flex-col")} {...props}>
      <div className="p-1.5x border border-secondary-teal-60 md:rounded-xl rounded-lg bg-weaker md:w-[376px] max-w-[420px] w-auto flex item-center justify-between">
         <NavigationBar 
            title="Stake"
            Icon={LockIcon}
            state={activeTab === 'Stake' ? 'active' : 'default'}
            onClick={() => setActiveTab('Stake')}
         />
         <NavigationBar 
            title="Unstake"
            Icon={UnlockIcon}
            state={activeTab === 'Unstake' ? 'active' : 'default'}
            onClick={() => setActiveTab('Unstake')}
         />
         <NavigationBar 
            title="Claim reward"
            Icon={GiftIcon}
            state={activeTab === 'Claim reward' ? 'active' : 'default'}
            onClick={() => setActiveTab('Claim reward')}
         />
      </div>

      {/* stake */}
      {
         activeTab === 'Stake' &&
         <div className="md:p-6x p-3x border border-secondary-teal-60 rounded-xl bg-secondary-teal-80 gap-6x flex flex-col relative overflow-hidden box-border">
            <div className="flex flex-col gap-2x">
               {
                  Pools?.map((poolDetails, index) => (
                     <PoolCard 
                        pool={poolDetails}
                        key={poolDetails.name + index}
                        index={index}
                     />
                  ))
               }   
            </div>

            <Button
               variant="primary"
               size="xl"
               className="w-full"
            >
               Stake now
            </Button>

            {/* wallet not connected */}
            <div className="h-full grow md:p-4x p-3x bg-portfolio-info-blur-bg backdrop-blur-md flex flex-col justify-end absolute left-0 top-0 rounded-xl">
               <Image src="welf-token.svg" width={128} height={126} alt="WELF token" />

               <div className="text-body-xl-strong text-foreground-weak mt-6x">
                  Stake anytime, get instant rewards
               </div>
               <div className="text-body-s text-foreground-weaker mt-1.5x mb-8x">
                  Stake anytime, earn more for longer, and enjoy sustainable, adaptive rewards in a simple, transparent pool.
               </div>

               <Button
                  variant="primary"
                  size="xl"
                  IconLeft={WalletIcon}
               >
                  Connect wallet
               </Button>
            </div>
         </div>
      }

      {
         activeTab === 'Unstake' &&
         <div className="md:p-6x p-3x border border-secondary-teal-60 rounded-xl bg-secondary-teal-80 gap-6x flex flex-col relative overflow-hidden box-border">
            <div className="flex flex-col gap-2x">
               {
                  Pools?.map((poolDetails, index) => (
                     <PoolCard 
                        pool={poolDetails}
                        key={poolDetails.name + index}
                        index={index}
                     />
                  ))
               }   
            </div>

            <Button
               variant="primary"
               size="xl"
               className="w-full"
            >
               Unstake now
            </Button>

            {/* wallet not connected */}
            {/* <div className="h-full grow md:p-4x p-3x bg-portfolio-info-blur-bg backdrop-blur-md flex flex-col justify-end absolute left-0 top-0">
               <Image src="welf-token.svg" width={128} height={126} alt="WELF token" />

               <div className="text-body-xl-strong text-foreground-weak mt-6x">
                  Unstake anytime, get instant rewards
               </div>
               <div className="text-body-s text-foreground-weaker mt-1.5x mb-8x">
                  Stake anytime, earn more for longer, and enjoy sustainable, adaptive rewards in a simple, transparent pool.
               </div>

               <Button
                  variant="primary"
                  size="xl"
                  IconLeft={WalletIcon}
               >
                  Connect wallet
               </Button>
            </div> */}
         </div>
      }

      {
         activeTab === 'Claim reward' &&
         <div className="md:p-6x p-3x border border-secondary-teal-60 rounded-xl bg-secondary-teal-80 gap-6x flex flex-col relative overflow-hidden box-border">
            <div className="gap-3x flex flex-col">
               <div className="bg-weak border border-secondary-teal-60 rounded-lg p-3x">
                  <div className="flex justify-between items-center mb-4x">
                     <div className="text-description-l-medium text-foreground-weakest">Locked WELF</div>
                     <div className="h-6x w-6x rounded-full bg-gradinet-surface-linear p-1.5x">
                        <LockIcon className="h-3x w-3x text-foreground-weaker" />
                     </div>
                  </div>

                  <div className="text-body-2xl-strong text-foreground-weak">${claimRewardDetails.lockedWelf}</div>
               </div>

               <div className="flex gap-3x">
                  <div className="bg-weak border border-secondary-teal-60 rounded-lg p-3x w-6/12">
                     <div className="flex justify-between items-center mb-4x">
                        <div className="text-description-l-medium text-foreground-weakest">Staking rewards</div>
                        <div className="h-6x w-6x rounded-full bg-gradinet-surface-linear p-1.5x">
                           <GiftIcon className="h-3x w-3x text-foreground-weaker" />
                        </div>
                     </div>

                     <div className="text-body-xl-strong text-foreground-weak">
                        {claimRewardDetails.stakingReward}
                        <span className="text-body-s-strong text-foreground-weakest"> WELF</span>
                     </div>
                  </div>

                  <div className="bg-weak border border-secondary-teal-60 rounded-lg p-3x w-6/12">
                     <div className="flex justify-between items-center mb-4x">
                        <div className="text-description-l-medium text-foreground-weakest">Next claim in</div>
                        <div className="h-6x w-6x rounded-full bg-gradinet-surface-linear p-1.5x">
                           <GiftIcon className="h-3x w-3x text-foreground-weaker" />
                        </div>
                     </div>

                     <div className="text-body-xl-strong text-foreground-weak">{claimRewardDetails.nextclaim}</div>
                  </div>
               </div>

               <div className="bg-weak border border-secondary-teal-60 rounded-lg p-3x">
                  <div className="flex justify-between items-center mb-4x">
                     <div className="text-description-l-medium text-foreground-weakest">Vesting to claim</div>
                     <div className="h-6x w-6x rounded-full bg-gradinet-surface-linear p-1.5x">
                        <HandCoins className="h-3x w-3x text-foreground-weaker" />
                     </div>
                  </div>

                  <div className="text-body-xl-strong text-foreground-weak">
                     {claimRewardDetails.vestingToClaim}
                     <span className="text-body-s-strong text-foreground-weakest"> WELF</span>
                  </div>
               </div>
            </div>

            <div className="flex flex-col gap-3x">
               <Button
                  variant="primary"
                  size="xl"
               >
                  Claim now
               </Button>

               <Button
                  variant="outline"
                  size="xl"
               >
                  Past claims
               </Button>
            </div>

            {/* wallet not connected */}
            {/* <div className="h-full grow md:p-4x p-3x bg-portfolio-info-blur-bg backdrop-blur-md flex flex-col justify-end absolute left-0 top-0">
               <Image src="welf-token.svg" width={128} height={126} alt="WELF token" />

               <div className="text-body-xl-strong text-foreground-weak mt-6x">
                  Claim reward
               </div>
               <div className="text-body-s text-foreground-weaker mt-1.5x mb-8x">
                  Stake anytime, earn more for longer, and enjoy sustainable, adaptive rewards in a simple, transparent pool.
               </div>

               <Button
                  variant="primary"
                  size="xl"
                  IconLeft={WalletIcon}
               >
                  Connect wallet
               </Button>
            </div> */}
         </div>
      }
   </div>
  ) 
})

StakeUnstackCard.displayName = "StakeUnstackCard"

export { StakeUnstackCard }