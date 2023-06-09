module.exports = {
    'extends': [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
        'plugin:typescript-enum/recommended',
        require.resolve('./rules/typescript')
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        createDefaultProgram: false,
        ecmaVersion: 2020,
        parser: '@typescript-eslint/parser',
        project: './tsconfig.*?.json',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'typescript-enum']
};
