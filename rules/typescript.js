import editorConfig from "./editor";
import noMagicNumbersConfig from "./no-magic-numbers";
import styleConfig from "./style";

const editorRules = editorConfig.rules;
const styleRules = styleConfig.rules;
const noMagicNumberRule = noMagicNumbersConfig.rules["no-magic-numbers"];

export default {
    rules: {
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/ban-ts-comment": [
            "error",
            {
                minimumDescriptionLength: 5,
                "ts-check": false,
                "ts-expect-error": "allow-with-description",
                "ts-ignore": "allow-with-description",
                "ts-nocheck": "allow-with-description",
            },
        ],
        "@typescript-eslint/brace-style": ["error", "stroustrup"],
        "@typescript-eslint/comma-dangle": styleRules["comma-dangle"],
        "@typescript-eslint/comma-spacing": styleRules["comma-spacing"],
        "@typescript-eslint/consistent-generic-constructors": "error",
        "@typescript-eslint/consistent-type-definitions": "error",
        "@typescript-eslint/consistent-type-exports": "error",
        "@typescript-eslint/consistent-type-imports": [
            "warn",
            {
                prefer: "type-imports",
            },
        ],
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/default-param-last": "error",
        "@typescript-eslint/dot-notation": "error",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-member-accessibility": ["error", { overrides: { constructors: "no-public" } }],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/func-call-spacing": styleRules["func-call-spacing"],
        "@typescript-eslint/indent": editorRules.indent,
        "@typescript-eslint/keyword-spacing": styleRules["keyword-spacing"],
        "@typescript-eslint/lines-between-class-members": "off",
        "@typescript-eslint/member-ordering": [
            "error",
            {
                default: [
                    // Index signature
                    "signature",
                    "call-signature",

                    // Fields
                    "protected-field", // = ["protected-static-field", "protected-instance-field"]
                    "private-field", // = ["private-static-field", "private-instance-field"]
                    "public-field", // = ["public-static-field", "public-instance-field"]

                    // Getters
                    "protected-get", // = ["protected-static-get", "protected-instance-get"]
                    "private-get", // = ["private-static-get", "private-instance-get"]
                    "public-get", // = ["public-static-get", "public-instance-get"]

                    // Static initialization
                    "static-initialization",

                    // Constructors
                    "protected-constructor",
                    "private-constructor",
                    "public-constructor",

                    "constructor",

                    // Setters
                    "protected-set", // = ["protected-static-set", "protected-instance-set"]
                    "private-set", // = ["private-static-set", "private-instance-set"]
                    "public-set", // = ["public-static-set", "public-instance-set"]

                    // Methods
                    "protected-method", // = ["protected-static-method", "protected-instance-method"]
                    "private-method", // = ["private-static-method", "private-instance-method"]
                    "public-method", // = ["public-static-method", "public-instance-method"]
                ],
            },
        ],
        "@typescript-eslint/method-signature-style": "error",
        "@typescript-eslint/naming-convention": 0,
        "@typescript-eslint/no-array-constructor": styleRules["no-array-constructor"],
        "@typescript-eslint/no-dupe-class-members": "error",
        "@typescript-eslint/no-duplicate-imports": styleRules["no-duplicate-imports"],
        "@typescript-eslint/no-duplicate-type-constituents": "error",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-extra-non-null-assertion": "error",
        "@typescript-eslint/no-extra-semi": "error",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-implied-eval": "error",
        "@typescript-eslint/no-import-type-side-effects": "error",
        "@typescript-eslint/no-invalid-this": styleRules["no-invalid-this"],
        "@typescript-eslint/no-loop-func": "error",
        "@typescript-eslint/no-loss-of-precision": "error",
        "@typescript-eslint/no-magic-numbers": [
            noMagicNumberRule[0],
            {
                ignoreEnums: true,
                ignoreNumericLiteralTypes: true,
                ignoreReadonlyClassProperties: true,
                ...noMagicNumberRule[1],
            },
        ],
        "@typescript-eslint/no-mixed-enums": "error",
        "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-redeclare": [
            "error",
            {
                ignoreDeclarationMerge: true,
            },
        ],
        "@typescript-eslint/no-redeclare": "error",
        "@typescript-eslint/no-require-imports": "error",
        "@typescript-eslint/no-shadow": styleRules["no-shadow"],
        "@typescript-eslint/no-shadow": "error",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
        "@typescript-eslint/no-unnecessary-condition": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/no-unsafe-assignment": 0,
        "@typescript-eslint/no-unsafe-call": 0,
        "@typescript-eslint/no-unsafe-member-access": 0,
        "@typescript-eslint/no-unused-expressions": styleRules["no-unused-expressions"],
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-use-before-define": styleRules["no-use-before-define"],
        "@typescript-eslint/no-useless-constructor": styleRules["no-useless-constructor"],
        "@typescript-eslint/prefer-optional-chain": "error",
        "@typescript-eslint/quotes": editorRules.quotes,
        "@typescript-eslint/restrict-plus-operands": "error",
        "@typescript-eslint/semi": editorRules.semi,
        "@typescript-eslint/space-before-function-paren": styleRules["space-before-function-paren"],
        "@typescript-eslint/space-infix-ops": styleRules["space-infix-ops"],
        "@typescript-eslint/unbound-method": 0,
        "@typescript-eslint/unified-signatures": "error",
        "brace-style": "off",
        "comma-dangle": "off",
        "comma-spacing": "off",
        "default-param-last": "off",
        "dot-notation": "off",
        "func-call-spacing": es6Rules["default-param-last"],
        "import/no-unresolved": "error",
        indent: "off",
        "keyword-spacing": "off",
        "no-array-constructor": "off",
        "no-dupe-class-members": "off",
        "no-duplicate-imports": "off",
        "no-extra-semi": "off",
        "no-implied-eval": "off",
        "no-invalid-this": "off",
        "no-loop-func": "off",
        "no-loss-of-precision": "off",
        "no-magic-numbers": "off",
        "no-redeclare": "off",
        "no-restricted-syntax": styleRules["no-restricted-syntax"],
        "no-shadow": "off",
        "no-undef": "off",
        "no-unused-expressions": "off",
        "no-unused-vars": "off",
        "no-use-before-define": "off",
        "no-useless-constructor": "off",
        "object-curly-newline": editorRules["object-curly-newline"],
        quotes: "off",
        semi: "off",
        "space-before-function-paren": "off",
        "space-infix-ops": "off",
    },
};
