import { LucideLayers, LucideX } from 'lucide-react';
import React from 'react'
interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  type: 'icon+title' | 'title+supporting' | 'centered'
  supportingText?: string;
  showCloseButton?: boolean;
  alert?: boolean;
}
export const ModalHeader = ({ title, type, supportingText, alert, showCloseButton, ...props }: ModalHeaderProps) => {

  return (
    <div className="flex items-center gap-3x" {...props}>
      {type === 'icon+title' && <div className="items-center justify-center p-2x md:p-3x rounded-sm bg-darks">
        <LucideLayers className='text-accent-strong w-6x h-6x' />
      </div>}

      <div className={`flex flex-col gap-1x md:gap-2x  w-full ${type === 'centered' ? 'items-center' : ''}`}>
        <h2 className={`text-body-2xl-strong md:text-body-3xl-strong ${alert ? 'text-error' : 'text-foreground-weak'}`}>{title}</h2>
        {(supportingText && type !== 'icon+title') && <p className={`text-body-s md:text-body-m text-foreground-weaker  ${type === 'centered' ? 'text-center' : ''}`}>{supportingText}</p>}
      </div>
      {showCloseButton && <LucideX className='text-foreground-weakest w-5x h-5x md:w-6x md:h-6x' />}
    </div>
  )
}
