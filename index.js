module.exports = {
    'extends': [
        'airbnb/base',
        'plugin:import/errors',
        'plugin:import/warnings',
        require.resolve('./rules/es6'),
        require.resolve('./rules/editor'),
        require.resolve('./rules/magic-numbers'),
        require.resolve('./rules/imports'),
        require.resolve('./rules/style')
    ],
    plugins: ['import'],
};
