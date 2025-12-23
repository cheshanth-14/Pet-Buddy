/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#030712', // Very dark blue/black
          paper: '#111827',   // Slightly lighter for cards
        },
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6', // Keep teal base but maybe brighter for neon
          600: '#0d9488',
          700: '#0f766e',
          neon: '#00f2ea', // Bright neon cyan
        },
        secondary: {
          neon: '#ff0050', // Neon pink-red
        },
        accent: {
          purple: '#b026ff', // Neon purple
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'], // IF we could add a google font, otherwise stick to sans
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #14b8a6 0deg, #00f2ea 180deg, #b026ff 360deg)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 3s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px #14b8a6' },
          '50%': { opacity: '0.5', boxShadow: '0 0 10px #14b8a6' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon': '0 0 10px rgba(0, 242, 234, 0.3)',
        'neon-strong': '0 0 20px rgba(0, 242, 234, 0.6)',
      }
    },
  },
  plugins: [],
}