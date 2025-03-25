export type CurrencyPreference = 'EU' | 'US';
export const M = 1000000;
export const G = 1000000000;

export const formatInputWithComma = (investmentAmount: string | number | undefined, pref: CurrencyPreference | undefined = undefined) => {  
  const initialInvestmentAmount = String(investmentAmount); 

  const decimalSeparator = pref === "EU" ? "," : ".";
  const parts = initialInvestmentAmount.split(decimalSeparator);
  const hasSeparator = initialInvestmentAmount.includes(decimalSeparator);
  
  investmentAmount = parts[0];
  const sanitizedAmount = investmentAmount.replaceAll(/[^\d]/g, "");
  if (hasSeparator) {
    const amount = parts[1]?.length
      ? Number(initialInvestmentAmount).toLocaleString(pref ? FormatMap[pref] : "en-US", {
          maximumFractionDigits: parts[1].length,
          minimumFractionDigits: parts[1].length,
        })
      : `${(Number(parts[0])).toLocaleString(pref ? FormatMap[pref] : 'en-Us')}${decimalSeparator}`;

    return amount;
  }

  return sanitizedAmount
    ? Number(sanitizedAmount).toLocaleString(pref ? FormatMap[pref] : "en-US")
    : "";
};
  
export const FormatMap: Record<CurrencyPreference, string | undefined> = {
  'EU': 'de-DE',
  'US': 'en-US',
};

export const formatInputNumber = (value: string, pref?: CurrencyPreference | undefined, limits?: number, max?: number) => {
  // value = value.replaceAll(/[^\d]/g, '');
  // console.log("value", value);
  const decimalSeparator = pref === 'EU' ? ',' : '.';
  const parts = value.split(decimalSeparator);
  let investmentValue = parts[0];
  if (limits) investmentValue = investmentValue.substring(0, limits);
  const hastSeparator = value.includes(decimalSeparator);
  investmentValue = investmentValue.replaceAll(/[^\d]/g, '');
  // limit the value to the max
  
  if (max && Number(investmentValue) > max) {
    investmentValue = `${max}`;
  }

  return `${investmentValue}${hastSeparator ? `${decimalSeparator}${(parts[1] || '')}`: ''}`;
};