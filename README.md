# Indie Dev Zero ポートフォリオ

React, Vite, Tailwind CSS で構築されたポートフォリオサイトです。

## 始め方

### 前提条件
- Node.js (v18 以降を推奨)

### インストール
1. リポジトリをクローンします:
   ```bash
   git clone https://github.com/unchunks/unchunks.github.io.git
   cd unchunks.github.io
   ```
2. 依存関係をインストールします:
   ```bash
   npm install
   ```

### 開発（ローカル実行）
ローカル開発サーバーを起動します:
```bash
npm run dev
```
ブラウザで [http://localhost:5173](http://localhost:5173) を開いて確認できます。

### ビルド
本番用にプロジェクトをビルドします:
```bash
npm run build
```
出力ファイルは `dist` ディレクトリに生成されます。

## カスタマイズ

`src/data.js` を編集するだけで、サイトのコンテンツを簡単に更新できます。
- **Profile**: 名前、役職、自己紹介、SNSリンク
- **Projects**: プロジェクトの追加・削除
- **Posts**: 新しいブログ記事の追加

### 新しい記事の追加方法

1. `src/data.js` を開きます。
2. `posts` 配列を見つけます。
3. 以下のような形式で、新しい記事データを追加してください（IDは他と被らないユニークな数字にしてください）。

```javascript
{
    id: 104, // 新しいID
    title: "新しい記事のタイトル",
    date: "2023-12-01",
    category: "DevLog",
    content: "ここに記事の本文を書きます..."
}
```

保存すると、サイトに自動的に反映されます。

## デプロイ（公開）

このプロジェクトは、GitHub Actions を使用して GitHub Pages に自動デプロイされるように設定されています。
`main` ブランチにプッシュすると、自動的にデプロイ処理が開始されます。

### 注意点
GitHub Pages の設定で、デプロイ元（Source）が **"GitHub Actions"** になっていることを確認してください。
（設定 > Pages > Build and deployment > Source）
