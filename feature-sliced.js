module.exports = {
    "extends": [
        "plugin:boundaries/recommended",
        require.resolve("./rules/feature-sliced"),
    ],
    "settings": {
        "boundaries/elements": [
            { "type": "app", "pattern": "app/*" },
            { "type": "processes", "pattern": "processes/*" },
            { "type": "pages", "pattern": "pages/*" },
            { "type": "widgets", "pattern": "widgets/*" },
            { "type": "features", "pattern": "features/*" },
            { "type": "entities", "pattern": "entities/*" },
            { "type": "shared", "pattern": "shared/*" }
        ],
        "boundaries/ignore": ["**/*.test.*", "**/*.spec.*", "test/**/*"],
    },
    "overrides": [
        {
            "files": ["**/*.test.*", "**/*.spec.*", "test/**/*"],
            "rules": { "boundaries/element-types": "off" }
        }
    ]
};
