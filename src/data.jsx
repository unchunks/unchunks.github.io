import { eneme } from './content/projects/eneme';
import { rogue } from './content/projects/rogue';
import { vialactea } from './content/projects/vialactea';
import { posts } from './content/posts';

/**
 * ==============================================
 * 設定エリア (SITE_DATA)
 * プロジェクトや記事は src/content ディレクトリ内のファイルを編集してください
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
        eneme,
        rogue,
        vialactea,
        // 新しいプロジェクトを追加する場合は、
        // 1. src/content/projects/ に新しいファイルを作成 (例: mynewgame.jsx)
        // 2. このファイルでインポート: import { mynewgame } from './content/projects/mynewgame';
        // 3. ここに追加: mynewgame,
    ],
    // 記事（DevLog）リスト
    posts: posts
};
