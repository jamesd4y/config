module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true
    },
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 12
    },
    plugins: [
        '@typescript-eslint',
        'simple-import-sort',
        '@typescript-eslint/eslint-plugin'
    ],
    rules: {
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
    }
};
