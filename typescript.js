module.exports = {
    'extends': [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
        'plugin:typescript-enum/recommended',
        'plugin:typescript-sort-keys/recommended',
        require.resolve('./rules/typescript')
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    plugins: ['@typescript-eslint', 'react-hooks', 'typescript-sort-keys', 'typescript-enum']
};
