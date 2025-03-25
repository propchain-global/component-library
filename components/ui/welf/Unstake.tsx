"use client";
import React from "react";
import UnstakeAction from "./unstake-action";
import CooldownPeriodNotice from "./CooldownPeriodNotice";
import { Button } from "../button";
import UnstakeSelected from "./UnstakeSelected";
import { useStakeStore } from "@/store/stake";
const Unstake = ({ singleStake }: { singleStake: boolean | undefined }) => {
  const { showUnstake, setShowUnstake, selectedStakes } = useStakeStore();
  return (
    <>
      {!showUnstake && singleStake && (
        <Button
          disabled={selectedStakes.length === 0}
          onClick={() => setShowUnstake(true)}
        >
          Continue to unstake
        </Button>
      )}

      {!singleStake && selectedStakes.length > 0 && (
        <UnstakeAction />
      )}
      {showUnstake && (
        <>
          <UnstakeSelected />

          <CooldownPeriodNotice
            variant="text"
            progress={20}
            releaseDate="1 Day"
          />
          {<UnstakeAction />}

          <Button onClick={() => setShowUnstake(false)} variant="outline">
            Back
          </Button>
        </>
      )}
    </>
  );
};

export default Unstake;
