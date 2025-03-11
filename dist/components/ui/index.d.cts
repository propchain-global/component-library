import * as React$1 from 'react';
import React__default from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import * as recharts_types_util_payload_getUniqPayload from 'recharts/types/util/payload/getUniqPayload';
import * as recharts_types_component_Tooltip from 'recharts/types/component/Tooltip';
import * as recharts_types_util_types from 'recharts/types/util/types';
import * as recharts_types_component_DefaultTooltipContent from 'recharts/types/component/DefaultTooltipContent';
import * as RechartsPrimitive from 'recharts';

declare const Accordion: React$1.ForwardRefExoticComponent<(AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) & React$1.RefAttributes<HTMLDivElement>>;
declare const AccordionItem: React$1.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const AccordionTrigger: React$1.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const AccordionContent: React$1.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const Alert: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    variant?: "default" | "destructive" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & React$1.RefAttributes<HTMLDivElement>>;
declare const AlertTitle: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLHeadingElement> & React$1.RefAttributes<HTMLParagraphElement>>;
declare const AlertDescription: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLParagraphElement> & React$1.RefAttributes<HTMLParagraphElement>>;

type AreaChartComponentProps = {
    data?: object[];
    xkey?: string | number;
    ykey?: string | number;
};
declare function AreaChartComponent({ data, xkey, ykey, }: AreaChartComponentProps): React$1.JSX.Element;

interface AvatarProps extends React.HTMLAttributes<HTMLImageElement> {
    src?: string;
    alt: string;
    size: 16 | 24 | 32 | 40 | 64;
}
declare const Avatar: ({ src, alt, size, className, ...props }: AvatarProps) => React$1.JSX.Element;

