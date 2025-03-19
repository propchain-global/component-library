import { LucideCheck, LucideCheckCheck, LucideCheckCircle, LucideCheckCircle2, LucideCircle, LucideCircleCheck } from 'lucide-react'
import React from 'react'
import { Button } from '../button'
export const listOption = [
   'Stake and unstake anytime',
   'Longer staking = Higher rewards',
   'Automatic burning above threshold',
   ' One pool, clear mechanics'
]
export default function EarnRewardBanner() {
  return (
   <div className="flex flex-col items-start gap-8x p-8x rounded-2xl max-w-[572px] bg-banner-earn-rewards-default bg-prop-earn-rewards-banner   bg-right-bottom bg-no-repeat ">
       <h2 className="text-heading-h2 text-banner-earn-rewards-default max-w-[303px]">Earn rewards up to 15% APY with our simple staking</h2>
       <div className="flex flex-col gap-3x">
         {listOption.map((option, index) => (
            <div key={index} className="flex flex-row gap-1">
               <LucideCircleCheck className='fill-accent-default  w-4 h-4' />
               <p className="text-description-l text-banner-earn-rewards-default">{option}</p>
            </div>
         ))}
         </div>
         <Button title='Stake Now' variant='primary' size='m' IconRight={LucideCircle} > Earn Reward </Button>
   </div>
  )
}
