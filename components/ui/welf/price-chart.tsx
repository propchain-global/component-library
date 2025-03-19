import React, { useMemo } from 'react'
import { Tab } from '../tab';
import { Badge } from '../badge';
import {  LucideArrowDownLeft } from 'lucide-react';
import { AreaChartComponent } from './area-chart';
interface PriceChartProps {
   token: string;
   activeTab: 'M' | 'W' | 'D' | 'Y'
   price: number;
   low24: number;
   high24: number;
   change24: number;
   totalSupply: number;
   volume: number;
   marketCap: number;
   circulatingSupply: number;
   chartData?: [number, number][]
   xkey?: string | number
   ykey?: string | number
}
const tabs = ['M', 'W', 'D', 'Y']
export const PriceChart = ({token, activeTab, price, low24, high24, change24, totalSupply, volume, marketCap, circulatingSupply, chartData, xkey, ykey}: PriceChartProps) => {
   const cards = useMemo(()=> {
      return [
         {
            title: 'Market Cap',
            value: marketCap.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
         },
         {
            title: 'Volume (24h)',
            value: volume.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
         },
         {
            title: 'Total Supply',
            value: totalSupply.toLocaleString('en-US')
         },
         {
            title: 'Circulating Supply',
            value: circulatingSupply.toLocaleString('en-US')
         }
      ]
   }, [totalSupply, circulatingSupply, volume, marketCap])
  return (
    <div className='bg-weaker rounded-xl border border-default'>
      {/* chart section */}   
      <div className="flex flex-col gap-8x p-4x md:gap-12x md:p-6x rounded-xl   ">
         <div className="flex flex-col gap-2x">
         {/* control section */}
         <div className="flex justify-between">
            <p className="text-body-m-medium text-weakest">{token} Price</p>
            <div className="flex gap-1x">
               {tabs.map((tab) => (
                  <Tab key={tab} isActive={activeTab === tab}>{tab}</Tab>
               ))}
            </div>
         </div>
         {/* control section end */}
         {/* price section */}
         <div className="flex justify-between">
            <div className="flex gap-3x items-center">
               <p className="font text-number-s text-weak">${price}</p>
               <div className="py-2x flex flex-col justify-end">

               <Badge size='s' variant="secondary-info" >
                  <LucideArrowDownLeft className='w-3x h-3x' />
                  {change24}% (1d)
               </Badge>
               </div>

            </div>

            <div className="flex gap-4x items-center py-1x">
               <div className="flex items-center gap-1x">
                  <p className="text-body-m-medium text-weakest">L: </p>
                  <p className="text-body-m-medium text-weak">${low24}</p>
               </div>
               <div className="flex items-center gap-1x">
                  <p className="text-body-m-medium text-weakest">H: </p>
                  <p className="text-body-m-medium text-weak">${high24}</p>
               </div>
            </div>

         </div>
         {/* price section end */}
         </div>

            <AreaChartComponent data={chartData} xkey={xkey} ykey={ykey} />

      </div>
      {/* chart section end */}
      <div className="p-4x md:p-6x gap-2x grid grid-cols-2 md:grid-cols-4  border-default border-t ">
         {cards.map((card, index) => (
            <div key={index} className="flex flex-col gap-2x p-4x rounded-md bg-surface-gradient">
               <p className="text-body-s text-weakest">{card.title}</p>
               <p className="text-body-m-strong text-weak">{card.value}</p>
            </div>
         ))}
      </div>
      <div className="p-4x md:p-6x gap-2x flex flex-col md:hidden">
         {cards.map((card, index) => (
            <div key={index} className="flex justify-between items-center gap-2x p-4x rounded-md bg-surface-gradient">
               <p className="text-body-s text-weakest">{card.title}</p>
               <p className="text-body-s-strong text-weak">{card.value}</p>
            </div>
         ))}
      </div>
    </div>
  )
}
