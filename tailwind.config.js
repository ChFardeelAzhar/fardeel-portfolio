/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxs: "24rem",
      xs: "30rem",
      sm: "40rem",
      md: "48rem",
      lg: "64rem",
      custom: "75.5rem",
      xl: "80rem",
      "2xl": "96rem",
    },
    extend: {
      fontFamily: {
        sans: [
          "Switzer",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      boxShadow: {
        button:
          "0px 2px 2px -1.5px rgba(0, 0, 0, 0.32), 0px 4.4px 4.4px -2.25px rgba(0, 0, 0, 0.30), 0px 9.8px 9.8px -3px rgba(0, 0, 0, 0.25), 0px 25px 25px -3.75px rgba(0, 0, 0, 0.11), 0px -5px 5px -3.75px rgba(0, 0, 0, 0.11)",
        "card-hover": "0 20px 40px -15px rgba(0, 0, 0, 0.05)",
      },
      aspectRatio: {
        "12/10": "12 / 10",
      },
      keyframes: {
        "fill-from-left": {
          "0%, 100%": { backgroundPosition: "100% 100%" },
          "50%": { backgroundPosition: "0 0" },
        },
        "wiggle-right": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(4px)" },
        },
      },
      animation: {
        "fill-from-left": "fill-from-left 5s ease-out infinite",
        "wiggle-right": "wiggle-right 0.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
