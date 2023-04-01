module.exports = {
    env: {
        node: true,
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['vitest'],
    'extends': [
        'plugin:vitest/recommended',
        require.resolve('./rules/test-vitest')
    ],
};
