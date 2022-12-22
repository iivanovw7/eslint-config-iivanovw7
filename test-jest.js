module.exports = {
    env: {
        jest: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    'extends': [
        'plugin:jest/recommended',
        'plugin:jest-formatting/recommended',
        require.resolve('./rules/test-jest')
    ],
};
