/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Palette reprise du site en prod (style.css :root)
        bg: {
          DEFAULT: '#050505', // --bg-main
          alt: '#0e0e0e', // --bg-alt
          card: '#141414', // --bg-card
        },
        accent: {
          DEFAULT: '#ffb347', // --accent
          deep: '#d47a2f', // bordures / boutons
          orange: '#FF840A', // dégradés (hero / footer)
          brown: '#963C04', // dégradés (hero / footer)
        },
        content: {
          DEFAULT: '#f5f5f5', // --text-main
          muted: '#a0a0a0', // --text-muted
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['"Bebas Neue"', 'sans-serif'],
      },
      borderRadius: {
        lg: '18px',
        xl: '26px',
      },
      maxWidth: {
        container: '1440px',
      },
      boxShadow: {
        soft: '0 18px 40px rgba(0, 0, 0, 0.6)',
        glow: '0 0 20px rgba(255, 179, 71, 0.25)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(103.65% 76.15% at 51.91% 100%, #FF840A 0%, #963C04 29.67%, #050505 100%)',
        'footer-glow':
          'radial-gradient(127.08% 93.36% at 50% 114.21%, #FF840A 0%, #963C04 36.54%, #050505 98.56%)',
      },
    },
  },
  plugins: [],
}
