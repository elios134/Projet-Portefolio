/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Palette "Cockpit / HUD" — bleu nuit spatial + néon cyan/bleu
        bg: {
          DEFAULT: '#04060d', // fond principal
          alt: '#070b16', // fond alternatif
        },
        panel: {
          DEFAULT: '#0a1020', // panneaux
          alt: '#0d1526',
        },
        hud: {
          cyan: '#22d3ee',
          blue: '#3b9dff',
          ice: '#9fe8ff',
          ok: '#37e39b',
          amber: '#ffb347',
          danger: '#ff5d5d',
        },
        line: {
          DEFAULT: 'rgba(120,180,255,0.14)',
          strong: 'rgba(120,190,255,0.35)',
        },
        content: {
          DEFAULT: '#dbe7ff',
          muted: '#7d8ba8',
          dim: '#4c5a78',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Chakra Petch"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        container: '1240px',
      },
      boxShadow: {
        panel: '0 30px 80px rgba(0,0,0,0.6)',
        glow: '0 0 22px rgba(34,211,238,0.4)',
      },
      keyframes: {
        pulse: {
          '0%': { boxShadow: '0 0 0 0 rgba(55,227,155,0.55)' },
          '70%': { boxShadow: '0 0 0 9px rgba(55,227,155,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(55,227,155,0)' },
        },
        scan: {
          '0%': { top: '40px', opacity: '0' },
          '10%': { opacity: '0.6' },
          '50%': { top: '80%', opacity: '0.5' },
          '90%': { opacity: '0' },
          '100%': { top: '40px', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        pulse: 'pulse 1.8s infinite',
        scan: 'scan 4.5s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
