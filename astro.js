module.exports = {
    'extends': [
        'plugin:astro/recommended',
        require.resolve('./rules/astro'),
    ],
    'parser': 'astro-eslint-parser',
    parserOptions: {
        createDefaultProgram: false,
        ecmaVersion: 2020,
        parser: '@typescript-eslint/parser',
        project: './tsconfig.*?.json',
        sourceType: 'module',
    },
    'plugins': ['astro'],
    'globals': {
        'Astro': 'readonly',
    },
};
