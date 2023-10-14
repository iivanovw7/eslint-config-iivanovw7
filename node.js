module.exports = {
    env: {
        node: true,
    },
    "extends": [
        "plugin:node/recommended",
        require.resolve("./rules/node")
    ],
};
