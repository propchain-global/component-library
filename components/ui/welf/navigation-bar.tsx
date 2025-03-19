import { cva, VariantProps } from 'class-variance-authority'
import { LucideAccessibility } from 'lucide-react'
import React from 'react'

const variantsObject = cva("flex  items-center md:px-4x px-2x gap-2x md:h-10x h-8x cursor-pointer", {
   variants: {
      state: {
         active: "md:rounded-lg rounded-m border border-default bg-nav-radial-gradient hover:bg-nav-radial-gradient-hover text-accent-strong hover:text-accent-default",
         default: "text-foreground-weakest hover:text-foreground-weaker"
      }
   }
})

interface NavigationBarProps extends VariantProps<typeof variantsObject>, React.HTMLAttributes<HTMLDivElement> {
   Icon?: React.JSXElementConstructor<{ className?: string }>
   title?: string
}

export const NavigationBar = ({ Icon =LucideAccessibility, title ="Navigation Bar", state, ...props }: NavigationBarProps) => {
  return (
    <div className={variantsObject({state})} {...props}>
      <Icon className='md:h-5px md:w-5px h-4x w-4x shrink-0' />
      <p className='md:text-body-s-medium text-description-l-medium'>{title}</p> 
    </div>
  )
}
