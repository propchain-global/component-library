export const dimensions = {
  spacing: {
    none: "0",
    "0.125x": "0.5px",
    px: "1px",
    "0.5x": "2px",
    "1x": "4px",
    "1.5x": "6px",
    "2x": "8px",
    "3x": "12px",
    "4x": "16px",
    "5x": "20px",
    "6x": "24px",
    "8x": "32px",
    "10x": "40px",
    "12x": "48px",
    "16x": "64px",
    "20x": "80px",
    "24x": "96px",
    "32x": "128px",
    "48x": "192px",
    "50x": "200px",
    "54": "216px",
    "∞x": "9999px",
    base: "16px",
  },
  size: {
    xl: "48px",
    l: "40px",
    m: "32px",
    "m-chip": "32px",
    "m-tag": "28px",
    s: "24px",
    xs: "20px",
    "2xs": "16px",
    base: "16px",
  },
  blur: {
    // Background Blur
    none: "0px",
    sm: "4px",
    md: "12px",
    lg: "32px",
    xl: "64px",
    custom: "999px",

    // Layer Blur

    "2": "2px",
    "small-8": "8px",
    "small-10": "10px",
    "medium-12": "12px",
    "medium-16": "16px",
    "large-24": "24px",
    "large-48": "48px",
    "xlarge-96": "96px",
    "2xlarge-144": "144px",
    "3xlarge-288": "288px",
    "ultimate-720": "500px",
  },
  boxShadow: {
    "level-1": "2px",
    "level-2": "4px",
    "level-3": "8px",
    "level-4": "16px",
    "level-5": "20px",
    "level-6": "32px",
    none: "0",
    "negative-1": "-2px",
    "negative-2": "-4px",
    "negative-3": "-8px",
    "negative-4": "-16px",
    "negative-5": "-20px",
    "negative-6": "-32px",
  },
};

export const borderWidth = {
  none: dimensions.spacing.none,
  xs: dimensions.spacing["0.125x"],
  s: dimensions.spacing.px,
  m: dimensions.spacing["0.5x"],
  l: dimensions.spacing["1x"],
};

export const cornerRadius = {
  none: dimensions.spacing.none,
  "2xs": dimensions.spacing["0.5x"],
  xs: dimensions.spacing["1x"],
  s: dimensions.spacing["1.5x"],
  m: dimensions.spacing["2x"],
  l: dimensions.spacing["3x"],
  xl: dimensions.spacing["4x"],
  "2xl": dimensions.spacing["5x"],
  "3xl": dimensions.spacing["6x"],
  custom: dimensions.spacing["∞x"],
};
