module.exports = {
    "extends": [
        "plugin:tailwindcss/recommended",
        require.resolve("./rules/tailwind"),
    ],
    "plugins": ["tailwindcss"],
};
