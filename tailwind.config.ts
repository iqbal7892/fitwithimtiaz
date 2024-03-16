import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: "#000000",
      primary: {
        DEFAULT: "#fc283f",
        200: "#8EA7EC",
        300: "#6183E4",
        500: "#1D4ED8",
        700: "#112F82",
        900: "#0053FF",
      },
      success: {
        DEFAULT: "#34D399",
        400: "#34D399",
        500: "#10B981",
        600: "#1DE181",
      },
      danger: {
        DEFAULT: "#F87171",
        200: "#FECACA",
        400: "#F87171",
        500: "#EF4444",
        700: "#EE2D45",
      },
      gray: {
        DEFAULT: "#9A9AB0",
        50: "#F8FAFC",
        100: "#F2F3F4",
        200: "#E2E8F0",
        300: "#CBD5E1",
        400: "#94A3B8",
        500: "#757F8C",
        600: "#475569",
        700: "#334155",
        800: "#1E293B",
        900: "#2B2D34",
      },
      dark: {
        600: "#111316",
        700: "#262A36",
        800: "#1C212E",
        900: "#131825",
        950: "#080A0C",
      },
      warning: {
        DEFAULT: "#CEA60A",
      },
      neutral: {},
    },
    extend: {
      maxWidth: {
        '300': '75rem',
        '350': '87.5rem'
      },
      placeholderColor: {
        primary: "var(--color-primary)",
      },
      screens: {
        "ms-xl": { max: "1279px" },
        // => @media (max-width: 1279px) { ... }
        "ms-lg": { max: "1023px" },
        // => @media (max-width: 1023px) { ... }
        "ms-md": { max: "767px" },
        // => @media (max-width: 767px) { ... }
        "ms-sm": { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
      boxShadow: {
        custom: "0px 4px 10px 0px rgba(255, 255, 255, 0.10)",
      },
    },
  },
  plugins: [],
};
export default config;
