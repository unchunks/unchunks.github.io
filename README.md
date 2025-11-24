# unchunks ポートフォリオ

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

サイトのコンテンツは `src/content` ディレクトリ内のファイルを編集することで更新できます。

- **Profile**: `src/data.jsx` の `profile` セクション
- **Projects**: `src/content/projects/` ディレクトリ内の各ファイル
- **Posts**: `src/content/posts/` ディレクトリ

### 新しいプロジェクトの追加方法

1. `src/content/projects/` に新しいファイル（例: `mygame.jsx`）を作成します。
2. 既存のファイルを参考に、プロジェクトデータを記述・エクスポートします。
3. `src/data.jsx` を開き、作成したファイルをインポートして `projects` リストに追加します。

```javascript
import { mygame } from './content/projects/mygame';

// ...

projects: [
    // ...
    mygame,
],
```

### 新しい記事の追加方法

1. `src/content/posts/` に新しいファイルを作成します。
2. `src/content/posts/index.js` でそのファイルをインポートし、`posts` 配列に追加します。


保存すると、サイトに自動的に反映されます。

## デプロイ（公開）

このプロジェクトは、GitHub Actions を使用して GitHub Pages に自動デプロイされるように設定されています。
`main` ブランチにプッシュすると、自動的にデプロイ処理が開始されます。

### 注意点
GitHub Pages の設定で、デプロイ元（Source）が **"GitHub Actions"** になっていることを確認してください。
（設定 > Pages > Build and deployment > Source）
