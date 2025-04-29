import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['var(--font-barlow)'],
        bellefair: ['var(--font-bellefair)'],
        barlow_norm: ['var(--font-barlow-norm)']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'custom-width-mq': { 'raw': '((min-width: 1440px) and (max-width: 4440))' },
      }
    },
  },
  variants: {
    extend: {
      textColor: ['active'],
    }
  },
  plugins: [],
};
export default config;
