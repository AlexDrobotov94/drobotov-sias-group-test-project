export const theme = {
  colors: {
    primary: "#6366f1",
    foreground: "#4b5563",
    secondary: "#6b7280",
    border: "#f3f4f6",
    borderInput: "#ccc",
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
    xs: "0.25rem", // 4px
    sm: "0.5rem", // 8px
    base: "0.75rem", // 12px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
    "2xl": "2.5rem", // 40px
    "3xl": "3rem", // 48px
  },
  rounded: {
    sm: "0.25rem", // 4px
    xs: "0.375rem", // 6px
    md: "0.5rem", // 8px
    base: "0.75rem", // 12px
    lg: "1rem", // 16px
    full: "9999px", // special case (no conversion)
  },
  fontSizes: {
    small: "0.75rem", // 12px
    medium: "0.875rem", // 14px
    base: "1rem", // 16px
    md: "1.125rem", // 18px
    large: "1.25rem", // 20px
    xl: "1.5rem", // 24px
    "2xl": "1.875rem", // 30px
    h1: "3rem", // 48px
    h2: "2.25rem", // 36px
    h3: "1.875rem", // 30px
    h4: "1.5rem", // 24px
  },
  shadows: {
    primary:
      "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
    input: "0 0 0 0.125rem rgba(60, 31, 208, 0.2)", // 2px → 0.125rem
  },
  gradients: {
    primary: "linear-gradient(to right, #6366f1, #9333ea)",
  },
};

export type AppTheme = typeof theme;
