import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';
const customTWMerge = extendTailwindMerge({
    extend: {
        classGroups: {
            'font-size': [
                'text-description-s-medium',
                'text-description-l-medium',
                'text-description-s',
                'text-description-l',
                'text-number-s',
                'text-body-s',
                'text-body-s-medium',
                'text-body-s-strong',
                'text-body-l-medium',
                'text-body-l-strong',
                'text-body-m-medium',
                'text-body-m-strong',
                'text-description-l-strong',
                'text-body-3xl-strong',
                'text-body-2xl-strong'
            ],
            'border-color': [
                'border-CurrencyField-primary-default',
                'border-CurrencyField-primary-active',
                'border-CurrencyField-primary-disabled',
                'border-surface-overlay',
                'border-button-outline-neutral-default',
                'border-default',
            ],
            'border-w': [
                'border-Button-xl',
            ],
            'rounded': [
                'rounded-l'
            ]
            
        },
    },
});
export function cn(...inputs: ClassValue[]) {
    return customTWMerge(clsx(inputs));
}
