/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        nav: "#18222F",
        page: "#2B3441",
        card: "#47566A",
        "card-hover": "#3C4A5E",
        "default-text": "#E5E7EB",
        "blue-accent": "#3B82F6",
        "blue-accent-hover": "#2563EB"
      },
    },
  },
  plugins: [],
};
