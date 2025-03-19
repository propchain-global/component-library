import React, { Suspense, useMemo } from 'react';
import Image from 'next/image';
import { Badge } from '../badge';
import { Button } from '../button';
import PortfolioInfoCard from './portfolio-info-card';
// import RewardHistoryPopup from './RewardHistoryPopup';
// import StakingHistoryPopup from './StakingHistoryPopup';
import { MoveHorizontal, ArrowUpRight, ArrowDownLeft, LucideChevronDown, LucideChevronUp } from 'lucide-react';
// import BuyWelfModal from './buyWelfModalNew';

export type PoolInfo = {
  formattedDurations: string[];
  activeTier: {
    durations: number[];
    apys: number[];
  };
  poolConfig: {
    cooldownPeriod: number;
    minStake: string;
    currentTierVersion: number;
    name: string;
    stakingToken: `0x${string}`;
    rewardToken: `0x${string}`;
    isPaused: boolean;
    rewardStrategy: number;
    rewardAddress: `0x${string}`;
    restricted: boolean;
    allowPartialUnstake: boolean;
  };
};

export interface UserStakes {
  stake_amount: bigint;
  amount: string;
  startTime: {
    date: string;
    time: string;
  };
  current_milestone: {
    duration: string;
    percentage: number;
    percent_complete: number;
  };
  next_milestone: {
    days_to_unlock: number;
    percentage: number;
    timeString: string;
  };
  lastClaimTime: bigint;
  rewards: {
    periods: RewardPeriod[];
    total: number;
    weightedApy: number;
  } | undefined
}

export interface RewardPeriod {
  period: string;
  rate: number;
  reward: number;
}

export interface StakePortfolio {
  poolInfo: PoolInfo 

  stakes: UserStakes[];
  total_stakesamount: string;
  total_rewards: string;
  reward_breakdown: {
    amount: string;
    startTime: {
        date: string;
        time: string;
    };
    periods: RewardPeriod[];
    total_reward: number;
  }[];
}

export default function ConnectedPortfolioCard({
    welfBalance,
    usdBalance,
    priceChangePercentage,
    stakeInfo,
    user,
}: {
    welfBalance: string;
    usdBalance: string;
    priceChangePercentage: string;
    stakeInfo: StakePortfolio | null;

    user?: `0x${string}`;
}) {
    const numericPriceChange = useMemo(
        () => parseFloat(priceChangePercentage),
        [priceChangePercentage]
    );
    const { variant, Icon } = useMemo(() => {
        if (numericPriceChange > 0) {
            return {
                variant: 'secondary-success' as const,
                Icon: ArrowUpRight,
            };
        } else if (numericPriceChange < 0) {
            return { variant: 'secondary-error' as const, Icon: ArrowDownLeft };
        } else {
            return {
                variant: 'secondary-neutral' as const,
                Icon: MoveHorizontal,
            };
        }
    }, [numericPriceChange]);

    return (
        <div className="flex flex-col p-5 lg:min-w-[1080px] gap-8 rounded-xl bg-weak bg-[url(/porfolio-bg-mobile.png)]  md:bg-[url('/image.png')] bg-cover bg-center">
            <input
                    type="checkbox"
                    id="hideBreakdown"
                    className="peer hidden"
                />
            <div className="flex flex-row justify-between items-start     peer-checked:[&>[data-type='hide']]:hidden peer-checked:[&>[data-type='show']]:flex">
                <div className="flex flex-col gap-2">
                    <p className="text-body-m-medium text-foreground-weakest">
                        My WELF Balance
                    </p>
                    <div className="flex gap-1 items-center">
                        <Image
                            src="/welf-token.svg"
                            alt="welf"
                            width={40}
                            height={48}
                        />
                        <p className="text-number-xm text-foreground-weak">
                            {welfBalance}
                        </p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <p className="text-body-m-medium text-foreground-weak">
                            {usdBalance}
                        </p>
                        <Badge size="s" variant={variant}>
                            <Icon
                                width="12x"
                                height="12x"
                                className="w-3x h-3x"
                            />
                            {priceChangePercentage}%
                        </Badge>
                    </div>
                </div>
                {/* <BuyWelfModal> */}
                    <Button
                        size="l"
                        variant="primary"
                        className="hidden md:flex"
                    >
                        <Image
                            src="/welf-icon.svg"
                            alt="welf"
                            width={20}
                            height={20}
                        />
                        Buy WELF
                    </Button>
                {/* </BuyWelfModal> */}
                
                <label
                    htmlFor="hideBreakdown"
                    className="flex md:hidden self-end  "
                    data-type="hide"
                >
                    <Button
                        size="s"
                        variant="tertiary"
                        className=" pointer-events-none"
                    >
                        
                       
                      <span className=''> Hide Breakdown </span>
                  
                       <LucideChevronUp className='w-4 h-4' />
                    </Button>
                </label>
                <label
                    htmlFor="hideBreakdown"
                    className=" self-end hidden "
                    data-type="show"
                >
                    <Button
                        size="s"
                        variant="tertiary"
                        className=" pointer-events-none"
                    >
                        
                       
                      <span className=''> Show Breakdown </span>
                  
                       <LucideChevronDown className='w-4 h-4' />
                    </Button>
                </label>
               
            </div>
            

            <div className="grid grid-cols-1 md:grid-cols-3  gap-4 peer-checked:scale-y-0 peer-checked:h-0 peer-checked:hidden  overflow-hidden transition-all origin-top">
                <PortfolioInfoCard
                    title="Staked Welf"
                    showTokenIcon={true}
                    tertiaryButton={
                        <Suspense
                            fallback={
                                <Button
                                    variant="tertiary"
                                    size="m"
                                    className="px-0 py-0 hover:bg-transparent mt-1"
                                >
                                    Staking History
                                </Button>
                            }
                        >
                            {/* <StakingHistoryPopup user={user} /> */}
                        </Suspense>
                    }
                    value={stakeInfo?.total_stakesamount ?? '0'}
                    iconImagePath="/lock-icon.svg"
                />
                <PortfolioInfoCard
                    title="Weighted Average APY"
                    tertiaryButton=""
                    value={`${
                        stakeInfo?.stakes[0]?.rewards?.weightedApy ?? 0
                    }%`}
                    iconImagePath="/apy-icon.svg"
                />
                <PortfolioInfoCard
                    title="All Time Staking Reward"
                    tertiaryButton={
                        <Suspense
                            fallback={
                                <Button
                                    variant="tertiary"
                                    size="m"
                                    className="px-0 py-0 hover:bg-transparent mt-1"
                                >
                                    Reward History
                                </Button>
                            }
                        >
                            {/* <RewardHistoryPopup user={user} /> */}
                        </Suspense>
                    }
                    value={stakeInfo?.total_rewards ?? 0}
                    iconImagePath="/gift-icon.svg"
                />
            </div>
        </div>
    );
}
