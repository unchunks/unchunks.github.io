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
