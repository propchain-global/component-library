import { FC, ReactElement } from "react";
import { WalletConnectTab } from "./wallet-conntect-tab";
import { LucideExternalLink } from "lucide-react";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ModalHeader } from "./modal-header";

interface BuyWelfModalProps {
  children: ReactElement
}

const exchanges = [
  {
    name: "Get on Uniswap",
    icon: "/metamask.svg",
    link: "https://app.uniswap.org/explore/tokens/ethereum/0x2a92525fda8d3ab481f8e2a913b64b64bd1c9fdd"
  },
  {
    name: "Get on Bitget",
    icon: "/bitget.svg",
    link: "#" // Add Bitget link when available
  },
  {
    name: "Get on MEXC",
    icon: "/mexc.svg",
    link: "https://www.mexc.com/price/WELF?calculatorTab=trade&utm_source=mexc&utm_medium=markets&utm_campaign=marketsdetails"
  }
];

const BuyWelfModal: FC<BuyWelfModalProps> = ({
  children
}) => {

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent
        className="rounded-none md:rounded-none border-none bg-none shadow-none"
      >
        <ModalHeader
          type="centered"
          title={"Buy Welf"}
          supportingText={"Here is a list of trusted exchanges where you can buy WELF."}
          onClick={(event) => event.stopPropagation()}
        />

        <div
          className="max-w-[480px] mx-auto w-full mt-8x flex flex-col gap-2x"
          onClick={(event) => event.stopPropagation()}
        >
          {exchanges.map((exchange, index) => (
            <Link
              key={index}
              href={exchange.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WalletConnectTab
                walletName={exchange.name}
                type="default"
                walletSrc={exchange.icon}
                ExternalIcon={<LucideExternalLink className='w-5x h-5x text-button-tertiary-accent-default' />}
              />
            </Link>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default BuyWelfModal