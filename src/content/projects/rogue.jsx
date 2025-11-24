import React from 'react';

export const rogue = {
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
};
