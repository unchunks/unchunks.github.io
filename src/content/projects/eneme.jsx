import React from 'react';

export const eneme = {
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
};
