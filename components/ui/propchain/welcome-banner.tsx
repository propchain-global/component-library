import Image from 'next/image'
import React from 'react'
import { Button } from '../button'
import { LucideCircle } from 'lucide-react'


export default function WelcomeBanner() {
  return (
    <div className='flex flex-col p-8x gap-8x rounded-2xl bg-banner-welcome-default items-start bg-prop-welcome-banner-sm md:bg-prop-welcome-banner bg-center bg-cover bg-no-repeat'>
      <div className="flex flex-col gap-4x">

      <Image src={'/propchain/propc-token-large.svg'} alt='$PROPC token' width={80} height={80} />
      <h3 className='text-heading-h3 text-banners-value-proposition max-w-[327px]'>
     <span className='text-banner-welcome-default' >Become  Part</span> of the Leading RWA Community &  <span className='text-banner-welcome-default'> Earn  Rewards!</span>
      </h3>
      </div>
      <Button title='Connect Wallet' variant='primary' size='m' IconRight={LucideCircle} > Connect Wallet </Button>
         
    </div>
  )
}
