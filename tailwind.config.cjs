/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./*.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0881a3",
        "primary-hover": "#077292",
        "primary-dark": "#055d75",
        "background-light": "#f8f9fc",
        "background-dark": "#101622",
        "surface-light": "#ffffff",
        "surface-dark": "#1f2937",
        "border-light": "#e5e7eb",
        "border-dark": "#374151",
        "text-main-light": "#111827",
        "text-main-dark": "#f3f4f6",
        "text-muted-light": "#6b7280",
        "text-muted-dark": "#9ca3af",
        blue: {
          50: "#e9f7fa",
          100: "#d1eef4",
          200: "#a8dde8",
          300: "#77cadd",
          400: "#3fb4cc",
          500: "#0881a3",
          600: "#077292",
          700: "#055d75",
          800: "#04485d",
          900: "#033544",
        },
      },
      fontFamily: {
        display: ["Lexend", "Noto Sans", "sans-serif"],
        body: ["Noto Sans", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
