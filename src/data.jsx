import React from 'react';

/**
 * ==============================================
 * 設定エリア (SITE_DATA)
 * ここを編集するだけでサイトの内容が更新されます
 * ==============================================
 */
export const SITE_DATA = {
    profile: {
        name: "Indie Dev Zero",
        role: "Game Developer / Technical Artist",
        bio: "「コードで世界を描く」をモットーに、UnityとUnreal Engineでアクションゲームを中心に開発しています。シェーダー魔法使いを目指して修行中。",
        social: {
            github: "https://github.com",
            twitter: "https://twitter.com",
        }
    },
    // プロジェクト（ゲーム）リスト
    projects: [
        {
            id: "eneme",
            title: "えねMe",
            description: "プレイヤーの創造性と戦略的思考を融合させた新しいジャンルのゲーム。",
            tags: ["New Project", "Strategy"],
            imageColor: "from-orange-500 to-red-500",
            link: "/projects/eneme",
            details: (
                <div className="space-y-6">
                    <p className="text-slate-300">
                        このページは、「えねMe」についての情報を発信するものです。
                    </p>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-700 pb-2">プロジェクトの概要</h2>
                        <p className="text-slate-300 mb-4">
                            新プロジェクトは、プレイヤーの創造性と戦略的思考を融合させた新しいジャンルのゲームを目指しています。現時点で以下の特徴を予定しています：
                        </p>
                        <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                            <li>プレイヤーがモンスターとして冒険者からダンジョンを守るユニークなゲームプレイ</li>
                            <li>プレイヤーの戦略によって成長するモンスターと冒険者</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-700 pb-2">開発スケジュール</h2>
                        <p className="text-slate-300">
                            現在、プロジェクトは企画段階にあり、今後1年間で基本的なゲームシステムの開発を進める予定です。ベータテストは2025年夏頃を予定しており、正式リリースは2026年を目指しています。
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-700 pb-2">まだ見ぬファンの皆様へ</h2>
                        <p className="text-slate-300">
                            このプロジェクトは私が初めて発表するものです。当然ファンなどいるはずもないのですが、今後の私の活動を見て、楽しみにしていただければと思います。
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: "rogue",
            title: "Rogue",
            description: "ローグライクゲームプロジェクト。",
            tags: ["Roguelike", "Game Dev"],
            imageColor: "from-gray-700 to-slate-600",
            link: "/projects/rogue",
            details: (
                <div className="space-y-6">
                    <p className="text-slate-300">
                        このページは、「Rogue」についての情報を発信するものです。
                    </p>
                    <div className="mt-4">
                        <a href="https://github.com/unchunks/Rogue" target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded transition-colors">
                            ソースコード (GitHub)
                        </a>
                    </div>
                </div>
            )
        },
        {
            id: "vialactea",
            title: "Via Lactea",
            description: "ドット絵調のイラストを用いたレトロな2Dシューティングゲーム。",
            tags: ["Shooting", "Pixel Art", "2D"],
            imageColor: "from-blue-600 to-indigo-600",
            link: "/projects/vialactea",
            details: (
                <div className="space-y-8">
                    <p className="text-slate-300 text-lg">
                        ドット絵調のイラストを用いたレトロな2Dシューティングゲーム。ハイスコアを目指せ！
                    </p>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-700 pb-2">ゲーム仕様</h2>
                        <h3 className="text-xl font-semibold text-emerald-400 mb-3">基本操作</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-800 text-slate-200">
                                        <th className="p-3 border border-slate-700">操作</th>
                                        <th className="p-3 border border-slate-700">キー</th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-300">
                                    <tr><td className="p-3 border border-slate-700">左</td><td className="p-3 border border-slate-700">A または ←</td></tr>
                                    <tr><td className="p-3 border border-slate-700">右</td><td className="p-3 border border-slate-700">D または →</td></tr>
                                    <tr><td className="p-3 border border-slate-700">上</td><td className="p-3 border border-slate-700">W または ↑</td></tr>
                                    <tr><td className="p-3 border border-slate-700">下</td><td className="p-3 border border-slate-700">S または ↓</td></tr>
                                    <tr><td className="p-3 border border-slate-700">発射</td><td className="p-3 border border-slate-700">スペースキー</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-700 pb-2">目的</h2>
                        <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                            <li>敵を倒してハイスコアを目指す</li>
                            <li>ボスを倒す</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-700 pb-2">駆け引きの要素</h2>
                        <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                            <li>敵の種類によって倒したときのスコアが異なる</li>
                            <li>スコアが低い敵ほど出現頻度が高い</li>
                            <li>ボスを倒すとゲームクリアだが、それ以上スコアが伸ばせない</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-700 pb-2">キャラクターの仕様</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse text-sm">
                                <thead>
                                    <tr className="bg-slate-800 text-slate-200">
                                        <th className="p-2 border border-slate-700">名称</th>
                                        <th className="p-2 border border-slate-700">見た目</th>
                                        <th className="p-2 border border-slate-700">スコア</th>
                                        <th className="p-2 border border-slate-700">体力</th>
                                        <th className="p-2 border border-slate-700">サイズ</th>
                                        <th className="p-2 border border-slate-700">スピード</th>
                                        <th className="p-2 border border-slate-700">弾速</th>
                                        <th className="p-2 border border-slate-700">出現頻度</th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-300">
                                    <tr>
                                        <td className="p-2 border border-slate-700">PLAYER</td>
                                        <td className="p-2 border border-slate-700"><img src="/projects/ViaLactea/image/player.png" width="50" alt="Player" /></td>
                                        <td className="p-2 border border-slate-700">-</td>
                                        <td className="p-2 border border-slate-700">3</td>
                                        <td className="p-2 border border-slate-700">30</td>
                                        <td className="p-2 border border-slate-700">10</td>
                                        <td className="p-2 border border-slate-700">15</td>
                                        <td className="p-2 border border-slate-700">-</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 border border-slate-700">STOP</td>
                                        <td className="p-2 border border-slate-700"><img src="/projects/ViaLactea/image/stop.png" width="50" alt="Stop" /></td>
                                        <td className="p-2 border border-slate-700">40</td>
                                        <td className="p-2 border border-slate-700">5</td>
                                        <td className="p-2 border border-slate-700">40</td>
                                        <td className="p-2 border border-slate-700">0</td>
                                        <td className="p-2 border border-slate-700">8</td>
                                        <td className="p-2 border border-slate-700">34.25</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 border border-slate-700">STRAIGHT</td>
                                        <td className="p-2 border border-slate-700"><img src="/projects/ViaLactea/image/straight.png" width="50" alt="Straight" /></td>
                                        <td className="p-2 border border-slate-700">50</td>
                                        <td className="p-2 border border-slate-700">5</td>
                                        <td className="p-2 border border-slate-700">40</td>
                                        <td className="p-2 border border-slate-700">5</td>
                                        <td className="p-2 border border-slate-700">15</td>
                                        <td className="p-2 border border-slate-700">27.4</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 border border-slate-700">ZIGZAG</td>
                                        <td className="p-2 border border-slate-700"><img src="/projects/ViaLactea/image/zigzag.png" width="50" alt="Zigzag" /></td>
                                        <td className="p-2 border border-slate-700">80</td>
                                        <td className="p-2 border border-slate-700">8</td>
                                        <td className="p-2 border border-slate-700">40</td>
                                        <td className="p-2 border border-slate-700">5</td>
                                        <td className="p-2 border border-slate-700">15</td>
                                        <td className="p-2 border border-slate-700">17.125</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 border border-slate-700">FAST</td>
                                        <td className="p-2 border border-slate-700"><img src="/projects/ViaLactea/image/fast.png" width="50" alt="Fast" /></td>
                                        <td className="p-2 border border-slate-700">200</td>
                                        <td className="p-2 border border-slate-700">3</td>
                                        <td className="p-2 border border-slate-700">30</td>
                                        <td className="p-2 border border-slate-700">10</td>
                                        <td className="p-2 border border-slate-700">30</td>
                                        <td className="p-2 border border-slate-700">6.85</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 border border-slate-700">BOSS</td>
                                        <td className="p-2 border border-slate-700"><img src="/projects/ViaLactea/image/boss.png" width="50" alt="Boss" /></td>
                                        <td className="p-2 border border-slate-700">1000</td>
                                        <td className="p-2 border border-slate-700">30</td>
                                        <td className="p-2 border border-slate-700">80</td>
                                        <td className="p-2 border border-slate-700">3</td>
                                        <td className="p-2 border border-slate-700">15</td>
                                        <td className="p-2 border border-slate-700">0.274</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-700 pb-2">アイテム</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-800 text-slate-200">
                                        <th className="p-3 border border-slate-700">名称</th>
                                        <th className="p-3 border border-slate-700">見た目</th>
                                        <th className="p-3 border border-slate-700">効果</th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-300">
                                    <tr>
                                        <td className="p-3 border border-slate-700">BULLET</td>
                                        <td className="p-3 border border-slate-700"><img src="/projects/ViaLactea/image/bullet.png" alt="Bullet" /></td>
                                        <td className="p-3 border border-slate-700">5秒間プレイヤーの発射する弾が3方向に増える</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border border-slate-700">HEAL</td>
                                        <td className="p-3 border border-slate-700"><img src="/projects/ViaLactea/image/heal.png" alt="Heal" /></td>
                                        <td className="p-3 border border-slate-700">体力を1回復する</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border border-slate-700">SPEED</td>
                                        <td className="p-3 border border-slate-700"><img src="/projects/ViaLactea/image/speed.png" alt="Speed" /></td>
                                        <td className="p-3 border border-slate-700">スピードが永続的に5上昇する</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="mt-8">
                        <a href="https://github.com/unchunks/VIA-LACTEA" target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded transition-colors">
                            ソースコード (GitHub)
                        </a>
                    </div>
                </div>
            )
        },
        {
            id: 1,
            title: "Neon Dash",
            description: "サイバーパンクな世界を駆け抜ける高速パルクールアクション。自作のカスタム物理エンジンを使用。",
            tags: ["Unity", "C#", "Action"],
            imageColor: "from-purple-500 to-pink-500", // グラデーションカラー
            link: "#"
        },
        {
            id: 2,
            title: "Forest of Pixels",
            description: "失われたピクセルを探す2D探索型RPG。ドット絵はすべて手打ちで制作しました。",
            tags: ["Godot", "Pixel Art", "RPG"],
            imageColor: "from-emerald-500 to-teal-500",
            link: "#"
        },
        {
            id: 3,
            title: "Shader Lab",
            description: "ゲーム開発で使える汎用シェーダー集。水、炎、ホログラムなどの表現をオープンソースで公開。",
            tags: ["HLSL", "Shader Graph", "Tech Art"],
            imageColor: "from-blue-500 to-cyan-500",
            link: "#"
        }
    ],
    // 記事（DevLog）リスト - 新しい記事はここに追加するだけ
    posts: [
        {
            id: 101,
            title: "カスタム物理エンジンの苦難と解決策",
            date: "2023-10-24",
            category: "Engineering",
            content: "UnityのPhysXを使わずに独自の物理挙動を実装しようとした際の壁抜け問題について。レイキャストの長さを動的に調整することで解決しました..."
        },
        {
            id: 102,
            title: "ピクセルアートにおける色選びのコツ",
            date: "2023-11-05",
            category: "Art",
            content: "色が多すぎると画面が濁って見えます。パレットを4色に制限することで、逆に表現力が上がった事例を紹介します。彩度を統一することが重要です..."
        },
        {
            id: 103,
            title: "次回作のプロトタイプ進捗 #01",
            date: "2023-11-15",
            category: "DevLog",
            content: "ローグライク×リズムゲームの融合を目指してプロトタイプを作成中。BPMに合わせて敵が動くロジックまでは完成。次はエフェクトの実装に入ります..."
        }
    ]
};
