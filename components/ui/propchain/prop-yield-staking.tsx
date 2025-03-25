import React from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { LucideLockKeyhole, LucideLockKeyholeOpen, LucideAward, LucideWallet, LucideCalendar } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CurrencyField } from '@/components/ui/currency-field';

type PropYieldStakingProps = {
    stakedAmount: number;
    rewardAmount: number;
    isWalletConnected: boolean;
}


const STAKES = [
   {
      duration: 3,
      totalAPY: 11,
      propcAPY: 5,
      stableCoinAPY: 6
      
   }, {
      duration: 6,
      totalAPY: 18,
      propcAPY: 10,
      stableCoinAPY: 8
   }, {
      duration: 9,
      totalAPY: 25,
      propcAPY: 15,
      stableCoinAPY: 10
   }
]

const StakeDuration = () => {
   return (
         <Tabs defaultValue="3">
            <div className="flex flex-col gap-3x items-start">
               <p className='text-heading-h4 text-staking-card-default'>Select Stake Lock Duration</p>
            <TabsList className='bg-none text-body-s-strong'>
               {STAKES.map((stake) => (
                  <TabsTrigger className='h-Button-l-height min-w-button-l-width px-Button-l-label rounded-custom hover:data-[state=active]:bg-button-accent-hover data-[state=active]:bg-button-accent-default data-[state=active]:text-button-accent-active' key={stake.duration} value={stake.duration.toString()}>{stake.duration} <span className='hidden md:inline'>Month</span> <span className='inline md:hidden'>M</span></TabsTrigger>
               ))}
            </TabsList>
            </div>

            {STAKES.map((stake) => (
               <TabsContent key={stake.duration} value={stake.duration.toString()}>
                  <div className='flex flex-col gap-2x'>
                     <p className='text-heading-h4 text-staking-card-default'>Expected Return</p>
                     <div className="flex flex-col gap-1.5x py-4x px-6x rounded-m bg-weaker relative">
                        <p className="text-body-s-medium text-white">
                        Total Potential APY
                        </p>
                        <p className="text-heading-h3 text-foreground-link">
                        {stake.totalAPY}%
                        </p>
                        <Image className='absolute top-0 right-0 h-full ' src="/propchain/prop-yield-staking.png" alt="prop-yield-staking-bg" width={260} height={74} />
                     </div>

                     <div className="flex flex-row gap-1.5x w-full">
                        <div className="flex flex-col gap-1.5x bg-weak w-full py-3x px-6x rounded-xs">
                           <p className="text-body-s-medium text-white">PROPC APY</p>
                           <p className="text-heading-h3 text-white">
                           {stake.propcAPY}%
                           </p>
                        </div>
                        <div className="flex flex-col gap-1.5x bg-weak w-full py-3x px-6x rounded-xs">
                           <p className="text-body-s-medium text-white">Stable Coin APY</p>
                           <p className="text-heading-h3 text-white">
                           {stake.stableCoinAPY}%
                           </p>
                        </div>
                     </div>



                  </div>
               </TabsContent>
            ))}
         </Tabs>

   )
}

const Unstake = () => {
   return (
      <div className="flex flex-col gap-3x py-4x px-5x bg-staking-card-active rounded-[12px]">
         <div className="w-full h-[1px] bg-staking-card-default" />
         <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-[10px]">
               <LucideLockKeyhole className='w-5x h-5x text-staking-card-active' />
               <p className="text-heading-h4 text-staking-card-default">6 Month Locked</p>
            </div>
            <div className="flex flex-row gap-0.5">
               <LucideCalendar className='h-4x text-staking-card-default' />
               <p className="text-body-s-medium text-staking-card-default">12 - Jan - 2025</p>
            </div>
         </div>

         <div className="flex flex-row gap-3x justify-between">
            <div className="flex flex-col gap-1.5x items-center py-3x">
               <p className="text-body-s-medium text-staking-card-default">Staked Amount</p>
               <h2 className="text-heading-h2 text-white">
                  10,500
               </h2>
            </div>
            <div className="flex flex-col w-[1px] bg-inverted" />
            <div className="flex flex-col gap-1.5x items-center py-3x">
               <p className="text-body-s-medium text-staking-card-default">PROPC</p>
               <h2 className="text-heading-h2 text-white">
                840
               </h2>
            </div>
            <div className="flex flex-col w-[1px] bg-inverted" />
            <div className="flex flex-col gap-1.5x items-center py-3x">
               <p className="text-body-s-medium text-staking-card-default">Stablecoin (USDT)</p>
               <h2 className="text-heading-h2 text-white">
               ₮472.50
               </h2>
            </div>

         </div>
         
         
      </div>
   )
}

