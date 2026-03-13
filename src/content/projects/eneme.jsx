/**
 * src/content/projects/eneme.jsx
 *
 * 現在 index.js でコメントアウト中。
 * 公開するときは index.js の該当行のコメントを外してください。
 */
import React from 'react';

export const eneme = {
    id: 'eneme',
    title: 'えねMe',
    description: 'プレイヤーがモンスターとしてダンジョンを守る、敵視点のローグライク。',
    tags: ['New Project', 'Strategy', 'Roguelike'],

    icon: '👾',
    thumbBg:   'linear-gradient(135deg, #1a0800, #3d1200)',
    thumbGlow: 'radial-gradient(circle, rgba(255,120,0,.45), transparent 65%)',

    // githubUrl: '',   // 公開後に追記

    details: () => (
        <div className="space-y-10">

            <p style={{ color: 'var(--text-dim)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                通常のローグライクとは<strong style={{ color: 'var(--yellow)' }}>視点を逆転</strong>させた新感覚ゲーム。
                プレイヤーはモンスターとなり、ダンジョンに侵入してくる冒険者からフロアを守ります。
                冒険者の行動を読みながら、仲間のモンスターを配置・指揮して撃退しましょう。
            </p>

            <section>
                <h2 className="detail-h2">コンセプト</h2>
                <ul className="detail-list">
                    <li>「倒される側」を操作するという逆転の発想</li>
                    <li>冒険者の攻略パターンを読む戦略的なゲームプレイ</li>
                    <li>モンスターと冒険者がともに成長していく動的なバランス</li>
                    <li>プレイヤーの戦術によってダンジョンの構造が変化する</li>
                </ul>
            </section>

            <section>
                <h2 className="detail-h2">開発スケジュール（暫定）</h2>
                <table className="detail-table">
                    <thead>
                        <tr><th>フェーズ</th><th>内容</th><th>時期</th></tr>
                    </thead>
                    <tbody>
                        {[
                            ['企画',           'ゲームデザイン・仕様策定',     '〜 2025 年初',   'var(--text-dim)'  ],
                            ['プロトタイプ',   '基本システムの実装・検証',     '2025 年上半期',   'var(--yellow)'    ],
                            ['アルファ版',     'コアループ完成',               '2025 年夏頃',     'var(--yellow)'    ],
                            ['ベータテスト',   '外部テスタによる検証・調整',   '2025 年秋〜冬頃', 'var(--blue)'      ],
                            ['正式リリース',   'ストア公開',                   '2026 年予定',     'var(--green)'     ],
                        ].map(([phase, content, timing, color]) => (
                            <tr key={phase}>
                                <td style={{ color, fontWeight: 600 }}>{phase}</td>
                                <td>{content}</td>
                                <td style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', fontSize: '.75rem' }}>{timing}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <section>
                <h2 className="detail-h2">開発メモ</h2>
                <p style={{ color: 'var(--text-dim)', lineHeight: 1.8 }}>
                    このプロジェクトは現在企画・初期開発フェーズです。
                    詳細な仕様・ゲームプレイ動画などは決まり次第このページを更新します。
                </p>
            </section>

        </div>
    ),
};
