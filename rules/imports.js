module.exports = {
    rules: {
        "import/order": [
            "error",
            {
                groups: ["external", "builtin", "internal", ["parent"], ["sibling", "index"], "object"],
                "newlines-between": "always",
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
                pathGroups: [
                    {
                        pattern: "react",
                        group: "external",
                        position: "before",
                    },
                ],
                pathGroupsExcludedImportTypes: ["external"],
            },
        ],
        "import/no-extraneous-dependencies": [
            "error",
            {
                devDependencies: true,
                optionalDependencies: false,
            },
        ],
        "import/no-default-export": "warn",
        "import/prefer-default-export": "off",
    },
};
