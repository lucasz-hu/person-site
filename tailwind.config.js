/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                default: "url('../public/background.jpg')",
            },
            screens: {
                "3xl": "1600px",
            },
        },
    },
    plugins: [],
};
