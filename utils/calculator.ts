interface PoolInfo {
  poolConfig: {
    minStake: string;
 
  };
  activeTier: {
    durations: number[];  
    apys: number[];  
  };
}

export interface RewardPeriod {
  period: string;
  rate: number;
  reward: number;
}

export interface CalculatorResult {
  futureValue: number;
  totalReward: number;
  weightedAverageAPY: number;
  rewardPeriods: RewardPeriod[];
  maxMonths: number;
}

const formatPeriodLabel = (days: number): string => {
  if (days < 30) return `${days} Days`;
  const months = Math.floor(days / 30);
  return `${months} ${months === 1 ? 'Month' : 'Months'}`;
};

const getPeriodRange = (startDays: number | null, endDays: number | null): string => {
  const getNumber = (days: number) => Math.floor(days / 30);
  
  if (startDays === null) return `0-${formatPeriodLabel(endDays!)}`;
  if (endDays === null) return `${formatPeriodLabel(startDays)}+`;
  return `${getNumber(startDays)}-${formatPeriodLabel(endDays)}`;
};

export const calculateStakingRewards = (
  amount: number,
  months: number,
  poolInfo: PoolInfo,
  decimals: number = 2
): CalculatorResult => {
  if (!amount || !months || !poolInfo) {
    return {
      futureValue: 0,
      totalReward: 0,
      weightedAverageAPY: 0,
      rewardPeriods: [],
      maxMonths: 0,
    };
  }

  const { durations, apys } = poolInfo.activeTier;
  const maxMonths = Math.ceil(durations[durations.length - 1] / 30);
  
 
  const stakingDays = months * 30;
  
 
  const rewardPeriods: RewardPeriod[] = [];
  
 
  let remainingDays = stakingDays;
  let totalReward = 0;
  let weightedAPY = 0;
  
  for (let i = 0; i < durations.length; i++) {
    const currentPeriodDays = i === 0 
      ? durations[0] 
      : (durations[i] - durations[i-1]);
    const daysInThisPeriod = Math.min(remainingDays, currentPeriodDays);
    
    if (daysInThisPeriod <= 0) break;
    
    const periodAPY = apys[i];
    const periodReward = (amount * (periodAPY / 100) * (daysInThisPeriod / 365));
    
    totalReward += periodReward;
    weightedAPY += (periodAPY * daysInThisPeriod);
    
    const startDays = i === 0 ? null : durations[i-1];
    const endDays = i === durations.length - 1 ? null : durations[i];
    
    rewardPeriods.push({
      period: getPeriodRange(startDays, endDays),
      rate: periodAPY,
      reward: periodReward,
    });
    
    remainingDays -= daysInThisPeriod;
  }
  
  const weightedAverageAPY = weightedAPY / stakingDays;
  const futureValue = amount + totalReward;

  return {
    futureValue: Number(futureValue.toFixed(decimals)),
    totalReward: Number(totalReward.toFixed(decimals)),
    weightedAverageAPY: Number(weightedAverageAPY.toFixed(decimals)),
    rewardPeriods,
    maxMonths,
  };
};
 
