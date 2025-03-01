/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom': {'min': '640px', 'max': '1090px'},
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        aboreto: ['Aboreto', 'Arial', 'sans-serif', 'system-ui'],
        notoserif: ['Noto Serif', 'Arial', 'sans-serif', 'system-ui']
      },
    },
  },
  plugins: [],
};
