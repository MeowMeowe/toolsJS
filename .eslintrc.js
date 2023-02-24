const eslintrc = {
    extends: [require.resolve('@yueqing/lint/lib/ts-eslint')],
    parserOptions: {
        project: './tsconfig.eslint.json',
    },
    rules: {
        // custom rules
        "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
        "no-use-before-define": 'off',
        "@typescript-eslint/no-use-before-define": 'off',
        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": "off"
    },
}

module.exports = eslintrc