/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_color: '#007175',
        secondary_color: '#00F7FF',
        tertiary_color: '#6E3DEB',
        light_color: '#FFFFFF',
        dark_color: '#060113',

        // success_color: '#07bc0c',
        // warning_color: '#f1c40f',
        // error_color: '#e74c3c',
      },
      boxShadow: {
        'bx-1': '0px 10px 15px rgba(0, 0, 0, 0.3)',
      },
      padding: {
        'base_container': '0 calc((100% - 992px) / 2) 0 calc((100% - 992px) / 2)',
        // 'custom_container': '0 calc((100% - 1070px) / 2) 0 calc((100% - 1070px) / 2)',
        // 'ultrawide_container': '0 calc((100% - 1670px) / 2) 0 calc((100% - 1670px) / 2)',
      },
      fontFamily: {
        gilroyLight: ['Gilroy-light', 'sans-serif'],
        gilroyThin: ['Gilroy-thin', 'sans-serif'],
        gilroyBold: ['Gilroy-bold', 'sans-serif'],
      },
      gridTemplateColumns: {
        'standard': 'repeat(auto-fit, minmax(180px, 1fr))',
        'standard2': 'repeat(auto-fit, minmax(350px, 1fr))',
        // 'footerXl': 'repeat(auto-fit, minmax(170px, 1fr))',
        // 'footerSm': 'repeat(auto-fit, minmax(250px, 1fr))',
        // 'resources': 'repeat(auto-fit, minmax(280px, 1fr))',
        // 'tiers': 'repeat(auto-fit, minmax(300px, 1fr))',
      },

    },
  },
  plugins: [],
}