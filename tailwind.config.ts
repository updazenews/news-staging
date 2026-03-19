import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: '#252a33',
          blue: '#1f8ad7',
          orange: '#f15a29',
          purple: '#8e44ad',
          green: '#45b649',
          slate: '#5f6672',
          surface: '#f5f7fb'
        }
      },
      boxShadow: {
        soft: '0 12px 24px rgba(37, 42, 51, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
