import * as React from "react";
import { cn } from "@/lib/utils"
import Image from "next/image";
import Link from "next/link";


interface ClaimHistoryDetailsProps {
  claimedDate: string,
  claimedWelf: number,
  tnxId: string,
  tnxLink: string,
}
interface ClaimhistoryProps extends React.ComponentProps<"div"> {
  claimHistoryDetails: ClaimHistoryDetailsProps,
}



const ClaimHistory = React.forwardRef<HTMLDivElement, ClaimhistoryProps>(
  ({ className, claimHistoryDetails,  ...props }, ref) => {

    const {
      claimedDate,
      claimedWelf,
      tnxId,
      tnxLink,
    } = claimHistoryDetails

    return (
      <div
        ref={ref}
        {...props}
        className={cn("md:w-[680px] w-full min-w-[320px] flex flex-col md:flex-row md:items-center justify-between bg-weak rounded-lg border border-default p-4x hover:bg-darks hover:border-accent", className)}
      >
        <div>
          <div className="flex items-center gap-2x text-body-m text-foreground-weakest">
            <div>Vesting to Claim</div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none"><circle cx="2" cy="2" r="2" fill="#87ACA6"/></svg>
            </div>
            <div>Private</div>
          </div>

         
          <div className="text-number-s text-foreground-weak mt-2x flex justify-between md:justify-start items-end mb-4x md:mb-0">
            {claimedWelf} 
            <span className="text-body-m-medium text-foreground-weakest"> WELF</span>
          </div>
        </div>

        <div className="flex flex-col md:items-end">
          <div className="flex flex-row md:flex-col justify-between">
            <div className="text-body-s-medium text-foreground-weakest md:text-right">Claimed on</div>
            <div className="text-body-s-strong text-foreground-weak md:mt-1x">{claimedDate}</div>
          </div>

          <div className="flex items-center justify-between gap-3x md:mt-2x mt-3x">
            <div className="flex gap-3x">
              <span className="text-body-s-strong text-foreground-weakest">Txn ID:</span>
              <span className="text-body-s-strong text-foreground-weak">{tnxId}</span>
            </div>
            <div className="flex gap-3x">
              <div>
                <Image src="copyIcon.svg" alt='' width={16} height={16} className="h-4x w-4x" />
              </div>
              <Link href={tnxLink} target="_blank">
                <Image src="link-icon.svg" alt='' width={16} height={16} className="h-4x w-4x" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
)
ClaimHistory.displayName = "ClaimHistory"

export { ClaimHistory };
