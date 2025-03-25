import * as React from "react"

import { Badge } from "./badge";
import { formatNumber } from "@/utils";
import Image from "next/image";

interface CurrencyFieldProps extends React.ComponentProps<"input"> {
  error?: boolean;
  label?: string;
  balance?: number;
  token?: string;
  BalanceLabel?: string,
  errorMsg?: string,
  handleInputChange? : (amount: string) => void;
  showChip? : boolean
}

const CurrencyField = React.forwardRef<HTMLInputElement, CurrencyFieldProps>(
  ({  type, label, BalanceLabel, errorMsg, balance, token="WELF", error, disabled, handleInputChange, showChip, ...props }, ref) => {
    const containerClass = React.useMemo(() => {
      if (error) return "border-CurrencyField-primary-error"
      if (disabled) return "border-CurrencyField-primary-disabled bg-Currency-Field-primary-disabled"
      return "border-CurrencyField-primary-default"
    }, [error, disabled])
    const inputClass = React.useMemo(() => {
      if (error) return "text-Currency-field-help-error"
      if (disabled) return "text-Currency-field-valueDisabled bg-Currency-Field-primary-disabled"
      return "text-Currency-field-value"
    }, [error, disabled])
 
    return (
      <div className="flex flex-col">
      <div className={"flex flex-col w-full h-CurrencyField-textarea px-CurrencyField-hint-right justify-center  gap-CurrencyField-textarea-vertical rounded-CurrencyField-primary  border-CurrencyField-primary-default border-CurrencyField-primary bg-Currency-Field-primary-default  focus-within:border-CurrencyField-primary-active " + containerClass}>
        <div className="flex justify-between ">
            <p className="text-Currency-field-label text-body-s-medium">{label}</p>
            {
              balance &&
              <p className="text-Currency-field-balanceDefault text-body-s-medium flex items-center">
                <span className="text-Currency-field-balance">{BalanceLabel || "Bal"}:</span> 
                <span><Image src="/welf-token.svg" height={16} width={16} alt='' className="ms-0.5 me-1" /></span> 
                {formatNumber(balance ?? 0)} {token}
              </p>
            }
        </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image src="/welf-token.svg" height={32} width={32} alt='' className="mr-1" />
              <input
                type={type}
                placeholder="0.00"
                className={
                  "text-number-s w-full placeholder:text-Currency-field-placeholder text-foreground-white focus:outline-none bg-Currency-Field-primary-default " + inputClass
                }
                ref={ref}
                onChange={(event) => handleInputChange && handleInputChange(event.target.value)}
                {...props}
              />
            </div>
            {
              showChip &&
              <Badge variant="primary-info" size="l">MAX</Badge>
            }
            </div>
        </div>
        
        {errorMsg && <div className="text-body-s text-Currency-field-help-error mt-CurrencyField-hint">{errorMsg}</div>}
      </div>
    )
  }
)
CurrencyField.displayName = "CurrencyField"

export { CurrencyField }
