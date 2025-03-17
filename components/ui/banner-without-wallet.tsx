import * as React from "react"
import { Button } from "./button"
import Image from "next/image"

const BannerWithoutWallet = () => {
  return (
    <div
      className="relative overflow-hidden min-h-[320px] md:min-h-fit w-full lg:min-w-[1080px] md:p-5x p-6x bg-[url('/banner-without-wallet.svg')] bg-cover bg-center rounded-xl border border-default">
      
      <div className="text-body-2xl-strong md:text-body-3xl-strong text-foreground-weak relative z-10">
        Stake
        <span className="text-foreground-link"> $WELF</span>
      </div>
      
      <div className="mt-2x text-body-s text-foreground-weaker max-w-[468px] relative z-10">
          Unlock rewards by staking anytime—earn more the longer you stake and enjoy sustainable, flexible rewards in a simple, transparent pool.
      </div>
      

      <div className="flex gap-6x mt-6x relative z-10 items-center">
      <a href="https://docs.welf.com/" target="_blank" rel="noopener noreferrer">
        <Button
          variant='tertiary'
          size='l'
        >
          Learn about WELF
        </Button>
        </a>
        <a href="mailto:info@welf.com" target="_blank" rel="noopener noreferrer">
        <Button
          variant='link'
          size='l'
        >
          Get in touch with us
        </Button>
        </a>
      </div>

      <Image
        src="/token-leaderboard.png"
        className="h-[200px] md:h-full w-auto md:object-contain absolute right-0 bottom-0 hidden md:block"
        alt=""
        width={216}
        height={230}
      />
      <Image 
        src="/token-leaderboard-mobile-img.png"
        className="h-[288px] w-auto md:hidden flex absolute right-0 bottom-0 z-0"
        height={288}
        width={307}
        alt=''
      />
    </div>
  )
}
export {BannerWithoutWallet};
