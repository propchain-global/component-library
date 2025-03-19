import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-Button-l px-[10px] py-[10px] ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-button-accent-default hover:bg-button-accent-hover disabled:bg-button-accent-disabled text-button-accent-default hover:text-button-accent-hover disabled:text-button-accent-disabled",
        outline:
          "border-s border-button-outline-neutral-default hover:border-button-outline-neutral-hover disabled:bg-button-outline-neutral-disabled text-button-outline-neutral-default hover:border-button-outline-neutral-hover text-button-outline-neutral-default hover:text-button-outline-neutral-hover disabled:text-button-outline-neutral-disabled bg-button-outline-neutral-default hover:bg-button-outline-neutral-hover",
        tertiary: "bg-button-tertiary-accent-default hover:bg-button-tertiary-accent-hover disabled:bg-button-tertiary-accent-disabled text-button-tertiary-accent-default hover:text-button-tertiary-accent-hover disabled:text-button-tertiary-accent-disabled",
        link: "text-button-link-neutral-default hover:text-button-link-neutral-hover disabled:text-button-link-neutral-disabled",
      },
     
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  Icon?: React.JSXElementConstructor<{className?: string}>;
  variant?: "primary" | "outline" | 'tertiary' | "link";
  disabled?: boolean;
}

const IconButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', asChild = false, Icon, disabled = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, className })) + `${variant === 'link' ? ' px-none py-none' : ''}`}
        ref={ref}
        {...props}
        disabled={disabled}
      >
       {Icon && <Icon className='' />}
      </Comp>
    );
  }
);
IconButton.displayName = "IconButton";

export { IconButton, buttonVariants };