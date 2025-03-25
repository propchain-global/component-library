export type UserProperties = {
    isActive: boolean;
    claimedAmount: bigint;
    vestingId: bigint;
  };
  
 export type VestingProperties = {
    totalAmountForUser: bigint;
    tgeAmountForUser: bigint;
    startTime: bigint;
    tickCount: bigint;
    tickDuration: bigint;
    availableAmount: bigint;
    active: boolean;
  };

  export type VestingAndStakingData = {
    lockedWELF: bigint;
    vestingToClaimWELF: bigint;
    stakingRewardWELF: bigint;
    totalStakedWELF: bigint;
    userTotalStakedWELF: bigint;
    vestingPools: {
        pool: string;
        claimable: bigint;
        total: bigint;
    }[];
    rewardsPools: {
      pendingRewards: {
          amount: string;
          version: string;
          pid: number;
      }[];
  }[]
  };

  export type VestingSchedule = {
    nextClaimDate: Date | null;
    claimableAmount: bigint;
    daysUntilClaim: number;
  };