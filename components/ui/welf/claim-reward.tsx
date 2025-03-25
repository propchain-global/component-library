import BuyWelfPopup from "./buyWelfPopup";
import WalletNotConnected from "./WalletNotConnected";
import Image from "next/image";
import { UserStakes } from "@/types/stake";
import ClaimRewards from "./ClaimRewards";
import CooldownAction from "./cooldown-action";

interface ClaimRewardProps {
  isConnected: boolean;

  user: `0x${string}`;
}

const ClaimReward = async ({ isConnected, user }: ClaimRewardProps) => {
  

  const pendingRewards = null;
  const balance = 0;
  const userStakes = {stakes : []}

  const showBuyWelfPopup = balance <= 0;
  const showBuyWelfPopupNoStake = userStakes?.stakes?.length === 0 && balance > 0;

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
      <div className="flex flex-col gap-6x">
        <div className="bg-[url('/Total-Reward-Earned-Card.png')] bg-cover h-[120px] relative rounded-lg overflow-hidden p-4x">
          <Image
            src="/token-leaderboard.png"
            alt=""
            height={90}
            width={180}
            className="h-full w-auto absolute right-0 bottom-0"
          />

          <div className="text-body-s textforeground-weaker mb-1.5x relative">
            Total Reward Earned
          </div>
          <div className="flex items-center gap-1x relative">
            <Image src="/welf-token.svg" height={24} width={24} alt="" />
            <div className="text-number-xs text-foreground-weakest">
              {pendingRewards}
            </div>
          </div>
        </div>
        <div className="flex gap-4x flex-col">
          <div className="text-body-l-medium text-foreground-weak">
            Reward Breakdown
          </div>
          <ClaimRewards userStakes={userStakes?.stakes as UserStakes[]} />
        </div>
      </div>

      {userStakes?.stakes?.length === 0 && balance > 0 && (
        <BuyWelfPopup
          title="You’ve got tokens in your wallet. Stake them now to start earning rewards!"
          showPopup={userStakes?.stakes?.length === 0}
          type="stake"
        />
      )}
      {
        balance === 0 && (
          <BuyWelfPopup
            title="Enjoy flexible staking, where your rewards increase at each milestone, with no lock-up holding you back."
            showPopup={showBuyWelfPopup}
          />
        )
      }
       <CooldownAction totalAmount={pendingRewards ?? "0"} functionName="batchClaimRewards" />
      {!isConnected && <WalletNotConnected type="Claim reward" />}
    </div>
  );
};
export default ClaimReward;
