/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff8d2f',
        secondary: '#000000',
        background: '#0a0a0a',
        foreground: '#ffffff',
        card: '#1a1a1a',
        'card-foreground': '#ffffff',
        border: '#333333',
        muted: '#262626',
        'muted-foreground': '#a3a3a3',
        ring: '#ff8d2f', // Added: Define ring color for focus states
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #ff8d2f 0%, #ff6b1a 100%)',
      },
    },
  },
  plugins: [],
}