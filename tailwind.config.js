/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#061A2F',
        brand: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0798D0',
          600: '#0369A1',
          700: '#075985',
          800: '#0C4A6E',
          900: '#0F172A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.03)',
        'card-hover': '0 22px 55px rgba(7,152,208,0.16), 0 8px 20px rgba(0,0,0,0.06)',
        'glass': '0 8px 32px rgba(0,0,0,0.06)',
        'glow': '0 0 40px rgba(7,152,208,0.12)',
        'btn': '0 4px 14px rgba(7,152,208,0.3)',
        'btn-hover': '0 8px 25px rgba(7,152,208,0.4)',
      },
      borderRadius: {
        '4xl': '28px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
