import { FormattedPoolInfo, PoolInfo } from "./stake";

export type ClaimHistoryItem = {
  amount: string;
  timestamp: string;
  txnId: string;
  type: "staking" | "vesting";
  label: string;
};

export type ClaimEvent = {
  blockNumber: bigint;
  transactionHash: string;
  args: {
    amount: bigint;
  };
};

export type PriceDataPoint = [number, number]; // [timestamp, price]

export interface MarketChart {
  prices: PriceDataPoint[];
  market_caps: PriceDataPoint[];
  total_volumes: PriceDataPoint[];
}

export interface MarketData {
  welf: {
    ID: string;
    created_at: string;
    updated_at: string;
    token_id: string;
    current_price_usd: number;
    change_percentage_24h: number;
    low_24h_usd: number;
    high_24h_usd: number;
    market_cap_usd: number;
    total_volume_usd: number;
  };
}
export type GraphData = {
  total_supply_usd: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  total_volume: number;
  low_24h: number;
  high_24h: number;
  price: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d: number;
  price_change_percentage_14d: number;
  price_change_percentage_30d: number;
  price_change_percentage_1y: number;
  circulating_supply: number;
  max_supply: number;
};

export interface PriceDataResponse {
  message: string;
 
    market_charts: {
      [key: string]: MarketChart; // Keys are "1", "7", "30" 
    };
    market_data: MarketData;
 
  error: string;
  graph_data: GraphData;
  burned_tokens: string;
  tokenHolders: string;
  totalStaked: string;
  maxSupplyUsd: string;
  circulatingSupply: string;
  totalSupplyUsd: string;
 
}

export type TokenSupplyData = {
  circulatingSupply: string;
  totalSupply: string;
  maxSupply: string;
  lastUpdated: Date;
  price: number;
  price_change_24h?: number;
  fdv: number;
  marketCap: number;
  marketCap_24h: number;
  marketCap_24h_percentage: number;
  ticker: string;
  volume: number;
  price_change_percentage_24h?: number;
  vol_MktCap?: number;
};

export type TokenData = {
  tokenSupply: TokenSupplyData;
  graphData: GraphData;
};

export interface poolProps {
  name: string;
  apy: string;
  lock: string;
  tvl: number;
  stakedWelf: number;
}

export interface claimRewardProps {
  lockedWelf: number;
  stakingReward: number;
  nextclaim: string;
  vestingToClaim: number;
}

export interface StakeUnstackCardProps extends React.ComponentProps<"div"> {
  stakepools?: FormattedPoolInfo[];
  unstakepools?: poolProps[];
  claimeward?: claimRewardProps;
  usdBalance: usdBalanceProps;
  user: `0x${string}`;
}

export interface usdBalanceProps {
  currentBalance: string;
  percentageDiff:   string;
  pastBalanceNumber: number;
  currentBalanceNumber:   string;
  currentBalanceUSD?: string;
}  
export interface newsDataProps {
  title: string;
  message: string;
  backgroundImage: string;
  ctaUrl: string;
}

export interface PriceChartProps {
  token: string;
  activeTab: "M" | "W" | "D" | "Y";
  price: number;
  low24: number;
  high24: number;
  change24: number;
  totalSupply: TokenSupplyData;
  chartData?:
    | {
        [key: string]: MarketChart;
      }
    | undefined;
  xkey?: string | number;
  ykey?: string | number;
}
export interface PoolData {
  selected?: boolean;
  welfToken: string;
  checkbox?: boolean;
  stakeDate: string;
  stakeTime: string;
  progress: number;
  nextMilestoneDays: number;
  currentAPY: number;
  onCheckboxClick?: () => void;
  status?: "pending" | "cool-down" | "active" | "";
  releaseDate?: string;
  unstakeDate?: string;
  unstakeTime?: string;
  showUnstakeDate?: boolean;
  txn_id?: string;
  txnLink?: string;
  poolInfo?: PoolInfo;
  nextMilestonePercentage?: number;
}

export interface StakingClaimHistory {
  type: string;
  amount: string;
  txnHash: `0x${string}`;
  txnId: string;
  txnLink: string;
  dateSplit: {
    date: string;
    time: string;
  };
}
