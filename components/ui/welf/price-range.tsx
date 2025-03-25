"use client";

import { MarketChart } from "@/types/portfolio";
import { useChartStore } from "@/store/use-chart-store";

const getFilter = (timeframe: "D" | "W" | "M" | "Y") => {
  return timeframe === "D"
    ? "1"
    : timeframe === "W"
    ? "7"
    : timeframe === "M"
    ? "30"
    : "365";
};

const getHighLowPrices = (data: MarketChart | undefined) => {
  if (!data?.prices || data.prices.length === 0) return { high: 0, low: 0 };
  
  const prices = data.prices.map((point: [number, number]) => point[1]);
  return {
    high: Math.max(...prices),
    low: Math.min(...prices)
  };
};

interface PriceRangeProps {
  marketCharts: {
    [key: string]: MarketChart;
  } | undefined;
}

export const PriceRange = ({ marketCharts }: PriceRangeProps) => {
  const { activeTab } = useChartStore();
  const { high, low } = getHighLowPrices(marketCharts?.[getFilter(activeTab)]);

  return (
    <div className="flex gap-4x items-center justify-end py-1x">
      <div className="flex items-center gap-1x">
        <p className="text-body-m-medium text-weakest">L: </p>
        <p className="text-body-m-medium text-weak">
          ${low.toFixed(2)}
        </p>
      </div>
      <div className="flex items-center gap-1x">
        <p className="text-body-m-medium text-weakest">H: </p>
        <p className="text-body-m-medium text-weak">
          ${high.toFixed(2)}
        </p>
      </div>
    </div>
  );
}; 