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
          950: "#080000",
          900: "#120000",
          800: "#1c0000",
          700: "#2d0000",
        },
        brand: {
          red:     "#ef4444",
          crimson: "#dc2626",
          rose:    "#f87171",
          light:   "#fca5a5",
          orange:  "#f97316",
          green:   "#10b981",
          amber:   "#f59e0b",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-mesh": "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(239,68,68,0.3), transparent), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(220,38,38,0.15), transparent)",
        "card-shine": "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 60%)",
      },
      animation: {
        "fade-up":    "fadeUp 0.6s ease both",
        "fade-in":    "fadeIn 0.5s ease both",
        "float":      "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "scan":       "scan 3s linear infinite",
      },
      keyframes: {
        fadeUp: { "0%": { opacity: "0", transform: "translateY(24px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        float:  { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        scan:   { "0%": { transform: "translateY(-100%)" }, "100%": { transform: "translateY(100vh)" } },
      },
      boxShadow: {
        "glass":     "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
        "glow-red":  "0 0 40px rgba(239,68,68,0.3)",
        "card-hover":"0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(239,68,68,0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
