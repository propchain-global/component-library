import React from 'react'
import NavItem from './nav-item'
import { ArrowRight, LucideDock } from 'lucide-react'
import { Button } from '../button'
export default function TokenBuyCard() {
  return (
    <div className='flex flex-col gap-4 p-8x rounded-2xl bg-buy-token-card-default backdrop-blur-2'>
      <div className='flex flex-row items-center justify-between'>
         <p className="text-heading-h3 text-buy-token-card-default">
         Turn <span className='text-buy-token-card-active'>$PROPC</span> into Your Gateway to Rewards!
         </p>
         <NavItem className='bg-weaker' title='Buy $PROPC' Icon={<LucideDock className='w-5 h-5 text-buy-token-card-icon-active-card-active' />} href='#' />
      </div>
      <div className="flex flex-col gap-10x p-4x rounded-m bg-weaker items-start bg-buy-token-card-wallets  bg-no-repeat bg-right-top bg-contain">
         <p className="text-buy-token-card-default text-heading-h4">Buy directly</p>

         <Button size='l' variant='tertiary' IconRight={ArrowRight}>Explore</Button>
      </div>
      <div className="flex flex-col gap-10x p-4x rounded-m bg-weaker items-start bg-buy-token-card-partners bg-no-repeat bg-right-top bg-contain">
         <p className="text-buy-token-card-default text-heading-h4">Through our partners</p>

         <Button size='l' variant='tertiary' IconRight={ArrowRight}>Explore</Button>
      </div>


    </div>
  )
}
