/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Background Colors
        onBackground: "var(--on-background)",
        // Primary
        primary: "rgb(var(--primary))",
        onPrimary: "rgb(var(--on-primary))",
        // Secondary
        secondary: "rgb(var(--secondary-container))",
        onSecondary: "rgb(var(--on-secondary-container))",
        // Tertiary
        tertiary: "rgb(var(--tertiary-container))",
        onTertiary: "rgb(var(--on-tertiary-container))",
        // Error
        error: "rgb(var(--error))",
        onError: "rgb(var(--on-error))",
        // Input
        inputBorder: "rgb(var(--on-surface-rgb) / 0.6)",
        hoverInputBorder: "rgb(var(--on-surface-rgb) / 0.87)",
        // Hovers
        hover: "rgba(var(--primary) / 0.08)",
        primaryHover: "rgba(var(--primary) / 0.05)",
        hoverError: "rgb(var(--error) / 0.08)",
      },
      boxShadow: {
        elevation1: "var(--elevation-1)",
        elevation2: "var(--elevation-2)",
        elevation3: "var(--elevation-3)",
      },
    },
  },
  plugins: [],
};
