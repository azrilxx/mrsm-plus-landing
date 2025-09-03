/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Jeton-inspired MRSM Plus palette
        primary: {
          50: '#f0f9f0',
          100: '#dcf2dc',
          200: '#bce5bc',
          300: '#8dd18d',
          400: '#5bb55b',
          500: '#2D7A2D', // Main brand green
          600: '#256825',
          700: '#1f521f',
          800: '#1c431c',
          900: '#1a4a1a',
        },
        accent: {
          50: '#fffdf0',
          100: '#fffae0',
          200: '#fff2c0',
          300: '#ffe680',
          400: '#FFD700', // Malaysian gold
          500: '#f5c842',
          600: '#e6a800',
          700: '#cc9600',
          800: '#a67c00',
          900: '#8a6600',
        },
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3B82F6', // Trust blue
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Fluid typography (Jeton-inspired)
        'hero': 'clamp(2.5rem, 5vw, 4rem)',
        'h1': 'clamp(2rem, 4vw, 3rem)',
        'h2': 'clamp(1.5rem, 3vw, 2.25rem)',
        'h3': 'clamp(1.25rem, 2.5vw, 1.75rem)',
        'body': 'clamp(1rem, 1.5vw, 1.125rem)',
        'small': 'clamp(0.875rem, 1vw, 1rem)',
      },
      lineHeight: {
        'tight': '1.25',
        'normal': '1.6',
        'relaxed': '1.75',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'gentle-bounce': 'gentleBounce 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in': 'fadeIn 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        gentleBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))'
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(45, 122, 45, 0.1)',
        'elevated': '0 8px 30px rgba(45, 122, 45, 0.15)',
        'glow': '0 0 30px rgba(255, 215, 0, 0.3)',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
    },
  },
  plugins: [],
}