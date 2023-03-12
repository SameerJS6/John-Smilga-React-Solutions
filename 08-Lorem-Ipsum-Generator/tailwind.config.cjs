/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Background Colors
        onBackground: "var(--md-sys-color-on-background)",
        // Primary
        primary: "rgb(var(--md-sys-color-primary))",
        onPrimary: "rgb(var(--md-sys-color-on-primary))",
        // Secondary
        secondary: "rgb(var(--md-sys-color-secondary-container))",
        onSecondary: "rgb(var(--md-sys-color-on-secondary-container))",
        // Tertiary
        tertiary: "rgb(var(--md-sys-color-tertiary-container))",
        onTertiary: "rgb(var(--md-sys-color-on-tertiary-container))",
        // Error
        error: "rgb(var(--md-sys-color-error))",
        onError: "rgb(var(--md-sys-color-on-error))",
        // Input
        inputBorder: "rgb(var(--md-sys-color-on-surface-rgb) / 0.6)",
        hoverInputBorder: "rgb(var(--md-sys-color-on-surface-rgb) / 0.87)",
        // Hovers
        hover: "rgba(var(--md-sys-color-primary) / 0.08)",
        primaryHover: "rgba(var(--md-sys-color-primary) / 0.05)",
        hoverError: "rgb(var(--md-sys-color-error) / 0.08)",
      },
      boxShadow: {
        elevation1: "var(--md-sys-elevation-1)",
        elevation2: "var(--md-sys-elevation-2)",
        elevation3: "var(--md-sys-elevation-3)",
      },
    },
  },
  plugins: [],
};
