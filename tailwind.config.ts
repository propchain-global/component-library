import type { Config } from 'tailwindcss';
import { borderWidth, cornerRadius, dimensions } from './stylecore/dimensions';

export default {
    darkMode: ['class', "[data-mode='dark']"],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './stories/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ['var(--font-inter)'],
                kodeMono: ['var(--font-kode-mono)'],
            },
            colors: {
                primary: {
                    lime: {
                        100: 'var(--primary-lime-100)',
                        90: 'var(--primary-lime-90)',
                        80: 'var(--primary-lime-80)',
                        70: 'var(--primary-lime-70)',
                        60: 'var(--primary-lime-60)',
                        base: 'var(--primary-lime-base)',
                        50: 'var(--primary-lime-50)',
                        40: 'var(--primary-lime-40)',
                        30: 'var(--primary-lime-30)',
                        20: 'var(--primary-lime-20)',
                        10: 'var(--primary-lime-10)',
                        'overlay-50': 'var(--primary-lime-overlay-50)',
                        'overlay-24': 'var(--primary-lime-overlay-24)',
                        'overlay-12': 'var(--primary-lime-overlay-12)',
                        'overlay-4': 'var(--primary-lime-overlay-4)',
                    },
                },
                secondary: {
                    teal: {
                        100: 'var(--secondary-teal-100)',
                        90: 'var(--secondary-teal-90)',
                        80: 'var(--secondary-teal-80)',
                        70: 'var(--secondary-teal-70)',
                        60: 'var(--secondary-teal-60)',
                        base: 'var(--secondary-teal-base)',
                        50: 'var(--secondary-teal-50)',
                        40: 'var(--secondary-teal-40)',
                        30: 'var(--secondary-teal-30)',
                        20: 'var(--secondary-teal-20)',
                        10: 'var(--secondary-teal-10)',
                        'overlay-50': 'var(--secondary-teal-overlay-50)',
                        'overlay-24': 'var(--secondary-teal-overlay-24)',
                        'overlay-12': 'var(--secondary-teal-overlay-12)',
                        'overlay-4': 'var(--secondary-teal-overlay-4)',
                    },
                },
                neutral: {
                    grey: {
                        100: 'var(--neutral-grey-100)',
                        90: 'var(--neutral-grey-90)',
                        80: 'var(--neutral-grey-80)',
                        70: 'var(--neutral-grey-70)',
                        60: 'var(--neutral-grey-60)',
                        base: 'var(--neutral-grey-base)',
                        50: 'var(--neutral-grey-50)',
                        40: 'var(--neutral-grey-40)',
                        30: 'var(--neutral-grey-30)',
                        20: 'var(--neutral-grey-20)',
                        10: 'var(--neutral-grey-10)',
                    },
                },
                system: {
                    yellow: {
                        100: 'var(--system-yellow-100)',
                        90: 'var(--system-yellow-90)',
                        80: 'var(--system-yellow-80)',
                        70: 'var(--system-yellow-70)',
                        60: 'var(--system-yellow-60)',
                        base: 'var(--system-yellow-base)',
                        50: 'var(--system-yellow-50)',
                        40: 'var(--system-yellow-40)',
                        30: 'var(--system-yellow-30)',
                        20: 'var(--system-yellow-20)',
                        10: 'var(--system-yellow-10)',
                        'overlay-50': 'var(--system-yellow-overlay-50)',
                        'overlay-24': 'var(--system-yellow-overlay-24)',
                        'overlay-12': 'var(--system-yellow-overlay-12)',
                        'overlay-4': 'var(--system-yellow-overlay-4)',
                    },
                    red: {
                        100: 'var(--system-red-100)',
                        90: 'var(--system-red-90)',
                        80: 'var(--system-red-80)',
                        70: 'var(--system-red-70)',
                        60: 'var(--system-red-60)',
                        base: 'var(--system-red-base)',
                        50: 'var(--system-red-50)',
                        40: 'var(--system-red-40)',
                        30: 'var(--system-red-30)',
                        20: 'var(--system-red-20)',
                        10: 'var(--system-red-10)',
                        'overlay-50': 'var(--system-red-overlay-50)',
                        'overlay-24': 'var(--system-red-overlay-24)',
                        'overlay-12': 'var(--system-red-overlay-12)',
                        'overlay-4': 'var(--system-red-overlay-4)',
                    },
                    green: {
                        100: 'var(--system-green-100)',
                        90: 'var(--system-green-90)',
                        80: 'var(--system-green-80)',
                        70: 'var(--system-green-70)',
                        60: 'var(--system-green-60)',
                        base: 'var(--system-green-base)',
                        50: 'var(--system-green-50)',
                        40: 'var(--system-green-40)',
                        30: 'var(--system-green-30)',
                        20: 'var(--system-green-20)',
                        10: 'var(--system-green-10)',
                        'overlay-50': 'var(--system-green-overlay-50)',
                        'overlay-24': 'var(--system-green-overlay-24)',
                        'overlay-12': 'var(--system-green-overlay-12)',
                        'overlay-4': 'var(--system-green-overlay-4)',
                    },
                },
                pills: {
                    primary: {
                        information: 'var(--pill-primary-information)',
                        warning: 'var(--pill-primary-warning)',
                        success: 'var(--pill-primary-success)',
                        error: 'var(--pill-primary-error)',
                        neutral: 'var(--pill-primary-neutral)',
                    },
                    secondary: {
                        information: 'var(--pill-secondary-information)',
                        warning: 'var(--pill-secondary-warning)',
                        success: 'var(--pill-secondary-success)',
                        error: 'var(--pill-secondary-error)',
                        neutral: 'var(--pill-secondary-neutral)',
                    },
                },
                alert: {
                    background: {
                        information: 'var(--alert-bg-information)',
                        warning: 'var(--alert-bg-warning)',
                        success: 'var(--alert-bg-success)',
                        error: 'var(--alert-bg-error)',
                        neutral: 'var(--alert-bg-neutral)',
                    },
                    border: {
                        information: 'var(--alert-border-information)',
                        warning: 'var(--alert-border-warning)',
                        success: 'var(--alert-border-success)',
                        error: 'var(--alert-border-error)',
                        neutral: 'var(--alert-border-neutral)',
                    },
                    text: {
                        information: 'var(--alert-text-information)',
                        warning: 'var(--alert-text-warning)',
                        success: 'var(--alert-text-success)',
                        error: 'var(--alert-text-error)',
                        neutral: 'var(--alert-text-neutral)',
                        supporting: 'var(--alert-supporting-text)',
                    },
                    icon: {
                        information: 'var(--alert-icon-information)',
                        warning: 'var(--alert-icon-warning)',
                        success: 'var(--alert-icon-success)',
                        error: 'var(--alert-icon-error)',
                        neutral: 'var(--alert-icon-neutral)',
                        close: 'var(--alert-close-icon)',
                    },
                },
                'Style-asset': {
                    C1: {
                        light: 'var(--primary-lime-overlay-12)',
                        dark: 'var(--primary-lime-overlay-4)',
                    },
                    C2: {
                        light: 'var(--primary-lime-overlay-4)',
                        dark: 'var(--primary-lime-overlay-12)',
                    },
                },
                Popup: {
                    UniversalLink: {
                        stroke: 'rgba(255, 255, 255, 0.02)', // #FFFFFF 2%
                        active: 'rgba(255, 255, 255, 0.02)', // #FFFFFF 2%
                        default: 'rgba(255, 255, 255, 0.02)', // #FFFFFF 2%
                        hover: 'rgba(255, 255, 255, 0.02)', // #FFFFFF 2%
                        icon: 'rgba(255, 255, 255, 0.02)', // #FFFFFF 2%
                    },
                },
                banners: {
                    background: 'var(--border-strong)',
                    text: 'var(--border-strong)',
                    heading: 'var(--border-strong)',
                    'value-proposition': 'var(--border-strong)',
                    icon: 'var(--border-strong)',
                    style: 'var(--border-strong)',
                },
                surface: {
                    overlay: 'var(--surface-overlay)',
                    disabled: 'var(--surface-disabled)',
                    success: 'var(--surface-success)',
                    warning: 'var(--surface-warning)',
                    error: 'var(--surface-error)',
                    overlayWhite50: 'var(--surface-overlay-white-50)',
                    overlayWhite28: 'var(--surface-overlay-white-28)',
                    accent: 'var(--surface-accent)',
                },
                foreground: {
                  default: 'var(--foreground-default)',
                onAccent: 'var(--foreground-on-accent)',
                weak: 'var(--foreground-weak)',
                weaker: 'var(--foreground-weaker)',
                weakest: 'var(--foreground-weakest)',
                inverse: 'var(--foreground-inverse)',
                white: 'var(--foreground-white)',
                success: 'var(--foreground-success)',
                successOnSurface: 'var(--foreground-success-on-surface)',
                warning: 'var(--foreground-warning)',
                warningOnSurface: 'var(--foreground-warning-on-surface)',
                error: 'var(--foreground-error)',
                errorOnSurface: 'var(--foreground-error-on-surface)',
                link: 'var(--foreground-link)',
                },
                accent: {
                    default: 'var(--accent-default)',
                    strong: 'var(--accent-strong)',
                    stronger: 'var(--accent-stronger)',
                    onWhite: 'var(--accent-on-white)',
                    onSurface: 'var(--accent-on-surface)',
                },
            },
            spacing: {
                ...dimensions.spacing,
                'button-s-height': 'var(--size-s)',
                'button-m-height': 'var(--size-m)',
                'button-l-height': 'var(--size-l)',
                'button-xl-height': 'var(--size-xl)',
                'button-xl-label-horizontal': 'var(--spacing-2x)',
                'currencyfield-hint': 'var(--spacing-1x)',
                'currencyfield-hint-left': 'var(--spacing-4x)',
                'currencyfield-hint-right': 'var(--spacing-4x)',
                'currencyfield-textarea-vertical': 'var(--spacing-2x)',
                'button-s-label': 'var(--spacing-2x)',
                'button-m-label': 'var(--spacing-2x)',
                'button-l-label': 'var(--spacing-2x)',
                'button-xl-label': 'var(--spacing-2x)',
            },
            boxShadow: {
                'bottom-s': '0px 1px 2px 0px rgba(0, 0, 0, 0.05)', // Small: y-offset: 1px, blur: 2px
                'bottom-m': '0px 2px 4px 0px rgba(0, 0, 0, 0.08)', // Medium: y-offset: 2px, blur: 4px
                'bottom-l': '0px 4px 8px 0px rgba(0, 0, 0, 0.12)', // Large: y-offset: 4px, blur: 8px
                'bottom-xl': '0px 8px 16px 0px rgba(0, 0, 0, 0.16)', // XLarge: y-offset: 8px, blur: 16px
                'bottom-controls': '0px 16px 32px 0px rgba(0, 0, 0, 0.24)', // Controls: y-offset: 16px, blur: 32px

                // Bottom Accent Shadows (Accent shadows falling "down")

                'bottom-accent-s': '0px 1px 2px 0px rgba(255, 191, 0, 0.12)', // Small accent
                'bottom-accent-m': '0px 2px 4px 0px rgba(255, 191, 0, 0.16)', // Medium accent
                'bottom-accent-l': '0px 4px 8px 0px rgba(255, 191, 0, 0.20)', // Large accent
                'bottom-accent-xl': '0px 8px 16px 0px rgba(255, 191, 0, 0.24)', // XLarge accent
                'bottom-accent-controls':
                    '0px 16px 32px 0px var(--bottom-accent-s) ', // Controls accent

                // Top Shadows (Neutral shadows falling "up")
                'top-s': '0px -1px 2px 0px rgba(0, 0, 0, 0.05)', // Small: y-offset: -1px, blur: 2px
                'top-m': '0px -2px 4px 0px rgba(0, 0, 0, 0.08)', // Medium: y-offset: -2px, blur: 4px
                'top-l': '0px -4px 8px 0px rgba(0, 0, 0, 0.12)', // Large: y-offset: -4px, blur: 8px
                'top-xl': '0px -8px 16px 0px rgba(0, 0, 0, 0.16)', // XLarge: y-offset: -8px, blur: 16px
                'top-controls': '0px -16px 32px 0px rgba(0, 0, 0, 0.24)', // Controls: y-offset: -16px, blur: 32px
                // Text Inner Shadow
                'text-inner': 'inset 0px 1px 2px rgba(0, 0, 0, 0.08)',
            },

            accentColor: {
                default: 'var(--accent-default)',
                strong: 'var(--accent-strong)',
                stronger: 'var(--accent-stronger)',
                onWhite: 'var(--accent-on-white)',
                onSurface: 'var(--accent-on-surface)',
            },
            backgroundColor: {
                default: 'var(--background-default)',
                weakest: 'var(--background-weakest)',
                weaker: 'var(--background-weaker)',
                weak: 'var(--background-weak)',
                darks: 'var(--background-darks)',
                inverted: 'var(--background-inverted)',
                white: 'var(--background-white)',
                primary: 'var(--background-primary)',
                none: 'var(--background-none)',
                'button-accent': {
                    disabled: 'var(--button-accent-bg-disabled)',
                    active: 'var(--button-accent-bg-active)',
                    hover: 'var(--button-accent-bg-hover)',
                    default: 'var(--button-accent-bg-default)',
                },
                'button-white': {
                    disabled: 'var(--button-white-bg-disabled)',
                    active: 'var(--button-white-bg-active)',
                    hover: 'var(--button-white-bg-hover)',
                    default: 'var(--button-white-bg-default)',
                },
                'button-outline-neutral': {
                    disabled: 'var(--button-outline-neutral-bg-disabled)',
                    active: 'var(--button-outline-neutral-bg-active)',
                    hover: 'var(--button-outline-neutral-bg-hover)',
                    default: 'var(--button-outline-neutral-bg-default)',
                },
                'button-outline-white': {
                    disabled: 'var(--button-outline-white-bg-disabled)',
                    active: 'var(--button-outline-white-bg-active)',
                    hover: 'var(--button-outline-white-bg-hover)',
                    default: 'var(--button-outline-white-bg-default)',
                },
                'button-tertiary-accent': {
                    disabled: 'var(--button-tertiary-accent-bg-disabled)',
                    active: 'var(--button-tertiary-accent-bg-active)',
                    hover: 'var(--button-tertiary-accent-bg-hover)',
                    default: 'var(--button-tertiary-accent-bg-default)',
                },
                'button-tertiary-alert': {
                    disabled: 'var(--button-tertiary-alert-bg-disabled)',
                    active: 'var(--button-tertiary-alert-bg-active)',
                    hover: 'var(--button-tertiary-alert-bg-hover)',
                    default: 'var(--button-tertiary-alert-bg-default)',
                },
                'button-link-neutral': {
                    disabled: 'var(--button-link-neutral-bg-disabled)',
                    active: 'var(--button-link-neutral-bg-active)',
                    hover: 'var(--button-link-neutral-bg-hover)',
                    default: 'var(--button-link-neutral-bg-default)',
                },
                'button-link-white': {
                    disabled: 'var(--button-link-white-bg-disabled)',
                    active: 'var(--button-link-white-bg-active)',
                    hover: 'var(--button-link-white-bg-hover)',
                    default: 'var(--button-link-white-bg-default)',
                },
                'button-custom': {
                    disabled: 'var(--button-custom-bg-disabled)',
                    active: 'var(--button-custom-bg-active)',
                    hover: 'var(--button-custom-bg-hover)',
                    default: 'var(--button-custom-bg-default)',
                },
                Navigation: {
                    bg: 'var(--navigation-bg)',
                    menu: 'var(--navigation-menu-bg)',
                    hover: 'var(--navigation-hover-bg)',
                    active: 'var(--navigation-active-bg)',
                },
                'BG-Texture': {
                    background: '#000000',
                    'background-16': 'rgba(0, 0, 0, 0.16)',
                    lines: '#000000',
                    circle: 'rgba(255, 255, 255, 0)',
                },
                'popup-buy-propc': {
                    background: 'var(--card-buy-propc-bg)',
                    heading: 'var(--card-buy-propc-heading)',
                    'value-proposition':
                        'var(--card-buy-propc-value-proposition)',
                    icon: 'var(--card-buy-propc-icon)',
                    style: 'var(--card-buy-propc-style)',
                },
                Frame: {
                    background: {
                        black: '#F8F8F8',
                        'black-16': '#F8F8F8',
                    },
                    lines: {
                        white: 'var(--white-4)',
                    },
                    circle: {
                        yellow: 'var(--primary-lime-base)',
                    },
                },
                Cards: {
                    default: '#F8F8F8',
                    weak: '#F8F8F8',
                    weaker: '#F8F8F8',
                    weakest: '#F8F8F8',
                },
                Header: {
                    // Style 2
                    light: {
                        'style-1': 'var(--border-strong)', // White
                        'style-2': 'var(--border-strong)', // Black
                    },
                    dark: {
                        'style-1': 'var(--border-strong)', // White
                        'style-2': 'var(--border-strong)', // Black
                    },
                },
                'Header-sub': {
                    theme: 'var(--header-sub-theme-bg)',
                    secondary: 'var(--header-sub-secondary-bg)',
                    overlay: 'var(--header-sub-overlay-bg)',
                },
                'Currency-Field': {
                    primary: {
                        default: 'var(--currency-field-bg-default)',
                        focused: 'var(--currency-field-bg-focused)',
                        error: 'var(--currency-field-bg-error)',
                        disabled: 'var(--currency-field-bg-disabled)',
                        filled: 'var(--currency-field-bg-filled)',
                    },
                },
            },
            textColor: {
                primary: 'var(--primary-lime-overlay-24)',
                secondary: 'var(--primary-lime-overlay-12)',
                disabled: 'var(--secondary-teal-overlay-24)',
                highlighted: 'var(--secondary-teal-overlay-12)',
                default: 'var(--foreground-default)',
                onAccent: 'var(--foreground-on-accent)',
                weak: 'var(--foreground-weak)',
                weaker: 'var(--foreground-weaker)',
                weakest: 'var(--foreground-weakest)',
                inverse: 'var(--foreground-inverse)',
                white: 'var(--foreground-white)',
                success: 'var(--foreground-success)',
                successOnSurface: 'var(--foreground-success-on-surface)',
                warning: 'var(--foreground-warning)',
                warningOnSurface: 'var(--foreground-warning-on-surface)',
                error: 'var(--foreground-error)',
                errorOnSurface: 'var(--foreground-error-on-surface)',
                link: 'var(--foreground-link)',
                'button-accent': {
                    disabled: 'var(--button-accent-text-disabled)',
                    active: 'var(--button-accent-text-active)',
                    hover: 'var(--button-accent-text-hover)',
                    default: 'var(--button-accent-text-default)',
                },
                'button-white': {
                    disabled: 'var(--button-white-text-disabled)',
                    active: 'var(--button-white-text-active)',
                    hover: 'var(--button-white-text-hover)',
                    default: 'var(--button-white-text-default)',
                },
                'button-outline-neutral': {
                    disabled: 'var(--button-outline-neutral-text-disabled)',
                    active: 'var(--button-outline-neutral-text-active)',
                    hover: 'var(--button-outline-neutral-text-hover)',
                    default: 'var(--button-outline-neutral-text-default)',
                },
                'button-outline-white': {
                    disabled: 'var(--button-outline-white-text-disabled)',
                    active: 'var(--button-outline-white-text-active)',
                    hover: 'var(--button-outline-white-text-hover)',
                    default: 'var(--button-outline-white-text-default)',
                },
                'button-tertiary-accent': {
                    disabled: 'var(--button-tertiary-accent-text-disabled)',
                    active: 'var(--button-tertiary-accent-text-active)',
                    hover: 'var(--button-tertiary-accent-text-hover)',
                    default: 'var(--button-tertiary-accent-text-default)',
                },
                'button-tertiary-alert': {
                    disabled: 'var(--button-tertiary-alert-text-disabled)',
                    active: 'var(--button-tertiary-alert-text-active)',
                    hover: 'var(--button-tertiary-alert-text-hover)',
                    default: 'var(--button-tertiary-alert-text-default)',
                },
                'button-link-neutral': {
                    disabled: 'var(--button-link-neutral-text-disabled)',
                    active: 'var(--button-link-neutral-text-active)',
                    hover: 'var(--button-link-neutral-text-hover)',
                    default: 'var(--button-link-neutral-text-default)',
                },
                'button-link-white': {
                    disabled: 'var(--button-link-white-text-disabled)',
                    active: 'var(--button-link-white-text-active)',
                    hover: 'var(--button-link-white-text-hover)',
                    default: 'var(--button-link-white-text-default)',
                },
                'button-custom': {
                    disabled: 'var(--button-custom-text-disabled)',
                    active: 'var(--button-custom-text-active)',
                    hover: 'var(--button-custom-text-hover)',
                    default: 'var(--button-custom-text-default)',
                },
                'Currency-field': {
                    label: 'var(--currency-field-text-label)',
                    balance: 'var(--currency-field-text-balance)',
                    balanceDefault: 'var(--foreground-weak)',
                    value: 'var(--currency-field-text-value)',
                    valueDisabled: 'var(--surface-disabled)',
                    placeholder: 'var(--currency-field-text-placeholder)',
                    help: {
                        default: 'var(--currency-field-help-text-default)',
                        hover: 'var(--currency-field-help-text-hover)',
                        active: 'var(--currency-field-help-text-active)',
                        filled: 'var(--currency-field-help-text-filled)',
                        error: 'var(--currency-field-help-text-error)',
                        disabled: 'var(--currency-field-help-text-disabled)',
                    },
                },
                'Card-buy-propc': {
                    heading: 'var(--card-buy-propc-text-heading)',
                    'value-proposition':
                        'var(--card-buy-propc-text-value-proposition)',
                },
                Header: {
                    // Style 1 & 2
                    light: {
                        style: 'var(--border-strong)', // Black
                        'style-2': 'var(--border-strong)', // White
                    },
                    dark: {
                        style: 'var(--border-strong)', // Black
                        'style-2': 'var(--border-strong)', // White
                    },
                },
                'Header-sub': {
                    theme: 'var(--header-sub-theme-text)',
                    secondary: 'var(--header-sub-secondary-text)',
                },
                'pills-primary': {
                    information: 'var(--pill-text-information)',
                    warning: 'var(--pill-text-warning)',
                    success: 'var(--pill-text-success)',
                    error: 'var(--pill-text-error)',
                    neutral: 'var(--pill-text-neutral)',
                },
                'pills-secondary': {
                    information: 'var(--pill-text-secondary-information)',
                    warning: 'var(--pill-text-secondary-warning)',
                    success: 'var(--pill-text-secondary-success)',
                    error: 'var(--pill-text-secondary-error)',
                    neutral: 'var(--pill-text-secondary-neutral)',
                },
                'pills-icon-primary': {
                    information: 'var(--pill-icon-primary-information)',
                    warning: 'var(--pill-icon-primary-warning)',
                    success: 'var(--pill-icon-primary-success)',
                    error: 'var(--pill-icon-primary-error)',
                    neutral: 'var(--pill-icon-primary-neutral)',
                },
                'pills-icon-secondary': {
                    information: 'var(--pill-icon-secondary-information)',
                    warning: 'var(--pill-icon-secondary-warning)',
                    success: 'var(--pill-icon-secondary-success)',
                    error: 'var(--pill-icon-secondary-error)',
                },
            },

            borderColor: {
                none: 'var(--border-none)',
                default: 'var(--border-default)',
                white: 'var(--border-white)',
                strong: 'var(--border-strong)',
                strongest: 'var(--border-strongest)',
                accent: 'var(--border-accent)',
                'button-accent': {
                    disabled: 'var(--button-accent-border-disabled)',
                    active: 'var(--button-accent-border-active)',
                    hover: 'var(--button-accent-border-hover)',
                    default: 'var(--button-accent-border-default)',
                },
                'button-white': {
                    disabled: 'var(--button-white-border-disabled)',
                    active: 'var(--button-white-border-active)',
                    hover: 'var(--button-white-border-hover)',
                    default: 'var(--button-white-border-default)',
                },
                'button-outline-neutral': {
                    disabled: 'var(--button-outline-neutral-border-disabled)',
                    active: 'var(--button-outline-neutral-border-active)',
                    hover: 'var(--button-outline-neutral-border-hover)',
                    default: 'var(--button-outline-neutral-border-default)',
                },
                'button-outline-white': {
                    disabled: 'var(--button-outline-white-border-disabled)',
                    active: 'var(--button-outline-white-border-active)',
                    hover: 'var(--button-outline-white-border-hover)',
                    default: 'var(--button-outline-white-border-default)',
                },
                'button-tertiary-accent': {
                    disabled: 'var(--button-tertiary-accent-border-disabled)',
                    active: 'var(--button-tertiary-accent-border-active)',
                    hover: 'var(--button-tertiary-accent-border-hover)',
                    default: 'var(--button-tertiary-accent-border-default)',
                },
                'button-tertiary-alert': {
                    disabled: 'var(--button-tertiary-alert-border-disabled)',
                    active: 'var(--button-tertiary-alert-border-active)',
                    hover: 'var(--button-tertiary-alert-border-hover)',
                    default: 'var(--button-tertiary-alert-border-default)',
                },
                'button-link-neutral': {
                    disabled: 'var(--button-link-neutral-border-disabled)',
                    active: 'var(--button-link-neutral-border-active)',
                    hover: 'var(--button-link-neutral-border-hover)',
                    default: 'var(--button-link-neutral-border-default)',
                },
                'button-link-white': {
                    disabled: 'var(--button-link-white-border-disabled)',
                    active: 'var(--button-link-white-border-active)',
                    hover: 'var(--button-link-white-border-hover)',
                    default: 'var(--button-link-white-border-default)',
                },
                'button-custom': {
                    disabled: 'var(--button-custom-border-disabled)',
                    active: 'var(--button-custom-border-active)',
                    hover: 'var(--button-custom-border-hover)',
                    default: 'var(--button-custom-border-default)',
                },
                'CurrencyField-primary': {
                    default: 'var(--currency-field-border-default)',
                    hover: 'var(--currency-field-border-hover)',
                    active: 'var(--currency-field-border-active)',
                    filled: 'var(--currency-field-border-filled)',
                    error: 'var(--currency-field-border-error)',
                    disabled: 'var(--currency-field-border-disabled)',
                },
                Header: {
                    light: 'var(--border-strong)',
                    dark: 'var(--border-strong)',
                },
            },
            surfaceColor: {
                accent: 'var(--surface-accent)',
                default: 'var(--surface-default)',
                disabled: 'var(--surface-disabled)',
                success: 'var(--surface-success)',
                warning: 'var(--surface-warning)',
                error: 'var(--surface-error)',
                overlay: 'var(--surface-overlay)',
                overlayWhite50: 'var(--surface-overlay-white-50)',
                overlayWhite28: 'var(--surface-overlay-white-28)',
            },
            shadowColor: {
                accentDefault: 'var(--shadow-accent-default)',
                accentWeak: 'var(--shadow-accent-weak)',
                secondaryDefault: 'var(--shadow-secondary-default)',
                secondaryWeak: 'var(--shadow-secondary-weak)',
                textInner: 'var(--shadow-text-inner)',
            },
            borderRadius: {
                lg: 'var(--corner-radius-l)',
                md: 'var(--corner-radius-m)',
                sm: 'var(--corner-radius-s)',
                'Button-s': 'var(--corner-radius-m)',
                'Button-m': 'var(--corner-radius-m)',
                'Button-l': 'var(--corner-radius-m)',
                'Button-xl': 'var(--corner-radius-m)',
                Alert: 'var(--corner-radius-m)',
                'CurrencyField-primary': 'var(--corner-radius-m)',
                'Navigation-nav': 'var(--corner-radius-custom)',
                'Navigation-menu': 'var(--corner-radius-custom)',
                Header: 'var(--corner-radius-custom)',
                'Header-main': 'var(--corner-radius-custom)',
                Banner: 'var(--corner-radius-xl)',
                'Banner-welcome': 'var(--corner-radius-2xl)',
                'Card-token-rwa': 'var(--corner-radius-2xl)',
                'Card-real-estate': 'var(--corner-radius-2xl)',
                'Card-news': 'var(--corner-radius-2xl)',
                Pills: 'var(--corner-radius-xs)',
            },
            borderWidth: {
                'Button-s': 'var(--border-width-s)',
                'Button-m': 'var(--border-width-s)',
                'Button-l': 'var(--border-width-s)',
                'Button-xl': 'var(--border-width-s)',
                'CurrencyField-primary': 'var(--border-width-s)',
            },
            minWidth: {
                'Button-s': 'var(--size-s)',
                'Button-m': 'var(--size-m)',
                'Button-l': 'var(--size-l)',
                'Button-xl': 'var(--size-xl)',
            },
            height: {
                'Button-s': 'var(--size-s)',
                'Button-m': 'var(--size-m)',
                'Button-l': 'var(--size-l)',
                'Button-xl': 'var(--size-xl)',
                'CurrencyField-textarea': 'var(--spacing-24x)',
                'Navigation-nav': 'var(--spacing-3x)',
                'Navigation-menu': 'var(--spacing-2x)',
                Banner: 'var(--spacing-8x)',
                'Banner-text': 'var(--spacing-none)',
                'Banner-welcome': 'var(--spacing-10x)',
                'Banner-welcome-text': 'var(--spacing-none)',
                'Card-token-rwa': 'var(--spacing-8x)',
                'Card-token-rwa-text': 'var(--spacing-none)',
                'Card-real-estate': 'var(--spacing-5x)',
                'Card-real-estate-text': 'var(--spacing-none)',
                'Card-news': 'var(--spacing-5x)',
                'Card-news-text': 'var(--spacing-none)',
                'Pills-s': 'var(--spacing-5x)',
                'Pills-l': 'var(--spacing-6x)',
                'Card-buy-propc': 'var(--spacing-8x)',
                'Card-buy-propc-text': 'var(--spacing-none)',
                'Header-main': 'var(--spacing-4x)',
            },
            gap: {
                none: 'var(--spacing-none)',
                '0.125x': 'var(--spacing-0_125x)',
                px: 'var(--spacing-px)',
                '0.5x': 'var(--spacing-0_5x)',
                '1x': 'var(--spacing-1x)',
                '1.5x': 'var(--spacing-1_5x)',
                '2x': 'var(--spacing-2x)',
                '3x': 'var(--spacing-3x)',
                '4x': 'var(--spacing-4x)',
                '5x': 'var(--spacing-5x)',
                '6x': 'var(--spacing-6x)',
                '8x': 'var(--spacing-8x)',
                '10x': 'var(--spacing-10x)',
                '12x': 'var(--spacing-12x)',
                '16x': 'var(--spacing-16x)',
                '20x': 'var(--spacing-20x)',
                '24x': 'var(--spacing-24x)',
                '32x': 'var(--spacing-32x)',
                '48x': 'var(--spacing-48x)',
                '50x': 'var(--spacing-50x)',
                '54': 'var(--spacing-54)',
                infinity: 'var(--spacing-infinity)',
                base: 'var(--spacing-base)',
            },
            padding: {
                'Button-s-label': 'var(--spacing-2x)',
                'Button-m-label': 'var(--spacing-2x)',
                'Button-l-label': 'var(--spacing-2x)',
                'Button-xl-label': 'var(--spacing-2x)',
        
                'Button-s': 'var(--spacing-2x)',
                'Button-m': 'var(--spacing-3x)',
                'Button-l': 'var(--spacing-4x)',
                'Button-xl': 'var(--spacing-5x)',
                'CurrencyField-textarea-vertical': 'var(--spacing-2x)',
                'CurrencyField-hint-left': 'var(--spacing-4x)',
                'CurrencyField-hint-right': 'var(--spacing-4x)',
                'Banner-text-horizontal': 'var(--spacing-2x)',
                'Banner-text-vertical': 'var(--spacing-2x)',
                'Banner-welcome-text': 'var(--spacing-8x)',
                'Card-token-rwa-text': 'var(--spacing-1_5x)',
                'Card-real-estate-text': 'var(--spacing-1x)',
                'Card-news-text': 'var(--spacing-1x)',
                'Navigation-right': 'var(--spacing-4x)',
            },
            width: {
                'Navigation-nav': 'var(--spacing-3x)',
                'Navigation-menu': 'var(--spacing-2x)',
                Banner: 'var(--spacing-8x)',
                'Banner-text': 'var(--spacing-none)',
                'Banner-welcome': 'var(--spacing-10x)',
                'Banner-welcome-text': 'var(--spacing-none)',
                'Banner-reward': 'var(--spacing-8x)',
                'Banner-reward-text': 'var(--spacing-none)',
                'Card-buy-propc': 'var(--spacing-8x)',
                'Card-buy-propc-text': 'var(--spacing-none)',
                'Card-token-rwa': 'var(--spacing-8x)',
                'Card-token-rwa-text': 'var(--spacing-none)',
                'Card-real-estate': 'var(--spacing-5x)',
                'Card-real-estate-text': 'var(--spacing-none)',
                'Card-news': 'var(--spacing-5x)',
                'Card-news-text': 'var(--spacing-none)',
                'Header-main': 'var(--spacing-8x)',
            },
            blur: {
                none: 'var(--blur-none)',
                sm: 'var(--blur-sm)',
                md: 'var(--blur-md)',
                lg: 'var(--blur-lg)',
                xl: 'var(--blur-xl)',
                custom: 'var(--blur-custom)',
                'small-8': 'var(--blur-small-8)',
                'small-10': 'var(--blur-small-10)',
                'medium-12': 'var(--blur-medium-12)',
                'medium-16': 'var(--blur-medium-16)',
                'large-24': 'var(--blur-large-24)',
                'large-48': 'var(--blur-large-48)',
                'xlarge-96': 'var(--blur-xlarge-96)',
                '2xlarge-144': 'var(--blur-2xlarge-144)',
                '3xlarge-288': 'var(--blur-3xlarge-288)',
                'ultimate-720': 'var(--blur-ultimate-720)',
        
                'Navigation-background': 'var(--blur-small-8)',
                'Navigation-hover': 'var(--blur-small-8)',
                'Banner-background': 'var(--blur-small-8)',
                'Circle-Layer': 'var(--blur-3xlarge-288)',
                'Header-main-style-1': 'var(--blur-small-8)',
                'Header-main-style-2': 'var(--blur-small-8)',
            },

            fontSize: {
                // Display 2XL Variants
                'display-2xl': [
                    '80px',
                    {
                        lineHeight: '88px', // 5.5rem
                        letterSpacing: '-2px', // -0.125rem
                        fontWeight: '500', // medium
                    },
                ],
                'display-2xl-strong': [
                    '80px',
                    {
                        lineHeight: '88px', // 5.5rem
                        letterSpacing: '-2px', // -0.125rem
                        fontWeight: '700', // bold
                    },
                ],

                // Display XL Variants
                'display-xl': [
                    '58px',
                    {
                        lineHeight: '64px', // 4.25rem
                        letterSpacing: '-1px', // -0.0625rem
                        fontWeight: '500', // medium
                    },
                ],
                'display-xl-strong': [
                    '58px',
                    {
                        lineHeight: '64px', // 4.25rem
                        letterSpacing: '-1px', // -0.0625rem
                        fontWeight: '700', // bold
                    },
                ],

                // Display L Variants
                'display-l': [
                    '48px',
                    {
                        lineHeight: '52px', // 3.25rem
                        letterSpacing: '0px', // 0rem
                        fontWeight: '500', // medium
                    },
                ],
                'display-l-strong': [
                    '48px',
                    {
                        lineHeight: '52px', // 3.25rem
                        letterSpacing: '0px', // 0rem
                        fontWeight: '700', // bold
                    },
                ],

                // Display M Variants
                'display-m': [
                    '42px',
                    {
                        lineHeight: '44px', // 2.75rem
                        letterSpacing: '0px', // 0rem
                        fontWeight: '500', // medium
                    },
                ],
                'display-m-strong': [
                    '42px',
                    {
                        lineHeight: '44px', // 2.75rem
                        letterSpacing: '0px', // 0rem
                        fontWeight: '700', // bold
                    },
                ],

                // Display S Variants
                'display-s': [
                    '38px',
                    {
                        lineHeight: '44px', // 2.75rem
                        letterSpacing: '0px', // 0rem
                        fontWeight: '500', // medium
                    },
                ],
                'display-s-strong': [
                    '38px',
                    {
                        lineHeight: '44px', // 2.75rem
                        letterSpacing: '0px', // 0rem
                        fontWeight: '700', // bold
                    },
                ],

                // Display XS Variants
                'display-xs': [
                    '32px',
                    {
                        lineHeight: '40px', // 2.75rem
                        letterSpacing: '0px', // 0rem
                        fontWeight: '500', // medium
                    },
                ],
                'display-xs-strong': [
                    '32px',
                    {
                        lineHeight: '40px', // 2.75rem
                        letterSpacing: '0px', // 0rem
                        fontWeight: '700', // bold
                    },
                ],

                // Heading Variants
                'heading-h1': [
                    '28px',
                    {
                        lineHeight: '32px',
                        letterSpacing: '-0.5px',
                        fontWeight: '700',
                    },
                ],
                'heading-h2': [
                    '22px',
                    {
                        lineHeight: '24px',
                        letterSpacing: '-0.3px',
                        fontWeight: '700',
                    },
                ],
                'heading-h3': [
                    '18px',
                    {
                        lineHeight: '24px',
                        letterSpacing: '-0.2px',
                        fontWeight: '700',
                    },
                ],
                'heading-h4': [
                    '16px',
                    {
                        lineHeight: '20px',
                        letterSpacing: '-0.1px',
                        fontWeight: '700',
                    },
                ],
                'heading-h5': [
                    '14px',
                    {
                        lineHeight: '20px',
                        letterSpacing: '0',
                        fontWeight: '700',
                    },
                ],

                'body-xl': [
                    '24px',
                    {
                        lineHeight: '32px',
                        letterSpacing: '-0.3px',
                        fontWeight: '400',
                    },
                ],
                'body-l': [
                    '20px',
                    {
                        lineHeight: '28px',
                        letterSpacing: '-0.2px',
                        fontWeight: '400',
                    },
                ],
                'body-m': [
                    '16px',
                    {
                        lineHeight: '28px',
                        letterSpacing: '-0.1px',
                        fontWeight: '400',
                    },
                ],
                'body-s': [
                    '14px',
                    {
                        lineHeight: '20px',
                        letterSpacing: '0',
                        fontWeight: '400',
                    },
                ],

                // Body 3XL Variants
                'body-3xl': [
                    '26px',
                    {
                        lineHeight: '32px', // 2rem
                        letterSpacing: '0px', // 0rem
                        fontWeight: '400', // regular
                    },
                ],
                'body-3xl-medium': [
                    '26px',
                    {
                        lineHeight: '32px', // 2rem
                        letterSpacing: '0px', // 0rem
                        fontWeight: '500', // medium
                    },
                ],
                'body-3xl-strong': [
                    '26px',
                    {
                        lineHeight: '32px', // 2rem
                        letterSpacing: '0px', // 0rem
                        fontWeight: '600', // semi bold
                    },
                ],

                // Body 2XL Variants
                'body-2xl': [
                    '24px',
                    {
                        lineHeight: '32px', // 2rem
                        letterSpacing: '0px', // 0rem
                        fontWeight: '400', // regular
                    },
                ],
                'body-2xl-medium': [
                    '24px',
                    {
                        lineHeight: '32px', // 2rem
                        letterSpacing: '0px', // 0rem
                        fontWeight: '500', // medium
                    },
                ],
                'body-2xl-strong': [
                    '24px',
                    {
                        lineHeight: '32px', // 2rem
                        letterSpacing: '0px', // 0rem
                        fontWeight: '600', // semi bold
                    },
                ],

                'body-xl-medium': [
                    '20px',
                    {
                        lineHeight: '28px', // 1.75rem
                        letterSpacing: '0px', // 0rem
                        fontWeight: '500', // medium
                    },
                ],
                'body-xl-strong': [
                    '20px',
                    {
                        lineHeight: '28px', // 1.75rem
                        letterSpacing: '0px', // 0rem
                        fontWeight: '600', // semi bold
                    },
                ],

                'body-l-medium': [
                    '18px',
                    {
                        lineHeight: '28px', // 1.75rem
                        letterSpacing: '0px', // 0rem
                        fontWeight: '500', // medium
                    },
                ],
                'body-l-strong': [
                    '18px',
                    {
                        lineHeight: '28px', // 1.75rem
                        letterSpacing: '0px', // 0rem
                        fontWeight: '600', // semi bold
                    },
                ],

                'body-m-medium': [
                    '16px',
                    {
                        lineHeight: '24px', // 1.5rem
                        letterSpacing: '0px', // 0rem
                        fontWeight: '500', // medium
                    },
                ],
                'body-m-strong': [
                    '16px',
                    {
                        lineHeight: '24px', // 1.5rem
                        letterSpacing: '0px', // 0rem
                        fontWeight: '600', // semi bold
                    },
                ],

                'body-s-medium': [
                    '14px',
                    {
                        lineHeight: '20px', // 1.25rem
                        letterSpacing: '0px', // 0rem
                        fontWeight: '500', // medium
                    },
                ],
                'body-s-strong': [
                    '14px',
                    {
                        lineHeight: '20px', // 1.25rem
                        letterSpacing: '0px', // 0rem
                        fontWeight: '600', // semi bold
                    },
                ],

                // Description Large Variants
                'description-l': [
                    '12px',
                    {
                        lineHeight: '16px', // 1rem
                        letterSpacing: '0px', // 0rem
                        fontWeight: '400', // regular
                    },
                ],
                'description-l-medium': [
                    '12px',
                    {
                        lineHeight: '16px', // 1rem
                        letterSpacing: '0px', // 0rem
                        fontWeight: '500', // medium
                    },
                ],
                'description-l-strong': [
                    '12px',
                    {
                        lineHeight: '16px', // 1rem
                        letterSpacing: '0px', // 0rem
                        fontWeight: '600', // semi bold
                    },
                ],

                // Description Medium Variants
                'description-m': [
                    '11px',
                    {
                        lineHeight: '16px', // 1rem
                        letterSpacing: '0.2px', // 0.0125rem
                        fontWeight: '400', // regular
                    },
                ],
                'description-m-medium': [
                    '11px',
                    {
                        lineHeight: '16px', // 1rem
                        letterSpacing: '0.2px', // 0.0125rem
                        fontWeight: '500', // medium
                    },
                ],
                'description-m-strong': [
                    '11px',
                    {
                        lineHeight: '16px', // 1rem
                        letterSpacing: '0.2px', // 0.0125rem
                        fontWeight: '600', // semi bold
                    },
                ],

                // Description Small Variants
                'description-s': [
                    '10px',
                    {
                        lineHeight: '12px', // 0.75rem
                        letterSpacing: '0.4px', // 0.025rem
                        fontWeight: '400', // regular
                    },
                ],
                'description-s-medium': [
                    '10px',
                    {
                        lineHeight: '12px', // 0.75rem
                        letterSpacing: '0.4px', // 0.025rem
                        fontWeight: '500', // medium
                    },
                ],
                'description-s-strong': [
                    '10px',
                    {
                        lineHeight: '12px', // 0.75rem
                        letterSpacing: '0.4px', // 0.025rem
                        fontWeight: '600', // semi bold
                    },
                ],

                // Number XL
                'number-xl': [
                    '160px',
                    {
                        lineHeight: '160px', // 10rem
                        letterSpacing: '0px', // 0rem
                        fontWeight: '600', // semi bold
                    },
                ],

                // Number L
                'number-l': [
                    '100px',
                    {
                        lineHeight: '100px', // 6.25rem
                        letterSpacing: '-5px', // -0.3125rem
                        fontWeight: '600', // semi bold
                    },
                ],

                // Number M
                'number-m': [
                    '48px',
                    {
                        lineHeight: '56px', // 3.5rem
                        letterSpacing: '-0.4px', // -0.025rem
                        fontWeight: '600', // semi bold
                    },
                ],

                // Number XM
                'number-xm': [
                    '40px',
                    {
                        lineHeight: '48px', // 3rem
                        letterSpacing: '-0.4px', // -0.025rem
                        fontWeight: '600', // semi bold
                    },
                ],

                // Number S
                'number-s': [
                    '32px',
                    {
                        lineHeight: '40px', // 2.5rem
                        letterSpacing: '-0.4px', // -0.025rem
                        fontWeight: '600', // semi bold
                    },
                ],

                // Number XS
                'number-xs': [
                    '24px',
                    {
                        lineHeight: '32px', // 2rem
                        letterSpacing: '-0.4px', // -0.025rem
                        fontWeight: '600', // semi bold
                    },
                ],

                // Number 2XS
                'number-2xs': [
                    '18px',
                    {
                        lineHeight: '24px', // 1.5rem
                        letterSpacing: '-0.4px', // -0.025rem
                        fontWeight: '600', // semi bold
                    },
                ],

                // Number 3XS
                'number-3xs': [
                    '14px',
                    {
                        lineHeight: '20px', // 1.25rem
                        letterSpacing: '-0.4px', // -0.025rem
                        fontWeight: '600', // semi bold
                    },
                ],
            },

            letterSpacing: {
                tightest: '-4px', // -4
                tighter: '-2px', // -2
                tight: '-1px', // -1
                normal: '0px', // 0
                wide: '0.2px', // 0.2
                wider: '0.3px', // 0.3
                widest: '0.4px', // 0.4
                'description-m': '0.2px', // 0.0125rem
                'description-s': '0.4px', // 0.025rem
                'display-2xl': '-2px', // -0.125rem
                'display-xl': '-1px', // -0.0625rem
                'number-xl': '0px', // 0rem
                'number-l': '-5px', // -0.3125rem
                number: '-0.4px', // -0.025rem
            },

            fontWeight: {
                regular: '400',
                medium: '500',
                'semi-bold': '600',
                bold: '700',
            },

            keyframes: {
                "accordion-down": {
                  from: { height: "0" },
                  to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                  from: { height: "var(--radix-accordion-content-height)" },
                  to: { height: "0" },
                },
              },
              animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
              },
        },
        backgroundImage: {
            'radial-gradient':
                'radial-gradient(151.42% 75% at 50% 50%, rgba(84, 179, 66, 0.22) 0%, rgba(84, 179, 66, 0.00) 100%)',
            'nav-radial-gradient': 'radial-gradient(131.23% 65% at 50% 50%, rgba(84, 179, 66, 0.48) 0%, rgba(84, 179, 66, 0.00) 100%) radial-gradient(131.23% 65% at 50% 50%,rgba(221, 240, 217, 0.12), rgba(84, 179, 66, 0.12))',
            'nav-radial-gradient-hover': 'radial-gradient(131.23% 65% at 50% 50%, rgba(84, 179, 66, 0.48) 0%, rgba(84, 179, 66, 0.00) 100%) ',
            'surface-gradient': 'linear-gradient(113deg, rgba(255, 255, 255, 0.05) 15.05%, rgba(255, 255, 255, 0.08) 84.94%)',
            'gradinet-surface-linear': 'linear-gradient(113deg, rgba(255, 255, 255, 0.05) 15.05%, rgba(255, 255, 255, 0.08) 84.94%)',
            'portfolio-info-blur-bg': 'linear-gradient(180deg, rgba(16, 35, 32, 0.32) 0%, #102320 64.64%)'
        },
    },
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    plugins: [require('tailwindcss-animate')],
} satisfies Config;
