"use client";
import { formatInputNumber } from "@/utils/formatInputWithComma";
import { formatInputWithComma } from "@/utils/formatInputWithComma";
import React from "react";
import { CurrencyField } from "../currency-field";
import { useStakeStore } from "@/store/stake";
const StakeInput = ({usdBalance}: {usdBalance: string}) => {
  const { stakeAmount, setStakeAmount } = useStakeStore();
  return (
    <CurrencyField
      label="I’m staking"
      balance={Number(usdBalance)}
      value={formatInputWithComma(stakeAmount)}
      type="text"
      showChip={true}
      error={(Number(stakeAmount)) > Number(usdBalance)}
      errorMsg={(Number(stakeAmount)) > Number(usdBalance) ? "Your balance is insufficient to continue staking. Please buy some $WELF token." : ""}
      handleInputChange={(amount) => setStakeAmount(formatInputNumber(amount))}
    />
  );
};

export default StakeInput;
