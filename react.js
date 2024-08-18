import { defineFlatConfig } from "eslint-define-config";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import testingLibrary from "eslint-plugin-testing-library";

import reactConfig from "./rules/react";
import testingLibraryConfig from "./rules/testing-library";
import typescriptConfig from "./typescript";

export default defineFlatConfig([
    ...typescriptConfig,
    {
        extends: [reactConfig],
        files: ["**/*.jsx", "**/*.tsx", "**/*.js", "**/*.ts"],
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            "jsx-a11y": jsxA11y,
            react,
            "react-hooks": reactHooks,
        },
        settings: {
            react: {
                version: "detect",
            },
        },
    },
    {
        extends: [testingLibraryConfig],
        files: [
            "**/test/*.js",
            "**/test/*.ts",
            "**/test/*.jsx",
            "**/test/*.tsx",
            "**/*.test.js",
            "**/*.test.ts",
            "**/*.test.jsx",
            "**/*.test.tsx",
            "**/*.spec.js",
            "**/*.spec.ts",
            "**/*.spec.jsx",
            "**/*.spec.tsx",
        ],
        plugins: {
            "testing-library": testingLibrary,
        },
    },
]);
