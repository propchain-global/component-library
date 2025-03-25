"use client";
import { CurrencyField } from "@/components/ui/currency-field";

// import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Slider } from "@/components/ui/slider";

import {
  formatInputNumber,
  formatInputWithComma,
} from "@/utils/formatInputWithComma";
import Image from "next/image";
import { useEffect, useState } from "react";

import { ModalHeader } from "./modal-header";
import { calculateStakingRewards, CalculatorResult } from "@/utils/calculator";
import { PoolInfo } from "@/types/stake";
import { Alert } from "../alert";

interface RewardCalculatorProps {
  poolInfo: PoolInfo;
}
// issue 9: design missing alert message in reference to the figma design
// added note at bottom pls check condition
export default function RewardCalculator({ poolInfo }: RewardCalculatorProps) {
  const [amount, setAmount] = useState<number>(0);
  const [months, setMonths] = useState<number>(0);
  const [results, setResults] = useState<CalculatorResult | null>(null);

  useEffect(() => {
    if (amount && months && poolInfo) {
      const results = calculateStakingRewards(amount, months, poolInfo);
      setResults(results);
    }
  }, [amount, months, poolInfo]);

  return (
    <div className="w-full max-w-[480px] mx-auto">
      <div className="mb-8 text-description-l-medium">
        <ModalHeader type="centered" title={"Reward Calculator"} />
      </div>
      <CurrencyField
        label="Amount to stake"
        showChip={false}
        value={formatInputWithComma(amount)}
        type="text"
        handleInputChange={(amount) =>
          setAmount(Number(formatInputNumber(amount.toString())))
        }
        max={10000000}
      />

      <div className="text-body-s-medium mt-6 mb-3 text-foreground-weakest">
        Over a period of
      </div>

      <div className="flex gap-6">
        <Slider
          className="grow-1"
          value={[months]}
          onValueChange={(value) => setMonths(value[0])}
          max={24}
          step={1}
        />

        <div className="flex justify-end items-end shrink-0 w-[120px] h-12 border border-default bg-default rounded-md py-2 px-4">
          <div className="flex items-baseline gap-0.5">
            <h3 className="text-number-xs text-foreground-weak">{months}</h3>
            <div className="text-body-s text-foreground-weakest">month{months > 1 ? 's' : ''}</div>
          </div>
        </div>
      </div>

      <div className="mt-8 border border-default bg-weak rounded-lg">
        <div className="grid grid-cols-2">
          <div className="col-span-full py-5 flex flex-col items-center gap-2 border-b border-default">
            <div className="flex items-center gap-1">
              <Image src={"/welf-token.svg"} alt="" height={32} width={32} />
              <h2 className="text-number-s text-foreground-weak">
                {results?.futureValue}
              </h2>
            </div>

            <div className="text-foreground-weakest text-body-s">
              Future Value
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 py-4 border-r border-default">
            <div className="flex items-center gap-1">
              <Image src={"/welf-token.svg"} alt="" height={24} width={24} />
              <div className="text-number-xs text-foreground-weak">
                {results?.totalReward}
              </div>
            </div>

            <div className="text-foreground-weakest text-body-s">
              Total Reward
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 py-4">
            <div className="text-number-xs text-foreground-weak">
              {results?.weightedAverageAPY} %
            </div>

            <div className="text-foreground-weakest text-body-s">
              Weighted Avg. APY
            </div>
          </div>
        </div>

        <div className="py-3 px-4 bg-weaker grid grid-cols-[1.5fr_1fr_1fr] text-body-m text-foreground-weakest border-y border-default">
          <div>Period</div>
          <div>Rate (APY)</div>
          <div className="text-right">Reward</div>
        </div>

        <div className="p-4 flex flex-col gap-4">
          {results && results?.rewardPeriods.map((reward, index) => (
            <div
              key={`reward-${index}`}
              className="grid grid-cols-[1.5fr_1fr_1fr] text-body-m text-foreground-weak font-normal"
            >
              <div>{reward.period}</div>
              <div>{reward.rate}%</div>
              <div className="flex gap-0.5 items-center justify-end">
                <Image src={"/welf-token.svg"} alt="" height={16} width={16} />
                {reward.reward.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Alert  variant='info' iconAlign='center' closeButton={false} className="mt-8x" icon={true} title="Stake and unstake anytime! and unlock rewards up to 15% APY by staking longer." />
    </div>
  );
}
