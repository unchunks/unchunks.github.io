/**
 * src/content/projects/rogue.jsx
 */
import React from 'react';

export const rogue = {
    id: 'rogue',
    title: 'Rogue',
    description: 'ランダム生成ダンジョンを探索するローグライクゲーム。死んだら最初からやり直し。',
    tags: ['Roguelike', 'Game Dev'],

    icon: '⚔️',
    thumbBg:   'linear-gradient(135deg, #0e0e0e, #1e1e2e)',
    thumbGlow: 'radial-gradient(circle, rgba(180,160,255,.3), transparent 65%)',

    githubUrl: 'https://github.com/unchunks/Rogue',

    details: () => (
        <div className="space-y-10">

            <p style={{ color: 'var(--text-dim)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                ランダム生成されるダンジョンを探索する、王道ローグライクゲームです。
                毎回異なるマップ・敵配置で繰り返し遊べます。
                死んだらすべてを失い最初からやり直し——<strong style={{ color: 'var(--green)' }}>永続死（パーマデス）</strong>による緊張感が特徴です。
            </p>

            <section>
                <h2 className="detail-h2">特徴</h2>
                <ul className="detail-list">
                    <li>プロシージャル生成によるランダムマップ</li>
                    <li>パーマデス（死んだら最初から）による高い緊張感</li>
                    <li>ターン制の戦闘システム</li>
                    <li>探索・収集・強化のサイクル</li>
                </ul>
            </section>

            <section>
                <h2 className="detail-h2">基本操作</h2>
                <table className="detail-table">
                    <thead>
                        <tr><th>操作</th><th>キー</th></tr>
                    </thead>
                    <tbody>
                        {[
                            ['移動', 'WASD または 矢印キー'],
                            ['攻撃', '移動キー（敵に隣接した状態で）'],
                            ['待機', 'スペースキー または Z'],
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
                <h2 className="detail-h2">開発メモ</h2>
                <p style={{ color: 'var(--text-dim)', lineHeight: 1.8 }}>
                    ローグライクのコア部分——ダンジョン自動生成・ターン制管理・パーマデスの実装を
                    学習目的で構築したプロジェクトです。ソースコードは GitHub で公開しています。
                </p>
            </section>

        </div>
    ),
};
