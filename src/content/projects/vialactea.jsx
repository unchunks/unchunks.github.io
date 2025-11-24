import React from 'react';

export const vialactea = {
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
};
