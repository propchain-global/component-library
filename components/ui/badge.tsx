import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-Pills transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 dark:border-neutral-800 dark:focus:ring-neutral-300",
  {
    variants: {
      variant: {
        'primary-info': " bg-pills-primary-information text-pills-primary-information",
        'primary-warning': " bg-pills-primary-warning text-pills-primary-warning",
        'primary-success': " bg-pills-primary-success text-pills-primary-success",
        'primary-error': " bg-pills-primary-error text-pills-primary-error",
        'primary-neutral': " bg-pills-primary-neutral text-pills-primary-neutral",
        'secondary-info': " bg-pills-secondary-information text-pills-secondary-information",
        'secondary-warning': " bg-pills-secondary-warning text-pills-secondary-warning",
        'secondary-success': " bg-pills-secondary-success text-pills-secondary-success",
        'secondary-error': " bg-pills-secondary-error text-pills-secondary-error",
        'secondary-neutral': " bg-pills-secondary-neutral text-pills-secondary-neutral",
      },
      
      size: {
        s: "h-Pills-s px-1x gap-0.5x text-description-s-medium",
        l: "h-Pills-l px-1.5x gap-1x text-description-l-medium",
      }
    },
    defaultVariants: {
      variant: "primary-info",
      size: "s",
    },
    
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
