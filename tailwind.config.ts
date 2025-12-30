import type { Config } from "tailwindcss";

const config: Config = {
  content:  [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#F08080",
          dark: "#E56B6B",
          light: "#FFA5A5",
        },
        vexira: {
          coral: "#F08080",
          "coral-dark": "#E56B6B",
          "coral-light": "#FFA5A5",
          "graphics-pink": "#FF8C94",
          "els-pink": "#F5A3A3",
          "clothing-pink": "#E97979",
        },
      },
    },
  },
  plugins: [],
};
export default config;