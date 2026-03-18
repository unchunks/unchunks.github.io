/**
 * src/content/projects/index.js — プロジェクトの一元管理
 *
 * 新しいプロジェクトを追加するには：
 *   1. このディレクトリに新しいファイルを作成 (例: mynewgame.jsx)
 *   2. 下でインポートして allProjects 配列に追加するだけ
 *
 * プロジェクトオブジェクトの必須フィールド:
 *   id          : string  — URLに使われる識別子 (/projects/:id)
 *   title       : string  — 表示タイトル
 *   description : string  — 一覧カードの短い説明文
 *   tags        : string[] — カテゴリタグ
 *   icon        : string  — カードに表示する絵文字
 *   thumbBg     : string  — カードサムネイルの背景 (CSSグラデーション)
 *   thumbGlow   : string  — サムネイルのグロー効果 (radial-gradient など)
 *   details     : JSX     — プロジェクト詳細ページに表示するコンテンツ
 */

import { vialactea } from './vialactea';
import { rogue }     from './rogue';
// import { eneme }  from './eneme';
import { reversist } from './reversist';
// import { mynewgame } from './mynewgame'; ← 新しいゲームはここに追加

export const allProjects = [
    rogue,
    vialactea,
    // eneme,
    reversist,
    // mynewgame,
];
