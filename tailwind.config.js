/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      fontFamily: {
        cabin: ["Cabin"],
      },
      backgroundColor: {
        "blue-500": "#0087E8", // Add your actual color value here
        "green-600": "#24C72B",
        "white-500":"#ffffff",// Add your actual color value here
      },
      textColor: {
        white: "#ffffff", // Add your actual color value here
        green: "#24C72B", // Add your actual color value here
      },
    },
  },
  plugins: [],
};