export default function PropYieldStaking({ stakedAmount, rewardAmount, isWalletConnected }: PropYieldStakingProps) {
  return (
   <Tabs defaultValue="stake" className="max-w-[493px] relative">
   <TabsList className="bg-none text-body-s-strong w-full">
       <TabsTrigger
           value="stake"
           className="w-full flex items-center text-staking-card-default gap-2x px-4x data-[state=active]:bg-staking-card-active data-[state=active]:text-staking-card-default [&[data-state=active]>svg]:text-staking-card-icon-active rounded-tl-l rounded-tr-l"
       >
           <LucideLockKeyhole className="w-5 h-5" />
           Stake
       </TabsTrigger>
       <TabsTrigger
           value="unstake"
           className="w-full flex items-center text-staking-card-default gap-2x data-[state=active]:bg-staking-card-active data-[state=active]:text-staking-card-default [&[data-state=active]>svg]:text-staking-card-icon-active rounded-tr-l rounded-tl-l"
       >
           <LucideLockKeyholeOpen className="w-5 h-5" />
           Unstake
       </TabsTrigger>
       <TabsTrigger
           value="rewards"
           className="w-full flex items-center text-staking-card-default gap-2x data-[state=active]:bg-staking-card-active data-[state=active]:text-staking-card-default [&[data-state=active]>svg]:text-staking-card-icon-active rounded-tr-l rounded-tl-l"
       >
           <LucideAward className="w-5 h-5" />
           Rewards
       </TabsTrigger>
   </TabsList>
   <TabsContent
       value="stake"
       className=" mt-0 "
   >
      <div className='p-6x gap-4x flex flex-col'>
       <div className="gap-2x flex flex-col">
           <CurrencyField
               label="Amount to Stake"
               token="PROPC"
               placeholder="0.00"
               balance={1000}
               onChange={() => {}}
           />
           <StakeDuration />
       </div>

       <Button size='l' className="w-full" variant="primary">
           {' '}
           Stake
       </Button>

       
       </div>
   </TabsContent>
   <TabsContent value="unstake" className="mt-0">
     <Unstake />
   </TabsContent>
   <TabsContent value="rewards" className="mt-0">
      <div className='p-6x gap-4x flex flex-col items-center justify-center'>
      <div className="p-5x gap-2x flex flex-col items-center">
         <Image src="/propchain/staking-rewards.png" alt="propchain-rewards" width={72} height={63} />
         <p className="text-body-l-medium text-staking-card-default">Total Rewards Earned</p>
         <div className="flex items-center gap-1x">

         <p className="text-display-xs-strong text-foreground-white">{rewardAmount.toLocaleString()}</p>
         <span className='text-body-m-medium text-staking-card-disabled'>PROPC</span>
         </div>
      </div>
      {rewardAmount > 0 && <Button size='l' className="w-full" variant="primary">
           {' '}
           Claim Now 200 PROPC
       </Button>}
      </div>
   </TabsContent>
   {!isWalletConnected && <div className='absolute top-0 bottom-0 left-0 right-0 bg-staking-card-active backdrop-blur-md p-6x rounded-2xl'>

      <div className="flex flex-col gap-8x items-start h-full justify-end">
         <div className="flex flex-col gap-1.5">
            <p className="text-heading-h2 text-staking-card-default">
            Stake with PropYield
            </p>
            <p className='text-body-m-medium text-staking-card-default'>
            Earn up to X% stablecoin yield backed by real estate development. Connect your wallet to start staking today!
            </p>
            </div>
            <Button size='l'  variant="primary" IconRight={LucideWallet}>
               Connect Wallet to Stake
            </Button>
         
      </div>
   </div>}
</Tabs>
  )
}
