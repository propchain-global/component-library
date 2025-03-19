import React from 'react'
import { Avatar } from '../avatar'
import { LucideChevronDown } from 'lucide-react';
type WalletConnectedButtonProps = {
   walletAddress: string;
   onClick: () => void;
}
export default function WalletConnectedButton({walletAddress, onClick}: WalletConnectedButtonProps) {
  return (
    <div className='flex w-10x md:w-auto items-center px-3x rounded-full h-10x bg-weaker gap-[10px]'>
      <Avatar size={24} alt="Wallet Connected" />
      <div className="hidden md:flex flex-col ">
         <p className="text-description-l-strong text-header-default">
            MetaMask
         </p>
         <p className="text-description-s max-w-[120px] truncate text-header-default">
            {walletAddress?.slice(0, 6)}...{walletAddress?.slice(-4)}
         </p>
      </div>  
      <LucideChevronDown size={24} className='w-4x h-4x text-accent-strong hidden md:block' />
    

    </div>
  )
}
