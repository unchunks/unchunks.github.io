/**
 * src/content/posts/index.js — 記事（DevLog）の一元管理
 *
 * 新しい記事を追加するには：
 *   1. このディレクトリに新しいファイルを作成 (例: 2025_01_my_post.js)
 *   2. 下でインポートして allPosts 配列に追加するだけ
 *
 * 記事オブジェクトの必須フィールド:
 *   id       : number  — ユニークな数値 ID
 *   title    : string  — 記事タイトル
 *   date     : string  — "YYYY-MM-DD" 形式
 *   category : string  — カテゴリ文字列 (例: "Engineering", "Design")
 *   excerpt  : string  — 一覧に表示する短い説明（〜100文字程度）
 *   content  : JSX     — 記事本文（省略時は excerpt を表示）
 */

// import { post_2025_10_24 } from './2025_10_24_physics_engine';  ← 新しい記事はここに追加（.jsxでもOK）

export const allPosts = [
    // post_2025_10_24,
];
