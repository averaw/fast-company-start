module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: "module"
    },
    rules: {
        indent: ["off", 4],
        semi: [2, "always"],
        "space-before-function-paren": [
            "error",
            { anonymous: "always", named: "never" },
           
            
        ],
        quotes: ["error", "double", { allowTemplateLiterals: true }]
    },
    plugins: ["react", "prettier"],
    extends: [
        "plugin:react/recommended",
        "standard",
        "plugin:prettier/recommended"
    ]
};
