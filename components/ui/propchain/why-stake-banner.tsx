import { LucideChevronsUp, LucideCirclePlay, LucideLayers, LucidePlayCircle, LucideUsers, LucideWrench } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
const options = [
   {
      title: "Ecosystem Growth",
      description: "Largest and fastest growing on-chain institutional lender",
      icon: LucideWrench
   },
   {
      title: "No Lockup Period",
      description: "Unstake your balance in full at any time",
      icon: LucideLayers
   },
   {
      title: "Participate in Governance",
      description: "Shape the future of Maple and Syrup through governance voting",
      icon: LucideUsers
   },
   {
      title: "Future Utility",
      description: "Unlock future benefits through active community participation",
      icon: LucideChevronsUp
   },
   
]

export default function WhyStakeBanner() {
  return (
    <div className='flex flex-col gap-6x p-8x rounded-2xl bg-banner-staking-why-stake-default relative w-full overflow-hidden'>
      <div className='flex justify-between'>
          <h2 className='text-heading-h2 text-banner-staking-why-stake-default'>
            Why Stake?
          </h2>

         <div className='flex gap-2x px-Button-l-label items-center'>
           <p className='text-body-m-strong text-banner-staking-why-stake-default'>Watch Video</p>
           <LucideCirclePlay className='fill-accent-default w-5 h-5 ' />
          
         </div>
          
        
      </div>
      <div className="grid grid-cols-2 gap-y-4x md:gap-y-6x gap-x-4x md:gap-x-10x md:max-w-[66%]">
         {options.map((option) => (
            <div className='flex flex-col md:flex-row items-start md:items-center gap-4x'>
               <div className="w-12x h-12x p-3x rounded-full flex items-center justify-center bg-weaker">

               <option.icon className='text-accent-default w-4 h-4 ' />
               </div>
               <div className="flex flex-col gap-1.5">

               <p className='text-heading-h3 text-banner-staking-why-stake-default'>{option.title}</p>
               <p className='text-body-s-medium text-banner-staking-why-stake-default'>{option.description}</p>
               </div>
            </div>
         ))}
      </div>
      <div className='h-[108px] w-full md:hidden'>

      </div>
      <Image src="/propchain/why-stake.png" alt="staking-banner-bg" width={238} height={150} className='absolute bottom-0 right-0' />
    </div>
  )
}
