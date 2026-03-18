/**
 * src/content/posts/_template.js
 * ================================================================
 * 記事（DevLog）ファイルのテンプレートです。
 *
 * 【使い方】
 *   1. このファイルをコピー
 *        cp _template.js YYYY_MM_DD_slug.jsx
 *        例: cp _template.js 2025_10_24_physics_engine.jsx
 *   2. エクスポート名・各フィールドを編集
 *   3. index.js に登録
 *        import { post_2025_10_24 } from './2025_10_24_physics_engine';
 *        export const allPosts = [ ..., post_2025_10_24 ];
 * ================================================================
 */
import React from 'react';
import { Callout } from '../../components/ui/Callout';

export const post_YYYYMMDD_SLUG = {

    /* ── メタ情報（必須） ──────────────────────────────── */

    /** ユニークな数値 ID。既存の記事と重複しないようにしてください。
     *  管理しやすいよう日付ベース（例: 20251024）にするのがおすすめです */
    id: 20251024,

    /** 記事タイトル */
    title: '記事タイトルをここに書く',

    /** 公開日。"YYYY-MM-DD" 形式で記入してください */
    date: '2025-10-24',

    /** カテゴリ。一覧ページのフィルタリングに使われます。
     *  推奨カテゴリ: 'Engineering' | 'Design' | 'GameDev' | 'Diary' | 'Release' */
    category: 'Engineering',

    /** 一覧カード・トップページに表示される概要（〜100字推奨）
     *  content が省略された場合はこのテキストが詳細ページにも表示されます */
    excerpt: 'ここに記事の概要を書きます。一覧ページのカードに表示されます。100字程度が目安です。',


    /* ── 本文（任意） ──────────────────────────────────── */
    /**
     * 記事詳細ページのフルコンテンツです（JSX）。
     * 省略した場合は excerpt がそのまま詳細ページに表示されます。
     *
     * 使えるクラス（ProjectDetail.jsx の DETAIL_STYLES で定義）:
     *   .detail-h2     … セクション見出し（> プレフィックス付き）
     *   .detail-table  … データテーブル
     *   .detail-list   … 箇条書きリスト（▸ マーカー付き）
     *   .space-y-6/8   … 子要素の縦間隔
     *
     * 使えるインラインスタイル変数:
     *   var(--text-dim)    … 本文テキスト色
     *   var(--green)       … アクセントグリーン
     *   var(--blue)        … アクセントブルー
     *   var(--yellow)      … アクセントイエロー
     *   var(--red)         … アクセントレッド
     *   var(--text-muted)  … 薄いテキスト色
     *   var(--font-mono)   … 等幅フォント（コード向き）
     *   var(--font-display)… 見出しフォント
     */
    content: () => (
        <div className="space-y-8">

            {/* ── リード文（記事冒頭の概要） ────────────── */}
            <p style={{ color: 'var(--text-dim)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                記事の導入文をここに書きます。excerpt より少し詳しく、
                この記事で何を話すかを読者に伝えましょう。
            </p>


            {/* ── テキストセクション ───────────────────────
                通常の本文段落です。最も使用頻度が高いパターンです  */}
            <section>
                <h2 className="detail-h2">セクション見出し</h2>
                <p style={{ color: 'var(--text-dim)', lineHeight: 1.8 }}>
                    本文をここに書きます。一つの {'<p>'} タグに長文を詰め込むより、
                    段落を分けた方が読みやすくなります。
                </p>
                <p style={{ color: 'var(--text-dim)', lineHeight: 1.8, marginTop: '1rem' }}>
                    次の段落。複数の {'<p>'} を並べる場合は marginTop で間隔を空けてください。
                </p>
            </section>


            {/* ── 箇条書きセクション ──────────────────────
                ポイントの列挙・手順説明などに使います            */}
            <section>
                <h2 className="detail-h2">学んだこと・ポイント</h2>
                <ul className="detail-list">
                    <li>箇条書きの項目をここに書きます</li>
                    <li>リストアイテムには ▸ マーカーが自動でつきます</li>
                    <li>3〜7項目程度が読みやすいです</li>
                </ul>
            </section>


            {/* ── コードブロック ──────────────────────────
                コードスニペットを貼るときに使います              */}
            <section>
                <h2 className="detail-h2">コードサンプル</h2>
                <p style={{ color: 'var(--text-dim)', lineHeight: 1.8, marginBottom: '1rem' }}>
                    コードの説明文をここに書きます。
                </p>
                <pre style={{
                    background: 'rgba(0,0,0,.5)',
                    border: '1px solid var(--border)',
                    borderRadius: '4px',
                    padding: '1.2rem 1.5rem',
                    overflowX: 'auto',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '.8rem',
                    lineHeight: 1.8,
                    color: 'var(--text)',
                }}>
{`// C# サンプル（インデントはそのまま保持されます）
void Update()
{
    if (Input.GetKeyDown(KeyCode.Space))
    {
        Jump();
    }
}`}
                </pre>
            </section>


            {/* ── ハイライト吹き出し ───────────────────────
                重要なポイント・気づき・TIP を強調するときに使います */}
            <section>
                <h2 className="detail-h2">気づき・TIP</h2>

                {/* GREEN: 成功・TIP */}
                <Callout color="green" label="TIP">
                    うまくいったこと・おすすめの方法をここに書きます。
                </Callout>

                {/* BLUE: 情報・参考 */}
                <Callout color="blue" label="NOTE" style={{ marginTop: '1rem' }}>
                    補足情報・参考リンクなどをここに書きます。
                </Callout>

                {/* RED: 注意・失敗談 */}
                <Callout color="red" label="WARN" style={{ marginTop: '1rem' }}>
                    ハマったこと・注意点をここに書きます。
                </Callout>
            </section>


            {/* ── 比較テーブル ────────────────────────────
                Before/After や選択肢の比較などに使います        */}
            <section>
                <h2 className="detail-h2">比較・結果</h2>
                <table className="detail-table">
                    <thead>
                        <tr>
                            <th>項目</th>
                            <th>Before</th>
                            <th>After</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            ['フレームレート', '30 FPS', '60 FPS'],
                            ['ロード時間',     '4.2 sec', '1.1 sec'],
                            ['メモリ使用量',   '512 MB',  '280 MB'],
                        ].map(([item, before, after]) => (
                            <tr key={item}>
                                <td>{item}</td>
                                <td style={{ color: 'var(--red)'   }}>{before}</td>
                                <td style={{ color: 'var(--green)' }}>{after}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>


            {/* ── まとめ ──────────────────────────────────
                記事の締めくくりに使います                       */}
            <section>
                <h2 className="detail-h2">まとめ</h2>
                <p style={{ color: 'var(--text-dim)', lineHeight: 1.8 }}>
                    記事のまとめをここに書きます。次のアクションや今後の展望なども
                    ここに書くと読者に次の記事を期待させられます。
                </p>
            </section>

        </div>
    ),
};
