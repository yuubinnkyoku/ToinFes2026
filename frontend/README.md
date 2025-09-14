# ToinFes2026 Website

桐蔭祭2026における桐蔭コンピュータ部のゲーム展示サイトです。

## 概要

このウェブサイトは桐蔭コンピュータ部が制作したゲームを紹介・展示するためのサイトです。Next.js と shadcn/ui を使用して構築されています。

## 特徴

- **レスポンシブデザイン**: モバイル・タブレット・デスクトップに対応
- **ゲーム検索機能**: タイトルやタグでのリアルタイム検索
- **アクセシビリティ対応**: キーボード操作・スクリーンリーダー対応
- **高性能**: 静的サイト生成による高速表示
- **shadcn/ui**: モダンなUIコンポーネントライブラリを使用

## 技術スタック

- [Next.js 15](https://nextjs.org/) - React フレームワーク
- [TypeScript](https://www.typescriptlang.org/) - 型安全な開発
- [Tailwind CSS](https://tailwindcss.com/) - ユーティリティファーストCSS
- [shadcn/ui](https://ui.shadcn.com/) - 再利用可能なUIコンポーネント
- [Lucide React](https://lucide.dev/) - アイコンライブラリ

## 開発・実行

### 前提条件

- Node.js 18以上
- npm または yarn

### インストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

http://localhost:3000 でサイトにアクセスできます。

### ビルド

```bash
npm run build
```

### プロダクション実行

```bash
npm run start
```

## プロジェクト構造

```
src/
├── app/                    # Next.js App Router
│   ├── games/             # ゲーム関連ページ
│   ├── layout.tsx         # ルートレイアウト
│   └── page.tsx           # トップページ
├── components/            # 再利用可能なコンポーネント
│   ├── ui/               # shadcn/ui コンポーネント
│   └── games-content.tsx # ゲーム一覧コンポーネント
└── lib/                  # ユーティリティ関数
```

## 展示ゲーム

現在展示中のゲーム:

- **ねこまうすらんらんrun**: 猫のキャラクターが駆け回るエンドレスランナーゲーム

## 公開予定

桐蔭祭2026の開催時に公開予定です。

## ライセンス

© 2026 桐蔭コンピュータ部 All rights reserved.
