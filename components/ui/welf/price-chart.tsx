import React, { ReactNode } from "react";

import { Badge } from "../badge";
import {
  LucideArrowDownLeft,
  LucideArrowUpRight,
  LucideCloudDrizzle,
  LucideFlame,
  LucideGalleryVerticalEnd,
  LucideIterationCcw,
  LucideUsersRound,
} from "lucide-react";
import { AreaChartComponent } from "./area-chart";

import ChartTab from "./charttab";
import Image from "next/image";
import { PriceDataResponse } from "@/types/portfolio";
import { PriceRange } from "./price-range";

interface DetailsCardProps {
  title: string;
  value: string;
  icon: ReactNode;
}
const DetailsCard = ({ title, value, icon }: DetailsCardProps) => {
  return (
    <div className="p-4 rounded-md bg-surface-gradient">
      <div className="flex items-center gap-1 text-foreground-weaker">
        {icon}

        <div className="text-description-l-medium">{title}</div>
      </div>

      <div className="mt-2 text-body-m-strong text-foreground-weak">
        {value}
      </div>
    </div>
  );
};

export const PriceChart = ({ ...priceData }: PriceDataResponse) => {
  return (
    <div className="bg-weaker rounded-xl border border-default">
      {/* chart section */}
      <div className="flex flex-col gap-8x p-4x md:gap-12x md:p-6x rounded-xl">
        <div className="grid grid-cols-2 gap-2">
          <p className="flex items-center text-body-m-medium text-weakest">
            WELF Price
          </p>
          {/* control section */}
          <div className="grid grid-cols-4 md:grid-cols-[auto_auto_auto_auto] gap-2 justify-end order-4 md:order-none col-span-full md:col-span-1 pt-2 md:pt-0">
            <ChartTab />
          </div>
          {/* control section end */}

          {/* price section */}
          <div className="flex gap-3x items-center order-3 md:order-none col-span-full md:col-span-1">
            <p className="font text-number-s text-weak">
              ${priceData?.market_data?.welf?.current_price_usd}
            </p>
            <div className="py-2x flex flex-col justify-end">
              <Badge
                size="s"
                variant={
                  priceData?.market_data?.welf?.change_percentage_24h > 0
                    ? "secondary-info"
                    : "secondary-error"
                }
              >
                {priceData?.market_data?.welf?.change_percentage_24h > 0 ? (
                  <LucideArrowUpRight className="w-3x h-3x" />
                ) : (
                  <LucideArrowDownLeft className="w-3x h-3x" />
                )}
                {priceData?.market_data?.welf?.change_percentage_24h.toFixed(2)}
                % (1d)
              </Badge>
            </div>
          </div>

          <PriceRange marketCharts={priceData?.market_charts} />

          {/* price section end */}
        </div>

        <AreaChartComponent data={priceData?.market_charts}  />
      </div>
      {/* chart section end */}

      <div className="grid grid-cols-2 md:grid-cols-4 p-5 md:p-6 border-t border-default gap-2">
        <div className="flex flex-col gap-2">
          <DetailsCard
            title="Maximum Supply"
            value={priceData?.maxSupplyUsd}
            icon={<LucideGalleryVerticalEnd size={12} />}
          />
          <DetailsCard
            title="Circulating Supply"
            value={priceData?.circulatingSupply}
            icon={<LucideIterationCcw size={12} />}
          />
        </div>
        <div className="flex flex-col gap-2">
          <DetailsCard
            title="Total Token Supply"
            value={priceData?.totalSupplyUsd}
            icon={<LucideCloudDrizzle size={12} />}
          />
          <DetailsCard
            title="Burned Token"
            value={priceData?.burned_tokens}
            icon={<LucideFlame size={12} />}
          />
        </div>

        <div className="relative p-4 rounded-md bg-surface-gradient overflow-hidden h-[168px]">
          <div className="flex items-center gap-1 text-foreground-weaker">
            <LucideUsersRound size={12} />

            <div className="text-description-l-medium">Total Token Holders</div>
          </div>

          <div className="mt-2 text-body-m-strong text-foreground-weak">
            {priceData?.tokenHolders}
          </div>

          <Image
            src="/card-chart.svg"
            alt=""
            height={89}
            width={212}
            className="absolute w-full h-auto bottom-0 left-0"
          />
        </div>

        <div className="relative p-4 rounded-md bg-surface-gradient overflow-hidden h-[168px]">
          <div className="flex items-center gap-1 text-foreground-weaker">
            <Image src="/stake-2.svg" alt="" height={12} width={12} />

            <div className="text-description-l-medium">WELF Stacked</div>
          </div>

          <div className="mt-2 text-body-m-strong text-foreground-weak">
            {priceData?.totalStaked}
          </div>

          <Image
            src="/welf-token-big.svg"
            alt=""
            height={120}
            width={126}
            className="absolute bottom-0 right-0"
          />
        </div>
      </div>
    </div>
  );
};
