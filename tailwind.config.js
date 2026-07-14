/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        page: "#eef1f5",
        card: "#f5f2ea",
        "hero-top": "#b8d0ea",
        "hero-bottom": "#92b5da",
        dark: "#0f1a2b",
        cobalt: "#2d5aa8",
        navy: "#1e3a6b",
        sky: "#6a9ad4",
        "mid-blue": "#4a7ab8",
        "soft-blue": "#eaf1fb",
        primary: "#0f1a2b",
        body: "#2a3a56",
        muted: "#5a6a80",
        subtle: "#97a4b8",
        "on-dark": "#eaf1fb",
        "on-dark-muted": "#b8c5d8",
        // Legacy tokens for project detail pages
        base: "#fcfcfc",
        txt: "#67597A",
        input: "#efefef",
        "dark-base": "#1D2125",
        "dark-text": "#F7F8F9",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0 40px 80px -30px rgba(15,26,43,0.25)",
      },
    },
  },
  plugins: [require("daisyui")],
};
