/**
 * data.jsx — サイト全体の設定
 *
 * プロフィール・SNS・ストアのリンクなどをここで一元管理します。
 * プロジェクトや記事は src/content/ 配下のファイルで管理してください。
 */

import { allProjects } from './content/projects';
import { allPosts }    from './content/posts';

export const SITE_DATA = {
    profile: {
        name: 'unchunks',
        role: 'Game Developer',
        bio: 'ストレスフリーに楽しく遊べるゲームを目指して、Unity・UnrealEngine などで開発しています。ゲーム会社に就職することを目標に奮闘中。',
        skills: [
            { name: 'Unity',          pct: 90 },
            { name: 'C#',             pct: 85 },
            { name: 'Unreal Engine',  pct: 60 },
            { name: 'C++',            pct: 55 },
            { name: 'Game Design',    pct: 80 },
            { name: 'Pixel Art',      pct: 70 },
        ],
        stats: [
            { label: 'Projects Released', value: 2  },
            { label: 'Game Engines',      value: 4  },
            { label: 'Passion',           value: 100, suffix: '%' },
        ],
    },
    social: {
        github:  'https://github.com/unchunks',
        twitter: 'https://x.com/unchunks_dev',
    },
    stores: {
        steam:   'https://store.steampowered.com/developer/unchunks',
        itchio:  'https://unchunks.itch.io',
        // googleplay: '',
        // appstore:   '',
    },

    // --- Content (src/content/ 配下で管理) ---
    projects: allProjects,
    posts:    allPosts,
};
