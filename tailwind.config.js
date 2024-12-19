/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{css,js,ts,jsx,tsx}", // Scanning these files for class names
  ],
  theme: {
    extend: {
      // Custom Keyframes for Animations
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      // Animations using defined keyframes
      animation: {
        fadeIn: "fadeIn 1s ease-out",
        slideUp: "slideUp 1s ease-out",
      },
      // Custom Fonts
      fontFamily: {
        booGalo: ['BooGalo', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        lato: ['Lato', 'sans-serif'], // Example of a new custom font
      },
      // Custom Colors
      colors: {
        primary: '#1a73e8', // Modern blue shade for primary color
        secondary: '#fdd835', // Yellow shade for accents
        dark: '#121212', // Dark shade for backgrounds
      },
      // Box Shadows
      boxShadow: {
        'custom-glow': '0 4px 15px rgba(255, 215, 0, 0.3)', // Glow effect
      },
      // Gradients
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right, #1a73e8, #fdd835)',
      },
      // Add Backdrop Filters for Glassmorphism
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Optional: Add forms plugin for better form styling
    require('@tailwindcss/typography'), // Optional: Enhance content-rich pages
  ],
};
