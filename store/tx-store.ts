import { create } from "zustand";

export const useTxStore = create<{
  hash: { txHash: `0x${string}`; poolId: number } | null;
  setHash: (hash: { txHash: `0x${string}`; poolId: number } | null) => void;
}>((set) => ({
  hash: null,
  setHash: (hash) => set({ hash }),
}));
