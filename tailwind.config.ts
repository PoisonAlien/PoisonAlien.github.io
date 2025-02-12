
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#D6BCFA",
          foreground: "#1A1F2C",
        },
        secondary: {
          DEFAULT: "#E5DEFF",
          foreground: "#1A1F2C",
        },
        accent: {
          DEFAULT: "#C8C8C9",
          foreground: "#1A1F2C",
        },
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-slow": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "fade-in-slow": "fade-in-slow 0.8s ease-out",
      },
      backgroundImage: {
        'dots': 'radial-gradient(#403E43 0.5px, transparent 0.5px)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
