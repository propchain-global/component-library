import React from 'react';
import { Badge } from '@/components/ui/badge';
import {
    LucideArrowUpRight,
    LucideCloudDrizzle,
    LucideFlame,
    LucideGalleryVerticalEnd,
    LucideIterationCcw,
    LucideLayers3,
    LucideMinus,
    LucideUserRound,
    LucideUsersRound,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { AreaChartComponent } from '@/components/ui/propchain/area-chart';
const tabs = ['Day', 'Week', 'Month', 'Year'] as const;
type Tab = (typeof tabs)[number];
export interface PriceChartProps {
    price: number;
    low: number;
    high: number;
    change: number;
    activeTab?: Tab;
    chartData?: [number, number][];
    xkey?: string | number;
    ykey?: string | number;
    maxSupply?: number;
    circulatingSupply?: number;
    burnedToken?: number;
    totalSupply?: number;
    totalHolders?: number;
    PROPCStaked?: number;
}

const ChartTab = ({
    isActive,
    children,
}: {
    isActive: boolean;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                'w-full  flex gap-[10px] justify-center items-center px-3x py-1.5x rounded-full text-description-l text-chart-default bg-chart-background ',
                isActive
                    ? 'text-accent-default bg-chart-tab-background shadow-level-1'
                    : 'backdrop-blur-sm text-chart-default'
            )}
        >
            {children}
        </div>
    );
};

export const PriceChart = ({
    price,
    low,
    high,
    change,
    activeTab,
    chartData,
    xkey,
    ykey,
    maxSupply = 100000000,
    circulatingSupply = 100000000,
    burnedToken = 0,
    totalSupply = 100000000,
    totalHolders = 0,
    PROPCStaked = 0,
}: PriceChartProps) => {
    return (
        <div className="flex flex-col p-6x md:p-8x gap-4x rounded-xl bg-chart-background">
            <div className="flex flex-col md:flex-row md:justify-between gap-1.5x">
                <div className="flex gap-6x items-center">
                    <div className="flex gap-1.5x items-center">
                        <h2 className="text-heading-h2 text-chart-default">
                            {price.toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD',
                                notation: 'compact',
                            })}
                        </h2>
                        <Badge variant="secondary-success" size="l">
                            {' '}
                            {change}%{' '}
                            <LucideArrowUpRight className="w-3x h-3x" />
                        </Badge>
                    </div>

                    <div className="flex gap-[10px] py-[9px] px-3x rounded-full bg-chart-background items-center">
                        <p className="text-description-s-medium text-chart-default">
                            Lowest -{' '}
                            {low.toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD',
                            })}
                        </p>
                        <LucideMinus className="w-3x h-3x text-chart-default" />
                        <p className="text-description-s-medium text-chart-default">
                            Highest -{' '}
                            {high.toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD',
                            })}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2x">
                    {tabs.map((tab) => (
                        <ChartTab key={tab} isActive={activeTab === tab}>
                            {tab}
                        </ChartTab>
                    ))}
                </div>
            </div>

            <AreaChartComponent  />
            <div className="flex flex-col md:flex-row gap-2x ">
                <div className="grid grid-cols-2 gap-2x w-full">
                    <div className="flex w-full flex-col justify-center p-4x gap-2x rounded-m bg-chart-background backdrop-blur-[10px]">
                        <div className="flex items-center  gap-1x">
                            <LucideGalleryVerticalEnd className="w-3x h-3x text-chart-default" />
                            <p className="text-description-l-medium text-chart-default">
                                Maximum Supply
                            </p>
                        </div>
                        <p className="text-heading-h3 text-chart-default">
                            {maxSupply.toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD',
                                notation: 'compact',
                            })}
                        </p>
                    </div>
                    <div className="flex w-full flex-col justify-center p-4x gap-2x rounded-m bg-chart-background backdrop-blur-[10px]">
                        <div className="flex items-center  gap-1x">
                            <LucideCloudDrizzle className="w-3x h-3x text-chart-default" />
                            <p className="text-description-l-medium text-chart-default">
                                Total Token Supply
                            </p>
                        </div>
                        <p className="text-heading-h3 text-chart-default">
                            {totalSupply.toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD',
                                notation: 'compact',
                            })}
                        </p>
                    </div>
                    <div className="flex w-full flex-col justify-center p-4x gap-2x rounded-m bg-chart-background backdrop-blur-[10px]">
                        <div className="flex items-center  gap-1x">
                            <LucideIterationCcw className="w-3x h-3x text-chart-default" />
                            <p className="text-description-l-medium text-chart-default">
                                Circulating Supply
                            </p>
                        </div>
                        <p className="text-heading-h3 text-chart-default">
                            {circulatingSupply.toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD',
                                notation: 'compact',
                            })}
                        </p>
                    </div>
                    <div className="flex w-full flex-col justify-center p-4x gap-2x rounded-m bg-chart-background backdrop-blur-[10px]">
                        <div className="flex items-center  gap-1x">
                            <LucideFlame className="w-3x h-3x text-chart-default" />
                            <p className="text-description-l-medium text-chart-default">
                                Burned Token
                            </p>
                        </div>
                        <p className="text-heading-h3 text-chart-default">
                            {burnedToken.toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD',
                                notation: 'compact',
                            })}
                        </p>
                    </div>
                </div>
                <div className="flex gap-2x w-full">
                    <div className="flex flex-col py-[18px] px-[24px] rounded-m bg-chart-background backdrop-blur-2 justify-between overflow-hidden w-full relative min-h-[151px]">
                        <div className="flex flex-col gap-1.5x ">
                            <div className="flex items-center gap-1x">
                                <LucideUsersRound className="w-3x h-3x text-chart-default" />
                                <p className="text-description-l-medium text-chart-default">
                                    Total Holders
                                </p>
                            </div>
                            <p className="text-heading-h3 text-chart-default">
                                {totalHolders.toLocaleString('en-US')}+
                            </p>
                        </div>

                        <Image
                            src="/propchain/total-token-chart.png"
                            alt="propchain-chart"
                            className="w-full  object-cover absolute bottom-0 right-0 left-0"
                            width={100}
                            height={182}
                        />
                    </div>
                    <div className="flex flex-col py-[18px] px-[24px] rounded-m bg-chart-background backdrop-blur-2 justify-between overflow-hidden w-full relative min-h-[151px]">
                        <div className="flex flex-col gap-1.5x ">
                            <div className="flex items-center gap-1x">
                                <LucideLayers3 className="w-3x h-3x text-chart-default" />
                                <p className="text-description-l-medium text-chart-default">
                                    PROPC Staked
                                </p>
                            </div>
                            <p className="text-heading-h3 text-chart-default">
                                {PROPCStaked.toLocaleString('en-US')}+
                            </p>
                        </div>

                        <Image
                            src="/propchain/chart-token-staked.png"
                            alt="propchain-chart"
                            className="w-[60%]  object-cover absolute bottom-0 right-0"
                            width={150}
                            height={80}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
