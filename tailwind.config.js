/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
        "./src/templates/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'futura-bold': ['FuturaBold', 'sans-serif'],
                'futura-medium': ['FuturaMedium', 'sans-serif'],
                'futura-light': ['FuturaLt', 'sans-serif'],
            },
        },
    },
    plugins: [],
} 