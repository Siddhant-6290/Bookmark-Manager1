// import type { Config } from 'tailwindcss'

// const config: Config = {
//   content: [
//     './app/**/*.{js,ts,jsx,tsx}',
//     './pages/**/*.{js,ts,jsx,tsx}',
//     './components/**/*.{js,ts,jsx,tsx}',
//   ],
//   darkMode: 'class', // required for next-themes
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
// export default config




import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // required for next-themes
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};

export default config;
