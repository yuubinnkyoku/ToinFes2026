import OfficialLinks from "@/components/common/official-links";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { asset } from "@/lib/utils";
import { ArrowLeft, Gamepad2, Play } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import fs from "node:fs";
import path from "node:path";
import "./theme.css";

export const metadata: Metadata = {
  title: "ねこまうすらんらんrun - ToinFes2026",
  description: "ねこまうすらんらんrunをプレイできるページです。",
  openGraph: {
    title: "ねこまうすらんらんrun - ToinFes2026",
    description: "あのねこまうすがが駆け回る3Dゲーム。障害物を避けながらゴールまで走りましょう！",
    type: "website",
  },
};

// Game data - in a real app this would come from an API or database
const gameData = {
  id: "nekomouth-ranran-run",
  title: "ねこまうすらんらんrun",
  description: "ねこまうすらんらんrunをプレイできるページです。",
  longDescription: `
    あの「ねこまうすらんらんrun」がリニューアルして帰ってきた!という映像でおなじみのゲーム。 正直、筑附中にいた人以外は「あの」の意味がよくわかりません。
  `,
  difficulty: "普通",
  controls: [
    "上下左右またはWASD: 移動",
    "スペースキー: ジャンプ",
    "Eキー: スペシャル発動",
    "Rキー: スペシャル切り替え",
    "Qキー: ポーズ",
  ],
  features: [
    "シンプルで直感的な操作",
    "えらべる難易度",
    "タイム計測機能",
    "可愛い猫キャラクター(?)",
    "モバイル対応"
  ],
  screenshots: [
    "/games/nekomouth/screenshot1.png",
    "/games/nekomouth/screenshot2.png",
    "/games/nekomouth/screenshot3.png"
  ],
  tags: ["アクション", "エンドレス", "猫"],
  playUrl: "/games/nekomouth-ranran-run/play"
};

export default function GameDetailPage() {
  // 実在するスクリーンショットのみ表示（public 配下を確認）
  const existingScreenshots = gameData.screenshots.filter((p) => {
    const relative = p.replace(/^\//, ""); // 先頭スラッシュを除去
    const fullPath = path.join(process.cwd(), "public", relative);
    try {
      const stat = fs.statSync(fullPath);
      return stat.isFile();
    } catch {
      return false;
    }
  });

  return (
    <div className="min-h-screen bg-background game-theme-nekomouth">
      {/* Header */}
      <header className="border-b border-game/40">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="inline-flex items-center hover:opacity-80">
                <Image src={asset("/logo.png")} alt="TCA ロゴ" width={120} height={32} priority className="h-8 w-auto" />
                <span className="sr-only">ToinFes2026</span>
              </Link>
            </div>
            <OfficialLinks />
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Back Button */}
          <Button asChild variant="outline">
            <Link href="/games">
              <ArrowLeft className="mr-2 h-4 w-4" />
              ゲーム一覧に戻る
            </Link>
          </Button>

          {/* Game Header */}
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-game">{gameData.title}</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {gameData.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {gameData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-game/10 border border-game/40 px-3 py-1 text-sm font-medium text-game"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Play Button */}
            <div className="text-center">
              <Button asChild size="lg" variant="game" className="text-lg px-8 py-6">
                <Link href={gameData.playUrl}>
                  <Play className="mr-2 h-5 w-5" />
                  ゲームをプレイする
                </Link>
              </Button>
            </div>
          </div>

          {/* Game Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Screenshots */}
            <Card>
              <CardHeader>
                <CardTitle>スクリーンショット</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {existingScreenshots.length > 0 ? (
                    existingScreenshots.map((screenshot, index) => (
                      <div key={screenshot} className="relative aspect-video overflow-hidden rounded-md border">
                        <Image
                          src={asset(screenshot)}
                          alt={`${gameData.title} スクリーンショット ${index + 1}`}
                          fill
                          className="object-contain bg-muted"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                          priority={index === 0}
                        />
                      </div>
                    ))
                  ) : (
                    <div className="aspect-video bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                      スクリーンショットがまだ用意されていません
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Game Details */}
            <div className="space-y-6">
              {/* Controls */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Gamepad2 className="mr-2 h-5 w-5" />
                    操作方法
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {gameData.controls.map((control, index) => (
                      <li key={index} className="text-sm">
                        • {control}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle>ゲームの特徴</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {gameData.features.map((feature, index) => (
                      <li key={index} className="text-sm">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Difficulty */}
              <Card>
                <CardHeader>
                  <CardTitle>難易度</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">{gameData.difficulty}</span>
                    <span className="text-sm text-muted-foreground">
                      初心者から上級者まで楽しめます
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Description (moved to right column) */}
              <Card>
                <CardHeader>
                  <CardTitle>詳細説明</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-sm max-w-none">
                    {gameData.longDescription.split('\n').map((paragraph, index) => (
                      paragraph.trim() && (
                        <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                          {paragraph.trim()}
                        </p>
                      )
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Play Again */}
          <div className="text-center">
            <Button asChild size="lg" variant="game" className="text-lg px-8 py-6">
              <Link href={gameData.playUrl}>
                <Play className="mr-2 h-5 w-5" />
                ゲームをプレイする
              </Link>
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <OfficialLinks layout="footer" />
            <p className="text-sm text-muted-foreground">
              © 2026 TCA（Toin Computer Association） All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}