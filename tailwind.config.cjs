/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./*.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#135bec",
        "primary-hover": "#2563eb",
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
