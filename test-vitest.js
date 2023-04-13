module.exports = {
    plugins: ['vitest'],
    'extends': [
        'plugin:vitest/recommended',
        require.resolve('./rules/test-vitest')
    ],
};
