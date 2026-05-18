import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './config/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Heritage Greens — design tokens
        primary:           '#002103',
        'primary-container': '#103812',
        secondary:         '#52652a',
        'secondary-container': '#d2e8a0',
        'tertiary-fixed':  '#e5e96d',
        background:        '#f9f9f9',
        surface:           '#ffffff',
        'on-surface':      '#1a1c1c',
        'on-surface-variant': '#42493f',
        outline:           '#72796f',
        'outline-variant': '#c2c9bd',
      },
    },
  },
  plugins: [],
};

export default config;
