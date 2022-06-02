module.exports = {
    content: [],
    theme: {
        fontFamily: {
            header: ["Space Grotesk", "sans-serif"],
        },
        extend: {
            colors: {},
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        require("@tailwindcss/line-clamp"),
    ],
};
