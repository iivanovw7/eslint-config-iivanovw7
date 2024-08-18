export default {
    rules: {
        "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
        "import/export": "error",
        "import/first": "error",
        "import/named": "error",
        "import/no-default-export": "warn",
        "import/no-duplicates": "error",
        "import/no-empty-named-blocks": "error",
        "import/no-extraneous-dependencies": [
            "error",
            {
                devDependencies: true,
                optionalDependencies: false,
            },
        ],
        "import/no-extraneous-dependencies": [
            "error",
            {
                devDependencies: true,
                optionalDependencies: false,
                peerDependencies: false,
            },
        ],
        "import/no-named-default": "error",
        "import/no-self-import": "error",
        "import/no-useless-path-segments": "error",
        "import/no-webpack-loader-syntax": "error",
        "import/prefer-default-export": "off",
    },
};
