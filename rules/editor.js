const maxLen = 120;

export default {
    rules: {
        curly: ["error", "all"],
        "eol-last": "error",
        indent: [
            "error",
            4,
            {
                MemberExpression: 1,
                SwitchCase: 1,
            },
        ],
        "linebreak-style": ["error", "unix"],
        "max-len": ["error", maxLen],
        "no-trailing-spaces": [
            "warn",
            {
                ignoreComments: true,
                skipBlankLines: true,
            },
        ],
        "object-curly-newline": "off",
        "quote-props": [
            "error",
            "as-needed",
            {
                keywords: true,
                numbers: true,
                unnecessary: false,
            },
        ],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "semi-spacing": [
            "error",
            {
                after: true,
                before: false,
            },
        ],
    },
};
