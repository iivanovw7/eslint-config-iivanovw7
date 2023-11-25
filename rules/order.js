module.exports = {
    rules: {
        // sort-imports (conflicts with `perfectionist/sort-named-imports`)
        "sort-imports": "off",
        // sort-interfaces
        "@typescript-eslint/adjacent-overload-signatures": "off",
        // sort-jsx-props
        "react/jsx-sort-props": "off",
        // sort-objects
        "sort-keys": "off",
        // sort-union-types
        "@typescript-eslint/sort-type-constituents": "off",
        // typescript-sort-keys
        "typescript-sort-keys/interface": "off",
        // order rules
        "perfectionist/sort-array-includes": [
            "error",
            {
                type: "natural",
                order: "asc",
                "spread-last": true,
            },
        ],
        "perfectionist/sort-astro-attributes": [
            "error",
            {
                type: "natural",
                order: "asc",
                groups: [
                    "multiline",
                    "unknown",
                    [
                        "shorthand",
                        "astro-shorthand"
                    ]
                ],
            }
        ],
        "perfectionist/sort-classes": [
            "error",
            {
                type: "natural",
                order: "asc",
                groups: [
                    "static-property",
                    "private-property",
                    "property",
                    "constructor",
                    "static-method",
                    "private-method",
                    "method",
                ],
            },
        ],
        "perfectionist/sort-jsx-props": [
            "error",
            {
                type: "natural",
                order: "asc",
                "always-on-top": ["id", "key", "ref"],
                shorthand: "first",
                multiline: "ignore",
                callback: "last",
            },
        ],
        "perfectionist/sort-interfaces": [
            "error",
            {
                type: "natural",
                order: "asc",
            },
        ],
        "perfectionist/sort-map-elements": [
            "error",
            {
                type: "natural",
                order: "asc",
            },
        ],
        "perfectionist/sort-named-exports": [
            "error",
            {
                type: "natural",
                order: "asc",
            },
        ],
        "perfectionist/sort-named-imports": [
            "error",
            {
                type: "natural",
                order: "asc",
            },
        ],
        "perfectionist/sort-object-types": [
            "error",
            {
                type: "natural",
                order: "asc",
            },
        ],
        "perfectionist/sort-objects": [
            "error",
            {
                type: "natural",
                order: "asc",
            },
        ],
        "perfectionist/sort-union-types": [
            "error",
            {
                type: "natural",
                order: "asc",
            },
        ],
    },
};
