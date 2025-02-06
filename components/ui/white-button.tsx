import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2x whitespace-nowrap rounded-Button-xl ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "border-s bg-button-white-default hover:bg-button-white-hover disabled:bg-button-white-disabled text-button-white-default hover:text-button-white-hover disabled:text-button-white-disabled",
        outline:
          "border-s border-button-outline-white-default disabled:bg-button-outline-white-disabled text-button-outline-white-default hover:border-button-outline-white-hover text-button-outline-white-default hover:text-button-outline-white-hover disabled:text-button-outline-white-disabled bg-button-outline-white-default hover:bg-button-outline-white-hover",
        link: "text-button-link-white-default hover:text-button-link-white-hover disabled:text-button-link-white-disabled",
      },
      size: {
        xl: "text-body-m-strong px-4x py-3x",
        l: "text-body-m-strong px-4x py-2x",
        m: "text-body-s-strong px-3x py-1.5x",
        s: "text-body-s-strong py-1x px-2x",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "xl",
    },
  }
);

const iconSizeMap: Record<string, string> = {
    xl: 'h-[20px] w-[20px]',
    l: 'h-[20px] w-[20px]',
    m: 'h-[16px] w-[16px]',
    s: 'h-[16px] w-[16px]',
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  IconLeft?: React.JSXElementConstructor<{className?: string}>;
  IconRight?: React.JSXElementConstructor<{className?: string}>;
  is_loading?: boolean;
  size?: "xl" | "l" | "m" | "s";
  variant?: "primary" | "outline" | "link";
  disabled?: boolean;
}

const WhiteButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'xl', asChild = false, IconLeft, IconRight, disabled = false, is_loading, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    const iconSizeClass = iconSizeMap[size] || 'h-5x';

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className })) + `${variant === 'link' ? ' px-none py-none' : ''}`}
        ref={ref}
        {...props}
        disabled={disabled}
      >
        {is_loading ? (
          <div>
            <LoaderCircle className={`animate-spin ${iconSizeClass}`} />
          </div>
        ) : (
          <>
            {IconLeft && <IconLeft className={`${iconSizeClass}`} />}
            {children}
            {IconRight && <IconRight className={`${iconSizeClass}`} />}
          </>
        )}
      </Comp>
    );
  }
);
WhiteButton.displayName = "WhiteButton";

export { WhiteButton, buttonVariants };