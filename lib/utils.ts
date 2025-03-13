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
                'border-currency-field-border-default',
                'border-currency-field-border-active',
                'border-currency-field-border-disabled',
                'border-surface-overlay',
                'border-button-outline-neutral-default',
                'border-default',
                'border-button-secondary-default',
                'border-button-secondary-active',
                'border-button-secondary-disabled',
                'border-button-secondary-hover',
                
            ],
            'border-w': [
                'border-button-xl',
                'border-button-l',
                'border-button-m',
                'border-button-s',
                'border-currency-field-border',
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


export function welfGlobalTaiwindContent() {
    return './node_modules/welf-global-toolkit/dist/**/*.js'
}
