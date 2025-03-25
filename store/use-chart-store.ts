import { create } from 'zustand'

type ChartTab = 'M' | 'W' | 'D' | 'Y'

interface ChartStore {
  activeTab: ChartTab
  setActiveTab: (tab: ChartTab) => void
  userBalance: string
  setUserBalance: (balance: string) => void
}

export const useChartStore = create<ChartStore>((set) => ({
  activeTab: 'D',
  setActiveTab: (tab) => set({ activeTab: tab }),
  userBalance: "$0.00",
  setUserBalance: (balance) => set({ userBalance: balance }),
})) 