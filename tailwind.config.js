// tailwind.config.js の修正案
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                // Tailwindのデフォルトカラーを上書き、または追加
                bg: 'var(--bg)',
                surface: 'var(--surface)',
                surface2: 'var(--surface2)',
                green: { DEFAULT: 'var(--green)', dim: 'var(--green-dim)' },
                blue: { DEFAULT: 'var(--blue)', dim: 'var(--blue-dim)' },
                red: 'var(--red)',
                yellow: 'var(--yellow)',
                border: { DEFAULT: 'var(--border)', bright: 'var(--border-bright)' }
            },
            fontFamily: {
                display: ['var(--font-display)'],
                mono: ['var(--font-mono)'],
                body: ['var(--font-body)'],
            }
        }
    },
    plugins: [],
}
