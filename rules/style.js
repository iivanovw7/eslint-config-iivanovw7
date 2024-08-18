export default {
    rules: {
        "array-bracket-spacing": [
            "error",
            "never",
            {
                arraysInArrays: true,
                objectsInArrays: true,
            },
        ],
        "array-callback-return": [
            "error",
            {
                allowImplicit: false,
                checkForEach: false,
            },
        ],
        "arrow-body-style": ["error", "as-needed"],
        "block-spacing": "error",
        "brace-style": ["error", "stroustrup"],
        camelcase: [
            "error",
            {
                ignoreGlobals: true,
                properties: "always",
            },
        ],
        "class-methods-use-this": "off",
        "comma-dangle": [
            "error",
            {
                arrays: "only-multiline",
                exports: "only-multiline",
                functions: "never",
                imports: "only-multiline",
                objects: "only-multiline",
            },
        ],
        "comma-spacing": "error",
        "comma-style": "error",
        "computed-property-spacing": [
            "error",
            "never",
            {
                enforceForClassMembers: true,
            },
        ],
        "consistent-return": "error",
        "consistent-this": ["error", "that"],
        "constructor-super": "error",
        "default-case-last": "error",
        "dot-notation": [
            "error",
            {
                allowKeywords: true,
            },
        ],
        eqeqeq: "error",
        "func-call-spacing": "error",
        "func-names": ["error", "as-needed"],
        "jsx-quotes": ["error", "prefer-double"],
        "key-spacing": [
            "error",
            {
                afterColon: true,
                beforeColon: false,
            },
        ],
        "keyword-spacing": [
            "error",
            {
                after: true,
                before: true,
            },
        ],
        "max-classes-per-file": "off",
        "max-nested-callbacks": ["error", 10],
        "max-params": ["error", 3],
        "max-statements-per-line": [
            "error",
            {
                max: 1,
            },
        ],
        "multiline-ternary": ["error", "always"],
        "new-cap": "error",
        "new-cap": [
            "error",
            {
                capIsNew: false,
                newIsCap: true,
                properties: true,
            },
        ],
        "new-parens": "error",
        "newline-per-chained-call": "error",
        "no-array-constructor": "error",
        "no-array-constructor": "error",
        "no-async-promise-executor": "error",
        "no-await-in-loop": "off",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-class-assign": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": "error",
        "no-console": [
            "error",
            {
                allow: ["warn", "error"],
            },
        ],
        "no-const-assign": "error",
        "no-constant-condition": "error",
        "no-continue": "off",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-delete-var": "error",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-else-if": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-else-return": "error",
        "no-empty": [
            "error",
            {
                allowEmptyCatch: true,
            },
        ],
        "no-empty-character-class": "error",
        "no-empty-pattern": "error",
        "no-eval": "error",
        "no-ex-assign": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-boolean-cast": "error",
        "no-fallthrough": "error",
        "no-func-assign": "error",
        "no-global-assign": "error",
        "no-implied-eval": "error",
        "no-import-assign": "error",
        "no-invalid-regexp": "error",
        "no-invalid-this": "error",
        "no-irregular-whitespace": [
            "error",
            {
                skipComments: true,
                skipJSXText: true,
                skipRegExps: true,
                skipStrings: true,
                skipTemplates: true,
            },
        ],
        "no-iterator": "error",
        "no-labels": [
            "error",
            {
                allowLoop: false,
                allowSwitch: false,
            },
        ],
        "no-lonely-if": "error",
        "no-mixed-operators": "error",
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-assign": [
            "error",
            {
                ignoreNonDeclaration: true,
            },
        ],
        "no-multi-str": "error",
        "no-multiple-empty-lines": [
            "error",
            {
                max: 2,
            },
        ],
        "no-negated-condition": "error",
        "no-nested-ternary": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-wrappers": "error",
        "no-obj-calls": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-plusplus": "off",
        "no-redeclare": "error",
        "no-regex-spaces": "error",
        "no-restricted-globals": "off",
        "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
        "no-return-assign": ["error", "except-parens"],
        "no-self-assign": [
            "error",
            {
                props: true,
            },
        ],
        "no-self-compare": "error",
        "no-shadow": [
            "warn",
            {
                builtinGlobals: true,
                hoist: "functions",
            },
        ],
        "no-shadow-restricted-names": "error",
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-undef": "error",
        "no-undef-init": "error",
        "no-unexpected-multiline": "error",
        "no-unneeded-ternary": [
            "error",
            {
                defaultAssignment: false,
            },
        ],
        "no-unneeded-ternary": [
            "error",
            {
                defaultAssignment: false,
            },
        ],
        "no-unreachable-loop": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unsafe-optional-chaining": "error",
        "no-unused-expressions": [
            "error",
            {
                enforceForJSX: true,
            },
        ],
        "no-unused-expressions": [
            "error",
            {
                allowShortCircuit: true,
                allowTaggedTemplates: true,
                allowTernary: true,
            },
        ],
        "no-unused-vars": [
            "error",
            {
                argsIgnorePattern: "^_",
                caughtErrorsIgnorePattern: "^_",
                ignoreRestSiblings: true,
                varsIgnorePattern: "^_",
            },
        ],
        "no-use-before-define": "off",
        "no-use-before-define": [
            "error",
            {
                classes: false,
                functions: false,
                variables: false,
            },
        ],
        "no-useless-backreference": "error",
        "no-useless-call": "error",
        "no-useless-catch": "error",
        "no-useless-computed-key": "error",
        "no-useless-constructor": "error",
        "no-useless-escape": "error",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-var": "error",
        "no-void": "error",
        "no-whitespace-before-property": "error",
        "no-with": "error",
        "node-import/prefer-node-protocol": "error",
        "object-shorthand": ["error", "always"],
        "one-var": [
            "error",
            {
                initialized: "never",
            },
        ],
        "one-var-declaration-per-line": ["error", "initializations"],
        "padding-line-between-statements": [
            "error",
            { blankLine: "always", next: "*", prev: "directive" },
            { blankLine: "any", next: "directive", prev: "directive" },
            { blankLine: "always", next: "return", prev: "*" },
        ],
        "prefer-arrow/prefer-arrow-functions": [
            "error",
            {
                classPropertiesAllowed: false,
                disallowPrototype: true,
                singleReturnOnly: false,
            },
        ],
        "prefer-destructuring": "error",
        "prefer-exponentiation-operator": "error",
        "prefer-let/prefer-let": "error",
        "prefer-promise-reject-errors": "error",
        "prefer-regex-literals": [
            "error",
            {
                disallowRedundantWrapping: true,
            },
        ],
        "prefer-rest-params": "error",
        radix: "off",
        "space-before-blocks": "error",
        "space-before-function-paren": [
            "error",
            {
                anonymous: "never",
                asyncArrow: "always",
                named: "never",
            },
        ],
        "space-infix-ops": "error",
        "space-unary-ops": [
            "error",
            {
                nonwords: false,
                overrides: {
                    "!": true,
                    "!!": true,
                },
                words: true,
            },
        ],
        "spaced-comment": [
            "error",
            "always",
            {
                exceptions: ["-", "+", "*"],
            },
        ],
        "use-isnan": [
            "error",
            {
                enforceForIndexOf: true,
                enforceForSwitchCase: true,
            },
        ],
        "valid-typeof": [
            "error",
            {
                requireStringLiterals: true,
            },
        ],
        yoda: ["error", "never"],
    },
};
