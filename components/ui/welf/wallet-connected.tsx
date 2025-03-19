import * as React from "react"

import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import { Avatar } from "../avatar"
import { LucideChevronDown } from "lucide-react"

const containerVariant = cva("flex items-center rounded-Button-xl border-Button-xl ", {
   variants: {
         size: {
            l: "flex h-Button-l-height  px-3x gap-Button-xl-label-horizontal min-w-Button-l",
            xl: "flex h-Button-xl-height  px-3x gap-Button-xl-label-horizontal border-Button-xl rounded-Button-xl min-w-Button-xl  "
         }
      
   }
})
const providerVariant = cva("text-button-outline-label-default", {
   variants: {
      size: {
         l: "text-description-l-strong",
         xl: "text-body-s-strong"
      }
   }
})

const addressVariant = cva("text-button-outline-label-disabled", {
   variants: {
      size: {
         l: "text-description-s",
         xl: "text-description-l"
      }
   }
})

const chevronVariant = cva("", {
   variants: {
      size: {
         l: "w-4x h-4x",
         xl: "w-4x h-4x"
      }
   }
})

interface WalletConnectedProps extends React.ComponentProps<"div">, VariantProps<typeof containerVariant> {
   provider?:string;
   address?:string;
   showWalletInfo?:boolean;
}

const WalletConnected = React.forwardRef<HTMLDivElement, WalletConnectedProps>(({className, size, provider="MetaMask", address="0x0000000000000000000000000000000000000000", showWalletInfo=true, ...props}, ref) => {
   const avatarSize = React.useMemo(() => {
      if(size === "xl") return 32
      if(size === "l") return 24
      return 24
   }, [size])
  return <div ref={ref} className={cn(containerVariant({size, className}), className, "bg-radial-gradient border-surface-overlay hover:border-surface-disabled cursor-pointer ")} {...props}>
   <Avatar size={avatarSize} alt="Wallet Connected" />
   {showWalletInfo && <div className="flex flex-col">
      <p className={cn(providerVariant({size}))}>{provider}</p>
      <p className={cn(addressVariant({size}), 'line-clamp-1 max-w-[120px]')}>{address}</p>
   </div>}
   <LucideChevronDown size={24} className={cn(chevronVariant({size}))} />

  </div>
})

WalletConnected.displayName = "WalletConnected"

export { WalletConnected }