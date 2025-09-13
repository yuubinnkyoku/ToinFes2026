# Quickstart: ToinFes2026 (TCA Games)

> 実装基盤は後続フェーズで確定（静的 or Next.js）。ここでは両案の最小手順を示す。

## Option A: 静的サイト（最短）
1. `public/` にアセット、`index.html`/`games.html`/`nekomouth2.html` を配置
2. ルートに `style.css` を置き、リンクを調整
3. ローカルサーバ（例: `npx serve`）で表示確認

## Option B: Next.js + Tailwind + shadcn/ui
1. プロジェクト作成（Next.js 15 想定）
2. Tailwind 設定、shadcn/ui をセットアップ
3. `app/` or `pages/` にトップ/ゲーム一覧/詳細ページを実装
4. `public/` にスクリーンショット等を配置
5. `next build && next start` で確認

## 検証
- トップ→Games→詳細→プレイまでの導線
- モバイル幅のレイアウト崩れがないこと
- 画像の代替テキストが設定されていること
