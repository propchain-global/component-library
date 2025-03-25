import { ClaimHistoryItem, TokenSupplyData } from "@/types/portfolio";

import { ClaimEvent } from "@/types/portfolio";
import { formatEther } from "viem";
import { SelectedStake, StakeInfo } from "@/types/stake";


export function getMilestoneInfo(
  startTimestamp: bigint,
  milestones: number[],
  apyRates: number[]
) {
  const now = BigInt(Math.floor(Date.now() / 1000));
  const elapsedSeconds = now - startTimestamp;

  const percentPerMilestone = 100 / milestones.length;

  const elapsedDays = Number(elapsedSeconds) / 86400;

  let percent_complete = 0;

  for (let i = 0; i < milestones.length; i++) {
    if (elapsedDays >= milestones[i]) {
      percent_complete = percentPerMilestone * (i + 1);
    } else if (i === 0) {
      percent_complete = (elapsedDays / milestones[0]) * percentPerMilestone;
      break;
    } else {
      const periodStart = milestones[i - 1];
      const periodDuration = milestones[i] - periodStart;
      const periodProgress = (elapsedDays - periodStart) / periodDuration;
      percent_complete =
        i * percentPerMilestone + periodProgress * percentPerMilestone;
      break;
    }
  }

  percent_complete = Math.min(100, percent_complete);

  let currentMilestone = "0-0";
  let currentApy = 0;
  let daysLeft = 0;
  let nextApy = 0;
  let timeString = "";

  let weightedApy = 0;
  let previousMilestone = 0;

  for (let i = 0; i < milestones.length; i++) {
    if (elapsedDays < milestones[i]) {
      const remainingDays = milestones[i] - elapsedDays;
      const remainingSeconds = Math.ceil(remainingDays * 86400);

      if (remainingSeconds < 86400) {
        const hours = Math.floor(remainingSeconds / 3600);
        const minutes = Math.floor((remainingSeconds % 3600) / 60);
        timeString = `${hours}hrs${minutes}mins`;
        daysLeft = -1;
      } else {
        daysLeft = Math.ceil(remainingDays - 0.1);
        timeString = `${daysLeft} days`;
      }

      currentMilestone =
        i === 0
          ? `0-${milestones[i]}`
          : `${milestones[i - 1]}-${milestones[i]}`;
      currentApy = apyRates[i];
      nextApy = i + 1 < apyRates.length ? apyRates[i + 1] : apyRates[i];

      weightedApy += (elapsedDays - previousMilestone) * apyRates[i];
      break;
    } else {
      weightedApy += (milestones[i] - previousMilestone) * apyRates[i];
    }
    previousMilestone = milestones[i];
  }

  if (elapsedDays >= milestones[milestones.length - 1]) {
    currentMilestone = `${milestones[milestones.length - 2]}-${
      milestones[milestones.length - 1]
    }`;
    currentApy = apyRates[apyRates.length - 1];
    nextApy = currentApy;
    daysLeft = 0;
    timeString = "0hrs0mins";
  }

  weightedApy = elapsedDays > 0 ? weightedApy / elapsedDays : currentApy;

  return {
    currentMilestone,
    currentApy,
    daysLeft,
    nextApy,
    weightedApy,
    timeString,
    percent_complete,
  };
}

export const formatTimestamp = (timestamp: bigint) => {
  const date = new Date(Number(timestamp) * 1000);
  return date.toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
};

export const formatTimestampSplit = (timestamp: bigint) => {
  const date = new Date(Number(timestamp) * 1000);
  return {
    date: date.toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
    time: date.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }),
  };
};

export const formatClaimEvent = (
  event: ClaimEvent,
  timestamp: bigint,
  type: "staking" | "vesting"
): ClaimHistoryItem => ({
  amount: formatEther(event.args.amount),
  timestamp: formatTimestamp(timestamp),
  txnId: event.transactionHash,
  type,
  label:
    type === "vesting"
      ? // @ts-expect-error - vesting contract label is not typed
        getVestingContractLabel(event.address)
      : "Stake",
});

