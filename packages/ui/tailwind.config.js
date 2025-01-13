/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './.storybook/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        fontFamily: {
          Poppins: ['Poppins', 'sans-serif'],
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: 'hsl(var(--e4007f))',
        secondary: 'hsl(var(--0062ff))',
        third: 'hsl(var(--6ee447))',
        sub100 : 'hsl(var(--fff))',
        sub200: 'hsl(var(--efefef))',
        sub300: 'hsl(var(--c9caca))',
        sub400: 'hsl(var(--b5b5b6))',
        sub500: 'hsl(var(--8e8d93))',
        sub600: 'hsl(var(--5c5b60))',
        sub700: 'hsl(var(--232325))',
        sub800: 'hsl(var(--000))',
        error: 'hsl(var(--error))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};