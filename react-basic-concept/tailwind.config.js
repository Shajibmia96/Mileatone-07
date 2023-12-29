/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  themes: [
    {
      mytheme: {
      
"primary": "#ffffff",
      
"secondary": "#99ffff",
      
"accent": "#00ffff",
      
"neutral": "#73ffff",
      
"base-100": "#64ffff",
      
"info": "#ffffff",
      
"success": "#00ffff",
      
"warning": "#ffffff",
      
"error": "#ffffff",
      },
    },
  ],

  plugins: [require("daisyui")],
}

