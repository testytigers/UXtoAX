/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg:           '#FAFAF8',
        surface:      '#F4F2EE',
        elevated:     '#EDEAE3',
        border:       '#E8E4DC',
        accent:       '#1C3FBD',
        'accent-deep':'#1532A8',
        'accent-light':'#EEF1FB',
        primary:      '#1A1A1A',
        muted:        '#6B6870',
        subtle:       '#9A969E',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['"Open Sans"', 'sans-serif'],
      },
      animation: { 'fade-up': 'fadeUp 0.7s cubic-bezier(.16,1,.3,1) forwards' },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
