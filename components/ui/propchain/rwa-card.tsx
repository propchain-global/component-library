import React from 'react'
export type RWACardProps = {
   title: string;
   address: string;
   flagUrl: string;
   totalValue: number;
   interestRate: number;
   date: string;
   bgUrl: string;
}
export default function RWACard({title, address, flagUrl, totalValue, interestRate, date, bgUrl="https://firebasestorage.googleapis.com/v0/b/propchain-16f0d.appspot.com/o/BTC%20sky%20Mansion%2FBTC%20Sky%20Mansion%20-%206.png?alt=media&token=b2e7a00b-63f0-4725-8707-5e9d8223f17b"}: RWACardProps) {
  return (
    <div className='flex justify-between px-5x pt-8x pb-4x rounded-m bg-rwa-card-gradient h-[320px]' style={{backgroundImage: `url(${bgUrl})`}}>

    </div>
  )
}
