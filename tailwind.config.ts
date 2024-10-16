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
        "primary-font": "Be Vietnam Pro",
        "secondary-font": "Poppins",
      },
      colors: {
        btnPrimary: "#0000fe",
        headingText: "#02015a",
        textPrimary: "#0000ee",
        textSecondary: "#9ca3bd",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
