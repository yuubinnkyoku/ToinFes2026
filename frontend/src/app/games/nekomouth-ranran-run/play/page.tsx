import OfficialLinks from "@/components/common/official-links";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
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
              <Link href="/" className="inline-flex items-center hover:opacity-80">
                <Image src="/logo.png" alt="TCA ロゴ" width={120} height={32} priority className="h-8 w-auto" />
                <span className="sr-only">ToinFes2026</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <OfficialLinks />
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


          {/* Game Container */}
          <div className="max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="h-[80vh] sm:h-[85vh] md:h-[90vh] bg-muted rounded-lg border border-muted-foreground/25 overflow-hidden relative">
                  {/* Fill container with iframe; avoid inner scrollbars if possible */}
                  <iframe
                    title="ねこまうすらんらんrun"
                    src="https://nekomouth.github.io/Nekomouth/"
                    className="absolute inset-0 h-full w-full block"
                    allowFullScreen
                    allow="fullscreen; gamepad"
                    referrerPolicy="no-referrer-when-downgrade"
                    scrolling="no"
                  />
                  {/* Fallback link for environments where the site cannot be embedded */}
                  <noscript>
                    <div className="absolute inset-0 flex items-center justify-center p-4 bg-background/80">
                      <p className="text-sm text-muted-foreground">
                        お使いの環境では埋め込みが許可されていない可能性があります。
                        <a className="underline ml-1" href="https://nekomouth.github.io/Nekomouth/" target="_blank" rel="noopener noreferrer">新しいタブで開く</a>
                      </p>
                    </div>
                  </noscript>
                </div>
                <div className="mt-3 text-right">
                  <a
                    href="https://nekomouth.github.io/Nekomouth/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground underline"
                  >
                    新しいタブで開く
                  </a>
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