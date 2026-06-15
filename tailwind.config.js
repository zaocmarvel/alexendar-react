import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#1D1A8F',
        accent: '#3B82F6',
        light: '#F8FAFC',
        dark: '#0F172A',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, #E0E7FF 0%, #93C5FD 100%)',
        'section-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #EFF6FF 100%)',
        'wisdom-gradient': 'linear-gradient(180deg, #EFF6FF 0%, #93C5FD 100%)',
        'footer-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #93C5FD 100%)',
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        bounceSubtle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        }
      },
      animation: {
        blob: "blob 7s infinite",
        "bounce-subtle": "bounceSubtle 3s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.3s ease-out forwards"
      }
    },
  },
  plugins: [
    forms,
    containerQueries,
  ],
}
