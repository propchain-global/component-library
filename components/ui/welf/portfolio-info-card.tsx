import Image from 'next/image';
import React from 'react'


interface PortfolioInfoCardProps {
  title: string;
  value: string | number;
  tertiaryButton: React.ReactNode;
  iconImagePath?: string;
  showTokenIcon?: boolean;
}

export default function PortfolioInfoCard({ title, value, tertiaryButton, showTokenIcon, iconImagePath }: PortfolioInfoCardProps) {
  return (
    <div className="flex flex-col items-start gap-4 p-4 rounded-lg bg-dark relative min-h-[132px]">
      <div className="flex flex-col gap-2">
         <p className="text-body-s-medium text-foreground-weakest">{title}</p>
         <div className="flex gap-1">
            {showTokenIcon && <Image src="welf-token.svg" alt="WELF token" width={24} height={32} />}
            <p className="text-number-xs text-foreground-weak">{value}</p>

         </div>
      </div>
      {
         tertiaryButton && (
             tertiaryButton
         )
      }
      {
         iconImagePath && (
            <Image src={iconImagePath} alt="WELF token" width={96} height={96} className='absolute bottom-0 right-0' />
         )
      }
    </div>
  )
}
