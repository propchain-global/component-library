import * as React from "react"

import { Badge } from "./badge";

interface CurrencyFieldProps extends React.ComponentProps<"input"> {
 error?: boolean;
 label?: string;
 balance?: number;
 token?: string;
 
}




const CurrencyField = React.forwardRef<HTMLInputElement, CurrencyFieldProps>(
  ({  type, label, balance, token="WELF", ...props }, ref) => {
    const containerClass = React.useMemo(() => {
      if (props.error) return "border-CurrencyField-primary-error"
      if (props.disabled) return "border-CurrencyField-primary-disabled bg-Currency-Field-primary-disabled"
      return "border-CurrencyField-primary-default"
    }, [props.error, props.disabled])
    const inputClass = React.useMemo(() => {
      if (props.error) return "text-Currency-field-help-error"
      if (props.disabled) return "text-Currency-field-valueDisabled bg-Currency-Field-primary-disabled"
      return "text-Currency-field-value"
    }, [props.error, props.disabled])
    return (
      <div className={"flex flex-col w-full h-CurrencyField-textarea px-CurrencyField-hint-right justify-center  gap-CurrencyField-textarea-vertical rounded-CurrencyField-primary  border-CurrencyField-primary-default border-CurrencyField-primary bg-Currency-Field-primary-default  focus-within:border-CurrencyField-primary-active " + containerClass}>
        <div className="flex justify-between ">
            <p className="text-Currency-field-label text-body-s-medium">{label}</p>
            <p className="text-Currency-field-balanceDefault text-body-s-medium"><span className="text-Currency-field-balance">Bal:</span> {balance?.toLocaleString()} {token}</p>
        </div>

        <div className="flex justify-between items-center">
      <input
        type={type}
        className={
         "text-number-s placeholder:text-Currency-field-placeholder  focus:outline-none bg-Currency-Field-primary-default " + inputClass
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
