import React from 'react'
import Marquee from 'react-fast-marquee'
import { PriceBadge } from './price-badge'
interface SubheaderProps {
   marketInfo: {
   title: string;
    price: string;
    percentChange?: string;
   }[]
}

export const Subheader = ({marketInfo}: SubheaderProps) => {
  return (
    <Marquee className='bg-Header-sub-secondary hover:bg-Header-sub-theme font-kodeMono'>
      <div className='flex items-center gap-7 px-5x py-2x '>
        {marketInfo.map((item, index) => (
           <div className='flex items-center gap-2x' key={index}>
            <p className='text-Header-sub-theme'>{item.title}</p>
            <PriceBadge price={item.price} percentChange={item.percentChange} />
           </div>
        ))} 
      </div>
    </Marquee>
  )
}
