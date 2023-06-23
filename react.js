module.exports = {
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        require.resolve('./rules/es6'),
        require.resolve('./rules/editor'),
        require.resolve('./rules/magic-numbers'),
        require.resolve('./rules/imports'),
        require.resolve('./rules/style'),
        require.resolve('./rules/react')
    ],
    plugins: ['react', 'react-hooks'],
};
