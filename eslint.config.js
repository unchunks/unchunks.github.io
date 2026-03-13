import js from '@eslint/js';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
    // ① グローバルな無視設定（これ単体で独立させる）
    {
        ignores: ['dist/**', 'node_modules/**'],
    },
    // ② 共通の設定
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 2024,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.es2021,
            },
            parserOptions: {
                ecmaFeatures: { jsx: true },
            },
        },
        plugins: {
            react: reactPlugin,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            // ESLint 推奨ルール
            ...js.configs.recommended.rules,

            // React ルール
            ...reactPlugin.configs.recommended.rules,
            'react/react-in-jsx-scope': 'off',   // React 17+ では不要
            'react/prop-types': 'off',             // TypeScript を使わない構成のため無効化

            // React Hooks ルール
            ...reactHooks.configs.recommended.rules,

            // React Refresh（HMR）
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

            // プロジェクト固有のカスタムルール
            'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
            'no-console': ['warn', { allow: ['warn', 'error'] }],
        },
        settings: {
            react: { version: 'detect' },
        },
    },
];
