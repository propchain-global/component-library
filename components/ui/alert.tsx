import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";
import { LucideCircleCheck, LucideInfo, LucideOctagonAlert, LucideTriangleAlert, LucideX } from "lucide-react";

const alertVariants = cva(
  "px-4x py-3x border border rounded-md",
  {
    variants: {
      variant:{
        info: 'bg-alert-background-information border-alert-border-information',
        warning: 'bg-alert-background-warning border-alert-border-warning',
        success: 'bg-alert-background-success border-alert-border-success',
        error: 'bg-alert-background-error border-alert-border-error',
        neutral: 'bg-alert-background-neutral border-alert-border-neutral',
      }
    },
    defaultVariants: {
      variant: "info",
    },
  }
);

const alertTitleVariants = cva(
  "",
  {
    variants: {
      variant:{
        info: 'text-alert-text-information',
        warning: 'text-alert-text-warning',
        success: 'text-alert-text-success',
        error: 'text-alert-text-error',
        neutral: 'text-alert-text-neutral',
      }
    },
    defaultVariants: {
      variant: "info",
    },
  }
)
const iconAlignVariants = cva(
  "",
  {
    variants: {
      iconAlign:{
        start: 'items-start',
        center: 'items-center',
      }
    },
    defaultVariants: {
      iconAlign: 'start',
    },
  }
)

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title: string;
  description?: string;
  points?: string[];
  variant?: "info" | "warning" | "success" | "error" | "neutral";
  icon?: boolean;
  closeButton?: boolean;
  iconAlign? : 'center' | 'start'
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ variant = "info", title, description, points, icon = false, closeButton = false, className,iconAlign = 'start',  ...props }, ref) => {

    const getIcon = () => {
      let icon = <LucideInfo className="h-4x w-4x" />
      switch (variant) {
        case 'info':
          icon = <LucideInfo className="h-4x w-4x" />;
          break;
        case 'warning':
          icon = <LucideOctagonAlert className="h-4x w-4x" />;
          break;
        case 'success':
          icon = <LucideCircleCheck className="h-4x w-4x" />;
          break;
        case 'error':
          icon = <LucideTriangleAlert className="h-4x w-4x" />;
          break;
        case 'neutral':
          icon = <LucideInfo className="h-4x w-4x" />;
          break;
        default:
          icon = <LucideInfo className="h-4x w-4x" />;             
          break;
      }

      return icon;
    }

    return (
      <div
        ref={ref}
        className={cn(alertVariants({ variant }), className, "text-text-warning")}
        {...props}
      >
        <div className="flex justify-between gap-3x">
          <div className={cn(iconAlignVariants({ iconAlign }), "flex gap-3x")}>
            {
              icon && 
              <div className={cn(alertTitleVariants({ variant }), "h-4x w-4x")}>
                {getIcon()}
              </div>
            }
            <div className="flex gap-2x flex-col">
              <h2 
                className={cn(alertTitleVariants({ variant }), "text-body-s-strong ")}
              >
                {title}
              </h2>
              {description && <p className="text-description-l-medium">{description}</p>}
              {
                points &&
                <ul className="text-description-l-medium text-text-supporting list-disc">
                  {points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              }
            </div>
          </div>

          {closeButton && 
            <div className="text-text-supporting"><LucideX className="w-4x h-4x" /></div>
          }
        </div>
      </div>
    );
  }
);

Alert.displayName = "Alert";

export { Alert };