const editorRules = require('./editor').rules;
const es6Rules = require('./es6').rules;
const noMagicNumberRule = require('./magic-numbers').rules['no-magic-numbers'];
const styleRules = require('./style').rules;

module.exports = {
    rules: {
        '@typescript-eslint/no-unsafe-call': 0,
        '@typescript-eslint/unbound-method': 0,
        '@typescript-eslint/no-unsafe-assignment': 0,
        '@typescript-eslint/no-unsafe-member-access': 0,
        '@typescript-eslint/naming-convention': 0,
        '@typescript-eslint/consistent-type-imports': [
            'warn',
            {
                prefer: 'type-imports',
            },
        ],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            { overrides: { constructors: 'no-public' } },
        ],
        '@typescript-eslint/lines-between-class-members': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/ban-ts-comment': [
            'error',
            {
                'ts-expect-error': 'allow-with-description',
                'ts-ignore': 'allow-with-description',
                'ts-nocheck': 'allow-with-description',
                'ts-check': false,
                minimumDescriptionLength: 5,
            },
        ],
        '@typescript-eslint/member-ordering': [
            'error',
            {
                'default': [
                    // Index signature
                    'signature',
                    'call-signature',

                    // Fields
                    'protected-field', // = ["protected-static-field", "protected-instance-field"]
                    'private-field', // = ["private-static-field", "private-instance-field"]
                    'public-field', // = ["public-static-field", "public-instance-field"]

                    // Getters
                    'protected-get', // = ["protected-static-get", "protected-instance-get"]
                    'private-get', // = ["private-static-get", "private-instance-get"]
                    'public-get', // = ["public-static-get", "public-instance-get"]

                    // Static initialization
                    'static-initialization',

                    // Constructors
                    'protected-constructor',
                    'private-constructor',
                    'public-constructor',

                    'constructor',

                    // Setters
                    'protected-set', // = ["protected-static-set", "protected-instance-set"]
                    'private-set', // = ["private-static-set", "private-instance-set"]
                    'public-set', // = ["public-static-set", "public-instance-set"]

                    // Methods
                    'protected-method', // = ["protected-static-method", "protected-instance-method"]
                    'private-method', // = ["private-static-method", "private-instance-method"]
                    'public-method', // = ["public-static-method", "public-instance-method"]
                ],
            },
        ],
        'brace-style': 'off',
        '@typescript-eslint/brace-style': [
            'error',
            'stroustrup',
        ],
        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': styleRules['comma-dangle'],
        'comma-spacing': 'off',
        '@typescript-eslint/comma-spacing': styleRules['comma-spacing'],
        'default-param-last': 'off',
        '@typescript-eslint/default-param-last': 'error',
        'func-call-spacing': es6Rules['default-param-last'],
        '@typescript-eslint/func-call-spacing': styleRules['func-call-spacing'],
        'indent': 'off',
        '@typescript-eslint/indent': editorRules.indent,
        'keyword-spacing': 'off',
        '@typescript-eslint/keyword-spacing': styleRules['keyword-spacing'],
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': styleRules['no-array-constructor'],
        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': 'error',
        'no-duplicate-imports': 'off',
        '@typescript-eslint/no-duplicate-imports': es6Rules['no-duplicate-imports'],
        'no-extra-semi': 'off',
        '@typescript-eslint/no-extra-semi': 'error',
        'no-invalid-this': 'off',
        '@typescript-eslint/no-invalid-this': styleRules['no-invalid-this'],
        'no-loop-func': 'off',
        '@typescript-eslint/no-loop-func': 'error',
        'no-loss-of-precision': 'off',
        '@typescript-eslint/no-loss-of-precision': 'error',
        'no-magic-numbers': 'off',
        '@typescript-eslint/no-magic-numbers': [
            noMagicNumberRule[0],
            {
                ignoreNumericLiteralTypes: true,
                ignoreReadonlyClassProperties: true,
                ignoreEnums: true,
                ...noMagicNumberRule[1],
            },
        ],
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': [
            'error',
            {
                ignoreDeclarationMerge: true,
            },
        ],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': styleRules['no-shadow'],
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': styleRules['no-unused-expressions'],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': styleRules['no-use-before-define'],
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': es6Rules['no-useless-constructor'],
        'quotes': 'off',
        '@typescript-eslint/quotes': editorRules.quotes,
        'semi': 'off',
        '@typescript-eslint/semi': editorRules.semi,
        'space-before-function-paren': 'off',
        '@typescript-eslint/space-before-function-paren': styleRules['space-before-function-paren'],
        'space-infix-ops': 'off',
        '@typescript-eslint/space-infix-ops': styleRules['space-infix-ops'],
        'no-restricted-syntax': styleRules['no-restricted-syntax'],
        'object-curly-newline': editorRules['object-curly-newline'],
    }
};
