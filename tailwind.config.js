/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Brand Colors
      colors: {
        primary: {
          DEFAULT: '#4f9d2f',
          50: '#f0f9ec',
          100: '#e1f3df', 
          200: '#c6e8bf',
          300: '#a0d895',
          400: '#78c266',
          500: '#4f9d2f',
          600: '#3d7d28',
          700: '#316325',
          800: '#2a4f21',
          900: '#24421f',
          950: '#10240f',
          deep: '#287a38',
          light: '#78b82a',
          subtle: '#e8f3df',
        },
        accent: {
          DEFAULT: '#8fbd24',
          50: '#f4f8e8',
          100: '#e8f1d0',
          200: '#d2e4a6',
          300: '#b4d471',
          400: '#9ac542',
          500: '#8fbd24',
          600: '#6f9f1c',
          700: '#547b1a',
          800: '#46621a',
          900: '#3c531b',
          deep: '#6f9f1c',
          light: '#b4d94a',
          subtle: '#f0f7d9',
        },
        // Semantic Colors  
        surface: {
          cream: '#f7f9f3',
          paper: '#ffffff', 
          DEFAULT: '#eef3e9',
          raised: '#e1e9dc',
        },
        ink: {
          DEFAULT: '#18321f',
          medium: '#36533c', 
          muted: '#68766b',
          light: '#9aa69c',
        },
        line: {
          DEFAULT: '#dce5d8',
          strong: '#c5d2c0',
        },
        success: {
          DEFAULT: '#3f8f3c',
          light: '#e1f1df',
        },
        danger: {
          DEFAULT: '#c94343', 
          light: '#fbe5e5',
        },
        info: {
          DEFAULT: '#3185a8',
          light: '#e1f1f7', 
        },
      },
      
      // Layout
      spacing: {
        'header': '4.5rem',
        'sidebar': '17.5rem', 
        'reading': '40rem',
        'page': '72rem',
      },
      
      // Typography
      fontFamily: {
        'ui-ar': ['var(--font-ui-ar)'],
        'ui-en': ['var(--font-ui-en)'], 
        'body-ar': ['var(--font-body-ar)'],
      },
      
      // Border Radius
      borderRadius: {
        DEFAULT: '8px',
        lg: '12px', 
      },
      
      // Shadows
      boxShadow: {
        sm: '0 1px 2px 0 rgba(24, 50, 31, 0.05)',
        DEFAULT: '0 4px 6px -1px rgba(24, 50, 31, 0.08), 0 2px 4px -1px rgba(24, 50, 31, 0.05)',
        lg: '0 10px 15px -3px rgba(24, 50, 31, 0.1), 0 4px 6px -2px rgba(24, 50, 31, 0.06)',
      },
    },
  },
  plugins: [],
}