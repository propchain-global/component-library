import { FC, Suspense } from "react";
// import WalletNotConnected from "./WalletNotConnected";

import BuyWelfPopup from "./buyWelfPopup";

import WalletNotConnected from "./WalletNotConnected";
import Pool2 from "./Pool2";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CircleHelp,
  ChevronDown,
} from "lucide-react";

import Unstake from "./Unstake";
import Pool3 from "./Pool3";
interface UnstackCardProps {
  isConnected: boolean;
  balance: number;
  user: `0x${string}`;
}

const UnstackCard: FC<UnstackCardProps> = async ({ isConnected, user }) => {
  // await new Promise(resolve => setTimeout(resolve, 5000));
  const stakes = {
    stakes : []
  };
  const cooldowns = {
    cooldowns : []
  };
  const balance = 0;

  const showBuyWelfPopup = balance <= 0;
  const showBuyWelfPopupNoStake = stakes?.stakes?.length === 0 && balance > 0;
  
  let cardHeightClass = ""
  if(isConnected){
    if(showBuyWelfPopup || showBuyWelfPopupNoStake){
      cardHeightClass = "h-[480px] overflow-hidden"
    }
  }else{
    cardHeightClass = "h-[368px] overflow-hidden"
  }
 
  return (
    <div
      className={`${
        cardHeightClass
      } md:p-6x p-3x border border-secondary-teal-60 rounded-xl bg-secondary-teal-80 gap-8x flex flex-col relative overflow-hidden box-border`}
    >
      {stakes?.stakes && stakes?.stakes?.length > 1 && (
        <div className="text-body-l-medium text-foreground-weak">
          Select the stakes you want to unstake
        </div>
      )}
      <Pool2
        stakingHistory={stakes?.stakes}
        poolInfo={null}
      />

      <Unstake singleStake={stakes?.stakes && stakes?.stakes?.length !== 1} />
      {/* ISSUE 10: Pending text is missing , figma for reference */}
      <Accordion type='multiple'>
          <AccordionItem
            className="border-none bg-transparent"
            value="Pending pools"
          >
            <AccordionTrigger className="flex justify-between items-center py-0 px-0 md:p-0 transition-all data-[state=open]:mb-4x">
              <div className="flex items-center gap-1x">
                <div className="text-body-l-medium text-foreground-weak">
                  Pending pools 
                </div>
                <CircleHelp className="h-4 w-4 shrink-0 text-foreground-weakest" />
              </div>
              <ChevronDown className="h-4 w-4 shrink-0 text-foreground-weakest transition-transform duration-200" />
            </AccordionTrigger>
            <AccordionContent className="mt-3 ps-0 pe-0 pb-0  md:ps-0 md:pe-0 md:pb-0">
              <Suspense>
                <Pool3 cooldowns={cooldowns.cooldowns} />
              </Suspense>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

      {stakes?.stakes?.length === 0 && balance > 0 && (
        <BuyWelfPopup
          title="You’ve got tokens in your wallet. Stake them now to start earning rewards!"
          showPopup={stakes?.stakes?.length === 0}
          type="stake"
        />
      )}
      {
        balance === 0 && (
          <BuyWelfPopup
            title="Enjoy flexible staking, where your rewards increase at each milestone, with no lock-up holding you back."
            showPopup={balance <= 0}
          />
        )
      }

      {!isConnected && <WalletNotConnected type={"Unstake"} />}
    </div>
  );
};

export default UnstackCard;
