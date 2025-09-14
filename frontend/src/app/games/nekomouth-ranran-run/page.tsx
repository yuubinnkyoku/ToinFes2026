import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Gamepad2, Play } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ねこまうすらんらんrun - ToinFes2026",
  description: "猫のキャラクターが駆け回るエンドレスランナーゲーム。障害物を避けながらできるだけ遠くまで走りましょう！桐陰祭2026で展示中。",
  openGraph: {
    title: "ねこまうすらんらんrun - ToinFes2026",
    description: "猫のキャラクターが駆け回るエンドレスランナーゲーム。障害物を避けながらできるだけ遠くまで走りましょう！",
    type: "website",
  },
};

// Game data - in a real app this would come from an API or database
const gameData = {
  id: "nekomouth-ranran-run",
  title: "ねこまうすらんらんrun",
  description: "猫のキャラクターが駆け回るエンドレスランナーゲーム。障害物を避けながらできるだけ遠くまで走りましょう！",
  longDescription: `
    可愛い猫のキャラクターを操作して、様々な障害物を避けながらできるだけ遠くまで走り続けるエンドレスランナーゲームです。
    シンプルな操作で誰でも楽しめますが、高得点を目指すには集中力と反射神経が必要です。
    
    ランダムに配置される障害物や敵キャラクターを避けながら、コインを集めてスコアを伸ばしましょう。
    スピードは徐々に上がっていくので、どこまで走り続けられるかチャレンジしてください！
  `,
  difficulty: "普通",
  controls: [
    "スペースキー または タップ: ジャンプ",
    "← → キー または スワイプ: 左右移動",
    "ESCキー: ポーズ"
  ],
  features: [
    "シンプルで直感的な操作",
    "段階的に上がる難易度",
    "スコアランキング機能",
    "可愛い猫キャラクター",
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
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="inline-flex items-center hover:opacity-80">
                <Image src="/logo.png" alt="TCA ロゴ" width={120} height={32} priority className="h-8 w-auto" />
                <span className="sr-only">ToinFes2026</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                Instagram
              </a>
              <a
                href="https://toinfes.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                公式サイト
              </a>
            </div>
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
              <h1 className="text-4xl font-bold text-foreground">{gameData.title}</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {gameData.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {gameData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Play Button */}
            <div className="text-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
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
                  {gameData.screenshots.map((screenshot, index) => (
                    <div
                      key={index}
                      className="aspect-video bg-muted rounded-md flex items-center justify-center"
                    >
                      <span className="text-muted-foreground">
                        スクリーンショット {index + 1}
                      </span>
                    </div>
                  ))}
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
            </div>
          </div>

          {/* Description */}
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

          {/* Play Again */}
          <div className="text-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
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
            <div className="flex justify-center space-x-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                Instagram
              </a>
              <a
                href="https://toinfes.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                公式サイト
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2026 TCA（Toin Computer Association） All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}