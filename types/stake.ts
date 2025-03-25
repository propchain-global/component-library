import { RewardPeriod } from "@/utils/calculator";

 

export type StakeInfo =  readonly {
  amount: bigint;
  stakeTimestamp: bigint;
  totalRedeemed: bigint;
  lastClaimTimestamp: bigint;
}[] | null

export type FormattedPoolInfo = {
    pid: number;
    name: string;
    version: string;
    apy: string;
    lockPeriod: string;
    tvl: {
      welf: string;
      usd: string;
    };
    stakedAmount: {
      welf: string;
      usd: string;
    };
    isActive: boolean;
    penalty: {
      percentage: string;
      isDecreasing: boolean;
      timeLimit: string;
      estimatedFee: string;
    };
    lockStatus?: {
      until: string;
      formattedUntil?: string;
      isLocked: boolean;
    };
    hasMatured: boolean;
    priceRate: string;
    minStakeAmount: string;
    activeStake: boolean;
    stakeInfo?: {
      amount: string;
      stakeTimestamp: string;
      totalRedeemed: string;
      lastClaimTimestamp: string;
      matured: boolean;
      unlockPeriod: string;
  }[] | null;
  };

export interface CoolDown  {
  unstaked_on: {
      date: string;
      time: string;
  };
  staked_on: {
      date: string;
      time: string;
  };
  apy: number | undefined;
  amount: string;
  endTime: {
      date: string;
      time: string;
  };
  timeLeft: string;
  percentageComplete: number;
  reward: string;
}

export interface CoolDowns {
  cooldowns: CoolDown[] | undefined;
}

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
export type PoolsInfo = {
  totalStaked: string;
  activeUserCount: string;
  startingApy: number;
  highestApy: number;
}

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

 
export type SelectedStake = {
  stake: UserStakes;
  index: number;
};

export interface UnstakeInitiatedEvent {
  amount: string;
    txnId: string;
    txnLink: string;
    staked_on: string;
    unstaked_on: string;
    staked_on_split: {
        date: string;
        time: string;
    };
    unstaked_on_split: {
        date: string;
        time: string;
    };
}

  