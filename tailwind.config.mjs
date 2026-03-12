/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#ffffff',
          surface: '#f5f7fa',
          card: '#ffffff',
          elevated: '#edf1f7',
        },
        border: {
          DEFAULT: '#e2e8f0',
          light: '#cbd5e1',
        },
        accent: {
          DEFAULT: '#e8511e',
          light: '#ff6b39',
          dark: '#c9430f',
        },
        ink: {
          DEFAULT: '#0f172a',
          muted: '#475569',
          subtle: '#94a3b8',
        },
        nav: {
          DEFAULT: '#1a2236',
          border: '#242e45',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};
