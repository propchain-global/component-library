import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2x whitespace-nowrap rounded-Button-xl ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-button-accent-default hover:bg-button-accent-hover disabled:bg-button-accent-disabled text-button-accent-default hover:text-button-accent-hover disabled:text-button-accent-disabled",
        secondary: "bg-button-secondary-default hover:bg-button-secondary-hover disabled:bg-button-secondary-disabled text-button-secondary-default hover:text-button-secondary-hover disabled:text-button-secondary-disabled border-button-secondary-default hover:border-button-secondary-hover disabled:border-button-secondary-disabled",
        default: "bg-button-accent-default hover:bg-button-accent-hover disabled:bg-button-accent-disabled text-button-accent-default hover:text-button-accent-hover disabled:text-button-accent-disabled",
        alert:
          "bg-button-tertiary-alert-default hover:bg-button-tertiary-alert-hover disabled:bg-button-tertiary-alert-disabled text-button-tertiary-alert-default hover:text-button-tertiary-alert-hover disabled:text-button-tertiary-alert-disabled",
        outline:
          "border border-button-outline-neutral-default hover:border-button-outline-neutral-hover disabled:bg-button-outline-neutral-disabled text-button-outline-neutral-default text-button-outline-neutral-default hover:text-button-outline-neutral-hover disabled:text-button-outline-neutral-disabled bg-button-outline-neutral-default hover:bg-button-outline-neutral-hover",
        link: "text-button-link-neutral-default hover:text-button-link-neutral-hover disabled:text-button-link-neutral-disabled",
        tertiary: "bg-button-tertiary-accent-default hover:bg-button-tertiary-accent-hover disabled:bg-button-tertiary-accent-disabled text-button-tertiary-accent-default hover:text-button-tertiary-accent-hover disabled:text-button-tertiary-accent-disabled",
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
    compoundVariants: [
      {
        variant: "secondary",
        size: "xl",
        className: "border-button-xl",
      },
      {
        variant: "secondary",
        size: "l",
        className: "border-button-l",
      },
      {
        variant: "secondary",
        size: "m",
        className: "border-button-m",
      },
      {
        variant: "secondary",
        size: "s",
        className: "border-button-s",
      },
    ],
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
  variant?: "primary" | "alert" | "outline" | "link";
  disabled?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'xl', asChild = false, IconLeft, IconRight, disabled = false, is_loading,children, ...props }, ref) => {
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
Button.displayName = "Button";

export { Button, buttonVariants };