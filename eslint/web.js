module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true
    },
    settings: {
        react: {
            version: 'detect'
        },
        tailwindcss: {
            config: './tailwind.config.js',
            officialSorting: true,
            removeDuplicates: true
        }
    },
    extends: [
        'plugin:react/recommended',
        'plugin:@next/next/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:tailwindcss/recommended',
        'next/core-web-vitals'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'simple-import-sort',
        '@typescript-eslint/eslint-plugin',
        'tailwindcss'
    ],
    rules: {
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        '@next/next/no-document-import-in-page': 'off',
        '@next/next/no-img-element': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'tailwindcss/classnames-order': 'off',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['hrefLeft', 'hrefRight'],
                aspects: ['invalidHref', 'preferButton']
            }
        ]
    }
};
