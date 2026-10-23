import type { Config } from "tailwindcss";

// Palette of aibeva.com (v3.2): dark navy base, one site accent (AIBguardian = mint).
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#070c1a", // bg
          900: "#0f1830", // surface
          800: "#111d3a", // tint
          700: "#1f2c4d", // rule
        },
        rule: "#1f2c4d",
        ink: "#f3f6fc",
        soft: "#a9b5cc",
        faint: "#75829e",
        primary: { DEFAULT: "#4d8bff", hover: "#2f6bff" },
        accent: { DEFAULT: "#2fd6b8", ink: "#04211c" },
      },
      fontFamily: {
        sans: ['"Segoe UI Variable Text"', '"Segoe UI Variable Display"', '"Segoe UI"', "system-ui", "-apple-system", '"Helvetica Neue"', "Arial", "sans-serif"],
        display: ['"Segoe UI Variable Display"', '"Segoe UI"', "system-ui", "-apple-system", '"Helvetica Neue"', "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
