/**
 * src/content/projects/_template.jsx
 * ================================================================
 * プロジェクトファイルのテンプレートです。
 *
 * 【使い方】
 *   1. このファイルをコピー
 *        cp _template.jsx mygame.jsx
 *   2. エクスポート名・各フィールドを編集
 *   3. index.js に登録
 *        import { mygame } from './mygame';
 *        export const allProjects = [ ..., mygame ];
 * ================================================================
 */
import React from 'react';

export const project_TEMPLATE = {

    /* ── 基本情報（必須） ──────────────────────────────── */

    /** URL に使われる識別子。英数字とハイフンのみ。重複不可。
     *  例: 'my-game' → /projects/my-game */
    id: 'my-game',

    /** カード・詳細ページに表示されるタイトル */
    title: 'ゲームタイトル',

    /** プロジェクト一覧カードに表示される短い説明（〜60字推奨） */
    description: 'ゲームの概要を一文で説明します。カードに表示されます。',

    /** カテゴリタグ。フィルタリングにも使われます。
     *  既存タグ例: 'Shooting' | 'Roguelike' | 'Pixel Art' | '2D' | '3D'
     *             'Action' | 'Puzzle' | 'Strategy' | 'RPG' | 'Game Dev'
     *             'New Project' */
    tags: ['Action', '2D'],


    /* ── カードビジュアル（必須） ───────────────────────── */

    /** カードに表示する絵文字アイコン */
    icon: '🎮',

    /** カードサムネイルの背景グラデーション
     *  参考カラーセット:
     *    青系: 'linear-gradient(135deg, #0a1530, #1a2560)'
     *    赤系: 'linear-gradient(135deg, #2d0a0a, #5a1a00)'
     *    緑系: 'linear-gradient(135deg, #0a1a0a, #1a3a1a)'
     *    紫系: 'linear-gradient(135deg, #1a0a2d, #2d1a5a)'
     *    暗系: 'linear-gradient(135deg, #101010, #2a2a2a)'  */
    thumbBg: 'linear-gradient(135deg, #0a1530, #1a2560)',

    /** サムネイル上のグロー効果（任意・省略可）
     *  色は thumbBg の雰囲気に合わせて変えてください
     *  例: 'radial-gradient(circle, rgba(100,150,255,.45), transparent 70%)'
     *      'radial-gradient(circle, rgba(255,100,0,.4),    transparent 70%)'
     *      'radial-gradient(circle, rgba(0,255,136,.35),   transparent 70%)' */
    thumbGlow: 'radial-gradient(circle, rgba(100,150,255,.45), transparent 70%)',


    /* ── 外部リンク（任意・不要な行は削除してください） ── */

    /** GitHub リポジトリ URL（githubUrl のみの場合はこちらでも可） */
    // githubUrl: 'https://github.com/unchunks/my-game',

    /**
     * 外部リンクボタン（詳細ページ下部に横並びで表示）
     * githubUrl より links を推奨（複数ボタンを並べられる）
     * type: 'github' | 'itchio' | 'steam' | 'play' | 'web'
     */
    links: [
        // { label: 'itch.io でプレイ', url: 'https://unchunks.itch.io/my-game',               type: 'itchio' },
        // { label: 'Steam',            url: 'https://store.steampowered.com/app/XXXXXX',       type: 'steam'  },
        // { label: 'ソースコードを見る', url: 'https://github.com/unchunks/my-game',           type: 'github' },
        // { label: 'ブラウザでプレイ',  url: 'https://unchunks.itch.io/my-game',              type: 'play'   },
        // { label: '公式サイト',        url: 'https://example.com',                            type: 'web'    },
    ],


    /* ── 詳細ページコンテンツ（必須） ──────────────────── */
    /**
     * /projects/:id で表示される詳細ページの本文です。
     * 使えるクラス（ProjectDetail.jsx の DETAIL_STYLES で定義）:
     *
     *   .detail-h2   … セクション見出し（> プレフィックス付き）
     *   .detail-table … データテーブル
     *   .detail-list  … 箇条書きリスト（▸ マーカー付き）
     *   .space-y-6/8/10 … 子要素の縦間隔
     *
     * 使えるインラインスタイル変数:
     *   var(--text-dim)    … 本文テキスト色
     *   var(--green)       … アクセントグリーン
     *   var(--blue)        … アクセントブルー
     *   var(--red)         … アクセントレッド
     *   var(--yellow)      … アクセントイエロー
     *   var(--text-muted)  … 薄いテキスト色
     *   var(--font-mono)   … 等幅フォント
     *   var(--font-display)… 見出しフォント
     */
    details: (
        <div className="space-y-10">

            {/* ── リード文（ページ冒頭の概要） ────────────── */}
            <p style={{ color: 'var(--text-dim)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                ゲームの概要をここに書きます。詳細ページのリード文になります。
                複数文に渡っても構いません。
            </p>


            {/* ── テキストセクション ───────────────────────
                シンプルな説明文が必要なときに使います            */}
            <section>
                <h2 className="detail-h2">プロジェクト概要</h2>
                <p style={{ color: 'var(--text-dim)', lineHeight: 1.8 }}>
                    ここに説明文を書きます。複数段落にしたい場合は
                    {'<p>'} タグを増やしてください。
                </p>
            </section>


            {/* ── 箇条書きセクション ──────────────────────
                特徴・仕様・ルールの列挙に使います               */}
            <section>
                <h2 className="detail-h2">特徴</h2>
                <ul className="detail-list">
                    <li>特徴や仕様を箇条書きで並べます</li>
                    <li>項目を追加・削除してください</li>
                    <li>3〜5項目程度が読みやすいです</li>
                </ul>
            </section>


            {/* ── キーバインドテーブル ─────────────────────
                操作説明など「2列の対応表」に使います            */}
            <section>
                <h2 className="detail-h2">操作方法</h2>
                <table className="detail-table">
                    <thead>
                        <tr><th>操作</th><th>キー / ボタン</th></tr>
                    </thead>
                    <tbody>
                        {[
                            ['移動',   'WASD または 矢印キー'],
                            ['ジャンプ', 'スペースキー'],
                            ['攻撃',   'Zキー または クリック'],
                            ['ポーズ',  'Esc または P'],
                        ].map(([action, key]) => (
                            <tr key={action}>
                                <td>{action}</td>
                                <td style={{ color: 'var(--blue)', fontFamily: 'var(--font-mono)' }}>{key}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>


            {/* ── データテーブル ───────────────────────────
                キャラクター仕様・アイテム一覧などに使います     */}
            <section>
                <h2 className="detail-h2">キャラクター仕様</h2>
                <div style={{ overflowX: 'auto' }}>
                    <table className="detail-table">
                        <thead>
                            <tr>
                                <th>名称</th>
                                <th>体力</th>
                                <th>攻撃力</th>
                                <th>スピード</th>
                                <th>備考</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { name: 'PLAYER', hp: 10, atk: 5,  spd: 8,  note: 'プレイヤーキャラ' },
                                { name: 'ENEMY A', hp: 3,  atk: 2,  spd: 4,  note: '基本敵' },
                                { name: 'BOSS',   hp: 50, atk: 10, spd: 2,  note: 'ステージボス' },
                            ].map(row => (
                                <tr key={row.name}>
                                    <td style={{ color: '#fff', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                                        {row.name}
                                    </td>
                                    <td style={{ color: 'var(--green)' }}>{row.hp}</td>
                                    <td style={{ color: 'var(--red)' }}>{row.atk}</td>
                                    <td>{row.spd}</td>
                                    <td style={{ color: 'var(--text-dim)' }}>{row.note}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>


            {/* ── 開発メモ・補足（任意） ──────────────────
                実装のこだわりや苦労話などを書くと良いです       */}
            <section>
                <h2 className="detail-h2">開発メモ</h2>
                <p style={{ color: 'var(--text-dim)', lineHeight: 1.8 }}>
                    実装で工夫した点や苦労した点などを書きます。
                </p>
            </section>

        </div>
    ),
};
