export default {
    rules: {
        "arrow-body-style": 0,
        "jsx-a11y/alt-text": "error",
        "jsx-a11y/anchor-has-content": "error",
        "jsx-a11y/anchor-is-valid": "error",
        "jsx-a11y/aria-props": "error",
        "jsx-a11y/aria-proptypes": "error",
        "jsx-a11y/aria-role": "error",
        "jsx-a11y/heading-has-content": "error",
        "jsx-a11y/no-aria-hidden-on-focusable": "error",
        "jsx-a11y/prefer-tag-over-role": "error",
        "react-hooks/exhaustive-deps": "error",
        "react-hooks/rules-of-hooks": "error",
        "react/boolean-prop-naming": [
            "error",
            {
                rule: "^(is|has)[A-Z]([A-Za-z0-9]?)+",
            },
        ],
        "react/button-has-type": "error",
        "react/default-props-match-prop-types": "error",
        "react/forbid-prop-types": [
            "warn",
            {
                checkChildContextTypes: true,
                checkContextTypes: true,
                forbid: ["any"],
            },
        ],
        "react/function-component-definition": [
            "error",
            {
                namedComponents: "arrow-function",
            },
        ],
        "react/hook-use-state": [
            "error",
            {
                allowDestructuredState: true,
            },
        ],
        "react/jsx-boolean-value": "error",
        "react/jsx-closing-bracket-location": "error",
        "react/jsx-closing-tag-location": "error",
        "react/jsx-curly-brace-presence": [
            "error",
            {
                children: "never",
                propElementValues: "always",
                props: "never",
            },
        ],
        "react/jsx-curly-newline": ["error", "consistent"],
        "react/jsx-curly-spacing": ["error", "never"],
        "react/jsx-equals-spacing": ["error", "never"],
        "react/jsx-filename-extension": [
            "error",
            {
                extensions: [".jsx", ".tsx"],
            },
        ],
        "react/jsx-fragments": "error",
        "react/jsx-handler-names": "error",
        "react/jsx-indent": [
            "error",
            4,
            {
                checkAttributes: true,
                indentLogicalExpressions: true,
            },
        ],
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-key": [
            "error",
            {
                checkFragmentShorthand: true,
                warnOnDuplicates: true,
            },
        ],
        "react/jsx-max-props-per-line": [
            "error",
            {
                maximum: 1,
                when: "multiline",
            },
        ],
        "react/jsx-no-bind": [
            "error",
            {
                ignoreRefs: true,
            },
        ],
        "react/jsx-no-comment-textnodes": "error",
        "react/jsx-no-constructed-context-values": "error",
        "react/jsx-no-duplicate-props": [
            "error",
            {
                ignoreCase: true,
            },
        ],
        "react/jsx-no-leaked-render": "error",
        "react/jsx-no-script-url": "error",
        "react/jsx-no-target-blank": [
            "error",
            {
                warnOnSpreadAttributes: true,
            },
        ],
        "react/jsx-no-undef": "error",
        "react/jsx-no-useless-fragment": "error",
        "react/jsx-one-expression-per-line": [
            "error",
            {
                allow: "single-child",
            },
        ],

        "react/jsx-pascal-case": "error",
        "react/jsx-props-no-multi-spaces": "warn",
        "react/jsx-props-no-spreading": "off",
        "react/jsx-sort-props": [
            "error",
            {
                callbacksLast: true,
                reservedFirst: true,
                shorthandLast: true,
            },
        ],
        "react/jsx-tag-spacing": "error",
        "react/jsx-uses-vars": "error",
        "react/jsx-wrap-multilines": "error",
        "react/no-access-state-in-setstate": "error",
        "react/no-array-index-key": "error",
        "react/no-arrow-function-lifecycle": "error",
        "react/no-children-prop": "error",
        "react/no-danger": "error",
        "react/no-deprecated": "error",
        "react/no-did-mount-set-state": "error",
        "react/no-did-update-set-state": "error",
        "react/no-invalid-html-attribute": "error",
        "react/no-multi-comp": [
            "error",
            {
                ignoreStateless: true,
            },
        ],
        "react/no-namespace": "error",
        "react/no-redundant-should-component-update": "error",
        "react/no-this-in-sfc": "error",
        "react/no-typos": "error",
        "react/no-unescaped-entities": "error",
        "react/no-unknown-property": "error",
        "react/no-unsafe": "error",
        "react/no-unused-prop-types": "error",
        "react/no-unused-state": "error",
        "react/prefer-es6-class": "error",
        "react/prefer-stateless-function": "error",
        "react/prop-types": 0,
        "react/self-closing-comp": [
            "error",
            {
                component: true,
                html: true,
            },
        ],
        "react/sort-comp": "error",
        "react/sort-default-props": "warn",
        "react/sort-prop-types": [
            "warn",
            {
                callbacksLast: true,
                ignoreCase: true,
                requiredFirst: true,
            },
        ],
        "react/style-prop-object": "error",
        "react/void-dom-elements-no-children": "error",
    },
};
