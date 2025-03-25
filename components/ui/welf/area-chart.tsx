"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { format } from "date-fns";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../chart";
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

const chartConfig = {
  desktop: {
    label: "Desktop",
    color:
      "linear-gradient(180deg, rgba(89, 214, 124, 0.25) -29%, rgba(89, 214, 124, 0.00) 99.93%)",
  },
} satisfies ChartConfig;
type AreaChartComponentProps = {
  xkey?: string | number;
  ykey?: string | number;
  data?:
    | {
        [key: string]: MarketChart;
      }
    | undefined;
};
// ISSUE 4: UI is different from the design
// ISSUE 5: Y-AXIS WAS MISSING  
export function AreaChartComponent({
  data,
  xkey = "0",
  ykey = 1,
}: AreaChartComponentProps) {
  const { activeTab } = useChartStore();
 
  return (
    <ChartContainer
      config={chartConfig}
      className="-mx-[28px] md:-mx-[36px] px-0 h-auto md:h-[260px]"
    >
      <AreaChart
        accessibilityLayer
        data={data?.[getFilter(activeTab)]?.prices ?? []}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <defs>
          <linearGradient
            id="paint0_linear_69_35489"
            x1="583.011"
            y1="-65.5793"
            x2="583.011"
            y2="229.84"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#59D67C" stopOpacity="0.25" />
            <stop offset="1" stopColor="#59D67C" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* <CartesianGrid vertical={false} /> */}
        <XAxis
          dataKey={xkey}
          tickLine={false}
          axisLine={false}
          // type="number"
          domain={["dataMin", "auto"]}
          tickMargin={8}
          interval={Math.ceil(
            data ? data?.[getFilter(activeTab)]?.prices?.length / 6 : 0
          )}
          tickCount={6}
          tickFormatter={
            data && data?.[getFilter(activeTab)]?.prices.length > 0
              ? (value, i) => {
                  return i == 0 ||
                    i == (data ? data?.[getFilter(activeTab)]?.prices?.length : 0) - 1
                    ? ""
                    : value 
                      ? activeTab === "D" 
                        ? format(value, "HH:mm")
                        : format(value, "dd MMM")?.toUpperCase()
                      : "";
                }
              : undefined
          }
          tick={{
            fontSize: 12,
            fontWeight: "500",
            fontFamily : 'font-family/description',
            fill: "var(--foreground-weak)",
          }}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />
        <Area
          dataKey={ykey}
          type="natural"
          fill="url(#paint0_linear_69_35489)"
          fillOpacity={0.4}
          stroke="var(--accent-strong)"
        />
        <CartesianGrid vertical={false} stroke="#214641" strokeOpacity={0.5} />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickMargin={8}
          tickFormatter={(value) => `$${value.toLocaleString()}`}
          tick={{
            fontSize: 12,
            fontWeight: "500",
            fontFamily : 'font-family/description',
            fill: "var(--foreground-weak)",
          }}
        />
      </AreaChart>
    </ChartContainer>
  );
}
