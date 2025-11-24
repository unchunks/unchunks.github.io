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
        name: "unchunks",
        role: "Game Developer",
        bio: "ストレスフリーに楽しく遊べるゲームを目指して、Unity、UnrealEngineなどで開発しています。ゲーム会社に就職することを目標に奮闘中。",
        social: {
            github: "https://github.com/unchunks",
            twitter: "https://x.com/unchunks",
        }
    },
    // プロジェクト（ゲーム）リスト
    projects: [
        // eneme,
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
