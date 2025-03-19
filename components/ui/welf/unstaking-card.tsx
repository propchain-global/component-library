import * as React from "react";
import { cn } from "@/lib/utils"
import { Button } from "../button";

interface UnstakingProps {
  stakedDate: string,
  stakedWelf: number,
}
interface UntakingCardProps extends React.ComponentProps<"div"> {
  unstakingDetails: UnstakingProps,
}



const UnstakingCard = React.forwardRef<HTMLDivElement, UntakingCardProps>(
  ({ className, unstakingDetails,  ...props }, ref) => {

    const {
      stakedDate,
      stakedWelf
    } = unstakingDetails

    return (
      <div
        ref={ref}
        {...props}
        className={cn("md:w-[680px] w-full flex flex-col md:flex-row items-center justify-between bg-weak rounded-lg border border-default p-4x hover:bg-darks hover:border-accent", className)}
      >
        <div>
          <div className="flex items-center gap-2x text-body-m text-foreground-weakest">
            <div>Staking Contract v1</div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none"><circle cx="2" cy="2" r="2" fill="#87ACA6"/></svg>
            </div>
            <div>on DD/MM/YYYY</div>
          </div>

         
          <div className="text-number-s text-foreground-weak mt-2x">
            {stakedWelf} 
            <span className="text-body-m-medium text-foreground-weakest"> WELF</span>
          </div>
        </div>

        <Button 
          variant="outline"
          size="xl"
          className="w-full md:w-fit mt-6x md:mt-0"
        >
          Unstake
        </Button>
      </div>
    )
  }
)
UnstakingCard.displayName = "UnstakingCard"

export { UnstakingCard };
