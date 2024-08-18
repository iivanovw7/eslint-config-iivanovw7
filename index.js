import { defineFlatConfig } from "eslint-define-config";
import eslintImport from "eslint-plugin-import";
import jsdoc from "eslint-plugin-jsdoc";
import n from "eslint-plugin-n";
import nodeImport from "eslint-plugin-node-import";
import perfectionistAlphabetical from "eslint-plugin-perfectionist/configs/recommended-alphabetical";
import preferArrow from "eslint-plugin-prefer-arrow";
import preferLet from "eslint-plugin-prefer-let";
import promise from "eslint-plugin-promise";
import unicorn from "eslint-plugin-unicorn";
import vitest from "eslint-plugin-vitest";
import globals from "globals";

import importConfig from "./rules/import";
import jsdocConfig from "./rules/jsdoc";
import nConfig from "./rules/n";
import promiseConfig from "./rules/promise";
import sonarjsConfig from "./rules/sonarjs";
import styleConfig from "./rules/style";
import unicornConfig from "./rules/unicorn";
import vitestConfig from "./rules/vitest";

export default defineFlatConfig([
    {
        ignores: ["**/node_modules/**", "**/dist/**", ".git/**"],
    },
    {
        languageOptions: {
            ecmaVersion: 2023,
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.es2021,
                ...globals.node,
            },
        },
        plugins: {
            "prefer-arrow": preferArrow,
            "node-import": nodeImport,
            "prefer-let": preferLet,
            import: eslintImport,
            promise,
            unicorn,
            vitest,
            n,
            jsdoc,
        },
        extends: [unicornConfig, sonarjsConfig, importConfig, promiseConfig, nConfig, jsdocConfig, styleConfig],
        rules: {},
    },
    {
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
            vitest,
        },
        extends: [vitestConfig],
    },
    perfectionistAlphabetical,
]);
