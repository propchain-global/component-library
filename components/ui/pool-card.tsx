import * as React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Layers2Icon } from "lucide-react"
import { cn } from "@/lib/utils"

interface poolProps {
  name: string,
  apy: string,
  lock: string,
  tvl: number,
  stakedWelf: number
}


interface poolCardProps extends React.ComponentProps<"div"> {
  pool: poolProps,
  index: number,
}

const PoolCard = React.forwardRef<HTMLDivElement, poolCardProps>(
  ({ className, pool, index, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn("w-full",className)}
      >
        <Accordion
          type="single" 
          collapsible
          defaultValue={index === 0 ? pool.name : ''}
        >
          <AccordionItem value={pool.name}>
            <AccordionTrigger>
              <div className="rounded-s bg-secondary-teal-60 p-1.5x">
                <Layers2Icon className="h-4x w-4x text-accent-strong" />
              </div>
              <div className="text-body-m-strong text-foreground-weak grow">
                {pool.name}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="bg-weak rounded-m py-3x px-2x flex justify-center">
                <div className="flex justify-center flex-col gap-1x border-r border-default w-6/12">
                    <div className="text-description-l-medium text-foreground-weakest text-center">APY</div>
                    <div className="text-body-2xl-strong text-accent-strong text-center">{pool.apy}</div>
                </div>
                <div className="flex justify-center flex-col gap-1x w-6/12">
                    <div className="text-description-l-medium text-foreground-weakest text-center">LOCK</div>
                    <div className="text-body-2xl-strong text-foreground-weak text-center">{pool.lock}</div>
                </div>
              </div>

              <div className="flex justify-between items-center bg-weak rounded-m py-[10px] px-4x">
                <div className="text-body-s-medium text-foreground-weakest">TVL</div>
                <div className="text-body-s-strong text-foreground-weak">${pool.tvl}</div>
              </div>

              <div className="flex justify-between items-center bg-weak rounded-m py-[10px] px-4x">
                <div className="text-body-s-medium text-foreground-weakest">Staked WELF</div>
                <div className="text-body-s-strong text-foreground-weak">${pool.stakedWelf}</div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    )
  }
)
PoolCard.displayName = "PoolCard"

export { PoolCard }
