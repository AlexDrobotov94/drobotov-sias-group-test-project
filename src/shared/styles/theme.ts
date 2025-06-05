// TODO: px to rem

export const theme = {
  colors: {
    primary: "#6366f1",
    foreground: "#4b5563",
    secondary: "#6b7280",
    border: "#f3f4f6",
    white: "#fff",

    doneForeground: "#4f46e5",
    doneBackground: "#e0e7ff",

    successForeground: "#16a34a",
    successBackground: "#dcfce7",

    warningForeground: "#ca8a04",
    warningBackground: "#fef9c3",

    errorForeground: "#dc2626",
    errorBackground: "#fee2e2",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    base: "12px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "40px",
    "3xl": "48px",
  },
  rounded: {
    sm: "4px",
    md: "8px",
    base: "12px",
    lg: "16px",
    full: "9999px",
  },
  fontSizes: {
    small: "12px",
    medium: "14px",
    base: "16px",
    md: "18px",
    large: "20px",
    xl: "24px",
    "2xl": "30px",
    h1: "48px",
    h2: "36px",
    h3: "30px",
    h4: "24px",
  },
};

export type AppTheme = typeof theme;
