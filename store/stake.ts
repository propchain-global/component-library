import { SelectedStake } from "@/types/stake";
import { create } from "zustand";

export const useStakeStore = create<{
  stakeAmount: string;
  setStakeAmount: (amount: string) => void;
  selectedStakes: SelectedStake[];
  setSelectedStakes: (stakes: SelectedStake[]) => void;
  showUnstake: boolean; 
  setShowUnstake: (show: boolean) => void;
  isStaking: {
    loading: boolean;
    status: string;
  };
  setIsStaking: (state: { loading: boolean; status: string }) => void;
}>((set) => ({
  stakeAmount: "",
  setStakeAmount: (amount) => set({ stakeAmount: amount }),
  selectedStakes: [],
  setSelectedStakes: (stakes) => set({ selectedStakes: stakes }),
  showUnstake: false,
  setShowUnstake: (show) => set({ showUnstake: show }),
  isStaking: {
    loading: false,
    status: "idle"
  },
  setIsStaking: (state) => set({ isStaking: state }),
}));
