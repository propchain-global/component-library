import React, { ReactNode, useMemo } from 'react'
import { Avatar } from '../avatar'
import { Badge } from '../badge';
import { LucideArrowRight, LucidePower } from 'lucide-react';
type WalletConnectTabProps = {
  type: "default" | "connected" | "recent" | "failed" | 'detected'
  walletName: string;
  walletSrc?: string;
  ExternalIcon?: ReactNode
}
export const WalletConnectTab = ({ type, walletName = "Metamask", walletSrc, ExternalIcon }: WalletConnectTabProps) => {
  const bgClass = useMemo(() => {
    if (type === "failed") return "bg-surface-error border-foreground-errorOnSurface "
    return "bg-weak border-default hover:bg-darks"
  }, [type])

  if (type === "connected") return (
    <div className={`flex p-4x gap-4x items-center justify-between  rounded-lg  bg-weaker text-weakest hover:bg-weak`}>
      <p className='text-body-l-medium'>Disconnect wallet</p>
      <LucidePower className='w-4x h-4x' />
    </div>
  );
  return (
    <div className={`flex p-4x gap-4x items-center border rounded-lg  ${bgClass}`}>
      {
        type === "failed" ?
          <div className='flex -space-x-2x'>
            <Avatar alt="WELF logo" size={40} src="Welf.png" />
            <Avatar alt="WalletConnect" size={40} />
          </div> :
          <>
            {
              walletSrc &&
              <Avatar
                alt="WalletConnect"
                size={40}
                src={walletSrc}
              />
            }
          </>
      }
      {
        type === "failed" ?
          <div className='flex flex-col md:flex-row gap-1x  md:gap-4x w-full'>
            <div className='text-body-m-medium flex-1'>Wallet connection failed</div>
            <div className='flex gap-Button-l-label items-center'>
              <p className='text-body-s-strong'>Try Again</p>
              <LucideArrowRight className='w-4x h-4x' />
            </div>
          </div> :
          <div className='flex justify-between w-full items-center '>
            <p className='text-body-m-medium text-foreground-weak'>{walletName}</p>
            {
              type === "recent" && <Badge variant="secondary-info" size="s"  >Recent</Badge>
            }
            {
              type === "detected" && <Badge variant="secondary-warning" size="s"  >Detected</Badge>
            }
            {
              ExternalIcon &&
              ExternalIcon
            }
          </div>
      }

    </div>
  )
}
