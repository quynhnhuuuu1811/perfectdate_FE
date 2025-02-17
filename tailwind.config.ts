import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: "#11A253",
        pink:"#FCA4E0",
        skin:"#FDEDD4",
        blue:"#155FCC",
        red:"#E93729",
      },
    },
  },
  plugins: [],
} satisfies Config;
