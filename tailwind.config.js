/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cobalt: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#172554',
        },
        warmOrange: {
          50: '#fff7ed',
          100: '#ffedd5',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
        },
        studio: {
          black: '#0a0f1d',
          dark: '#0f172a',
          cardDark: '#131b2e',
          charcoal: '#1e293b',
          muted: '#64748b',
          lightMuted: '#94a3b8',
          border: '#e2e8f0',
          borderDark: '#1e293b',
          bgLight: '#f8fafc',
          white: '#ffffff',
        }
      },
      fontFamily: {
        display: ['Space Grotesk', 'Syne', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.12em',
      },
      maxWidth: {
        '8xl': '88rem',
      }
    },
  },
  plugins: [],
};
