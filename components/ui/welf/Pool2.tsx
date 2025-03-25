"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";

import { LucideInfo } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { SelectedStake, UserStakes } from "@/types/stake";
import { PoolInfo } from "@/types/stake";
import { useStakeStore } from "@/store/stake";
import { useEffect } from "react";

interface poolProps {
  stakingHistory: UserStakes[] | undefined;

  poolInfo: PoolInfo | null;
}

const Pool = ({ stakingHistory, poolInfo }: poolProps) => {
  const { selectedStakes, setSelectedStakes, showUnstake } = useStakeStore();
  const singleStake = stakingHistory && stakingHistory.length === 1;
  const handleStakeSelection = (stake: UserStakes, index: number) => {
    const prevStakes = useStakeStore.getState().selectedStakes;
    const isSelected = prevStakes.some((s: SelectedStake) => s.index === index);

    setSelectedStakes(
      isSelected
        ? prevStakes.filter((s: SelectedStake) => s.index !== index)
        : [...prevStakes, { stake, index }]
    );
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked && stakingHistory) {
      const allStakes =
        stakingHistory &&
        stakingHistory.map((stake, index) => ({
          stake,
          index,
        }));
      setSelectedStakes(allStakes);
    } else {
      setSelectedStakes([]);
    }
  };

  useEffect(() => {
    if (singleStake) {
      setSelectedStakes([{ stake: stakingHistory[0], index: 0 }]);
    }
  }, [singleStake, stakingHistory, setSelectedStakes]);

  return (
    <>
      {!showUnstake &&
        stakingHistory &&
        stakingHistory.map((stake, index) => (
          <div
            key={index}
            className={`p-4 transition-all duration-300 rounded-lg bg-weak border ${
              !singleStake &&
              selectedStakes.some((s: SelectedStake) => s.index === index)
                ? "border-accent"
                : "border-default"
            } `}
          >
            <div className="flex justify-between mb-2">
              <div className="flex items-center gap-1">
                <div className="text-foreground-weakest text-body-s">
                  Staked on:
                </div>
                <div className="text-foreground-weak text-body-s-medium">
                  {" "}
                  {stake.startTime.date}{" "}
                </div>
                <div className="h-1 w-1 rounded-sm bg-foreground-weakest"></div>
                <div className="text-foreground-weak text-body-s-medium">
                  {" "}
                  {stake.startTime.time}{" "}
                </div>
              </div>

              {stakingHistory && stakingHistory.length > 1 && (
                <Checkbox
                  className="h-5 w-5 border border-foreground-inverse bg-darks data-[state=checked]:bg-accent-default data-[state=checked]:border-accent-default dark:data-[state=checked]:bg-accent-default dark:data-[state=checked]:border-accent-default"
                  checked={selectedStakes.some(
                    (s: SelectedStake) => s.index === index
                  )}
                  onCheckedChange={() => handleStakeSelection(stake, index)}
                />
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 mb-4">
                <Image src={"/welf-token.svg"} alt="" height={32} width={32} />

                <div className="text-number-s text-foreground-weak">
                  {stake.amount}
                </div>
              </div>

              <Badge
                variant="secondary-neutral"
                className="text-pills-secondary-neutral bg-pills-secondary-neutral text-description-l-medium py-1 px-1.5 rounded-xs"
                size={"l"}
              >
                APY: {stake.current_milestone.percentage}%
              </Badge>
            </div>

            <div className="p-4 rounded-lg bg-dark">
              <div className="flex justify-between mb-3">
                {poolInfo &&
                  poolInfo?.activeTier.apys.map((apy, index) => (
                    <div
                      key={index}
                      className={`w-10 ${
                        stake.current_milestone.percentage === apy
                          ? "text-foreground-weak"
                          : "text-foreground-weakest"
                      } text-description-l-strong ${
                        index > 0 ? "text-center" : ""
                      } ${index === 3 ? "text-right" : ""}`}
                    >
                      {apy}%
                    </div>
                  ))}
              </div>

              <Image
                src={"/dots-line.svg"}
                alt=""
                height={1}
                width={336}
                className="w-full"
              />
              <Progress
                className="my-3 bg-weak [&_div]:bg-accent-default [&_div]:rounded-lg"
                value={stake.current_milestone.percent_complete}
              />
              <div className="flex justify-between mb-4">
                {poolInfo &&
                  poolInfo?.formattedDurations.map((duration, index) => (
                    <div
                      key={index}
                      className={`w-11 ${
                        stake.current_milestone.percentage ===
                        poolInfo.activeTier.apys[index]
                          ? "text-foreground-weak"
                          : "text-foreground-weakest"
                      } text-description-s-medium  ${
                        index > 0 ? "text-center" : ""
                      } ${index === 3 ? "text-right" : ""}`}
                    >
                      {duration}
                    </div>
                  ))}
              </div>

              <div className="flex items-center bg-alert-background-neutral border border-secondary rounded-md px-4 py-3 gap-3">
                <LucideInfo
                  height={16}
                  width={16}
                  className="ext-alert-text-neutral shrink-0"
                />

                <div className="text-description-l-strong text-alert-text-neutral">
                  {poolInfo &&
                    poolInfo?.activeTier.apys &&
                    (stake.current_milestone.percentage ===
                    poolInfo.activeTier.apys[
                      poolInfo.activeTier.apys.length - 1
                    ]
                      ? "Congrats! You have unlocked all APYs"
                      : `You're ${stake.next_milestone.days_to_unlock} days away from unlocking ${stake.next_milestone.percentage}% APY`)}
                </div>
              </div>
            </div>
          </div>
        ))}
      {!showUnstake && stakingHistory && stakingHistory.length > 1 && (
        <label className="flex gap-3 items-center text-foreground-weak text-body-m-medium">
          <Checkbox
            onCheckedChange={handleSelectAll}
            checked={
              stakingHistory
                ? selectedStakes.length === stakingHistory.length
                : false
            }
            className="h-5 w-5 border border-foreground-inverse bg-darks data-[state=checked]:bg-accent-default data-[state=checked]:border-accent-default dark:data-[state=checked]:bg-accent-default dark:data-[state=checked]:border-accent-default"
          />
          Select all stakes
        </label>
      )}
    </>
  );
};
export default Pool;
