const path = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        path.join(__dirname, "html&css", "shivani", "**", "*.{html,js}")
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Example P3-ready colors (fallback handled by browser or valid CSS)
                primary: 'oklch(0.5 0.2 250)', // Vibrant Blue
                secondary: 'oklch(0.8 0.1 200)', // Soft Cyan
            },
            container: {
                center: true,
                padding: '1rem',
            },
            animation: {
                blob: "blob 7s infinite",
            },
            keyframes: {
                blob: {
                    "0%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                    "33%": {
                        transform: "translate(30px, -50px) scale(1.1)",
                    },
                    "66%": {
                        transform: "translate(-20px, 20px) scale(0.9)",
                    },
                    "100%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/container-queries'),
    ],
}
