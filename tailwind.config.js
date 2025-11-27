/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#ffffff", // White
                secondary: "#f0f9ff", // Sky 50
                accent: "#0284c7", // Sky 600
                text: "#0f172a", // Slate 900
                muted: "#64748b", // Slate 500
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
