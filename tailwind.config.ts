import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        guard: {
          navy: "#0f1f3d",
          red: "#dc2626",
          amber: "#d97706",
          green: "#16a34a",
          cyan: "#00b4d8",
        },
      },
    },
  },
  plugins: [],
};

export default config;
