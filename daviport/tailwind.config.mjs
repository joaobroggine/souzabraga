/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        dmsans: ['DM Sans', 'Arial', 'sans-serif', 'system-ui'],
        sourceserif: ['Source Serif', 'Arial', 'sans-serif', 'system-ui']
      },
    },
  },
  plugins: [],
};
