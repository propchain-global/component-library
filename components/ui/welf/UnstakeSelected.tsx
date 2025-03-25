"use client";
import React from "react";
import PoolReward from "./PoolReward";

import Image from "next/image";
import { useStakeStore } from "@/store/stake";
import { calculateSelectedTotals } from "@/utils";

const UnstakeSelected = () => {
  const { selectedStakes } = useStakeStore();
  const { totalAmount, weightedApy, totalRewards, } =
    calculateSelectedTotals(selectedStakes);
 
  return (
    <>
      <div className="border rounded-lg border-default bg-secondary text-body-s text-foreground-weakest mb-6">
        <div className="border-b border-default py-5 flex flex-col items-center">
          <div className="flex gap-1 items-center text-number-s text-foreground-weak">
            <Image src={"/welf-token.svg"} alt="" height={32} width={32} />
            {totalAmount}
            {/* {(selectedStakingStats.totalWelfToken).toLocaleString()} */}
          </div>
          <div className="mt-2">Total Staked WELF in All Pools</div>
        </div>
        <div className="grid grid-cols-2">
          <div className="border-r border-default py-4 flex flex-col items-center">
            <div className="flex gap-1 items-center text-number-xs text-foreground-weak">
              <Image src={"/welf-token.svg"} alt="" height={24} width={24} />
              {totalRewards}
              {/* {selectedStakingStats.totalRewards.toLocaleString('en-US', { maximumFractionDigits: 4 })} */}
            </div>
            <div className="mt-2">Total Reward</div>
          </div>
          <div className="py-4 flex flex-col items-center">
            <div className="flex gap-1 items-center text-number-xs text-foreground-weak">
              {/* {selectedStakingStats.averageAPY.toFixed(
              2
            )} */}
              {weightedApy} %
            </div>
            <div className="mt-2">Weighted Avg. APY</div>
          </div>
        </div>
      </div>
      <PoolReward/>
    </>
  );
};

export default UnstakeSelected;
