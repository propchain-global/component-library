import * as React from "react"

import { Badge } from "./badge";
import { cn } from "@/lib";

interface CurrencyFieldProps extends React.ComponentProps<"input"> {
 error?: boolean;
 label?: string;
 balance?: number;
 token?: string;
 
}




const CurrencyField = React.forwardRef<HTMLInputElement, CurrencyFieldProps>(
  ({  type, label, balance, token="WELF", ...props }, ref) => {
    const containerClass = React.useMemo(() => {
      if (props.error) return "!border-currency-field-border-error bg-currency-field-error"
      if (props.disabled) return "border-currency-field-border-disabled bg-currency-field-disabled"
      return "border-currency-field-border-default"
    }, [props.error, props.disabled])
    const inputClass = React.useMemo(() => {
      if (props.error) return "text-currency-field-help-error"
      if (props.disabled) return "text-currency-field-disabled bg-currency-field-disabled"
      return "text-currency-field-value"
    }, [props.error, props.disabled])
    return (
      <div className={cn( "flex flex-col w-full h-currency-field-textarea-height px-currency-field-hint-left justify-center  gap-currency-field-textarea-vertical rounded-currency-field-radius  border-currency-field-border-default border-currency-field-border bg-currency-field-default  focus-within:border-currency-field-border-active ", containerClass)}>
        <div className="flex justify-between ">
            <p className="text-currency-field-label text-body-s-medium">{label}</p>
            <p className="text-currency-field-balanceDefault text-body-s-medium"><span className="text-currency-field-balance">Bal:</span> {balance?.toLocaleString()} {token}</p>
        </div>

        <div className="flex justify-between items-center">
      <input
        type={type}
        className={
         "text-number-s w-full placeholder:text-currency-field-placeholder  focus:outline-none bg-transparent " + inputClass
        }
        ref={ref}
        {...props}
      />
      <Badge variant="primary-info" size="l">MAX</Badge>
      </div>
      </div>
    )
  }
)
CurrencyField.displayName = "CurrencyField"

export { CurrencyField }
