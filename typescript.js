import eslintTypescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import { defineFlatConfig } from "eslint-define-config";
import typescriptEnum from "eslint-plugin-typescript-enum";

import baseConfig from "./index";
import typedocConfig from "./rules/typedoc";
import typescriptConfig from "./rules/typescript";

export default defineFlatConfig([
    ...baseConfig,
    {
        extends: [typescriptConfig, typedocConfig],
        files: ["**/*.ts", "**/*.tsx", "**/*.astro"],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                project: ["./tsconfig.json"],
                tsconfigRootDir: process.cwd(),
            },
        },
        plugins: {
            "@typescript-eslint": eslintTypescript,
            "typescript-enum": typescriptEnum,
        },
        settings: {
            "import/resolver": {
                node: {
                    extensions: [".js", ".jsx", ".ts", ".tsx"],
                },
                typescript: {
                    alwaysTryTypes: true,
                },
            },
        },
    },
]);
