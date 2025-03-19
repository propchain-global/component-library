import React from 'react'
import Image from 'next/image'
import NavItem from './nav-item';
import { LucideLayoutDashboard, LucideWallet } from 'lucide-react';
import { Button } from '../button';
import WalletConnectedButton from './wallet-connected-button';
type HeaderProps = {
   isWalletConnected: boolean;
   walletAddress?:string;
   inPopup?: boolean;

}

export default function Header({isWalletConnected, walletAddress="0x1234567890123456789012345678901234567890", inPopup = false }: HeaderProps) {
  return (
    <div className='flex justify-between items-center py-4x px-8x bg-dark backdrop-blur-sm'>
      <Image src ="/propchain/wordmark-md.png" className='hidden md:block' alt="Propchain"  width={201} height={28}/>
      <Image src ="/propchain/logo-md.png" className='block md:hidden' alt="Propchain"  width={32} height={32}/>

      {
         inPopup ?
            <NavItem
               title="Stake"
               Icon={<LucideLayoutDashboard className='w-6 h-6' />}
               href="/stake"
               onClick={() => {}}
               className='bg-header-white'
            />
            :
            <div className='flex items-center gap-3x'>
               <Button variant="outline" size="l" > <Image src="/propchain/propc-token-medium.svg" alt="PROPC" width={20} height={20} /> Buy PROPC</Button>
               {
                  isWalletConnected ?
                     <WalletConnectedButton walletAddress={walletAddress} onClick={() => {}} />
                     :
                     <>
                     <Button className='hidden md:flex' variant="primary" size="l" IconRight={LucideWallet }> Connect Wallet</Button>
                     <Button className='block md:hidden w-10x h-10x' variant="primary" size="m" IconRight={LucideWallet }/>
                     </>
               }
            </div>
      }


    </div>
  )
}