interface BannerProps extends React$1.ComponentProps<"div"> {
}
declare const Banner: React$1.ForwardRefExoticComponent<Omit<BannerProps, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const badgeVariants: (props?: ({
    variant?: "primary-info" | "primary-warning" | "primary-success" | "primary-error" | "primary-neutral" | "secondary-info" | "secondary-warning" | "secondary-success" | "secondary-error" | "secondary-neutral" | null | undefined;
    size?: "s" | "l" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface BadgeProps extends React$1.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}
declare function Badge({ className, variant, size, ...props }: BadgeProps): React$1.JSX.Element;

declare const buttonVariants$1: (props?: ({
    variant?: "link" | "alert" | "default" | "primary" | "outline" | null | undefined;
    size?: "m" | "s" | "l" | "xl" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants$1> {
    asChild?: boolean;
    IconLeft?: React$1.JSXElementConstructor<{
        className?: string;
    }>;
    IconRight?: React$1.JSXElementConstructor<{
        className?: string;
    }>;
    is_loading?: boolean;
    size?: "xl" | "l" | "m" | "s";
    variant?: "primary" | "alert" | "outline" | "link";
    disabled?: boolean;
}
declare const Button: React$1.ForwardRefExoticComponent<ButtonProps & React$1.RefAttributes<HTMLButtonElement>>;

interface CurrencyFieldProps extends React$1.ComponentProps<"input"> {
    error?: boolean;
    label?: string;
    balance?: number;
    token?: string;
}
declare const CurrencyField: React$1.ForwardRefExoticComponent<Omit<CurrencyFieldProps, "ref"> & React$1.RefAttributes<HTMLInputElement>>;

declare const THEMES: {
    readonly light: "";
    readonly dark: ".dark";
};
type ChartConfig = {
    [k in string]: {
        label?: React$1.ReactNode;
        icon?: React$1.ComponentType;
    } & ({
        color?: string;
        theme?: never;
    } | {
        color?: never;
        theme: Record<keyof typeof THEMES, string>;
    });
};
declare const ChartContainer: React$1.ForwardRefExoticComponent<Omit<React$1.ClassAttributes<HTMLDivElement> & React$1.HTMLAttributes<HTMLDivElement> & {
    config: ChartConfig;
    children: React$1.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
}, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ChartStyle: ({ id, config }: {
    id: string;
    config: ChartConfig;
}) => React$1.JSX.Element | null;
declare const ChartTooltip: typeof RechartsPrimitive.Tooltip;
declare const ChartTooltipContent: React$1.ForwardRefExoticComponent<Omit<RechartsPrimitive.DefaultTooltipContentProps<recharts_types_component_DefaultTooltipContent.ValueType, recharts_types_component_DefaultTooltipContent.NameType> & {
    accessibilityLayer?: boolean;
    active?: boolean | undefined;
    includeHidden?: boolean | undefined;
    allowEscapeViewBox?: recharts_types_util_types.AllowInDimension;
    animationDuration?: recharts_types_util_types.AnimationDuration;
    animationEasing?: recharts_types_util_types.AnimationTiming;
    content?: recharts_types_component_Tooltip.ContentType<recharts_types_component_DefaultTooltipContent.ValueType, recharts_types_component_DefaultTooltipContent.NameType> | undefined;
    coordinate?: Partial<recharts_types_util_types.Coordinate>;
    cursor?: boolean | React$1.ReactElement | React$1.SVGProps<SVGElement>;
    filterNull?: boolean;
    defaultIndex?: number;
    isAnimationActive?: boolean;
    offset?: number;
    payloadUniqBy?: recharts_types_util_payload_getUniqPayload.UniqueOption<recharts_types_component_DefaultTooltipContent.Payload<recharts_types_component_DefaultTooltipContent.ValueType, recharts_types_component_DefaultTooltipContent.NameType>> | undefined;
    position?: Partial<recharts_types_util_types.Coordinate>;
    reverseDirection?: recharts_types_util_types.AllowInDimension;
    shared?: boolean;
    trigger?: "hover" | "click";
    useTranslate3d?: boolean;
    viewBox?: recharts_types_util_types.CartesianViewBox;
    wrapperStyle?: React$1.CSSProperties;
} & React$1.ClassAttributes<HTMLDivElement> & React$1.HTMLAttributes<HTMLDivElement> & {
    hideLabel?: boolean;
    hideIndicator?: boolean;
    indicator?: "line" | "dot" | "dashed";
    nameKey?: string;
    labelKey?: string;
    change24Key?: string;
    timestampKey?: string;
}, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ChartLegend: typeof RechartsPrimitive.Legend;
declare const ChartLegendContent: React$1.ForwardRefExoticComponent<Omit<React$1.ClassAttributes<HTMLDivElement> & React$1.HTMLAttributes<HTMLDivElement> & Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
    hideIcon?: boolean;
    nameKey?: string;
}, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const Input: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & React$1.RefAttributes<HTMLInputElement>>;

interface PriceChartProps {
    token: string;
    activeTab: 'M' | 'W' | 'D' | 'Y';
    price: number;
    low24: number;
    high24: number;
    change24: number;
    totalSupply: number;
    volume: number;
    marketCap: number;
    circulatingSupply: number;
    chartData?: [number, number][];
    xkey?: string | number;
    ykey?: string | number;
}
declare const PriceChart: ({ token, activeTab, price, low24, high24, change24, totalSupply, volume, marketCap, circulatingSupply, chartData, xkey, ykey }: PriceChartProps) => React__default.JSX.Element;

interface InsufficientStakingBannerProps extends React$1.ComponentProps<"div"> {
}
declare const InsufficientStakingBanner: React$1.ForwardRefExoticComponent<Omit<InsufficientStakingBannerProps, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const variantsObject: (props?: ({
    state?: "default" | "active" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface NavigationBarProps extends VariantProps<typeof variantsObject>, React__default.HTMLAttributes<HTMLDivElement> {
    Icon?: React__default.JSXElementConstructor<{
        className?: string;
    }>;
    title?: string;
}
declare const NavigationBar: ({ Icon, title, state, ...props }: NavigationBarProps) => React__default.JSX.Element;

interface ModalHeaderProps extends React__default.HTMLAttributes<HTMLDivElement> {
    title: string;
    type: 'icon+title' | 'title+supporting' | 'centered';
    supportingText?: string;
    showCloseButton?: boolean;
}
declare const ModalHeader: ({ title, type, supportingText, showCloseButton, ...props }: ModalHeaderProps) => React__default.JSX.Element;

interface newsDataProps {
    title: string;
    description: string;
    externalLink: string;
    thumbnail: string;
}
interface NewsAndUpdateCarouselProps extends React$1.ComponentProps<"div"> {
    newsData: newsDataProps[];
}
declare const NewsAndUpdateCarousel: React$1.ForwardRefExoticComponent<Omit<NewsAndUpdateCarouselProps, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

interface poolProps$1 {
    name: string;
    apy: string;
    lock: string;
    tvl: number;
    stakedWelf: number;
}
interface poolCardProps extends React$1.ComponentProps<"div"> {
    pool: poolProps$1;
    index: number;
}
declare const PoolCard: React$1.ForwardRefExoticComponent<Omit<poolCardProps, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const containerVariant$1: (props?: ({
    size?: "l" | "xl" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface PortfolioInformationWrapperProps extends React$1.ComponentProps<"div">, VariantProps<typeof containerVariant$1> {
    welfTokenAmount: number;
}
declare const PortfolioInformationWrapper: React$1.ForwardRefExoticComponent<Omit<PortfolioInformationWrapperProps, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

interface PriceBadgeProps {
    price?: string;
    percentChange?: string;
}
declare const PriceBadge: ({ price, percentChange }: PriceBadgeProps) => React__default.JSX.Element;

interface poolProps {
    name: string;
    apy: string;
    lock: string;
    tvl: number;
    stakedWelf: number;
}
interface claimRewardProps {
    lockedWelf: number;
    stakingReward: number;
    nextclaim: string;
    vestingToClaim: number;
}
interface StakeUnstackCardProps extends React$1.ComponentProps<"div"> {
    stakePools?: poolProps[];
    unstakePools?: poolProps[];
    claimReward?: claimRewardProps;
}
declare const StakeUnstackCard: React$1.ForwardRefExoticComponent<Omit<StakeUnstackCardProps, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

interface stakingProps {
    stakedWelf: number;
    welfAmountInUSD: number;
    growthPercentage: number;
    stakingRewardWelf: number;
    rewardGrowthPercentage: number;
    stakingRewardUSD: number;
    vestingToClaimWelf: number;
    vestingClaimUSD: number;
    vestingGrowthPercentage: number;
}
interface StakingCardProps extends React$1.ComponentProps<"div"> {
    stakingDetails: stakingProps;
}
declare const StakingCard: React$1.ForwardRefExoticComponent<Omit<StakingCardProps, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

interface SubheaderProps {
    marketInfo: {
        title: string;
        price: string;
        percentChange?: string;
    }[];
}
declare const Subheader: ({ marketInfo }: SubheaderProps) => React__default.JSX.Element;

interface TabProps extends React__default.HTMLAttributes<HTMLDivElement> {
    isActive: boolean;
}
declare const Tab: ({ isActive, className, children, ...props }: TabProps) => React__default.JSX.Element;

interface UnstakingProps {
    stakedDate: string;
    stakedWelf: number;
}
interface UntakingCardProps extends React$1.ComponentProps<"div"> {
    unstakingDetails: UnstakingProps;
}
declare const UnstakingCard: React$1.ForwardRefExoticComponent<Omit<UntakingCardProps, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const containerVariant: (props?: ({
    size?: "l" | "xl" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface WalletConnectedProps extends React$1.ComponentProps<"div">, VariantProps<typeof containerVariant> {
    provider?: string;
    address?: string;
    showWalletInfo?: boolean;
}
declare const WalletConnected: React$1.ForwardRefExoticComponent<Omit<WalletConnectedProps, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

type WalletConnectTabProps = {
    type: "default" | "connected" | "recent" | "failed" | 'detected';
    walletName: string;
    walletSrc: string;
};
declare const WalletConnectTab: ({ type, walletName }: WalletConnectTabProps) => React__default.JSX.Element;

declare const buttonVariants: (props?: ({
    variant?: "link" | "primary" | "outline" | null | undefined;
    size?: "m" | "s" | "l" | "xl" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface WhiteButtonProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    IconLeft?: React$1.JSXElementConstructor<{
        className?: string;
    }>;
    IconRight?: React$1.JSXElementConstructor<{
        className?: string;
    }>;
    is_loading?: boolean;
    size?: "xl" | "l" | "m" | "s";
    variant?: "primary" | "outline" | "link";
    disabled?: boolean;
}
declare const WhiteButton: React$1.ForwardRefExoticComponent<WhiteButtonProps & React$1.RefAttributes<HTMLButtonElement>>;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Alert, AlertDescription, AlertTitle, AreaChartComponent, Avatar, type AvatarProps, Badge, type BadgeProps, Banner, Button, type ButtonProps, type ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartStyle, ChartTooltip, ChartTooltipContent, CurrencyField, Input, InsufficientStakingBanner, ModalHeader, NavigationBar, NewsAndUpdateCarousel, PoolCard, PortfolioInformationWrapper, PriceBadge, PriceChart, StakeUnstackCard, StakingCard, Subheader, Tab, UnstakingCard, WalletConnectTab, WalletConnected, WhiteButton, type WhiteButtonProps, badgeVariants, buttonVariants$1 as buttonVariants, buttonVariants as whiteButtonVariants };
