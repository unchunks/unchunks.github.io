/**
 * src/content/projects/vialactea.jsx
 */
import React from 'react';

export const vialactea = {
    id: 'vialactea',
    title: 'Via Lactea',
    description: 'ドット絵調のイラストを用いたレトロな 2D シューティングゲーム。ハイスコアを目指せ！',
    tags: ['Shooting', 'Pixel Art', '2D'],

    icon: '🚀',
    thumbBg:   'linear-gradient(135deg, #060d2e, #0f2060)',
    thumbGlow: 'radial-gradient(circle, rgba(80,130,255,.5), transparent 65%)',

    githubUrl: 'https://github.com/unchunks/VIA-LACTEA',

    details: () => (
        <div className="space-y-10">

            <p style={{ color: 'var(--text-dim)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                ドット絵調のイラストを用いたレトロな 2D シューティングゲーム。
                敵を倒してスコアを稼ぎ、ハイスコアを目指せ。
                ただし、ボスを倒すとゲームクリアになりスコアが伸ばせなくなる——
                <strong style={{ color: 'var(--blue)' }}>クリアを急ぐか、稼ぎを優先するか</strong>の駆け引きがこのゲームの核心です。
            </p>

            <section>
                <h2 className="detail-h2">基本操作</h2>
                <table className="detail-table">
                    <thead>
                        <tr><th>操作</th><th>キー</th></tr>
                    </thead>
                    <tbody>
                        {[
                            ['左移動',   'A または ←'],
                            ['右移動',   'D または →'],
                            ['上移動',   'W または ↑'],
                            ['下移動',   'S または ↓'],
                            ['弾を発射', 'スペースキー'],
                        ].map(([op, key]) => (
                            <tr key={op}>
                                <td>{op}</td>
                                <td style={{ fontFamily: 'var(--font-mono)', color: 'var(--blue)' }}>{key}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <section>
                <h2 className="detail-h2">目的</h2>
                <ul className="detail-list">
                    <li>敵を倒してスコアを積み重ね、ハイスコアを更新する</li>
                    <li>最終的にボスを撃破してゲームクリアを目指す</li>
                </ul>
            </section>

            <section>
                <h2 className="detail-h2">駆け引きの要素</h2>
                <ul className="detail-list">
                    <li>敵の種類ごとに撃破スコアが異なる（強い敵ほど高得点）</li>
                    <li>スコアが低い敵ほど出現頻度が高く、稼ぎやすい</li>
                    <li>ボスを倒すとゲームクリアだが、その後スコアを伸ばせない</li>
                </ul>
            </section>

            <section>
                <h2 className="detail-h2">キャラクター仕様</h2>
                <div style={{ overflowX: 'auto' }}>
                    <table className="detail-table">
                        <thead>
                            <tr>
                                <th>名称</th><th>スコア</th><th>体力</th>
                                <th>サイズ</th><th>スピード</th><th>弾速</th><th>出現頻度</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { name: 'PLAYER',   score: '—',  hp: 3,  size: 30, spd: 10, bspd: 15, freq: '—',    c: 'var(--text-muted)' },
                                { name: 'STOP',     score: 40,   hp: 5,  size: 40, spd: 0,  bspd: 8,  freq: 34.25,  c: 'var(--text-dim)'   },
                                { name: 'STRAIGHT', score: 50,   hp: 5,  size: 40, spd: 5,  bspd: 15, freq: 27.4,   c: 'var(--text-dim)'   },
                                { name: 'ZIGZAG',   score: 80,   hp: 8,  size: 40, spd: 5,  bspd: 15, freq: 17.125, c: 'var(--green)'      },
                                { name: 'FAST',     score: 200,  hp: 3,  size: 30, spd: 10, bspd: 30, freq: 6.85,   c: 'var(--blue)'       },
                                { name: 'BOSS',     score: 1000, hp: 30, size: 80, spd: 3,  bspd: 15, freq: 0.274,  c: 'var(--red)'        },
                            ].map(r => (
                                <tr key={r.name}>
                                    <td style={{ color: '#fff', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{r.name}</td>
                                    <td style={{ color: r.c, fontWeight: 600 }}>{r.score}</td>
                                    <td>{r.hp}</td><td>{r.size}</td><td>{r.spd}</td>
                                    <td>{r.bspd}</td>
                                    <td style={{ color: 'var(--text-dim)' }}>{r.freq}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section>
                <h2 className="detail-h2">アイテム</h2>
                <table className="detail-table">
                    <thead>
                        <tr><th>名称</th><th>効果</th><th>持続</th></tr>
                    </thead>
                    <tbody>
                        {[
                            { name: 'BULLET', effect: '弾が 3 方向に増える',          duration: '5 秒間', color: 'var(--yellow)' },
                            { name: 'HEAL',   effect: '体力を 1 回復する',            duration: '即時',   color: 'var(--green)'  },
                            { name: 'SPEED',  effect: 'スピードが永続的に +5 上昇する', duration: '永続',   color: 'var(--blue)'   },
                        ].map(item => (
                            <tr key={item.name}>
                                <td style={{ color: item.color, fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{item.name}</td>
                                <td>{item.effect}</td>
                                <td style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', fontSize: '.75rem' }}>{item.duration}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

        </div>
    ),
};