export const formatUSD = (value: number) => {
  return value.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });
};

export const formatPercentage = (value: number) => {
  return value.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const formatNumber = (value: number, decimals: number = 2) => {
  return value.toLocaleString(undefined, {
    maximumFractionDigits: decimals,
  });
};

export const formatBigNumber = (value: bigint | undefined) => {
  return formatNumber(Number(formatEther(value ?? BigInt(0))));
};

export const formatTokenSupplyData = (data: TokenSupplyData) => {
  return {
    circulatingSupply: data?.circulatingSupply,
    totalSupply: data?.totalSupply,
    maxSupply: data?.maxSupply ? data.maxSupply : "N/A",
    lastUpdated: data?.lastUpdated.toLocaleString(),
    price: formatUSD(data?.price),
    fdv: formatUSD(data?.fdv),
    marketCap: formatUSD(data?.marketCap),
    marketCap_24h: formatUSD(data?.marketCap_24h),
    marketCap_24h_percentage: formatPercentage(
      data?.marketCap_24h_percentage / 100
    ),
    ticker: data?.ticker,
    volume: formatUSD(data?.volume),
    vol_MktCap: data?.vol_MktCap ? formatPercentage(data?.vol_MktCap) : "N/A",
  };
};

export const calculateSelectedTotals = (selectedStakes: SelectedStake[]) => {
  if (selectedStakes.length === 0) return { totalAmount: 0, weightedApy: 0 };

  const totalAmount = selectedStakes.reduce((sum, { stake }) => {
    return sum + Number(stake.amount.replace(/,/g, ""));
  }, 0);

  const weightedApy =
    selectedStakes.reduce((sum, { stake }) => {
      return sum + (stake.rewards?.weightedApy || 0);
    }, 0) / selectedStakes.length;

  const totalRewards = selectedStakes.reduce((sum, { stake }) => {
    return sum + (stake.rewards?.total || 0);
  }, 0);

  return {
    totalAmount: totalAmount.toLocaleString(),
    weightedApy: weightedApy.toFixed(2),
    totalRewards: totalRewards.toLocaleString(),
  };
};

export const MarqueeData = (data: TokenSupplyData) => {
  return {
    circulatingSupply: data?.circulatingSupply,
    totalSupply: data?.totalSupply,
    maxSupply: data?.maxSupply ? data.maxSupply : "N/A",
    lastUpdated: data?.lastUpdated.toLocaleString(),
    price: formatUSD(data?.price),
    fdv: formatUSDPrice(data?.fdv),
    marketCap: formatUSDPrice(data?.marketCap),
    marketCap_24h: formatUSDPrice(data?.marketCap_24h),
    marketCap_24h_percentage: formatPercentage(
      data?.marketCap_24h_percentage / 100
    ),
    ticker: data?.ticker,
    volume: formatUSDPrice(data?.volume),
    vol_MktCap: data?.vol_MktCap ? formatPercentage(data?.vol_MktCap) : "N/A",
  };
};

export const formatUSDPrice = (amount: number): string => {
  if (amount >= 1_000_000_000) {
    return `$${(amount / 1_000_000_000).toFixed(2)}B`;
  }

  if (amount >= 1_000_000) {
    return `$${(amount / 1_000_000).toFixed(2)}M`;
  }

  if (amount >= 1_000) {
    return `$${(amount / 1_000).toFixed(1)}k`;
  }

  return `$${amount.toFixed(2)}`;
};


export const extractAccounts = (cookieStr: string | null): string[] => {
  if (!cookieStr) return [];
  
  try {
    const wagmiStoreMatch = cookieStr.match(/wagmi\.store=([^;]+)/);
    if (!wagmiStoreMatch) return [];
    
    const wagmiStore = JSON.parse(decodeURIComponent(wagmiStoreMatch[1]));
    const connections = wagmiStore.state.connections.value;
    
     
    if (connections && connections.length > 0) {
      return connections[0][1].accounts || [];
    }
    
    return [];
  } catch (error) {
    console.error('Error extracting accounts:', error);
    return [];
  }
};

export const formatTokenNumber = (amount: number, decimals: number = 1): string => {
  if (amount >= 1_000_000_000) {
    return `${(amount / 1_000_000_000).toFixed(1)}B`;
  }

  if (amount >= 1_000_000) {
    return `${(amount / 1_000_000).toFixed(decimals)}M`;
  }

  if (amount >= 1_000) {
    return `${(amount / 1_000).toFixed(1)}k`;
  }

  return `${amount.toFixed(2)}`;
};

export const formatUSDPriceBigNumber = (
  value: bigint | undefined,
  price: number
) => {
  return formatUSD(Number(formatEther(value ?? BigInt(0))) * price);
};

export const getFilter = (timeframe: "D" | "W" | "M" | "Y") => {
  return timeframe === "D"
    ? "1"
    : timeframe === "W"
    ? "7"
    : timeframe === "M"
    ? "30"
    : "365";
};

export const formatHash = (hash: `0x${string}`) => {
  return hash.slice(0, 6) + "..." + hash.slice(-4);
};

export const getErrorMessage = (
  type: "buy" | "sell" | "claim" | "stake" | "unstake",
  buyAmount: string,
  balance: number,
  stakingSummary?:
    | {
        total_rewards: number | null;
        total_staked: number | null;
        user_id: string | null;
      }[]
    | null
    | undefined
) => {
  if (type === "buy" && (!buyAmount || Number(buyAmount) === 0)) {
    return "Please enter an amount to buy";
  }

  if (type === "sell") {
    if (!buyAmount || Number(buyAmount) === 0) {
      return "Please enter an amount to sell";
    }
    if (balance === 0) {
      return "Insufficient balance to sell";
    }
    if (Number(buyAmount) > Number(balance)) {
      return "The amount of WELF you're trying to sell exceeds your available balance.";
    }
  }

  if (type === "claim") {
    if (stakingSummary?.[0]?.total_rewards === 0) {
      return "No rewards available to claim";
    }
    if (stakingSummary?.[0]?.total_rewards === 0) {
      return "No rewards available to claim";
    }

    if (stakingSummary?.[0]?.total_rewards === undefined) {
      return "No rewards available to claim";
    }
    if (Number(buyAmount) > Number(stakingSummary?.[0]?.total_rewards)) {
      return "Amount exceeds available rewards";
    }
    if (Number(buyAmount) === 0) {
      return "Please enter an amount to claim";
    }
  }

  if (type === "stake") {
    // if (!buyAmount || Number(buyAmount) === 0) {
    //   return " ";
    // }
    if (Number(buyAmount) > Number(balance)) {
      return "Your balance is insufficient to continue staking in this pool. Please add funds.";
    }
  }

  if (type === "unstake") {
    if (Number(buyAmount) > Number(balance)) {
      return "The amount you're trying to unstake exceeds your available staked WELF.";
    }
  }

  return "";
};

export function extractErrorDetails(errorLog: unknown) {
  const details: Record<string, string> = {};

  const errorString = String(errorLog);

  if (errorString.includes("UserRejectedRequestError")) {
    return {
      mainError: "Transaction Rejected",
      detailedMessage: "You rejected the transaction in your wallet.",
      from: "Unknown",
      to: "Unknown",
      data: "Unknown",
      version: "Unknown",
    };
  }

  const mainErrorMatch = errorString.match(
    /^TransactionExecutionError:\s(.*)$/m
  );
  details.mainError = mainErrorMatch ? mainErrorMatch[1] : "Unknown error";

  const fromMatch = errorString.match(/from:\s+([^\s]+)/);
  const toMatch = errorString.match(/to:\s+([^\s]+)/);
  const dataMatch = errorString.match(/data:\s+([^\s]+)/);

  details.from = fromMatch ? fromMatch[1] : "Unknown";
  details.to = toMatch ? toMatch[1] : "Unknown";
  details.data = dataMatch ? dataMatch[1] : "Unknown";

  const detailedMessageMatch = errorString.match(/^Details:\s(.*)$/m);
  details.detailedMessage = detailedMessageMatch
    ? detailedMessageMatch[1]
    : "No details provided";

  const versionMatch = errorString.match(/^Version:\s(.*)$/m);
  details.version = versionMatch ? versionMatch[1] : "Unknown version";

  return details;
}

export const unstakeFormatLockDate = (timestamp: bigint) => {
  return new Date(Number(timestamp) * 1000).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

export const formatStakeInfo = (
  stakeInfo: StakeInfo,
  penaltyTimeLimit: bigint
) => {
  return (
    stakeInfo &&
    stakeInfo.map((item) => {
      return {
        amount: formatNumber(Number(formatEther(item.amount))),
        stakeTimestamp: unstakeFormatLockDate(item.stakeTimestamp),
        totalRedeemed: formatNumber(Number(formatEther(item.totalRedeemed))),
        lastClaimTimestamp: unstakeFormatLockDate(item.lastClaimTimestamp),
        matured: calculateDaysAgo(item.stakeTimestamp, penaltyTimeLimit)
          .matured,
        unlockPeriod: calculateDaysAgo(item.stakeTimestamp, penaltyTimeLimit)
          .time,
      };
    })
  );
};

export const calculateDaysAgo = (
  stakeTimestamp: bigint,
  penaltyTimeLimit: bigint
) => {
  const unlockDate = new Date(Number(stakeTimestamp + penaltyTimeLimit) * 1000);
  const now = new Date();
  const diffTime = unlockDate.getTime() - now.getTime();
  const diffDays = Math.floor(Math.abs(diffTime) / (1000 * 60 * 60 * 24));

  let timeString: string;
  if (diffTime > 0) {
    timeString = `until ${unlockDate.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })}`;
  } else {
    if (diffDays > 365) {
      timeString = `${unlockDate.toLocaleDateString("en-US")}`;
    } else if (diffDays > 30) {
      const months = Math.floor(diffDays / 30);
      timeString = ` ${months} ${months === 1 ? "month" : "months"} ago`;
    } else if (diffDays > 7) {
      const weeks = Math.floor(diffDays / 7);
      timeString = ` ${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;
    } else if (diffDays > 0) {
      timeString = ` ${diffDays} ${diffDays === 1 ? "day" : "days"} ago`;
    } else {
      timeString = "today";
    }
  }

  return {
    time: timeString,
    matured: diffTime <= 0,
  };
};

export const query = `
{
EVM(dataset: archive, network: eth) {
  TokenHolders(
    date: "2025-2-21"
    tokenSmartContract: "0x2a92525fDA8D3AB481f8E2a913B64B64bD1c9fdD"
    where: { Balance: { Amount: { gt: "0" } } }
  ) {
    uniq(of: Holder_Address)
  }
}
}`;

export function formatDurationRanges(
  durations: number[],
  fullUnit: boolean = false
): string[] {
  return durations.map((days: number, index: number, arr: number[]) => {
    const previousDays: number = index > 0 ? arr[index - 1] : 0;

    const getNumber = (days: number): string => {
      return days < 30 ? `${days}` : `${Math.round(days / 30)}`;
    };

    const getUnit = (days: number): string => {
      return fullUnit
        ? days < 30
          ? " days"
          : " Months"
        : days < 30
        ? " d"
        : " Mo";
    };

    if (index === arr.length - 1) {
      return `${getNumber(previousDays)}+${getUnit(previousDays)}`;
    } else {
      return `${getNumber(previousDays)}-${getNumber(days)}${getUnit(days)}`;
    }
  });
}
