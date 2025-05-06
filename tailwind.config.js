/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7C3AED',
          dark: '#6D28D9',
          light: '#A78BFA',
        },
        secondary: {
          DEFAULT: '#0F172A',
          dark: '#0D1323',
          light: '#1E293B',
        },
        accent: {
          DEFAULT: '#22D3EE',
          dark: '#0EA5E9',
          light: '#BAE6FD',
        },
        success: {
          DEFAULT: '#10B981',
          light: '#D1FAE5',
        },
        warning: {
          DEFAULT: '#F59E0B',
          light: '#FEF3C7',
        },
        error: {
          DEFAULT: '#EF4444',
          light: '#FEE2E2',
        },
      },
      boxShadow: {
        smooth: '0 10px 30px -5px rgba(0, 0, 0, 0.05)',
        card: '0 2px 8px 0 rgba(0, 0, 0, 0.04)',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'var(--tw-prose-body)',
            lineHeight: '1.75',
          },
        },
      },
    },
  },
  plugins: [],
};