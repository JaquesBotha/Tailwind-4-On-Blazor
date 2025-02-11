/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './**/*.razor',
        './**/*.html',
        './**/*.cshtml',
    ],
    darkMode: ["selector", '[data-mode="dark"]'],
    theme: {
        extend: {},
    },
    plugins: [],
};