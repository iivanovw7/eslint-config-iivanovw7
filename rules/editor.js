const maxLen = 120;

module.exports = {
    rules: {
        "eol-last": "error",
        "linebreak-style": ["error", "unix"],
        "no-trailing-spaces": [
            "warn",
            {
                skipBlankLines: true,
                ignoreComments: true,
            },
        ],
        curly: ["error", "all"],
        "object-curly-newline": "off",
        indent: [
            "error",
            4,
            {
                MemberExpression: 1,
                SwitchCase: 1,
            },
        ],
        "max-len": ["error", maxLen],
        "quote-props": [
            "error",
            "as-needed",
            {
                keywords: true,
                numbers: true,
                unnecessary: false,
            },
        ],
        quotes: [
            "error",
            "double",
            {
                avoidEscape: true,
            },
        ],
        semi: ["error", "always"],
        "semi-spacing": [
            "error",
            {
                before: false,
                after: true,
            },
        ],
    },
};
