import React from 'react'
interface PriceBadgeProps {
    price?: string;
    percentChange?: string;
}
export const PriceBadge = ({ price, percentChange }: PriceBadgeProps) => {
  return (
    <div className='flex items-center gap-1x p-1x bg-Header-sub-overlay font-mono font-[12px] rounded-[4px]'>
        <p className='text-Header-sub-theme'>{price}</p>
        {
         price && percentChange && <p className='text-Header-sub-theme'> | </p>
        }
        <p className='text-Header-sub-theme'>{percentChange}</p>
    </div>
  )
}
