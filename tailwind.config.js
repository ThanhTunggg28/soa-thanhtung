/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  prefix: '',
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include all source files
    './public/index.html', // Include the entry HTML file if needed
  ],
  theme: {
    colors: {
      primary: '#F2542D',
      'primary-hover': '#CA3E1B',
      secondary: '#562C2C',
      'secondary-hover': '#FFEDE8',
      white: '#FFFFFF',
    },
    screens: {
      sm: '375px',
      // => @media (min-width: 640px) { ... }

      md: '834px',
      // => @media (min-width: 768px) { ... }

      lg: '1194px',
      // => @media (min-width: 1024px) { ... }

      xl: '1920px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
