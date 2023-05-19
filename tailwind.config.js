/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}", ],
   theme: {
    'sans': ['Poppins', 'sans-serif'],
      'serif': ['Georgia', 'serif'],
    extend: {},
  },

 plugins: [require("daisyui")],
  
}

