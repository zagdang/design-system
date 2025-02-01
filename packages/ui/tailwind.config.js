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
      borderWidth: {
        0.5: '0.5px',
      },
      width: {
        30: '7.25rem' //116px
      },
      padding: {
        1.3: '0.313rem', // 5px
        3.5 : '0.781rem' // 12.5px
      },
      height: {
        5.5: '1.375rem', // 22px
        8.5: '2.188rem' // 35px
      },
      fontSize: {
        xxs: '0.625rem', // 10px
        '3xs' : '0.5rem', // 8px
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },

      colors: {
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
        primary: 'hsl(var(--primary-base))',
        secondary: 'hsl(var(--secondary-base))',
        accent: 'hsl(var(--accent-base))',
        neutral: {
          white: {
            DEFAULT: 'hsl(var(--white))',
            300: 'hsl(var(--white-300))',
            500: 'hsl(var(--white-500))',
          },
          100: 'hsl(var(--neutral-100))',
          200: 'hsl(var(--neutral-200))',
          300: 'hsl(var(--neutral-300))',
          400: 'hsl(var(--neutral-400))',
          500: 'hsl(var(--neutral-500))',
          520: 'hsl(var(--neutral-520))',
          540: 'hsl(var(--neutral-540))',
          560: 'hsl(var(--neutral-560))',
          600: 'hsl(var(--neutral-600))',
          black: 'hsl(var(--neutral-black))',
        },
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