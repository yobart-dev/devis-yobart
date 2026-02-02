/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                yobart: {
                    purple: "#231838",
                    pink: "#e50554",
                    cyan: "#00ade3",
                    yellow: "#f7ab00",
                    green: "#009e61",
                }
            }
        },
    },
    plugins: [],
}