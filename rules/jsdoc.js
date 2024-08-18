export default {
    rules: {
        "require-jsdoc": [
            "warn",
            {
                require: {
                    ArrowFunctionExpression: true,
                    ClassDeclaration: true,
                    FunctionDeclaration: true,
                    FunctionExpression: true,
                    MethodDefinition: true,
                },
            },
        ],
        "valid-jsdoc": [
            "error",
            {
                matchDescription: "\\S{5,}",
                prefer: {
                    arg: "param",
                    argument: "param",
                    augments: "extends",
                    returns: "return",
                },
                preferType: {
                    Boolean: "boolean",
                    Number: "number",
                    String: "string",
                },
                requireReturn: false,
            },
        ],
    },
};
