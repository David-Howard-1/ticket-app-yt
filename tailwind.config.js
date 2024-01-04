/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        nav: '#EEEDE8',
        page: '#F4F5F6',
        tomato: '#F06543',
        card: '#313638',
        'card-hover': '#1C2021',
        'brown-accent': '#E17714',
        'brown-accent-hover': '#A9590F',
        'default-text': '#131516',
      },
    },
  },
  plugins: [],
};
