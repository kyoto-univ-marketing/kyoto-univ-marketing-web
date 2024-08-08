// @ts-check

/** @type {import("eslint").ESLint.ConfigData} */
module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        project: './tsconfig.json',
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: [
        'eslint:recommended',
        'next/core-web-vitals',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:storybook/recommended',
        'prettier',
    ],
    plugins: ['import', 'unused-imports', '@typescript-eslint', 'react'],
    rules: {
        // 参考： https://qiita.com/yukiji/items/5ba9e065ac6ed57d05a4
        'import/order': [
            'error',
            {
                groups: [
                    'builtin', // 組み込みモジュール
                    'external', // npmでインストールした外部ライブラリ
                    'internal', // 自作モジュール
                    ['parent', 'sibling'],
                    'object',
                    'type',
                    'index',
                ],
                'newlines-between': 'always', // グループ毎にで改行を入れる
                pathGroupsExcludedImportTypes: ['builtin'],
                alphabetize: {
                    order: 'asc', // 昇順にソート
                    caseInsensitive: true, // 小文字大文字を区別する
                },
                pathGroups: [
                    // 指定した順番にソートされる
                    {
                        pattern: '@/components/common',
                        group: 'internal',
                        position: 'before',
                    },
                    {
                        pattern: '@/components/hooks',
                        group: 'internal',
                        position: 'before',
                    },
                ],
            },
        ],
        'unused-imports/no-unused-imports': 'warn',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'react/jsx-sort-props': 'warn',
    },
}
