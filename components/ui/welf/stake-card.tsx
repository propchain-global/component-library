import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  // Loader2,
  LucideInfo,
  ChevronDown,
} from "lucide-react";

import APYBreakdown from "./apyBreakdown";
import BuyWelfPopup from "./buyWelfPopup";

import WalletNotConnected from "./WalletNotConnected";

import { Suspense } from "react";
import StakeInput from "./stake-input";
import StakeAction from "./stake-action";
import { usdBalanceProps } from "@/types/portfolio";
import RewardCalculatorPopup from "./RewardCalculatorPopup";
interface StakeCardProps {
  isConnected: boolean;
  usdBalance: usdBalanceProps;
}

const StackCard = ({ isConnected, usdBalance }: StakeCardProps) => {
  // const [isLoading, setIsLoading] = useState(false);
  const showBuyWelfPopup = Number(usdBalance?.currentBalanceNumber) <= 0;

  let cardHeightClass = ""
  if(isConnected){
    if(showBuyWelfPopup){
      cardHeightClass = "h-[480px] overflow-hidden"
    }
  }else{
    cardHeightClass = "h-[368px] overflow-hidden"
  }

  return (
    
    <div
      className={`${cardHeightClass} md:p-6x p-3x border border-secondary-teal-60 rounded-xl bg-secondary-teal-80 gap-8x flex flex-col relative overflow-hidden box-border`}
    >
      <div className="flex flex-col gap-4">
        <StakeInput usdBalance={usdBalance.currentBalance} />

        <Accordion type="single" collapsible>
          <AccordionItem
            className="border-none bg-transparent"
            value="apy breakdown"
          >
            <AccordionTrigger className="flex justify-between items-center py-0 px-0 md:p-0">
              <div className="flex items-center gap-1 ">
                <div className="text-body-m-medium text-foreground-weak">
                  Expected APY breakdown
                </div>
              </div>
              <ChevronDown className="h-4 w-4 shrink-0 text-foreground-weakest transition-transform duration-200" />
            </AccordionTrigger>
            <AccordionContent className="mt-3 ps-0 pe-0 pb-0  md:ps-0 md:pe-0 md:pb-0">
              <Suspense>
                <APYBreakdown />
              </Suspense>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="bg-alert-background-information border border-alert-border-information rounded-md px-3 py-4 flex gap-3">
          <LucideInfo
            className="text-alert-icon-netural shrink-0 mt-1"
            height={16}
            width={16}
          />

          <div>
            <div className="text-alert-netural text-body-s mb-3">
              Stake and unstake anytime while unlocking rewards up to 15% APY by
              staking longer.
            </div>
            <Suspense>
              <RewardCalculatorPopup />
            </Suspense>
          </div>
        </div>
      </div>
      <StakeAction {...{ usdBalance }} />

      {
        showBuyWelfPopup && (
          <BuyWelfPopup
            title="Enjoy flexible staking, where your rewards increase at each milestone, with no lock-up holding you back."
            showPopup={showBuyWelfPopup}
          />
        )
      }

      {!isConnected && <WalletNotConnected type="Stake" />}
    </div>
  );
};

export default StackCard;
