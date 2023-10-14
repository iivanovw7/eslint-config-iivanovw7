module.exports = {
    rules: {
        "no-magic-numbers": "off",
        "no-unused-expressions": "off",
        "vitest/max-nested-describe": [
            "error",
            { "max": 4 }
        ],
        "vitest/consistent-test-it": ["warn", { fn: "it" } ],
        "vitest/expect-expect": "off",
        "vitest/no-alias-methods": "warn",
        "vitest/no-commented-out-tests": "off",
    },
};
