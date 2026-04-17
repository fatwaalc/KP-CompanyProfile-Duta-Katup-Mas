/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        // PT. Duta Katup Mas Brand Colors
        'dkm-dark': '#002157',
        'dkm-blue': '#4169e1',
        'dkm-navy': '#1e90ff',
        'dkm-crimson': '#dc143c',
        'dkm-dark-red': '#a00a28',
        'dkm-light-blue': '#e8f0f7',
        'dkm-gradient-light': '#d4e3f0',
      },
      fontFamily: {
        sans: ['system-ui', 'segoe-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        'xl': '0.75rem',
      },
      boxShadow: {
        'dkm': '0 4px 15px rgba(0, 0, 0, 0.08)',
        'dkm-hover': '0 20px 50px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'slide-in-down': 'slideInDown 0.4s ease-out',
        'slide-in-up': 'slideInUp 0.4s ease-out',
        'slide-in-left': 'slideInLeft 0.4s ease-out',
      },
      keyframes: {
        slideInDown: {
          from: {
            transform: 'translateY(-20px)',
            opacity: '0',
          },
          to: {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        slideInUp: {
          from: {
            transform: 'translateY(20px)',
            opacity: '0',
          },
          to: {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        slideInLeft: {
          from: {
            transform: 'translateX(-20px)',
            opacity: '0',
          },
          to: {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
      },
    },
  },
}
