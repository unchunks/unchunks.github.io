# unchunks portfolio

ゲーム開発者 unchunks のポートフォリオサイト。  
React + Vite + Tailwind CSS で構築されています。

---

## セットアップ

```bash
npm install
npm run dev      # 開発サーバー起動 → http://localhost:5173
npm run build    # 本番ビルド
npm run preview  # ビルド結果をローカルで確認
```

---

## ディレクトリ構造

```
src/
├── App.jsx                          ★ページレジストリ（ページ追加の起点）
├── data.jsx                         ★サイト設定の一元管理
├── index.css                         デザインシステム CSS 変数
├── main.jsx                          エントリポイント
│
├── hooks/                            カスタムフック
│   ├── useReveal.js                  スクロール出現アニメーション
│   ├── useCountUp.js                 カウントアップ数値
│   └── useScrollProgress.js         スクロール進行率
│
├── components/
│   ├── common/                       全ページ共通コンポーネント
│   │   ├── PageLayout.jsx            ページラッパー（Nav+Footer+背景）
│   │   ├── Navigation.jsx            自動生成ナビゲーションバー
│   │   ├── Footer.jsx
│   │   ├── ParticleCanvas.jsx        パーティクル背景
│   │   └── ScrollProgress.jsx       ページ上部の進行バー
│   └── ui/                           汎用 UI コンポーネント
│       ├── Button.jsx
│       ├── SectionHeader.jsx
│       ├── Tag.jsx
│       ├── ProjectCard.jsx
│       ├── SkillBar.jsx
│       ├── StatBox.jsx
│       └── TerminalCard.jsx
│
├── pages/                            各ページ
│   ├── Home.jsx
│   ├── Projects.jsx
│   ├── ProjectDetail.jsx
│   ├── Blog.jsx
│   └── Contact.jsx
│
└── content/                          ★編集頻度が高いコンテンツ
    ├── projects/
    │   ├── index.js                  プロジェクト一覧（ここに追加）
    │   ├── vialactea.jsx
    │   ├── rogue.jsx
    │   └── eneme.jsx                 （現在非公開）
    └── posts/
        ├── index.js                  記事一覧（ここに追加）
        └── _template.js              記事テンプレート
```

---

## ✅ 新しいページを追加する（2ステップ）

### Step 1 — ページファイルを作成

```jsx
// src/pages/About.jsx
import React from 'react';
import { PageLayout }    from '../components/common/PageLayout';
import { SectionHeader } from '../components/ui/SectionHeader';

export default function About() {
    return (
        <PageLayout>
            <main className="pt-32 pb-16 px-4 sm:px-8 max-w-4xl mx-auto">
                <SectionHeader tag="About" title="About Me" />
                <p>ここにコンテンツを書く。</p>
            </main>
        </PageLayout>
    );
}
```

### Step 2 — App.jsx に登録

```js
// src/App.jsx
import About from './pages/About';  // ← インポート追加

export const NAV_PAGES = [
    { path: '/projects', label: 'Projects', element: <Projects /> },
    { path: '/blog',     label: 'DevLog',   element: <Blog />     },
    { path: '/contact',  label: 'Contact',  element: <Contact />  },
    { path: '/about',    label: 'About',    element: <About />    }, // ← 追加
];
```

ナビゲーションバーに自動でリンクが追加されます。

---

## ✅ 新しいプロジェクトを追加する（2ステップ）

### Step 1 — プロジェクトファイルを作成

```jsx
// src/content/projects/mynewgame.jsx
import React from 'react';

export const mynewgame = {
    id: 'mynewgame',                   // URLに使われる (/projects/mynewgame)
    title: 'My New Game',
    description: '短い説明文（カード表示用）',
    tags: ['Action', '2D'],
    icon: '🎯',                        // カードに表示する絵文字
    thumbBg:   'linear-gradient(135deg, #0a2030, #1a4060)',
    thumbGlow: 'radial-gradient(circle, rgba(0,200,255,.4), transparent 70%)',
    githubUrl: 'https://github.com/unchunks/mynewgame',  // 任意
    details: (
        <div className="space-y-8">
            <p style={{ color: 'var(--text-dim)', lineHeight: 1.8 }}>詳細ページのコンテンツ。</p>
        </div>
    ),
};
```

### Step 2 — index.js に登録

```js
// src/content/projects/index.js
import { mynewgame } from './mynewgame';  // ← インポート追加

export const allProjects = [
    rogue,
    vialactea,
    mynewgame,  // ← 追加
];
```

---

## ✅ 新しい記事（DevLog）を追加する（2ステップ）

### Step 1 — `_template.js` をコピーして編集

```bash
cp src/content/posts/_template.js src/content/posts/2025_10_24_physics.js
```

### Step 2 — index.js に登録

```js
// src/content/posts/index.js
import { post_2025_10_24 } from './2025_10_24_physics';

export const allPosts = [
    post_2025_10_24,
];
```

---

## デザインシステム

CSS 変数は `src/index.css` の `:root` で一元管理されています。  
カラーやフォントを変更する場合はここだけ編集すれば全ページに反映されます。

| 変数               | 用途                  |
|--------------------|-----------------------|
| `--green`          | メインアクセント       |
| `--blue`           | サブアクセント         |
| `--bg`             | ページ背景             |
| `--surface`        | カード背景             |
| `--font-display`   | 見出しフォント         |
| `--font-mono`      | コード・UI フォント    |
| `--font-body`      | 本文フォント           |
