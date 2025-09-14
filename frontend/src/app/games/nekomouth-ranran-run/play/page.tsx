import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Info, Volume2 } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ねこまうすらんらんrun をプレイ - ToinFes2026",
  description: "ねこまうすらんらんrunをプレイできるページです。猫のキャラクターを操作してエンドレスランを楽しもう！",
  openGraph: {
    title: "ねこまうすらんらんrun をプレイ - ToinFes2026",
    description: "ねこまうすらんらんrunをプレイできるページです。猫のキャラクターを操作してエンドレスランを楽しもう！",
    type: "website",
  },
};

export default function GamePlayPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-2xl font-bold text-primary hover:opacity-80">
                ToinFes2026
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button asChild variant="outline" size="sm">
                <Link href="/games/nekomouth-ranran-run">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  ゲーム詳細
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          {/* Game Title */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground">ねこまうすらんらんrun</h1>
          </div>

          {/* Notice Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/20">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-amber-800 dark:text-amber-200">
                  <Volume2 className="mr-2 h-5 w-5" />
                  音量にご注意ください
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-amber-700 dark:text-amber-300">
                  ゲームには効果音とBGMが含まれています。音量を調整してからプレイしてください。
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/20">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-blue-800 dark:text-blue-200">
                  <Info className="mr-2 h-5 w-5" />
                  操作方法
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  スペースキーでジャンプ、矢印キーで左右移動です。詳細は下記をご確認ください。
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Game Container */}
          <div className="max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/25">
                  <div className="text-center space-y-4">
                    <div className="text-6xl">🎮</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">ゲームエリア</h3>
                      <p className="text-muted-foreground mb-4">
                        ここにねこまうすらんらんrunのゲームが表示されます
                      </p>
                      <p className="text-sm text-muted-foreground">
                        実際の実装では、ここにゲームのiframeまたは<br />
                        HTML5 Canvasベースのゲームが埋め込まれます
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Controls Help */}
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>操作方法</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <div className="font-mono text-lg mb-2">SPACE</div>
                    <div className="text-muted-foreground">ジャンプ</div>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <div className="font-mono text-lg mb-2">← →</div>
                    <div className="text-muted-foreground">左右移動</div>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <div className="font-mono text-lg mb-2">ESC</div>
                    <div className="text-muted-foreground">ポーズ</div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    <strong>モバイル:</strong> 画面をタップでジャンプ、スワイプで左右移動
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tips */}
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>ゲームのコツ</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• 障害物をよく見て、早めにジャンプや移動の準備をしましょう</li>
                  <li>• コインを集めるとスコアが上がります</li>
                  <li>• 時間が経つにつれてスピードが上がるので集中力を保ちましょう</li>
                  <li>• 連続でコインを取ると、ボーナスポイントがもらえます</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Navigation */}
          <div className="flex justify-center space-x-4">
            <Button asChild variant="outline">
              <Link href="/games/nekomouth-ranran-run">ゲーム詳細に戻る</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/games">他のゲームを見る</Link>
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